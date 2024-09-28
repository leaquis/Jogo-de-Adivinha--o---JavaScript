const guessSection = document.querySelector("#guess-section");
const guessInput = document.querySelector("#guess");
const guessButton = document.querySelector("#guess-btn");
const resultParagraph = document.querySelector("#result");
const difficultySelect = document.querySelector("#difficulty");
const difficultySection = document.querySelector("#difficulty-section");
const gameSection = document.querySelector("#game-section");
const triesLeftSpan = document.querySelector("#tries-left");
const resetButton = document.querySelector("#reset-btn");

let maxTries;
let randomNumber;
let triesLeft;

difficultySelect.addEventListener("change", function() {
    const difficulty = parseInt(difficultySelect.value);

    switch (difficulty) {
        case 1:
            maxTries = 10;
            break;
        case 2:
            maxTries = 7;
            break;
        case 3:
            maxTries = 5;
            break;
        default:
            maxTries = 10;
            break;
    }

    triesLeft = maxTries;
    triesLeftSpan.textContent = triesLeft;

    randomNumber = Math.floor(Math.random() * 100) + 1;

    difficultySection.style.display = "none";
    gameSection.style.display = "block";
    guessSection.style.display = "flex";

    console.log(randomNumber);
});

guessButton.addEventListener("click", function() {
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        resultParagraph.textContent = "Por favor insira um numero de 1 a 100";
    } else {
        if (guess === randomNumber) {
            resultParagraph.textContent = `parabéns, você acertou em ${maxTries - triesLeft + 1} tentativa(s)!!!`;
            resetButton.style.display = "block";
            guessSection.style.display = "none";
        } else if (guess > randomNumber) {

            resultParagraph.textContent = "Muito alto. Tente novamente!";
            triesLeft--;

        } else {

            resultParagraph.textContent = "Muito baixo. Tente novamente!";
            triesLeft--;

        }

        triesLeftSpan.textContent = triesLeft;
    }
})
