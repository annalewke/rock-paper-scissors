let playerScore = 0;
let computerScore = 0;
let roundWinner = "";
let endGame = "";

const buttons = Array.from(document.querySelectorAll("button"));

buttons.forEach(function(button){
    button.addEventListener("click", function(){playRound(button.value)})
})

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

let resultDiv = document.querySelector("#result");
let playerWins = document.querySelector("#playerwins");
let comWins = document.querySelector("#comwins");
playerWins.textContent = "Player wins: 0";
comWins.textContent = "Computer wins: 0";

function playRound(playerSelection) {
   let computerSelection = getComputerChoice(); 
    if (playerSelection === computerSelection) {
        resultDiv.innerHTML += "<p>tie</p>";
        return roundWinner = "tie";
    } else if (
    playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "paper" && computerSelection == "rock" ||
    playerSelection == "scissors" && computerSelection == "paper") {
        playerScore += 1;
        resultDiv.innerHTML += "<p>player</p>";
        playerWins.textContent = `Player wins: ${playerScore}`;
        if (playerScore === 5) {
            alert("player wins!")
            resultDiv.innerHTML = "";
            playerScore = 0;
            computerScore = 0;
            playerWins.textContent = "Player wins: 0";
            comWins.textContent = "Computer wins: 0";
        }
        return roundWinner = "player";
    } else if (
    playerSelection == "rock" && computerSelection == "paper" ||
    playerSelection == "paper" && computerSelection == "scissors" ||
    playerSelection == "scissors" && computerSelection == "rock") {
        computerScore += 1;
        resultDiv.innerHTML += "<p>computer</p>";
        comWins.textContent = `Computer wins: ${computerScore}`;
        if (computerScore === 5) {
            alert("computer wins!")
            resultDiv.innerHTML = "";
            playerScore = 0;
            computerScore = 0;
            playerWins.textContent = "Player wins: 0";
            comWins.textContent = "Computer wins: 0";
        }
        return roundWinner = "computer";
    }
}