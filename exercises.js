//1
function evenOrOdd(num) {

    if (num % 2 === 0) {
        console.log(`The number is even`);
    } else {
        console.log(`The number is odd`);
    }
}
evenOrOdd(2);
---------------------------------------------------

//2
  function breakContinue() {

    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            continue;
        }
        console.log(i);
    }
}
breakContinue();
---------------------------------------------------

//3
  function multiplyNumbers(firstNum, secondNum) {
    console.log(firstNum * secondNum);

}
multiplyNumbers(5, 10);
---------------------------------------------------

//4
  // function object() {
    let car = {
        brand: `BMW`,
        speed: 360,
        year: 2024,
        engine: function(){
        console.log("Engine started");
        }
    }

car.engine(); 
console.log(JSON.stringify(car, null,2));
// }

// object()
