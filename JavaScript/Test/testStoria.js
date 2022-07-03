const quizData = [
    {
        //1
        question: "L'astronomia inizialmente veniva utilizzata per le navigazioni.",
        a: "Vero",
        b: "Falso",
        c: "Vero solo in alcuni casi",
        d: "All'epoca le stelle ancora non erano state granché osservate",
        correct: "a",
    },
    {
        //2
        question: "Gli antichi filosofi greci documentarono la prova che la Terra fosse una sfera.",
        a: "Vero",
        b: "Falso",
        c: "Vero solo in alcuni casi",
        d: "I filosofi non avevano idee in merito",
        correct: "a",
    },
    {
        //3
        question: "Cosa si intendeva con Piccola nuvola?",
        a: "Via Lattea",
        b: "Una piccola galassia",
        c: "Galassia di Andromeda",
        d: "La cintura di Orione",
        correct: "c",
    },
    {
        //4
        question: "Nel cosmo aristotelico la Terra era una sfera immobile al centro dell'universo",
        a: "Vero",
        b: "Falso",
        c: "Vero solo per alcuni seguaci",
        d: "Per Aristotele nell'universo esistevano solo la terra ed il Sole",
        correct: "a",
    },
    {
        //5
        question: "Nel cosmo aristotelico il Sole era una sfera immobile al centro dell'universo",
        a: "Vero",
        b: "Falso",
        c: "Vero solo per alcuni seguaci",
        d: "Per Aristotele nell'universo esistevano solo la terra ed il Sole",
        correct: "b",
    },
    {
        //6
        question: "Nel cosmo aristotelico la Via Lattea era una galassia immobile al centro dell'universo",
        a: "Vero",
        b: "Falso",
        c: "Vero solo per alcuni seguaci",
        d: "Per Aristotele la Via Lattea era l'universo stesso",
        correct: "b",
    },
    {
        //7
        question: "L'astrolabio era un dispositivo per misurare la posizione dei corpi celesti",
        a: "Vero",
        b: "Falso",
        c: "Vero solo per alcuni tipi di astrolabio",
        d: "L'astrolabio in realtà non funzionava, era solo decorativo",
        correct: "a",
    },
    {
        //8
        question: "Chi unì il sistema aristotelico e tolemaico nel cristianesimo?",
        a: "Aristotele",
        b: "Tolomeo",
        c: "Tommaso d'Aquino",
        d: "Galileo Galilei",
        correct: "c",
    },
    {
        //9
        question: "Una volta che l’astronomia fu fusa nelle dottrine della Chiesa, il progresso astronomico divenne più facile.",
        a: "Vero",
        b: "Falso",
        c: "Vero solo per alcune zone",
        d: "La chiesa deformò le scoperto per proprio tornaconto",
        correct: "b",
    },
    {
        //10
        question: "Cosa descrive l'Almagesto?",
        a: "l'unione tra il sistema aristotelico e il cristianesimo",
        b: "l’universo centrato sulla Terra di Aristotele",
        c: "un catalogo di pianeti e posizioni delle stelle",
        d: "una raccolta di disegni delle interpretazioni delle costellazioni",
        correct: "b",
    },
    {
        //11
        question: "quando i romani studiarono l’astronomia greca, diedero ai pianeti i nomi dei loro dei",
        a: "Vero",
        b: "Falso",
        c: "Vero solo per alcuni",
        d: "I romani non hanno mai studiato le stelle",
        correct: "a",
    },
    {
        //12
        question: "Cosa significa astronomia?",
        a: "legge delle stelle",
        b: "studio delle stelle",
        c: "posizioni delle stelle",
        d: "colorazione delle stelle",
        correct: "a",
    },
    {
        //13
        question: "Alcune costellazioni cambiano posizione in base alle stagioni?",
        a: "Vero",
        b: "Falso",
        c: "Le tutte le costellazioni cambiano forma in base alle stagioni",
        d: "Le costellazioni cambiano forma a seconda delle stagioni solo in particolari condizioni",
        correct: "a",
    },
    {
        //14
        question: "Astrologia e Astronomia sono sinonimi",
        a: "Vero",
        b: "Falso",
        c: "La prima è una branca della seconda",
        d: "L'astrologia non esiste",
        correct: "b",
    },
    {
        //15
        question: "L'astrologia:",
        a: "significa legge delle stelle",
        b: "è fondata su credenze popolari",
        c: "è basata su studi certi",
        d: "significa forma delle stelle",
        correct: "b",
    },
    {
        //16
        question: "Le leggi di keplero sono:",
        a: "2",
        b: "3",
        c: "4",
        d: "1",
        correct: "b",
    },
    {
        //17
        question: "L'ipotesi copernicana era appoggiata:",
        a: "da Galileo",
        b: "dalle Sacre Scritture",
        c: "dal tribunale della Santa Inquisizione",
        d: "dal Papa",
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

           <button class="button button1" onclick="window.open('../index.html','_self','')">Completato</button>
           `
        }
    }
})