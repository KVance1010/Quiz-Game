/*******************  global variables ********************/
let startTime = 60;
let timeLeft;
// used to set the random number generator
let numbOfQuestions = 51;
let correct = 0;
let wrong = 0;
let timeInterval;

/*******************  array of questions ********************/

const questions = [
	question1,
	question2,
	question3,
	question4,
	question5,
	question6,
	question7,
	question8,
	question9,
	question10,
	question11,
	question12,
	question13,
	question14,
	question15,
	question16,
	question17,
	question18,
	question19,
	question20,
	question21,
	question22,
	question23,
	question24,
	question25,
	question26,
	question27,
	question28,
	question29,
	question30,
	question40,
	question41,
	question42,
	question43,
	question44,
	question45,
	question46,
	question47,
	question48,
	question49,
	question50,
	question51,
];

/*******************  query selectors ********************/

const startButton = document.querySelector('#startButton');
const gameDescription = document.querySelector('.description');
const answerArea = document.querySelector('#answerArea');
const answerText = document.querySelector('.answerText');
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
	console.log(answerAreaVisible);
	if (answerAreaVisible === 'display: visible') {
		answerArea.setAttribute('style', 'display: none');
	} else {
		answerArea.style.display = 'visible';
		answerArea.setAttribute('style', 'display: visible');
	}
};

// generates a random number
const randomQuestionGenerator = function () {
	return Math.floor(Math.random() * (numbOfQuestions - 1) + 1);
};

const generateQuestion = function () {
	if (timeLeft > 0) {
		let generatedNum = randomQuestionGenerator();
		let currentQuestion = questions[generatedNum];
		answerArea.dataset.num = generatedNum;
		countdown();
		displayQuestion(currentQuestion);
	} else {
		console.log('Game Over!');
	}
};

// countdown function
const countdown = function () {
	timeInterval = setInterval(function () {
		if (timeLeft > 0) {
			timeLeft--;
			timer.textContent = timeLeft;
		} else {
			clearInterval(timeInterval);
		}
	}, 1000);
};

// Display question
const displayQuestion = function (currentQuestion) {
	currentCorrect.textContent = correct;
	currentWrong.textContent = wrong;

	questionLine.textContent = currentQuestion.question;
	answerALine.textContent = currentQuestion.A;
	answerBLine.textContent = currentQuestion.B;
	answerCLine.textContent = currentQuestion.C;
	answerDLine.textContent = currentQuestion.D;
};

// main function of the game
const startGame = function () {
	timeLeft = startTime;
	hideDescription();
	generateQuestion();
};

/*******************  Event Listeners ********************/

//start game
startButton.addEventListener('click', startGame);

// functionality for the next button
nextButton.addEventListener('click', () => {
	hideAnswerArea();
	generateQuestion();
});

// answer event listener
questionBox.addEventListener('click', (userAnswer) => {
	clearInterval(timeInterval);
	hideAnswerArea();
	let answer = userAnswer.target.lastChild.textContent;

	if (answer === questions[answerArea.dataset.num].answer) {
		correct++;
		answerText.style.color = 'green';
		answerText.textContent = 'Correct';
	} else {
		if (timeLeft > 10) {
			timeLeft -= 10;
		} else {
			timeLeft = 0;
			timer.textContent = 0;
		}
		wrong++;
		answerText.style.color = 'red';
		answerText.textContent =
			'The correct answer is: ' + questions[answerArea.dataset.num].answer;
	}
});
