

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
// ask for players name and storing it in the variable username
let username = prompt("what's your name ?");
// making the username case insensitive by making it lowercase
let playerName = username.toLowerCase();

// creating a function that  takes the users input and makes sure  it from within the array "choices[]"
// and if it is not it propmts the user to input his chosen choice again 
function Playerpick(){ 
    let choice = prompt("what's your choice " + playerName);
        choice = choice.toLowerCase();
//this where it checks if the item is in the arry
    if(!choices.includes(choice)){
        alert("Wrong input!! try again");
 Playerpick();
    } 
    else {
       return choice;
    }
    }  
 
// function that plays one single round
function round(){

    let computerplay = computerChoice();
    //console.log(computerplay);
    let playerChoice = Playerpick();
       if (computerplay == playerChoice){
         alert(" it's a draw!!!");
     }  else  if ( computerplay == choices[0] && playerChoice == choices[1]){
         alert("you have Won! Paper beats Rock!  ")
        // adding 1 to the score if the condition is met
        //the same goes for computerscore it gets incremented by 1 each time the condition is met
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
     //console.log("the score of the player is "+playerscore);
     //console.log("the score of the computer is "+computerscore);
}
   // looping the round function five time 
   
for (let index = 1; index <= 5; index++) {
    round();
    
}
// ssince it is just five rounds one is bound to get incremented 
// more than the other
// so if the statment below is true
if (playerscore > computerscore){
    // the player gets this msg
    alert("Congratulation  you have won!");
    //and regardless if win or lose you get the play again function
    playAgain();
}
else{
    alert("My sincere apologies  you lost! ");
    playAgain();
}
// to give the play the option to playagain without the need to refresh the page
// and enter your name 
 function playAgain(){
     let anothergame = confirm("Would you like to play an other game?");
     if (anothergame == true){
         round();
     }
 }