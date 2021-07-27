using System;
using System.Collections.Generic;
using System.Text;

namespace Vehicles.ExceptionMessages
{
    public static class ExceptionMessages
    {
        public static string NOT_ENOUGH_FUEL = "{0} needs refueling";
        public static string FUEL_OVERLOAD = "Cannot fit {0} fuel in the tank";
        public static string FUEL_CANNOT_EQUAL_NULL_OR_NEGATIVE = "Fuel must be a positive number";
    }
}
