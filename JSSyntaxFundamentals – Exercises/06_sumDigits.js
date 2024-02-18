function sumDigits (num) {
    let splitDigits = num.toString().split('');
    let totalSum = 0
    for (let i = 0; i < splitDigits.length; i++) {
        splitDigits[i] = Number(splitDigits[i]);
        totalSum += splitDigits[i];
    }
    console.log(totalSum);
}

sumDigits(97561 ); // [ '2', '4', '5', '6', '7', '8' ]