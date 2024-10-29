const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue Whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true},
            { text: "Bhutan", correct: false},
            { text: "Nepal", correct: false},
            { text: "Sri Lanka", correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: false},
            { text: "Sahara", correct: false},
            { text: "Antarctica", correct: true},
        ]
    },
    {
        question: "Where does the light of the Moon come from?",
        answers: [
            { text: "The Earth", correct: false},
            { text: "The Sun", correct: true},
            { text: "Saturn", correct: false},
            { text: "Its own gases", correct: false},
        ]
    },
    {
        question: "Day and night is created by the way the Earth moves around the sun. What is this movement called?",
        answers: [
            { text: "Seasons", correct: false},
            { text: "Rotation", correct: true},
            { text: "Phases", correct: false},
            { text: "Solar System", correct: false},
        ]

    },
    {
        question: "Which of the following is NOT a season of the year?",
        answers: [
            { text: "Autumn", correct: false},
            { text: "Summer", correct: false},
            { text: "Snow", correct: true},
            { text: "Winter", correct: false},
        ]

    },
    {
        question: "Which is the largest planet in the solar system?",
        answers: [
            { text: "Atlantic", correct: true},
            { text: "Mediterranean ", correct: false},
            { text: "Southern", correct: false},
            { text: "European", correct: false},
        ]

    },
    {
        question: "We have _______ main oceans?",
        answers: [
            { text: "7", correct: false},
            { text: "3", correct: false},
            { text: "5", correct: true},
            { text: "6", correct: false},
        ]

    },
    {
        question: "Which is the hottest planet in the solar system?",
        answers: [
            { text: "Mercury", correct: false},
            { text: "Earth", correct: false},
            { text: "Mars", correct: false},
            { text: "Venus", correct: true}
        ]

    },
    {
        question: "Cows have ______ stomachs!",
        answers: [
            { text: "four", correct: true},
            { text: "two", correct: false},
            { text: "three", correct: false},
            { text: "one", correct: false},
        ]
    },
    {
        question: "Which animal's eye is bigger than its brain?",
        answers: [
            { text: "owl", correct: false},
            { text: "ostrich", correct: true},
            { text: "bald eagle", correct: false},
            { text: "falcon", correct: false},
        ]
    },
    {
        question: "Chemical formula for water is ?",
        answers: [
            { text: "NaAlO2", correct: false},
            { text: "Al2O3", correct: false},
            { text: "CaSiO3", correct: false},
            { text: "H2O", correct: true},
        ]
    },
    {
        question: "Which is true about the Moon?",
        answers: [
            { text: "It reflects light from the other planets in the solar system", correct: false},
            { text: "It casts its own light on Earth", correct: false},
            { text: "It reflects light from the Sun.", correct: true},
            { text: "It reflects light from comets and asteroids", correct: false},
        ]
    }, 
    {
        question: "What is the strongest bone in the body?",
        answers: [
            { text: "Femur", correct: true},
            { text: "Jawbone", correct: false},
            { text: "Skull", correct: false},
            { text: "Shoulder", correct: false},
        ]
    },
    {
        question: "How many hearts does an octopus have?",
        answers: [
            { text: "2", correct: false},
            { text: "1", correct: false},
            { text: "4", correct: false},
            { text: "3", correct: true}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const startButton = document.getElementById("start-btn");
const app = document.getElementById("app");
const container = document.getElementById("container");

startButton.addEventListener("click", () => {
    app.style.display = "block";
    container.style.display = "none";
});

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}


function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"
}
function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
        }else{
            startQuiz();
        }
});
startQuiz();