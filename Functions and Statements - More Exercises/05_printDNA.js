function printDNA(length) {
    let sequence = 'ATCGTTAGGG';
    let counter = 0;
    let index = 0;
    for (let i = 0; i < length; i++) {
        if (counter === 0) {
            console.log(`**${sequence[index]}${sequence[index + 1]}**`);
            counter++;
        } else if (counter === 1) {
            console.log(`*${sequence[index]}--${sequence[index + 1]}*`);
            counter++;
        } else if (counter === 2) {
            console.log(`${sequence[index]}----${sequence[index + 1]}`);
            counter++;
        } else if (counter === 3) {
            console.log(`*${sequence[index]}--${sequence[index + 1]}*`);
            counter = 0;
        }
        index += 2;
        if (index >= sequence.length) {
            index = 0;
        }
    }
}
printDNA(10); // **AT**