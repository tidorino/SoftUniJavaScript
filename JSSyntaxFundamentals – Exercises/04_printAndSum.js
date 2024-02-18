function printAndSum (firstNum, lastNum) {
    let numbers = [];
    for (let i = firstNum; i <= lastNum; i++) {
        numbers.push(i);        
    }
    let sum = numbers.reduce((a, b) => a + b, 0);
        console.log(numbers.join(' '));
        console.log(`Sum: ${sum}`);
}

printAndSum(0, 26 );