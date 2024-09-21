function suppliesForSchool(input) {
  let pens = Number(input[0]) * 5.80;
  let markers = Number(input[1]) * 7.20;
  let preparat = Number(input[2]) * 1.20;
  let discount = Number(input[3]) / 100;

  let price = pens + markers + preparat;
  let discountSum = price * discount;
  let finalPrice = price - discountSum;

  console.log(finalPrice);

}
//suppliesForSchool(["4 ","2 ","5 ","13 "])
