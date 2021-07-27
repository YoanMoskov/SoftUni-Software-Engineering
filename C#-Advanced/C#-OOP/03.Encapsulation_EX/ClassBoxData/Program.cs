using System;

namespace ClassBoxData
{
    public class Program
    {
        static void Main(string[] args)
        {
            decimal length = decimal.Parse(Console.ReadLine());
            decimal width = decimal.Parse(Console.ReadLine());
            decimal height = decimal.Parse(Console.ReadLine());
            try
            {
                Box box = new Box(length, width, height);
                box.GetSurfaceArea();
                box.GetLateralSurfaceArea();
                box.GetVolume();
            }
            catch (ArgumentException ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}
