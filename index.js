function playerSelection() {
    let userInput = prompt("Please enter your choice (rock, paper or scissors):");
  
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
  
function playRound(userChoice, computerChoice) {
    let roundWinner = "tie";
  
    if (
      (userChoice == 'paper' && computerChoice == 'rock') ||
      (userChoice == 'rock' && computerChoice == 'scissors') ||
      (userChoice == 'scissors' && computerChoice == 'paper')) {
        roundWinner = "user";
    } else if (
      (userChoice == 'rock' && computerChoice == 'paper') ||
      (userChoice == 'scissors' && computerChoice == 'rock') ||
      (userChoice == 'paper' && computerChoice == 'scissors')) {
        roundWinner = "computer";
    }
  
    return roundWinner;
}
  
const startGame = () => {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++){
        let playerChoice = playerSelection();
        let computerChoice = computerPlay();
  
        console.log(`You have chosen: ${playerChoice}`);
        console.log(`The Computer has chosen: ${computerChoice}`);
  
        let winner = playRound(playerChoice, computerChoice);
  
        switch (winner) {
            case 'user':
                playerScore++;
                console.log(`You win Round ${i+1}! 
                             You have ${playerScore} points. 
                             The Computer has ${computerScore} points.`.replace(/\s+/g, ' '));
                break;
            case 'computer':
                computerScore++;
                console.log(`The Computer wins Round ${i+1}! 
                             You have ${playerScore} points. 
                             The Computer has ${computerScore} points.`.replace(/\s+/g, ' '));
                break;
            case 'tie':
                console.log(`You & The Computer have tied Round ${i+1}! 
                             You have ${playerScore} points. 
                             The Computer has ${computerScore} points.`.replace(/\s+/g, ' '));
                break;
            default:
                console.error('There has been an unforseen error in reading the winner. The game has been forced to end.\
                               Please type "startGame()" & press enter to play again'.replace(/\s+/g, ' '));
        }
    }
  
    if (playerScore > computerScore) {
        console.log(`You're the winner of the game! 
                     You have beaten the Computer. 
                     Your score is: ${playerScore} - The Computers score is: ${computerScore}, 
                     Congratulations!`.replace(/\s+/g, ' '));
    }else if (computerScore > playerScore) {
        console.log(`The Computer is the winner of the game! 
                      The Computer has won with a score of ${computerScore} - Your score is: ${playerScore}. 
                      Better luck next time!`.replace(/\s+/g, ' '));
    }else if (computerScore === playerScore){
        console.log(`You've tied the game! 
                     The final score is - You: ${playerScore} - Computer: ${computerScore}. 
                     Try again and lets see if you can beat the Computer!`.replace(/\s+/g, ' '))
    }else{
        console.log(`Your score is ${playerScore}, 
                    computer score is ${computerScore}, 
                    we are struggling to calculate the winner. regardless, well played.`.replace(/\s+/g, ' '));
    }
  
    let continueGame = prompt('Type "y" to play again or anything else to quit', 'y');
  
    (continueGame && continueGame.toLowerCase() === 'y') ? 
        startGame() : 
        alert('You have chosen to end the game. See you next time!');
    
    return ('To play again type "startGame()" and hit enter!');
}

console.log('Welcome to the game of Rock, Paper & Scissors!')
console.log('Please type "startGame()" & press enter to begin the game!');