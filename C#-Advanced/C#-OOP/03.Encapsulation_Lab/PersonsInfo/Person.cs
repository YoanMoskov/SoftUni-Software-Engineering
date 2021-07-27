using System;
using System.Collections.Generic;
using System.Text;

namespace PersonsInfo
{
    public class Person
    {
        private string firstName;
        private string lastName;
        private int age;
        private decimal salary;
        public string FirstName
        {
            get
            {
                return this.firstName;
            }
            private set
            {
                if (value.Length >= 3)
                {
                    this.firstName = value;
                }
                else
                {
                    throw new ArgumentException("First name cannot contain fewer than 3 symbols!");
                }
            }
        }

        public string LastName 
        {
            get
            {
                return this.lastName;
            }
            private set 
            {
                if (value.Length >= 3)
                {
                    this.lastName = value;
                }
                else
                {
                    throw new ArgumentException("Last name cannot contain fewer than 3 symbols!");
                }
            }
        }

        public int Age {
            get
            {
                return this.age;
            }
            private set 
            {
                if (value > 0)
                {
                    this.age = value;
                }
                else
                {
                    throw new ArgumentException("Age cannot be zero or a negative integer!");
                }
            }
        }

        public decimal Salary 
        {
            get
            {
               return this.salary;
            }
            private set
            {
                if (value >= 460m)
                {
                    this.salary = value;
                }
                else
                {
                    throw new ArgumentException("Salary cannot be less than 460 leva!");
                }
            } 
        }

        public Person(string firstName, string lastName, int age, decimal salary)
        {
            FirstName = firstName;
            LastName = lastName;
            Age = age;
            Salary = salary;
        }
        public void IncreaseSalary(decimal percentage)
        {
            decimal salaryMod = percentage;
            if (this.Age < 30)
            {
                salaryMod = salaryMod / 2;
            }
            Salary += Salary * salaryMod / 100;
        }
        public override string ToString()
        {
            return $"{this.FirstName} {this.LastName} receives {this.Salary:F2} leva.";
        }
    }
}
