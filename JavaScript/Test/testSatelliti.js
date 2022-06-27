const quizData = [
    {
        //1
        question: " I satelliti naturali e i satelliti artificiali hanno le stesse funzioni?",
        a: "No",
        b: "A volte",
        c: "Sì",
        d: "Non esistono satelliti artificiali",
        correct: "a",
    },
    {
        //2
        question: "I satelliti viaggiano a una velocità costante?",
        a: "No",
        b: "Sì",
        c: "A volte",
        d: "Sì, ma solo quelli artificiali",
        correct: "a",
    },
    {
        //3
        question: "I satelliti artificiali:",
        a: "Hanno funzioni diverse e sono costruiti diversamente in base alle loro funzioni",
        b: "Hanno funzioni diverse ma sono costruiti tutti allo stesso modo",
        c: "Hanno le stesse funzioni ma sono costruiti diversamente in base all'anno di produzione",
        d: "Hanno le stesse funzioni e sono costruiti tutti allo stesso modo",
        correct: "a",
    },
    {
        //4
        question: "Le parti fondamentali di un satellite sono:",
        a: "Antenna e fonte di alimentazione",
        b: "Antenna e parabola",
        c: "Antenna e telecamera",
        d: "Telecamera e fonte di alimentazione",
        correct: "a",
    },
    {
        //5
        question: "Un satellite con un'orbita di tipo geostazionario:",
        a: "Viaggia da ovest a est sopra l'equatore",
        b: "Rimane fermo in un solo punto",
        c: "Viaggia da nord a sud passando sopra i poli",
        d: "Viaggia da sud a nord passando sopra i poli",
        correct: "a",
    },
    {
        //6
        question: "Un satellite con un'orbita di tipo polare:",
        a: "Viaggia da nord a sud passando sopra i poli",
        b: "Viaggiaa da est a ovest sopra l'equatore",
        c: "Rimane fermo sopra uno dei due poli",
        d: "Ha le stesse caratteristiche di un satellite geostazionario",
        correct: "a",
    },
    {
        //7
        question: "Le collisioni tra satelliti:",
        a: "Possono avvenire per il cambiamento di orbita",
        b: "Non possono avvenire",
        c: "Possono avvenire per la rotazione del corpo celeste",
        d: "Possono avvenire, ma solo se sono artificiali",
        correct: "a",
    },
    {
        //8
        question: "Con 'luna' si intende",
        a: "Un satellite naturale che gira intorno a un pianeta",
        b: "Un satellite artificiale che gira intorno a un pianeta",
        c: "Il satellite naturale della terra",
        d: "Un pianeta del Sistema Solare",
        correct: "a",
    },
    {
        //9
        question: "Un satellite naturale può essere:",
        a: "Una piccola galassia che orbita attorno una galassia più grande",
        b: "Un satellite controllato dall'uomo",
        c: "Un satellite che orbita attorno un altro satellite",
        d: "Una protostella",
        correct: "a",
    },
    {
        //10
        question: "Quali pianeti NON hanno satelliti naturali:",
        a: "Mercurio e Venere",
        b: "Terra e Marte",
        c: "Mercurio e Marte",
        d: "Giove e Venere",
        correct: "a",
    },
    {
        //11
        question: "Quanti satelliti naturali regolari ha la Terra?",
        a: "1",
        b: "0",
        c: "3",
        d: "2",
        correct: "a",
    },
    {
        //12
        question: "I satelliti interni possono essere distinti dagli altri satelliti per i loro lunghi periodi orbitali:",
        a: "Falso sempre",
        b: "Falso, non esistono i satelliti interni",
        c: "Vero sempre",
        d: "Vero, ma solo in alcuni casi",
        correct: "a",
    },
    {
        //13
        question: "Un'orbita di tipo retrogrado viene anche chiamata orbita irregolare:",
        a: "Vero sempre",
        b: "Vero, ma solo se il satellite è artificiale",
        c: "Vero, ma solo se il satellite è naturale",
        d: "Falso",
        correct: "a",
    },
    {
        //15
        question: "I satelliti sono in grado di influenzare la forza di gravità dei pianeti:",
        a: "Vero, ma solo se hanno una massa sufficientemente grande",
        b: "Vero sempre",
        c: "Falso, i satelliti non orbitano attorno ai pianeti",
        d: "Falso, sono i pianeti ad influenzare la forza di gravita dei satelliti, non il contrario",
        correct: "a",
    },
    {
        //16
        question: "Chi fu la prima persona a scoprire che i pianeti possono avere lune?",
        a: "Galileo Galilei",
        b: "Van Allen",
        c: "Von Braun",
        d: "Isaac Newton",
        correct: "a",
    },
    {
        //17
        question: "Chi fu il primo paese a lanciare con successo il primo satellite artificiale?",
        a: "Unione Sovetica",
        b: "USA",
        c: "Cina",
        d: "India",
        correct: "a",
    },
    {
        //18
        question: "Il secondo satellite artificiale a essere stato lanciato con successo conteneva un cane di nome Laika:",
        a: "Vero",
        b: "Falso, era un gatto",
        c: "Falso, i satelliti artificiali non sono ancora stati messi in orbita",
        d: "Falso, era un cane ma si chiamava Bobby",
        correct: "a",
    },
    {
        //19
        question: " Con periodo sinodico si intende:",
        a: "Il periodo di tempo impiegato da una luna piena all'altra",
        b: "Il tempo impiegato dalla Luna per fare un giro completo attorno alla Terra",
        c: "Il tempo impiegato dalla Luna per fare un giro completo attorno al Sole",
        d: "Il tempo impiegato dalla Luna per fare un giro completo attorno a un satellite",
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