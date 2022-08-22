function vacationBookList(input) {
    let numberBookPages = Number(input[0]);
    let pagesForAnHourReading = Number(input[1]);
    let daysForReading = Number(input[2]);
    let totalHoursReading = numberBookPages / pagesForAnHourReading;
    let hoursReadingPerDay = totalHoursReading / daysForReading;
    console.log(hoursReadingPerDay);

}
vacationBookList([
    "212 ",
    "20 ",
    "2 "
]);