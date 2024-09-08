function maxNumber(input) {

    let index = 0;
    let number = input[index];
    let maxNumber = Number.MIN_SAFE_INTEGER; //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER

    while (number !== 'Stop') {
        let currNum = Number(number);

        if (currNum > maxNumber) {
            maxNumber = currNum;
        }
        index++
        number = input[index]
    }
    console.log(maxNumber);
}

// maxNumber(["100",
//     "99",
//     "80",
//     "70",
//     "Stop"])
