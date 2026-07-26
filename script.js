// All DOM Elements here (Used  Ai help)
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const quizQuestions = [
  {
    question: "What is the capital of Germany?",
    answers: [
      { text: "Karachi", correct: false },
      { text: "Berlin", correct: true },
      { text: "Dusseldorf", correct: false },
      { text: "Hamburg", correct: false },
    ],
  },
  {
    question: "How many states are there in Germany?",
    answers: [
      { text: "16", correct: true },
      { text: "17", correct: false },
      { text: "18", correct: false },
      { text: "19", correct: false },
    ],
  },
  {
    question: "Which country has a border with Germany?",
    answers: [
      { text: "Italy", correct: false },
      { text: "Spain", correct: false },
      { text: "Poland", correct: true },
      { text: "Scotland", correct: false },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "In what year did the Berlin Wall fall??",
    answers: [
      { text: "1988", correct: false },
      { text: "1990", correct: false },
      { text: "1989", correct: true },
      { text: "1991", correct: false },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  console.log("Quiz started");
}
function restartQuiz() {
  console.log("Quiz restarted");
}
