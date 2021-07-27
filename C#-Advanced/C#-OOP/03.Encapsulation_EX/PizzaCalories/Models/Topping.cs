using PizzaCalories.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PizzaCalories.Models
{
    class Topping
    {
        private const string INVALID_TOPPING = "Cannot place {0} on top of your pizza.";
        private const string INVALID_WEIGHT = "{0} weight should be in the range [1..50].";
        private const double MIN_TOPPING_WEIGHT = 1;
        private const double MAX_TOPPING_WEIGHT = 50;
        private static List<string> ValidType = new List<string>() { "Meat", "Veggies", "Cheese", "Sauce" };

        private string type;
        private double weight;
        private double calories;

        public double Calories
        {
            get { return calories; }
            private set { calories = value; }
        }


        private double Weight
        {
            get { return weight; }
            set 
            {
                if (value < MIN_TOPPING_WEIGHT || value > MAX_TOPPING_WEIGHT)
                {
                    throw new ArgumentException(String.Format(INVALID_WEIGHT, this.Type));
                }    
                weight = value; 
            }
        }

        private string Type
        {
            get { return type; }
            set 
            {
                if (!ValidType.Any(x => x.ToLower() == value.ToLower()))
                {
                    throw new ArgumentException(String.Format(INVALID_TOPPING, value));
                }
                value = value.ToLower();
                value = value.First().ToString().ToUpper() + value.Substring(1);
                type = value; 
            }
        }
        public Topping(string type, double weight)
        {
            this.Type = type;
            this.Weight = weight;
            this.Calories = GetCalories();
        }
        private double GetTypeModifier()
        {
            double typeModifier = 0;
            if (this.Type == "Meat")
            {
                typeModifier = 1.2;
            }
            else if (this.Type == "Veggies")
            {
                typeModifier = 0.8;
            }
            else if (this.Type == "Cheese")
            {
                typeModifier = 1.1;
            }
            else if (this.Type == "Sauce")
            {
                typeModifier = 0.9;
            }
            return typeModifier;
        }
        private double GetCalories()
        {
            double typeModifier = GetTypeModifier();
            double totalCalories = (GlobalConstants.baseCalories * this.Weight) * typeModifier;
            return totalCalories;
        }
    }
}
