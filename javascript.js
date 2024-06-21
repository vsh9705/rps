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

function getHumanChoice() {
    var input = prompt("Select: Rock/Paper/Scissors");
    return input.toLowerCase();
}

function playRound() {
    var humanChoice = getHumanChoice();
    var computerChoice = getComputerChoice();

    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log(`You win! ${humanChoice} beats ${computerChoice} `);
        humanScore++;
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log(`You lose! ${computerChoice} beats ${humanChoice} `);
        computerScore++;
    } else if (humanChoice === 'rock' && computerChoice === 'rock') {
        console.log(`Tie!`);
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log(`You win! ${humanChoice} beats ${computerChoice} `);
        humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log(`You lose! ${computerChoice} beats ${humanChoice} `);
        computerScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'paper') {
        console.log(`Tie!`);
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log(`You lose! ${computerChoice} beats ${humanChoice} `);
        computerScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log(`You win! ${humanChoice} beats ${computerChoice} `);
        humanScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
        console.log(`Tie!`);
    }

    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

function playGame(){
    for(var i = 0 ; i < 5 ; i++){
        playRound();
    }
    if(humanScore > computerScore){
        console.log("You win the game!")
    }
    else if (humanScore < computerScore){
        console.log("You lose the game!")
    }
    else{
        console.log("The game is a tie!")
    }

    console.log(`Final Human Score: ${humanScore}`);
    console.log(`Final Computer Score: ${computerScore}`);
}

playGame();

