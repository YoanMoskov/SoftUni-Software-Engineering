using Microsoft.VisualBasic.CompilerServices;
using System;

namespace PlayersAndMonsters
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            Hero hero = new BladeKnight("stamat", 100);
            Console.WriteLine(hero);
        }
    }
}
