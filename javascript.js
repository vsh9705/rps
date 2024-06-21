function getComputerChoice(){
    var input = Math.floor(Math.random() * 3);
    var c_choice;
    if(input === 0){
        c_choice = "rock";
    }
    else if(input === 1){
        c_choice = "paper";
    }
    else{
        c_choice = "scissors";
    }
    return c_choice;
}

function getHumanChoice(){
    var input = prompt("Select: Rock/Paper/Scissors")
    return input.toLowerCase();
}


