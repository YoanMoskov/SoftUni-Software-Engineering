using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm.Models.Animals.Mammals
{
    class Mouse : Mammal
    {
        public const double weightModifier = 0.10;
        public Mouse(string name, double weight) : base(name, weight)
        {
        }

        public Mouse(string name, double weight, string livingRegion) : base(name, weight, livingRegion)
        {
        }

        public override string Sound()
        {
            return "Squeak";
        }

        public override void Eat(string type, int quantity)
        {
            if (type == "Vegetable" || type == "Fruit")
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
