let choice=["rock", "paper", "scissors"];
function getComputerChoice (compchoice){
 
    return Math.random();
}
if(compchoice==0){
    console.log("ROCK");
}
else 
if(compchoice==1){
    console.log("SCISSORS");
} else if(compchoice>0 && compchoice<1){
    console.log("PAPER");
}


function getHumanChoice(){
    let choice= prompt("Enter your Choice: ");
}


