function depositCalculator(input) {
  let depositeSum = Number(input[0]);
  let period = Number(input[1]);
  let percent = Number(input[2]) / 100;

  let oneYearsum = depositeSum * percent;
  let oneMounth = oneYearsum / 12;


  let finalSum = (oneMounth * period) + depositeSum;
  console.log(finalSum);
}

//depositCalculator([200 ,3 , 5.7 ])
//сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)