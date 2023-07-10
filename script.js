let selectionButtons = document.querySelectorAll('[id]');
const finalColumn = document.querySelector('.choices');
let elem;

const yourScoreSpan = document.querySelector('[data-your-score]');
const computerScoreSpan = document.querySelector('[data-computer-score]');
let body = document.body;



const SELECTIONS = [
    {
        name:'rock',
        beats:'scissor'
    },
    {
        name:'paper',
        beats:'rock'
    },
    {
        name:'scissor',
        beats:'paper'
    }
];


selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.id;
        const selection = SELECTIONS.find(selection => selection.name === selectionName);
        makeSelection(selection);

        endgame();
    })
})


function makeSelection(selection){
    const computerSelection = randomSelection()
    console.log("selection: ", selection);
    console.log("computer choice: ", computerSelection)
    const yourWinner = isWinner(selection, computerSelection);
    const computerWinner = isWinner(computerSelection, selection);
    console.log(computerWinner);
    console.log(yourWinner);

    addSelectionResult(computerSelection,computerWinner);


    if(yourWinner) incrementScore(yourScoreSpan);
    if(computerWinner) incrementScore(computerScoreSpan);



}

function incrementScore(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText)+1;
}

function addSelectionResult(selection,winner){
    elem = document.createElement('div');
    elem.innerText = `Computer Chose ${selection.name}`;
    if(winner) elem.style.cssText = "color: #db0404";
    else elem.style.cssText = "color: green";
    finalColumn.appendChild(elem);
}

function endgame(){
    if(yourScoreSpan.innerText == '5'){
        selectionButtons.disabled = true;
        body.style.cssText = 'background-color: #52f54c';
        elem.style.cssText = "color: green";
        elem.innerText = "Aight you win!";
    }
    if(computerScoreSpan.innerText == '5'){
        selectionButtons.disables = true;
        body.style.cssText = 'background-color: #780800';
        elem.style.cssText = "color: red";
        elem.innerText = "See you later Alligator :]"
    }    
}


 

function isWinner(selection, opponentSelection){
    return selection.beats === opponentSelection.name;
}


function randomSelection(){
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex];
}






