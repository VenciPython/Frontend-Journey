function sumOfNum(input) {
    let index = 0;
    let starNum = Number(input[index]);
    index++;
    let finalSum = 0
    let currNum = Number(input[index])

    while (finalSum < starNum) {
        finalSum = finalSum + currNum;
        index++;
        currNum = Number(input[index]);

    }
    console.log(finalSum)
}
/*sumOfNum(["20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"])
*/
