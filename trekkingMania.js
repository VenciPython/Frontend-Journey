function trekkingMania(input) {
    let index = 0;
    let groupCount = Number(input[index]);
    index++;
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;
    let group5 = 0;
    let peopleMax = 0

    for (let i = 0; i < groupCount; i++) {
        let currGroupNum = Number(input[index]);
        index++;
        peopleMax += currGroupNum

        if (currGroupNum <= 5) {
            group1 = group1 + currGroupNum;
        } else if (currGroupNum >= 6 && currGroupNum <= 12) {
            group2 = group2 + currGroupNum;
        } else if (currGroupNum >= 13 && currGroupNum <= 25) {
            group3 = group3 + currGroupNum;
        } else if (currGroupNum >= 26 && currGroupNum <= 40) {
            group4 = group4 + currGroupNum;
        } else {
            group5 = group5 + currGroupNum;
        }
    }
    let percentageGroup1 = (group1 / peopleMax) * 100;
    let percentageGroup2 = (group2 / peopleMax) * 100;
    let percentageGroup3 = (group3 / peopleMax) * 100;
    let percentageGroup4 = (group4 / peopleMax) * 100;
    let percentageGroup5 = (group5 / peopleMax) * 100;

    console.log(`${percentageGroup1.toFixed(2)}%`);
    console.log(`${percentageGroup2.toFixed(2)}%`);
    console.log(`${percentageGroup3.toFixed(2)}%`);
    console.log(`${percentageGroup4.toFixed(2)}%`);
    console.log(`${percentageGroup5.toFixed(2)}%`);
}
/*trekkingMania(["10","10","5","1","100","12","26",
    "17",
    "37",
    "40",
    "78"])
*/
