function greenYards(input) {

  let yard = input[0];
  let oneMeter = 7.61;
  let price = oneMeter * yard;
  let bonusPrice = (18 / 100) * price;
  let finalPrice = price - bonusPrice;

  console.log(`The final price is: ${finalPrice} lv.`);
  console.log(`The discount is: ${bonusPrice} lv.`);
}

//greenYards([550])
