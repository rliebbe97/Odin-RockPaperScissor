// global variable
let isGameOver = false;
let humanScore = 0;
let computerScore = 0;

// human choice

// computer choice
function getComputerChoice(){
    compNumber = Math.floor(Math.random() * 3);

    if (compNumber == "0") {
        return "rock";
    }
    else if (compNumber == "1") {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// who won round
function playRound(playerSelection, computerSelection)
{
    if (playerSelection == computerSelection){
        return "its a draw";
    }
    else if ((playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "rock" && computerSelection == "scissors"))
    {
        humanScore += 1;
        return "human wins";
    }
    else {
        computerScore += 1;
        return "computer wins";
    }
}

// update score

// check winner and if one has won disable buttons and add a play again button
function game(buttonClicked){
    if (computerScore < 5 && humanScore < 5){
        playRound(buttonClicked, getComputerChoice());
        document.getElementById("robot").innerHTML = "robot score: " + computerScore;
        document.getElementById("human").innerHTML = "robot score: " + humanScore;
    }
    else if (computerScore = 5)
    {
        document.getElementById("finalDecision").innerHTML = "Robot wins";
    }
    else{
        document.getElementById("finalDecision").innerHTML = "human wins";
    }
}
// new game