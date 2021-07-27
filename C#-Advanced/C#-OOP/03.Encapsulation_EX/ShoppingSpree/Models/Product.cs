using ShoppingSpree.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace ShoppingSpree
{
    class Product
    {
        private string name;
        private decimal cost;

        public decimal Cost
        {
            get { return cost; }
            set 
            {
                if (value < 0)
                {
                    throw new ArgumentException(GlobalConstants.InvalidMoneyExceptonMessage);
                }
                cost = value; 
            }
        }

        public string Name
        {
            get { return name; }
            set 
            {
                if (String.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentException(GlobalConstants.InvalidNameExMessage);
                }
                name = value; 
            }
        }
        public Product(string name, decimal cost)
        {
            this.Name = name;
            this.Cost = cost;
        }
        public override string ToString()
        {
            return this.Name;
        }
    }
}
