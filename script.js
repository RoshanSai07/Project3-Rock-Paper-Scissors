//console.log("Styles updated successfully!");
function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let resultMessage = "";

  if (humanChoice === computerChoice) {
    resultMessage = `It's a tie! Both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultMessage = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    resultMessage = `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  updateResults(resultMessage);

  if (humanScore === 5) {
    announceWinner("Human");
  } else if (computerScore === 5) {
    announceWinner("Computer");
  }
}

function updateResults(message) {
  document.getElementById("result").textContent = message;
  document.getElementById(
    "score"
  ).textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

function announceWinner(winner) {
  document.getElementById(
    "result"
  ).textContent = `${winner} wins the game! Refresh to play again.`;
  document.querySelectorAll(".choices button").forEach((button) => {
    button.disabled = true;
    button.style.opacity = "0.25";
  });
}

document
  .getElementById("rock")
  .addEventListener("click", () => playRound("rock"));
document
  .getElementById("paper")
  .addEventListener("click", () => playRound("paper"));
document
  .getElementById("scissors")
  .addEventListener("click", () => playRound("scissors"));
