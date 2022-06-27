const quizData = [
    {
        //1
        question: "Come si chiama la reazione chimica che avviene dentro le stelle?",
        a: "Fusione nucleare",
        b: "Fissione nucleare",
        c: "Ossidazione",
        d: "Combustione",
        correct: "a",
    },
    {
        //2
        question: "Com’è definita una stella in formazione?",
        a: "Protostella",
        b: "Semistella",
        c: "Alfastella",
        d: "Stella primordiale",
        correct: "a",
    },
    {
        //2
        question: "Qual è la temperatura (in Celsius) del nucleo di una stella?",
        a: "15 milioni di gradi",
        b: "5000 gradi",
        c: "15 mila gradi",
        d: "15 miliardi di gradi",
        correct: "a",
    },
    {
        //3
        question: "Cosa succede ad una gigante rossa molto grande?",
        a: "Diventa una supergigante rossa",
        b: "Diventa una nana bianca",
        c: "Esplode",
        d: "Diventa una protostella",
        correct: "a",
    },
    {
        //4
        question: "Da dove si originano le nebulose planetarie?",
        a: "Da una supernova",
        b: "Da un buco nero",
        c: "Da una nana bianca",
        d: "Da una cometa",
        correct: "a",
    },
    {
        //5
        question: "Cos’è un gas ionizzato?",
        a: "Un gas senza elettroni",
        b: "Un gas che rilascia protoni",
        c: "Un gas a basse temperature ed alte pressioni",
        d: "Un gas ad alte temperature e basse pressioni",
        correct: "a",
    },
    {
        //6
        question: "Cos’è il processo tre-alfa?",
        a: "La fusione di tre nuclei di elio",
        b: "Il processo di nascita di una supernova",
        c: "La scissione di un atomo in tre elementi più leggeri",
        d: "La reazione che precede il processo quattro-alfa",
        correct: "a",
    },
    {
        //7
        question: "Cosa si forma in una supergigante rossa?",
        a: "Ferro",
        b: "Idrogeno",
        c: "Elio",
        d: "Magnesio",
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