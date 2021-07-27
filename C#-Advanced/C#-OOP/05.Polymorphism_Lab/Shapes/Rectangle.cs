using System;
using System.Collections.Generic;
using System.Text;

namespace Shapes
{
    public class Rectangle : Shape
    {
        private double height;

        public double Height
        {
            get { return height; }
            set { height = value; }
        }
        private double width;

        public double Width
        {
            get { return width; }
            set { width = value; }
        }

        public Rectangle(double height, double width)
        {
            this.Height = height;
            this.Width = width;
        }
        public override double CalculatePerimeter()
        {
            double perimeter = 2 * (this.Height + this.Width);
            return perimeter;
        }

        public override double CalculateArea()
        {
            double area = this.Height * this.Width;
            return area;
        }

        public override string Draw()
        {
            return base.Draw() + this.GetType().Name;
        }
    }
}
