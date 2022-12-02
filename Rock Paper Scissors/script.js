
let playerScore = 0;
let computerScore = 0;



function getComputerChoice() {
    let rps = ['rock', 'paper', 'scissors'];
    let random = rps[Math.floor(Math.random() * rps.length)];
    return random;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return("It's a draw! Play again." );
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
        return("Computer Win! Paper beats Rock");
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        console.log(playerScore);
        return ('Player win! Rock beats Scissors');
        
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        console.log(playerScore);
        return ('Player Win! Paper beats Rock');
        
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        console.log(computerScore);
        return ('Computer Win! Scissors beats Paper');
        
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        console.log(computerScore);
        return ('Computer Win! Rock beats Scissors');
        
    } else (playerSelection == 'scissors' && computerSelection == 'paper') 
    {
        playerScore++;
        console.log(playerScore);
        return('Player Win! Scissors beats Paper');
        
    } 
}

function game(playerSelection) {

    let player = playerSelection;
    let computer = computerSelection;
   
    console.log(playRound(player, computer));
    
    if (playerScore == 5) {
        return ('The player has defeated computer!');
    } else  if (computerScore == 5) {
        return ('The computer has defeated player!');
    }

}

let playerSelection = prompt("Enter your choice").toLowerCase();
let computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);

console.log(game(playerSelection));
