 // kinda stuck at the moment , but still learned alot and it looks like  i start over 
 // wich mean still more to learn 
 
 let playerName = prompt("what's your name champ?");
let promptString = "Make a choice !";
let playerChoice = prompt(promptString.concat(playerName));



function computerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randComChoice = choices[Math.floor( Math.random()* choices.length)];
    return randComChoice;
}
  function plays (){
     switch (computerChoice(), playerChoice ){
       case 1 : 
        computerChoice() == playerChoice;
            alert("it's a TIE!");
            break;
        case 2 :
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
             break;
     }
}

let playerChoiceCount =[];
let computerCoiceCount = [];
