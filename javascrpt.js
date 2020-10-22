

let choices = ["rock", "paper", "scissors"];

function computerChoice(){
    let randComChoice = choices[Math.floor( Math.random()* choices.length)];
    return randComChoice;
}
let computerplay = computerChoice();

let playerName = prompt("what's your name ?");

let playerChoice = prompt("what's your choice" + playerName);
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
/*   switch (computerPlay | playerChoice ){  
 
    case choices[0] == choices[0]:
      case choices[1] == choices[1]: 
      case choices[2] == choices[2]:
        alert("it's a draw")
/* 
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

} */
round();
    console.log("the computer have chosen " + computerplay + " the player choice is " + playerChoice);
