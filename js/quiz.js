const initialQuestions = Array.isArray(window.questions)
    ? window.questions
    : [];

const allQuestions = [...initialQuestions];

// RANDOMIZE QUESTIONS

let questions = [...allQuestions];

questions.sort(() => Math.random() - 0.5);

let currentQuestion = 0;

let score = 0;

let timer = 120;

let correctAnswers = 0;

let wrongAnswers = 0;

let attempted = 0;

let selectedAnswers = [];

const startScreen =
    document.getElementById("start-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");

const questionElement =
    document.getElementById("question");

const optionsElement =
    document.getElementById("options");

const timerElement =
    document.getElementById("timer");

const scoreElement =
    document.getElementById("score");

const progressBar =
    document.getElementById("progress-bar");

const categoryElement =
    document.getElementById("category");

const highScoreElement =
    document.getElementById("high-score");

let highScore =
    localStorage.getItem("highScore") || 0;

highScoreElement.innerText =
    "⭐ High Score: " + highScore;

document.getElementById("total-questions")
    .innerText = questions.length;

// START QUIZ

document.getElementById("start-btn")
    .onclick = () => {

    if (!questions.length) {
        alert("No questions are available yet.");
        return;
    }

    startScreen.style.display = "none";

    quizScreen.style.display = "block";

    loadQuestion();

    startTimer();
};

// LOAD QUESTION

function loadQuestion(){

    let q = questions[currentQuestion];

    questionElement.innerText =
        q.question;

    categoryElement.innerText =
        "Category: General Knowledge";

    optionsElement.innerHTML = "";

    q.options.forEach((option,index)=>{

        let btn =
            document.createElement("button");

        btn.innerText = option;

        btn.onclick = () =>
            selectAnswer(index,btn);

        optionsElement.appendChild(btn);
    });

    updateProgressBar();
}

// SELECT ANSWER

function selectAnswer(selected,btn){

    attempted++;

    selectedAnswers[currentQuestion] =
        selected;

    let correct =
        questions[currentQuestion].answer;

    let buttons =
        optionsElement.querySelectorAll("button");

    buttons.forEach(b=>b.disabled=true);

    if(selected == correct){

        btn.classList.add("correct");

        score++;

        correctAnswers++;

        playCorrectSound();
    }
    else{

        btn.classList.add("wrong");

        buttons[correct]
            .classList.add("correct");

        wrongAnswers++;

        playWrongSound();
    }

    scoreElement.innerText =
        "🏆 Score: " + score;

    setTimeout(()=>{

        nextQuestion();

    },1000);
}

// NEXT QUESTION

function nextQuestion(){

    if(currentQuestion < questions.length-1){

        currentQuestion++;

        loadQuestion();
    }
    else{

        showResult();
    }
}

// PREVIOUS QUESTION

document.getElementById("prev-btn")
    .onclick = ()=>{

    if(currentQuestion > 0){

        currentQuestion--;

        loadQuestion();
    }
};

// NEXT BUTTON

document.getElementById("next-btn")
    .onclick = ()=>{

    nextQuestion();
};

// SKIP BUTTON

document.getElementById("skip-btn")
    .onclick = ()=>{

    nextQuestion();
};

// FINISH BUTTON

document.getElementById("finish-btn")
    .onclick = ()=>{

    showResult();
};

// TIMER

function startTimer(){

    let countdown = setInterval(()=>{

        timer--;

        timerElement.innerText =
            "⏰ " + timer;

        if(timer <= 0){

            clearInterval(countdown);

            showResult();
        }

    },1000);
}

// PROGRESS BAR

function updateProgressBar(){

    let progress =
        ((currentQuestion+1)
        / questions.length) * 100;

    progressBar.style.width =
        progress + "%";
}

// SHOW RESULT

function showResult(){

    quizScreen.style.display = "none";

    resultScreen.style.display = "block";

    let percentage =
        ((score/questions.length)*100)
        .toFixed(2);

    document.getElementById("final-score")
        .innerText =
        "Score: " + score + "/" + questions.length;

    document.getElementById("percentage")
        .innerText =
        "Percentage: " + percentage + "%";

    document.getElementById("correct-count")
        .innerText =
        "Correct Answers: " + correctAnswers;

    document.getElementById("wrong-count")
        .innerText =
        "Wrong Answers: " + wrongAnswers;

    document.getElementById("attempted")
        .innerText =
        "Attempted Questions: " + attempted;

    let performance = "";

    if(percentage >= 80){

        performance =
            "Excellent 🔥";
    }
    else if(percentage >= 50){

        performance =
            "Good 👍";
    }
    else{

        performance =
            "Practice More 💪";
    }

    document.getElementById("performance")
        .innerText = performance;

    // SAVE HIGH SCORE

    if(score > highScore){

        localStorage.setItem(
            "highScore",
            score
        );
    }
}

// RESTART

document.getElementById("restart-btn")
    .onclick = ()=>{

    location.reload();
};

// DARK MODE

function toggleDarkMode(){

    document.body.classList.toggle("dark");
}

// SOUND EFFECTS

function playCorrectSound(){

    let audio =
        new Audio(
'https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg'
        );

    audio.play();
}

function playWrongSound(){

    let audio =
        new Audio(
'https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg'
        );

    audio.play();
}

function filterQuestions(category){

    if(category === "All"){

        questions = [...allQuestions];
    }
    else{

        questions = allQuestions.filter(q =>
            q.category === category
        );
    }

    questions.sort(() => Math.random() - 0.5);

    currentQuestion = 0;
    score = 0;
    timer = 120;
    correctAnswers = 0;
    wrongAnswers = 0;
    attempted = 0;
    selectedAnswers = [];

    if(startScreen){
        startScreen.style.display = "block";
    }

    if(quizScreen){
        quizScreen.style.display = "none";
    }

    if(resultScreen){
        resultScreen.style.display = "none";
    }

    if(questionElement){
        questionElement.innerText = "";
    }

    if(optionsElement){
        optionsElement.innerHTML = "";
    }

    if(progressBar){
        progressBar.style.width = "0%";
    }

    if(scoreElement){
        scoreElement.innerText = "🏆 Score: 0";
    }

    if(timerElement){
        timerElement.innerText = "⏰ 120";
    }

    document.getElementById("total-questions")
        .innerText = questions.length;
}