"use strict";

// let secretNumber = Math.trunc(Math.random() * 21);
let secretNumber = 2;
let score = 20;
let highscore = 0;

const displayMessage = (message) =>
  (document.querySelector(".message").textContent = message);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //   console.log(guess, typeof guess);

  if (!guess) {
    displayMessage("no number");
  } else if (guess === secretNumber) {
    displayMessage("you won");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      console.log(highscore);
      document.querySelector(".highscore").textContent = highscore;
    }
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "too high" : "too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else displayMessage("you lost");
  }
});

document.querySelector(".again").textContent = "reload to try again";

document.querySelector(".again").addEventListener("click", function () {
  window.location.reload();
});
