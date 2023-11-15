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
var displayQuestions = document.getElementById("questions")
var createList = document.createElement("li");
const bannerLocation = document.getElementById("footer-location");
const ulLocation = document.querySelector("#scoreList")
// Sets variables for functions
let score = 0;
let duration = 75;
let test = 0;
let questionNumber = 0;
let penalty = 15;

// Click event listener for timer
timer.addEventListener("click", function () {
    test = setInterval(function() {
        if (duration > 1) {
            countdownText.textContent = "Time: " + duration;
            duration--;
        }
        else {
            clearInterval(duration);
            countdownText.textContent = "Time is up";
            finished()
        }
    }, 1000);
    loadQuestions(questionNumber);
});

var displayQuestions = document.getElementById("questions");
var choiceLocation = document.getElementById("choices");

function loadQuestions(questionNumber) {
    // Gets rid of introduction and displays questions
    displayQuestions.innerText = "";
    choiceLocation.innerText = "";
    var questionDisplayed = questions[questionNumber].question;
    displayQuestions.textContent = questionDisplayed;
    var choicesDisplayed = questions[questionNumber].choices;

    for (var i=0; i<4; i++) {
        var createButton = document.createElement("button");
        createButton.classList.add('btns');
        createButton.innerText = choicesDisplayed[i];
        choiceLocation.appendChild(createButton);
        createButton.addEventListener("click", function(event) {
            bannerLocation.innerHTML = ""; 
            answerCheck();

        });
    };
};



// Function that checks whether answer choice is correct
function answerCheck() {
    var banner = document.createElement("footer");
    var buttonText = event.target.textContent;
    if (buttonText === questions[questionNumber].answer) {
        banner.textContent = "Correct!";
        bannerLocation.appendChild(banner);
        score = score + 1;
        questionNumber = questionNumber + 1
    } else {
        banner.textContent = "Wrong!"
        bannerLocation.appendChild(banner);
        duration = duration - penalty;
        questionNumber = questionNumber + 1
    }

    if (questionNumber === 5) {
        finished(); //function that occurs when quiz is over
        duration = ""
    } else {
        loadQuestions(questionNumber)
    }
}

//function that clears questions when quiz is done
const finished = finished2()
let hasRun = false;
function finished2() {
    return function() {
        if (hasRun != true) {
            displayQuestions.innerHTML = "";
            countdownText.innerHTML = "";
            choiceLocation.innerHTML= "";
            bannerLocation.innerHTML = "";
            var h1 = document.createElement("h1")
            h1.textContent = "You scored a  " + score + "/5"
            displayQuestions.appendChild(h1)
        //creates input field and button to grab initials
            var label = document.createElement("label")
            label.textContent = "Enter initials"
        
            var scoresBtn = document.getElementById("scores-btn")
    
            var input = document.createElement("input")
            input.setAttribute("type", "text")
            scoresBtn.appendChild(input)
    
            var submitButton = document.createElement("button")
            submitButton.setAttribute("type", "button");
            submitButton.setAttribute("id", "Submit");
            submitButton.textContent = "Submit";
    
            displayQuestions.appendChild(label)
        // displayQuestions.appendChild(input)
            displayQuestions.appendChild(submitButton)
    
    
        //event listener for submit button for initials
            submitButton.addEventListener("click", function() {
            var initials = input.value

            localStorage.setItem("intialsValue", initials)
            storedScore = localStorage.getItem("intialsValue")  
            console.log(storedScore)
            createList.textContent = storedScore
            console.log(createList)
            ulLocation.appendChild(createList)
            window.location.replace("highscore.html")
        
    })
    hasRun = true;
    } else if (hasRun = true) {
        hasRun = true
    }
    }





}
var clearBtn = document.getElementById("clearBtn")

function clearScores() {
    clearBtn.addEventListener("click", function() {
        localStorage.clear();
    })
}