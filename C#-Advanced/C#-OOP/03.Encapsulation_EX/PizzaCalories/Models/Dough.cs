using PizzaCalories.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PizzaCalories.Models
{
    class Dough
    {
        private const string INVALID_DOUGH = "Invalid type of dough.";
        private const string INVALID_WEIGHT = "Dough weight should be in the range [1..200].";
        private const double MIN_WEIGHT = 1;
        private const double MAX_WEIGHT = 200;
        private static List<string> ValidFlours = new List<string>() { "White", "Wholegrain" };
        private static List<string> ValidBT = new List<string>() { "Crispy", "Chewy", "Homemade" };

        private string flour;
        private string bakingTechnique;
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
                if (value < MIN_WEIGHT || value > MAX_WEIGHT)
                {
                    throw new Exception(INVALID_WEIGHT);
                }
                weight = value; 
            }
        }

        private string BakingTechnique
        {
            get { return bakingTechnique; }
            set 
            {
                if (!ValidBT.Any(x => x.ToLower() == value.ToLower()))
                {
                    throw new Exception(INVALID_DOUGH);
                }
                value = value.ToLower();
                value = value.First().ToString().ToUpper() + value.Substring(1);
                bakingTechnique = value;
            }
        }


        private string Flour
        {
            get { return flour; }
            set 
            {
                if (!ValidFlours.Any(x => x.ToLower() == value.ToLower()))
                {
                    throw new ArgumentException(INVALID_DOUGH);
                }
                value = value.ToLower();
                value = value.First().ToString().ToUpper() + value.Substring(1);
            flour = value;
            }
        }

        public Dough(string flour, string bakingTechnique, double weight)
        {
            this.Flour = flour;
            this.BakingTechnique = bakingTechnique;
            this.Weight = weight;
            this.Calories = GetCalories();
        }

        private double GetFlourModifier()
        {
            double flourModifier = 0;
            if (this.Flour == "White")
            {
                flourModifier = 1.5;
            }
            else if (this.Flour == "Wholegrain")
            {
                flourModifier = 1.0;
            }
            return flourModifier;
        }
        private double GetBTModifier()
        {
            double BTModifier = 0;
            if (this.BakingTechnique == "Crispy")
            {
                BTModifier = 0.9;
            }
            else if (this.BakingTechnique == "Chewy")
            {
                BTModifier = 1.1;
            }
            else if (this.BakingTechnique == "Homemade")
            {
                BTModifier = 1.0;
            }
            return BTModifier;
        }
        private double GetCalories()
        {
            double flourModifier = GetFlourModifier();
            double BTModifier = GetBTModifier();
            double totalCalories = (GlobalConstants.baseCalories * this.Weight) * flourModifier * BTModifier;
            return totalCalories;
        }

    }
}
