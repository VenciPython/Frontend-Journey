function exam(input) {
    let numberOfStudents = Number(input[0]); // броят на студентите
    let grades = []; // масив за оценките

    // Парсване на стринга с оценките и събиране на числата в масива
    let currentGrade = '';
    for (let i = 0; i < input[1].length; i++) {
        if (input[1][i] !== ',') {
            currentGrade += input[1][i]; // добавяме цифрата към текущото число
        } else {
            grades.push(Number(currentGrade)); // добавяме числото в масива
            currentGrade = ''; // нулираме текущото число
        }
    }
    // Добавяме последната оценка (след последната запетая)
    grades.push(Number(currentGrade));

    // Инициализация на броячи за всяка група
    let topStudents = 0;
    let betweenFourAndFive = 0;
    let betweenThreeAndFour = 0;
    let fail = 0;
    let totalSum = 0;

    // Преброяване на студентите в различни групи и изчисляване на общата сума на оценките
    for (let studentIndex = 0; studentIndex < numberOfStudents; studentIndex++) {
        let grade = grades[studentIndex];
        totalSum += grade;

        if (grade >= 5.00) {
            topStudents++;
        } else if (grade >= 4.00 && grade <= 4.99) {
            betweenFourAndFive++;
        } else if (grade >= 3.00 && grade <= 3.99) {
            betweenThreeAndFour++;
        } else {
            fail++;
        }
    }

    // Изчисляване на процентите за всяка група
    let topStudentsPercent = (topStudents / numberOfStudents * 100).toFixed(2);
    let betweenFourAndFivePercent = (betweenFourAndFive / numberOfStudents * 100).toFixed(2);
    let betweenThreeAndFourPercent = (betweenThreeAndFour / numberOfStudents * 100).toFixed(2);
    let failPercent = (fail / numberOfStudents * 100).toFixed(2);

    // Изчисляване на средния успех
    let averageGrade = (totalSum / numberOfStudents).toFixed(3);

    // Извеждане на резултатите
    console.log(`Top students: ${topStudentsPercent}%`);
    console.log(`Between 4.00 and 4.99: ${betweenFourAndFivePercent}%`);
    console.log(`Between 3.00 and 3.99: ${betweenThreeAndFourPercent}%`);
    console.log(`Fail: ${failPercent}%`);
    console.log(`Average: ${averageGrade}`);
}

// Пример за тестови данни
exam([10, '3.00,2.99,5.68,3.01,4,4,6.00,4.50,2.44,5.00']);


let currentHeight = 5364;
let days = 0;
let success = false;

while (days < 5) {
    let continueClimbing = prompt("Continue climbing? (Yes/No)");
    if (continueClimbing === "END") {
        break;
    }
    
    if (continueClimbing === "No") {
        break;
    }

    let climbedMeters = parseInt(prompt("Enter climbed meters:"));
    
    currentHeight += climbedMeters;
    days++;

    if (currentHeight >= 8848) {
        success = true;
        break;
    }
}

if (success) {
    console.log(`Goal reached for ${days} days!`);
} else {
    console.log("Failed!");
    console.log(currentHeight);
}



-------



function printMultiplicationTable(number) {
    let digits = number.toString().split('').reverse();
    let firstDigit = parseInt(digits[0]);
    let secondDigit = parseInt(digits[1]);
    let thirdDigit = parseInt(digits[2]);

    for (let x = 1; x <= thirdDigit; x++) {
        for (let y = 1; y <= secondDigit; y++) {
            for (let z = 1; z <= firstDigit; z++) {
                let result = x * y * z;
                console.log(`${x} * ${y} * ${z} = ${result};`);
            }
        }
    }
}

let input = 231; // Примерен вход
printMultiplicationTable(input);

