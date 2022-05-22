//----------------------------------------------------------------------------------------------------------

//Number guessing game
//----------------------------------------------------------------------------------------------------------


/*let maximum = parseInt(prompt("Enter your maximum number!"));
while (!maximum){
    maximum = parseInt(prompt("Enter a valid number number!"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;
let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1
while (parseInt(guess) !== targetNum){
    if(guess === "q") break; 
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high!");
    } else {
        guess = prompt("Too low!");
    }
}
if(guess === "q"){
    console.log('OK, you quit')
} else{
    console.log(`YOU GOT IT IN ${attempts} guess`)
}*/



//----------------------------------------------------------------------------------------------------------

//TO DO LIST
//----------------------------------------------------------------------------------------------------------

/*let input = prompt("What would you like to do?")
const toDo = ["Buy Lamborghini", "Sign a deal with Jeff Bezos"]
while (input !== "quit" && input !== "q" ){
    if(input === "list"){
        console.log("------------------------------") 
        for(i = 0; i < toDo.length; i++){
        console.log(`${i}: ${toDo[i]}`);
        }
        console.log("------------------------------")        
    }else if(input === "new"){
        const newToDo = prompt("Ok! What is the new to do?")
        toDo.push(newToDo)
        console.log(`${newToDo} added to the list.`)
    }else if(input === "delete"){
       const index = parseInt(prompt("Ok, enter index of to do to delete"));
       if(!Number.isNaN(index)){
           const deleted = toDo.splice(index, 1)
           console.log(`You just deleted ${deleted}from the list.`)
       }else {
           console.log("Unknown index:")}
    }
    input = prompt("What would you like to do?")
}
console.log("OK! You quit the App")

------------------------------------------------------
------FIZZ-BUZZ----------------
------------------------------------------------------

let input = prompt("Enter a number!")

let array = []

 for(i=1;i <= input; i++){

    if (i % 3 == 0 && i % 5 == 0){
        array.push("Fizz-Buzz")
 }else if (i % 5 == 0){
        array.push("Buzz")
 }else if (i % 3 == 0){
        array.push("Fizz")
 }else {
     array.push(i)
 }
}
console.log(array)*/

/*
/*--------------------------------------------------------------------------------
-----------------ROCK-PAPER-SCISSOR----------------------------------------------
---------------------------------------------------------------------------------*/
let arr = ['rock', 'paper', 'scissor']
function computerPlay(){ //random output from computers side 
   let num = Math.floor(Math.random() * arr.length);
   return arr[num]
}

let playerScore = 0//for player's scorekeeping
let computerScore = 0//for computer's scorekeeping


/*main algorithm*/
function playRound(playerSelection,computerSelection){
    if(playerSelection === "rock" && computerSelection === "scissor"){//player wins
        playerScore += 1;
        return "You win! Rock beats scissor"; 
    }else if(playerSelection === "scissor" && computerSelection === "rock"){//computer-wins
        computerScore += 1;
        return "You lose! Rock beats scissor";
    }

    if(playerSelection === "paper" && computerSelection === "rock"){//player wins
        playerScore += 1;
        return "You win! Paper wraps rock" ;
    }else if(playerSelection === "rock" && computerSelection === "paper"){//computer-wins
        computerScore += 1;
        return "You lose! Paper wraps rock";
    }

    if(playerSelection === "scissor" && computerSelection === "paper"){//player wins
        playerScore += 1;
        return "You win! Scissor cuts paper";
    }else if(playerSelection === "paper" && computerSelection === "scissor"){//computer-wins
        computerScore += 1;
        return "You lose! Scissor cuts paper";
    }

    if(computerSelection ===  playerSelection){//draw-
        return "It's a tie"
    }
}




function game(){
    
    for(i = 1; i <= 5; i++){
        let playerSelection = prompt("Rock, Paper or Scissor?").toLowerCase();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection,computerSelection));
    }
    console.log(`Score is: Player = ${playerScore} Computer = ${computerScore}`)
}

game()



