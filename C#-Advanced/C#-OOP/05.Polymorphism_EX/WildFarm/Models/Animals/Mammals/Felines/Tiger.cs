using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace WildFarm.Models.Animals.Mammals.Felines
{
    class Tiger : Feline
    {
        private const double weightModifier = 1.0;
        public Tiger(string name, double weight) : base(name, weight)
        {
        }

        public Tiger(string name, double weight, string livingRegion) : base(name, weight, livingRegion)
        {
        }

        public Tiger(string name, double weight, string livingRegion, string breed) : base(name, weight, livingRegion, breed)
        {
        }

        public override string Sound()
        {
            return "ROAR!!!";
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
