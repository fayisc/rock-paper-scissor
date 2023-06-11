let playerScore = 0;
let computerScore = 0;
let matchCount = 0;

const begin = () => {
  let playerChoose = prompt("Choose rock, paper, or scissors");
  if (playerChoose) {
    let playerOne = playerChoose.toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      let computerChoose = Math.floor(Math.random() * 3) + 1;
      let computer =
        computerChoose === 1
          ? "rock"
          : computerChoose === 2
          ? "paper"
          : "scissors";

      let result =
        playerOne === computer
          ? "Tie"
          : (playerOne === "rock" && computer === "paper") ||
            (playerOne === "paper" && computer === "scissors") ||
            (playerOne === "scissors" && computer === "rock")
          ? "Computer wins"
          : "Player wins";

      console.log("Player One: " + playerChoose);
      console.log("Computer: " + computer);
      console.log(result);
      alert(result);

      if (result === "Player wins") {
        playerScore++;
      } else if (result === "Computer wins") {
        computerScore++;
      }
      console.log("Computer score: " + computerScore);
      console.log("player score: " + playerScore);
      console.log("-------------");
    } else {
      alert("enter paper rock scissor ");
    }
  }
};

do {
  begin();
  matchCount++;
} while (matchCount < 5);

let winner =
  playerScore > computerScore
    ? "Player wins the game!"
    : playerScore < computerScore
    ? "Computer wins the game!"
    : "It's a tie! No winner.";

console.log(winner);
