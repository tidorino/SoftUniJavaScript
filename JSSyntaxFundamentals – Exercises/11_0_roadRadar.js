function roadRadar (speed, area) {
    let status = '';
    let difference = 0;
    if (area === 'motorway') {
        let speedLimit = 130;
        if (speed > 130 && speed <= 150)  {
            status = 'speeding';
            difference = speed - speedLimit;
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        } else if (speed > 150 && speed <= 170) {
            status = 'excessive speeding';
            difference = speed - speedLimit;
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        } else if (speed > 170) {
            status = 'reckless driving';
            difference = speed - speedLimit;
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        } else {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        }
    } else if (area === 'interstate') {
        let speedLimit = 90;
        if (speed > 90 && speed <= 110)  {
            status = 'speeding';
            difference = speed - speedLimit;
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        } else if (speed > 110 && speed <= 130) {
            status = 'excessive speeding';
            difference = speed - speedLimit;
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        } else if (speed > 130) {
            status = 'reckless driving';
            difference = speed - speedLimit;
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        } else {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        }
    } else if (area === 'city') {
        let speedLimit = 50;
        if (speed > 50 && speed <= 70)  {
            status = 'speeding';
            difference = speed - speedLimit;
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        } else if (speed > 70 && speed <= 90) {
            status = 'excessive speeding';
            difference = speed - speedLimit;
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        } else if (speed > 90) {
            status = 'reckless driving';
            difference = speed - speedLimit;
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        } else {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        }
    } else if (area === 'residential') {
        let speedLimit = 20;
        if (speed > 20 && speed <= 40)  {
            status = 'speeding';
            difference = speed - speedLimit;
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        } else if (speed > 40 && speed <= 60) {
            status = 'excessive speeding';
            difference = speed - speedLimit;
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        } else if (speed > 60) {
            status = 'reckless driving';
            difference = speed - speedLimit;
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        } else {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        }
    }
}

roadRadar(120, 'interstate'); // Driving 40 km/h in a 50 zone