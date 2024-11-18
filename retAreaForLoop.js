function calculateAreas(input) {
    for (let index = 0; index < input.length; index += 2) {
        let width = Number(input[index]);
        let height = Number(input[index + 1]);
        let retArea = width * height;
        console.log(retArea);
    }
}
//calculateAreas(['3', '4', '5', '6']);
