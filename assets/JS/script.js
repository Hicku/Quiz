// Global variables//
const startQuiz = document.querySelector(".button");
const article1 = document.querySelector(".article1");
const buttonDiv = document.querySelector(".button-div");
const body1 = document.querySelector(".body1");
const head1 = document.querySelector(".head-div");
const button = document.querySelector("button");
let timeLeft = 100;
let currentQuestionIndex = 0;
let score = 0;

// Questions and answers
const questions = [
  {
    question: "Arrays in JavaScript are defined by which of the following statements?",
    answers: ["It is an ordered list of values", "It is an ordered list of objects", " It is an ordered list of string", " It is an ordered list of functions"],
    correctAnswer: "It is an ordered list of values"
  },
  {
    question: "Which of the following is correct about JavaScript?",
    answers: ["JavaScript is an Object-Based language", "JavaScript is Assembly-language", "JavaScript is an Object-Oriented language", "JavaScript is a High-level language"],
    correctAnswer: "JavaScript is an Object-Based language"
  },
  {
    question: "Which of the following scoping type does JavaScript use?",
    answers: ["Sequential", "Segmental", "Lexical", "Literal"],
    correctAnswer: "Lexical"
  },
  {
    question: "Which of the following is not an error in JavaScript?",
    answers: ["Missing of Bracket", "Division by zero", "Syntax error", "Missing of semicolons"],
    correctAnswer: "division by zero"
  },
  {
    question: "Which of the following objects is the main entry point to all client-side JavaScript features and APIs?",
    answers: ["Position", "Window", "Standard", "Location"],
    correctAnswer: "window"
  },
  {
    question: "Which of the following can be used to call a JavaScript Code Snippet?",
    answers: ["Function/Method", "Preprocessor", "Triggering Event", "RMI"],
    correctAnswer: "Function/Method"
  },
  {
    question: "Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine?",
    answers: ["will work perfectly well on a Windows Machine", "will be displayed as JavaScript text on the browser", "will throw errors and exceptions", "must be restricted to a Unix Machine only"],
    correctAnswer: "will work perfectly well on a Windows Machine"
  },
  {
    question: "Which of the following is the property that is triggered in response to JS errors?",
    answers: ["onclick", "onerror", "onmessage", "onexception"],
    correctAnswer: "onerror"
  },
  {
    question: "Which of the following is not a framework?",
    answers: ["JavaScript .NET", "JavaScript", "Cocoa JS", "jQuery"],
    correctAnswer: "JavaScript"
  },
  {
    question: "Which of the following is not javascript data types?",
    answers: ["Null type", "Undefined type", "Number type", "All"],
    correctAnswer: "All"
  },
  
];


// Event(click) to start quiz and countdown/change style/remove

startQuiz.addEventListener("click", function() {
    article1.innerHTML = "";
    body1.classList.add("body2");
    body1.classList.remove("body1");
    head1.classList.add("head-div2");
    head1.classList.remove("head-div");

    showQuestion();
  
// timer
const timerE = document.createElement("p");
button.remove();
timerE.innerHTML = `Timer: ${timeLeft}`;
timerE.style.fontSize = "30px";
timerE.style.display = "flex";
timerE.style.justifyContent = "center";
article1.appendChild(timerE);

const countdown = setInterval(function() {
timeLeft--;
timerE.innerHTML = `Timer: ${timeLeft}`;
if (timeLeft <= 0 || currentQuestionIndex >= questions.length) {
  clearInterval(countdown);
  showQuestion();
}
}, 1000);


});


// Quiz

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  const questionContainer = document.createElement("div");
  questionContainer.classList.add("question-container");

  const questionElement = document.createElement("p");
  questionElement.innerHTML = currentQuestion.question;
  questionElement.classList.add("questionDiv");

  const answersElement = document.createElement("div");
  answersElement.classList.add("answerDiv");

  currentQuestion.answers.forEach(function(answer) {
    const answerButton = document.createElement("button");
    answerButton.classList.add("quizButtons");
    answerButton.innerHTML = answer;
    answerButton.addEventListener("click", function() {
      if (answer === currentQuestion.correctAnswer) {
        score++;
      }

      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        quizEnd ();
      }
    });
    answersElement.appendChild(answerButton);
  });

  questionContainer.appendChild(questionElement);
  questionContainer.appendChild(answersElement);

  buttonDiv.innerHTML = "";
  buttonDiv.appendChild(questionContainer);
}

function quizEnd () {
    buttonDiv.innerHTML = "";
    const endButton = document.createElement("button");
    endButton.classList.add("endButton");
    endButton.textContent = ("See your score!");
    buttonDiv.appendChild(endButton);

    endButton.addEventListener("click", function() {
      buttonDiv.innerHTML = "";
      const scoreB = document.createElement("div");
      scoreB.classList.add("scoreB");
    
      const scoreBox = document.createElement("div");
      scoreBox.classList.add("scoreBox");
      scoreBox.textContent = "Score = []"
    
      const intCon = document.createElement("div");
      intCon.classList.add("intCon1");
    
      // create a form element
      const form = document.createElement("form");
      form.addEventListener("submit", function(event) {
        event.preventDefault();
        const initials = inputField.value;
        console.log(initials); // replace this with your code to store the initials
      });
    
      // create an input field for the initials
      const inputField = document.createElement("input");
      inputField.setAttribute("type", "text");
      inputField.setAttribute("placeholder", "Enter your initials");
    
      // create a submit button for the form
      const submitButton = document.createElement("button");
      submitButton.setAttribute("type", "submit");
      submitButton.textContent = "Submit";
    
      // append the input field and submit button to the form
      form.appendChild(inputField);
      form.appendChild(submitButton);
    
      scoreB.appendChild(scoreBox);
      scoreB.appendChild(intCon);
      scoreB.appendChild(form); // append the form to the parent container
      buttonDiv.appendChild(scoreB);
    });
// Quiz style 

  }