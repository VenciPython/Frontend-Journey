// Входни данни
let numberOfStudents = 10; // брой на студентите
let grades = [3.00, 2.99, 5.68, 3.01, 4, 4, 6.00, 4.50, 2.44, 5.00]; // оценки на студентите

let topStudents = 0;
let betweenFourAndFive = 0;
let betweenThreeAndFour = 0;
let fail = 0;
let totalSum = 0;

for (let studentIndex = 0; studentIndex < numberOfStudents; studentIndex++) {
    let grade = grades[studentIndex];
    totalSum += grade;

    if (grade >= 5.00) {
        topStudents++;
    } else if (grade >= 4.00) {
        betweenFourAndFive++;
    } else if (grade >= 3.00) {
        betweenThreeAndFour++;
    } else {
        fail++;
    }
}

// Изчисляване на процентите
let topStudentsPercent = (topStudents / numberOfStudents * 100).toFixed(2);
let betweenFourAndFivePercent = (betweenFourAndFive / numberOfStudents * 100).toFixed(2);
let betweenThreeAndFourPercent = (betweenThreeAndFour / numberOfStudents * 100).toFixed(2);
let failPercent = (fail / numberOfStudents * 100).toFixed(2);

// Изчисляване на средния успех
let averageGrade = (totalSum / numberOfStudents).toFixed(2);

// Извеждане на резултатите
console.log(`Top students: ${topStudentsPercent}%`);
console.log(`Between 4.00 and 4.99: ${betweenFourAndFivePercent}%`);
console.log(`Between 3.00 and 3.99: ${betweenThreeAndFourPercent}%`);
console.log(`Fail: ${failPercent}%`);
console.log(`Average: ${averageGrade}`);