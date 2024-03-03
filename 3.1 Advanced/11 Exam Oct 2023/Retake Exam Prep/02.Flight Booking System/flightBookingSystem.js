class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    };

    addFlight(flightNumber, destination, departureTime, price) {

        if (this.flights.includes(flightNumber, 0)) return `Flight ${flightNumber} to ${destination} is already available.`;
        else {
            this.flights.push({flightNumber, destination, departureTime, price});
            return `Flight ${flightNumber} to ${destination} has been added to the system.`
        }
    };

    bookFlight(passengerName, flightNumber) {

        let bookingFlight = this.flights.find(flight => flight.flightNumber === flightNumber);
        if (!bookingFlight) return `Flight ${flightNumber} is not available for booking.`;

        this.bookingsCount++;
        this.bookings.push({passengerName, flightNumber});
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
    };

    cancelBooking(passengerName, flightNumber) {
        
        let bookingFlightIndex = this.bookings.findIndex(booking => booking.passengerName === passengerName && booking.flightNumber === flightNumber);

        if (bookingFlightIndex !== -1) {
            this.bookingsCount--;
            this.bookings.splice(bookingFlightIndex, 1);
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
        }

        if (bookingFlightIndex === -1) throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);  
    };

    showBookings(criteria) {

        let printString = "";
        let cheapBookings = [];
        let expensiveBookings = [];

        if (this.bookings.length === 0) throw new Error(`No bookings have been made yet.`);

        switch (criteria) {
            case "all":
                printString = `All bookings(${this.bookingsCount}):\n`;
                this.bookings.map(booking => printString += `${booking.passengerName} booked for flight ${booking.flightNumber}.\n`)
                return printString.trim();

            case "cheap":
                cheapBookings = this.bookings.filter((booking) => {
                    const flight = this.flights.find((f) => f.flightNumber === booking.flightNumber);
                    return flight.price <= 100;
                  });
                if (cheapBookings.length === 0) return "No cheap bookings found.";
                printString = "Cheap bookings:\n";
                cheapBookings.map(cheap => printString += `${cheap.passengerName} booked for flight ${cheap.flightNumber}.`)
                return printString.trim();

            case "expensive":
                expensiveBookings = this.bookings.filter((booking) => {
                    const flight = this.flights.find((f) => f.flightNumber === booking.flightNumber);
                    return flight.price > 100;
                  });
                if (expensiveBookings.length === 0) return "No expensive bookings found.";
                printString = "Expensive bookings:\n";
                expensiveBookings.map(expensive => printString += `${expensive.passengerName} booked for flight ${expensive.flightNumber}.\n`)
                 return printString.trim();

            default:
                break;
        }
    };
}

const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 80));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));
