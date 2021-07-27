using System;
using System.Collections.Generic;
using System.Text;
using WildFarm.Models.Animal;
using WildFarm.Models.Animals.Birds;
using WildFarm.Models.Animals.Mammals;
using WildFarm.Models.Animals.Mammals.Felines;

namespace WildFarm.Factories
{
    class AnimalFactory
    {
        private Animal animal;

        public Animal CreateAnimal(string type, string name, double weight, double wingSize)
        {
            animal = null;
            if (type == "Hen")
            {
                animal = new Hen(name, weight, wingSize);
                
            }
            else if (type == "Owl")
            {
                animal = new Owl(name, weight, wingSize);
            }

            return animal;
        }

        public Animal CreateAnimal(string type, string name, double weight, string livingRegion, string breed)
        {
            animal = null;
            if (type == "Cat")
            {
                animal = new Cat(name, weight, livingRegion, breed);
            }
            else if (type == "Tiger")
            {
                animal = new Tiger(name, weight, livingRegion, breed);
            }

            return animal;
        }

        public Animal CreateAnimal(string type, string name, double weight, string livingRegion)
        {
            animal = null;
            if (type == "Dog")
            {
                animal = new Dog(name, weight, livingRegion);
            }
            else if (type == "Mouse")
            {
                animal = new Mouse(name, weight, livingRegion);
            }

            return animal;
        }
    }
}
