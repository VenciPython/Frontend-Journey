function printMultiplicationTable(number) {
    // Превръщане на числото в низ и извличане на цифрите
    let digits = number.toString().split('').reverse();
    let firstDigit = parseInt(digits[0]);
    let secondDigit = parseInt(digits[1]);
    let thirdDigit = parseInt(digits[2]);

    // Извеждане на таблицата за умножение
    for (let i = 1; i <= thirdDigit; i++) {
        for (let j = 1; j <= secondDigit; j++) {
            for (let k = 1; k <= firstDigit; k++) {
                let result = i * j * k;
                console.log(`${i} * ${j} * ${k} = ${result};`);
            }
        }
    }
}

// Примерен вход
let input = 231;
printMultiplicationTable(input);