function helloWorld(){
  return function(){
    return "Hello World"
  }
}
let result = helloWorld();
console.log(result())
