using PizzaCalories.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PizzaCalories.Core
{
    class Engine
    {
        private Pizza pizza;
        public Engine()
        {

        }
        public void Run()
        {
            double totalCalories = 0;
            List<string> pizzaArguments = Console
                .ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .ToList();
            string pizzaName = pizzaArguments[1];
            List<string> doughArguments = Console
                .ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .ToList();
            string flour = doughArguments[1];
            string BT = doughArguments[2];
            double weight = double.Parse(doughArguments[3]);
            try
            {
                Dough dough = new Dough(flour, BT, weight);
                pizza = new Pizza(pizzaName, dough);
            }
            catch (Exception ae)
            {
                Console.WriteLine(ae.Message);
            }
            string command;
            while ((command = Console.ReadLine()) != "END")
            {
                List<string> toppingArguments = command
                    .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                    .ToList();
                string toppingType = toppingArguments[1];
                double weightTopping = double.Parse(toppingArguments[2]);
                try
                {
                    Topping topping = new Topping(toppingType, weightTopping);
                    pizza.AddTopping(topping);
                }
                catch (Exception ae)
                {
                    throw ae;
                }
            }
            Console.WriteLine(pizza);
        }
    }

}
