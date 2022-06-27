const quizData = [
    {
        //1
        question: "Un'eclissi lunare si dice parziale quando la Luna",
        a: "attraversa il cono di penombra.",
        b: "percorre tutta la parte in ombra.",
        c: "non si trova esattamente nella posizione nodale.",
        d: "attraversa il cono d'ombra.",
        correct: "c",
    },
    {
        //2
        question: "I colori di un'aurora polare dipendono",
        a: "dai gas presenti nell'atmosfera e dal loro stato elettrico.",
        b: "dallo stato elettrico dei gas presenti nell'atmosfera e dall'energia delle particelle che li colpiscono.",
        c: "dall'energia delle particelle che colpiscono i gas presenti nell'atmosfera.",
        d: "dai gas presenti nell'atmosfera, dal loro stato elettrico e dall'energia delle particelle che li colpiscono.",
        correct: "d",
    },
    {
        //3
        question: "Un'eclissi solare si verifica quando la Luna è in opposizione col Sole.",
        a: "Vero",
        b: "Falso",
        c: "Vero solo in alcuni casi",
        d: "Non esistono le eclissi di luna",
        correct: "b",
    },
    {
        //4
        question: "Il fenomeno del Sole di mezzanotte ha una durata di ",
        a: "circa 24 o 48 ore presso il polo e 6 mesi presso il circolo polare.",
        b: "circa 6 mesi presso il polo e 24 o 48 presso il circolo polare.",
        c: "circa 6 giorni presso il polo e 24 o 48 ore presso il circolo polare.",
        d: "circa 6 mesi presso il circolo polare è 24 ore presso il polo.",
        correct: "b",
    },
    {
        //5
        question: "L'effetto lente gravitazionale in un anello di Einstein può essere causato da un buco nero.",
        a: "Vero",
        b: "Falso",
        c: "Vero solo in alcuni casi",
        d: "L'effetto non è in realtà causato dalla gravità",
        correct: "a",
    },
    {
        //6
        question: "La luminosità dell'esplosione di una nova rossa luminosa è",
        a: "minore di quella di una nova e maggiore di quella di una supernova.",
        b: "uguale a quella di una supernova.",
        c: "maggiore di quella di una nova e minore di quella di una supernova.",
        d: "minore di quella di una supernova.",
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

           <button class="button button1" onclick="location.reload()">Reload</button>
           `
        }
    }
})