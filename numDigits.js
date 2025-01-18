function solve(num) {
  let result = 0;
  let numAsStrig = String(num);
  
  for (let i = 0; i < numAsStrig.length; i++) {
    let numAsNum = Number(numAsStrig[i]);
    result = result + numAsNum;
  }
  console.log(result);
}
solve(573);
