function toyShop(input) {
    
    let priceTrip = Number(input[0]) 
    let numberPuzzles = Number(input[1]) ;
    let numberDolls = Number(input[2]) ;
    let numberBears = Number(input[3]) ;
    let numberMinions =Number(input[4]) ;
    let numberTrucks = Number(input[5]) ;
    
    let pricePuzzles = numberPuzzles * 2.6;
    let priceDolls = numberDolls * 3;
    let priceBears = numberBears * 4.10;
    let priceMinions = numberMinions * 8.20;
    let priceTrucks = numberTrucks * 2;
    
    let priceForAll = (pricePuzzles + priceDolls + priceBears + priceMinions + priceTrucks) * 0.90
    //сметнал съм сумата с извадените 10% за наем
    
    let numberOfAll = numberPuzzles + numberDolls + numberBears + numberMinions + numberTrucks
    
    if (numberOfAll >= 50){
        priceForAll *=0.75
    }
        
    let finalPrice = priceForAll - priceTrip
    
    if(finalPrice < 0){
        console.log(`Not enoug money! ${finalPrice}lv neded`)
    }else{
    console.log(`Yes!${finalPrice}lv left`)
    
    }
           
}

toyShop(["320", "8", "2", "3","5","1"])
