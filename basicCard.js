var fs = require('fs');
var inquirer = require('inquirer');

// This file should define a Node module that exports a constructor
//  for creating basic flashcards, e.g.: module.exports = BasicCard;
// The constructor should accept two arguments: front and back.
var BasicCard = function(front, back) {
	// The constructed object should have a front property that
	// contains the text on the front of the card
	this.front = front;
	// The constructed object should have a back property that contains
	//  the text on the back of the card.
	this.back = back;

	console.log('Front: ' + this.front + " Back: " + this.back + '.');
}

var BasicCardInput = function(){
	inquirer.prompt([

		{
			type: 'input',
			message: 'Enter Question',
			name:'frontText'
		},
		{
			type: 'input',
			message: 'Enter Anwser',
			name: 'backText'
		}
		]).then(enterInputs);
}

var enterInputs = function(inputs){
	new BasicCard(inputs.frontText, inputs.backText);
}

BasicCardInput();


module.exports = BasicCardInput;