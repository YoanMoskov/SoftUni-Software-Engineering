﻿using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm.Models.Animals.Mammals.Felines
{
    class Cat : Feline
    {
        private const double weightModifier = 0.30;
        public Cat(string name, double weight) : base(name, weight)
        {
        }

        public Cat(string name, double weight, string livingRegion) : base(name, weight, livingRegion)
        {
        }

        public Cat(string name, double weight, string livingRegion, string breed) : base(name, weight, livingRegion, breed)
        {
        }

        public override string Sound()
        {
            return "Meow";
        }

        public override void Eat(string type, int quantity)
        {
            if (type == "Vegetable" || type == "Meat")
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
