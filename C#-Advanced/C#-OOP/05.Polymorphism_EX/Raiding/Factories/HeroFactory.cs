using System;
using System.Collections.Generic;
using System.Text;
using Raiding.Models;

namespace Raiding.Factories
{
    class HeroFactory
    {
        private BaseHero hero;
        private const int druidPower = 80;
        private const int paladinPower = 100;
        private const int roguePower = 80;
        private const int warriorPower = 100;

        public BaseHero CreateHero(string type, string name)
        {
            hero = null;
            if (type == "Druid")
            {
                hero = new Druid(name, druidPower);
            }
            else if (type == "Paladin")
            {
                hero = new Paladin(name, paladinPower);
            }
            else if (type == "Rogue")
            {
                hero = new Rogue(name, roguePower);
            }
            else if (type == "Warrior")
            {
                hero = new Warrior(name, warriorPower);
            }

            return hero;
        }
    }
}
