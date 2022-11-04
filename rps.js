let round = 0;
let playerPoints = 0;
let computerPoints = 0;

const playerChoice = document.querySelectorAll('.rps')
playerChoice.forEach(decision => decision.addEventListener('click', playerSelection));

function getComputerChoice( ){
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
    }

    const resultDisplay = document.querySelector('#result');
    resultDisplay.textContent = result;
    const playerChoiceDisplay = document.querySelector('#your-choice');
    playerChoiceDisplay.textContent = player;
    const computerChoiceDisplay = document.querySelector('#computer-choice');
    computerChoiceDisplay.textContent = computer;
    const roundCount = document.querySelector('#round-count')
    roundCount.textContent = round
    const playerPointHolder = document.querySelector('#player-points')
    playerPointHolder.textContent = playerPoints;
    const computerPointHolder = document.querySelector('#computer-points')
    computerPointHolder.textContent = computerPoints;
   return result;
} 

function game(playerInput){
    let result = [];
        
    if(playerInput === 'rock'||playerInput === 'paper'||playerInput === 'scissors'){
        result.push(playRound(playerInput,getComputerChoice()));
        round++; 
        console.log(round,result);
    }else{
        console.log('Error, Choose "Rock","Paper","Scissors"')
    }

    
    return result;
}