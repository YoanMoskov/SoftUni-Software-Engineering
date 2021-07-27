using PersonInfo.Contracts;
using PersonInfo.IO.Contracts;
using PersonInfo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;

namespace PersonInfo.Core
{
    class Engine : IEngine
    {
        private IReader reader;
        private IWriter writer;
        private List<Citizen> citizens;
        private List<Rebel> rebels;

        public Engine()
        {
            citizens = new List<Citizen>();
            rebels = new List<Rebel>();
        }
        public Engine(IReader reader, IWriter writer)
           : this()
        {
            this.reader = reader;
            this.writer = writer;
        }

        public void Run()
        {
            int n = int.Parse(reader.ReadLine());
            for (int i = 0; i < n; i++)
            {
                List<string> personData = reader
                    .ReadLine()
                    .Split(' ')
                    .ToList();
                if (personData.Count == 4)
                {
                    Citizen citizen = new Citizen(personData[0], int.Parse(personData[1]), personData[2], personData[3]);
                    citizens.Add(citizen);
                }
                else if (personData.Count == 3)
                {
                    Rebel rebel = new Rebel(personData[0], int.Parse(personData[1]), personData[2]);
                    rebels.Add(rebel);
                }
            }
            string command;
            while ((command = reader.ReadLine()) != "End")
            {
                string name = command;
                if (citizens.Any(x => x.Name == name))
                {
                    Citizen citizen = citizens.First(x => x.Name == name);
                    citizen.BuyFood();
                }
                else if (rebels.Any(x => x.Name == name))
                {
                    Rebel rebel = rebels.First(x => x.Name == name);
                    rebel.BuyFood();
                }
            }
            int totalFood = 0;
            foreach (var rebel in rebels)
            {
                totalFood += rebel.Food;
            }
            foreach (var citizen in citizens)
            {
                totalFood += citizen.Food;
            }
            Console.WriteLine(totalFood);
        }
    }
}
