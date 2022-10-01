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
let firstPlace = [];
let secondPlace = [];
let thirdPlace = [];
let startTime = 60;
let timeLeft;
let answer = '';
let timeInterval;

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
const questionBox = document.querySelector('#questionBox');

// functions
const hideDescription = function () {
	let descriptionVisible = gameDescription.getAttribute('style');
	if (descriptionVisible === 'display: visible') {
		gameDescription.setAttribute('style', 'display: none');
	} else {
		gameDescription.setAttribute('style', 'display: visible');
	}
};

// hides the answer area
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

// countdown function
function countdown(currentQuestion, questionNumber) {
	timeInterval = setInterval(function () {
		if (timeLeft > 0) {
			timeLeft--;
			timer.textContent = timeLeft;

			questionBox.addEventListener('click', (event) => {
				clearInterval(timeInterval);
				hideAnswerArea();
			});
            
		} else {
			clearInterval(timeInterval);
		}
	}, 1000);
}

// creates a new question
const generateQuestion = function (){
    if(timeLeft > 0){
    let questionNumber = randomQuestionGenerator();
    console.log(questionNumber);
    let currentQuestion = questions[questionNumber];
    console.log(currentQuestion);
    countdown(currentQuestion, questionNumber);
    } else{
        console.log("GAME OVER MAN!");
    }
}

// main function of the game
const startGame = function (){
	timeLeft = startTime;
	hideDescription();
    generateQuestion();
};

// event listeners
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', hideAnswerArea);
