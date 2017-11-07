var wins = 0;
var wrongLetters = [];
var correctLetters = [];
var wordBank = ["Austin", "Longhorns", "football", "burntorange", "Hookem"];
var word;
var startValue = 0;
var guesses = 10;


var game = function(){
	word = wordBank[Math.floor(Math.random() * wordBank.length)];
	var arrayWord = word.split("");
	var arrayOfBlanks = arrayWord.map(function(a){
	return "__";
	})
	
	document.getElementById("currentword").innerHTML = arrayOfBlanks.join(" ");
	
	document.onkeyup = function(event){
		var userGuess = event.key;

		while (word.indexOf(userGuess, startValue) !== -1) {h
			startValue = word.indexOf(userGuess, startValue) + 1;

		if (startValue === 1) {
  			// if userGuess matches a letter in word array, replace letter and minus 1 from guesses
  			console.log(123);
		}
		else {
			console.log(321);
		
		}
	}

	}
}
game();

  

  // if guesses < 1 restart  game

  // else wins++