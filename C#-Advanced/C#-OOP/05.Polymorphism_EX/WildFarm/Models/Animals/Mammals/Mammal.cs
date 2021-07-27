using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm.Models.Animals.Mammals
{
    abstract class Mammal : Animal.Animal
    {
        private string livingRegion;

        public string LivingRegion
        {
            get => this.livingRegion;
            protected set
            {
                this.livingRegion = value;
            }
        }


        protected Mammal(string name, double weight) : base(name, weight)
        {

        }
        public Mammal(string name, double weight, string livingRegion)
            : this(name, weight)
        {
            this.LivingRegion = livingRegion;
        }

        public override string ToString()
        {
            return $"{this.GetType().Name} [{this.Name}, {this.Weight}, {this.LivingRegion}, {this.FoodEaten}]";
        }
    }
}
