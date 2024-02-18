function revChars(a, b, c) {
    let arry = [];
    for  (let i = 0; i < arguments.length; i++) {
        arry.push(arguments[i]);
    }
    arry.reverse();
    console.log(arry.join(' '));
}
revChars('1',
'L',
'&'
);