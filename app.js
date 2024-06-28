function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  const endScore = 5;

  function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    console.log("Random number: " + randomNum);
    return options[randomNum];
  }

  function getHumanChoice() {
    var readline = require("readline-sync");
    let option;
    let validChoices = ["rock", "paper", "scissors"];

    while (true) {
        option = readline.question("Please select rock, paper or scissors: ").toLowerCase();
        if (validChoices.includes(option)) {
            break;
        } else {
            console.log("Invalid choice, please select rock, paper or scissors.");
        }
    }
    return option;
  }

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("It's a tie! Both chose " + humanChoice);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log("You win! " + humanChoice + " beats " + computerChoice);
    } else {
      computerScore++;
      console.log("You lose! " + computerChoice + " beats " + humanChoice);
    }
    console.log(
      "Scores: Human: " + humanScore + ", Computer: " + computerScore
    );
  }

  while (humanScore < endScore && computerScore < endScore) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore === endScore) {
    console.log("You win the game!");
  } else if (computerScore === endScore) {
    console.log("The computer wins the game!")
  }
}

playGame();