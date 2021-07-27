using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm.Models.Animals.Birds
{
    abstract class Bird : Animal.Animal
    {
        private double wingSize;

        public double WingSize
        {
            get => this.wingSize;
            protected set
            {
                this.wingSize = value;
            }
        }


        protected Bird(string name, double weight) : base(name, weight)
        {

        }
        public Bird(string name, double weight, double wingSize)
            : this(name, weight)
        {
            this.WingSize = wingSize;
        }

        public override string ToString()
        {
            return $"{this.GetType().Name} [{this.Name}, {this.WingSize}, {this.Weight}, {this.FoodEaten}]";
        }
    }
}
