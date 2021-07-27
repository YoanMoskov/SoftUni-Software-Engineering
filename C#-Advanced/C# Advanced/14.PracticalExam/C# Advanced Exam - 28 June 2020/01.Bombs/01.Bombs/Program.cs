using System;
using System.Collections.Generic;
using System.Linq;

namespace _01
{
    class Program
    {
        static void Main(string[] args)
        {
            Queue<int> bombEffects = new Queue<int>(Console
                .ReadLine()
                .Split(", ", StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToArray());

            Stack<int> bombCases = new Stack<int>(Console
                .ReadLine()
                .Split(", ", StringSplitOptions.RemoveEmptyEntries)
                .Select(int.Parse)
                .ToArray());

            Dictionary<string, int> typeValue = new Dictionary<string, int>()
            {
                { "Datura Bombs", 40 },
                { "Cherry Bombs", 60 },
                { "Smoke Decoy Bombs", 120 }
            };
            Dictionary<string, int> typeCount = new Dictionary<string, int>()
            {
                { "Datura Bombs", 0 },
                { "Cherry Bombs", 0 },
                { "Smoke Decoy Bombs", 0 }
            };

            while (bombEffects.Count != 0 && bombCases.Count != 0)
            {
                int effectB = bombEffects.Peek();
                int caseB = bombCases.Peek();
                int sumEC = effectB + caseB;
                if (typeValue.Any(x => x.Value == sumEC))
                {
                    IfEqualToBomb(bombEffects, bombCases, typeCount, sumEC);
                }
                else
                {
                    int temp = bombCases.Peek();
                    bombCases.Pop();
                    bombCases.Push(temp - 5);
                }
                if (typeCount["Datura Bombs"] >= 3 && typeCount["Cherry Bombs"] >= 3 && typeCount["Smoke Decoy Bombs"] >= 3)
                {
                    break;
                }
            }
            if (typeCount["Datura Bombs"] >= 3 && typeCount["Cherry Bombs"] >= 3 && typeCount["Smoke Decoy Bombs"] >= 3)
            {
                Console.WriteLine("Bene! You have successfully filled the bomb pouch!");
            }
            else
            {
                Console.WriteLine("You don't have enough materials to fill the bomb pouch.");
            }
            if (bombEffects.Count == 0)
            {
                Console.WriteLine("Bomb Effects: empty");
            }
            else
            {
                Console.WriteLine($"Bomb Effects: {string.Join(", ", bombEffects)}");
            }
            if (bombCases.Count == 0)
            {
                Console.WriteLine("Bomb Casings: empty");
            }
            else
            {
                Console.WriteLine($"Bomb Casings: {string.Join(", ", bombCases)}");
            }
            foreach (var kvp in typeCount.OrderBy(x => x.Key))
            {
                Console.WriteLine($"{kvp.Key}: {kvp.Value}");
            }
        }

        private static void IfEqualToBomb(Queue<int> bombEffects, Stack<int> bombCases, Dictionary<string, int> typeCount, int sumEC)
        {
            if (sumEC == 40)
            {
                typeCount["Datura Bombs"]++;
                bombEffects.Dequeue();
                bombCases.Pop();
            }
            else if (sumEC == 60)
            {
                typeCount["Cherry Bombs"]++;
                bombEffects.Dequeue();
                bombCases.Pop();
            }
            else if (sumEC == 120)
            {
                typeCount["Smoke Decoy Bombs"]++;
                bombEffects.Dequeue();
                bombCases.Pop();
            }
        }
    }
}
