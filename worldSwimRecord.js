function worldSwimRecord(input) {

  let currentRecord = Number(input[0]);
  let distance = Number(input[1]);
  let timeToSwim1m = Number(input[2]); //time for one meeter

  let timeWithoutDelay = distance * timeToSwim1m;
  //time in seconds for all distance

  let delay = Math.floor(distance / 15) * 12.5;

  let newTime = delay + timeWithoutDelay;

  if (newTime < currentRecord) {
    console.log(`Yes, he succeeded! The new world record is ${newTime.toFixed(2)} seconds.`);
  } else {
    console.log(`No, he failed! He was ${(newTime - currentRecord).toFixed(2)} seconds slower.`);
  }
}
//worldSwimRecord(["10464", "1500", "20"])
