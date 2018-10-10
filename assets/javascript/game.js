 //defines computer letter choices
 var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
            
 //creates variable to hold number of wins, losses and guesses remaining.
 var wins = 0;
 var losses = 0;
 var guessesLeft = 9;
 var lettersGuessed = "";

 var lettersGuessedText = document.getElementById("letters-guessed-text");
 var winsText = document.getElementById("wins-text");
 var lossesText = document.getElementById("losses-text");
 var guessesLeftText = document.getElementById("guesses-left-text");

 var computerOutput;

 var computerOutput = computerChoices[Math.floor(Math.random() * computerChoices.length)];
 
 //resets the game 
 function newGame(){
     guessesLeft = 9;
     lettersGuessed = "";
     //computer randomly chooses a letter from array
     var computerOutput = computerChoices[Math.floor(Math.random() * computerChoices.length)];
     console.log(computerOutput);
 }

 //defines event that occurs when user makes choice
 document.onkeyup = function(event) {
    
     //functioning 
 lettersGuessed = lettersGuessed + " " + event.key;
     
     //console.log(lettersGuessed);

     if (event.key === computerOutput){
         wins++;
         newGame();
     } else {
         guessesLeft--;
         if (guessesLeft === -1){
             losses++;
             newGame();
         }
     }
     updateText();
 };
 
 function updateText (){
 //Display user input and wins, losses and guesses left;
 winsText.textContent = "Wins: " + wins;
 lossesText.textContent = "Losses: " + losses;
 guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
 lettersGuessedText.textContent = "Letters Guessed: " + lettersGuessed;
 }