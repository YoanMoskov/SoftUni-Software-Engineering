using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ShoppingSpree.Core
{
    class Engine
    {
        private List<Product> products;
        private List<Person> people;
        public Engine()
        {
            this.people = new List<Person>();
            this.products = new List<Product>();
        }
        public void Run()
        {
            AddPeople();
            AddProducts();
            string command;
            while ((command = Console.ReadLine()) != "END")
            {
                List<string> cmndArgs = command
                    .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                    .ToList();
                string personName = cmndArgs[0];
                string productName = cmndArgs[1];

                try
                {
                    Person person = this.people
                        .First(x => x.Name == personName);
                    Product product = this.products
                        .First(x => x.Name == productName);
                    person.BuyProduct(product);
                    Console.WriteLine($"{person.Name} bought {product.Name}");
                }
                catch (InvalidOperationException ioe)
                {
                    Console.WriteLine(ioe.Message);
                }
            }
            foreach (var person in this.people)
            {
                Console.WriteLine(person);
            }
        }

        private void AddProducts()
        {
            List<string> productCost = Console
                            .ReadLine()
                            .Split(';', StringSplitOptions.RemoveEmptyEntries)
                            .ToList();
            for (int j = 0; j < productCost.Count; j++)
            {
                List<string> productArgs = productCost[j]
                    .Split('=', StringSplitOptions.RemoveEmptyEntries)
                    .ToList();
                string name = productArgs[0];
                decimal cost = decimal.Parse(productArgs[1]);
                Product product = new Product(name, cost);
                this.products.Add(product);
            }
        }

        private void AddPeople()
        {
            List<string> peopleMoney = Console
                            .ReadLine()
                            .Split(';', StringSplitOptions.RemoveEmptyEntries)
                            .ToList();
            for (int i = 0; i < peopleMoney.Count; i++)
            {
                List<string> personArgs = peopleMoney[i]
                    .Split('=', StringSplitOptions.RemoveEmptyEntries)
                    .ToList();
                string name = personArgs[0];
                decimal money = decimal.Parse(personArgs[1]);
                Person person = new Person(name, money);
                this.people.Add(person);
            }
        }
    }
}
