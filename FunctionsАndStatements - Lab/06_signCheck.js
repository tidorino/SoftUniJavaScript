function signCheck(num1, num2, num3) {
    const product = num1 * num2 * num3;
    if (product >= 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5,
    1,
    1
    );