

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

let username = prompt("what's your name ?");
let playerName = username.toLowerCase();


function Playerpick(){ 
let choice = prompt("what's your choice " + playerName);
    choice = choice.toLowerCase();

    wronginput(choice);
    let x;
 function wronginput(x){
    if(!choices.includes(x)){
        alert("Wrong input!! try again");
       Playerpick();
    } 
    else {
       return choice;
    }
    }  
 }

function round(){
    let computerplay = computerChoice();
    console.log(computerplay);
    let playerChoice = Playerpick();
       if (computerplay == playerChoice){
         alert(" it's a draw!!!");
     }  else  if ( computerplay == choices[0] && playerChoice == choices[1]){
         alert("you have Won! Paper beats Rock!  ")
         playerscore += 1;
     }  else  if ( computerplay == choices[1] && playerChoice == choices[2 ]){
         alert("you won! Scissors cut Paper")
         playerscore += 1;
     }  else  if ( computerplay == choices[2] && playerChoice == choices[0]){
         alert("you have  won! Rock beats Scissors! ")
         playerscore += 1;
     }  else {
         alert("You Lose!")
         computerscore += 1;
     }
     console.log("the score of the player is "+playerscore);
     console.log("the score of the computer is "+computerscore);
}
   
for (let index = 1; index <= 5; index++) {
    round();
    
}
if (playerscore > computerscore){
    alert("Congratulation  you have won!");
}
else{
    alert("My sincere apologies  you lost! ");
}