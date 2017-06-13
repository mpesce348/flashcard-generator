var fs = require('fs');
var inquirer = require('inquirer');

// This file should define a Node module that exports a constructor
//  for creating cloze-deletion flashcards,
//   e.g.: module.exports = ClozeCard;
// The constructor should accept two arguments: text and cloze.
var ClozeCard =function(partial, fullText, err) {
// The constructed object should have a cloze property that contains
//  only the cloze-deleted portion of the text.
	this.partial = partial;
 
// The constructed object should have a partial property that
//  contains only the partial text.
	this.fullText = fullText,
// The constructed object should have a fullText property that
//  contains only the full text.
	this.err = err;
// The constructor should throw or log an error when the cloze
//  deletion does not appear in the input text.

}
// Use prototypes to attach these methods, wherever possible.
var ClozeCardInput = function(){
	inquirer.prompt([

		{
			type: 'input',
			message: 'Enter Cloze Argument',
			name:'clozeText'
		},
		{
			type: 'input',
			message: 'Enter The Rest Of The Sentence',
			name: 'fullText'
		}
		]).then(enterInputs);
}

var enterInputs = function(inputs){
	new ClozeCard(inputs.clozeText, inputs.fullText);
	
}

ClozeCardInput();

module.exports = ClozeCardInput;