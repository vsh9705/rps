const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
const winner = document.querySelector("#winner");

var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
    var input = Math.floor(Math.random() * 3);
    var c_choice;
    if (input === 0) {
        c_choice = "rock";
    } else if (input === 1) {
        c_choice = "paper";
    } else {
        c_choice = "scissors";
    }
    return c_choice;
}

// function getHumanChoice() {
//     var input = prompt("Select: Rock/Paper/Scissors");
//     return input.toLowerCase();
// }

function playRound(humanChoice) {
    var computerChoice = getComputerChoice();

    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore ++;
        result.textContent = `You win! ${humanChoice} beats ${computerChoice} Your Score: ${humanScore} Computer Score: ${computerScore}`;
    } 
    else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore ++;
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice} Your Score: ${humanScore} Computer Score: ${computerScore}`;
    } 
    else if (humanChoice === 'rock' && computerChoice === 'rock') {
        result.textContent = `Tie! Your Score: ${humanScore} Computer Score: ${computerScore}`;
    } 
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore ++;
        result.textContent = `You win! ${humanChoice} beats ${computerChoice} Your Score: ${humanScore} Computer Score: ${computerScore}`;
    }
     else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore ++;
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice} Your Score: ${humanScore} Computer Score: ${computerScore}`;
    } 
    else if (humanChoice === 'paper' && computerChoice === 'paper') {
        result.textContent = `Tie! Your Score: ${humanScore} Computer Score: ${computerScore}`;
    } 
    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore ++;
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice} Your Score: ${humanScore} Computer Score: ${computerScore}`;
    } 
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore ++;
        result.textContent = `You win! ${humanChoice} beats ${computerChoice} Your Score: ${humanScore} Computer Score: ${computerScore}`;
    } 
    else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
        result.textContent = `Tie! Your Score: ${humanScore} Computer Score: ${computerScore}`;
    }

    if(humanScore === 5){
        winner.textContent = "You win the game!"
        humanScore = 0;
        computerScore = 0;
    }
    else if(computerScore === 5){
        winner.textContent = "Computer wins the game!"
        humanScore = 0;
        computerScore = 0;
    }
}

rock.addEventListener('click', (event)=>{
    if(humanScore === 0 && computerScore === 0){
        winner.textContent = "";
    }
    result.textContent = "";
    var humanChoice = "rock";
    playRound(humanChoice);
})

paper.addEventListener('click', (event)=>{
    if(humanScore === 0 && computerScore === 0){
        winner.textContent = "";
    }
    result.textContent = "";
    var humanChoice = "paper";
    playRound(humanChoice);
})

scissors.addEventListener('click', (event)=>{
    if(humanScore === 0 && computerScore === 0){
        winner.textContent = "";
    }
    result.textContent = "";
    var humanChoice = "scissors";
    playRound(humanChoice);
})
