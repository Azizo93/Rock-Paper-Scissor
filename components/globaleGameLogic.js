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

    let continueGame = prompt('Insert y to play again or anything else to quit', 'y').toLowerCase();

    (continueGame && continueGame === 'y') ? startGame() : alert('You quitted the game. See you next time!');
}