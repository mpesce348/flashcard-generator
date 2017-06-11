// This file should define a Node module that exports a constructor
//  for creating cloze-deletion flashcards,
//   e.g.: module.exports = ClozeCard;
// The constructor should accept two arguments: text and cloze.
var text = process.argv[2];
var cloze = process.argv[3];

var ClozeCard =function(partial, fullText, err) {
// The constructed object should have a cloze property that contains
//  only the cloze-deleted portion of the text.
	this.partial = 
 
// The constructed object should have a partial property that
//  contains only the partial text.
	this.fullText = 
// The constructed object should have a fullText property that
//  contains only the full text.
	this.err = 
// The constructor should throw or log an error when the cloze
//  deletion does not appear in the input text.
}
// Use prototypes to attach these methods, wherever possible.


module.exports = ClozeCard;