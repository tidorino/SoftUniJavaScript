function flightSchedule(input) {
    let flightSchedule = input[0];
    let changedStatus = input[1];
    let statusToCheck = input[2];

    let flights = {};

    for (let flight of flightSchedule) {
        let [flightNumber, destination] = flight.split(' ');
        flights[flightNumber] = { Destination: destination, Status: 'Ready to fly' };
    }

    for (let flight of changedStatus) {
        let [flightNumber, newStatus] = flight.split(' ');
        if (flights.hasOwnProperty(flightNumber)) {
            flights[flightNumber].Status = newStatus;
        }
    }

    for (let flight in flights) {
        if (flights[flight].Status === statusToCheck) {
            console.log(flights[flight]);
        }
    }
}
console.log (flightSchedule([
    ['WN269 Delaware',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK430 Cancelled'],
    ['Cancelled']
]));