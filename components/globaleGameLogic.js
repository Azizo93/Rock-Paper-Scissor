const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let draw = 0;

    for (let i = 0; i < 5; i++){
        //User let user = userInput();
        //Computer let computer = computerInput();
        //Round let winner = roundLogic(user, computer);
        switch (winner) {
            case 'user':
                playerScore++;
                console.log(`You're the winner of the round number ${i+1}! 
                             You have ${playerScore} points. 
                             Computer has ${computerScore} points.`);
                break;
            case 'computer':
                computerScore++;
                console.log(`The Computer is the winner of the round number ${i+1}! 
                             You have ${playerScore} points. 
                             Computer has ${computerScore} points.`);
                break;
            default:
                draw++;
                console.log(`You tied the round number ${i+1}! 
                             You have ${playerScore} points. 
                             Computer has ${computerScore} points.`);
        }
    }

    if (playerScore > computerScore) {
        console.log(`You're the winner of the game! 
                     You beated the Computer, 
                     Your score: ${playerScore} - computer-score: ${computerScore}, 
                     Congratulations!`);
    }else if (computerScore > playerScore) {
        console.log(`The Computer is the winner of the game! 
                      The Computer has won with the score of ${computerScore} - your score: ${playerScore}. 
                      Next time you'll be lucky!`);
    }else{
        console.log(`You've tied the game! 
                     The score is ${playerScore} - ${computerScore}. 
                     Next time you'll be lucky!`)
    }

    let continueGame = prompt('Insert "s" to play again', 'n').toLowerCase();
    if (continueGame === 's') {
        game();
    }else{
        alert('You quitted the game. See you next time!');
    }
}

const beginGame = () => {
    let userGames = prompt('Welcome to \'Rock, Paper and Scissor - The Game\'! \
                            Insert "s" if you want to begin', 's').toLowerCase();
    if (userGames === "s"){
        game();
    }else{
        console.log('If you want to start the game, you have to insert "s"!')
        beginGame();
    }
}