let scoreCpu = 0;
let scorePlayer = 0;
let x;
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
                x = "You lose! Paper beats rock.";
                scoreCpu ++;
                return("cpu wins")
            case "rock":
                console.log("Nobody wins this round!")
                x = "Nobody wins this round!";
                return("tie")
            case "scissor":
                console.log("You win! Rock beats scissor.")
                x = "You win! Rock beats scissor."
                scorePlayer ++;
                return("player wins")
        }
    }
    if(playerSelection == "paper"){
        switch(computerSelection){
            case "paper":
                console.log("Nobody wins this round!")
                x = "Nobody wins this round!";
                return("tie");
            case "rock":
                console.log("You win! Paper beats rock.")
                x = "You win! Paper beats rock.";
                scorePlayer ++;
                return("player wins")
            case "scissor":
                console.log("You lose! Scissors beats paper.")
                x = "You lose! Scissors beats paper."
                scoreCpu ++;
                return("cpu wins")
        }
    }
    if(playerSelection == "scissor"){
        switch(computerSelection){
            case "paper":
                console.log("You win! Scissors beats paper.")
                x = "You win! Scissors beats paper.";
                scorePlayer ++;
                return("player wins")
            case "rock":
                console.log("You lose! Rock beats scissor.")
                x = "You lose! Rock beats scissor.";
                scoreCpu ++;
                return("cpu wins")
            case "scissors":
                console.log("Nobody wins this round!")
                x = "Nobody wins this round!";
                return("tie")
        }
    }
}
document.querySelector(".paper").addEventListener('click' , function(){
    playRound("paper", computerPlay());
    document.querySelector(".state").textContent = x ;
    document.querySelector(".thisRoundCpu").textContent = scoreCpu;
    document.querySelector(".thisRoundPlayer").textContent = scorePlayer;
    if(scoreCpu == 5){
        scoreCpu = 0;
        scorePlayer = 0;
        x = "";
        alert("Oooooops cpu wins!! Better luck next time. ;D");
        document.querySelector(".state").textContent = x ;
        document.querySelector(".thisRoundCpu").textContent = scoreCpu;
        document.querySelector(".thisRoundPlayer").textContent = scorePlayer;
    }
    if(scorePlayer == 5){
        scoreCpu = 0;
        scorePlayer = 0;   
        x = "";
        alert("Woooooow you win!!");
        document.querySelector(".state").textContent = x ;
        document.querySelector(".thisRoundCpu").textContent = scoreCpu;
        document.querySelector(".thisRoundPlayer").textContent = scorePlayer;
    }
});
document.querySelector(".rock").addEventListener('click' , function(){
    playRound("rock", computerPlay());
    document.querySelector(".state").textContent = x ;
    document.querySelector(".thisRoundCpu").textContent = scoreCpu;
    document.querySelector(".thisRoundPlayer").textContent = scorePlayer;
    if(scoreCpu == 5){
        scoreCpu = 0;
        scorePlayer = 0;
        x = "";
        alert("Oooooops cpu wins!! Better luck next time. ;D");
        document.querySelector(".state").textContent = x ;
        document.querySelector(".thisRoundCpu").textContent = scoreCpu;
        document.querySelector(".thisRoundPlayer").textContent = scorePlayer;
    }
    if(scorePlayer == 5){
        scoreCpu = 0;
        scorePlayer = 0;   
        x = "";
        alert("Woooooow you win!!");
        document.querySelector(".state").textContent = x ;
        document.querySelector(".thisRoundCpu").textContent = scoreCpu;
        document.querySelector(".thisRoundPlayer").textContent = scorePlayer;
    }
});
document.querySelector(".scissor").addEventListener('click' , function(){
    playRound("scissor", computerPlay());
    document.querySelector(".state").textContent = x ;
    document.querySelector(".thisRoundCpu").textContent = scoreCpu;
    document.querySelector(".thisRoundPlayer").textContent = scorePlayer;
    if(scoreCpu == 5){
        scoreCpu = 0;
        scorePlayer = 0;
        x = "";
        alert("Oooooops cpu wins!! Better luck next time. ;D");
        document.querySelector(".state").textContent = x ;
        document.querySelector(".thisRoundCpu").textContent = scoreCpu;
        document.querySelector(".thisRoundPlayer").textContent = scorePlayer;
    }
    if(scorePlayer == 5){
        scoreCpu = 0;
        scorePlayer = 0;   
        x = "";
        alert("Woooooow you win!!");
        document.querySelector(".state").textContent = x ;
        document.querySelector(".thisRoundCpu").textContent = scoreCpu;
        document.querySelector(".thisRoundPlayer").textContent = scorePlayer;
    }
});


