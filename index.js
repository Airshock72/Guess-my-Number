"use strict";
//generate random number between 0-20 and save in value
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector(".number").textContent = secretNumber;

//score
let score = 20;

//high-score
let highScore = 0;

//Main logic
document.querySelector(".check").addEventListener("click", function () {
  //input
  let inputNumber = Number(document.querySelector(".guess").value);
  if (!inputNumber) {
    //NaN
    document.querySelector(".message").textContent = "Enter Between 1 and 20";
    document.querySelector(".message").style.color = "#92170b";
  } else if (inputNumber === secretNumber) {
    //Win
    document.querySelector(".message").textContent = "You Win!";
    document.querySelector(".message").style.color = "#13591a";
    document.querySelector(".guess").setAttribute("disabled", false);

    if (score > highScore) {
      highScore = score;
      document.querySelector(".high-score").textContent = highScore;
    }
    document.querySelector(".number").textContent = secretNumber;
    //high
  } else if (inputNumber > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High!";
      document.querySelector(".message").style.color = "#92170b";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //lose
      document.querySelector(".message").textContent = "You Lose!";
      document.querySelector(".message").style.color = "#92170b";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".guess").setAttribute("disabled", false);
    }
    //low
  } else if (inputNumber < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low!";
      document.querySelector(".message").style.color = "#92170b";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //lose
      document.querySelector(".message").textContent = "You Lose!";
      document.querySelector(".message").style.color = "#92170b";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".guess").setAttribute("disabled", false);
    }
  }
});

//again button logic
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".score").textContent = 0;
  document.querySelector(".message").textContent = "Start guessing. . .";
  document.querySelector(".message").style.color = "#002b33";
  document.querySelector(".guess").removeAttribute("disabled");
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 20;
});
