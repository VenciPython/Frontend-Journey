// Първо решение,  започвам с if след което  switch

function fruitShop(input) {
  let typeFruit = input[0];
  let dayOfWeek = input[1];
  let quantity = Number(input[2]);

  if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Wednesday" || dayOfWeek === "Thursday" || dayOfWeek === "Friday") {
    switch (typeFruit) {
      case "banana":
        let priceBanana = 2.50 * quantity;
        console.log(priceBanana.toFixed(2));
        break;
      case "apple":
        let priceApple = 1.20 * quantity;
        console.log(priceApple.toFixed(2));
        break;
      case "orange":
        let priceOrange = 0.85 * quantity;
        console.log(priceOrange.toFixed(2));
        break;
      case "grapefruit":
        let priceGrapefruit = 1.45 * quantity;
        console.log(priceGrapefruit.toFixed(2));
        break;
      case "kiwi":
        let priceKiwi = 2.70 * quantity;
        console.log(priceKiwi.toFixed(2));
        break;
      case "pineapple":
        let pricePineapple = 5.50 * quantity;
        console.log(pricePineapple.toFixed(2));
        break;
      case "grapes":
        let priceGrapes = 3.85 * quantity;
        console.log(priceGrapes.toFixed(2));
        break;
      default:
        console.log("error");
    }
  } else if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
    switch (typeFruit) {
      case "banana":
        let priceBanana = 2.70 * quantity;
        console.log(priceBanana.toFixed(2));
        break;
      case "apple":
        let priceApple = 1.25 * quantity;
        console.log(priceApple.toFixed(2));
        break;
      case "orange":
        let priceOrange = 0.90 * quantity;
        console.log(priceOrange.toFixed(2));
        break;
      case "grapefruit":
        let priceGrapefruit = 1.65 * quantity;
        console.log(priceGrapefruit.toFixed(2));
        break;
      case "kiwi":
        let priceKiwi = 3.00 * quantity;
        console.log(priceKiwi.toFixed(2));
        break;
      case "pineapple":
        let pricePineapple = 5.60 * quantity;
        console.log(pricePineapple.toFixed(2));
        break;
      case "grapes":
        let priceGrapes = 4.20 * quantity;
        console.log(priceGrapes.toFixed(2));
        break;
    }
  } else {
    console.log("error");
  }
}
//fruitShop(['banana', 'Monday', 2])
