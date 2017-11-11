var wins = 0;
var wrongLetters = [];
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
		var startValue = 0;
		var userGuess = event.key;
		console.log(userGuess);
		console.log(guesses);
		if (word.indexOf(userGuess) > -1) {
			while (word.indexOf(userGuess, startValue) !== -1) {
  				arrayOfBlanks[word.indexOf(userGuess, startValue)] = userGuess;
  				startValue = word.indexOf(userGuess, startValue) + 1;
  				
  				console.log(arrayOfBlanks);

  				// replace letter
  				//arrayOfBlanks.replaceAt=function(word.indexOf(userGuess), userGuess) {
  				//	return this.substr(0, index + userGuess+ this.substr(index + replacement.length);)
  				}
  				document.getElementById("currentword").innerHTML = arrayOfBlanks.join(" ");
  				// remove letter
 				// fill blanks
			}

		 	
		 
		
			
			//console.log('your letter is in place ', word.indexOf(userGuess));
		else {
			wrongLetters.push(userGuess);
			guesses--;
			document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(", ");
			document.getElementById("remaining").innerHTML = guesses
		}

		//if (guesses < 0) {
		//	game();

		//}

		}

			

	
		//array.splice
		//array.push to guessed letters
		
   }
  
 

game();
  

  // if guesses < 1 restart  game

  // else wins++