using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Raiding.Core.Contracts;
using Raiding.Factories;
using Raiding.IO.Contracts;
using Raiding.Models;

namespace Raiding.Core
{
    class Engine : IEngine
    {
        private List<BaseHero> heroes;
        private HeroFactory heroFactory;
        private IReader reader;
        private IWriter writer;

        public Engine()
        {
            this.heroFactory = new HeroFactory();
            heroes = new List<BaseHero>();
        }

        public Engine(IReader reader, IWriter writer)
            : this()
        {
            this.reader = reader;
            this.writer = writer;
        }

        public void Run()
        {
            int n = int.Parse(reader.ReadLine());
            int counter = 0;
            while (counter != n)
            {
                List<string> validHeroTypes = new List<string>(){"Druid", "Paladin", "Rogue", "Warrior"};
                string heroName = reader.ReadLine();
                string heroType = reader.ReadLine();
                try
                {
                    if (validHeroTypes.Contains(heroType))
                    {
                        counter++;
                        BaseHero hero = heroFactory.CreateHero(heroType, heroName);
                        heroes.Add(hero);
                    }
                    else
                    {
                        throw new ArgumentException(ExceptionMessages.ExceptionMessages.INVALID_HERO);
                    }
                }
                catch (ArgumentException ae)
                {
                    Console.WriteLine(ae.Message);
                }
            }

            int totalPower = 0;
            int neededPower = int.Parse(reader.ReadLine());
            foreach (var hero in heroes)
            {
                Console.WriteLine(hero.CastAbility());
                totalPower += hero.Power;
            }
            if (totalPower >= neededPower)
            {
                writer.WriteLine("Victory!");
            }
            else
            {
                writer.WriteLine("Defeat...");
            }
            
        }
    }
}
