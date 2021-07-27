using System;
using System.Collections.Generic;
using System.Text;

namespace PizzaCalories.Models
{
    class Pizza
    {
        private const string INVALID_NAME = "Pizza name should be between 1 and 15 symbols.";
        private const int MIN_NAME_LENGTH = 1;
        private const int MAX_NAME_LENGTH = 15;

        private string name;
        private Dough dough;
        private List<Topping> toppings;
        private double calories;

        public double Calories
        {
            get { return calories; }
        }

        public int ToppingsCount
        {
            get
            {
                return toppings.Count;
            }
        }

        public Dough Dough
        {
            set { dough = value; }
        }


        private string Name
        {
            get { return name; }
            set 
            {
                if (String.IsNullOrEmpty(value) || value.Length < MIN_NAME_LENGTH || value.Length > MAX_NAME_LENGTH)
                {
                    throw new Exception(INVALID_NAME);
                }
                name = value; 
            }
        }
        public Pizza()
        {
            toppings = new List<Topping>();
        }
        public Pizza(string name, Dough dough)
            : this()
        {
            this.Name = name;
            this.Dough = dough;
        }
        private double GetCalories()
        {
            double totalCalories = 0;
            double doughCalories = dough.Calories;
            double toppingsCalories = 0;
            foreach (var topping in toppings)
            {
                toppingsCalories += topping.Calories;
            }
            totalCalories = doughCalories + toppingsCalories;
            return calories = totalCalories;
        }
        public void AddTopping(Topping topping)
        {
            toppings.Add(topping);
            if (ToppingsCount > 10)
            {
                throw new ArgumentException("Number of toppings should be in range [0..10].");
            }
        }
        public override string ToString()
        {
            return $"{this.Name} - {GetCalories():f2} Calories.";
        }
    }
}
