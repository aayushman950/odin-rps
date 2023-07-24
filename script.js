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
        win = 1;
        return win;
    } else if (playerSelection == computerSelection) {
        win = 2;
        return win;
    } else {
        win = 0;
        return win;
    }
}

var computerChoice, win;

console.log('comp chose ' + getComputerChoice());

playerChoice = prompt('rock, paper or scissors?');

play(playerChoice, computerChoice);

if (win==1) {
    console.log('YOU WIN! ' + playerChoice + ' beats ' + computerChoice);
} else if (win ==0) {
    console.log('YOU LOSE!' + computerChoice + ' beats ' + playerChoice);
} else {
    console.log('DRAW!');
}