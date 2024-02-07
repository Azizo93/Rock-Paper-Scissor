function playerSelection(userInput) {
    
    if (userInput === null || userInput.trim() === '') {
        return {
            error: userInput === null ? 
            `Please choose between 'Rock', 'Paper', or 'Scissors'. '${userInput}' is not a valid choice.` : 
            `Please choose between 'Rock', 'Paper', or 'Scissors'. You cannot leave it empty.`,
            type: userInput === null ? 'NullInput' : 'EmptyInput'
        };
    }

    userInput = userInput.trim().replace(/\s+/g, '');

    const validChoices = {
        'rock': { userChoice: 'Rock', number: 0 },
        'paper': { userChoice: 'Paper', number: 1 },
        'scissors': { userChoice: 'Scissors', number: 2 }
    };

    const resultInput = userInput.toLowerCase(); 

    if (!validChoices.hasOwnProperty(resultInput)) {
        return {
            error: `Invalid input: '${userInput}' is not a valid choice.`,
            type: 'InvalidInput'
        };
    }

    return validChoices[resultInput];
}

// Testing code
const userInput1 = 'rock';
const userInput2 = 'paper';
const userInput3 = 'scissors';
const userInputError1 = '';
const userInputError2 = 'Bear';
const userInputError3 = 'PAper5';
const userInputError4 = 'sçiss0R%?';
const userInputError5 = '   R o c K  ';
const userInputError6 = 'ロック'; // Japanese characters for "rock"
const userInputError7 = null;

console.log(`User's choice 1: ${playerSelection(userInput1)?.userChoice} (${playerSelection(userInput1)?.number})`);
console.log(`User's choice 2: ${playerSelection(userInput2)?.userChoice} (${playerSelection(userInput2)?.number})`);
console.log(`User's choice 3: ${playerSelection(userInput3)?.userChoice} (${playerSelection(userInput3)?.number})`);
console.log(`User's choice 4: ${playerSelection(userInputError1)?.error}`);
console.log(`User's choice 5: ${playerSelection(userInputError2)?.error}`);
console.log(`User's choice 6: ${playerSelection(userInputError3)?.error}`);
console.log(`User's choice 7: ${playerSelection(userInputError4)?.error}`);
console.log(`User's choice 8: ${playerSelection(userInputError5)?.userChoice}`);
console.log(`User's choice 9: ${playerSelection(userInputError6)?.error}`);
console.log(`User's choice 10: ${playerSelection(userInputError7)?.error}`);
