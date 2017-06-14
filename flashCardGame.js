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
//sets up function to promt user to choose to build close cards
//or basic cards
var cardType = function() {
		inquirer.prompt([
		{
			type: 'checkbox',
			message: 'What type of card would you like to add?',
			choices: ['basic', 'cloze'],
			name: 'basicCloze'
		}

		]).then(handleCardType);
};
//creates function which will run functions exported from other files
//in the directory
var handleCardType = function(cardChoice) {
	//shows the user the type of card they have selected to build
	console.log('type of card answer: '+ cardChoice.basicCloze[0]);

		//switch case to run the functions from basicCard.js
		//and clozeCard.js
	switch (cardChoice.basicCloze[0]){
		case 'basic':
			basicCards.basicCardInput();
			break;

		case 'cloze':
			clozeCards.clozeCardInput();
			break;

		default:
			console.log("I'm sorry, Please try again.")
	};
};

var playQuiz = function(){
	fs.readFile()
}	






//runs user promt
userProcess();