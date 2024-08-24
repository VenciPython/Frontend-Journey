function salary(input) {
    let index = 0
    let numOpenTabs = Number(input[index]);
    index++
    let payment = Number(input[index]);
    index++


    for (let i = 0; i < numOpenTabs; i++) {
        let currTab = input[index];
        index++

        switch (currTab) {
            case "Facebook": payment -= 150; break;
            case "Instagram": payment -= 100; break;
            case "Reddit": payment -= 50; break;
        }

        if (payment <= 0) {
            console.log("You have lost your salary.");
            break;
        }
    }
    if (payment > 0) {
        console.log(Math.floor(payment));
    }

}
//salary(["3","500","Github.com","Stackoverflow.com","softuni.bg"])     //first example input 

//(["10","750","Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"])  //second example input
