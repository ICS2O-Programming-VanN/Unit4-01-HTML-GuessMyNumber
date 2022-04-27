// This file contains the JS functions for index.html

'use strict';
/**
 * This function creates a random number for the user to try to guess and then output whether or not the user got it right.
 */
function reveal() {
  // Constants
  const MAX = 6;
  const MIN = 1;
  
  // Variables
  let guess = parseInt(document.getElementById('guess').value) // Makes variable an integer
  // Creates random number
  let answer = Math.floor((Math.random() * MAX) + MIN)

  // Output messages if the user got it or not
  let winMsg = "You guessed correctly! The number was " + answer;
  let loseMsg = "You guessed incorrectly... The correct answer was " + answer;

  // IF statement, if the user guessed correctly
  if (guess == answer) {
    document.getElementById('answer').innerHTML = winMsg
    document.getElementById('incorrect-answer').innerHTML = ""
    // If the user did not guess correctly
  } else {
    document.getElementById('incorrect-answer').innerHTML = loseMsg
    document.getElementById('answer').innerHTML = ""
  }
}