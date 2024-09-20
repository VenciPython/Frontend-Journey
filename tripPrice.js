function tripPrice(input) {

   let numberOfPeople = Number(input[0]);
   let numberOfNights = Number(input[1]);
   let numberOfTransportCards = Number(input[2]);
   let numberOfTicketsMuseim = Number(input[3]);

   let priceForNights = 20;
   let priceForTransport = 1.60;
   let priceForTicketsMuseim = 6;

   let totalPriceForNights = priceForNights * numberOfPeople * numberOfNights;
   let totalPriceTransport = priceForTransport * numberOfPeople * numberOfTransportCards;
   let totalPriceMuseim = priceForTicketsMuseim * numberOfPeople * numberOfTicketsMuseim;

   let allPrice = (totalPriceForNights + totalPriceMuseim + totalPriceTransport) * 1.25;

   console.log(allPrice.toFixed(2));

}
//tripPrice(['131', '9', '33', '46'])
