const startGameBtn = document.getElementById("start-game-btn");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const randomChoser = [ROCK, PAPER, SCISSORS];
let autoSelectorForComputer;
let gameIsRunnıng = false;

const getPlayerChoice = function () {
  let selection = prompt(`ROCK, PAPER or SCISSORS?`, "").toUpperCase();
  autoSelectorForComputer = computerPicker();
  console.log(`computer selected ${autoSelectorForComputer}`);
  if (selection === ROCK) {
    if (autoSelectorForComputer === SCISSORS) {
      console.log("you Won!");
    } else if (autoSelectorForComputer === PAPER) {
      console.log("you Lose!");
    } else {
      console.log("Draw!");
    }
  } else if (selection === PAPER) {
    if (autoSelectorForComputer === ROCK) {
      console.log("you Won!");
    } else if (autoSelectorForComputer === SCISSORS) {
      console.log("you Lose!");
    } else {
      console.log("Draw!");
    }
  } else if (selection === SCISSORS) {
    if (autoSelectorForComputer === PAPER) {
      console.log("you Won!");
    } else if (autoSelectorForComputer === ROCK) {
      console.log("you Lose!");
    } else {
      console.log("Draw!");
    }
  } else if (
    Selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    let autoSelectorForPlayer = computerPicker();
    console.log(`invalid choice!, we chose ${autoSelectorForPlayer} for you`);
  }
  return selection;
};

let computerPicker = function () {
  let randomChoserNumber = Math.random();
  let i = Math.floor(randomChoserNumber * randomChoser.length);
  if (i === 0) {
    selection = ROCK;
  } else if (i === 1) {
    selection = "PAPER";
  } else if (i === 2) {
    selection = SCISSORS;
  }
  return selection;
};

function winConCheck() {
  if (selection === ROCK) {
    if (autoSelectorForComputer === SCISSORS) {
      console.log("you Won!");
    } else if (autoSelectorForComputer === PAPER) {
      console.log("you Lose!");
    }
  } else if (selection === PAPER) {
    if (autoSelectorForComputer === ROCK) {
      console.log("you Won!");
    } else if (autoSelectorForComputer === SCISSORS) {
      console.log("you Lose!");
    }
  } else if (selection === SCISSORS) {
    if (autoSelectorForComputer === PAPER) {
      console.log("you Won!");
    } else if (autoSelectorForComputer === ROCK) {
      console.log("you Lose!");
    }
  }
}

startGameBtn.addEventListener("click", function () {
  // if (gameIsRunnıng) {
  //   return;
  // }
  // gameIsRunnıng = true;
  console.log("game is starting. . . ");
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
});

///////////////
