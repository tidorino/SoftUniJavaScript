function suppliesForSchool(input) {
    let packagePens = Number(input[0]);
    let packageMarkers = Number(input[1]);
    let detergent = Number(input[2]);
    let discount = Number(input[3]);
    let pricePens = packagePens * 5.80;
    let priceMarkers = packageMarkers * 7.20;
    let priceDetergent = detergent * 1.20;
    let totalPrice = pricePens + priceDetergent + priceMarkers;
    let priceWithDiscount = totalPrice - (totalPrice * (discount / 100));
    console.log(priceWithDiscount)

}
suppliesForSchool([
    "4 ",
    "2 ",
    "5 ",
    "13 "
])