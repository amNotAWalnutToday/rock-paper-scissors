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

function playRound(playerSelection,computerSelection){
    let result = '';
    const computer = computerSelection.toLowerCase();
    const player = playerSelection.toLowerCase();
    switch(player,computer){
        case 'rock','rock':
            result = 'You Draw!'
            break;
        case 'rock','paper':
            result = 'You Lose!'
            break;
        case 'rock','scissors':
            result = 'You Win!'
            break;
        case 'paper','rock':
            result = 'You Win!'
            break;
        case 'paper','paper':
            result = 'You Draw!'
            break;
        case 'paper','scissors':
            result = 'You Lose!'
            break;
        case 'scissors','rock':
            result = 'You Lose!'
            break;
        case 'scissors','paper':
            result = 'You Win!'
            break;
        case 'scissors','scissors':
            result = 'You Draw!'
            break;
    }
   return result;
} 

function game(){
    let result = [];

    for(let i = 0;i < 5; i++){
        let holder = prompt('Enter one of the following => "Rock" "Paper" "Scissors')
        let playerInput = holder.toLowerCase();
        
        if(playerInput === 'rock'||playerInput === 'paper'||playerInput === 'scissors'){
            result.push(playRound(playerInput,getComputerChoice()));
            i >= 1
                ? result.shift()
                : null;
            console.log(result);
        }else{
            console.log('Error, Choose "Rock","Paper","Scissors"')
            i--
        }
    }
    
    return result;
}

console.log()