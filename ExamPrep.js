//задача 1
function examPrep(input) {

    let strawberryPrice = Number(input[0]);
    let bananasInKG = Number(input[1]);
    let orangesInKG = Number(input[2]);
    let raspberryInKG = Number(input[3]);
    let strawberryInKG = Number(input[4]);

    let raspberryPrice = strawberryPrice / 2;
    let orangesPrice = raspberryPrice * 0.6;
    let bananasPrice = raspberryPrice * 0.2;

    let strawberryTotal = strawberryPrice * strawberryInKG;
    let bananasTotal = bananasPrice * bananasInKG;
    let raspberryTotal = raspberryPrice * raspberryInKG;
    let orangesTotal = orangesPrice * orangesInKG;

    let totalPrice = strawberryTotal + bananasTotal + raspberryTotal + orangesTotal;

    console.log(totalPrice.toFixed(2));

}
examPrep(['48', '10', '3.3', '6.5', '1.7']);

------

//задача 2
    function examPrep(input) {

        let budget = Number(input[0]);
        let nights = Number(input[1]);
        let pricePerNight = Number(input[2]);
        let extraExpenses = Number(input[3]);

        if (nights > 7) {
            pricePerNight *= 0.95;
        }

        let moneyAllNights = pricePerNight * nights;
        let moneyExtraExpenses = (extraExpenses / 100) * budget;

        let totalMoney = moneyAllNights + moneyExtraExpenses;

        if (totalMoney <= budget) {
            console.log(`Ivanovi will be left with ${(budget - totalMoney).toFixed(2)} leva after vacation.`);
        } else {
            console.log(`${(totalMoney - budget).toFixed(2)} leva needed.`);
        }

    }
examPrep(['800.50', '8', '100', '2']);

---

//задача 3
    function examPrep(input) {

        let budget = Number(input[0]);
        let destination = input[1];
        let season = input[2];
        let days = Number(input[3]);
        let price = 0;

        if (season === 'Summer') {
            switch (destination) {
                case 'Dubai': price = 40000; break;
                case 'Sofia': price = 12500; break;
                case 'London': price = 20250; break;
            }

        } else if (season === 'Winter') {
            switch (destination) {
                case 'Dubai': price = 45000; break;
                case 'Sofia': price = 17000; break;
                case 'London': price = 24000; break;
            }
        }
        let allDaysPrice = price * days;

        if (destination === 'Dubai') {
            allDaysPrice *= 0.7;
        } else if (destination === 'Sofia') {
            allDaysPrice *= 1.25;
        }

        if (budget >= allDaysPrice) {
            console.log(`The budget for the movie is enough! We have ${(budget - allDaysPrice).toFixed(2)} leva left!`);
        } else {
            console.log(`The director needs ${(allDaysPrice - budget).toFixed(2)} leva more!`);
        }
    }
examPrep(['400000', 'Sofia', 'Winter', '20']);

---

//задача 4
    function examPrep(input) {

        let days = Number(input[0]);
        let totalFood = Number(input[1]);
        let biscuitsAmount = 0;
        let dogEatenFood = 0;
        let catEatenFood = 0;
        let biscDayCounter = 0;

        for (let index = 2; index <= days * 2; index++) {
            biscDayCounter++;

            let dogFood = Number(input[index]);//300
            dogEatenFood += dogFood;

            index++;

            let catFood = Number(input[index]);//20
            catEatenFood += catFood;

            if (biscDayCounter === 3) {
                biscuitsAmount += (dogFood + catFood) * 0.1;
                biscDayCounter = 0;
            }
        }

        console.log(`Total eaten biscuits: ${Math.round(biscuitsAmount)}gr.`);

        let totalEatenFood = dogEatenFood + catEatenFood;

        console.log(`${(totalEatenFood / totalFood * 100).toFixed(2)}% of the food has been eaten.`);
        console.log(`${(dogEatenFood / totalEatenFood * 100).toFixed(2)}% eaten from the dog.`);
        console.log(`${(catEatenFood / totalEatenFood * 100).toFixed(2)}% eaten from the cat.`);
    }
examPrep(['3', '1000', '300', '20', '100', '30', '110', '40']);

----

//задача 5
    function examPrep(input) {

        let firstPlayerEggs = Number(input[0]);
        let secondPlayerEggs = Number(input[1]);
        let index = 2;
        let row = input[index];

        while (row !== 'End') {

            if (row === 'one') {
                secondPlayerEggs--;

                if (secondPlayerEggs === 0) {
                    console.log(`Player two is out of eggs. Player one has ${firstPlayerEggs} eggs left.`);
                    break;
                }
            } else if (row === 'two') {
                firstPlayerEggs--;

                if (firstPlayerEggs === 0) {
                    console.log(`Player one is out of eggs. Player two has ${secondPlayerEggs} eggs left.`);
                    break;
                }
            }
            index++;
            row = input[index];
        }

        if (firstPlayerEggs > 0 && secondPlayerEggs > 0) {
            console.log(`Player one has ${firstPlayerEggs} eggs left.`);
            console.log(`Player two has ${secondPlayerEggs} eggs left.`);
        }

    }
examPrep(['5', '4', 'one', 'two', 'one', 'two', 'two', 'End'])

---

//задача 6
    function examPrep(input) {

        let firstNum = input[0];
        let secondNum = input[1];
        let result = '';

        for (let first = Number(firstNum[0]); first <= Number(secondNum[0]); first++) {
            for (let second = Number(firstNum[1]); second <= Number(secondNum[1]); second++) {
                for (let third = Number(firstNum[2]); third <= Number(secondNum[2]); third++) {
                    for (let last = Number(firstNum[3]); last <= Number(secondNum[3]); last++) {


                        if (first % 2 !== 0 && second % 2 !== 0 && third % 2 !== 0 && last % 2 !== 0) {
                            result += `${first}${second}${third}${last} `;
                        }

                    }
                }

            }
        }
        console.log(result);
    }
examPrep(['2345', '6789']);
