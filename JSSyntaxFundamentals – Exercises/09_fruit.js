function fruits (fruit, weight, price) {
    let weightInKg = weight / 1000;
    let totalPrice = weightInKg * price;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`)
}

fruits('apple', 1563, 2.35 );