let compchoice;
let hchoice;
const humanScore=0;
const computerScore=0;

function getComputerChoice(){
    let choice=["rock", "paper", "scissors"];
     compchoice=Math.random() * choice.length;

if(compchoice<0.33){
    return "ROCK";
}else 
if(compchoice>=0.34 && compchoice<=0.66){
    return  "PAPER";
}else
 while (compchoice >=0.67 && compchoice<=1){
    return "SCISSORS";
 }
}
console.log(getComputerChoice()); //view computer choice.

function getHumanChoice(){
    hchoice = parseInt(prompt("Enter your choice: "));
   if(hchoice==1){
    return "Your choice is: ROCK";
   }else
   if (hchoice==2){
    return "Your choice is: PAPER";
   }else
   if(hchoice==3){
    return "Your choice is: SCISSORS";
   }

}
console.log(getHumanChoice());//User choice is between 1-3, in the order of Rock-Paper-Scissors.

function playRound(humanchoice, computerchoice){

}