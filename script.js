// MAPEAMENTO
const userName = document.querySelector(".user-name");
const machineName = document.querySelector(".machine-name");
const score = document.querySelector(".score");
const userScore = document.querySelector(".user-score");
const machineScore = document.querySelector(".machine-score");
const userChoice = document.querySelector(".user-choice-img");
const machineChoice = document.querySelector(".machine-choice-img");
const result = document.querySelector(".result");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const initialContainer = document.querySelector(".initialize-container");
const usernameInput = document.querySelector("#username");
const alexa = document.querySelector("#alexa");
const chatgpt = document.querySelector("#chatgpt");
const devclub = document.querySelector("#devclub");
const siri = document.querySelector("#siri");
const startButton = document.querySelector(".start-btn");

// MARCA PONTOS
let userPoints = 0;
let machinePoints = 0;

// FUNÇÃO ESCOLHA DO USUÁRIO
const userMove = (userPick) => {
  play(userPick, machineMove());
};

// FUNÇÃO ESCOLHA DA MÁQUINA
const machineMove = () => {
  const options = ["paper", "rock", "scissors"];
  const random = Math.floor(Math.random() * 3);
  return options[random];
};

// FUNÇÃO JOGAR
const play = (user, machine) => {
  console.log(`Usuário: ${user}
Máquina: ${machine}`);
  userChoice.style.visibility = "visible";
  setTimeout(() => {
    machineChoice.style.visibility = "visible";
  }, 100);
  userChoice.src = `./assets/${user}.png`;
  setTimeout(() => {
    machineChoice.src = `./assets/${machine}.png`;
  }, 100);
  if (user === machine) {
    setTimeout(() => {
      result.innerHTML = "Deu empate!";
    }, 100);
  } else if (
    (user === "paper" && machine === "rock") ||
    (user === "rock" && machine === "scissors") ||
    (user === "scissors" && machine === "paper")
  ) {
    setTimeout(() => {
      userPoints++;
      userScore.innerHTML = userPoints;
      result.innerHTML = "Você ganhou!";
    }, 100);
  } else {
    setTimeout(() => {
      machinePoints++;
      machineScore.innerHTML = machinePoints;
      result.innerHTML = "Você perdeu!";
    }, 100);
  }
  formatScore();
};

// FUNÇÃO FORMATAR SCORE
const formatScore = () => {
  if (userPoints === 10 || machinePoints === 10) {
    score.style.width = "135px";
  } else if (userPoints === 100 || machinePoints === 100) {
    score.style.width = "170px";
  }
};

// FUNÇÃO ESCOLHA DO NOME
const setUsername = (user) => {
  if (user === "") {
    userName.innerHTML = "Usuário";
  } else {
    userName.innerHTML = user;
  }
  initialContainer.style.display = "none";
};

// FUNÇÃO ESCOLHA DO OPONENTE
const setOpponent = (opponent) => {
  machineName.innerHTML = opponent;
};

// FUNÇÃO DESABILITAR BOTÃO
const disableButton = (button1, button2, button3, button4) => {
  button1.style.opacity = "0.5";
  button1.style.cursor = "default";
  button2.style.opacity = "1";
  button2.style.cursor = "pointer";
  button3.style.opacity = "1";
  button3.style.cursor = "pointer";
  button4.style.opacity = "1";
  button4.style.cursor = "pointer";
};

// EVENTOS
paper.addEventListener("click", () => {
  userMove("paper");
});
rock.addEventListener("click", () => {
  userMove("rock");
});
scissors.addEventListener("click", () => {
  userMove("scissors");
});
alexa.addEventListener("click", () => {
  setOpponent("Alexa");
  disableButton(alexa, chatgpt, devclub, siri);
});
chatgpt.addEventListener("click", () => {
  setOpponent("ChatGPT");
  disableButton(chatgpt, alexa, devclub, siri);
});
devclub.addEventListener("click", () => {
  setOpponent("DevClub GPT");
  disableButton(devclub, chatgpt, alexa, siri);
});
siri.addEventListener("click", () => {
  setOpponent("Siri");
  disableButton(siri, devclub, chatgpt, alexa);
});
startButton.addEventListener("click", () => {
  setUsername(usernameInput.value);
});