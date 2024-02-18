function sameNumbers (integer) {
    const intstring = integer.toString();
    let sum = 0;

    for (let i = 0; i < intstring.length ; i++) {
        sum += Number(intstring[i]);
    }    
    if (intstring.split('').every((char) => char === intstring[0])) {
        console.log('true');
    } else {
        console.log('false');
    }
    console.log(sum);
}

sameNumbers(2222222); // true