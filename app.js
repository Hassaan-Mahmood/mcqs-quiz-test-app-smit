// ===============================
// Questions
// ===============================

var questions = [
    {
        question: "What is the capital city of Pakistan?",
        options: [
            "Karachi",
            "Lahore",
            "Islamabad",
            "Peshawar"
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: [
            "Earth",
            "Mars",
            "Jupiter",
            "Venus"
        ]
    },
    {
        question: "How many continents are there in the world?",
        options: [
            "5",
            "6",
            "7",
            "8"
        ]
    },
    {
        question: "Which is the largest ocean on Earth?",
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Pacific Ocean",
            "Arctic Ocean"
        ]
    },
    {
        question: "Who is known as the Father of Computers?",
        options: [
            "Charles Babbage",
            "Albert Einstein",
            "Isaac Newton",
            "Thomas Edison"
        ]
    }
];

// ===============================
// HTML Elements
// ===============================

var question = document.getElementById("question");
var options = document.getElementsByClassName("option");
var nextBtn = document.getElementById("nextBtn");
var timer = document.getElementById("timer");
var themeBtn = document.getElementById("themeBtn");

// ===============================
// Variables
// ===============================

var currentQuestion = 0;
var time = 15;
var interval;

// ===============================
// Load Question
// ===============================

function loadQuestion() {

    question.innerHTML = questions[currentQuestion].question;

    for (var i = 0; i < options.length; i++) {

        options[i].innerHTML = questions[currentQuestion].options[i];

        options[i].classList.remove("selected");
    }

    startTimer();

}

// ===============================
// Select Option
// ===============================

for (var i = 0; i < options.length; i++) {

    options[i].addEventListener("click", selectOption);

}

function selectOption() {

    for (var i = 0; i < options.length; i++) {

        options[i].classList.remove("selected");

    }

    this.classList.add("selected");

}

// ===============================
// Timer
// ===============================

function startTimer() {

    clearInterval(interval);

    time = 15;

    timer.innerHTML = "00:15";

    interval = setInterval(function () {

        time--;

        if (time < 10) {

            timer.innerHTML = "00:0" + time;

        }
        else {

            timer.innerHTML = "00:" + time;

        }

        if (time == 0) {

            clearInterval(interval);

            nextQuestion();

        }

    }, 1000);

}

// ===============================
// Next Question
// ===============================

nextBtn.addEventListener("click", nextQuestion);

function nextQuestion() {

    clearInterval(interval);

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    }
    else {

        finishQuiz();

    }

}

// ===============================
// Finish Quiz
// ===============================

function finishQuiz() {

    question.innerHTML = "🎉 Quiz Completed!";

    timer.innerHTML = "Finished";

    document.querySelector(".options").style.display = "none";

    nextBtn.style.display = "none";

}

// ===============================
// Theme Change
// ===============================

themeBtn.addEventListener("click", changeTheme);

function changeTheme() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.innerHTML = "☀️";

    }
    else {

        themeBtn.innerHTML = "🌙";

    }

}

// ===============================
// Start Quiz
// ===============================

loadQuestion();