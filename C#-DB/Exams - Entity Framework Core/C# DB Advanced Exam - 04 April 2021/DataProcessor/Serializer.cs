using System.Globalization;
using System.Linq;
using Newtonsoft.Json;
using TeisterMask.DataProcessor.ExportDto;

namespace TeisterMask.DataProcessor
{
    using System;

    using Data;

    using Formatting = Newtonsoft.Json.Formatting;

    public class Serializer
    {
        public static string ExportProjectWithTheirTasks(TeisterMaskContext context)
        {
            var projects = context.Projects
                .Where(x => x.Tasks.Any())
                .ToArray()
                .Select(x => new ExportProjectsWithTasksModel()
                {
                    TasksCount = x.Tasks.Count,
                    ProjectName = x.Name,
                    HasEndDate = x.DueDate == null ? "No" : "Yes",
                    Tasks = x.Tasks
                        .Select(x => new ExportTaskModel()
                        {
                            Name = x.Name,
                            Label = x.LabelType.ToString()
                        })
                        .OrderBy(x => x.Name)
                        .ToArray()
                })
                .OrderByDescending(x => x.Tasks.Length)
                .ThenBy(x => x.ProjectName)
                .ToArray();

            var result = XmlConverter.Serialize<ExportProjectsWithTasksModel>(projects, "Projects");

            return result;
        }

        public static string ExportMostBusiestEmployees(TeisterMaskContext context, DateTime date)
        {
            var employees = context.Employees
                .Where(x => x.EmployeesTasks.Any(x => x.Task.OpenDate >= date))
                .ToArray()
                .Select(x => new
                {
                    Username = x.Username,
                    Tasks = x.EmployeesTasks
                        .Select(x => x.Task)
                        .Where(x => x.OpenDate >= date)
                        .OrderByDescending(x => x.DueDate)
                        .ThenBy(x => x.Name)
                        .Select(x => new
                        {
                            TaskName = x.Name,
                            OpenDate = x.OpenDate.ToString("d", CultureInfo.InvariantCulture),
                            DueDate = x.DueDate.ToString("d", CultureInfo.InvariantCulture),
                            LabelType = x.LabelType.ToString(),
                            ExecutionType = x.ExecutionType.ToString()
                        })
                })
                .OrderByDescending(x => x.Tasks.Count())
                .ThenBy(x => x.Username)
                .Take(10)
                .ToArray();

            var result = JsonConvert.SerializeObject(employees, Formatting.Indented);

            return result;
        }
    }
}