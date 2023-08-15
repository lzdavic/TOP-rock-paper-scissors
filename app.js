function getComputerChoice() {
    let getRandomNumber = (Math.floor(Math.random() * 3))
    let pcOption = ["sicssors", "rock", "paper"]
    return pcOption[getRandomNumber]
}

const playerSelection = prompt("Make your choice").toLowerCase;
const computerSelection = getComputerChoice();

function playRound(player, computer) {
    if (player == computer) {
        return "draw"
    }
    else if
        ((player == "rock" && computer == "sicssors") ||
        (player == "sicssors" && computer == "paper") ||
        (player == "paper" && computer == "rock")) {
        return "playerWin"
    }
    else if
        ((computer == "rock" && player == "sicssors") ||
        (computer == "sicssors" && player == "paper") ||
        (computer == "paper" && player == "rock")) {
        return "pcWin"
    }
}

console.log(playRound(playerSelection, computerSelection))

    // return `Player wins, ${player} beats ${computer}`
    // return `Computer wins, ${computer} beats ${player}`