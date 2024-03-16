function radioCrystals(input) {
    let targetThickness = input[0];
    let cut = (x) => x / 4;
    let lap = (x) => x * 0.8;
    let grind = (x) => x - 20;
    let etch = (x) => x - 2;
    let xRay = (x) => x + 1;
    let wash = (x) => Math.floor(x);

    for (let i = 1; i < input.length; i++) {
        let microns = input[i];
        console.log(`Processing chunk ${microns} microns`);
        microns = executeOperation(microns, 'Cut', cut);
        microns = executeOperation(microns, 'Lap', lap);
        microns = executeOperation(microns, 'Grind', grind);
        microns = executeOperation(microns, 'Etch', etch);
        if (microns === targetThickness - 1) {
            microns = executeOperation(microns, 'X-ray', xRay);
        }
        console.log(`Finished crystal ${microns} microns`);
    }

    function executeOperation(microns, operation, func) {
        let times = 0;
        while (func(microns) >= targetThickness || Math.floor(microns) === targetThickness - 1) {
            microns = func(microns);
            times++;
        }
        if (times > 0) {
            console.log(`${operation} x${times}`);
            console.log('Transporting and washing');
            microns = wash(microns);
        }
        return microns;
    }
}
radioCrystals([1375, 50000]); // Processing chunk 1375 microns