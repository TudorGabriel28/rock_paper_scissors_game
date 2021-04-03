var userScore = 0;
var computerScore = 0;
var userChoice = [];
var computerChoice = [];
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");
const result_div = document.querySelector(".result > p");
const userRock = document.querySelector("#userChoice>#ur");
const userPaper = document.querySelector("#userChoice>#up");
const userScissor = document.querySelector("#userChoice>#us");
const computerRock = document.querySelector("#computerChoice>#cr");
const computerPaper = document.querySelector("#computerChoice>#cp");
const computerScissor = document.querySelector("#computerChoice>#cs");

main();

function clearPicks() {
	userRock.style.display = "none";
	userPaper.style.display = "none";
	userScissor.style.display = "none";
	computerRock.style.display = "none";
	computerPaper.style.display = "none";
	computerScissor.style.display = "none";
}

function getComputerChoice() {
	const choices = ["Rock", "Paper", "Scissors"];
	const randomNumber = Math.floor(Math.random() * 3);
	computerChoice[0] = (randomNumber + 1).toString(10);
	computerChoice[1] = choices[randomNumber];
	switch (computerChoice[0]) {
		case "1":
			computerRock.style.display = "inherit";
			break;
		case "2":
			computerPaper.style.display = "inherit";
			break;
		case "3":
			computerScissor.style.display = "inherit";
			break;
	}
}

function win(userChoice, computerChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;

	result_div.innerHTML = userChoice + " beats " + computerChoice + ". You win!";
}

function lose(userChoice, computerChoice) {
	computerScore++;
	computerScore_span.innerHTML = computerScore;

	result_div.innerHTML = userChoice + " is beaten by " + computerChoice + ". You lose..";
}

function tie() {
	result_div.innerHTML = "Tie";
}

function game(userChoice) {
	clearPicks();
	getComputerChoice();

	switch (userChoice[0] + computerChoice[0]) {
		case "13":
		case "21":
		case "32":
			win(userChoice[1], computerChoice[1]);
			break;

		case "12":
		case "23":
		case "31":
			lose(userChoice[1], computerChoice[1]);
			break;
		case "11":
		case "22":
		case "33":
			tie();
			break;
	}
}

function main() {
	rock_div.addEventListener("click", function() {
		userChoice = ["1", "Rock"];
		game(userChoice);
		userRock.style.display = "inherit";
	});
	paper_div.addEventListener("click", function() {
		userChoice = ["2", "Paper"];
		game(userChoice);
		userPaper.style.display = "inherit";
	});
	scissors_div.addEventListener("click", function() {
		userChoice = ["3", "Scissors"];
		game(userChoice);
		userScissor.style.display = "inherit";
	});
}
