let secretnumber = Math.trunc(Math.random() * 11) + 1;
console.log(secretnumber);
let score = 20;
let highscore = 0;
document.querySelector(".number").textContent = "?";
document.querySelector(".check").addEventListener("click", function () {
  let guess = document.querySelector(".guess").value;
  if (guess == "") {
    document.querySelector(".message").textContent = "no number";
  } 
  //guess = secret number
  else if (guess == secretnumber) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretnumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  //guess is greater than secret number
  else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = "0";
    }
  }
  //guess is smaller than secret number
  else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = "0";
    }
  }
});

document.querySelector(".btn-again").addEventListener("click", function () {
  console.log("button clicked");
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "";
  document.querySelector(".highscore").textContent = highscore;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

});
