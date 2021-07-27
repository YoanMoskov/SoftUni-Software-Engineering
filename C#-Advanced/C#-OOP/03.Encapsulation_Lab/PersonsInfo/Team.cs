using System;
using System.Collections.Generic;
using System.Text;

namespace PersonsInfo
{
    public class Team
    {
        private string name;
        private List<Person> firstTeam;
        private List<Person> reserveTeam;

        public IReadOnlyList<Person> ReserveTeam
        {
            get { return reserveTeam.AsReadOnly(); }
        }


        public IReadOnlyList<Person> FirstTeam
        {
            get { return firstTeam.AsReadOnly(); }
        }


        public string Name
        {
            get { return name; }
            set { name = value; }
        }
        public Team(string name)
        {
            this.name = name;
            this.firstTeam = new List<Person>();
            this.reserveTeam = new List<Person>();
        }
        public void AddPlayer(Person person)
        {
            if (person.Age < 40)
            {
                firstTeam.Add(person);
            }
            else
            {
                reserveTeam.Add(person);
            }
        }
        public void GetFTCountMessage()
        {
            Console.WriteLine($"First team has {firstTeam.Count} players.");
        }
        public void GetRTCountMessage()
        {
            Console.WriteLine($"Reserve team has {reserveTeam.Count} players.");
        }
    }
}
