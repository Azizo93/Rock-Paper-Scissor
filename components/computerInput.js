//Getting a random choice from computer
function computerPlay() {   
  const randomNumber = Math.floor(Math.random() * 3);
  let computerChoice;

  switch (randomNumber) {
    case 0:
      computerChoice = 'rock';
      break;
    case 1:
      computerChoice = 'paper';
      break;
    case 2:
      computerChoice = 'scissors';
      break;
    default:
      console.error('Invalid choice generated result');
      break;
  }

  return computerChoice;
}

  