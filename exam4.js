function examStatistics(studentCount, grades) {
    let topStudents = 0;
    let between4And5 = 0;
    let between3And4 = 0;
    let fail = 0;
    let totalGrades = 0;

    for (let i = 0; i < studentCount; i++) {
        let grade = grades[i];
        totalGrades += grade;

        if (grade >= 5.00) {
            topStudents++;
        } else if (grade >= 4.00) {
            between4And5++;
        } else if (grade >= 3.00) {
            between3And4++;
        } else {
            fail++;
        }
    }

    let topStudentsPercentage = (topStudents / studentCount) * 100;
    let between4And5Percentage = (between4And5 / studentCount) * 100;
    let between3And4Percentage = (between3And4 / studentCount) * 100;
    let failPercentage = (fail / studentCount) * 100;
    let averageGrade = totalGrades / studentCount;

    console.log(`Top students: ${topStudentsPercentage.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${between4And5Percentage.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${between3And4Percentage.toFixed(2)}%`);
    console.log(`Fail: ${failPercentage.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);
}

// Example usage:
// Inputs: Number of students = 6, Grades = [2.5, 3.5, 4.75, 5.5, 3.0, 4.0]
examStatistics(6, [2.5, 3.5, 4.75, 5.5, 3.0, 4.0]);