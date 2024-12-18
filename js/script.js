function declareWinner() {
  if (humanScore === 5) {
    winner.textContent = `Yahoo! You won.`;
    winnerAudio.play();
    isGameOver = true;
  } else if (computerScore === 5) {
    winner.textContent = `Boohoo! Computer won.`;
    loserAudio.play();
    isGameOver = true;
  }
}

function playRound(humanChoice, computerChoice) {
  let result = "";
  if (humanChoice === computerChoice) {
    result = "What a bummer! That's a tie!";
  } else {
    if (humanChoice === "Rock" && computerChoice === "Paper") {
      result = `You lose! ${computerChoice} beats ${humanChoice}.`;
      computerScore++;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
      result = `You win! ${humanChoice} beats ${computerChoice}.`;
      humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
      result = `You lose! ${computerChoice} beats ${humanChoice}.`;
      computerScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
      result = `You win! ${humanChoice} beats ${computerChoice}.`;
      humanScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
      result = `You lose! ${computerChoice} beats ${humanChoice}.`;
      computerScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
      result = `You win! ${humanChoice} beats ${computerChoice}.`;
      humanScore++;
    }
  }
  return result;
}

function getRandomIntInclusive(min, max) {
  // Taken from https://shorturl.at/TSjlB
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function getComputerChoice() {
  let randomNumber = getRandomIntInclusive(0, 2);
  switch (randomNumber) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function resetGame(e) {
  if (e.target.textContent === 'Reset') {
    humanScore = 0;
    computerScore = 0;
    resetAudio.play();
    result.textContent = '';
    score.textContent = '';
    winner.textContent = '';
    isGameOver = false;
  }
}

let humanScore = 0;
let computerScore = 0;

let isGameOver = false;

const buttons = document.querySelectorAll(".btn");
const result = document.querySelector(".result");
const score = document.querySelector(".score");
const winner = document.querySelector(".winner");

const audio = document.querySelector("#audio");
const winnerAudio = document.querySelector("#winner-audio");
const loserAudio = document.querySelector("#loser-audio");
const resetAudio = document.querySelector("#reset-audio");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (e.target.textContent === 'Reset') {
      resetGame(e);
      return;
    }

    if (isGameOver) {
      return;
    }

    audio.play();

    let humanSelection = e.target.textContent;
    let computerSelection = getComputerChoice();
    result.textContent = playRound(humanSelection, computerSelection);

    score.textContent = `Score: You: ${humanScore}, Computer: ${computerScore}`;

    declareWinner();
  });
});