var allQuestions = [
  {
    question: "What is the SI unit of force?",
    options: ["Joule", "Newton", "Watt", "Pascal"],
    answer: "Newton",
  },

  {
    question: "What is the SI unit of mass?",
    options: ["Gram", "Kilogram", "Newton", "Pound"],
    answer: "Kilogram",
  },

  {
    question: "What force pulls objects toward the Earth?",
    options: ["Friction", "Magnetic force", "Gravity", "Electric force"],
    answer: "Gravity",
  },

  {
    question:
      "What is the approximate value of acceleration due to gravity on Earth?",
    options: ["5.8 m/s²", "9.8 m/s²", "15 m/s²", "20 m/s²"],
    answer: "9.8 m/s²",
  },

  {
    question: "Which instrument is used to measure temperature?",
    options: ["Barometer", "Thermometer", "Ammeter", "Voltmeter"],
    answer: "Thermometer",
  },

  {
    question: "Which instrument is used to measure electric current?",
    options: ["Voltmeter", "Ammeter", "Barometer", "Thermometer"],
    answer: "Ammeter",
  },

  {
    question: "What is the SI unit of energy?",
    options: ["Newton", "Watt", "Joule", "Pascal"],
    answer: "Joule",
  },

  {
    question: "What is the SI unit of power?",
    options: ["Joule", "Watt", "Newton", "Volt"],
    answer: "Watt",
  },

  {
    question: "Which type of energy does a moving object have?",
    options: [
      "Potential energy",
      "Chemical energy",
      "Kinetic energy",
      "Nuclear energy",
    ],
    answer: "Kinetic energy",
  },

  {
    question:
      "Which type of energy is stored in an object due to its position?",
    options: [
      "Kinetic energy",
      "Potential energy",
      "Sound energy",
      "Light energy",
    ],
    answer: "Potential energy",
  },

  // {
  //   question: "What is the speed of light in a vacuum approximately?",
  //   options: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s"],
  //   answer: "3 × 10⁸ m/s",
  // },

  // {
  //   question: "Which form of energy is produced by a vibrating object?",
  //   options: ["Light", "Sound", "Chemical", "Nuclear"],
  //   answer: "Sound",
  // },

  // {
  //   question: "Which force opposes the motion of an object?",
  //   options: ["Gravity", "Friction", "Magnetic force", "Buoyant force"],
  //   answer: "Friction",
  // },

  // {
  //   question: "What is the SI unit of electric current?",
  //   options: ["Volt", "Ohm", "Ampere", "Watt"],
  //   answer: "Ampere",
  // },

  // {
  //   question: "What is the SI unit of voltage?",
  //   options: ["Ampere", "Volt", "Ohm", "Watt"],
  //   answer: "Volt",
  // },
];

var questionCount = document.getElementById("questionCount");
var question = document.getElementById("question");
var options = document.getElementById("options");
var timer = document.getElementById("timer");
var themeBtn = document.getElementById("themeBtn");
var body = document.querySelector("body");

var count = 0;
var isSelected = false;
var selectedText = "";
var passCount = 0;
var failCount = 0;
// var timeLeft = 60 + 60;
var timeLeft = 30;
var interval;

function quiz() {
  if (count < allQuestions.length) {
    options.innerHTML = "";
    questionCount.innerHTML = `Question ${count + 1}/${allQuestions.length}`;
    question.innerHTML = allQuestions[count].question;
    var obj = allQuestions[count].options;
    for (let i = 0; i < obj.length; i++) {
      var item = obj[i];
      if (selectedText === item) {
        options.innerHTML += `<button class="option selected" onclick="select('${item}')">${item}</button>`;
        selectedText = "";
      } else {
        options.innerHTML += `<button class="option" onclick="select('${item}')">${item}</button>`;
      }
    }
  } else {
    finishQuiz();
  }
}

function select(e) {
  isSelected = true;
  selectedText = e;

  var answers = allQuestions[count].answer;
  if (e === answers) {
    passCount++;
  } else {
    failCount++;
  }

  quiz();
}

function next() {
  if (isSelected === true) {
    count++;
  } else {
    alert("Please select an option");
  }
  isSelected = false;
  quiz();
}

function finishQuiz() {
  var percentage = Math.round((passCount / allQuestions.length) * 100);

  localStorage.setItem("correctAnswers", passCount);
  localStorage.setItem("wrongAnswers", failCount);
  localStorage.setItem("totalQuestions", allQuestions.length);
  localStorage.setItem("percentage", percentage);

  if (percentage >= 70) {
    window.location.replace("pass.html");
  } else {
    window.location.replace("fail.html");
  }
}

function timeUp() {
  var percentage = Math.round((passCount / allQuestions.length) * 100);

  clearInterval(interval);
  localStorage.setItem("correctAnswers", passCount);
  localStorage.setItem("wrongAnswers", failCount);
  localStorage.setItem("totalQuestions", allQuestions.length);
  localStorage.setItem("percentage", percentage);
  if (percentage >= 70) {
    alert("Time Up");
    window.location.replace("pass.html");
  } else {
    alert("Time up try next time");
    window.location.replace("fail.html");
  }
  console.log(percentage);
}

function startTimer() {
  updateTimer();
  interval = setInterval(function () {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) {
      timeUp();
    }
  }, 1000);
}

function updateTimer() {
  var minutes = Math.floor(timeLeft / 60);
  var seconds = timeLeft % 60;

  if (minutes < 10) {
    minutes = "0" + minutes;
  } else {
    minutes = minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  } else {
    seconds = seconds;
  }

  timer.innerHTML = minutes + ":" + seconds;
}
updateTimer();
startTimer();
quiz();

themeBtn.onclick = function () {
  body.classList.toggle("dark");
  if (body.className === "dark") {
    themeBtn.innerHTML = "☀️";
  } else {
    themeBtn.innerHTML = "🌙";
  }
};
