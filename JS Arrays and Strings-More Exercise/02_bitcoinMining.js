function bitcoinMining(input) {
    const bitcoinPrice = 11949.16;
    const goldPrice = 67.51;
    let totalMoney = 0;
    let firstDay = 0;
    let bitcoins = 0;
    let day = 0;

    for (let i = 0; i < input.length; i++) {
        let gold = input[i];
        day++;
        if (day % 3 === 0) {
            gold *= 0.7;
        }
        totalMoney += gold * goldPrice;
        while (totalMoney >= bitcoinPrice) {
            if (firstDay === 0) {
                firstDay = day;
            }
            bitcoins++;
            totalMoney -= bitcoinPrice;
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);

}
bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);