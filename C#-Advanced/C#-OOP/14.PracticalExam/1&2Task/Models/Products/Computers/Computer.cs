using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using OnlineShop.Common.Constants;
using OnlineShop.Models.Products.Components;
using OnlineShop.Models.Products.Peripherals;

namespace OnlineShop.Models.Products.Computers
{
    public abstract class Computer : Product, IComputer
    {
        private List<IComponent> components;
        private List<IPeripheral> peripherals;

        public Computer(int id, string manufacturer, string model, decimal price, double overallPerformance)
            : base(id, manufacturer, model, price, overallPerformance)
        {
            this.components = new List<IComponent>();
            this.peripherals = new List<IPeripheral>();
        }

        public IReadOnlyCollection<IComponent> Components
        {
            get => this.components.AsReadOnly();
        }
        public IReadOnlyCollection<IPeripheral> Peripherals
        {
            get => this.peripherals.AsReadOnly();
        }

        public override double OverallPerformance => base.OverallPerformance + components.Sum(x => x.OverallPerformance) / components.Count;

        public override decimal Price => base.Price + components.Sum(x => x.Price) + peripherals.Sum(x => x.Price);

        public void AddComponent(IComponent component)
        {
            if (components.Any(x => x.GetType().Name == component.GetType().Name))
            {
                throw new ArgumentException(string.Format(ExceptionMessages.ExistingComponent, component.GetType().Name, this.GetType().Name, this.Id));
            }
            components.Add(component);
        }

        public IComponent RemoveComponent(string componentType)
        {
            IComponent componentToRemove = null;

            foreach (IComponent component in components)
            {
                if (component.GetType().Name == componentType)
                {
                    componentToRemove = components.FirstOrDefault(x => x.GetType().Name == componentType);
                    components.Remove(componentToRemove);
                    break;
                }
            }


            if (componentToRemove == null)
            {
                throw new ArgumentException(string.Format(ExceptionMessages.NotExistingComponent, componentType, this.GetType().Name, this.Id));
            }
            return componentToRemove;
        }

        public void AddPeripheral(IPeripheral peripheral)
        {
            if (peripherals.Any(x => x.GetType().Name == peripheral.GetType().Name))
            {
                throw new ArgumentException(string.Format(ExceptionMessages.ExistingPeripheral, peripheral.GetType().Name, this.GetType().Name, this.Id));
            }

            peripherals.Add(peripheral);
        }

        public IPeripheral RemovePeripheral(string peripheralType)
        {
            IPeripheral peripheralToRemove = null;

            foreach (IPeripheral peripheral in peripherals)
            {
                if (peripheral.GetType().Name == peripheralType)
                {
                    peripheralToRemove = peripherals.FirstOrDefault(x => x.GetType().Name == peripheralType);
                    peripherals.Remove(peripheralToRemove);
                    break;
                }
            }


            if (peripheralToRemove == null)
            {
                throw new ArgumentException(string.Format(ExceptionMessages.NotExistingPeripheral, peripheralType, this.GetType().Name, this.Id));
            }
            return peripheralToRemove;
        }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine($"Overall Performance: {this.OverallPerformance:f2}. Price: {this.Price:f2} - {this.GetType().Name}: {this.Manufacturer} {this.Model} (Id: {this.Id})");
            sb.AppendLine($" Components ({Components.Count}):");
            foreach (var component in components)
            {
                sb.AppendLine($"  {component.ToString()}");
            }

            double periAvgSum = Peripherals.Sum(x => x.OverallPerformance) / Peripherals.Count;
            if (peripherals.Count == 0)
            {
                periAvgSum = 0;
            }
            sb.AppendLine($" Peripherals ({Peripherals.Count}); Average Overall Performance ({periAvgSum:f2}):");

            foreach (var peripheral in peripherals)
            {
                sb.AppendLine($"  {peripheral.ToString()}");
            }

            return sb.ToString().TrimEnd();
        }
    }
}
