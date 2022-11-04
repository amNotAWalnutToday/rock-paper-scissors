let round = 0;
let playerPoints = 0;
let computerPoints = 0;

const winScreen = document.querySelector('#win-lose')
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

    if(playerPoints >= 5){
        winScreen.classList.remove('hide');
        winScreen.classList.add('win');
        winScreen.textContent = "Congratulations, You're a Winner!"
    }else if(computerPoints >= 5){
        winScreen.classList.remove('hide');
        winScreen.classList.add('lose');
        winScreen.textContent = 'GAME OVER!'
    }

    if(playerPoints >= 5||computerPoints >= 5) return playerPoints === 5 ? winner.textContent = 'Player Wins' : winner.textContent = 'Computer Wins';

    const computer = computerSelection.toLowerCase();
    const player = playerSelection.toLowerCase();
    round++;

    if(player === 'rock' && computer === 'rock'){
        result = 'You Draw!';
        removeChoice();
        playerChoiceDisplay.classList.add('fa-hand-rock');
        computerChoiceDisplay.classList.add('fa-hand-rock');
    }else if(player === 'rock' && computer === 'paper'){
        result = 'You Lose!';
        computerPoints++;
        removeChoice();
        playerChoiceDisplay.classList.add('fa-hand-rock');
        computerChoiceDisplay.classList.add('fa-hand-paper');
    }else if(player === 'rock' && computer === 'scissors'){
        result = 'You Win!';
        playerPoints++;
        removeChoice();
        playerChoiceDisplay.classList.add('fa-hand-rock');
        computerChoiceDisplay.classList.add('fa-hand-scissors');
    }else if(player === 'paper' && computer === 'rock'){
        result = 'You Win!';
        playerPoints++;
        removeChoice();
        playerChoiceDisplay.classList.add('fa-hand-paper');
        computerChoiceDisplay.classList.add('fa-hand-rock');
    }else if(player === 'paper' && computer === 'paper'){
        result = 'You Draw!';
        removeChoice();
        playerChoiceDisplay.classList.add('fa-hand-paper');
        computerChoiceDisplay.classList.add('fa-hand-paper');
    }else if(player === 'paper' && computer === 'scissors'){
        result = 'You Lose!';
        computerPoints++;
        removeChoice();
        playerChoiceDisplay.classList.add('fa-hand-paper');
        computerChoiceDisplay.classList.add('fa-hand-scissors');
    }else if(player === 'scissors' && computer === 'rock'){
        result = 'You Lose!';
        computerPoints++;
        removeChoice();
        playerChoiceDisplay.classList.add('fa-hand-scissors');
        computerChoiceDisplay.classList.add('fa-hand-rock');
    }else if(player === 'scissors' && computer === 'paper'){
        result = 'You Win!';
        playerPoints++;
        removeChoice();
        playerChoiceDisplay.classList.add('fa-hand-scissors');
        computerChoiceDisplay.classList.add('fa-hand-paper');
    }else if(player === 'scissors' && computer === 'scissors'){
        result = 'You Draw!';
        removeChoice();
        playerChoiceDisplay.classList.add('fa-hand-scissors');
        computerChoiceDisplay.classList.add('fa-hand-scissors');
    }else {
        return "ERROR, didn't select an appropiate value";
    }

    resultDisplay.textContent = result;
    roundCount.textContent = round
    playerPointHolder.textContent = playerPoints;
    computerPointHolder.textContent = computerPoints;

   return result;
}

function removeChoice() {
    playerChoiceDisplay.classList.remove('fa-hand-rock')
    playerChoiceDisplay.classList.remove('fa-hand-scissors')
    playerChoiceDisplay.classList.remove('fa-hand-paper')
    playerChoiceDisplay.textContent = '';
    computerChoiceDisplay.classList.remove('fa-hand-rock')
    computerChoiceDisplay.classList.remove('fa-hand-scissors')
    computerChoiceDisplay.classList.remove('fa-hand-paper')
    computerChoiceDisplay.textContent = '';
}

function resetGame() {
    playerPoints = 0;
    playerPointHolder.textContent = playerPoints;
    computerPoints = 0;
    computerPointHolder.textContent = computerPoints;
    round = 0;
    roundCount.textContent = round;
    winner.textContent = '';
    removeChoice();
    resultDisplay.textContent = '____';
    playerChoiceDisplay.textContent = '____!';
    computerChoiceDisplay.textContent = '____!';
    const win = document.querySelector('#win-lose')
    win.setAttribute('class','hide')
}

