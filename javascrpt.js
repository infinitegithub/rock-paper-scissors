

let choices = ["rock", "paper", "scissors"];

function computerChoice(){
    let randComChoice = choices[Math.floor( Math.random()* choices.length)];
    return randComChoice;
}
let computerplay = computerChoice();

let playerName = prompt("what's your name ?");

let playerChoice = prompt("what's your choice " + playerName);
console.log(playerChoice);

function round(){
if (computerplay == playerChoice){
  alert(" it's a draw!!!");
} else  if ( computerplay == choices[0] && playerChoice == choices[1]){

alert("you have won this round ")
} else  if ( computerplay == choices[1] && playerChoice == choices[2 ]){

alert("you have lost this round ")
} else  if ( computerplay == choices[2] && playerChoice == choices[0]){

  alert("you have  won this round ")
}
}

round();
    console.log("the computer have chosen " + computerplay + " the player choice is " + playerChoice);
