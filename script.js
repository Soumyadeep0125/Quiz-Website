const quizDB = [
    {

        question:"Q1:Javascript is an _______ language?",
        a:"Object-Oriented",
        b:"Object-Based",
        c:"Procedural",
        d:"None of the above",
        ans:"ans1"
    },
    {

        question:"Q2:Which of the following keywords is used to define a variable in Javascript?",
        a:"var",
        b:"let",
        c:"Both a and b",
        d:"None of the above",
        ans:"ans3"
    },
    {

        question:"Q3:The correct sequence of HTML tags for starting a webpage is -",
        a:"Head, Title, HTML, body",
        b:"Head, Title, HTML, body",
        c:"HTML, Head, Title, Body",
        d:"Body, Head, Title, HTML",
        ans:"ans3"
    },
    {

        question:"Q4:Which of the following tag is used to insert a line-break in HTML?",
        a:"<     br   >",
        b:"<     a      >",
        c:"<    pre       >",
        d:"<     b      >",
        ans:"ans1"
    },
    {

        question:"Q5: <    input       > is -",
        a:"a format tag.",
        b:"a empty tag.",
        c:"All of the above",
        d:"None of the above",
        ans:"ans2"
    }
];
const question = document.querySelector('.qus');
const option1 = document.querySelector('#op1');
const option2 = document.querySelector('#op2');
const option3 = document.querySelector('#op3');
const option4 = document.querySelector('#op4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerHTML = questionList.question;
  option1.innerHTML = questionList.a;
  option2.innerHTML = questionList.b;
  option3.innerHTML = questionList.c;
  option4.innerHTML = questionList.d;
};

loadQuestion();

const getSelectedAnswer = () => {
  let selectedAnswer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      selectedAnswer = curAnsElem.id;
    }
  });
  return selectedAnswer;
};

const deselectAll = () => {
  answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};

submit.addEventListener('click', () => {
  const selectedAnswer = getSelectedAnswer();
  console.log(selectedAnswer);

  if (selectedAnswer == quizDB[questionCount].ans) {
    score++;
  }
  questionCount++;
  deselectAll();
  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showscore.innerHTML = `<h3>You scored ${score}/${quizDB.length} ✌️</h3><button class="btn" onclick="location.reload()">Play Again</button>`;
    showscore.classList.remove('scorearea');
  }
});
