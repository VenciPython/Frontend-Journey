function petshop(input) {
  let dogFood = input[0];
  let catFood = input[1];

  let priceDogFood = dogFood * 2.50;
  let priceCatFood = catFood * 4;
  allprice = priceCatFood + priceDogFood;

  console.log(`${allprice} lv.`);
}
//petshop([5, 4])