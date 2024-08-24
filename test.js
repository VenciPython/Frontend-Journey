function christmasGifts(input) {
    let adultsCount = 0;
    let kidsCount = 0;
    let moneyForToys = 0;
    let moneyForSweaters = 0;

    for (let i = 0; i < input.length; i++) {
        let age = input[i];

        if (age === "Christmas") {
            break;
        }

        age = Number(age);

        if (age <= 16) {
            kidsCount++;
            moneyForToys += 5;
        } else {
            adultsCount++;
            moneyForSweaters += 15;
        }
    }

    console.log(`Number of adults: ${adultsCount}`);
    console.log(`Number of kids: ${kidsCount}`);
    console.log(`Money for toys: ${moneyForToys}`);
    console.log(`Money for sweaters: ${moneyForSweaters}`);
}

christmasGifts(['16', '20', '14', '25', 'Christmas']);