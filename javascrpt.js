 // kinda stuck at the moment , but still learned alot and it looks like  i start over 
 // wich mean still more to learn 
 


let choices = ["rock", "paper", "scissors"];

function computerChoice(){
    let randComChoice = choices[Math.floor( Math.random()* choices.length)];
    return randComChoice;
}
let x = computerChoice();

let playerName = prompt("what's your name champ?");
let promptString = "Make a choice !";
let playerChoice = prompt(promptString.concat(playerName));
console.log(playerChoice);

function play (){
 
  switch (x && playerChoice ){
    case choices[0] == choices[0]:
    case choices[1] == choices[1]: 
    case choices[2] == choices[2]:
      alert("it's a draw")

      break;
     case choices[0] && choices[1]: 
     case choices[2] && choices[0]: 
      alert("You have won this round "+ playerName);
     // playerChoiceCount.push[1];
      break;     
    case choices[1] && choices[2]:
     alert("you have lost this round " + playerName);
      alert(lost.concat(playerName));
     // computerCoiceCount.push[1];
      break;
   
   default:
    alert("you have lost this round " + playerName);
     //alert("the computer have chosen "+ x + "the player choice is "+ playerChoice);
     // alert("It is not a tie");
      break;
  }

}
plays();
//let playerChoiceCount =[];
//let computerCoiceCount = [];

