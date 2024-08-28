function tennisRanklist(input) {
    let index = 0;
    let numOfTournament = Number(input[index]);
    index++;
    let stratedPoints = Number(input[index]);
    index++;
    let percentWinRate = 0;
    let initialPoints = 0

    for (let i = 0; i <= numOfTournament; i++) {
        let currResult = input[index];
        index++;
        switch (currResult) {
            case "W": initialPoints += 2000; percentWinRate++; break;
            case "F": initialPoints += 1200; break;
            case "SF": initialPoints += 720; break;
        }
    }
    percentWinRate = percentWinRate / numOfTournament * 100;
    console.log(`Final points: ${stratedPoints + initialPoints}`);
    console.log(`Average points: ${Math.floor(initialPoints / numOfTournament)}`);
    console.log(`${percentWinRate.toFixed(2)}%`);
}
/*tennisRanklist(["4",
    "750",
    "SF",
    "W",
    "SF",
    "W"])
*/
