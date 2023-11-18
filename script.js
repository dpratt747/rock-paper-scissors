function getComputerChoice() {
    const moves = ["Rock", "Paper", "Scissors"];
    return moves[moves.length * Math.random() | 0];
}

function playRound(playerSelection, computerSelection) {

    const playerPick = playerSelection.toLowerCase();
    const computerPick = computerSelection.toLowerCase();

    console.log("Player selection is " + playerPick);
    console.log("Computer selection is " + computerPick);

    let playerState = "Lose"
    
    if (playerPick === computerPick) {
        playerState = "Draw"
    }
    else if (playerPick === "rock" && computerPick === "scissors") {
        playerState = "Win";
    } else if (playerPick === "paper" && computerPick === "rock"){
        playerState = "Win";
    } else if (playerPick === "scissors" && computerPick === "paper") {
        playerState = "Win";
    }


    console.log("Players result after round is: " + playerState);

    return playerState
}

function game() {
    
    let playerScore = 0;
    let computerScore = 0;
    const limit = 5;

    while(playerScore + computerScore !== limit) {
        const input = prompt("Please enter your pick from rock, paper or scissors");
        const res = playRound(input, getComputerChoice());

        if (res === "Win") {
            playerScore += 1;
        } else if (res === "Lose") {
            computerScore += 1;
        }
    }

    if (playerScore > computerScore) {
        console.log("Player wins n rounds: " + playerScore);
    } else {
        console.log("Computer wins n rounds: " + computerScore);
    }
       
}

game();

