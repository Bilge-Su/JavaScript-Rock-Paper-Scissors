const choices = ["rock", "paper", "scissors"];
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const result = document.getElementById("result");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
let _playerScore = 0;
let _computerScore = 0;

function playGame(playerSelection) {
    const playerCaseInsensitive = playerSelection.toLowerCase();
    const computerSelection = choices[Math.floor(Math.random()*3)];
    let _result = "";

    if(playerCaseInsensitive ===computerSelection) {
        _result = "It's a tie!";
    } else {
        switch(playerCaseInsensitive) {
            case "rock":
                _result = (computerSelection === "scissors") ? "1 point for the player!" : "1 point for the computer!";
                break;
            case "paper":
                    _result = (computerSelection === "rock") ? "1 point for the player!" : "1 point for the computer!";
                    break;
            case "scissors":
                _result= (computerSelection === "paper") ? "1 point for the player!" : "1 point for the computer!";
                break;
}
    }

    player.textContent = `Player: ${playerCaseInsensitive}`;
    computer.textContent = `Computer: ${computerSelection}`;
    result.textContent = `Result: ${_result}`;

    switch(_result) {
        case "1 point for the player!":
            _playerScore++;
            playerScore.textContent = `Player Score: ${_playerScore}`;
            break;
        case "1 point for the computer!":
            _computerScore++;
            computerScore.textContent = `Computer Score: ${_computerScore}`;
            break;
    }
}