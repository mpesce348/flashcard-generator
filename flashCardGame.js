//set variables to require packages and other files in the directory
var inquirer = require('inquirer');
var basicCardData = require('./basic.json');
var clozeCardData = require('./cloze.json');
var basicCards = require('./basicCard.js');
var clozeCards = require('./clozeCard.js');
//sets up function to promt user to chose to make new cards or to quiz themselves
var userProcess = function(){

	inquirer.prompt ([
		{
			type: 'input',
			message: 'Type "build" to make new flashcards or type "play" to quiz yourself',
			name: 'buildOrPlay'
		}
		]).then(handleInput);

};
//sets up function with switch case to process the user's choice to build or play
var handleInput = function(processChoice) {
	switch (processChoice.buildOrPlay) {
		case 'build':
			cardType();
			break;
		case 'play':
			playQuiz();
			break;
		default:
			console.log('Invalid Entry - Try Again');
	}
};

var cardType = function() {

};

var playQuiz = function() {

};






//runs user promt
userProcess();