function timeMinutes(input) {
  let hour = Number(input[0]);
  let minute = Number(input[1]);

  let fullTimeInMinutes = (hour * 60) + minute + 15; //преобразувам всичко в минути

  let hours = Math.floor(fullTimeInMinutes / 60); //преобразувам  минутите в часове като ги деля и закръглям с Math.floor
  let minutes = fullTimeInMinutes % 60; //търся остатък ако има това са минутитети останали от горното преобразуване използвам модулно деление

  if (hours >= 24) {
    hours = 0;
  }
  if (minutes <= 9) {
    console.log(`${hours}:0${minutes}`);
  } else {
    console.log(`${hours}:${minutes}`);
  }

}
//timeMinutes(["12", "49"])
