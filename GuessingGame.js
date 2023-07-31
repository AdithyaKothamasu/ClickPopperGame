/* program to make a guessing game.
1. generate random number.
2. ask a number from user.
3. tell if greater than or less than.
4. keep asking till correct number is guessed.
5. show score = 100 - chances.*/
const prompt = require("prompt-sync")()


let a;
let random = Math.floor(Math.random() * 101);
let score = 0;
do{
  a = Number.parseInt( prompt("Guess a number from 0 to 100 : "));
  if(a < random){
    console.log(a +" is less than the correct number.");
    console.log ("try again")  
}
  else if (a > random){
    console.log(a + " is greater than the correct number");
    console.log ("try again")
  }
  else if (a == random){
    console.log("Congrats! You have guessed the correct number.");
  }
  
  score += 1; 
}while (a != random)
console.log(`Your score was ${100 - score}`);

