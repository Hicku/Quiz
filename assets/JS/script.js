// Global variables//
const startQuiz = document.querySelector(".button");
const article1 = document.querySelector(".article1");
const buttonDiv = document.querySelector(".button-div");
const body1 = document.querySelector(".body1");
const head1 = document.querySelector(".head-div");
const button = document.querySelector("button");
let timeLeft = 100;

// Event(click) to start quiz and countdown/change style

startQuiz.addEventListener("click", function() {
    article1.innerHTML = "";
    body1.classList.add("body2");
    body1.classList.remove("body1");
    head1.classList.add("head-div2");
    head1.classList.remove("head-div");

    const timerE = document.createElement("p");
    timerE.innerHTML = `Timer: ${timeLeft}`;
    timerE.style.fontSize = "30px";
    timerE.style.display = "flex";
    timerE.style.justifyContent = "center";
    article1.appendChild(timerElement);

    const countdown = setInterval(function() {
    timeLeft--;
    timerE.innerHTML = `Timer: ${timeLeft}`;
    if (timeLeft <= 0) {
      clearInterval(countdown);
      
    }
  }, 1000);

    
  });











// timer

