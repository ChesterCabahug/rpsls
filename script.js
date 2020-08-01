
const playerScoreEl = document.querySelector("#playerScore")
const playerChoiceEl = document.querySelector("#playerChoice")
const computerScoreEl = document.querySelector("#computerScore")
const computerChoiceEl = document.querySelector("#computerChoice")
const resultText = document.querySelector("#resultText")


const playerRock = document.querySelector("playerRock")
const playerPaper = document.querySelector("playerPaper")
const playerScissors = document.querySelector("playerScissors")
const playerLizard = document.querySelector("playerLizard")
const playerSpock = document.querySelector("playerSpock")

const computerRock = document.querySelector("computerRock")
const computerPaper = document.querySelector("computerPaper")
const computerScissors = document.querySelector("computerScissors")
const computerLizard = document.querySelector("computerLizard")
const computerSpock = document.querySelector("computerSpock")

const allGameIcons = document.querySelectorAll(".far")

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

