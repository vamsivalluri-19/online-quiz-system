// LOGIN CHECK

let loggedInUser =
JSON.parse(
localStorage.getItem("loggedInUser")
);

if(!loggedInUser){

window.location =
"login.html";

}

// LOAD RESULTS

let results =
JSON.parse(
localStorage.getItem("quizResults")
) || [];

// LAST RESULT

let latestResult =
results[results.length - 1];

// CHECK RESULT

if(!latestResult){

document.getElementById("score")
.innerText =
"No Result Found";

}
else{

// STUDENT DETAILS

document.getElementById("student-name")
.innerText =
latestResult.name;

document.getElementById("student-email")
.innerText =
latestResult.email;

// MODE

document.getElementById("mode")
.innerText =
latestResult.mode
? latestResult.mode + " Mode"
: "Exam Mode";

// SCORE

document.getElementById("score")
.innerText =
latestResult.score;

// PERCENTAGE

document.getElementById("percentage")
.innerText =
latestResult.percentage + "%";

// TOTAL QUESTIONS

let totalQuestions =
JSON.parse(
localStorage.getItem("questions")
).length;

// CORRECT

let correct =
latestResult.score;

// WRONG

let wrong =
totalQuestions - correct;

// ATTEMPTED

let attempted =
correct + wrong;

// UPDATE UI

document.getElementById("correct")
.innerText =
correct;

document.getElementById("wrong")
.innerText =
wrong;

document.getElementById("attempted")
.innerText =
attempted;

// HIGH SCORE

let highScore =
localStorage.getItem("highScore")
|| 0;

document.getElementById("high-score")
.innerText =
highScore;

// PERFORMANCE

let performance = "";

if(latestResult.percentage >= 80){

performance =
"Excellent 🔥";

}
else if(latestResult.percentage >= 50){

performance =
"Good 👍";

}
else{

performance =
"Practice More 💪";

}

// PRACTICE MODE LABEL

if(latestResult.mode === "Practice"){

performance +=
" | Practice Test";

}

document.getElementById("performance")
.innerText =
performance;

}

// DARK MODE

function toggleDarkMode(){

document.body.classList.toggle("dark");

}

// LOGOUT

function logout(){

localStorage.removeItem(
"loggedInUser"
);

window.location =
"login.html";

}