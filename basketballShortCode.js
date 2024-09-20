function basketballEquipment(input) {
  let oneYearPrice = Number(input[0]);

  let priceShoes = 0.6 * oneYearPrice;
  let priceBasketballShirt = 0.8 * priceShoes;

  let priceBall = priceBasketballShirt / 4;
  let priceAccessories = priceBall / 5;


  let allSum = oneYearPrice + priceShoes + priceBasketballShirt + priceBall + priceAccessories;
  console.log(allSum)

}
//basketballEquipment(["550"])
