using System;

namespace NeedForSpeed
{
    public class StartUp
    {
        static void Main(string[] args)
        {
            Vehicle vehicle = new FamilyCar(500, 100);
            vehicle.Drive(200.00);
        }
    }
}
