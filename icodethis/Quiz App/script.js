const homeCard = document.getElementById("homeCard");
const startQuizBtn = document.getElementById("startQuiz");
const quizApp = document.getElementById("quizApp");
const homeButton = document.getElementById("home-button");

function showQuizApp() {
  document.getElementById("homeCard").style.display = "none";
  quizApp.style.display = "block";
}

startQuizBtn.addEventListener("click", showQuizApp);
