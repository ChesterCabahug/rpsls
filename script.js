
const playerScoreEl = document.querySelector("#playerScore")
const playerChoiceEl = document.querySelector("#choice")
const computerScoreEl = document.querySelector("#computerScore")
const computerChoiceEl = document.querySelector("#computerChoice")
const resultText = document.querySelector("#resultText")


const playerRock = document.querySelector("#playerRock")
const playerPaper = document.querySelector("#playerPaper")
const playerScissors = document.querySelector("#playerScissors")
const playerLizard = document.querySelector("#playerLizard")
const playerSpock = document.querySelector("#playerSpock")

const computerRock = document.querySelector("#computerRock")
const computerPaper = document.querySelector("#computerPaper")
const computerScissors = document.querySelector("#computerScissors")
const computerLizard = document.querySelector("#computerLizard")
const computerSpock = document.querySelector("#computerSpock")

const allGameIcons = document.querySelectorAll(".far")

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};


console.log(allGameIcons)
// reset all selected icons
resetSelected = () => {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected")
  })
}

// passing player selection value
select = (playerChoice) => {
  resetSelected()
  // add "selected" class & playerChoice
  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected")
      playerChoiceEl.textContent = " --- Rock"
      break;
    case "paper":
      playerPaper.classList.add("selected")
      playerChoiceEl.textContent = " --- Paper"
      break;
    case "scissors":
      playerScissors.classList.add("selected")
      playerChoiceEl.textContent = " --- Scissors"
      break;
    case "lizard":
      playerLizard.classList.add("selected")
      playerChoiceEl.textContent = " --- Lizard"
      break;
    case "spock":
      playerSpock.classList.add("selected")
      playerChoiceEl.textContent = " --- Spock"
      break;
  
    default:
      break;
  }
}