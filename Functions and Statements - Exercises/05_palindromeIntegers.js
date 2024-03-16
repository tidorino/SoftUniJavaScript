function palindromeIntegers(input) {
    for (let i = 0; i < input.length; i++) {
        let currentNumber = input[i];
        let reversedNumber = Number(currentNumber.toString().split('').reverse().join(''));
        if (currentNumber === reversedNumber) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}
palindromeIntegers([123, 323, 421, 121]); 
palindromeIntegers([32, 2, 232, 1010]);