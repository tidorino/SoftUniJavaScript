function sameNumbers (integer) {
    const digits = Array.from(String(integer), Number);
    const isConsistent = new Set(digits).size === 1;
    
    // const sum = digits.reduce((a, b) => a + b, 0);
    const sum = digits.reduce(function (toatal, number) {
        return toatal + number;
    }, 0);

    console.log(isConsistent);
    console.log(sum);
}

sameNumbers(2222222); // true