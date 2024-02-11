function depositCalculator(input) {
    let depoisitSum = Number(input[0]);
    let depoisitPeriod = Number(input[1]);
    let depoisitYearPerCent = Number(input[2]);
    let calculateAnnualInterest = depoisitSum * depoisitYearPerCent / 100;
    let sumPerMonth = calculateAnnualInterest / 12;
    let totalMonthSum = depoisitSum + depoisitPeriod * sumPerMonth;
    console.log(totalMonthSum);
}
depositCalculator([
    "200 ",
    "3 ",
    "5.7 "
]);