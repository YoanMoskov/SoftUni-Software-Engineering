using System;
using System.Collections.Generic;
using System.Diagnostics.Tracing;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using WildFarm.Core.Contracts;
using WildFarm.Factories;
using WildFarm.IO.Contracts;
using WildFarm.Models.Animal;
using WildFarm.Models.Animals.Birds;
using WildFarm.Models.Animals.Mammals;
using WildFarm.Models.Animals.Mammals.Felines;
using WildFarm.Models.Food;

namespace WildFarm.Core
{
    class Engine : IEngine
    {
        private IReader reader;
        private IWriter writer;

        private List<Animal> animals;
        private Animal animal;
        private Food food;
        private AnimalFactory animalFactory;

        public Engine()
        {
            this.animalFactory = new AnimalFactory();
            this.animals = new List<Animal>();
        }

        public Engine(IReader reader, IWriter writer)
            : this()
        {
            this.reader = reader;
            this.writer = writer;
        }

        public void Run()
        {
            List<string> felineList = new List<string>() { "Cat", "Tiger" };
            List<string> birdList = new List<string>() { "Hen", "Owl" };
            List<string> mammalList = new List<string>() { "Mouse", "Dog" };
            List<string> foodList = new List<string>() { "Vegetable", "Fruit", "Meat", "Seeds" };
            string command;
            while ((command = reader.ReadLine()) != "End")
            {
                List<string> dataList = command
                    .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                    .ToList();
                string type = dataList[0];
                string objectName = dataList[1];
                double weight = Double.Parse(dataList[2]);

                try
                {
                    List<string> foodDataList = reader
                    .ReadLine()
                    .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                    .ToList();
                    string typeFood = foodDataList[0];
                    int quantity = int.Parse(foodDataList[1]);
                    if (birdList.Contains(type))
                    {
                        double wingSize = double.Parse(dataList[3]);

                        animal = animalFactory.CreateAnimal(type, objectName, weight, wingSize);
                        animals.Add(animal);
                        Console.WriteLine(animal.Sound());
                        animal.Eat(typeFood, quantity);
                    }
                    else if (felineList.Contains(type))
                    {
                        string livingRegion = dataList[3];
                        string breed = dataList[4];
                        animal = animalFactory.CreateAnimal(type, objectName, weight, livingRegion, breed);
                        animals.Add(animal);
                        Console.WriteLine(animal.Sound());
                        animal.Eat(typeFood, quantity);
                    }

                    else if (mammalList.Contains(type))
                    {
                        string livingRegion = dataList[3];
                        animal = animalFactory.CreateAnimal(type, objectName, weight, livingRegion);
                        animals.Add(animal);
                        Console.WriteLine(animal.Sound());
                        animal.Eat(typeFood, quantity);
                    }
                }
                catch (ArgumentException ae)
                {
                    Console.WriteLine(ae.Message);
                }

            }


            foreach (var animal in animals)
            {
                Console.WriteLine(animal);
            }
        }
    }
}
