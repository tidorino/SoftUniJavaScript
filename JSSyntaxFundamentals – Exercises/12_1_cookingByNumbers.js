function cookingByNumbers (number, ...params) {
    let num = Number(number);
    for ( let i = 0; i < params.length; i++) {
        const command = params[i];

        switch (command) {
            case 'chop': num /= 2; break;
            case 'dice': num = Math.sqrt(num); break;
            case 'spice': num += 1; break;
            case 'bake': num *=3; break;
            case 'fillet': num *= 0.8; break;
        }
        console.log(num);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');