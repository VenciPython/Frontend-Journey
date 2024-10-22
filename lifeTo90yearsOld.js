function lifeTo90yearsOld(input) {
    let yearsTo90 = 90 - Number(input[0]);
    let weeks = 52;
    let daysOneYears = 365;
    let months = 12;

    let daysLeft = yearsTo90 * daysOneYears;
    let weeksLeft = yearsTo90 * weeks;
    let monthsLeft = yearsTo90 * months;

    console.log(`You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left.`)

}
//lifeTo90yearsOld([12])
