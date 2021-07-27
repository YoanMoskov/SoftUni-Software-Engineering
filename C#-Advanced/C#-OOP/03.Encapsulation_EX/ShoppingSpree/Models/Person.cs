using ShoppingSpree.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace ShoppingSpree
{
    class Person
    {
        private string name;
        private decimal money;
        private List<Product> products;

        public IReadOnlyList<Product> Products
        {
            get { return products.AsReadOnly(); }
        }

        public decimal Money
        {
            get { return money; }
            private set 
            {
                if (value < 0m)
                {
                    throw new ArgumentException(GlobalConstants.InvalidMoneyExceptonMessage);
                }
                money = value; 
            }
        }

        public string Name
        {
            get { return name; }
            private set 
            {
                if (String.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException(GlobalConstants.InvalidNameExMessage);
                }
                name = value; 
            }
        }
        public Person(string name, decimal money)
        {
            this.products = new List<Product>();
            this.Name = name;
            this.Money = money;
        }
        public void BuyProduct(Product product)
        {
            if (this.Money >= product.Cost)
            {
                this.Money -= product.Cost;
                this.products.Add(product);
            }
            else
            {
                throw new InvalidOperationException(String.Format(GlobalConstants.InsufficientMoneyExceptionMessage, this.Name, product.Name));
            }
        }
        public override string ToString()
        {
            string productsOutput = this.products.Count > 0 ?
                String.Join(", ", this.products) : "Nothing bought";
            return $"{this.Name} - {productsOutput}";
        }
    }
}
