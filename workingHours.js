function workingHours(input) {
  let hours = Number(input[0]);
  let dayOfWeek = input[1];
  if (hours >= 10 && hours <= 18) {
    switch (dayOfWeek) {
      case "Monday":
      case "Tuesday":
      case "Wednesday":
      case "Thursday":
      case "Friday":
      case "Saturday":
        console.log("open");
        break;
      case "Sunday":
        console.log("closed");
    }

  } else {
    console.log("closed");
  }
}
//workingHours(["11", "Sunday"])
