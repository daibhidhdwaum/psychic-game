var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//var wins = 0;
//var loss = 0;
//var guessesLeft = 9;

//var wins = document.getElementById("wins");
//var losses = document.getElementById("losses");
//var guessesLeft = document.getElementById("guesses-left");
var lettersGuessed = document.getElementById("letters-guessed");


//this function logs the userselection to the page(for some reason it doesn't work through the JS file though)
document.onkeyup = function(event) {
    
    lettersGuessed.textContent = event.key;
    

};
    var computerOutput = computerChoices[(Math.random() * computerChoices.length)];

    console.log(computerOutput);


    /*if (userGuess === computerOutput) {
        wins++;
    }else if (userGuess === computerOutput -1){
        losses++;
}*/

/*wins.textContent = "Wins: " + wins;
losses.textContent = "Losses: " + losses;
guessesLeft.textContent = "Guesses Left: " + guessesLeft;
lettersGuessed.textContent = "Letters Guessed: " + lettersGuessed;*/

