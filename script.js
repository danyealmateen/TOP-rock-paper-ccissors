//Variables
let output = document.getElementById('output');
let random = ["rock", "paper", "scissor"];
let playerSelection = "rock";
let computerSelection = getComputerChoice().toLowerCase();
let playerScore = 0;
let computerScore = 0;


//Function that picks a random choice from the array (the computers choice)
function getComputerChoice() {
    let useRandom = random[Math.floor(Math.random() * random.length)];
    return useRandom   
}

//Function that plays a round with the computer
function playRound(playerSelection, computerSelection) {
  if(playerSelection === computerSelection) {
    return output.innerHTML = "It's a draw!";

  } else if (playerSelection === "rock" && computerSelection == "scissor") {
    playerScore = ++playerScore;
    console.log(playerScore);
    return output.innerHTML = "You won!";
    
  } else if (playerSelection === "rock" && computerSelection == "paper" ) {
    computerScore = ++computerScore;
    console.log(computerScore);
    return output.innerHTML = "You lose!";
  }
}

//Function that plays 5 rounds and announces the winner at the end
function game() {

  for(let i = 0; i < 5; i++) {
    playRound(playerSelection,computerSelection);
    
//If the player wins round 1,2,3,4,5 + announcement at the end
  if(playerScore == 1) {
    console.log("You can do this, you can beat the AI.")
    
  } else if (playerScore == 2) {
  console.log("There is hope!")
  
  } else if (playerScore == 3) {
  console.log("Has the human race found it's savior?")

  } else if (playerScore == 4) {
    console.log("Free us, Free us all!")

  } else if (playerScore == 5) {
    console.log("You beat the Matrix! We are finally free!");
    console.log("PLAYER WINS!")
  }

  //If the computer wins round 1,2,3,4,5 + announcement at the end
  if(computerScore == 1) {
    console.log("Computer got the first round.")

  } else if (computerScore == 2) {
    console.log("AI got another one, focus!")

  } else if (computerScore == 3) {
    console.log("Please, we are counting on you, dont give up!")

  } else if (computerScore == 4) {
    console.log("I think i'll start packing my bags.")

  } else if (computerScore == 5) {
    console.log("Hello World. We have taken over. All your base belongs to us");
    console.log("COMPUTER WINS!");
  }
  }
}
game()













