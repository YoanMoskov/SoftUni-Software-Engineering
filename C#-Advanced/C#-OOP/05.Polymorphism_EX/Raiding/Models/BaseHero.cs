using System;
using System.Collections.Generic;
using System.Text;

namespace Raiding.Models
{
    abstract class BaseHero
    {
        private string name;
        private int power;

        public string Name
        {
            get => this.name;
            protected set
            {
                this.name = value;
            }
        }

        public virtual int Power
        {
            get => this.power;
            protected set
            {
                this.power = value;
            }
        }

        public BaseHero(string name, int power)
        {
            this.Name = name;
            this.Power = power;
        }

        public abstract string CastAbility();

    }
}
