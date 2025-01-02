function solve(lengthInCm, widthInCm, heightInCm, percentOccupied) {
    let aquariumVolume = lengthInCm * widthInCm * heightInCm;
    let aquariumVolumeLiters = aquariumVolume / 1000;
    let occupancyFraction = percentOccupied / 100;
    let waterVolume = aquariumVolumeLiters - (aquariumVolumeLiters * occupancyFraction);
    console.log(waterVolume);
}
solve(85, 75, 47, 17);
