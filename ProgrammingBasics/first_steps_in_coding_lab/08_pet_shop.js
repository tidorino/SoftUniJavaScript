function petShop(input) {
    let dogFood = input[0];
    let catFood = input[1];
    let totalPriceDogFood = dogFood * 2.50;
    let totalPriceCatFood = catFood * 4;
    let sum = totalPriceCatFood + totalPriceDogFood;
    console.log(` ${sum} lv.`); 
}
petShop(["5 ","4 "])