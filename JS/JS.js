let scoreCpu = 0;
let scorePlayer = 0;
function playerPlay () {
    let userInput;
    do {
    userInput = prompt("Type in paper, rock or scissor");
    if (!userInput) {
        alert("C'mon let's play");
    }
    else {
        userInput = userInput.toLowerCase();
        if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissor') {
        let validInput = userInput;
        return validInput;
        } else {
        alert("Hey! You didn't type paper, rock or scissor...");
        }
    }   
    } while (userInput !== 'rock' || userInput !== 'paper' || userInput !== 'scissor');
    }
function computerPlay(){
   let rndOp = Math.floor(Math.random()*3);
   switch(rndOp){
    case 0:
        return("paper");
    case 1:
        return("rock");
    case 2:
        return("scissor")
    }
}
function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock"){
        switch(computerSelection){
            case "paper":
                console.log("You lose! Paper beats rock.")
                return("cpu wins")
            case "rock":
                console.log("Nobody wins this round!")
                return("tie")
            case "scissor":
                console.log("You win! Rock beats scissor.")
                return("player wins")
        }
    }
    if(playerSelection == "paper"){
        switch(computerSelection){
            case "paper":
                console.log("Nobody wins this round!")
                return("tie")
            case "rock":
                console.log("You win! Paper beats rock.")
                return("player wins")
            case "scissor":
                console.log("You lose! Scissors beats paper.")
                return("cpu wins")
        }
    }
    if(playerSelection == "scissor"){
        switch(computerSelection){
            case "paper":
                console.log("You win! Scissors beats paper.")
                return("player wins")
            case "rock":
                console.log("You lose! Rock beats scissor.")
                return("cpu wins")
            case "scissors":
                console.log("Nobody wins this round!")
                return("tie")
        }
    }
}
function game(){
    for(let i = 0 ; i < 5 ; i++){
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        switch(playRound(playerSelection, computerSelection)){
            case "player wins":
                scorePlayer ++;
                break;
            case "cpu wins":
                scoreCpu ++;
                break;
            case "tie":
                break;
        }
    }
    if( scoreCpu>scorePlayer){
        console.log("You lose the game!")
    }
    else if( scorePlayer > scoreCpu){
        console.log("You win the game!")
    }
    else if( scoreCpu == scorePlayer){
        console.log("Nobody wins!")
    }
}
game();
