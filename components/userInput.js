function playerSelection() {
    let userInput = prompt("Please enter your choice (rock, paper, scissors):");

    if (userInput === null || userInput.trim() === '') {
        return {
            error: userInput === null ? 
            `Please choose between 'Rock', 'Paper', or 'Scissors'. '${userInput}' is not a valid choice.` : 
            `Please choose between 'Rock', 'Paper', or 'Scissors'. You cannot leave it empty.`,
            type: userInput === null ? 'NullInput' : 'EmptyInput'
        };
    }

    userInput = userInput.replace(/\s+/g, '');
    const resultInput = userInput.toLowerCase(); 

    let userChoiceNumber;

    switch(resultInput) {
        case 'rock':
            userChoiceNumber = 0;
            break;
        case 'paper':
            userChoiceNumber = 1;
            break;
        case 'scissors':
            userChoiceNumber = 2;
            break;
        default:
            return {
                error: `Invalid input: '${userInput}' is not a valid choice.`,
                type: 'InvalidInput'
            };
    }

    return userChoiceNumber;
}
