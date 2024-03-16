function calculateResources(base, increment) {
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapisLazuli = 0;
    let totalGold = 0;

    let currentWidth = base;
    let currentLength = base;
    let currentHeight = increment;

    let stepCount = 0;

    while (currentWidth > 0 && currentLength > 0 && currentHeight > 0) {
        stepCount++;

        let stone;
        let marble;
        if (stepCount % 5 === 0) {
            let lapisLazuli = (2*currentWidth + 2*currentLength - 4) * increment;
            totalLapisLazuli += lapisLazuli;
        } else {
            stone = ((currentWidth - 2) * (currentLength - 2)) * increment;
            totalStone += stone;
            marble = (2 * currentWidth + 2 * currentLength - 4) * increment;
            totalMarble += marble;
        }

        if (currentWidth === 1 && currentLength === 1) {
            let gold = (currentLength * currentWidth) * increment;
            totalGold += gold;
            break;
        }

        currentWidth -= 2;
        currentLength -= 2;
        currentHeight += increment;
    }

    let pyramidHeight = Math.ceil(currentHeight * increment);

    console.log("Stone required:", Math.ceil(totalStone));
    console.log("Marble required:", Math.ceil(totalMarble));
    console.log("Lapis Lazuli required:", Math.ceil(totalLapisLazuli));
    console.log("Gold required:", Math.ceil(totalGold));
    console.log("Final pyramid height:", pyramidHeight);
}

// calculateResources(11, 0.75);
// calculateResources(11, 1);
calculateResources(23, 0.5);