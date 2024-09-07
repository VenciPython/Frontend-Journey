function accountBallance(input) {
    let index = 0;
    let money = input[index];
    let total = 0;
    while (money !== "NoMoreMoney") {
        let currMoneyAsNum = Number(money);

        if (currMoneyAsNum < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        total += currMoneyAsNum;
        console.log(`Increase: ${currMoneyAsNum.toFixed(2)}`);
        index++;
        money = input[index];
    }
    console.log(`Total: ${total.toFixed(2)}`);
}
//accountBallance(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"])
