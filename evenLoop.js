function evenLoop(input) {
  let sumStart = Number(input[0]);
  let sumEnd = Number(input[1]);

  for (currentSum = sumStart; currentSum <= sumEnd; currentSum++) {
    if (currentSum % 2 === 0) {
      console.log(currentSum);
    }
  }
}
//evenLoop(['8', '26'])