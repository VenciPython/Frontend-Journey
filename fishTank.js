function fishTank(input) {

  let lenght = Number(input[0]); //делим сантиметрите на 10 за да преминат в дециметри
  let widht = Number(input[1]); //10
  let hight = Number(input[2]); // 10
  let percentageOccupied = Number(input[3]) / 100;

  let littersCentimeters = lenght * widht * hight;
  let litersDecimeters = littersCentimeters / 1000;
  // умножаваме 10 по 10 по 10 и така получава тези 1000 (в случай че не съм разделил на 10 променливите още в началото

  let result = litersDecimeters - litersDecimeters * percentageOccupied;
  console.log(result);

}
//fishTank(["85 ","75 ","47 ","17"])
