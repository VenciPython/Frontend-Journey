// второ решение където започвам с switch и преминавам на if
function fruitShop(input) {
  let typeFruit = input[0];
  let dayOfWeek = input[1];
  let quantity = Number(input[2]);
  let finalPrice = 0;

  switch (dayOfWeek) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      if (typeFruit == "banana") {
        finalPrice = 2.50 * quantity;
        console.log(finalPrice.toFixed(2));
      } else if (typeFruit == "apple") {
        finalPrice = 1.20 * quantity;
        console.log(finalPrice.toFixed(2));
      } else if (typeFruit == "orange") {
        finalPrice = 0.85 * quantity;
        console.log(finalPrice.toFixed(2));
      } else if (typeFruit == "grapefruit") {
        finalPrice = 1.45 * quantity;
        console.log(finalPrice.toFixed(2));
      } else if (typeFruit == "kiwi") {
        finalPrice = 2.70 * quantity;
        console.log(finalPrice.toFixed(2));
      } else if (typeFruit == "pineapple") {
        finalPrice = 5.50 * quantity;
        console.log(finalPrice.toFixed(2));
      } else if (typeFruit == "grapes") {
        finalPrice = 3.85 * quantity;
        console.log(finalPrice.toFixed(2));
      } else {
        console.log("error");
      }
      break;

    case "Saturday":
    case "Sunday":
      if (typeFruit == "banana") {
        finalPrice = 2.70 * quantity;
        console.log(finalPrice.toFixed(2));
      } else if (typeFruit == "apple") {
        finalPrice = 1.25 * quantity;
        console.log(finalPrice.toFixed(2));
      } else if (typeFruit == "orange") {
        finalPrice = 0.90 * quantity;
        console.log(finalPrice.toFixed(2));
      } else if (typeFruit == "grapefruit") {
        finalPrice = 1.60 * quantity;
        console.log(finalPrice.toFixed(2));
      } else if (typeFruit == "kiwi") {
        finalPrice = 3.00 * quantity;
        console.log(finalPrice.toFixed(2));
      } else if (typeFruit == "pineapple") {
        finalPrice = 5.60 * quantity;
        console.log(finalPrice.toFixed(2));
      } else if (typeFruit == "grapes") {
        finalPrice = 4.20 * quantity;
        console.log(finalPrice.toFixed(2));
      } else {
        console.log("error");
      }
      break;
    default: console.log("error"); break;
  }
}
//fruitShop(["grapefruit","Saturday", "1.25"])
