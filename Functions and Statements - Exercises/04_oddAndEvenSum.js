function oddAndEvenSum(numb) {
    let oddSum = 0;
    let evenSum = 0;
    const numbStr = numb.toString();
    for (let i = 0; i < numbStr.length; i++) {
        const digit = Number(numbStr[i]);
        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}
console.log(oddAndEvenSum(1000435));
console.log(oddAndEvenSum(3495892137259234));