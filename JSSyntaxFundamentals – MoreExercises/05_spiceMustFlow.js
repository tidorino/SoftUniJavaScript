function spiceMustFlow(number) {
    let days = 0;
    let totalAmount = 0;
    while (number >= 100) {
        days++;
        totalAmount += number - 26;
        number -= 10;
    }
    if (totalAmount >= 26) {
        totalAmount -= 26;
    }
    console.log(days);
    console.log(totalAmount);
    
}
spiceMustFlow(111); // 2 134
spiceMustFlow(450); // 58 164