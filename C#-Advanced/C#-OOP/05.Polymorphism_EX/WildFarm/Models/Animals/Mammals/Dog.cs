using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm.Models.Animals.Mammals
{
    class Dog : Mammal
    {
        private const double weightModifier = 0.40;
        public Dog(string name, double weight) : base(name, weight)
        {
        }

        public Dog(string name, double weight, string livingRegion) : base(name, weight, livingRegion)
        {
        }

        public override string Sound()
        {
            return "Woof!";
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
