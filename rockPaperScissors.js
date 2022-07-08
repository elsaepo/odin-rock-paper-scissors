let moveSet = ["rock", "paper", "scissors"];
let playerDiv = document.getElementById("player-move");
let computerDiv = document.getElementById("computer-move");
let outputDiv = document.getElementById("resultText");
let playerScoreDiv = document.getElementById("player-score");
let computerScoreDiv = document.getElementById("computer-score");

let roundTotal = 0;
let playerScore = 0;
let computerScore = 0;
let gameWinner = "";
const maxScore = 5;

function computerPlay(){
    return moveSet[Math.floor(Math.random()*3)];
}

function gameRound(playerSelection, computerSelection){
    roundTotal++;
    playerDiv.innerHTML = playerSelection;
    computerDiv.innerHTML = computerSelection;
    if(playerSelection === computerSelection){
        outputDiv.innerHTML = `It's a draw! ${playerSelection} and ${computerSelection} are equally matched.`;
        return "draw";
    } else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock"){
        outputDiv.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}`;
        playerScore++;
        return "computerVictory";
    } else {
        outputDiv.innerHTML = `Winner winner! ${playerSelection} beats ${computerSelection}`;
        computerScore++;
        return "playerVictory";
    }
}

function game(playerMove){
    gameRound(playerMove, computerPlay());
    playerScoreDiv.innerHTML = playerScore;
    computerScoreDiv.innerHTML = computerScore;
    if (playerScore >= maxScore || computerScore >= maxScore){
        gameOver();
    }
}

function gameOver(){
    let finaleString = `At the end of ${roundTotal} rounds,`
    if (playerScore > computerScore){
        alert(`${finaleString} you're the winner! You're officially smarter than a computer. Tell your friends.`)
    } else {
        alert(`${finaleString} the computer is the winner. Don't feel too bad, you only lost to a machine that can't think.`)
    }
    gameReset();
}

function gameReset(){
    roundTotal = 0;
    playerScore = 0;
    computerScore = 0;
    playerDiv.innerHTML = "?";
    computerDiv.innerHTML = "?";
    playerScoreDiv.innerHTML = "0";
    computerScoreDiv.innerHTML = "0";
    outputDiv.innerHTML = "First to 5 points wins the game."
}

let moveButtonArray = document.querySelectorAll("button.move-button");
moveButtonArray.forEach(button => button.addEventListener("click", function(){
    game(this.id);
}))