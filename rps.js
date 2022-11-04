let round = 0;
let playerPoints = 0;
let computerPoints = 0;

const computerPointHolder = document.querySelector('#computer-points')
const playerPointHolder = document.querySelector('#player-points')
const roundCount = document.querySelector('#round-count')
const computerChoiceDisplay = document.querySelector('#computer-choice');
const playerChoiceDisplay = document.querySelector('#your-choice');
const resultDisplay = document.querySelector('#result');
const winner = document.querySelector('#winner');
const playerChoice = document.querySelectorAll('.rps');
playerChoice.forEach(decision => decision.addEventListener('click', playerSelection));
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetGame);

function getComputerChoice(){
    const choice = Math.random()
    let computerChoice = '';

    if(choice <= 0.32){
        computerChoice = 'Rock';
    }else if(choice >=0.33 && choice <= 0.65){
        computerChoice = 'Paper';
    }else{
        computerChoice = 'Scissors';
    }
    
    return computerChoice;
}

function playerSelection(e){
    let player = e.target.value;
    playRound(player,getComputerChoice());
}

function playRound(playerSelection,computerSelection){
    let result = '';

    if(playerPoints >= 5||computerPoints >= 5) return playerPoints === 5 ? winner.textContent = 'Player Wins' : winner.textContent = 'Computer Wins';

    const computer = computerSelection.toLowerCase();
    const player = playerSelection.toLowerCase();
    round++;

    if(player === 'rock' && computer === 'rock'){
        result = 'You Draw!';
    }else if(player === 'rock' && computer === 'paper'){
        result = 'You Lose!';
        computerPoints++;
    }else if(player === 'rock' && computer === 'scissors'){
        result = 'You Win!';
        playerPoints++;
    }else if(player === 'paper' && computer === 'rock'){
        result = 'You Win!';
        playerPoints++;
    }else if(player === 'paper' && computer === 'paper'){
        result = 'You Draw!';
    }else if(player === 'paper' && computer === 'scissors'){
        result = 'You Lose!';
        computerPoints++;
    }else if(player === 'scissors' && computer === 'rock'){
        result = 'You Lose!';
        computerPoints++;
    }else if(player === 'scissors' && computer === 'paper'){
        result = 'You Win!';
        playerPoints++;
    }else if(player === 'scissors' && computer === 'scissors'){
        result = 'You Draw!';
    }else {
        return "ERROR, didn't select an appropiate value";
    }

    resultDisplay.textContent = result;
    playerChoiceDisplay.textContent = player;
    computerChoiceDisplay.textContent = computer;
    roundCount.textContent = round
    playerPointHolder.textContent = playerPoints;
    computerPointHolder.textContent = computerPoints;

   return result;
} 

function resetGame() {
    playerPoints = 0;
    playerPointHolder.textContent = playerPoints;
    computerPoints = 0;
    computerPointHolder.textContent = computerPoints;
    round = 0;
    roundCount.textContent = round;
    winner.textContent = '';
    resultDisplay.textContent = '____';
    playerChoiceDisplay.textContent = '____';
    computerChoiceDisplay.textContent = '____';
}