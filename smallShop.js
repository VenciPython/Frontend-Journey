function smallShop(input) {

  let product = input[0];
  let city = input[1];
  let numberOfProduct = Number(input[2]);

  if (city === "Sofia") {
    switch (product) {
      case "coffee":
        numberOfProduct *= 0.50;
        break;
      case "water":
        numberOfProduct *= 0.80;
        break;
      case "beer":
        numberOfProduct *= 1.20;
        break;
      case "sweets":
        numberOfProduct *= 1.45;
        break;
      case "peanuts":
        numberOfProduct *= 1.60
        break;

    }

  } else if (city === "Plovdiv") {
    switch (product) {
      case "coffee":
        numberOfProduct *= 0.40;
        break;
      case "water":
        numberOfProduct *= 0.70;
        break;
      case "beer":
        numberOfProduct *= 1.15;
        break;
      case "sweets":
        numberOfProduct *= 1.30;
        break;
      case "peanuts":
        numberOfProduct *= 1.50
        break;
    }
  } else if (city === "Varna") {
    switch (product) {
      case "coffee":
        numberOfProduct *= 0.45;
        break;
      case "water":
        numberOfProduct *= 0.70;
        break;
      case "beer":
        numberOfProduct *= 1.10;
        break;
      case "sweets":
        numberOfProduct *= 1.35;
        break;
      case "peanuts":
        numberOfProduct *= 1.55;
        break;
    }
  }
  console.log(numberOfProduct);
}


//smallShop(["coffee", "Varna", "2"])
//smallShop(["peanuts","Plovdiv","1"])
