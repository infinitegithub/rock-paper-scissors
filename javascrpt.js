 // kinda stuck at the moment , but still learned alot and it looks like  i start over 
 // wich mean still more to learn 
 


let choices = ["rock", "paper", "scissors"];

function computerChoice(){
    let randComChoice = choices[Math.floor( Math.random()* choices.length)];
    return randComChoice;
}
let x = computerChoice();
console.log("the choice of the computer is "+x);

let playerName = prompt("what's your name champ?");
let promptString = "Make a choice !";
let playerChoice = prompt(promptString.concat(playerName));
console.log(playerChoice);

function plays (){
 
  switch (x, playerChoice ){
    case choicesconsole.log("the value of x is "+ x+ "the player choice is "+ playerChoice);
      alert("it's a TIE!");
      break;
    /* case 2 :
      computerChoice() == choices[0] && playerChoice == "paper" ;
      let winner = "you have won this round ";
      alert(winner.concat(playerName));
      playerChoiceCount.push[1];
      break;     
    case 3 :
      computerChoice() == choices[1] && playerChoice == "scissors"; 
      let lost = "you have lost this round";
      alert(lost.concat(playerName));
      computerCoiceCount.push[1];
      break;
    case 4 :
      computerChoice() == choices[2] && playerChoice == "rock"; 
      alert(winner.concat(playerName));
      playerChoiceCount.push[1];
      break; */
    default:
      console.log("the value of x is "+ x+ "the player choice is "+ playerChoice);
      alert("It is not a tie");
      break;
  }

  function newFunction() {
    ;
  }
}
plays();
//let playerChoiceCount =[];
//let computerCoiceCount = [];

