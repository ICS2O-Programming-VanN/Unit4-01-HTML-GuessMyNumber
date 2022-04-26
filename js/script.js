// This file contains the JS functions for index.html

'use strict';
/**
 * This function converts fahrenheit to celsius.
 */
function reveal() {
  // Variables
  let guess = parseInt(document.getElementById('guess').value) // Stores value from user
  let answer = Math.floor((Math.random() * 6) + 1)
  let winMsg = "You guessed correctly! The number was " + answer;
  let loseMsg = "You guessed incorrectly... The correct answer was " + answer;

  if (guess == answer) {
    document.getElementById('answer').innerHTML = winMsg
    document.getElementById('incorrect-answer').innerHTML = ""
  } else {
    document.getElementById('incorrect-answer').innerHTML = loseMsg
    document.getElementById('answer').innerHTML = ""
  }
}