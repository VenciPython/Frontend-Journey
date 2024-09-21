function repainting(input) {

  let protectiveNylon = Number(input[0]) + 2;
  let paint = Number(input[1]) * 14.50;
  let paintThinner = Number(input[2]) * 5;
  let bag = 0.40;
  let hourkWork = Number(input[3]);

  let paintAdd = (10 / 100) * paint;

  let paintSum = paint + paintAdd;
  let protectiveNylonSum = protectiveNylon * 1.50;

  let allSum = paintSum + protectiveNylonSum + bag + paintThinner;
  let workSumPerhour = (30 / 100) * allSum;
  let workSum = workSumPerhour * hourkWork;

  let finalSum = allSum + workSum;

  console.log(finalSum);

}
//repainting(["10 ","11 ","4 ","8 "])
