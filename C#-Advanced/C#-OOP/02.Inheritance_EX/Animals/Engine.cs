using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Animals
{
    class Engine
    {
        private readonly List<Animal> animals;
        public Engine()
        {
            this.animals = new List<Animal>();
        }
        public void Run()
        {
            string type;
            while ((type = Console.ReadLine()) != "Beast!")
            {
                List<string> animalArgs = Console.ReadLine()
                    .Split(' ')
                    .ToList();
                string name = animalArgs[0];
                int age = int.Parse(animalArgs[1]);
                string gender = GetGender(animalArgs);
                Animal animal;
                try
                {
                    animal = GetAnimal(type, animalArgs);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    continue;
                }
                this.animals.Add(animal);
            }
            PrintOuntput();
        }

        private void PrintOuntput()
        {
            foreach (Animal animal in animals)
            {
                Console.WriteLine(animal);
            }
        }

        private Animal GetAnimal(string type, List<string> animalArgs)
        {
            string name = animalArgs[0];
            int age = int.Parse(animalArgs[1]);
            string gender = GetGender(animalArgs);
            Animal animal = null;
            if (type == "Dog")
            {
                animal = new Dog(name, age, gender);
            }
            else if (type == "Cat")
            {
                animal = new Cat(name, age, gender);
            }
            else if (type == "Frog")
            {
                animal = new Frog(name, age, gender);
            }
            else if (type == "Kitten")
            {
                animal = new Kitten(name, age);
            }
            else if (type == "Tomcat")
            {
                animal = new Tomcat(name, age);
            }
            else
            {
                throw new ArgumentException("Invalid input!");
            }
            return animal;
        }
        private static string GetGender(List<string> animalArgs)
        {
            string gender = null;
            if (animalArgs.Count >= 3)
            {
                gender = animalArgs[2];
            }

            return gender;
        }
    }
}
