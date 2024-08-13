let compchoice;
let hchoice;
const humanScore=0;
const computerScore=0;

function getComputerChoice(){
    let choice=["rock", "paper", "scissors"];
     compchoice=Math.random() * choice.length;

if(compchoice<0.33){
    return "Computer says: ROCK";
}else 
if(compchoice>=0.34 && compchoice<=0.66){
    return  "Computer says: PAPER";
}else
 while (compchoice >=0.67 && compchoice<=1){
    return "Computer says: SCISSORS";
 }
}
console.log(getComputerChoice()); //view computer choice.

function getHumanChoice(){
    hchoice = (prompt("Enter your choice: "));
   if(hchoice==1 || hchoice=="rock"){
    return "Your choice is: ROCK";
   }else
   if (hchoice==2|| hchoice=="paper"){
    return "Your choice is: PAPER";
   }else
   if(hchoice==3|| hchoice=="scissors"){
    return "Your choice is: SCISSORS";
   }
   return hchoice.charAt(0).toUpperCase()+hchoice.slice(1).toLowerCase;
}
console.log(getHumanChoice());//User choice is between 1-3, in the order Rock-Paper-Scissors.

function playRound(humanchoice, computerchoice){
    return humanchoice.charAt(0).toUpperCase();


}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);