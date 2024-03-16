function carWash (comands) {
    let result = 0;
    for (let comand of comands) {
        if (comand === 'soap') {
            result += 10;
        } else if (comand === 'water') {
            result += result * 0.20;
        } else if (comand === 'vacuum cleaner') {
            result += result * 0.25;
        } else if (comand === 'mud') {
            result -= result * 0.10;
        }
    }
    console.log(`The car is ${result.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']); // The car is 39.00% clean.
carWash(['soap', 'vacuum cleaner', 'mud']); // The car is 6.30% clean.