# JavaScript Quiz Game

## Overview ---need to reword -- todo --


At some point in your journey to become a full-stack web developer, you’ll likely be asked to complete a coding assessment&mdash;perhaps as part of an interview process. A typical coding assessment includes both multiple-choice questions and interactive coding challenges. 

To help familiarize you with these tests and allow you to use the skills covered in this unit, this week’s challenge invites you to build a timed coding quiz with multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface. 

This week’s coursework will equip you with all the skills you need to succeed in this assignment.

### learning points  -- todo ---
- JavaScript fundamentals
- Flow control
- Input validation
- Prompts, alerts, and confirm functions
- Event listeners

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```

## Technologies
 
- **JavaScript**

## Screenshot/mockup

![The mockup of the website before it was built](./assets/images/desktop-mockup1.jpg)

## CodeSnippets 
### Converts unicode to a string
``` javascript
function generateCharacter(characterNum) {
	return String.fromCharCode(characterNum);
}
```
### Generates a random number between 97 and 122
``` javascript
function randomForLowerCase() {
	return Math.floor(Math.random() * (122 - 97 + 1)) + 97;
}
```

## License

Please refer to the LICENSE in the repo. 

## Links

### live Link
[Live website] https://kvance1010.github.io/Quiz-Game/

### LinkedIn
[LinkedIn] https://www.linkedin.com/in/kyle-s-vance
