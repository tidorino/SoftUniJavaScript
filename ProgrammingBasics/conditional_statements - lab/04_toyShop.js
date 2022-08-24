function toyShop(input) {
    let ecscursionPrice = Number(input[0]);
    let Puzzels = Number(input[1]);
    let Dolls = Number(input[2]);
    let Bears = Number(input[3]);
    let Minions = Number(input[4]);
    let Trukcs = Number(input[5]);

    let sumOfToys = Puzzels * 2.60 + Dolls * 3 + Bears * 4.10 + Minions * 8.20 + Trukcs * 2;
    let numberOfToys = Puzzels + Dolls + Bears + Minions + Trukcs;

    if (numberOfToys >= 50) {
        sumOfToys -= sumOfToys * 0.25;

    }

    let rent = sumOfToys * 0.10;
    sumOfToys -= rent;

    if (sumOfToys >= ecscursionPrice) {
        let moneyLeft = sumOfToys - ecscursionPrice
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    } else {
        let neededMoney = ecscursionPrice - sumOfToys;
        console.log(`Not enough money! ${neededMoney.toFixed(2)} lv needed.`);

    }

}
toyShop([
    "40.8",
    "20",
    "25",
    "30",
    "50",
    "10"
])

toyShop([
    "320",
    "8",
    "2",
    "5",
    "5",
    "1"
])

