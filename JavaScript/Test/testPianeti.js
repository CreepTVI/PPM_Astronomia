const quizData = [
    {
        //1
        question: "Cos’è un pianeta?",
        a: "Un corpo celeste dotato di energia interna, non derivante dalla fusione",
        b: "Un corpo celeste capace di eseguire la fusione nucleare",
        c: "Un corpo celeste non dotato di energia interna",
        d: "Una stella raffreddata",
        correct: "a",
    },
    {
        //2
        question: "Quale tra questi non è un pianeta gassoso?",
        a: "Venere",
        b: "Urano",
        c: "Giove",
        d: "Saturno",
        correct: "a",
    },
    {
        //3
        question: "Cos’è un pianeta extrasolare?",
        a: "Un pianeta che orbita attorno a una stella diversa dal Sole",
        b: "Un pianeta che orbita attorno al Sole",
        c: "Un pianeta più grande del sole",
        d: "Un pianeta che non segue una traiettoria",
        correct: "a",
    },
    {
        //4
        question: "Da dove si origina un protopianeta?",
        a: "Dal disco circumstellare",
        b: "Da una stella",
        c: "Da un buco nero",
        d: "Da un altro pianeta",
        correct: "a",
    },
    {
        //5
        question: "Quale fra queste non è una minaccia per la sopravvivenza di un pianeta?",
        a: "Moto di rotazione",
        b: "Caduta di meteoriti",
        c: "Morte della sua stella",
        d: "Attività umane",
        correct: "a",
    },
    {
        //6
        question: "Cos’è un pianeta superabitabile?",
        a: "Un pianeta in cui la probabilità di essere abitabile è superiore rispetto alla Terra",
        b: "Un pianeta extrasolare",
        c: "Un pianeta in cui la vita è più sviluppata rispetto alla Terra",
        d: "Un pianeta in cui è presente acqua allo stato liquido",
        correct: "a",
    },
    {
        //6
        question: "Quale fra questi elementi non è presente in quantità elevate in un pianeta gioviano?",
        a: "Nichel",
        b: "Idrogeno",
        c: "Elio",
        d: "Metano",
        correct: "a",
    },
    {
        //7
        question: "Quanti sono i pianeti extrasolari conosciuti?",
        a: "Circa 5000",
        b: "Circa 3500",
        c: "Circa 4500",
        d: "Circa 3500",
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