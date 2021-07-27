using OnlineShop.Models.Products.Computers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using OnlineShop.Common.Constants;
using OnlineShop.Models.Products.Components;
using OnlineShop.Models.Products.Peripherals;

namespace OnlineShop.Core
{
    class Controller : IController
    {
        private readonly ICollection<IComputer> computerListCollection;
        private IComputer computer;
        private IPeripheral peripheral;
        private IComponent component;

        public Controller()
        {
            this.computerListCollection = new HashSet<IComputer>();
        }

        public string AddComputer(string computerType, int id, string manufacturer, string model, decimal price)
        {
            if (computerType == "Laptop")
            {
                computer = new Laptop(id, manufacturer, model, price);
            }
            else if (computerType == "DesktopComputer")
            {
                computer = new DesktopComputer(id, manufacturer, model, price);
            }
            else
            {
                throw new ArgumentException(ExceptionMessages.InvalidComputerType);
            }

            if (computerListCollection.Any(x => x.Id == id))
            {
                throw new ArgumentException(ExceptionMessages.ExistingComputerId);
            }
            else
            {
                computerListCollection.Add(computer);
            }

            return string.Format(SuccessMessages.AddedComputer, id);
        }

        public string AddPeripheral(int computerId, int id, string peripheralType, string manufacturer, string model, decimal price, double overallPerformance, string connectionType)
        {
            CheckIfComputerExists(computerId);
            computer = computerListCollection.FirstOrDefault(x => x.Id == computerId);
            if (peripheralType == "Headset")
            {
                peripheral = new Headset(id, manufacturer, model, price, overallPerformance, connectionType);
            }
            else if (peripheralType == "Keyboard")
            {
                peripheral = new Keyboard(id, manufacturer, model, price, overallPerformance, connectionType);
            }
            else if (peripheralType == "Monitor")
            {
                peripheral = new Monitor(id, manufacturer, model, price, overallPerformance, connectionType);
            }
            else if (peripheralType == "Mouse")
            {
                peripheral = new Mouse(id, manufacturer, model, price, overallPerformance, connectionType);
            }
            else
            {
                throw new ArgumentException(ExceptionMessages.InvalidPeripheralType);
            }

            if (computer.Peripherals.Count != 0)
            {
                if (computer.Peripherals.Any(x => x.Id == id))
                {
                    throw new ArgumentException(ExceptionMessages.ExistingPeripheralId);   
                }
            }
            computer.AddPeripheral(peripheral);
            return string.Format(SuccessMessages.AddedPeripheral, peripheralType, peripheral.Id, computer.Id);
        }


        public string RemovePeripheral(string peripheralType, int computerId)
        {
            CheckIfComputerExists(computerId);
            computer = computerListCollection.FirstOrDefault(x => x.Id == computerId);
            computer.RemovePeripheral(peripheralType);
            return string.Format(SuccessMessages.RemovedPeripheral, peripheralType, peripheral.Id);
        }

        public string AddComponent(int computerId, int id, string componentType, string manufacturer, string model, decimal price, double overallPerformance, int generation)
        {
            CheckIfComputerExists(computerId);
            computer = computerListCollection.FirstOrDefault(x => x.Id == computerId);
            if (componentType == "CentralProcessingUnit")
            {
                component = new CentralProcessingUnit(id, manufacturer, model, price, overallPerformance, generation);
            }
            else if (componentType == "Motherboard")
            {
                component = new Motherboard(id, manufacturer, model, price, overallPerformance, generation);
            }
            else if (componentType == "PowerSupply")
            {
                component = new PowerSupply(id, manufacturer, model, price, overallPerformance, generation);
            }
            else if (componentType == "RandomAccessMemory")
            {
                component = new RandomAccessMemory(id, manufacturer, model, price, overallPerformance, generation);
            }
            else if (componentType == "SolidStateDrive")
            {
                component = new SolidStateDrive(id, manufacturer, model, price, overallPerformance, generation);
            }
            else if (componentType == "VideoCard")
            {
                component = new VideoCard(id, manufacturer, model, price, overallPerformance, generation);
            }
            else
            {
                throw new ArgumentException(ExceptionMessages.InvalidComponentType);
            }

            if (computer.Components.Count != 0)
            {
                if (computer.Components.Any(x => x.Id == id))
                {
                    throw new ArgumentException(ExceptionMessages.ExistingComponentId);   
                }
            }

            computer.AddComponent(component);
            return string.Format(SuccessMessages.AddedComponent, componentType, component.Id, computer.Id);

        }

        public string RemoveComponent(string componentType, int computerId)
        {
            CheckIfComputerExists(computerId);
            computer = computerListCollection.FirstOrDefault(x => x.Id == computerId);
            computer.RemoveComponent(componentType);
            return string.Format(SuccessMessages.RemovedComponent, componentType, computerId);
        }

        public string BuyComputer(int id)
        {
           CheckIfComputerExists(id);
           computer = computerListCollection.FirstOrDefault(x => x.Id == id);
           computerListCollection.Remove(computer);
           return computer.ToString();
        }

        public string BuyBest(decimal budget)
        {
            double bestOP = Double.NegativeInfinity;
            computer = null;
            foreach (IComputer computerInstance in computerListCollection)
            {
                if (computerInstance.OverallPerformance > bestOP && computerInstance.Price <= budget)
                {
                    bestOP = computerInstance.OverallPerformance;
                    computer = computerInstance;
                }
            }

            if (computer == null)
            {
                throw new ArgumentException(string.Format(ExceptionMessages.CanNotBuyComputer, budget));
            }

            computerListCollection.Remove(computer);
            return computer.ToString();
        }

        public string GetComputerData(int id)
        {
            CheckIfComputerExists(id);
            computer = computerListCollection.FirstOrDefault(x => x.Id == id);

            return computer.ToString();
        }

        private void CheckIfComputerExists(int computerId)
        {
            if (computerListCollection.Any(x => x.Id == computerId) == false)
            {
                throw new ArgumentException(ExceptionMessages.NotExistingComputerId);
            }
        }
    }
}
