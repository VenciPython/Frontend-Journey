function computerRoom(input) {
    let month = input[0];
    let hours = Number(input[1]);
    let people = Number(input[2]);
    let timeOfDay = input[3];

    let pricePerHour = 0;

    if (month === 'march' || month === 'april' || month === 'may') {
        if (timeOfDay === 'day') {
            pricePerHour = 10.50;
        } else {
            pricePerHour = 8.40;
        }
    } else if (month === 'june' || month === 'july' || month === 'august') {
        if (timeOfDay === 'day') {
            pricePerHour = 12.60;
        } else {
            pricePerHour = 10.20;
        }
    }

    if (people >= 4) {
        pricePerHour *= 0.90;
    }

    if (hours >= 5) {
        pricePerHour *= 0.50;
    }

    let totalCost = pricePerHour * hours * people;

    console.log(`Price per person for one hour: ${pricePerHour.toFixed(2)}`);
    console.log(`Total cost of the visit: ${totalCost.toFixed(2)}`);
}
