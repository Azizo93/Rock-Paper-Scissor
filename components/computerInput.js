
// function computerPlay() {

//     return Math.floor(Math.random() * 3);
//   }
  
//   console.log(computerPlay()); // Output will be 0, 1, or 2



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
  const computerChoice = computerPlay();
  console.log(`Computer's choice: ${computerChoice.choice} (${computerChoice.number})`);
  