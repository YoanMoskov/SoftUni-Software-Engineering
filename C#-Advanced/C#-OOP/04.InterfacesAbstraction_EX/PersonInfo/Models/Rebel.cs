using PersonInfo.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace PersonInfo.Models
{
    class Rebel : IPerson, IBuyer
    {
        private string name;
        public string Name 
        {
            get => this.name;
            set
            {
                this.name = value;
            } 
        }
        private int age;
        public int Age
        {
            get => this.age;
            set
            {
                this.age = value;
            }
        }
        private string group;

        public string Group
        {
            get => this.group;
            set
            {
                this.group = value;
            }
        }
        private int food;
        public int Food
        {
            get => this.food;
            set
            {
                this.food = value;
            }
        }
        public Rebel(string name, int age, string group)
        {
            this.Name = name;
            this.Age = age;
            this.Group = group;
        }

        public void BuyFood()
        {
            food += 5;
        }
    }
}
