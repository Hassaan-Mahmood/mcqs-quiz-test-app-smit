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

var qsCount = document.getElementById("questionCount");
var question = document.getElementById("question");
var choices = document.getElementById("choices");
var nextBtn = document.getElementById("nextBtn");
var count = 0;
var isSelected = false;
var oneOption = true;
var passCount = 0;
var failCount = 0;

function quiz() {
  choices.innerHTML = ``;
  if (count < allQuestions.length) {
    qsCount.innerHTML = `Questions ${count + 1}/${allQuestions.length}`;
    question.innerHTML = allQuestions[count].question;
  } else {
    alert("Quiz has been completed");
  }

  var obj = allQuestions[count].options;
  for (let i = 0; i < obj.length; i++) {
    var item = obj[i];
    choices.innerHTML += `<button class="option" onclick="select('${item}',this)">${item}</button>`;
  }
}

function next() {
  if (isSelected === true) {
    count++;
    quiz();
  } else {
    alert("Please select an option!");
  }

  isSelected = false;
}

function select(index, tag) {
  isSelected = true;
  var objAnswer = allQuestions[count].answer;
  if (index === objAnswer) {
    passCount++;
  } else {
    failCount++;
  }
  console.log(passCount);
  console.log(failCount);

  quiz();

  tag.style.backgroundColor = "#3b82f6";
  tag.style.color = "#fff";
}

quiz();
