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
// if the correctScore is in the top 3 scores get the users initials and place them on the leaderboard
// else tell them they did not make the top 3 scores

let initials = '';
let correctScore = 0;
let wrongScore = 0;
let firstPlace;
let secondPlace;
let thirdPlace;

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
const questionLine = document.querySelector('#question');
const answerALine = document.querySelector('#answerA');
const answerBLine = document.querySelector('#answerB');
const answerCLine = document.querySelector('#answerC');
const answerDLine = document.querySelector('#answerD');

// functions
const hideDescription = function () {
	gameDescription.style.display = 'none';
};

// event listeners
gameDescription.addEventListener('click', hideDescription);
