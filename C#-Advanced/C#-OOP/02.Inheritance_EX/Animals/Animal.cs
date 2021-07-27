using System;
using System.Collections.Generic;
using System.Text;

namespace Animals
{
    public abstract class Animal
    {
        private string name;
        private int age;
        private string gender;

        public Animal(string name, int age, string gender)
        {
            this.Name = name;
            this.Age = age;
            this.Gender = gender;
        }
        public string Gender
        {
            get { return gender; }
            set 
            {
                if (value != "Female" && value != "Male")
                {
                    throw new ArgumentException("Invalid input!");
                }
                gender = value; 
            }
        }

        public int Age
        {
            get { return age; }
            set 
            {
                if (value < 0)
                {
                    throw new ArgumentException("Invalid input!");
                }
                age = value; 
            }
        }

        public string Name
        {
            get { return name; }
            set 
            {
                if (String.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException("Invalid input!");
                }
                name = value; 
            }
        }
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine(this.GetType().Name);
            sb.AppendLine($"{this.Name} {this.Age} {this.Gender}");
            sb.AppendLine(this.ProduceSound());
            return sb.ToString().TrimEnd();
        }
        public abstract string ProduceSound();
    }
}
