function catFood(input) {
    let numberOfCats = Number(input[0]);
    let firstGroup = 0;
    let secondGroup = 0;
    let thirdGroup = 0;
    let totalFood = 0;

    for (let i = 1; i <= numberOfCats; i++) {
        let foodPerCat = Number(input[i]);
        totalFood += foodPerCat;

        if (foodPerCat >= 100 && foodPerCat < 200) {
            firstGroup++;
        } else if (foodPerCat >= 200 && foodPerCat < 300) {
            secondGroup++;
        } else if (foodPerCat >= 300 && foodPerCat <= 400) {
            thirdGroup++;
        }
    }

    let pricePerKg = 12.45;
    let totalPrice = (totalFood / 1000) * pricePerKg;

    console.log(`Group 1: ${firstGroup} cats.`);
    console.log(`Group 2: ${secondGroup} cats.`);
    console.log(`Group 3: ${thirdGroup} cats.`);
    console.log(`Price for food per day: ${totalPrice.toFixed(2)} lv.`);
}
//catFood([`10`, `256`, `348`, `198`, `322`, `186`, `294`, `321`, `100`, `200`, `30`]);
