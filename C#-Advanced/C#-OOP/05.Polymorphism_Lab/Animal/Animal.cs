using System;
using System.Collections.Generic;
using System.Text;

namespace Animals
{
    public class Animal
    {
        public string Name { get; protected set; }
        public string FavoriteFood { get; protected set; }

        protected Animal(string name, string favoriteFood)
        {
            Name = name;
            FavoriteFood = favoriteFood;
        }
        public virtual string ExplainSelf()
        {
            return $"I am {this.Name} and my favourite food is {this.FavoriteFood}";
        }

    }
}
