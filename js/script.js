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

function cleanHumanChoice(userChoice) {
  const userChoiceLowerCased = userChoice.toLowerCase();
  const firstLetterCapitalized = userChoiceLowerCased.charAt(0).toUpperCase();
  return firstLetterCapitalized.concat(userChoiceLowerCased.slice(1));
}

function getHumanChoice() {
  let userChoice = prompt("Enter 'Rock', 'Paper' or 'Scissors'");
  return cleanHumanChoice(userChoice);
}

// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;

//   function declareWinner(humanScore, computerScore) {
//     if (humanScore === computerScore) {
//       return "What a waste! The match has been tied!";
//     } else if (humanScore > computerScore) {
//       return "Congratulations! You have won the game!";
//     } else if (computerScore > humanScore) {
//       return "Boohoo! The Computer has outsmarted you!";
//     }
//   }

//   console.log(`Final: ${declareWinner(humanScore, computerScore)}`);
// }

// playGame();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let result = "";
  if (humanChoice === computerChoice) {
    result = "It's a tie!";
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

const buttons = document.querySelectorAll(".btn");

const result = document.querySelector(".result");

const score = document.querySelector(".score");

const winner = document.querySelector(".winner");

let isGameOver = false;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (isGameOver) {
      return;
    }

    let humanSelection = button.textContent;
    let computerSelection = getComputerChoice();

    result.textContent = playRound(humanSelection, computerSelection);

    score.textContent = `Score: You: ${humanScore}, Computer: ${computerScore}`;

    if (humanScore === 5) {
      winner.textContent = `Congratulations! You won.`;
      isGameOver = true;
    } else if (computerScore === 5) {
      winner.textContent = `Boohoo! Computer has won.`;
      isGameOver = true;
    }
  });
});