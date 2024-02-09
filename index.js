//Getting and validating user input
function playerSelection() {
    let userInput = prompt("Please enter your choice (rock, paper, scissors):");

    if (userInput === null || userInput.trim() === '') {
        console.error(userInput === null ? 
            `Please choose between 'Rock', 'Paper', or 'Scissors'. '${userInput}' is not a valid choice.` : 
            `Please choose between 'Rock', 'Paper', or 'Scissors'. You cannot leave it empty.`);
        
        return playerSelection(); 
    }

    userInput = userInput.trim().replace(/\s+/g, '').toLowerCase(); 
    const validChoices = ['rock', 'paper', 'scissors'];

    if (!validChoices.includes(userInput)) {
        console.error(`Invalid input: '${userInput}' is not a valid choice.`);
        console.log("Please choose between 'Rock', 'Paper', or 'Scissors'.");
        return playerSelection();
    }

    return userInput;
}

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

//Game Logic
const startGame = () => {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        let playerChoice = playerSelection();
        let computerChoice = computerPlay();
        let winner = playRound(playerChoice, computerChoice);

        switch (winner) {
            case 'user':
                playerScore++;
                console.log(`You're the winner of the round number ${i+1}! 
                             You have ${playerScore} points. 
                             Computer has ${computerScore} points.`.replace(/\s+/g, ' '));
                break;
            case 'computer':
                computerScore++;
                console.log(`The Computer is the winner of the round number ${i+1}! 
                             You have ${playerScore} points. 
                             Computer has ${computerScore} points.`.replace(/\s+/g, ' '));
                break;
            case 'tie':
                console.log(`You tied the round number ${i+1}! 
                             You have ${playerScore} points. 
                             Computer has ${computerScore} points.`.replace(/\s+/g, ' '));
                break;
            default:
                console.error('Unforseen error in reading winner, the game ended,\
                               Please enter startGame() to start again'.replace(/\s+/g, ' '));
        }
    }

    if (playerScore > computerScore) {
        console.log(`You're the winner of the game! 
                     You beated the Computer, 
                     Your score: ${playerScore} - computer score: ${computerScore}, 
                     Congratulations!`.replace(/\s+/g, ' '));
    }else if (computerScore > playerScore) {
        console.log(`The Computer is the winner of the game! 
                      The Computer has won with the score of ${computerScore} - your score: ${playerScore}. 
                      Next time you'll be lucky!`.replace(/\s+/g, ' '));
    }else if (computerScore === playerScore){
        console.log(`You've tied the game! 
                     The score is You: ${playerScore} - Computer: ${computerScore}. 
                     Next time you'll be lucky!`.replace(/\s+/g, ' '))
    }else{
        console.log(`Your score is ${playerScore}, 
                    computer score is ${computerScore}, 
                    therefore we can't figure out who won, gg anyways!`.replace(/\s+/g, ' '));
    }

    let continueGame = prompt('Insert y to play again or anything else to quit', 'y');

    (continueGame && continueGame.toLowerCase() === 'y') ? 
        startGame() 
        : 
        alert('You quitted the game. See you next time!');
    
    return ('Enter startGame() to play again');
}

console.log('enter startGame() to start the game');