
function computerPlay() {

    return Math.floor(Math.random() * 3);
  }
  
  console.log(computerPlay()); // Output will be 0, 1, or 2



// function computerPlay() {
    
//     const randomNumber = Math.floor(Math.random() * 3);
  
//     let computerChoice;
//     switch (randomNumber) {
//       case 0:
//         computerChoice = 'Rock';
//         break;
//       case 1:
//         computerChoice = 'Paper';
//         break;
//       case 2:
//         computerChoice = 'Scissors';
//         break;
//       default:
//         console.error('Invalid random number generated');
//         break;
//     }
  
//     return {
//       choice: computerChoice,
//       number: randomNumber
//     };
//   }
  
//   const computerChoice = computerPlay();
//   console.log(`Computer's choice: ${computerChoice.choice} (${computerChoice.number})`);
  