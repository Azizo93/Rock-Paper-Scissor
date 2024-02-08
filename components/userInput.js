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

    let userChoiceNumber;
    switch (userInput) {
        case 'rock':
            userChoiceNumber = 0;
            break;
        case 'paper':
            userChoiceNumber = 1;
            break;
        case 'scissors':
            userChoiceNumber = 2;
            break;
    }

    return userChoiceNumber;
}

const userChoice = playerSelection();
console.log(`${userChoice}`);