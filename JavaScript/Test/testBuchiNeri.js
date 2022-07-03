const quizData = [
    {
        //1
        question: "Per cosa si caratterizza un buco nero no rotate?",
        a: "Radiazioni",
        b: "Onde elettromagnetiche",
        c: "Orizzonte degli eventi",
        d: "Singolarità",
        correct: "d",
    },
    {
        //2
        question: "Da cosa vengono descritti i buchi neri?",
        a: "Massa",
        b: "Velocità di rotazione",
        c: "Radiazioni",
        d: "Campo magnetico",
        correct: "a",
    },
    {
        //3
        question: "come viene definito il limite di osservazione dopo il quale non è piu’ possibile osservare nessun evento attorno ad un buco nero?",
        a: "La freccia del tempo",
        b: "Disco di accrescimento",
        c: "Orizzonte degli eventi",
        d: "Inverso temporale",
        correct: "c",
    },
    {
        //4
        question: "Quale fra questi è una caratteristica che classifica i buchi neri?",
        a: "Classificazione per densità",
        b: "Classificazione per rotazione",
        c: "Classificazione per radiazioni",
        d: "Classificazione per dimensioni",
        correct: "a",
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