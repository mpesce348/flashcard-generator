var inquirer = require('inquirer');
var fs = require('fs');


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

	fs.appendFile("basic.json", "{front: " + this.front + ", back: " + this.back + "},", function(err){
			if (err) console.log(err)
		})
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