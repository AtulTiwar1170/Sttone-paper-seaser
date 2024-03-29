let userScore = 0;
let  computerScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#computer-score");
const genComputerChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
const drowGame = () => {
    console.log("Game was drow");
    msg.innerText = "GAme was Drow. Play again.";
    msg.style.backgroundColor = "#081b31";
};


const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        compScorePara.innerText = computerScore;
        console.log("you lose");
        msg.innerText = `You Lose! ${userChoice} beats Your ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user Choice =", userChoice);
    //Generate computer choice 
    const compChoice = genComputerChoice();
    console.log("Computer choice =", compChoice);

    if(userChoice === compChoice) {
        drowGame();
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            userWin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            userWin = compChoice === "Scissors" ? false : true;
        } else {
            userWin = compChoice  === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("Id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});