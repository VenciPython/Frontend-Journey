function printNumbersWhile(input) {
    let lastNum = Number(input[0]);
    let startNum = 1;
    while (lastNum >= startNum) {
        console.log(startNum);
        startNum += 1;
    }
}
printNumbersWhile(['7'])
