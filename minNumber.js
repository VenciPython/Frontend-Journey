function minNumber(input) {

    let index = 0;
    let number = input[index];
    let minNumber = Number.MAX_SAFE_INTEGER;

    while (number !== 'Stop') {
        let currNum = Number(number);

        if (currNum < minNumber) {
            minNumber = currNum;
        }
        index++;
        number = input[index];
    }
    console.log(minNumber);
}

//minNumber(["100",
//     "99",
//     "80",
//     "70",
//     "Stop"])
