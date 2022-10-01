/*******************  global variables ********************/
let startTime = 60;
let timeLeft;

/*******************  array of questions ********************/

const questions = [questions1, questions2, questions3, questions4];

/*******************  query selectors ********************/

const startButton = document.querySelector('#startButton');
const gameDescription = document.querySelector('.description');
const answerArea = document.querySelector('#answerArea');
const answerText = document.querySelector('#answerText');
const questionLine = document.querySelector('#question');
const answerALine = document.querySelector('#answerA');
const answerBLine = document.querySelector('#answerB');
const answerCLine = document.querySelector('#answerC');
const answerDLine = document.querySelector('#answerD');
const currentCorrect = document.querySelector('#correctScore');
const currentWrong = document.querySelector('#wrongScore');
const nextButton = document.querySelector('#nextButton');
const timer = document.querySelector('#timer');
const questionBox = document.querySelector('#questionBox');

/*******************  functions ********************/

// toggles the Description Area
const hideDescription = function () {
	let descriptionVisible = gameDescription.getAttribute('style');
	if (descriptionVisible === 'display: visible') {
		gameDescription.setAttribute('style', 'display: none');
	} else {
		gameDescription.setAttribute('style', 'display: visible');
	}
};

// toggles the Answer Area
const hideAnswerArea = function () {
	let answerAreaVisible = answerArea.getAttribute('style');
	if (answerAreaVisible === 'display: visible') {
		answerArea.setAttribute('style', 'display: none');
	} else {
		answerArea.style.display = 'visible';
		answerArea.setAttribute('style', 'display: visible');
	}
};

// generates a random number between 1 and 4
const randomQuestionGenerator = function () {
	return Math.floor(Math.random() * (4 - 1) + 1);
};

// creates a new question
const generateQuestion = function () {
	if (timeLeft > 0) {
		let currentQuestion = questions[randomQuestionGenerator()];
		countdown(currentQuestion);
	} else {
		console.log('GAME OVER MAN!');
	}
};

// countdown function
function countdown(currentQuestion) {
	let timeInterval = setInterval(function () {
		if (timeLeft > 0) {
			timeLeft--;
			timer.textContent = timeLeft;
			
            questionLine.textContent = currentQuestion.question;
			answerALine.textContent = currentQuestion.A;
			answerBLine.textContent = currentQuestion.B;
			answerCLine.textContent = currentQuestion.C;
			answerDLine.textContent = currentQuestion.D;

			questionBox.addEventListener('click', (userAnswer) => {
				clearInterval(timeInterval);
				hideAnswerArea();
                let answer = userAnswer.target.lastChild.textContent;
                console.log(answer);
			});
		} else {
			clearInterval(timeInterval);
		}
	}, 1000);
}

// main function of the game
const startGame = function () {
	timeLeft = startTime;
	hideDescription();
	generateQuestion();
};

/*******************  Event Listeners ********************/

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', hideAnswerArea);
