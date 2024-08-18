function sumOfNumbers(input) {
    let numAsStr = input[0];
    let sum = 0;

    for (let i = 0; i < numAsStr.length; i++) {
        let numAsNum = Number(numAsStr[i]); //преобразувам стринга числа в реални числа
        //console.log(numAsNum); принтирам отделно всяка цифра за проверка
        sum += numAsNum; // събира сбора на всички цифри
    }
    console.log(`The sum of the digits is:${sum}`);;
}
//sumOfNumbers([`2345`])
