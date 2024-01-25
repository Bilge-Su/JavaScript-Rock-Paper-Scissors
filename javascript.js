
function getComputerChoice() {
    const choice = Math.floor(Math.random()*3);
    switch(choice) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

function singleRound(playerSelection) {
    const playerCaseInsensitive = playerSelection.toLowerCase();
}