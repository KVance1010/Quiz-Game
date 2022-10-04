/*******************  global variables ********************/
let timeLeft;
let correct = 0;
let wrong = 0;
let yourScore = 0;
let timeInterval;
let firstPlace = ['xxx', 0];
let secondPlace = ['xxx', 0];
let thirdPlace = ['xxx', 0];
// used to set the random number generator
let numbOfQuestions = 51;
// this can be changed to change the amount of play time
let startTime = 60;

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
	question31,
	question32,
	question33,
	question34,
	question35,
	question36,
	question37,
	question38,
	question39,
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
	question51
];

/*******************  query selectors ********************/

const answerText = document.querySelector('.answerText');
const gameDescription = document.querySelector('.description');
const userScore = document.querySelector('#userScore');
const tryAgain = document.querySelector('#tryAgain');
const firstPlaceEl = document.querySelector('#firstPlace');
const secondPlaceEl = document.querySelector('#secondPlace');
const thirdPlaceEl = document.querySelector('#thirdPlace');
const mainArea = document.querySelector('#mainArea');
const mainNav = document.querySelector('#mainNav');
const scoreBoardDisplay = document.querySelector('#scoreBoardDisplay');
const answerArea = document.querySelector('#answerArea');
const startButton = document.querySelector('#startButton');
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
const penaltyTime = document.querySelector('#penaltyTime');

/*******************  functions ********************/

//************* */ TODO: create one toggle function that handles all the different options to make the code more dry  ***********
// toggles the Description Area
const hideDescription = function () {
	let descriptionVisible = gameDescription.getAttribute('style');
	if (descriptionVisible === 'display: visible;') {
		gameDescription.setAttribute('style', 'display: none;');
	} else {
		gameDescription.setAttribute('style', 'display: visible;');
	}
};

// toggles the Answer Area
const hideAnswerArea = function () {
	let answerAreaVisible = answerArea.getAttribute('style');
	if (answerAreaVisible === 'display: visible;') {
		answerArea.setAttribute('style', 'display: none;');
	} else {
		answerArea.setAttribute('style', 'display: visible;');
	}
};

// toggles scoreBoard and  main info
const toggleCounterScore = function () {
	let descriptionVisible = mainNav.getAttribute('style');
	if (descriptionVisible === 'display: visible;') {
		mainNav.setAttribute('style', 'display: none;');
		scoreBoardDisplay.setAttribute('style', 'display: visible;');
	} else {
		mainNav.setAttribute('style', 'display: visible;');
		scoreBoardDisplay.setAttribute('style', 'display: none;');
	}
};

// toggles the question when the game is over
const toggleMainArea = function () {
	let descriptionVisible = mainArea.getAttribute('style');
	if (descriptionVisible === 'display: visible;') {
		mainArea.setAttribute('style', 'display: none;');
	} else {
		mainArea.setAttribute('style', 'display: visible;');
	}
};
/*****************************  NEED to REFACTOR  these all do the same thing ********************************************/

// generates a random number
const randomQuestionGenerator = function () {
	return Math.floor(Math.random() * (numbOfQuestions));
};

// generates a random number and question
const generateQuestion = function () {
	if (timeLeft > 0) {
		// TODO: add numbers to an array and check if they have been asked
		let generatedNum = randomQuestionGenerator();
		let currentQuestion = questions[generatedNum];
		answerArea.dataset.num = generatedNum;
		countdown();
		displayQuestion(currentQuestion);
	} else {
		toggleMainArea();
		toggleCounterScore();
		displayTotals();
		console.log('Game Over!');
	}
};

// displays the totals on scoreBoardDisplay
const displayTotals = function () {
	yourScore = correct * 100;
	usersScore.style.fontWeight = 'bold';
	usersScore.textContent = yourScore;
	firstPlaceEl.setAttribute('style', 'fontWeight:bold fontSize:40px');
	firstPlaceEl.textContent = firstPlace[0] + ' ' + firstPlace[1];
	secondPlaceEl.setAttribute('style', 'fontWeight:bold fontSize:30px');
	secondPlaceEl.textContent = secondPlace[0] + ' ' + secondPlace[1];
	thirdPlaceEl.setAttribute('style', 'fontWeight:bold fontSize:20px');
	thirdPlaceEl.textContent = thirdPlace[0] + ' ' + thirdPlace[1];

	if (yourScore > firstPlace[1]) {
		let userInitials = prompt(
			'you scored puts you in first place please enter your initials: '
		);
		thirdPlace[0] = secondPlace[0];
		thirdPlace[1] = secondPlace[1];
		secondPlace[0] = firstPlace[0];
		secondPlace[1] = firstPlace[1];
		firstPlace[0] = userInitials;
		firstPlace[1] = yourScore;
		firstPlaceEl.textContent = firstPlace[0] + ' ' + firstPlace[1];
		secondPlaceEl.textContent = secondPlace[0] + ' ' + secondPlace[1];
		thirdPlaceEl.textContent = thirdPlace[0] + ' ' + thirdPlace[1];
	} else if (yourScore > secondPlace[1]) {
		let userInitials = prompt(
			'you scored puts you in second place please enter your initials: '
		);
		thirdPlace[0] = secondPlace[0];
		thirdPlace[1] = secondPlace[1];
		secondPlace[0] = userInitials;
		secondPlace[1] = yourScore;
		secondPlaceEl.textContent = secondPlace[0] + ' ' + secondPlace[1];
		thirdPlaceEl.textContent = thirdPlace[0] + ' ' + thirdPlace[1];
	} else if (yourScore > thirdPlace[1]) {
		let userInitials = prompt(
			'you scored puts you in third place please enter your initials: '
		);
		thirdPlace[0] = userInitials;
		thirdPlace[1] = yourScore;
		thirdPlaceEl.textContent = thirdPlace[0] + ' ' + thirdPlace[1];
	} else {
		alert('Game Over. You did not place withing the top 3 scores.');
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
	penaltyTime.textContent = '';
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
			penaltyTime.style.color = 'red';
			penaltyTime.textContent = ' -10';
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

tryAgain.addEventListener('click', () => {
	correct = 0;
	wrong = 0;
	toggleMainArea();
	toggleCounterScore();
	hideDescription();
	startGame();
});
