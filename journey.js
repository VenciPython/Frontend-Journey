function journey(input) {

   let budjet = Number(input[0]);
   let season = input[1];
   let destination = '';
   let typeJorney = '';

   if (budjet <= 100) {
      if (season === 'summer') {
         budjet *= 0.30;
         destination = 'Bulgaria';
         typeJorney = 'Camp';

      } else if (season === 'winter') {
         budjet *= 0.70;
         destination = 'Bulgaria';
         typeJorney = 'Hotel';
      }
   } else if (budjet <= 1000) {
      if (season === 'summer') {
         budjet *= 0.40;
         destination = 'Balkans';
         typeJorney = 'Camp';

      } else if (season === 'winter') {
         budjet *= 0.80;
         destination = 'Balkans';
         typeJorney = 'Hotel';
      }
   } else if (budjet > 1000) {
      budjet *= 0.90;
      destination = 'Europe';
      typeJorney = 'Hotel';

   }

   console.log(`Somewhere in ${destination}`);
   console.log(`${typeJorney} - ${budjet.toFixed(2)}`);
}

//journey(["678.53", "winter"])
