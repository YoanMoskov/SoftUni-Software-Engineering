using System;
using System.Collections.Generic;
using System.Text;
using WildFarm.Models.Animals.Mammals;

namespace WildFarm.Models.Animals.Mammals.Felines
{
    class Feline : Mammal
    {
        private string breed;

        public string Breed
        {
            get => this.breed;
            protected set
            {
                this.breed = value;
            }
        }


        public Feline(string name, double weight) 
            : base(name, weight)
        {
        }

        public Feline(string name, double weight, string livingRegion) 
            : base(name, weight, livingRegion)
        {
        }

        public Feline(string name, double weight, string livingRegion, string breed)
            : this(name, weight, livingRegion)
        {
            this.Breed = breed;
        }

        public override string Sound()
        {
            return null;
        }

        public override void Eat(string type, int quantity)
        {
            
        }
        public override string ToString()
        {
            return $"{this.GetType().Name} [{this.Name}, {this.Breed}, {this.Weight}, {this.LivingRegion}, {this.FoodEaten}]";
        }
    }
}
