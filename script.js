function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissor'];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playGame(playerChoice, computerChoice){
    let result = '';
    //playerChoice = playerChoice.toLowerCase();
    console.log('player choice: '+playerChoice);
    console.log('computer choice: '+computerChoice);

    if(playerChoice == computerChoice)
        result = 'Draw the match'

    else if(playerChoice == 'rock')
    {
        if(computerChoice == 'paper')
            result = `You Lose, ${computerChoice} beats ${playerChoice}`;
        else
            result = `You Win, ${playerChoice} beats ${computerChoice}`;
    }   

    else if(playerChoice == 'paper')
    {
        if(computerChoice == 'scissor')
            result = `You Lose, ${computerChoice} beats ${playerChoice}`;
        else
            result = `You Win, ${playerChoice} beats ${computerChoice}`;
    } 

    else if(playerChoice == 'scissor')
    {
        if(computerChoice == 'rock')
            result = `You Lose, ${computerChoice} beats ${playerChoice}`;
        else
            result = `You Win, ${playerChoice} beats ${computerChoice}`;
    } 

    return result;
}


//const plrchc = document.querySelector('.btn-sel');

let pc = 'rock';
function game(pc){
    let cc = getComputerChoice();
    console.log(playGame(pc,cc));
}

// let plrChoice = prompt('Enter rock,paper or scissor');


const buttons = document.querySelectorAll(".btn-sel");

let plrChoice;
buttons.forEach(button => button.addEventListener("click",event => {
    plrChoice = event.currentTarget.id;
    return plrChoice
}));

game(plrChoice);
console.log(pc);



