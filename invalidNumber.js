function invalidNumber(input) {
  let sum = Number(input[0]);

  if (!(sum >= 100 && sum <= 200 || sum === 0)) {
    console.log("invalid");
  }
}