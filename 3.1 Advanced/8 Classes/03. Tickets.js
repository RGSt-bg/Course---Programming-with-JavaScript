function tickets(inputArr, criteria) {

    let outputArr = [];
    class Tickets{
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    inputArr.forEach(ticket => {
        
        let [destination, price, status] = ticket.split("|");
        price = Number(price);
        let ticketsObj = new Tickets(destination, price, status);
        outputArr.push(ticketsObj);
    });

    let sortedTicketsArr = [];
    if (criteria !== "price")
        sortedTicketsArr = outputArr.sort((a, b) => a[criteria].localeCompare(b[criteria]));
    else
        sortedTicketsArr = outputArr.sort((a, b) => a[criteria] - b[criteria]);

    return sortedTicketsArr;
}

tickets(['Philadelphia|94.20|available',
         'New York City|95.99|available',
         'New York City|95.99|sold',
         'Boston|126.20|departed'],
         'destination');
console.log("-------------------------------------------------------------------");
tickets(['Philadelphia|94.20|available',
         'New York City|95.99|available',
         'New York City|95.99|sold',
         'Boston|126.20|departed'],
         'status');

/*   [ Ticket { destination: 'Boston',
         price: 126.20,
         status: 'departed' }, 
       Ticket { destination: 'New York City',
         price: 95.99,
         status: 'available' }, 
       Ticket { destination: 'New York City',
         price: 95.99,
         status: 'sold' }, 
       Ticket { destination: 'Philadelphia',
         price: 94.20,
         status: 'available' } ]
*/