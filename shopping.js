function shopping(input) {

  let budjet = Number(input[0]);
  let videoCards = Number(input[1]);
  let processors = Number(input[2]);
  let ram = Number(input[3]);

  let videoCardsPrice = videoCards * 250;
  let processorsPrice = (0.35 * videoCardsPrice) * processors;
  let priceRam = (0.10 * videoCardsPrice) * ram;

  allPrice = videoCardsPrice + processorsPrice + priceRam;

  if (videoCards > processors) {
    allPrice *= 0.85;
  }

  if (budjet >= allPrice) {
    console.log(`You have ${(budjet - allPrice).toFixed(2)} leva left!`);
  } else {
    console.log(`Not enough money! You need ${(allPrice - budjet).toFixed(2)} leva more!`);
  }

}
//shopping(["920.45","3","1","1"])
//shopping(["900","2","1","3"])
