function vacationBookList(input) {
  let pagesInBook = Number(input[0]);
  let pagesPerHour = Number(input[1]);
  let totaalDays = Number(input[2]);

  let hourToRead = pagesInBook / pagesPerHour;
  let needToFinish = hourToRead / totaalDays;

  console.log(needToFinish);

}
//vacationBookList([212,20,2])