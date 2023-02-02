let guessNumber = Math.floor(Math.random() * 100) + 1;
console.log(guessNumber);

let guess;
do {
    guess = prompt("Doan xem: ");
    if (guess > guessNumber) {
        alert("Nho hon");
    }
    else if (guess < guessNumber) {
        alert("Lon hon");
    } 
    else {
        alert("Dung roi");
    }
} while (parseInt(guess) !== guessNumber);