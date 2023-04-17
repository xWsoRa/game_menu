const questions = [
	{
		question: "What is the capital city of France?",
		answer: "Paris"
	},
	{
		question: "What is the highest mountain in the world?",
		answer: "Mount Everest"
	},
	{
		question: "What is the largest country by land area?",
		answer: "Russia"
	},
	{
		question: "What is the smallest country by land area?",
		answer: "Vatican City"
	},
	{
		question: "What is the currency of Japan?",
		answer: "Yen"
	},
	{
		question: "What is the largest ocean in the world?",
		answer: "Pacific Ocean"
	},
	{
		question: "What is the most populous country in the world?",
		answer: "China"
	},
	{
		question: "What is the name of the world's largest desert?",
		answer: "Sahara"
	},
	{
		question: "Who is the author of the Harry Potter series?",
		answer: "J.K. Rowling"
	},
	{
		question: "What is the national sport of Canada?",
		answer: "Ice Hockey"
	}
];

const questionText = document.getElementById('question-text');
const userInput = document.getElementById('userInput');
const submitBtn = document.getElementById('submit-btn');
const result = document.getElementById('result');
let currentQuestion = 0;
let score = 0;

function displayQuestion() {
	if (currentQuestion < questions.length) {
		questionText.innerHTML = questions[currentQuestion].question;
		userInput.value = "";
		result.style.display = "none";
	} else {
		questionText.innerHTML = `Game over! You got ${score} out of ${questions.length} correct.`;
		submitBtn.style.display = "none";
		userInput.style.display = "none";
	}
}

function checkAnswer() {
	if (userInput.value.trim().toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
		score++;
		result.innerHTML = "Correct!";
	} else {
		result.innerHTML = `Incorrect. The correct answer is ${questions[currentQuestion].answer}.`;
	}
	result.style.display = "block";
	currentQuestion++;
	displayQuestion();
}

displayQuestion();
