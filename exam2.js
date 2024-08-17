function footballKit(input) {
   let tShirtPrice = Number(input[0]);
   let budjet = Number(input[1]);

   let priceShort = tShirtPrice * 0.75;
   let priceSocks = priceShort * 0.20;
   let priceFootbalShoes = (priceShort + tShirtPrice) * 2;

   let allPrice = (tShirtPrice + priceShort + priceSocks + priceFootbalShoes);
   let allPriceWithDiscount = allPrice * 0.85;

   if (allPriceWithDiscount >= budjet) {
      console.log(`Yes, he will earn the world-cup replica ball!`);
      console.log(`His sum is ${allPriceWithDiscount.toFixed(2)} lv.`);

   } else {
      let nededMoney = budjet - allPriceWithDiscount
      console.log(`No, he will not earn the world-cup replica ball.`)
      console.log(`He needs ${nededMoney.toFixed(2)} lv. more.`)

   }

}

footballKit([`55`, `310`])
