function getComputerChoice(){
    const randomChoice = Math.floor(Math.random()*3);
    if (randomChoice === 0){
        return 'rock';
    }
    else if (randomChoice === 1){
        return 'paper';
    }
    else return 'scissors';
}

function getHumanChoice(){
    const humanChoice = prompt("Choose between rock , paper or scissors :  ");
    return humanChoice.toLocaleLowerCase();
}

let humanScore = 0;
let computerScore = 0;
function playGame(computerChoice,humanChoice){
    if (humanChoice === computerChoice){
        console.log(`Draw!! Both chose ${humanChoice}`);
    }
    else if(
        (humanChoice === 'rock' && computerChoice === 'scissors')||
        (humanChoice === 'paper' && computerChoice === 'rock')||
        (humanChoice === 'scissors' && computerChoice === 'paper'))
        {
            humanScore++;
            console.log(`You win!! ${humanChoice} beats ${computerChoice}`)
        }

    else {
        computerScore++;
        console.log(`You Lose!! ${computerChoice} beats ${humanChoice}`);
    }

    console.log(`Your Score is ${humanScore}\nComputer's Score is ${computerScore}`)
}

console.log (playGame(getComputerChoice(),getHumanChoice()));
