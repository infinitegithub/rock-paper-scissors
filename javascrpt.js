let playerName = prompt("what's your name champ?");
let promptString = "Make a choice !";
let playerChoice = prompt(promptString.concat(playerName));

function computerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randComChoice = choices[Math.floor( Math.random()* choices.length)];
    return randComChoice;
}
