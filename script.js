let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

function playRound(playerSelection, computerSelection) {
    if ((playerSelection=='rock' && computerSelection=='scissors') || 
        (playerSelection=='paper' && computerSelection=='rock') || 
        (playerSelection=='scissors' && computerSelection=='paper')){
        playerScore = playerScore+1;
        roundWinner = 'player';
    } else if (playerSelection == computerSelection) {
        roundWinner = 'draw';
    } else {
        computerScore = computerScore+1;
        roundWinner = 'computer';
    }
}

function getComputerChoice(){
    var value = Math.floor(Math.random()*3);
    
    if (value==0) { computerChoice='rock' }
    else if (value==1) { computerChoice='paper' }
    else { computerChoice='scissors' }

    return computerChoice;
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5
}

const scoreInfo = document.getElementById('scoreInfo')
const playerScorePara = document.getElementById('playerScore')
const computerScorePara = document.getElementById('computerScore')

const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')

rockBtn.addEventListener('click', () => handleClick('rock'))
paperBtn.addEventListener('click', () => handleClick('paper'))
scissorsBtn.addEventListener('click', () => handleClick('scissors'))

function handleClick(playerChoice) {
    if (isGameOver()==false){
        const computerChoice = getComputerChoice()
        playRound(playerChoice, computerChoice)
        updateScore()
    }
    

    if(isGameOver()) {
        if (playerScore>computerScore) {
            scoreInfo.textContent = 'PLAYER WON!! refresh page to play again'
        } else {
            scoreInfo.textContent = 'COMPUTER WON... refresh page to play again'
        }
    }
}

function updateScore() {
    if (roundWinner === 'draw') {
        scoreInfo.textContent = "It's a draw!"
    } else if (roundWinner === 'player') {
        scoreInfo.textContent = 'You won!'
    } else if (roundWinner === 'computer') {
        scoreInfo.textContent = 'You lost!'
    }

    playerScorePara.textContent = `Player: ${playerScore}`
    computerScorePara.textContent = `Computer: ${computerScore}`
}