function hotelRoom(input) {
   let month = input[0];
   let numberNights = Number(input[1]);
   let housingStudio = 0;
   let housingApartament = 0;

   switch (month) {
      case 'May':
      case 'October':
         if (numberNights <= 7) {
            housingStudio = 50 * numberNights
         } else if (numberNights > 7 && numberNights <= 14) {
            housingStudio = (50 * numberNights) * 0.95;
         } else if (numberNights > 14) {
            housingStudio = (50 * numberNights) * 0.70;
         }
         housingApartament = 65 * numberNights;
         break;

      case 'June':
      case 'September':
         if (numberNights <= 14) {
            housingStudio = 75.20 * numberNights;
         } else if (numberNights > 14) {
            housingStudio = (75.20 * numberNights) * 0.80;
         }
         housingApartament = 68.70 * numberNights;
         break;

      case 'July':
      case 'August':
         housingStudio = 76 * numberNights;
         housingApartament = 77 * numberNights;
         break;
   }

   if (numberNights > 14) {
      housingApartament *= 0.90;
   }
   console.log(`Apartment: ${housingApartament.toFixed(2)} lv.`);
   console.log(`Studio: ${housingStudio.toFixed(2)} lv.`);

}

hotelRoom(["August", "20"])
