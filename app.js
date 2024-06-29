document.addEventListener("DOMContentLoaded", function () {
  let humanScore = 0;
  let computerScore = 0;
  const endScore = 5;

  function playWinAudio() {
    const winAudio = document.getElementById("win_audio");
    winAudio.play();
  }

  function playLoseAudio() {
    const loseAudio = document.getElementById("lose_audio");
    loseAudio.play();
  }

  function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
  }

  function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
      alert("It's a tie! Both chose " + humanChoice);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      document.getElementById("playerScore").innerText = "Score: " + humanScore;
      alert("You win! " + humanChoice + " beats " + computerChoice);
    } else {
      computerScore++;
      document.getElementById("computerScore").innerText = "Score: " + computerScore;
      alert("You lose! " + computerChoice + " beats " + humanChoice);
    }

    if (humanScore === endScore) {
      playWinAudio();
      setTimeout(function () {
        alert("You win the game!");
        resetGame();
      }, 1000);
    } else if (computerScore === endScore) {
      playLoseAudio();
      setTimeout(function () {
        alert("The computer wins the game!");
        resetGame();
      }, 1000);
    }
  }

  function resetGame() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById("playerScore").innerText = "Score: 0";
    document.getElementById("computerScore").innerText = "Score: 0";
  }

  document.getElementById("rockdiv").addEventListener("click", function () {
    playRound("rock");
  });

  document.getElementById("paperdiv").addEventListener("click", function () {
    playRound("paper");
  });

  document.getElementById("scissorsdiv").addEventListener("click", function () {
    playRound("scissors");
  });
});
