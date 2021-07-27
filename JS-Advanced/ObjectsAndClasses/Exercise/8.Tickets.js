function solve(array, sortParam) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    let tickets = []
    for (let i = 0; i < array.length; i++) {
        let[destination, price, status] = array[i].split('|');
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    }
    tickets.sort((a, b) => {
        if(sortParam != 'price'){
            return a[sortParam].localeCompare(b[sortParam]);
        }
        else{
            return a - b;
        }
    });
    return tickets;
}
solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination');
