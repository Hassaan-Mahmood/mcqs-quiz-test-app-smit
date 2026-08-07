var allQuestions = [
  {
    question: "What is the capital city of Pakistan?",
    options: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
    answer: "Islamabad",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "How many continents are there in the world?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    question: "Which is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "Who is known as the Father of Computers?",
    options: [
      "Charles Babbage",
      "Albert Einstein",
      "Isaac Newton",
      "Thomas Edison",
    ],
    answer: "Charles Babbage",
  },
];

var question = document.getElementById("question");
var choices = document.getElementById("choices");
var questionCount = document.getElementById("questionCount");
var nextBtn = document.getElementById("nextBtn");
var count = 0;

function quiz() {
  if (count < allQuestions.length) {
    choices.innerHTML = "";
    questionCount.innerHTML = `Question ${count + 1} / ${allQuestions.length}`;
    var obj = allQuestions[count].question;
    question.innerHTML = obj;
    for (let i = 0; i < allQuestions.length - 1; i++) {
      var item = allQuestions[count].options[i];
      choices.innerHTML += `<button onclick="userOption(${count})" class="option">${item}</button>`;
    }
  } else {
    // alert("Quiz completed");
    choices.innerHTML = "";
    questionCount.innerHTML = "";
    question.innerHTML = "";
    nextBtn.innerHTML = `Finished`;
  }
}

function next() {
  count++;
  quiz();
}

function userOption(index) {
  var answers = allQuestions[count].options;
  for (let i = 0; i < answers.length; i++) {
    var answer = answers[i];
    if (answer === "Islamabad") {
      console.log("correct");
    }
    // else {
    //   console.log("incorrect");
    // }
    // console.log(answer);
  }
}

quiz();
