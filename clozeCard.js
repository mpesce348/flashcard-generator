//set variables to require packages and other files in the directory
var fs = require('fs');
var inquirer = require('inquirer');

// This file should define a Node module that exports a constructor
//  for creating cloze-deletion flashcards,
//   e.g.: module.exports = ClozeCard;
// The constructor should accept two arguments: text and cloze.
var ClozeCard =function(fullText, cloze, partial, err) {

	this.fullText = fullText;

	this.cloze = cloze;

	var match = this.fullText.match(cloze);
	var part = this.fullText.replace(match, "............");
	
	this.partial = part;
 
	

	console.log('=============================');
	console.log('');
	console.log('Full Text: ' + this.fullText);
	console.log('');
	console.log('Cloze Argument: '+ this.cloze);
	console.log('');
	console.log('Partial Text: ' + this.partial);
	console.log('');
	console.log('=============================');
	

	fs.appendFile("cloze.json", "{full text: " + this.fullText + ", cloze argument: " + this.cloze + "},", function(err){
		if (err) console.log(err);
		})

}
// Use prototypes to attach these methods, wherever possible.
var ClozeCardInput = function(){
	inquirer.prompt([
		{
			type: 'input',
			message: 'Enter The Full Text',
			name: 'fullText'
		},
		{
			type: 'input',
			message: 'Enter Cloze Argument',
			name:'clozeText'
		}
		]).then(enterInputs);
}

var enterInputs = function(inputs){
	new ClozeCard(inputs.fullText, inputs.clozeText);
	
}

ClozeCardInput();

module.exports = ClozeCardInput;