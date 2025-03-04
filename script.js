console.log("Rock, Paper, Scissors!")

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

let humanSelection;
let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  humanSelection = "Rock";
  playRound(humanSelection, getComputerChoice());    
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  humanSelection = "Paper";
  playRound(humanSelection, getComputerChoice());  
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  humanSelection = "Scissors";
  playRound(humanSelection, getComputerChoice());  
});

function playRound(humanSelection, computerSelection) {  //"humanSelection" and "computerSelection" are temporary parameters to be replaced

  const resultElement = document.querySelector("#result");
  const scoreElement = document.querySelector("#score");

  //Human Player chooses "Rock"

  if (humanSelection === "Rock" && computerSelection === "Rock") {
    resultElement.textContent = "Rock vs. Rock! It's a tie!";
  } else if (humanSelection === "Rock" && computerSelection === "Paper") {
    resultElement.textContent = "Rock vs. Paper! You lose!";
    computerScore += 1;
  } else if (humanSelection === "Rock" && computerSelection === "Scissors") {    
    resultElement.textContent = "Rock vs. Scissors! You win!";
    humanScore += 1;

  //Human Player choose "Paper"

  } else if (humanSelection === "Paper" && computerSelection === "Rock") {
    resultElement.textContent = "Paper vs Rock. You win!";
    humanScore += 1;
  } else if (humanSelection === "Paper" && computerSelection === "Paper") {
    resultElement.textContent = "Paper vs Paper! It's a tie!";
  } else if (humanSelection === "Paper" && computerSelection === "Scissors") {
    resultElement.textContent = "Paper vs Scissors. You lose!";
    computerScore += 1;

  //Human Player chooses "Scissors"

  } else if (humanSelection === "Scissors" && computerSelection === "Rock") {
    resultElement.textContent = "Scissors vs Rock. You lose!";
    computerScore += 1;
  } else if (humanSelection === "Scissors" && computerSelection === "Paper") {
    resultElement.textContent = "Scissors vs Paper! You win!";
    humanScore += 1;
  } else if (humanSelection === "Scissors" && computerSelection === "Scissors") {
    resultElement.textContent = "Scissors vs Scissors. It's a tie!";
  }

  //Displays Current Scores
  scoreElement.textContent = "Human's Current Score: " + humanScore + "   Computer's Current Score: " +computerScore;
  console.log("Human's Current Score: " + humanScore);
  console.log("Computer's Current Score: " +computerScore);

  if (humanScore === 5 || computerScore === 5) {

    scoreElement.textContent = "Human's Current Score: " + humanScore + "   Computer's Current Score: " +computerScore;
    
    setTimeout(() => { //Delays alert, so DOM can be update. Without this, the alert will BLOCK THE DOM UPDATE, not showing the updated textContent.

      if (humanScore > computerScore) {
        alert("Congratulations! You win!");
      } else if (computerScore > humanScore) {
        alert("How unfortunate... You lose!");
      } else {
        alert("It's a tie!");
      }

      let playAgain = confirm("Do you want to play again?");
    
      if (playAgain) {
        humanScore = 0;
        computerScore = 0;
        scoreElement.textContent = "Human's Current Score: " + humanScore + "   Computer's Current Score: " +computerScore;
      } else {
        alert("Thanks for playing! Goodbye.");
      }
    }, 0);
  }
}