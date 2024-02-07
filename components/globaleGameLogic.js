const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let draw = 0;

    for (let i = 0; i < 5; i++){
        //User let user = userInput();
        //Computer let computer = computerInput();
        //Round let winner = roundLogic(user, computer);
        if (winner === 'user') {
            playerScore++;
            console.log(`You're the winner of the round number ${i+1}`);
            console.log(`You have ${playerScore} points`);
            console.log(`Computer has ${computerScore} points`);
        }else if (winner === 'computer'){
            computerScore++;
            console.log(`The Computer is the winner of the round number ${i+1}`);
            console.log(`You have ${playerScore} points`);
            console.log(`Computer has ${computerScore} points`);
        }else{
            draw++;
            console.log(`You tied the round number ${i+1}`);
            console.log(`You have ${playerScore} points`);
            console.log(`Computer has ${computerScore} points`);
        }
    }

    if (playerScore > computerScore) {
        console.log(`You're the winner of the game! You beated the Computer ${playerScore} - ${computerScore}, congratulations!`);
    }else if (computerScore > playerScore) {
        console.log(`The Computer is the winner of the game! The Computer beated you ${computerScore} - ${playerScore}. Next time you'll be lucky!`);
    }else{
        console.log(`You tied the game! The score is ${playerScore} - ${computerScore}. Next time you'll be lucky!`)
    } 
}

const beginGame = () => {
    let userGames = prompt('Welcome to \'Rock, Paper and Scissor - The Game\'! Insert "s" if you want to begin', 's').toLowerCase();
    if (userGames === "s"){
        game();
    }else{
        console.log('If you want to start the game, you have to insert "s"!')
        beginGame();
    }
}