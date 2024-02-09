console.log("Hello, Round Logic!");

function whoWins(uChoice, cChoice) {
  let roundWinner = "tie";
  if (
      (uChoice == 1 && cChoice == 0) ||
      (uChoice == 2 && cChoice == 0) ||
      (uChoice == 2 && cChoice == 1)
  ) {
        roundWinner = "user";
  } else if (
      (uChoice == 0 && cChoice == 1) ||
      (uChoice == 0 && cChoice == 2) ||
      (uChoice == 1 && cChoice == 2)
  ) {
        roundWinner = "computer";
  }
//    else if (
//     (uChoice == 0 && cChoice == 0) ||
//     (uChoice == 1 && cChoice == 1) ||
//     (uChoice == 2 && cChoice == 2)
//   ) {
//     roundWinner = "tie";
//   }}
  return roundWinner;
}
