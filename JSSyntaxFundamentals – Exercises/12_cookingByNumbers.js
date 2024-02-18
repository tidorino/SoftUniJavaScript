function cookingByNumbers (number, ...params) {
    let num = Number(number);
    for ( let i = 0; i < params.length; i++) {
        if (params[i] === 'chop') {
            num /= 2;
            console.log(num);
        } else if (params[i] === 'dice') {
            num = Math.sqrt(num);
            console.log(num);
        } else if (params[i] === 'spice') {
            num += 1;
            console.log(num);
        } else if (params[i] === 'bake') {
            num *=3;
            console.log(num);    
        } else if (params[i] === 'fillet') {
            num *= 0.8;
            console.log(num);
        }
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake',
'fillet'
);