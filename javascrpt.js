

let choices = ["rock", "paper", "scissors"];
// number of rounds the computer won
let computerscore = 0;
// number of rounds the player have won 
let playerscore = 0;
// a function that returns a random choice from the choices array
function computerChoice(){
    let randComChoice = choices[Math.floor( Math.random()* choices.length)];
    return randComChoice;
}
let computer = computerChoice();
 let computerplay = computer.toLowerCase()
let username = prompt("what's your name ?");
let playerName = username.toLowerCase();
 function Playerpick(){ 
let choice = prompt("what's your choice " + playerName);
 return choice;
 }
 let playerChoice = Playerpick();
function round(){
   if (computerplay == playerChoice){
     alert(" it's a draw!!!");
 }  else  if ( computerplay == choices[0] && playerChoice == choices[1]){
     alert("you have Won! Paper beats Rock!  ")
     playerscore += 1;
 }  else  if ( computerplay == choices[1] && playerChoice == choices[2 ]){
     alert("you Lose! Scissors cut Paper")
     computerscore += 1;
 }  else  if ( computerplay == choices[2] && playerChoice == choices[0]){
     alert("you have  won! Rock beats Scissors! ")
     playerscore += 1;
 }  else {
     alert("You Lose!")
     computerscore += 1;
 }
}

 round();


 if (confirm("would you like to play a other round??")){
     round();

 }else {

 }







    console.log("the computer have chosen " + computerplay + " the player choice is " + playerChoice);

