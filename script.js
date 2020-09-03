const container = document.querySelector(".container");

const btns = document.querySelectorAll("button");

const writeResult = document.createElement("h1");

container.appendChild(writeResult);
const pointsContainer = document.createElement("div");
pointsContainer.style.display = "flex";
pointsContainer.style.justifyContent = "center";
container.appendChild(pointsContainer);

const myScore = document.createElement("div");
pointsContainer.appendChild(myScore);

const compScore = document.createElement("div");
compScore.style.marginLeft = "50px";
pointsContainer.appendChild(compScore);


let myPoint = 0;
let comPoint = 0;

btns.forEach(btn => btn.addEventListener("click", function() {
    const comp = computerPlay();
    const result = playRound(btn.id, comp);
    writeResult.textContent = result;

    if (writeResult.textContent.search("won") != -1) {
        myPoint++;
    } else if(writeResult.textContent.search("suck") != -1) {
        comPoint++;
    }

    myScore.textContent = myPoint;
    compScore.textContent = comPoint;

    endGame();

    }
));

function endGame() {
    if (myPoint == 5) {
        writeResult.textContent = "End! You won!";
        alert("you won, can start a new game!")
        myPoint = comPoint = 0;
    } else if (comPoint == 5) {
        writeResult.textContent = "End! You lost!";
        alert("you won, can start a new game!")
        myPoint = comPoint = 0;
    }
}


function computerPlay() {
    var types = ["rock", "paper", "scissors"];
    let selection = Math.floor(Math.random()*types.length);
    return types[selection];
  }

  
  function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
      return "it's a draw!";
    } else if (playerSelection == "rock" && computerSelection == "paper"
    || playerSelection == "paper" && computerSelection == "scissors" ||
    playerSelection == "scissors" && computerSelection == "rock") {
      return "you suck, " + computerSelection + " beats " + playerSelection;
    } else {
      return "you won, " + playerSelection + " beats " + computerSelection;
    }
  }