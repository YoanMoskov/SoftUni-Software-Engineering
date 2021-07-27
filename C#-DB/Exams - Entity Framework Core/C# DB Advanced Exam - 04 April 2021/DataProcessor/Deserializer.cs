using Newtonsoft.Json;
using System.Globalization;
using System.Linq;
using System.Text;
using TeisterMask.Data.Models;
using TeisterMask.Data.Models.Enums;
using TeisterMask.DataProcessor.ImportDto;

namespace TeisterMask.DataProcessor
{
    using Data;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using ValidationContext = System.ComponentModel.DataAnnotations.ValidationContext;

    public class Deserializer
    {
        private const string ErrorMessage = "Invalid data!";

        private const string SuccessfullyImportedProject
            = "Successfully imported project - {0} with {1} tasks.";

        private const string SuccessfullyImportedEmployee
            = "Successfully imported employee - {0} with {1} tasks.";

        public static string ImportProjects(TeisterMaskContext context, string xmlString)
        {
            var projectsDto = XmlConverter.Deserializer<ImportProjectModel>(xmlString, "Projects");

            var projects = new List<Project>();

            var sb = new StringBuilder();

            foreach (var project in projectsDto)
            {
                var isOpenDateValid = DateTime.TryParseExact(project.OpenDate, format: "dd/MM/yyyy",
                    CultureInfo.InvariantCulture, DateTimeStyles.None, out DateTime openDate);

                var isDueDateValid = DateTime.TryParseExact(project.DueDate, format: "dd/MM/yyyy",
                    CultureInfo.InvariantCulture, DateTimeStyles.None, out DateTime dueDate);

                if (!IsValid(project) || !isOpenDateValid)
                {
                    sb.AppendLine("Invalid data!");
                    continue;
                }

                Project projectModel = null;
                if (isDueDateValid)
                {
                    projectModel = new Project()
                    {
                        Name = project.Name,
                        OpenDate = openDate,
                        DueDate = dueDate
                    };
                }
                else
                {
                    projectModel = new Project()
                    {
                        Name = project.Name,
                        OpenDate = openDate,
                        DueDate = null
                    };
                }

                foreach (var task in project.Tasks)
                {
                    var isTaskOpenDateValid = DateTime.TryParseExact(task.OpenDate, format: "dd/MM/yyyy",
                        CultureInfo.InvariantCulture, DateTimeStyles.None, out DateTime taskOpenDate);

                    var isTaskDueDateValid = DateTime.TryParseExact(task.DueDate, format: "dd/MM/yyyy",
                        CultureInfo.InvariantCulture, DateTimeStyles.None, out DateTime taskDueDate);

                    if (isDueDateValid)
                    {
                        if (taskDueDate > dueDate)
                        {
                            sb.AppendLine("Invalid data!");
                            continue;
                        }
                    }

                    if (!IsValid(task) || taskOpenDate < openDate)
                    {
                        sb.AppendLine("Invalid data!");
                        continue;
                    }

                    Task taskModel = new Task()
                    {
                        Name = task.Name,
                        OpenDate = taskOpenDate,
                        DueDate = taskDueDate,
                        ExecutionType = Enum.Parse<ExecutionType>(task.ExecutionType),
                        LabelType = Enum.Parse<LabelType>(task.LabelType)
                    };
                    projectModel.Tasks.Add(taskModel);
                }

                sb.AppendLine(
                    $"Successfully imported project - {projectModel.Name} with {projectModel.Tasks.Count} tasks.");
                projects.Add(projectModel);
            }

            context.AddRange(projects);
            context.SaveChanges();

            return sb.ToString().TrimEnd();
        }

        public static string ImportEmployees(TeisterMaskContext context, string jsonString)
        {
            var employeesDto = JsonConvert.DeserializeObject<ImportEmployeeModel[]>(jsonString);

            var validTasks = context.Tasks.ToList();

            var sb = new StringBuilder();

            var employees = new List<Employee>();

            foreach (var emp in employeesDto)
            {
                if (!IsValid(emp))
                {
                    sb.AppendLine("Invalid data!");
                    continue;
                }

                var employee = new Employee()
                {
                    Username = emp.Username,
                    Email = emp.Email,
                    Phone = emp.Phone
                };

                foreach (var task in emp.Tasks.Distinct())
                {
                    Task taskModel = validTasks.FirstOrDefault(x => task == x.Id);
                    if (taskModel == null)
                    {
                        sb.AppendLine("Invalid data!");
                        continue;
                    }
                    var employeeTaskModel = new EmployeeTask()
                    {
                        Employee = employee,
                        Task = taskModel
                    };
                    employee.EmployeesTasks.Add(employeeTaskModel);
                }

                sb.AppendLine(
                    $"Successfully imported employee - {employee.Username} with {employee.EmployeesTasks.Count} tasks.");
                employees.Add(employee);
            }

            context.AddRange(employees);
            context.SaveChanges();

            return sb.ToString().TrimEnd();
        }

        private static bool IsValid(object dto)
        {
            var validationContext = new ValidationContext(dto);
            var validationResult = new List<ValidationResult>();

            return Validator.TryValidateObject(dto, validationContext, validationResult, true);
        }
    }
}