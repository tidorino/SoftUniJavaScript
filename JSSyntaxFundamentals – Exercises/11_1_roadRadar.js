function roadRadar (speed, area) {
    const speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };

    const currentSpeedLimit = speedLimits[area];
    const speedOverLimit = speed - currentSpeedLimit;
    
    if (speedOverLimit <= 0) {
        console.log(`Driving ${speed} km/h in a ${currentSpeedLimit} zone`)
        return;
    }

    const speedingMessage = 
    speedOverLimit <= 20
     ? 'speeding'
     : speedOverLimit <= 40
     ? 'excessive speeding'
     : 'reckless driving';

    console.log(`The speed is ${speedOverLimit} km/h faster than the allowed speed of ${currentSpeedLimit} - ${speedingMessage}`);


}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');
