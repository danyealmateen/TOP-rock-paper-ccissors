let output = document.getElementById('output');
let random = ["rock", "paper", "scissor"];
let playerSelection = "rock";
let computerSelection = getComputerChoice().toLowerCase();


function getComputerChoice() {
    let useRandom = random[Math.floor(Math.random() * random.length)];
    return useRandom
    
}

function playRound(playerSelection, computerSelection) {
  if(playerSelection === computerSelection) {
    return output.innerHTML = "It's a draw!";
  } else if (playerSelection === "rock" && computerSelection == "scissor") {
    return output.innerHTML = "You won!";
  } else if (playerSelection === "rock" && computerSelection == "paper" ) {
    return output.innerHTML = "You lose!";
  }
}

playRound(playerSelection,computerSelection);



