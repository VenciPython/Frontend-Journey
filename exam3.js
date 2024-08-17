function calculateHotelCost(days, roomType, feedback) {
    let pricePerNight;

    if (roomType === "room for one person") {
        pricePerNight = 18.00;
    } else if (roomType === "apartment") {
        pricePerNight = 25.00;
    } else if (roomType === "president apartment") {
        pricePerNight = 35.00;
    }

    let totalCost = pricePerNight * days;

    if (roomType === "apartment") {
        if (days > 15) {
            totalCost *= 0.50;
        } else if (days >= 10) {
            totalCost *= 0.65;
        } else {
            totalCost *= 0.70;
        }
    } else if (roomType === "president apartment") {
        if (days > 15) {
            totalCost *= 0.80;
        } else if (days >= 10) {
            totalCost *= 0.85;
        } else {
            totalCost *= 0.90;
        }
    }

    if (feedback === "positive") {
        totalCost *= 1.25;
    } else if (feedback === "negative") {
        totalCost *= 0.90;
    }

    console.log(totalCost.toFixed(2));
}

// Example usage:
// Inputs: Days = 14, Room type = "apartment", Feedback = "positive"
calculateHotelCost(14, "apartment", "positive");