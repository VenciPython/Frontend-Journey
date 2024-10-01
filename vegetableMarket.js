function vegetableMarket(input) {
    let priceKiloVegetables = Number(input[0]);
    let priceKiloFruits = Number(input[1]);
    let kilogramVegetables = Number(input[2]);
    let kilogramFruits = Number(input[3]);

    let allPrice = (priceKiloVegetables * kilogramVegetables) + (priceKiloFruits * kilogramFruits);
    let priceInEuro = allPrice / 1.94;

    console.log(priceInEuro.toFixed(2));

}
vegetableMarket(['0.194',
    '19.4',
    '10',
    '10'])
