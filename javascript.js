let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

const playerPreInput = prompt("Rock, Paper or Scissors?");
const playerSelection = playerPreInput.toLowerCase();
const computerSelection = getComputerChoice();

// Randomly selects rock, paper or scissors
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

// A round of rock, paper and scissors
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

console.log(playRound(playerSelection, computerSelection))