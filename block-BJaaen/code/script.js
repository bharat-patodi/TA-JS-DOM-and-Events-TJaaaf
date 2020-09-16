// Unable to load the module 'confetti.js' for some reason and hence after trying for a long time, I'm forced to add the solution as a script in the HTML.

let playerControls = document.querySelector(".player-controls");
let computerControls = document.querySelector(".computer-controls");
let playerInputText = document.querySelector(".player>h2");
let computerInputText = document.querySelector(".computer>h2");
let resultText = document.querySelector(".result-text");
let reset = document.querySelector(".reset");
let winCounter = 0;
let lossCounter = 0;

let choices = [
  "fa-hand-scissors",
  "fa-hand-paper",
  "fa-hand-rock",
  "fa-hand-lizard",
  "fa-hand-spock",
];
let computerInput = [];
let results = [];

// player logic
const playerLogic = (event) => {
  // Capture the user's click target
  let playerSignal = event.target.classList[1];

  //   Reset all signals to their original color

  document
    .querySelectorAll(".player-controls>i")
    .forEach((val) => (val.style.color = "dodgerblue"));

  document
    .querySelectorAll(".computer-controls>i")
    .forEach((val) => (val.style.color = "rgb(235, 43, 52)"));

  //   stopConfetti();
  //   removeConfetti();

  //   Give the user feedback by changing the color of the target
  event.target.style.color = "black";
  event.target.style.fontSize = "3rem";

  //   Generate a random computer response
  let computerSignal = choices[Math.floor(Math.random() * 5)];
  let comp = document.querySelectorAll(`.${computerSignal}`);
  comp[1].style.color = "black";

  //   If the two responses match, declare it is a tie
  if (playerSignal === computerSignal) {
    console.log(`It is a tie`);
    resultText.innerText = `It's a tie.`;
  }

  //   Check the logic and if the user wins, declare it is a win and update the win counter
  console.log(playerSignal);
  switch (playerSignal) {
    case "fa-hand-rock":
      if (
        computerSignal === "fa-hand-lizard" ||
        computerSignal === "fa-hand-scissors"
      ) {
        resultText.innerText = `You Won!`;
        // startConfetti();
        winCounter++;
      } else if (
        computerSignal === "fa-hand-spock" ||
        computerSignal === "fa-hand-paper"
      ) {
        resultText.innerText = `You Lost!`;
        lossCounter++;
      }
      break;
    case "fa-hand-paper":
      if (
        computerSignal === "fa-hand-rock" ||
        computerSignal === "fa-hand-spock"
      ) {
        resultText.innerText = `You Won!`;
        // startConfetti();
        winCounter++;
      } else if (
        computerSignal === "fa-hand-scissors" ||
        computerSignal === "fa-hand-lizard"
      ) {
        resultText.innerText = `You Lost!`;
        lossCounter++;
      }
      break;
    case "fa-hand-scissors":
      if (
        computerSignal === "fa-hand-paper" ||
        computerSignal === "fa-hand-lizard"
      ) {
        resultText.innerText = `You Won!`;
        // startConfetti();
        winCounter++;
      } else if (
        computerSignal === "fa-hand-spock" ||
        computerSignal === "fa-hand-rock"
      ) {
        resultText.innerText = `You Lost!`;
        lossCounter++;
      }
      break;
    case "fa-hand-lizard":
      if (
        computerSignal === "fa-hand-spock" ||
        computerSignal === "fa-hand-paper"
      ) {
        resultText.innerText = `You Won!`;
        // startConfetti();
        winCounter++;
      } else if (
        computerSignal === "fa-hand-rock" ||
        computerSignal === "fa-hand-scissors"
      ) {
        resultText.innerText = `You Lost!`;
        lossCounter++;
      }
      break;
    case "fa-hand-spock":
      if (
        computerSignal === "fa-hand-scissors" ||
        computerSignal === "fa-hand-rock"
      ) {
        resultText.innerText = `You Won!`;
        winCounter++;
        // startConfetti();
      } else if (
        computerSignal === "fa-hand-lizard" ||
        computerSignal === "fa-hand-paper"
      ) {
        resultText.innerText = `You Lost!`;
        lossCounter++;
      }
      break;
  }

  computerInputText.innerHTML = `Computer - ${lossCounter} <span class="computer-text-red">--- ${computerSignal
    .slice(8, 9)
    .toUpperCase()}${computerSignal.slice(9)}</span>`;
  playerInputText.innerHTML = `You - ${winCounter} <span class="player-text-blue">--- ${playerSignal
    .slice(8, 9)
    .toUpperCase()}${playerSignal.slice(9)}</span>`;
};

reset.addEventListener("click", function () {
  playerInputText.innerText = "You - 0";
  computerInputText.innerText = "Computer - 0";
  resultText.innerText = "";
});

// Add Event Listeners
playerControls.addEventListener("click", playerLogic);
