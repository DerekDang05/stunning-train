// Set questions for quiz in array
const questions = [
    {
        question: "How can a datatype be declared to be a constant type?",
        choices: ["const", "var", "let", "constant"],
        answer: "const"
    },
    {
        question: "Javascript is a(n) ______ language?",
        choices: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
        answer: "Object-Oriented"
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        choices: ["var", "let", "Both A and B", "None of the above"],
        answer: "Both A and B"
    },
    {
        question: "Which function is used to serialize an object into a JSON string in Javascript?",
        choices: ["stringify()", "parse()", "convert()", "None of the above"],
        answer: "stringify()"
    },
    {
        question: "Which of the following is not a Javascript framework",
        choices: ["Node", "Vue", "React", "Cassandra"],
        answer: "Cassandra"
    },
];

// Query Selectors to grab html elements
var timer = document.getElementById("start-btn");
var countdownText = document.querySelector("#timer");

// Sets variables for functions
let score = 0;
let duration = 75;
let test = 0;

// Click event listener for timer
timer.addEventListener("click", function () {
    test = setInterval(function() {
        if (duration > 1) {
            countdownText.textContent = "Time: " + duration;
            duration--;
        }
        if (duration === 0) {
            clearInterval(duration);
            countdownText.textContent = "Time is up"
        }
    }, 1000);
});


var displayQuestions = document.getElementById("questions")