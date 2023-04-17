//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 21;
let countdown;

//Questions and Options array

const quizArray = [
    {
        id: "0",
        question: "Which study of the language includes as its primary task the specification of the stored meaning representation, or the “entry”-associated with each lexeme in the mental lexicon",
        options: ["Linguistic semantics", "Syntax analysis", "Morpho-semantics", "Phono-semantics"],
        correct: "Linguistic semantics",
    },
    {
        id: "1",
        question: "Onomasiological definitions start with:",
        options: ["With a language´s individual lexemes, and tries to specify the meaning of each one. ", "With a particular meaning, and list the various forms available in the language for its expression", "With a particular definition, and list the various forms available in the language for its expression", "With a language´s individual morphemes, and tries to specify the meaning of each one."],
        correct: "with a particular meaning, and list the various forms available in the language for its expression",
    },
    {
        id: "2",
        question: "Which of these words are examples of units with individually describable meanings",
        options: ["happy, green, ba ", "sad, table, invisible", "woof, de, house", "pe, head, cigarette"],
        correct: "sad, table, invisible",
    },
    {
        id: "3",
        question: "Which one of this options is above word level:",
        options: ["Words and morphemes", "Idioms", "Both", "None of them"],
        correct: "Idioms",
    },
    {
        id: "4",
        question: "Which one of these is not considered as one of the two different levels of identification of words?",
        options: ["Phonological words", "Grammatical words", "Morphological words", "None of them"],
        correct: "Morphological words",
    },
    {
        id: "5",
        question: "Which option includes an example of a problem with the general meaning hypothesis?",
        options: ["Failure to distinguish the word from various non-synonymous verbs in the same semantic field.", "Failure to provide clear definitions, which instead might either be too wordy and specific or too simple and general", "The hyper specific entries might confuse the user unnecessarily, and also might be ambiguous", "All of them are correct"],
        correct: "Failure to distinguish the word from various non-synonymous verbs in the same semantic field.",
    }, {
        id: "6",
        question: "Which option includes an example of a problem with the multiple meaning hypothesis?",
        options: ["The many definitions may trigger the process of word sense disambiguation, and also might be inefficient", "The hyper specific entries might confuse the user unnecessarily, and also might be inefficient", "The hyper specific entries might confuse the user unnecessarily, and also might be ambiguous", "All of them are correct"],
        correct: "The many definitions may trigger the process of word sense disambiguation, and also might be inefficient",
    },
    {
        id: "7",
        question: "Select which of the following options is not an example of a problem with collocation in compositionality.",
        options: ["Play", "Spill the tea", "Bank", "Eyeliner"],
        correct: "Eyeliner",
    },
    {
        id: "8",
        question: "Nominal definitions fulfil two different functions, select which ones:",
        options: ["Fixing the meaning of a word so that there can be no ambiguity about its denotation, and bringing about an understanding of the meaning of a word in someone who does not already understand it, typically in order to enable the word to be correctly used.", "Fixing the meaning of a word so that there can be ambiguity about its denotation, and bringing about an understanding of the meaning of a word in someone who does not already understand it, typically in order to enable the word to be correctly used.", "Fixing the meaning of a word so that there can be no ambiguity about its connotation, and bringing about an understanding of the meaning of a word in someone who does not already understand it, typically in order to enable the word to be correctly used", "None of these are correct"],
        correct: "Fixing the meaning of a word so that there can be no ambiguity about its denotation, and bringing about an understanding of the meaning of a word in someone who does not already understand it, typically in order to enable the word to be correctly used.",
    },
    {
        id: "9",
        question: "A problem with compositionality is that  collocation determines what reading is operative for the word’s object.",
        options: ["True", "False", "Somewhat True", "Somewhat False"],
        correct: "True",
    },
];

//Restart Quiz
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        //increment questionCount
        questionCount += 1;
        //if last question
        if (questionCount == quizArray.length) {
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //user score
            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + questionCount;
        } else {
            //display questionCount
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";
            //display quiz
            quizDisplay(questionCount);
            count = 21;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);

//Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {
        //randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    //if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        //For marking the correct option
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    //clear interval(stop timer)
    clearInterval(countdown);
    //disable all options
    options.forEach((element) => {
        element.disabled = true;
    });
}

//initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 21;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

//hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};