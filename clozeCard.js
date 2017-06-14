//set variables to require packages and other files in the directory
var fs = require('fs');
var inquirer = require('inquirer');

// This file should define a Node module that exports a constructor
//  for creating cloze-deletion flashcards,
//   e.g.: module.exports = ClozeCard;
// The constructor should accept two arguments: text and cloze.
var ClozeCard =function(partial, fullText, cloze, err) {
// The constructed object should have a cloze property that contains
//  only the cloze-deleted portion of the text.
	this.partial = partial;
 
// The constructed object should have a partial property that
//  contains only the partial text.
	this.fullText = fullText,
// The constructed object should have a fullText property that
//  contains only the full text.
	this.cloze = cloze,
	
// The constructor should throw or log an error when the cloze
//  deletion does not appear in the input text.
fs.appendFile("cloze.json", "{full text: " + this.fullText + ", cloze argument: " + this.cloze + ", partial text: " + this.partial + "},", function(err){
			if (err) console.log(err)
		})

}
// Use prototypes to attach these methods, wherever possible.
var ClozeCardInput = function(){
	inquirer.prompt([
		{
			type: 'input',
			message: 'Enter The Full Text',
			name: 'fullText'
		}
		{
			type: 'input',
			message: 'Enter Cloze Argument',
			name:'clozeText'
		},
		{
			type: 'input',
			message: 'Enter The Rest Of The Sentence',
			name: 'partial'
		}
		]).then(enterInputs);
}

var enterInputs = function(inputs){
	new ClozeCard(inputs.fullText, inputs.clozeText, inputs.partial);
	
}

ClozeCardInput();

module.exports = ClozeCardInput;