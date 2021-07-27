using System;
using System.Collections.Generic;
using System.Text;

namespace ClassBoxData
{
    public class Box
    {
        private decimal length;
        private decimal width;
        private decimal height;

        public decimal Height
        {
            get { return height; }
            private set 
            {
                if (value > 0)
                {
                    this.height = value;
                }
                else
                {
                    throw new ArgumentException("Height cannot be zero or negative.");
                }
            }
        }

        public decimal Width
        {
            get { return width; }
            private set 
            {
                if (value > 0)
                {
                    this.width = value;
                }
                else
                {
                    throw new ArgumentException("Width cannot be zero or negative.");
                }
            }
        }

        public decimal Length
        {
            get { return length; }
            private set 
            {
                if (value > 0)
                {
                    this.length = value;
                }
                else
                {
                    throw new ArgumentException("Length cannot be zero or negative.");
                }
            }
        }
        public Box(decimal length, decimal width, decimal height)
        {
            this.Length = length;
            this.Width = width;
            this.Height = height;
        }
        public void GetSurfaceArea()
        {
            decimal sum = 2 * this.Length * this.Width + 2 * this.Length * this.Height + 2 * this.Width * this.Height;
            Console.WriteLine($"Surface Area - {sum:f2}");
        }
        public void GetLateralSurfaceArea()
        {
            decimal sum = 2 * this.Length * this.Height + 2 * this.Width * this.Height;
            Console.WriteLine($"Lateral Surface Area - {sum:f2}");
        }
        public void GetVolume()
        {
            decimal sum = this.Length * this.Width * this.Height;
            Console.WriteLine($"Volume - {sum:f2}");
        }
    }
}
