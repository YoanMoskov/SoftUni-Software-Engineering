class Bank {
    #bankName;
    constructor(bankName) {
        this.#bankName = bankName;
        this.allCustomers = [];
    }
    newCustomer(customer){
        if (this.allCustomers.some(x => x.personalId == customer.personalId)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        }
        this.allCustomers.push(customer);
        return customer;
    }
    depositMoney(personalId, amount){
        if (!this.allCustomers.some(x => x.personalId == personalId)) {
            throw new Error('We have no customer with this ID!');
        }
        let customer = this.allCustomers.find(x => x.personalId == personalId);
        if (customer.totalMoney == undefined) {
            customer.totalMoney = 0;
        }

        customer.totalMoney += amount;

        if (customer.transactions == undefined) {
            customer.transactions = [];
        }

        let currTransaction = {
            number: customer.transactions.length + 1,
            names: `${customer.firstName} ${customer.lastName}`,
            type: 'deposit',
            amount,
        }
        
        customer.transactions.push(currTransaction);

        return `${customer.totalMoney}$`; 
    }
    withdrawMoney(personalId, amount){
        if (!this.allCustomers.some(x => x.personalId == personalId)) {
            throw new Error('We have no customer with this ID!');
        }
        let customer = this.allCustomers.find(x => x.personalId == personalId);
        if (customer.totalMoney == undefined || customer.totalMoney < amount) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`)
        }
        customer.totalMoney -= amount;

        if (customer.transactions == undefined) {
            customer.transactions = [];
        }

        let currTransaction = {
            number: customer.transactions.length + 1,
            names: `${customer.firstName} ${customer.lastName}`,
            type: 'withdraw',
            amount,
        }
        
        customer.transactions.push(currTransaction);

        return `${customer.totalMoney}$`;
    }
    customerInfo(personalId){
        if (!this.allCustomers.some(x => x.personalId == personalId)) {
            throw new Error('We have no customer with this ID!');
        }
        let customer = this.allCustomers.find(x => x.personalId == personalId);
        let result = `Bank name: ${this.#bankName}\n`;
        result += `Customer name: ${customer.firstName} ${customer.lastName}\n`;
        result += `Customer ID: ${personalId}\n`;
        result += `Total Money: ${customer.totalMoney}$\n`;
        if (customer.transactions != undefined && customer.transactions.length != 0) {
            result += 'Transactions:\n';
        }

        Object.values(customer.transactions).sort((a, b) => {
            return b.number - a.number;
        }).forEach(transaction => {
            if (transaction.type == 'deposit') {
                result += `${transaction.number}. ${customer.firstName} ${customer.lastName} made deposit of ${transaction.amount}$!\n`;
            }
            else{
                result += `${transaction.number}. ${customer.firstName} ${customer.lastName} withdrew ${transaction.amount}$!\n`;
            }
        });
        return result.trim();
    }
}
let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({firstName: "Svetlin", lastName: "Nakov", personalId: 6233267}));
console.log(bank.newCustomer({firstName: "Mihaela", lastName: "Mileva", personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));