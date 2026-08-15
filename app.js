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

  // {
  //   question: "Which material is a good conductor of electricity?",
  //   options: ["Rubber", "Plastic", "Copper", "Wood"],
  //   answer: "Copper",
  // },

  // {
  //   question: "Which device converts electrical energy into light energy?",
  //   options: ["Bulb", "Motor", "Generator", "Battery"],
  //   answer: "Bulb",
  // },

  // {
  //   question: "What happens to the speed of an object when it accelerates?",
  //   options: [
  //     "It always decreases",
  //     "It changes",
  //     "It becomes zero",
  //     "It never changes",
  //   ],
  //   answer: "It changes",
  // },

  // {
  //   question:
  //     "Which mirror is commonly used as a rear-view mirror in vehicles?",
  //   options: [
  //     "Plane mirror",
  //     "Concave mirror",
  //     "Convex mirror",
  //     "None of these",
  //   ],
  //   answer: "Convex mirror",
  // },

  // {
  //   question:
  //     "Which simple machine is commonly used to draw water from a well?",
  //   options: ["Pulley", "Lever", "Wedge", "Screw"],
  //   answer: "Pulley",
  // },
];

var questionCount = document.getElementById("questionCount");
var question = document.getElementById("question");
var options = document.getElementById("options");
var timer = document.getElementById("timer");
var count = 0;
var isSelected = false;
var selectedText = "";
var passCount = 0;
var failCount = 0;
var timeLeft = 0;
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
  clearInterval(interval);
  alert("Time up try next time");
  localStorage.setItem("correctAnswers", passCount);
  localStorage.setItem("wrongAnswers", failCount);
  localStorage.setItem("totalQuestions", allQuestions.length);
  localStorage.setItem("percentage", percentage);
  window.location.replace("fail.html");
}

function startTimer() {
  updateTimer();
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) {
      alert("Time Up");
    }
  }, 1000);
}

function updateTimer() {
  var minutes = Math.floor(timeLeft / 60);
  var seconds = Math.floor(timeLeft);
}

quiz();
startTimer()

// =====================================================
// TIME UP
// =====================================================

function timeUp() {
  // Stop timer
  clearInterval(timerInterval);

  // Show required alert
  alert("Time up try next time");

  // Save current result
  localStorage.setItem("correctAnswers", passCount);

  localStorage.setItem("wrongAnswers", failCount);

  localStorage.setItem("percentage", (passCount / allQuestions.length) * 100);

  localStorage.setItem("totalQuestions", allQuestions.length);

  // Time is finished before completing test,
  // therefore show FAIL page.
  window.location.href = "fail.html";
}

// =====================================================
// START TIMER
// =====================================================

function startTimer() {
  // Show initial time
  updateTimer();

  // Run every 1 second
  timerInterval = setInterval(function () {
    timeLeft--;
    updateTimer();
    // When timer reaches zero
    if (timeLeft <= 0) {
      timeUp();
    }
  }, 1000);
}

function updateTimer() {}
// =====================================================
// UPDATE TIMER DISPLAY
// =====================================================

// function updateTimer() {
//   // Calculate minutes
//   var minutes = Math.floor(timeLeft / 60);

//   // Calculate seconds
//   var seconds = timeLeft % 60;

//   // Add leading zero
//   if (minutes < 10) {
//     minutes = "0" + minutes;
//   } else {
//     minutes = minutes;
//   }
//   if (seconds < 10) {
//     seconds = "0" + seconds;
//   } else {
//     seconds = seconds;
//   }
//   // Show timer
//   timer.innerHTML = minutes + ":" + seconds;
// }
// updateTimer();
// =====================================================
// THEME CHANGE
// =====================================================

// themeBtn.onclick = function () {
//   // Toggle dark class on body
//   document.body.classList.toggle("dark");

//   // Change button icon
//   if (document.body.classList.contains("dark")) {
//     themeBtn.innerHTML = "☀️";
//   } else {
//     themeBtn.innerHTML = "🌙";
//   }
// };

// =====================================================
// START QUIZ
// =====================================================

// Load first question
// quiz();

// Start 1-minute timer
// startTimer();

// var timeLeft = 10;
// var interval;

// function time() {
//   interval = setInterval(function () {
//     timeLeft--;
//     startTimer();
//   }, 1000);
// }
// time();

// function startTimer() {

//   if (timeLeft <= 0) {
//     clearInterval(interval);
//     alert("Time up");
//   } else {
//     console.log(timeLeft);
//     timer.innerHTML = timeLeft;
//   }
// }
