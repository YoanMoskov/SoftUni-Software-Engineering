using PersonInfo.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace PersonInfo.Models
{
    class Pet : IBirthable
    {
        private string name;

        public string Name
        {
            get { return name; }
            set { name = value; }
        }
        private string birthdate;
        public string Birthdate 
        {
            get => this.birthdate;
            set
            {
                this.birthdate = value;
            }
        }
        public Pet(string name, string birthdate)
        {
            this.Name = name;
            this.Birthdate = birthdate;
        }
    }
}
