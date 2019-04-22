var rps = function () {

  var computerChoice = Math.floor(Math.random() * 9 + 1);
  // console.log(computerChoice);

  var userChoice = prompt("Rock Paper Scissors Shoot!");
  userChoice = userChoice.toLowerCase();

  if (userChoice === "rck" || userChoice === "roc" || userChoice === "rok") {
    if (confirm("Did you mean 'Rock'")) {
      userChoice = "rock";
    }
  }
  if (userChoice === "papr" || userChoice === "pper" || userChoice === "paer") {
    if (confirm("Did you mean 'Paper'")) {
      userChoice = "paper";
    }
  }
  if (userChoice === "scisors" || userChoice === "sisors" || userChoice === "sissors") {
    if (confirm("Did you mean 'Scissors'")) {
      userChoice = "scissors";
    }
  }

  if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
    alert("You may have missplelled that, Please enter one of the following; Rock, Paper, or Scissors");
    rps();
  }

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
