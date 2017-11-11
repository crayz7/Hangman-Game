var wins = 0;
var wrongLetters = [];
var correctLetters = [];
var wordBank = ["austin", "longhorns", "football", "burntorange", "hookem"];
var word = wordBank[Math.floor(Math.random() * wordBank.length)]
var startValue = 0;
var guesses = 10;


var game = function(){
	var arrayWord = word.split("");
	var arrayOfBlanks = arrayWord.map(function(a){
	return "__";
	})
	
	document.getElementById("currentword").innerHTML = arrayOfBlanks.join(" ");
	
	document.onkeyup = function(event){
		console.log(word);
		var userGuess = event.key;
		console.log(userGuess);
		console.log(guesses);
		if (word.indexOf(userGuess) > -1) {
			arrayOfBlanks = arrayOfBlanks.replace(word.indexOf(userGuess), userGuess);
			//document.getElementById("currentword").innerHTML = arrayOfBlanks.join(" ");
			console.log('your letter is in place ', word.indexOf(userGuess));
		} else {
			wrongLetters.push(userGuess);
			guesses--;
			document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(", ");
			document.getElementById("remaining").innerHTML = guesses
		};

		if (guesses < 0) {
			game();

		}

		// while (word.indexOf(userGuess, startValue) !== -1) {
		// 	startValue = word.indexOf(userGuess, startValue) + 1;

			

	
		//array.splice
		//array.push to guessed letters
		
   }
  }
 

game();
  

  // if guesses < 1 restart  game

  // else wins++