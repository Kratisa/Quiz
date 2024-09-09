const quizData = [
    {
        question: " Which phenomenon happens in a repeating cycle known as a saros?",
        a: "Lunar Eclipse",
        b: "Solar Eclipse",
        c: "Both A & B",
        d: "None",
        correct: "a"
    },
    {
        question: "Which is the hottest planet in the solar system?",
        a: "Mercury",
        b: "Venus",
        c: "Mars",
        d: "Earth",
        correct: "b"
    },
    {
        question: " In which year were the spacesuits built that NASA uses?",
        a: "1994",
        b: "1989",
        c: "1974",
        d: "2004",
        correct: "c"
    },
    {
        question: "The sun is made up of mostly which gas?",
        a: "Hydrogen",
        b: "Oxygen",
        c: "Helium",
        d: "Neon",
        correct: "a"
    },
    {
        question: "How many planets have rings?",
        a: "2",
        b: "1",
        c: "0",
        d: "4",
        correct: "d"
    },
    {
        question: " Which is the smallest planet in our solar system?",
        a: "Earth",
        b: "Mercury",
        c: "Venus",
        d: "Neptune",
        correct: "b"
    },
    {
        question: "In which year did the first man land on the moon?",
        a: "1990",
        b: "1969",
        c: "1950",
        d: "1999",
        correct: "b"
    },
    {
        question: "Sunsets on Mars appear in what colour?",
        a: "Red",
        b: "Yellow",
        c: "Green",
        d: "Blue",
        correct: "d"
    },
    {
        question: "Neptune’s days are how many hours long",
        a: "16",
        b: "6",
        c: "26",
        d: "36",
        correct: "a"
    },
    {
        question: "Saturn’s rings are made from what?",
        a: "Sand",
        b: "Mud",
        c: "Water",
        d: "Ice",
        correct: "d"
    }
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>`;
        }
    }
});
