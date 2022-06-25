var maxNumber;
var num;
var guesses = [];

function getMaxNumber(){

    maxNumber = Number(prompt("Enter max number for game:", "e.x. 100"));

    while(isNaN(maxNumber) || maxNumber < 1){
        maxNumber = Number(prompt("Try again. Number must be a positive integer.", "e.x. 100"));
    }
    maxNumber = Math.floor(maxNumber);
    num = Math.floor(Math.random() * maxNumber + 1);
    console.log(num);
    var textToChange = document.getElementById("maxNumber");
    textToChange.innerHTML = "Guess a number between 1 and " + maxNumber.toString();
}

function doGuess(){
    
    let guess = Number(document.getElementById("guess").value);
    var message = document.getElementById("messageGuess");

    if(isNaN(guess)){
        message.innerHTML = "That is not a number!";
    }else if(guess > maxNumber || guess < 1 || Math.floor(guess) != guess){
        message.innerHTML = "Guess not in range. Please guess an integer between 1 and " + maxNumber.toString() + ".";
    }else if(guess === num){
        if(guesses.length === 0){
            message.innerHTML = "You got it on your first try!";
        }else{
            guesses.push(guess);
            var guessString = "";
            var guessLength = guesses.length;
            for(let i = 0; i < guessLength - 1; i++){
                guessString += String(guesses[i]) + ", ";
            }
    
            guessString += String(guesses[guessLength - 1]);
    
            message.innerHTML = "You got it! It took you " + guessLength.toString() + " tries and your guesses were " + guessString;
        }
    }else if(guess > num){
        if(!(guesses.includes(guess))){
            guesses.push(guess);
            message.innerHTML = "No, try a lower number.";
        }else{
            message.innerHTML = "This number has already been guessed. Try again.";
        }
    }else{
        if(!(guesses.includes(guess))){
            guesses.push(guess);
            message.innerHTML = "No, try a higher number.";
        }else{
            message.innerHTML = "This number has already been guessed. Try again.";
        }
    }
}