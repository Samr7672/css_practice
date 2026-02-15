let humanScore=0;
let computerScore=0;
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

console.log(computerChoice());

function humanChoice(){

    let humanChoice= prompt("Choose 1 for rock, 2 for paper or 3 for scissors");
    
    if(humanChoice==1){
        humanChoice="rock";
    }
    else if(humanChoice==2){
        humanChoice="paper";
    }
    else{
        humanChoice="scissors";
    }
    return humanChoice;
}
console.log(humanChoice());


        
function playRound(humanChoice,computerChoice){

    if(humanChoice==computerChoice){
        console.log("It's a tie!");
    }
    else if(humanChoice=="rock" && computerChoice=="paper"){
        console.log("You lose! Paper beats rock");
        computerScore++;
    }
    else if(humanChoice=="rock" && computerChoice=="scissors"){
        console.log("You win! Rock beats scissors");
        humanScore++;
    }
    else if(humanChoice=="paper" && computerChoice=="rock"){
        console.log("You win! Paper beats rock");
        humanScore++;
    }
    else if(humanChoice=="paper" && computerChoice=="scissors"){
        console.log("You lose! Scissors beats paper");
        computerScore++;
    }
    else if(humanChoice=="scissors" && computerChoice=="rock"){
        console.log("You lose! Rock beats scissors");
        computerScore++;
    }
    else if(humanChoice=="scissors" && computerChoice=="paper"){
        console.log("You win! Scissors beats paper");
        humanScore++;
    }
    console.log("You have "+humanScore+" points");
    console.log("The computer has "+computerScore+" points");
}
function playgame(){
        for(let i=0;i<5;i++){
        const humanSelection=humanChoice();
        const computerSelection=computerChoice();
        playRound(humanSelection,computerSelection);
    } 


}


