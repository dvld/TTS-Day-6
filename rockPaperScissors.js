var rps = function () {

  var computerChoice = Math.floor(Math.random() * 9 + 1);
  // console.log(computerChoice);

  var userChoice = prompt("Rock Paper Scissors Shoot!");
  userChoice = userChoice.toLowerCase();

  // console.log(userChoice);

  // if (computerChoice <= 3) {
  //   computerChoice = "rock";
  // } else if (computerChoice <= 6) {
  //   computerChoice = "paper";
  // } else {
  //   computerChoice = "scissors";
  // }

  if (computerChoice <= 3) {
    computerChoice = "rock";
  } else if (computerChoice <=6) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  // console.log(computerChoice);

  var check = function (comp, user) {
    if (comp === user) {
      console.log("Tie game");
      alert("Tie game");
    } else if (comp === "rock") {
      if (user === "scissors") {
        console.log("Computer wins");
        alert("Computer wins");
      } else {
        console.log("You win")
        alert("You win")
      }
    } else if (comp === "paper") {
      if (user === "rock") {
        console.log("Computer wins");
        alert("Computer wins");
      } else {
        console.log("You win");
        alert("You win");
      }
    } else {
      if (user === "paper") {
        console.log("Computer wins");
        alert("Computer wins");
      } else {
        console.log("You win");
        alert("You win");
      }
    }
  }
  console.log("Computer chose " + computerChoice);
  console.log("You chose " + userChoice);
  check(computerChoice, userChoice);
  rps();
}
rps();
