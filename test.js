function calculateCatFood(input) {
    let numberOfCats = Number(input[0]);
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let totalFood = 0;

    for (let i = 1; i <= numberOfCats; i++) {
        let foodPerCat = Number(input[i]);
        totalFood += foodPerCat;

        if (foodPerCat >= 100 && foodPerCat < 200) {
            group1++;
        } else if (foodPerCat >= 200 && foodPerCat < 300) {
            group2++;
        } else if (foodPerCat >= 300 && foodPerCat <= 400) {
            group3++;
        }
    }

    let pricePerKg = 12.45;
    let totalPrice = (totalFood / 1000) * pricePerKg;

    console.log(`Group 1: ${group1} cats.`);
    console.log(`Group 2: ${group2} cats.`);
    console.log(`Group 3: ${group3} cats.`);
    console.log(`Price for food per day: ${totalPrice.toFixed(2)} lv.`);
}