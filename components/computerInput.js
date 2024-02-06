function computerPlay() {
    // Generate a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);
  
    let computerChoice;
    switch (randomNumber) {
      case 0:
        computerChoice = 'Rock';
        break;
      case 1:
        computerChoice = 'Paper';
        break;
      case 2:
        computerChoice = 'Scissors';
        break;
      default:
        console.error('Invalid random number generated');
        break;
    }
  
    // Return an object containing the choice and its associated number
    return {
      choice: computerChoice,
      number: randomNumber
    };
  }
  
  // Call the function and log both the choice and its associated number
  const computerChoice = computerPlay();
  console.log(`Computer's choice: ${computerChoice.choice} (${computerChoice.number})`);
  