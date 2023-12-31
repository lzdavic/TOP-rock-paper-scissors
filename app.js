let playerSelection = "";
let computerSelection = "";
let playerScore = "0"
let playerScoreShow = document.getElementById('player-score')
let computerScore = "0"
let computerScoreShow = document.getElementById('pc-score')
let showResult = document.getElementById('winner-showing')

let buttons = document.querySelectorAll('.choice-btn');

//wait for a click on any button and determine values for a round
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        playerSelection = btn.value; //select choiche determined on the value attribute of each button
        computerSelection = getComputerChoice() //random select a choice for the computer using the function 
        scoreCount(playRound(playerSelection, computerSelection))
        colorizeButtons(computerSelection, playerSelection, playRound(playerSelection, computerSelection)) //play a round with the values defined above and count the score
        declareWinner(computerScore, playerScore)
    });
});

function getComputerChoice() { //randomize an opition for pcChoice
    let getRandomNumber = (Math.floor(Math.random() * 3))
    let pcOption = ["scissors", "rock", "paper"]
    return pcOption[getRandomNumber]
}

function playRound(player, computer) {
    //check tie match
    if (player == computer) { 
        return ("draw")
    }
    else if //check player win
        ((player == "rock" && computer == "scissors") ||
        (player == "scissors" && computer == "paper") ||
        (player == "paper" && computer == "rock")) {
        return ("playerWin")
    }
    else if //check player loss
        ((computer == "rock" && player == "scissors") ||
        (computer == "scissors" && player == "paper") ||
        (computer == "paper" && player == "rock")) {
        return ("pcWin")
    }
}

function scoreCount(result) {
    if (result == 'draw') { //randomize and exhibit message for draw match
        showResult.innerHTML = drawMessages[(Math.floor(Math.random() * 3))]

    } else if (result =='playerWin') { //choiche match win message based on player scores
        showResult.innerHTML = winMessages[(playerScore)]
        playerScore ++
        playerScoreShow.innerHTML = playerScore


    } else if (result == 'pcWin') { //choice match loss message based on computer score
        showResult.innerHTML = lossMessages[(computerScore)]
        computerScore ++
        computerScoreShow.innerHTML = computerScore
    }
}

//check winner on five points and end the game, changing the <body> to a title and a button that refresh
function declareWinner(checkComputer, checkPlayer) {
    if (checkComputer == 5) {
        document.body.innerHTML = 
        `<h1 class="final-title">YOU LOST</h1>
        <button class="final-btn" onClick="window.location.reload();">Replay</button>`

    } else if (checkPlayer == 5) {
        document.body.innerHTML = 
        `<h1 class="final-title">YOU WON</h1>
        <button class="final-btn" onClick="window.location.reload();">Replay</button>`
    }
}

const drawMessages = [
    'Well, no points this round',
    'Tie! Both picked the same',
    'Your choice can`t beat itself'
]

const winMessages = [
    'You won this one! Point for you!',
    'You luck! Get one point',
    'Good play! One more point for you',
    'You beat it, here`s your point'
]

const lossMessages = [
    'Bad Luck! Computer got a point.',
    'The Computer is smarter, you lost this match',
    'Bad choice. You know you have 1/3 of a chance to gain a point right?',
    'More luck next time, or you are going to loose :('
]