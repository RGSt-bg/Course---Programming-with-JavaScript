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
            return `Flight ${flightNumber} to ${destination} has been added to the system.`;
        }
    };

    bookFlight(passengerName, flightNumber) {
        let currentFlight = this.flights.find((currentFlight) => currentFlight.flightNumber === flightNumber);
        if (!currentFlight) return `Flight ${flightNumber} is not available for booking.`;

        this.bookings.push({passengerName, flightNumber});
        this.bookingsCount++;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    };

    cancelBooking(passengerName, flightNumber) {
        let currentBooking = this.bookings.find((currentBooking) => currentBooking.flightNumber === flightNumber && 
                                                                    currentBooking.passengerName === passengerName);
        if (!currentBooking) throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);

        this.bookings.splice(currentBooking, 1);
        this.bookingsCount--;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    };

    showBookings(criteria) {
        if (this.bookings.length === 0) throw new Error(`No bookings have been made yet.`);
        let outputStr = "";

        switch (criteria) {
            
            case "all":
                outputStr = `All bookings(${this.bookingsCount}):\n`;
                for (let i = 0; i < this.bookings.length; i++) {
                    
                outputStr += `${this.bookings[i].passengerName} booked for flight ${this.bookings[i].flightNumber}.\n`
                }
                return outputStr.trim();
                break;

            case "cheap":
                let cheap = this.bookings.filter((cheapB) => {
                    let cheapF = this.flights.find((cheapF) => cheapF.flightNumber === cheapB.flightNumber);
                    return cheapF.price <= 100;
                    if (cheap.length === 0) {
                        return 'No cheap bookings found.';
                break;

            case "expensive":

                break;
        }
    };

}

let system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.addFlight("CC303", "Chicago", "11:45 AM", 120));
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));

system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.bookFlight("Charlie", "CC303"));

system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.cancelBooking("Alice", "AA101"));

system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("all"));

