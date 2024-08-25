function oscars(input) {
    let index = 0;
    let actorName = input[index];
    index++;
    let finalAcademyPoints = Number(input[index]);
    index++;
    let numberJudge = Number(input[index]);
    index++;

    for (let i = 0; i < numberJudge; i++) {
        let nameJudge = input[index];
        index++
        let academyPointsJudge = Number(input[index]) * nameJudge.length / 2;
        index++
        finalAcademyPoints += academyPointsJudge

        if (finalAcademyPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${finalAcademyPoints.toFixed(1)}!`);
            break
        }
    }
    if (finalAcademyPoints <= 1250.5) {
        let neededPoints = (1250.5 - finalAcademyPoints).toFixed(1)
        console.log(`Sorry, ${actorName} you need ${neededPoints} more!`);
    }
}
//oscars(["Sandra Bullock",
//     "340",
//     "5",
//     "Robert De Niro",
//     "50",
//     "Julia Roberts",
//     "40.5",
//     "Daniel Day-Lewis",
//     "39.4",
//     "Nicolas Cage",
//     "29.9",
//     "Stoyanka Mutafova",
//     "33"])
