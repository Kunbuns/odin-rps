console.log("Rock, Paper, Scissors!")

//Write a new function "getcomputerChoice".
//Create a value named "randomNumber" which holds the result of "Math.random", (which returns a result between 1 and 0).
//If "randomNumber" is less than "0.33", it is "Rock", if false, check if it is less than "0.66", in which it is "Paper", else it is "Scissors".

function getComputerChoice() {
  let randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "Rock";
  } else if (randomNumber < 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

//Write a new function "getHumanChoice".
//To get the human's input, use the "prompt()" function. The returned result is stored in "getHumanChoice"

function getHumanChoice () {
  let humanInput = prompt("Rock, Paper, or Scissors?").toLowerCase();  //toLowerCase converts result for consistency.

  if (humanInput === "rock") {
    return "Rock";
  } else if (humanInput === "paper") {
    return "Paper";
  } else if (humanInput === "scissors") {
    return "Scissors";
  } else {
    alert("Please enter Rock, Paper, or Scissors!");
    return getHumanChoice();  //Calls function again to get user input if anything besides "Rock", "Paper", or "Scissors" is input.
  }
}

//Create two new variables, "humanScore", and "computerScore" with initial starting value of "0"

let humanScore = 0;
let computerScore = 0;

//Create a new function "playRound"
//Define two parameters for "playRound": "humanSelection" and "computerSelection". Use these two parameters to take the human and computer choices as arguments.
//Write code for "playRound" function to "console.log" a string value representing the round winner

function playRound(humanSelection, computerSelection) {  //"humanSelection" and "computerSelection" are temporary parameters to be replaced

  //Human Player chooses "Rock"

  if (humanSelection === "Rock" && computerSelection === "Rock") {
    alert("Rock vs. Rock! It's a tie!");
  } else if (humanSelection === "Rock" && computerSelection === "Paper") {
    alert("Rock vs. Paper! You lose!");
    computerScore += 1;
  } else if (humanSelection === "Rock" && computerSelection === "Scissors") {    
    alert("Rock vs. Scissors! You win!");
    humanScore += 1;

  //Human Player choose "Paper"

  } else if (humanSelection === "Paper" && computerSelection === "Rock") {
    alert("Paper vs Rock. You win!");
    humanScore += 1;
  } else if (humanSelection === "Paper" && computerSelection === "Paper") {
    alert("Paper vs Paper! It's a tie!");
  } else if (humanSelection === "Paper" && computerSelection === "Scissors") {
    alert("Paper vs Scissors. You lose!");
    computerScore += 1;

  //Human Player chooses "Scissors"

  } else if (humanSelection === "Scissors" && computerSelection === "Rock") {
    alert("Scissors vs Rock. You lose!");
    computerScore += 1;
  } else if (humanSelection === "Scissors" && computerSelection === "Paper") {
    alert("Scissors vs Paper! You win!");
    humanScore += 1;
  } else if (humanSelection === "Scissors" && computerSelection === "Scissors") {
    alert("Scissors vs Scissors. It's a tie!");
  }

  //Displays Current Scores
  alert("Human's Current Score: " + humanScore + "   Computer's Current Score: " +computerScore)
  console.log("Human's Current Score: " + humanScore)
  console.log("Computer's Current Score: " +computerScore)
  
}

//Now make a function "playGame" that loops and can do 5 rounds, instead of just 1.

function playGame(roundsLeft) {
  if (roundsLeft <= 0) {  //When game ends.
    if (humanScore > computerScore) {
        alert("Congratulations! You win!");
    } else if (computerScore > humanScore) {
        alert("How unfortunate... You lose!");
    } else {
        alert("It's a tie!")
    }

    let playAgain = confirm("Do you want to play again?");
    
    if (playAgain) {
      humanScore = 0;
      computerScore = 0;
      playGame(5);
    } else {
      alert("Thanks for playing! Goodbye.");
    }

    return;  //Exits function early as game is over.
  }
  
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();

  playRound(humanChoice, computerChoice);

  playGame(roundsLeft - 1);
}

playGame(5)