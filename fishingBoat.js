function fishBoat(input) {

   let budjet = Number(input[0]);
   let season = input[1];
   let numberFisher = Number(input[2]);
   let priceBoat = 0;

   switch (season) {
      case "Spring": priceBoat = 3000; break;
      case "Summer": priceBoat = 4200; break;
      case "Autumn": priceBoat = 4200; break;
      case "Winter": priceBoat = 2600; break;
   }

   if (numberFisher <= 6) {
      priceBoat *= 0.90;
   } else if (6 < numberFisher && numberFisher <= 11) {
      priceBoat *= 0.85;
   } else if (numberFisher > 12) {
      priceBoat *= 0.75;
   }

   if (numberFisher % 2 === 0 && !(season === "Autumn")) {
      priceBoat *= 0.95;
   }
   if (budjet >= priceBoat) {
      let money = (budjet - priceBoat).toFixed(2);
      console.log(`Yes! You have ${money} leva left.`)
   } else {
      money = (priceBoat - budjet).toFixed(2);
      console.log(`Not enough money! You need ${money} leva.`)
   }

}

//fishBoat(["3000", "Summer", "11"])
