function print(text, text2) {
    console.log(text + " " + text2);
}

function sayHello() {
    console.log("Hello");
}

print("Hello", "world");
print();
sayHello();

function add(a, b) {
    //return a + b;
    let c = a + b;
    return c;
}
let result = add(3, 5);
result += 1;
console.log(add(result, 4));

// switch (expression){
//     case value1: 
//         // кода който ще се изпълни ако е expression == value1
//         break;
//     case value2:
//         // кода който ще се изпълни ако е expression == value2
//         break;
//     default:
//         // кода който ще се изпълни ако expression не е равна на нито едно value


// }

// function weekdays(input) {

//     let dayName;

//     switch (input) {
//         case 1:
//             dayName = "Monday";
//             break;
//         case 2:
//             dayName = "Tuesday";
//             break;
//         case 3:
//             dayName = "Wednesday";
//             break;
//         case 4:
//             dayName = "Thursdaay";
//             break;
//         case 5:
//             dayName = "Friday";
//             break;
//         case 6:
//             dayName = "Saturday";
//             break;
//         case 7:
//             dayName = "Sunday";
//             break;
//         default:
//             dayName = "Unknow";

//     }
//     return dayName;
// }
// const dayname = weekdays(7);
// dayname= 5;
// console.log(dayname);

// Задача 1: Основна функция
// Описание: Напишете функция square, която приема едно число като аргумент и връща квадратния му корен.

// Задача 2: Функция с параметри по подразбиране
// Описание: Напишете функция greetUser, която приема два параметъра - име и име на потребител. Ако не се подаде второ име, използвайте "Guest" като стойност по подразбиране.

// Задача 3: Функция с произволен брой аргументи
// Описание: Напишете функция average, която приема произволен брой числови аргументи и връща тяхната средна стойност.

// Задача: Функция за определяне на ден от седмицата
// Описание: Напишете функция getDayType, която приема число от 1 до 7 (представляващо ден от седмицата, където 1 е понеделник и 7 е неделя) и връща информация за деня - дали е работен ден или уикенд.
