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