using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm.Models.Animal
{
    abstract class Animal
    {
        private string name;
        private double weight;
        private int foodEaten;

        public string Name
        {
            get => this.name;
            protected set
            {
                this.name = value;
            }
        }

        public double Weight
        {
            get => this.weight;
            protected set
            {
                this.weight = value;
            }
        }

        public int FoodEaten
        {
            get => this.foodEaten;
            protected set
            {
                this.foodEaten = value;
            }
        }

        public Animal(string name, double weight)
        {
            this.Name = name;
            this.Weight = weight;
        }

        public abstract string Sound();

        public abstract void Eat(string type, int quantity);
        public abstract override string ToString();

    }
}
