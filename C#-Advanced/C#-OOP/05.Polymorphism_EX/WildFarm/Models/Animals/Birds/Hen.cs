using System;
using System.Collections.Generic;
using System.Text;


namespace WildFarm.Models.Animals.Birds
{
    class Hen : Bird
    {
        private const double weightModifier = 0.35;
        public Hen(string name, double weight) : base(name, weight)
        {
        }

        public Hen(string name, double weight, double wingSize) : base(name, weight, wingSize)
        {
        }

        public override string Sound()
        {
            return "Cluck";   
        }

        public override void Eat(string type, int quantity)
        {
            this.Weight += weightModifier * quantity;
            this.FoodEaten += quantity;
        }
    }
}
