using PizzaCalories.Core;
using PizzaCalories.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PizzaCalories
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                Engine engine = new Engine();
                engine.Run();
            }
            catch (ArgumentException ae)
            {
                Console.WriteLine(ae.Message);
            }
        }
    }
}
