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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else {
    if (humanChoice === "Rock" && computerChoice === "Paper") {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    }
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);