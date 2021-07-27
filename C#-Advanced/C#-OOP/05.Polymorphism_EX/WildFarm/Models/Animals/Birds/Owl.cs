using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm.Models.Animals.Birds
{
    class Owl : Bird
    {
        private const double weightModifier = 0.25;
        public Owl(string name, double weight) : base(name, weight)
        {
        }

        public Owl(string name, double weight, double wingSize) : base(name, weight, wingSize)
        {
        }

        public override string Sound()
        {
            return "Hoot Hoot";
        }

        public override void Eat(string type, int quantity)
        {
            if (type == "Meat")
            {
                this.Weight += quantity * weightModifier;
                this.FoodEaten += quantity;
            }
            else
            {
                throw new ArgumentException(String.Format(ExceptionMessages.ExceptionMessages.INVALID_FOOD, this.GetType().Name, type));
            }
        }
    }
}
