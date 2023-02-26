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
let highScore = [];


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

startQuiz.addEventListener("click", function () {
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

  const countdown = setInterval(function () {
    timeLeft--;
    timerE.innerHTML = `Timer: ${timeLeft}`;
    if (timeLeft <= 0 || currentQuestionIndex >= questions.length) {
      clearInterval(countdown);
      showQuestion();
      setTimeout(function () {
        location.reload();
      })
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

  currentQuestion.answers.forEach(function (answer) {
    const answerButton = document.createElement("button");
    answerButton.classList.add("quizButtons");
    answerButton.innerHTML = answer;
    answerButton.addEventListener("click", function () {
      if (answer === currentQuestion.correctAnswer) {
        score++;

      } else {
        timeLeft -= 10;
      }

      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        quizEnd();
      }
    });
    answersElement.appendChild(answerButton);
  });

  questionContainer.appendChild(questionElement);
  questionContainer.appendChild(answersElement);

  buttonDiv.innerHTML = "";
  buttonDiv.appendChild(questionContainer);
}


// Quiz ends

function quizEnd() {
  buttonDiv.innerHTML = "";
  const endButton = document.createElement("button");
  endButton.classList.add("endButton");
  endButton.textContent = ("See your score!");
  buttonDiv.appendChild(endButton);

  endButton.addEventListener("click", function () {
    buttonDiv.innerHTML = "";
    const scoreB = document.createElement("div");
    scoreB.classList.add("scoreB");

    const scoreBox = document.createElement("div");
    scoreBox.classList.add("scoreBox");
    scoreBox.textContent = `Score = ${score}`;

    const storedScores = JSON.parse(localStorage.getItem("scores")) || [];
    storedScores.push(score);
    localStorage.setItem("scores", JSON.stringify(storedScores));

    const intCon = document.createElement("div");
    intCon.classList.add("intCon1");

    // Initials form
    const form = document.createElement("form");
    form.addEventListener("submit", function (event) {
      article1.innerHTML = "Leader Board";
      article1.classList.add("leaderText");
      event.preventDefault();
      const initialsProvide = inputField.value;
      if (!initialsProvide) {
        alert("Please enter your initials!");
        return;
      }
      const initials = inputField.value;
      const initialsAndScores = JSON.parse(localStorage.getItem("initialsAndScores")) || [];
      initialsAndScores.push({ initials, score });
      localStorage.setItem("initialsAndScores", JSON.stringify(initialsAndScores));

      scoreBox.innerHTML = "";
      intCon.innerHTML = "";
      scoreBox.classList.add("scoreBox2");
      intCon.classList.add("intCon2");

      const highScoreTable = document.createElement("table");
      const headerRow = document.createElement("tr");
      const initialsHeader = document.createElement("th");
      initialsHeader.textContent = "Initials";
      const scoreHeader = document.createElement("th");
      scoreHeader.textContent = "Score";


      highScoreTable.classList.add("tableH");
      headerRow.classList.add("tableH");
      initialsHeader.classList.add("tableH", "tHeaders");
      scoreHeader.classList.add("tableH", "tHeaders");


      headerRow.appendChild(initialsHeader);
      headerRow.appendChild(scoreHeader);
      highScoreTable.appendChild(headerRow);

      const topScores = initialsAndScores.sort((a, b) => b.score - a.score).slice(0, 10);

      for (let i = 0; i < topScores.length; i++) {
        const row = document.createElement("tr");
        const initialsCell = document.createElement("td");
        const scoreCell = document.createElement("td");

        initialsCell.textContent = topScores[i].initials;
        scoreCell.textContent = topScores[i].score;

        row.appendChild(initialsCell);
        row.appendChild(scoreCell);
        highScoreTable.appendChild(row);
      }

      scoreB.appendChild(highScoreTable);

      const homeButton = document.createElement("button");

      homeButton.classList.add("homeButt");
      intCon.appendChild(homeButton);
      homeButton.textContent = "Home";
      homeButton.addEventListener("click", function () {
        location.reload();
      });


    });


    const inputField = document.createElement("input");
    inputField.setAttribute("type", "text");
    inputField.setAttribute("placeholder", "Enter your initials");

    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Submit";

    form.appendChild(inputField);
    form.appendChild(submitButton);
    intCon.appendChild(form);

    scoreB.appendChild(scoreBox);
    scoreB.appendChild(intCon);

    buttonDiv.appendChild(scoreB);
  });
}

  // Home screen


