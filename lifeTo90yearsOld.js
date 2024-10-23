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

/* 
function lifeInWeeks(age) {
    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;

    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
}

lifeInWeeks(56); */
