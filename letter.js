var inquirer = require("inquirer");



var Letter = function(letters, boolean, guessed, updateboolean){
  this.letters = [];
  this.guessed = false;
  
    // func 1 if guessed return character else display _


    // Func 2 if letter guessed update guessed to true

  
};
// var gamePrompt = gamePrompt();
var letterArray = [];
var count = 0

function gamePrompt(){
    inquirer.prompt({
        type: "input",
        name: "userGuess",
        message: "Guess a Letter!",
            // Capture response from name
    }).then(function (response) {

        // Store in Variable push to array
        var letterGuessed = (response.userGuess);
        letterArray.push(response.userGuess);
        console.log(letterGuessed)
        console.log(letterArray)
        count++
        
        if(!response.userguess) {
            letterGuessed = "_"

            gamePrompt();
            }
        })
    };

    gamePrompt();
    












module.exports = Letter

