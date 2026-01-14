//make a function to keep score
function playGame() {
  //have some way for the computer to keep count of how many wins
  let humanScore = 0;
  let computerScore = 0;

  //wright a function that is named getComputerChoice.
  function getComputerChoice() {
    //make a random number generator for the computer to make a 0 to 1 scale
    const randomNumber = Math.random();
    //make some if loops to return rock, paper, or scissor
    if (randomNumber < 0.33) {
      return "rock";
    } else if (randomNumber < 0.66) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  //make a function called getHumanChoice.
  function getHumanChoice() {
    //make a return prompt to let the human put in a choice
    return prompt("Enter rock, paper, or scissors:");
  }

  //make a function called playRound.
  function playRound(humanChoice, computerChoice) {
    //this is to keep it lower case for ease of work on laptop
    humanChoice = humanChoice.toLowerCase();

    //make a if loop for a tie
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
      return;
    }

    //set up a loop to tell the computer what beats what
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      //make a thing saying who won
      humanScore++;
      console.log(`you win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`you lose! ${computerChoice} beats ${humanChoice}`);
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log("final score:");
  console.log("human:", humanScore);
  console.log("computer:", computerScore);

  if (humanScore > computerScore) {
    console.log("you win the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("the game is a tie!");
  }
}

playGame();
