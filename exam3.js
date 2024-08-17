function santasHoliday(input) {
   let days = Number(input[0]);
   let housingType = input[1];
   let grade = input[2];
   let pricePerNight = 0;

   if (housingType === "room for one person") {
      pricePerNight = 18.00 * (days - 1);
   } else if (housingType === "apartment") {
      pricePerNight = 25.00* (days - 1);
   } else if (housingType === "president apartment") {
      pricePerNight = 35.00 * (days - 1);
   }

   if (housingType === "apartment") {
      if (days < 10) {
         pricePerNight *= 0.70;
      } else if (10 <= days && days < 15) {
         pricePerNight *= 0.65;
      } else {
         pricePerNight *= 0.50;
      }
   } else if (housingType === "president apartment") {
      if (days < 10) {
         pricePerNight *= 0.90;
      }else if (10 <= days && days < 15) {
         pricePerNight *= 0.85;
      } else {
         pricePerNight *= 0.80;
      }
   }

   if (grade === "positive") {
      pricePerNight *= 1.25;
   } else if (grade === "negative") {
      pricePerNight *= 0.90;
   }

   console.log(pricePerNight.toFixed(2));
}

santasHoliday(['30',
   'president apartment',
   'negative'])
