function cleverLily(input) {

    let lilysAge = Number(input[0]);
    let laudryPrice = Number(input[1]);
    let toysPrice = Number(input[2]);
    let initialMoney = 10;
    let saveMoney = 0;
    let toysNumber = 0;

    for (let currAge = 1; currAge <= lilysAge; currAge++) {
        if (currAge % 2 === 0) {
            saveMoney = saveMoney + initialMoney - 1;
            initialMoney += 10;

        } else {
            toysNumber++;
        }
    }
    toysPrice = toysNumber * toysPrice;
    saveMoney = saveMoney + toysPrice;
    if (saveMoney >= laudryPrice) {
        console.log(`Yes! ${(saveMoney - laudryPrice).toFixed(2)}`);
    } else if (saveMoney < laudryPrice) {
        console.log(`No! ${(laudryPrice - saveMoney).toFixed(2)}`);
    }

}

//cleverLily([`10`, `170`, `6`]);
