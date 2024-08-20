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






-------------
function sumAndProduct(input) {
    let n = Number(input[0]);
    //   let bufer = 0;
    // let m = 0;
    let isAbcd = false;
    let isDcba = false;
 
    for (let a = 1; a <= 9; a++) {
        for (let b = a; b <= 9; b++) {
            for (let c = 0; c <= 9; c++) {
                for (let d = c; d <= 9; d++) {
 
                    let sum = a + b + c + d;
                    let box = a * b * c * d;
                 
                    // if (box === 0) {
                    //     break;
                    // }
                    let del = box / sum;
 
 
                    if (sum === box && n % 10 === 5) {
                        isAbcd = true;
                        break;
                    } else if ((del) === 3 && n % 3 === 0) {
                        isDcba = true;
                        break;
                    }
                }
            }
        }
    }
    if (isAbcd) {
        console.log(`abcd - ${a}${b}${c}${d}`);
    } else if (isDcba) {
        console.log(`dcba - ${d}${c}${b}${a}`);
    } else {
        console.log("Nothing found");
 
    }
}
sumAndProduct(["123"]);