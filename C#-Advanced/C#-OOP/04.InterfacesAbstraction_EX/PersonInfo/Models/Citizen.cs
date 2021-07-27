using PersonInfo.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace PersonInfo.Models
{
    public class Citizen : IPerson, IIdentifiable, IBirthable, IBuyer
    {
        private string name;

        public string Name
        {
            get { return name; }
            set { name = value; }
        }
        private int age;

        public int Age
        {
            get { return age; }
            set { age = value; }
        }
        private string id;

        public string Id
        {
            get { return id; }
            set { id = value; }
        }
        private string bitrhdate;
        public string Birthdate 
        {
            get => this.bitrhdate;
            set
            {
                this.bitrhdate = value;
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

        public Citizen(string name, int age, string id, string birthdate)
        {
            this.Name = name;
            this.Age = age;
            this.Id = id;
            this.Birthdate = birthdate;
        }

        public void BuyFood()
        {
            this.food += 10;
        }
    }
}
