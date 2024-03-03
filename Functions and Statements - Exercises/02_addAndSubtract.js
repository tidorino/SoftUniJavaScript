function addAndSubtract(num1, num2, num3) {
    function sum() {
        return num1 + num2;
    }
    const subtract = sum() - num3;
    return subtract;
}
console.log(addAndSubtract(23, 6, 10));
console.log(addAndSubtract(1, 17, 30));
console.log(addAndSubtract(42, 58, 100));