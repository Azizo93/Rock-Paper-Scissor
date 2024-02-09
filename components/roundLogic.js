//Playing one round
function playRound(userChoice, computerChoice) {
  let roundWinner = "tie";

  if (
      (userChoice == 'paper' && computerChoice == 'rock') ||
      (userChoice == 'rock' && computerChoice == 'scissors') ||
      (userChoice == 'scissors' && computerChoice == 'paper')
  ) {
        roundWinner = "user";
  } else if (
      (userChoice == 'rock' && computerChoice == 'paper') ||
      (userChoice == 'scissors' && computerChoice == 'rock') ||
      (userChoice == 'paper' && computerChoice == 'scissors')
  ) {
        roundWinner = "computer";
  }

  return roundWinner;
}