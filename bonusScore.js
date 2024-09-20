function bonusScore(input) {
  let initialPoints = Number(input[0]);
  let bonusPoints = 0;

  if (initialPoints <= 100) {
    bonusPoints = 5;
  } else if (initialPoints > 100 && initialPoints < 1000) {
    bonusPoints = 0.20 * initialPoints;
  } else if (initialPoints > 1000) {
    bonusPoints = 0.10 * initialPoints;
  }

  if (initialPoints % 2 === 0) {
    bonusPoints += 1;
  } else if (initialPoints % 10 === 5) {
    bonusPoints += 2;
  }

  let result = bonusPoints + initialPoints;

  console.log(bonusPoints);
  console.log(result);
}
//bonusScore(["2703"])
