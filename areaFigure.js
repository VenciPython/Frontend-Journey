function areaFigure(input) {
  let figure = input[0];
  let area = 0;

  if (figure === 'square') {
    let a = Number(input[1]);
    area = a * a;

  } else if (figure === 'rectangle') {
    let sideA = Number(input[1]);
    let sideB = Number(input[2]);
    area = sideA * sideB;

  } else if (figure === 'circle') {
    let a = Number(input[1]);
    area = Math.PI * a * a    //Мат ПИ се пише с главни букви PI може и да бъде така:
    //area =  Math.PI * Math.pow(a, 2) - повдига число на степен в случая на втора степен

  } else {
    let a = Number(input[1]);
    let b = Number(input[2]);
    area = a * b / 2;

  }
  console.log(area.toFixed(3))      // до 3тия знан форматиране
}

//areaFigure(["circle","6"])
