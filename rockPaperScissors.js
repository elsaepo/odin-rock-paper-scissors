let moveSet = ["rock", "paper", "scissors"];

function computerPlay(){
    return moveSet[Math.floor(Math.random()*3)];
}

function gameRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        alert(`It's a draw! ${playerSelection} and ${computerSelection} are equally matched.`);
        return "draw";
    } else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock"){
        alert(`You lose! ${computerSelection} beats ${playerSelection}`);
        return "computerVictory";
    } else {
        alert(`Winner winner! ${playerSelection} beats ${computerSelection}`);
        return "playerVictory";
    }
}


function game(){
    let playerScore = 0;
    let computerScore = 0;
    let currentRound = 0;
    const roundTotal = prompt("How many rounds would you like to play?");
    alert(`Let's play ${roundTotal} rounds!`);
    for (let i = 0; i < roundTotal; i++){
        currentRound++;
        alert(`Round ${currentRound}. You: ${playerScore}. Computer: ${computerScore}.`)
        let playerSelection = (prompt("Rock, Paper, or Scissors? Choose wisely")).toLowerCase();
        let gameRoundResult = gameRound(playerSelection, computerPlay());
        if (gameRoundResult === "draw"){
            computerScore += 0.5;
            playerScore += 0.5;
        } else if (gameRoundResult === "computerVictory"){
            computerScore++;
        } else {
            playerScore++;
        };
    };
    let finaleString = `At the end of ${roundTotal} rounds,`
    if (playerScore === computerScore){
        alert(`${finaleString} it's a draw!. Oh. Try again.`)
    } else if (playerScore > computerScore){
        alert(`${finaleString} you're the winner! You're officially smarter than a computer. Tell your friends.`)
    } else {
        alert(`${finaleString} the computer is the winner. Don't feel too bad, you only lost to a machine that can't think.`)
    }
    
}

document.getElementById("gameButton").addEventListener("click", function(){
    game();
});