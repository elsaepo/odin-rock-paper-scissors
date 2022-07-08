let moveSet = ["rock", "paper", "scissors"];
let resultText = document.getElementById("result-text");
let resultFlavor= document.getElementById("result-flavor");
let playerScoreDiv = document.getElementById("player-score");
let computerScoreDiv = document.getElementById("computer-score");
let playerImage = document.getElementById("player-move");
let computerImage = document.getElementById("computer-move");
let playerImageBox = document.getElementsByClassName("player-icon")[0];
let computerImageBox = document.getElementsByClassName("computer-icon")[0];
let endButton = document.getElementById("endgame-button");

let roundTotal = 0;
let playerScore = 0;
let computerScore = 0;
let gameWinner = "";
const maxScore = 5;

const victoryGreen = "#7ab97a";
const defeatRed = "#c58080";
const defaultBlue = "#6e889e";

function randomArrayItem(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}

function computerPlay(){
    return moveSet[Math.floor(Math.random()*3)];
}

function gameRound(playerSelection, computerSelection){
    let roundDrawArray = [
        `Wow! ${playerSelection} and ${computerSelection} are equally matched.`,
        `${playerSelection} against ${computerSelection}, nothing to see here.`,
        `Even Steven! ${playerSelection} does nothing to ${computerSelection}. Conversely, ${computerSelection} does nothing to ${playerSelection.toLowerCase()}.`,
        `${playerSelection} versus ${computerSelection}. When an immovable object meets an unstoppable force.`,
        `You're going to need more than a ${playerSelection.toLowerCase()} to beat the computer's ${computerSelection}.`
    ]
    let roundWinArray = [
        `${playerSelection} reigns supreme! Try harder next time, ${computerSelection}.`,
        `Bam! ${playerSelection} crushes the computer's ${computerSelection}.`,
        `${playerSelection} is victorious over ${computerSelection}.`,
        `The computer's ${computerSelection} trembles under the might of your ${playerSelection.toLowerCase()}.`,
        `Nice! Your ${playerSelection.toLowerCase()} has an easy win over ${computerSelection}.`
    ]
    let roundLoseArray = [
        `Ouch. ${playerSelection} loses to ${computerSelection}.`,
        `Close one, but your ${playerSelection.toLowerCase()} can't stand up to the computer's ${computerSelection}.`,
        `Get them next time. But don't pick ${playerSelection.toLowerCase()} against ${computerSelection}.`,
        `${playerSelection} is destroyed by ${computerSelection}.`,
        `${playerSelection} against ${computerSelection}. You never stood a chance.`
    ]
    roundTotal++;

    playerImage.src = `images/${playerSelection.toLowerCase()}-hand.svg`;
    computerImage.src = `images/${computerSelection}-hand.svg`;

    playerImage.classList.remove("player-animation");
    computerImage.classList.remove("computer-animation");

    void playerImage.offsetWidth;

    playerImage.classList.add("player-animation");
    
    computerImage.classList.add("computer-animation");
    computerImage.classList.add("image-flip");
    if(playerSelection.toLowerCase() === computerSelection){
        resultText.style.color = "";
        resultText.innerHTML = `ROUND DRAW`
        playerImageBox.style["background-color"] = defaultBlue;
        computerImageBox.style["background-color"] = defaultBlue;
        resultFlavor.innerHTML = randomArrayItem(roundDrawArray);
        return "draw";
    } else if (playerSelection === "Rock" && computerSelection === "paper" || playerSelection === "Paper" && computerSelection === "scissors" || playerSelection === "Scissors" && computerSelection === "rock"){
        resultText.style.color = defeatRed;
        resultText.innerHTML = `ROUND DEFEAT`;
        playerImageBox.style["background-color"] = defaultBlue;
        computerImageBox.style["background-color"] = defaultBlue;
        setTimeout(function(){
            playerImageBox.style["background-color"] = defeatRed;
            computerImageBox.style["background-color"] = victoryGreen;
        }, 100);
        resultFlavor.innerHTML = randomArrayItem(roundLoseArray);
        computerScore++;
        return "computerVictory";
    } else {
        resultText.style.color = victoryGreen;
        resultText.innerHTML = `ROUND VICTORY`;
        playerImageBox.style["background-color"] = defaultBlue;
        computerImageBox.style["background-color"] = defaultBlue;
        setTimeout(function(){
        playerImageBox.style["background-color"] = victoryGreen;
        computerImageBox.style["background-color"] = defeatRed;
        }, 100);
        resultFlavor.innerHTML = randomArrayItem(roundWinArray);
        playerScore++;
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
    moveButtonArray.forEach(button => button.style.display = "none");
    endButton.style.display = "flex";
    endButton.addEventListener("click", function(){
        gameReset();
    })
    if (playerScore > computerScore){
        endButton.style["background-color"] = victoryGreen;
        endButton.innerHTML = "<h3>TOTAL VICTORY!</h3>";
        resultText.style.color = victoryGreen;
        resultText.innerHTML = `Congratulations`;
        resultFlavor.innerHTML = `${finaleString} you're the winner! You're officially smarter than a computer. Tell your friends.`;
    } else {
        endButton.style["background-color"] = defeatRed;
        endButton.innerHTML = "<h3>COMPLETE DEFEAT</h3>"
        resultText.style.color = defeatRed;
        resultText.innerHTML = `Oh no...`;
        resultFlavor.innerHTML = `${finaleString} the computer is the winner. Don't feel too bad, you only lost to a machine that can't think.`;
    }
}

function gameReset(){
    moveButtonArray.forEach(button => button.style.display = "flex");
    endButton.style.display = "none";
    playerImageBox.style["background-color"] = defaultBlue;
    computerImageBox.style["background-color"] = defaultBlue;
    resultText.style.color = "";
    playerImage.classList.remove("player-animation");
    computerImage.classList.remove("computer-animation");
    playerImage.src = `images/question-mark.svg`;
    computerImage.classList.remove("image-flip");
    computerImage.src = `images/question-mark.svg`;
    roundTotal = 0;
    playerScore = 0;
    computerScore = 0;
    playerScoreDiv.innerHTML = "0";
    computerScoreDiv.innerHTML = "0";
    resultText.innerHTML = "Choose wisely..."
    resultFlavor.innerHTML = "First to 5 points wins the game."
}

let moveButtonArray = document.querySelectorAll("button.move-button");
moveButtonArray.forEach(button => button.addEventListener("click", function(){
    game(this.id);
}))