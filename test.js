function christmasGifts(input) {
    let adultsCount = 0;
    let kidsCount = 0;
    let moneyForToys = 0;
    let moneyForSweaters = 0;
    let index = 0;

    while (input[index] !== "Christmas") {
        let age = Number(input[index]);

        if (age <= 16) {
            kidsCount++;
            moneyForToys += 5;
        } else {
            adultsCount++;
            moneyForSweaters += 15;
        }

        index++;
    }

    console.log(`Number of adults: ${adultsCount}`);
    console.log(`Number of kids: ${kidsCount}`);
    console.log(`Money for toys: ${moneyForToys}`);
    console.log(`Money for sweaters: ${moneyForSweaters}`);
}

christmasGifts(['16', '20', '46', '12', '8', '20', '49', 'Christmas']);