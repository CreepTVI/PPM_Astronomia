const quizData = [
    {
        //1
        question: "I buchi bianchi in cosa differiscono dai buchi neri?",
        a: "Per il colore",
        b: "Per il comportamento opposto",
        c: "Per la dimensione",
        d: "Sono la stessa cosa",
        correct: "b",
    },
    {
        //2
        question: "Quale dovrebbe essere secondo la teoria la conseguenza paradossale dell'esplosione dell'orizzonte degli eventi di un buco bianco?",
        a: "La nascita di una stella",
        b: "La formazione di due buchi neri",
        c: "L'accelerazione del tempo",
        d: "La creazione di una nuova dimensione",
        correct: "a",
    },
    {
        //3
        question: "Secondo una teoria i buchi bianchi si originano dalla morte di un buco nero",
        a: "Vero",
        b: "Falso",
        c: "Non sono originati dalla morte dei buchi neri ma da quella dei pianeti",
        d: "Vero ma solo in alcuni casi",
        correct: "a",
    },
    {
        //4
        question: "Per via della loro emissione di materia, quale fenomeno misterioso si pensa fosse un buco bianco?",
        a: "La via Lattea",
        b: "Le supernove",
        c: "Il Big Bang",
        d: "Le eclissi",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
    let x = Math.floor(Math.random() * 100);
    if (x < 25) {
        questionEl.innerText = currentQuizData.question
        a_text.innerText = currentQuizData.a
        b_text.innerText = currentQuizData.b
        c_text.innerText = currentQuizData.c
        d_text.innerText = currentQuizData.d
        quizData[currentQuiz].correct = "a"
    }

    if (x >= 50 && x < 75) {
        questionEl.innerText = currentQuizData.question
        a_text.innerText = currentQuizData.b
        b_text.innerText = currentQuizData.a
        c_text.innerText = currentQuizData.d
        d_text.innerText = currentQuizData.c
        quizData[currentQuiz].correct = "b"
    }

    if (x >= 75 && x < 100) {
        questionEl.innerText = currentQuizData.question
        a_text.innerText = currentQuizData.c
        b_text.innerText = currentQuizData.d
        c_text.innerText = currentQuizData.a
        d_text.innerText = currentQuizData.b
        quizData[currentQuiz].correct = "c"
    }


    if (x >= 25 && x < 50) {
        questionEl.innerText = currentQuizData.question
        a_text.innerText = currentQuizData.d
        b_text.innerText = currentQuizData.c
        c_text.innerText = currentQuizData.b
        d_text.innerText = currentQuizData.a
        quizData[currentQuiz].correct = "d"
    }

}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
           <h2>Punteggio ottenuto: ${score}/${quizData.length}</h2>

           <button class="button button1" onclick="location.reload()">Completato</button>
           `
        }
    }
})