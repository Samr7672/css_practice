let humanScore=0;
let computerScore=0;
let winnerscore=5;
const btn=document.querySelectorAll("button");
button.foreach((button) =>{
    button.addEventListener("click",()=>{
        playRound(button.id);
    })
})
const message=querySelector(".message")
const score=querySelector(".score")
const finalWinner=querySelector(".winner")


 
function computerChoice(){
    let computerChoice=Math.floor(Math.random()*3)+1
    
    if(computerChoice==1){
        computerChoice="rock";
    }
    else if(computerChoice==2){
        computerChoice="paper";
    }
    else{
        computerChoice="scissors";
    }
    return computerChoice;
}
function playRound(humanChoice) {
    
    if (humanScore === winningScore || computerScore === winningScore) return;

    const computerChoice = getComputerChoice();
    let message = "";

    if (humanChoice === computerChoice) {
        message = `It's a tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        message = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        message = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    
    message.textContent = message;
    score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;

    checkWinner();
}

function checkWinner() {
    if (humanScore === winningScore) {
        finalWinner.textContent = "Congratulations! You won the game! 🏆";
        
    } else if (computerScore === winningScore) {
        finalWinner.textContent = "Game Over! The Computer won. 🤖";
        
    }
}


       





