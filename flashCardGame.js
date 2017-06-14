//set variables to require packages and other files in the directory
var inquirer = require('inquirer');
var fs = require('fs');
var basicCardData = require('./basic.json');
var clozeCardData = require('./cloze.json');
var basicCards = require('./basicCard.js');
var clozeCards = require('./clozeCard.js');

//creates function which will run functions exported from other files
//in the directory
var PlayQuiz = function() {
    console.log('Welcome to the Flashcard Game!');
    console.log('Prepare to Test Your Knowledge');
    
    inquirer.prompt([{
        type: 'checkbox',
        message: 'What type of flashcard do you choose?',
        choices: ['basic', 'cloze'],
        name: 'card_choice'
    }]).then(playerChoice);
};

var playerChoice = function(quizAnws){

	switch (this.card_choice[0]){
		case 'basic':
			playBasic();	
			break;
		case 'cloze':
			playCloze();
			break;
		default:
		console.log('Please Try Again');
	}

};

var playBasic = function(){
	var basicQuestion = fs.readFile('./basic.json', 'utf8', function(err, data){
		if (err) {
			console.log(err);
		} else {
			console.log(data);
		}
	})
};

var playCloze = function() {
		var clozeQuestion = fs.readFile('./cloze.json', 'utf8', function(err, data){
		if (err) {
			console.log(err);
		} else {
			console.log(data);
		}
	})
};




//runs user promt
PlayQuiz();