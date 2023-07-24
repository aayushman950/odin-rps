function getComputerChoice(){
    var value = Math.floor(Math.random()*3);
    
    if (value==0) { computerChoice='rock' }
    else if (value==1) { computerChoice='paper' }
    else { computerChoice='scissors' }

    return computerChoice;
}

function play(playerSelection, computerSelection) {

    if ((playerSelection=='rock' && computerSelection=='scissors') || 
        (playerSelection=='paper' && computerSelection=='rock') || 
        (playerSelection=='scissors' && computerSelection=='paper')){
        playerScore = playerScore+1;
        console.log('YOU WIN! ' + playerChoice + ' beats ' + computerChoice);
    } else if (playerSelection == computerSelection) {
        console.log('DRAW!')
    } else {
        computerScore = computerScore+1;
        console.log('YOU LOSE!' + computerChoice + ' beats ' + playerChoice);
    }
}

function game(){
    for (var round=1; round<=5; round++) {
        console.log('Round: ' + round);
        console.log('Player Score: ' + playerScore);
        console.log('Computer Score: ' + computerScore);
        console.log('comp chose ' + getComputerChoice());

        playerChoice = prompt('rock, paper or scissors?');
        playerChoice = playerChoice.toLowerCase();

        play(playerChoice, computerChoice);
    }
}

var computerChoice, win;
var playerScore=0, computerScore=0;

game();

console.log('Final Score: ')
console.log('Player: ' + playerScore)
console.log('Computer: ' + computerScore)