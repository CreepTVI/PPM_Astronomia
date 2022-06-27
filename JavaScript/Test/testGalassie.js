const quizData = [
    {
        //1
        question: "Come viene definita una galassia?",
        a: "Un grande insieme di stelle, sistemi, ammassi ed associazioni stellari, gas e polveri legati dalla reciproca forza di gravità",
        b: "Un insieme che possiede peculiari caratteristiche chimiche",
        c: "Un  gruppo di stelle molto denso",
        d: "Un insieme sferoidale di stelle che orbita come un satellite intorno al centro di una galassia",
        correct: "a",
    },
    {
        //2
        question: "Quali fra queste NON è una forma che una galassia può assumere?",
        a: "Ovali",
        b: "A spirale",
        c: "Peculiari",
        d: "Ellittiche",
        correct: "a",
    },
    {
        //3
        question: "Da cosa dipende la forma di una galassia?",
        a: "Da fattori esterni, come la presenza di altre galassie",
        b: "Da un numero di stelle variabile",
        c: "Da forze di gravità esterne",
        d: "Dalla nascita di stelle molto calde",
        correct: "a",
    },
    {
        //4
        question: "Le galassie nane orbitano attorno ad una singola grande galassia?",
        a: "Sì",
        b: "Sì, ma solo se hanno un diametro inferiore a quello della Via Lattea",
        c: "Sì, ma solo se hanno un diametro superiore a quello della Via Lattea",
        d: "No",
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

           <button class="button button1" onclick="location.reload()">Reload</button>
           `
        }
    }
})