function solve(numOfRow) {
    let sum = 0;
    let odd = 1;
    for (let i = 0; i < numOfRow; i++) {
        console.log(odd);
        sum += odd;
        odd += 2;
    }
    console.log(`Sum: ${sum}`);
}
