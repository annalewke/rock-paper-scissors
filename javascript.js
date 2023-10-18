let playerScore = 0;
let computerScore = 0;
let roundWinner = "";
let endGame = "";

let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
const computerSelection = getComputerChoice();

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return roundWinner = "tie"
    } else if (
    playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "paper" && computerSelection == "rock" ||
    playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1
        return roundWinner = "player!";
    } else if (
    playerSelection == "rock" && computerSelection == "paper" ||
    playerSelection == "paper" && computerSelection == "scissors" ||
    playerSelection == "scissors" && computerSelection == "rock") {
        computerScore += 1
        return roundWinner = "computer!";
    }
}

function game() {
    playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    playRound(playerSelection, computerSelection)
    console.log(roundWinner)
    playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    playRound(playerSelection, computerSelection)
    console.log(roundWinner)
    playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    playRound(playerSelection, computerSelection)
    console.log(roundWinner)
    playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    playRound(playerSelection, computerSelection)
    console.log(roundWinner)
    playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    playRound(playerSelection, computerSelection)
    console.log(roundWinner)
    if (playerScore > computerScore) {
        return "You won with a score of: " + playerScore;
    } else if (playerScore < computerScore) {
        return "You lost, the computer won with a score of: " + computerScore; 
    } else {
        return "no one won, the scor sits at " + playerScore + " and " + computerScore
    }
}

console.log(game())