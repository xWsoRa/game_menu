const questions = [
    { 
      question: "In the words of Landau, dictionary writing is “a craft, a way of doing something useful. It is not a theoretical exercise to increase the sum of human knowledge, but practical work to put together a book that people can understand.” True or False", 
      answer: "true"
    },
    { 
      question: "Stock of words as associated meanings is usually referred as ________", 
      answer: "mental lexycon" 
    },
    { 
      question: "The definitions found in dictionaries are the result of a word-based, or __________approach to meaning.", 
      answer: "semasiological" 
    },
    { 
      question: "The act of defining something by simply pointing at it is an example of  definition by ________", 
      answer: "ostension" 
    },
    { 
      question: "Providing synonyms in either the same language or a different one is definition by _________", 
      answer: "synonymy" 
    },
    { 
      question: "To situate a word in a system of wider relations through with the specificity of the definiendum can be seen as definition by ______________", 
      answer: "typical exemplar" 
    },
    { 
      question: "The metalanguage word proposed as the definition is ________", 
      answer: "definiens" 
    },
    { 
      question: "The object language word for which a definition is required is________", 
      answer: "definiendum" 
    },
    { 
      question: "If a definiens can be substituted for a definiendum, ex in the sentence in which the terms occur remains true, then the definiendum and the definiens are considered identical in meaning. This is called the principle of ________", 
      answer: "identity under substitution" 
    },
    { 
      question: "The definition which is in some sense activated during language use, only if concepts correspond to _________, and word meanings can be captured in_____.", 
      answer: "word meanings, definitions"
    }
  ];
  
  let score = 0;
  let questionCounter = 0;
  let usedQuestions = [];
  
  const form = document.getElementById("form");
  const questionElement = document.getElementById("question");
  const answerElement = document.getElementById("answer");
  const resultElement = document.getElementById("result");
  const nextButton = document.getElementById("next-btn");
  const scoreElement = document.getElementById("score");
  
  function getQuestion() {
    scoreElement.innerHTML = `Your score is: ${score}/${questionCounter}`;
    if (questionCounter >= 10) {
      endGame();
      return;
    }
  
    const index = Math.floor(Math.random() * questions.length);
    if (usedQuestions.includes(index)) {
      getQuestion();
      return;
    }
    usedQuestions.push(index);
    
    const questionObj = questions[index];
    questionElement.innerHTML = questionObj.question;
    answerElement.value = "";
    resultElement.innerHTML = "";
    nextButton.disabled = true;
  }
  
  function checkAnswer(event) {
    event.preventDefault();
  
    const answer = answerElement.value.trim().toLowerCase();
    const questionObj = questions[usedQuestions[usedQuestions.length - 1]];
    
    if (answer === questionObj.answer) {
      resultElement.innerHTML = "Correct!";
      score++;
      questionCounter++;
    } else {
      resultElement.innerHTML = "Incorrect! The correct answer is " + questionObj.answer;
      questionCounter++;
    }
  
    nextButton.disabled = false;
  }
  
  function endGame() {
    form.style.display = "none";
    scoreElement.innerHTML = `Your final score is: ${score}/10`;
    scoreElement.style.display = "block";
  }
  
  form.addEventListener("submit", checkAnswer);
  nextButton.addEventListener("click", getQuestion);
  
  getQuestion();
  