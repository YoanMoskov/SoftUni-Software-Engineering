using System;
using System.Collections.Generic;
using System.Runtime.InteropServices.ComTypes;
using System.Text;

namespace Operations
{
    public class MathOperations
    {
        public int Add(int x, int y)
        {
            int result = x + y;
            return result;
        }

        public double Add(double x, double y, double z)
        {
            double result = x + y + z;
            return result;
        }

        public decimal Add(decimal x, decimal y, decimal z)
        {
            decimal result = x + y + z;
            return result;
        }
    }
}
