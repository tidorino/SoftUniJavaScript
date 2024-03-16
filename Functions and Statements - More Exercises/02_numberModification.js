function numberModification(number) {
    let numberAsString = number.toString();
    let sum = 0;
    for (let i = 0; i < numberAsString.length; i++) {
        sum += Number(numberAsString[i]);
    }
    let average = sum / numberAsString.length;
    while (average <= 5) {
        numberAsString += '9';
        sum += 9;
        average = sum / numberAsString.length;
    }
    console.log(numberAsString);
}
numberModification(5835); // 5839
numberModification(101); // 1019999