const calculator = {
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
};

const simpleCalculator = (numOne, numTwo, operator) =>
 calculator[operator] ? calculator[operator](numOne, numTwo) : 0;
 
const result = simpleCalculator(5, 5, 'multiply');

console.log(result);
