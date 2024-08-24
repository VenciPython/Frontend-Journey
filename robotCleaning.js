//example 1
function robotCleaning(arrayOfPlates) {
    let index = 0;
    let currPlate = arrayOfPlates[index];

    while (index < arrayOfPlates.length) {
        currPlate = arrayOfPlates[index];
        console.log(currPlate);
        index++;
    }
}

robotCleaning(['plates', 'tray', 'dish', 'plates', 'plates', 'plates',])
//________________________________________________________________________

//example 2
function robotCleaning(arrayOfPlates) {
    let index = 0;
    let currPlate = arrayOfPlates[index];

    while (currPlate !== 'Finish') {
        console.log(currPlate);
        index++;
        currPlate = arrayOfPlates[index]
    }
}

robotCleaning(['plates', 'tray', 'Finish', 'plates', 'plates', 'plates',])
