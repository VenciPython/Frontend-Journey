function basketballEquipment(input) {

  let oneYearPrice = Number(input[0]);
  let shoes = (40 / 100) * oneYearPrice;
  //вместо тази променлива може директно 100 - 40 = 60% от годишната такса значи ще го запишем така: 0.6 * oneYearPrice

  let priceShoes = oneYearPrice - shoes;
  //и ще имам само една променлива -  priceShoes = 0.6 * oneYearPrice

  let basketballShirt = (20 / 100) * priceShoes;
  let priceBasketballShirt = priceShoes - basketballShirt;
  // както и тук 80% от цената на обувките значи ще имам само една променлива - basketballShirt = 0.8 * priceShoes

  let priceBall = priceBasketballShirt / 4;
  let priceAccessories = priceBall / 5;

  let allSum = oneYearPrice + priceShoes + priceBasketballShirt + priceBall + priceAccessories;
  console.log(allSum);

}
//basketballEquipment(["550"])
