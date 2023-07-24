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
    console.log('First to 5 points wins!')

    while((playerScore<5) && (computerScore<5)) {
        console.log('Player Score: ' + playerScore);
        console.log('Computer Score: ' + computerScore);
        
        playerChoice = prompt('rock, paper or scissors?');
        playerChoice = playerChoice.toLowerCase();
        
        console.log('Computer chose ' + getComputerChoice());

        play(playerChoice, computerChoice);

        console.log('')
    }

    console.log('Player Score: ' + playerScore);
    console.log('Computer Score: ' + computerScore);
}

var computerChoice, win;
var playerScore=0, computerScore=0;

game();

if (playerScore>computerScore){ console.log('PLAYER WINS!') }
if (playerScore<computerScore){ console.log('COMPUTER WINS!') }