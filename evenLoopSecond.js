function evenLoop(input) {
  num = Number(input[0]);

  for (sum = 0; sum <= num; sum += 2) {
    console.log(Math.pow(2, sum));  // повдигане на 2ра степен
  }
}
//evenLoop(["10"])
