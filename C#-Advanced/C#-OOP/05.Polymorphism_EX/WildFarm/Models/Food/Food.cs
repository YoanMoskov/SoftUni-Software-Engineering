using System;
using System.Collections.Generic;
using System.Text;

namespace WildFarm.Models.Food
{
    abstract class Food
    {
        private int quantity;

        public int Quantity
        {
            get => this.quantity;
            protected set
            {
                this.quantity = value;
            }
        }

        public Food(int quantity)
        {
            this.Quantity = quantity;
        }
    }
}
