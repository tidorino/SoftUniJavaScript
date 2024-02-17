function evenAndOddSubtraction (arry) {
    let evens = [];
    let odds = [];
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] % 2 === 0) {
            evens.push(arry[i]);
        } else {
            odds.push(arry[i]);
        }
    }
    let evenSum = evens.reduce((a, b) => a + b, 0);
    let oddSum = odds.reduce((a, b) => a + b, 0);
    let result = evenSum - oddSum;
    console.log(result);
}

evenAndOddSubtraction([3,5,7,9]);