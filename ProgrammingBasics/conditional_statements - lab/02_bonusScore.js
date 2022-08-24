function bonusScore(input) {
    let startPoints = Number(input[0]);
    let bonusPoints = 0;
    if(startPoints <= 100) {
        bonusPoints += 5;
    } else if(startPoints <= 1000) {
        bonusPoints += startPoints * 0.20;
    } else {
        bonusPoints += startPoints * 0.10;
    }

    if (startPoints % 2 === 0) {
        bonusPoints += 1;
    } else if (startPoints % 10 === 5) {
        bonusPoints += 2;
    }
    console.log(bonusPoints);
    console.log(startPoints + bonusPoints);

}
// bonusScore(["20"])

bonusScore(["15875"])