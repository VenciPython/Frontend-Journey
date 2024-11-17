function weightCategory(input) {
    let weight = Number(input[0]);
    if (weight < 18.5) {
        console.log("Поднормено тегло");
    } else if (weight <= 24.9) {
        console.log("Нормално тегло");
    } else if (weight <= 29.9) {
        console.log("Наднормено тегло");
    } else {
        console.log("Затлъстяване");
    }
}
//weightCategory([30]);
