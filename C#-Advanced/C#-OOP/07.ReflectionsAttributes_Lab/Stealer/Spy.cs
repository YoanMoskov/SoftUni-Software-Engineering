using System;
using System.Linq;
using System.Reflection;
using System.Text;

namespace Stealer
{
    class Spy
    {
        public string StealFieldInfo(string nameOfClass, params string[] nameOfFields)
        {
            StringBuilder sb = new StringBuilder();
            var classType = Type.GetType($"Stealer.{nameOfClass}");
            var fields = classType.GetFields(BindingFlags.Instance | BindingFlags.NonPublic | BindingFlags.Static | BindingFlags.Public);
            sb.AppendLine($"Class under investigation {nameOfClass}");
            Object classInstance = Activator.CreateInstance(classType, new object?[] { });

            foreach (var field in fields.Where(x => nameOfFields.Contains(x.Name)))
            {
                sb.AppendLine($"{field.Name} = {field.GetValue(classInstance)}");
            }

            return sb.ToString().TrimEnd();
        }

        public string AnalyzeAcessModifiers(string className)
        {
            Type type = Type.GetType($"Stealer.{className}");
            FieldInfo[] fields = type.GetFields(BindingFlags.Public | BindingFlags.Static | BindingFlags.Instance);
            MethodInfo[] getMethodsPrivate = type.GetMethods(BindingFlags.Instance | BindingFlags.NonPublic);
            MethodInfo[] getMethodPublic = type.GetMethods(BindingFlags.Instance | BindingFlags.Public);
            StringBuilder sb = new StringBuilder();
            foreach (var field in fields)
            {
                sb.AppendLine($"{field.Name} must be private!");
            }

            foreach (var method in getMethodsPrivate.Where(x => x.Name.StartsWith("get")))
            {
                sb.AppendLine($"{method.Name} have to be public!");
            }

            foreach (var methodPublic in getMethodPublic.Where(x => x.Name.StartsWith("set")))
            {
                sb.AppendLine($"{methodPublic.Name} have to be private!");
            }

            return sb.ToString().Trim();
        }

        public string RevealPrivateMethods(string className)
        {
            Type type = Type.GetType($"Stealer.{className}");
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"All Private Methods of Class: {className}");
            sb.AppendLine($"Base Class: {type.BaseType.Name}");
            MethodInfo[] privateMethods = type.GetMethods(BindingFlags.NonPublic | BindingFlags.Instance);
            foreach (var privateMethod in privateMethods)
            {
                sb.AppendLine($"{privateMethod.Name}");
            }

            return sb.ToString().Trim();
        }

        public string CollectGettersAndSetters(string className)
        {
            Type type = Type.GetType($"Stealer.{className}");
            MethodInfo[] allMethodInfos = type.GetMethods(BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Static);
            StringBuilder sb = new StringBuilder();
            foreach (var method in allMethodInfos.Where(x => x.Name.StartsWith("set") || x.Name.StartsWith("get")))
            {
                if (method.Name.StartsWith("set"))
                {
                    sb.AppendLine($"{method.Name} will set field of {method.ReturnType}");
                }
                else if (method.Name.StartsWith("get"))
                {
                    sb.AppendLine($"{method.Name} will return {method.ReturnType}");
                }
            }

            return sb.ToString().Trim();
        }
    }
}
