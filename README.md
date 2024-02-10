# Rock Paper Scissors Game

Welcome to the classic game of Rock, Paper, Scissors! This simple JavaScript-based game allows you to play against the computer in a series of rounds.

You can play the game directly in your browser by clicking [here](https://azizo93.github.io/Rock-Paper-Scissor/).

## How to Play

1. Open the game link in your browser.
2. Open the browser's developer tools console.
   - **For Google Chrome:** Press `Ctrl + Shift + J` (Windows/Linux) or `Cmd + Option + J` (Mac).
   - **For Mozilla Firefox:** Press `Ctrl + Shift + K` (Windows/Linux) or `Cmd + Option + K` (Mac).
   - **For Safari:** Press `Option + Cmd + C` (Mac).
   - **For Microsoft Edge:** Press `F12` or `Ctrl + Shift + I`.
3. Once the console is open, type `startGame()` and press `Enter` to begin the game.
4. Follow the prompts to enter your choice of "rock," "paper," or "scissors" for each round.

## Functions

### `playerSelection()`

This function prompts the player to enter their choice (rock, paper, or scissors). It validates the input and returns the player's choice.

### `computerPlay()`

This function generates a random choice for the computer (rock, paper, or scissors).

### `playRound(userChoice, computerChoice)`

This function determines the winner of each round based on the choices made by the player and the computer.

### `startGame()`

This function initiates the game by running a loop for a series of rounds. It ke
