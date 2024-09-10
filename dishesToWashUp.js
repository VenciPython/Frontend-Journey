//Упражнение не е домашно от софт 

function cleanRobot(dishesToWashUp){
    let index = 0;
    let currDish = dishesToWashUp[index];
    let countTray = 0;
    
    while( currDish !== 'stop'){
          console.log(currDish);
        if(currDish === 'tray'){
            countTray++;
            if(countTray === 2 ){
            console.log("This is the last tray");
        }
        }
        index++;
        currDish = dishesToWashUp[index];
    }
}

//cleanRobot(['plate', 'tray', 'spoon', 'cup', 'plate2', 'tray','plate3','plate4' ,'stop'])
