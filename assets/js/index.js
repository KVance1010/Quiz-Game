// declare variables for initials, correctScore, wrongScore, firstPlace, secondPlace, thirdPlace
// create an array of objects that holds question and answer objects
// create a timer
// create a function that randomly picks a question
// create a variables that holds the usersAnswer
// create an event listener that will hold usersAnswer
// check if the usersAnswer matches the correctAnswer
// if the userAnswer matches the answer then increment the correctScore counter and display a correct message
// if the userAnswer does not matches the answer then increment the wrongScore counter, display the correct answer, and decrees the counter clock by 10 seconds
// have the correctScore, wrongScore, and counter clock displayed at the top of the screen
// at the end of the quiz display the correctScore, wrongScore
// if the correctScore is in the top 3 scores get the users initials and place them on the leaderBoard
// else tell them they did not make the top 3 scores

let initials = '';
let correctScore = 0;
let wrongScore = 0;
let firstPlace;
let secondPlace;
let thirdPlace;
let timeLeft = 60;

// question objects
const questions1 = {
	question: 'Question 1',
	A: 'A',
	B: 'B',
	C: 'C',
	D: 'D',
	answer: 'Answer',
};
const questions2 = {
	question: 'Question 2',
	A: 'A',
	B: 'B',
	C: 'C',
	D: 'D',
	answer: 'Answer',
};
const questions3 = {
	question: 'Question 3',
	A: 'A',
	B: 'B',
	C: 'C',
	D: 'D',
	answer: 'Answer',
};
const questions4 = {
	question: 'Question 4',
	A: 'A',
	B: 'B',
	C: 'C',
	D: 'D',
	answer: 'Answer',
};

// array of questions
const questions = [questions1, questions2, questions3, questions4];

// query selectors
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

// functions
// hides the description text
const hideDescription = function () {
	let descriptionVisible = (gameDescription.style.display = 'visible');
	if (descriptionVisible === 'visible') {
		gameDescription.style.display = 'none';
	} else {
		gameDescription.style.display = 'visible';
	}
};

// hides the answer area
const hideAnswerArea = function () {
	let answerAreaVisible = (answerArea.style.display = 'visible');
	if (answerAreaVisible === 'visible') {
		answerArea.style.display = 'none';
	} else {
		answerArea.style.display = 'visible';
	}
};

// generates a random number between 1 and 4
const randomQuestionGenerator = function () {
	return Math.floor(Math.random() * (4 - 1) + 1);
};

function countdown(currentTimeLeft) {
	let timeInterval = setInterval(function () {
		if (currentTimeLeft > 1) {
			currentTimeLeft--;
            timer.textContent = currentTimeLeft;

            return currentTimeLeft;
		} else {
			clearInterval(timeInterval);
            return 0;
		}
	}, 1000);
}

// main function of the game
const startGame = function () {
	hideDescription();
	let currentQuestion = questions[randomQuestionGenerator()];
	let currentTimeLeft = timeLeft;
	while (currentTimeLeft > 0) {
		currentTimeLeft = countdown(currentTimeLeft);
	}
};

// event listeners
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', hideAnswerArea);

