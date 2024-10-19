function weather(input) {

    let wheather = Number(input[0]);
    if (wheather >= 26.00 && wheather <= 35.00) {
        console.log('Hot');
    } else if (wheather >= 20.01 && wheather <= 25.9) {
        console.log('Warm');
    } else if (wheather >= 15.00 && wheather <= 20.00) {
        console.log('Mild');
    } else if (wheather >= 12.00 && wheather <= 14.9) {
        console.log('Col');
    } else if (wheather >= 5.00 && wheather <= 11.9) {
        console.log('Cold');
    } else {
        console.log('Unknow');
    }

}
//weather([0])
