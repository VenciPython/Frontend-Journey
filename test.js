function goldMine(input) {
    let index = 0;
    let locationsCount = Number(input[index]);
    index++;

    for (let i = 0; i < locationsCount; i++) {
        let expectedAverageGold = Number(input[index]);
        index++;
        let daysCount = Number(input[index]);
        index++;
        let totalGold = 0;

        for (let j = 0; j < daysCount; j++) {
            let dailyGold = Number(input[index]);
            index++;
            totalGold += dailyGold;
        }

        let averageGold = totalGold / daysCount;

        if (averageGold >= expectedAverageGold) {
            console.log(`Good job! Average gold per day: ${averageGold.toFixed(2)}.`);
        } else {
            let goldNeeded = expectedAverageGold - averageGold;
            console.log(`You need ${goldNeeded.toFixed(2)} gold.`);
        }
    }
}

goldMine(['2', '10', '3', '10.1', '10.2', '10', '20', '2', '5.1', '15.5']);