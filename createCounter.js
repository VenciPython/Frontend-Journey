function createCounter(input) {
    let counterNum = input; 

    return function() {
        const currentNum = counterNum; 
        counterNum += 1;
        return currentNum; 
    };
}
