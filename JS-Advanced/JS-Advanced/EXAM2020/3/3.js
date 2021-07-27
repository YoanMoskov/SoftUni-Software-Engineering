class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    addCar(carModel, carNumber){
        if (this.vehicles.length == this.capacity) {
            throw new Error('Not enough parking space.')
        }
        let car = {
            carNumber,
            carModel,
            payed: false,
        }
        this.vehicles.push(car);
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }
    removeCar(carNumber){
        let car = this.vehicles.find(x => x.carNumber == carNumber)
        if (car == undefined) {
            throw new Error(`The car, you're looking for, is not found.`);
        }
        if (car.payed == false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
        }
        let index = this.vehicles.indexOf(car);
        this.vehicles.splice(index, 1);

        return `${carNumber} left the parking lot.`
    }
    pay(carNumber){
        let car = this.vehicles.find(x => x.carNumber == carNumber)
        if (car == undefined) {
            throw new Error(`${carNumber} is not in the parking lot.`)
        }
        if (car.payed == true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        }
        car.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`
    }
    getStatistics(carNumber){
        let result = '';
        if (carNumber == undefined) {
            result += `The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.\n`;
            this.vehicles = Object.values(this.vehicles).sort((a, b) => {
                return a.carModel.localeCompare(b.carModel);
            });
            this.vehicles.forEach(car => { 
                let paymentInfo;
                if (car.payed == false) {
                    paymentInfo = 'Not payed';
                }
                else{
                    paymentInfo = 'Has payed';
                }
                result += `${car.carModel} == ${car.carNumber} - ${paymentInfo}\n`;
            });
        }
        else{
            let car = this.vehicles.find(x => x.carNumber == carNumber);
            let paymentInfo;
            if (car.payed == false) {
                paymentInfo = 'Not payed';
            }
            else{
                paymentInfo = 'Has payed';
            }
            result = `${car.carModel} == ${car.carNumber} - ${paymentInfo}`;
        }
        return result.trim();
    }
}
const parking = new Parking(2);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.addCar("Audi A3", "LUK100LUD"));
console.log(parking.pay("LUK100LUD"));
console.log(parking.removeCar("LUK100LUD"));
console.log(parking.pay("TX3691CA"));
console.log(parking.getStatistics('TX3691CA'));
