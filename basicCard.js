//set variables to require packages and other files in the directory
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
	//once question and anwsers values are passed they are console logged
	console.log('=============================');
	console.log('');
	console.log('Front: ' + this.front); 
	console.log('');
	console.log('Back: ' + this.back + '.');
	console.log('');
	console.log('=============================');
	//uses file system package to append question and anwser values to the basic.json file
	//also sets up function to display errors should one occur
	fs.appendFile("basic.json", "{front: " + JSON.stringify(this.front) + ", back: " + JSON.stringify(this.back) + "},", function(err){
			if (err) console.log(err);
		})
}
//sets up function to to utalize inquirer package to promt user for 
//question and anwser info
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
		//once values have been passed, runs enterInputs function
		]).then(enterInputs);
}
//sets up function to capture inputs and calls the basic card function
//using values passed by the user
var enterInputs = function(inputs){
	new BasicCard(inputs.frontText, inputs.backText);
	
}
//runs the function to promt user to enter question/anwser data
BasicCardInput();

//exports the data captured in the BasicCardInput function
module.exports = BasicCardInput;