function numberInRange(input) {

  let sum = Number(input[0]);

  if (sum >= -100 && sum <= 100 && sum !== 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
//numberInRange(["25"])