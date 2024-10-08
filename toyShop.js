function toyShop(input) {
  let priceTrip = Number(input[0]);
  let numberPuzzles = Number(input[1]);
  let numberDolls = Number(input[2]);
  let numberBears = Number(input[3]);
  let numberMinions = Number(input[4]);
  let numberTrucks = Number(input[5]);

  let pricePuzzles = numberPuzzles * 2.60;
  let priceDolls = numberDolls * 3.00;
  let priceBears = numberBears * 4.10;
  let priceMinions = numberMinions * 8.20;
  let priceTrucks = numberTrucks * 2.00;

  let priceForAll = (pricePuzzles + priceDolls + priceBears + priceMinions + priceTrucks);
  let rent = priceForAll * 0.10;
  priceForAll = priceForAll - rent;

  let numberOfAll = numberPuzzles + numberDolls + numberBears + numberMinions + numberTrucks;

  if (numberOfAll >= 50) {
    priceForAll *= 0.75;
  }

  let finalPrice = priceForAll - priceTrip;

  if (finalPrice < 0) {
    finalPrice = Math.abs(finalPrice);
    console.log(`Not enough money! ${finalPrice.toFixed(2)} lv needed.`);
  } else {
    console.log(`Yes! ${finalPrice.toFixed(2)} lv left.`);
  }
}
