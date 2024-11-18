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
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

console.log(getComputerChoice());

function getHumanChoice() {
  let userChoice = prompt('Enter either "rock", "paper" or "scissors":', "rock");
  return userChoice;
}

console.log(getHumanChoice());