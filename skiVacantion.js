function skiVacantion(input) {

   index = 0;  //ръчно обхождане на масив
   let vacantionDays = Number(input[index]); //0
   index++;
   let housingType = input[index]; //1
   index++;
   let grade = input[index]; //2
   let housingPrice = 0;


   switch (housingType) {
      case "room for one person":
         housingPrice = 18 * (vacantionDays - 1);
         break;
      case "apartment":
         housingPrice = 25 * (vacantionDays - 1);
         break;
      case "president apartment":
         housingPrice = 35 * (vacantionDays - 1);
         break;
   }

   if (housingType === 'apartment') {
      if (vacantionDays < 10) {
         housingPrice *= 0.70;
      } else if (10 <= vacantionDays && vacantionDays <= 15) {
         housingPrice *= 0.65;
      } else {
         housingPrice *= 0.50;
      }
   } else if (housingType === 'president apartment') {
      if ((vacantionDays < 10)) {
         housingPrice *= 0.90;
      } else if (10 <= vacantionDays && vacantionDays <= 15) {
         housingPrice *= 0.85;
      } else {
         housingPrice *= 0.80;
      }
   }
   if (grade === 'positive') {
      housingPrice += housingPrice * 0.25;
   } else if (grade === 'negative') {
      housingPrice = housingPrice * 0.90;
   }

   console.log(housingPrice.toFixed(2));

}

//skiVacantion(["30","president apartment","negative"])
