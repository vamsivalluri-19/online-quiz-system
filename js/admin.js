// LOAD QUESTIONS FROM STORAGE

let questions =
JSON.parse(
localStorage.getItem("questions")
) || [];

// SAVE QUESTIONS

function saveQuestions(){

localStorage.setItem(
"questions",
JSON.stringify(questions)
);

}

// AUTO GENERATE QUESTIONS

function generateQuestions(){

let topic =
document.getElementById("topic").value;

if(topic.trim() === ""){

alert("Please Enter Topic");
return;

}

// AUTO GENERATED QUESTIONS

let generatedQuestions = [

{
question:
"What is " + topic + "?",

options:[
"Programming Language",
"Concept",
"Database",
"Server"
],

answer:1
},

{
question:
"Which language is mainly used for " + topic + "?",

options:[
"HTML",
"CSS",
"JavaScript",
"Python"
],

answer:2
},

{
question:
"Why is " + topic + " important?",

options:[
"For Styling",
"For Logic Building",
"For Database",
"For Hosting"
],

answer:1
},

{
question:
"Best feature of " + topic + "?",

options:[
"Fast",
"Responsive",
"Dynamic",
"Secure"
],

answer:2
},

{
question:
"Which company developed " + topic + " related technologies?",

options:[
"Google",
"Microsoft",
"Meta",
"Apple"
],

answer:0
}

];

// ADD QUESTIONS

questions.push(...generatedQuestions);

// SAVE

saveQuestions();

// SHOW

showQuestions();

alert("Questions Auto Generated Successfully");

}

// SHOW QUESTIONS

function showQuestions(){

let list =
document.getElementById("question-list");

if(!list) return;

list.innerHTML = "";

questions.forEach((q,index)=>{

list.innerHTML += `

<div class="question-card">

<h3>${q.question}</h3>

<p>
${q.options.join(" | ")}
</p>

<p>
Correct Answer:
${q.options[q.answer]}
</p>

<button class="edit-btn"
onclick="editQuestion(${index})">

Edit

</button>

<button class="delete-btn"
onclick="deleteQuestion(${index})">

Delete

</button>

</div>

`;

});

}

// ADD QUESTION

function addQuestion(){

let question =
document.getElementById("question").value;

let option1 =
document.getElementById("option1").value;

let option2 =
document.getElementById("option2").value;

let option3 =
document.getElementById("option3").value;

let option4 =
document.getElementById("option4").value;

let answer =
document.getElementById("answer").value;

if(
question === ""
||
option1 === ""
||
option2 === ""
||
option3 === ""
||
option4 === ""
){

alert("Fill All Fields");
return;

}

questions.push({

question:question,

options:[
option1,
option2,
option3,
option4
],

answer:Number(answer)

});

// SAVE

saveQuestions();

// REFRESH

showQuestions();

// CLEAR INPUTS

document.getElementById("question").value = "";
document.getElementById("option1").value = "";
document.getElementById("option2").value = "";
document.getElementById("option3").value = "";
document.getElementById("option4").value = "";
document.getElementById("answer").value = "";

alert("Question Added Successfully");

}

// DELETE QUESTION

function deleteQuestion(index){

questions.splice(index,1);

saveQuestions();

showQuestions();

}

// EDIT QUESTION

function editQuestion(index){

let updatedQuestion =
prompt(
"Edit Question",
questions[index].question
);

if(updatedQuestion){

questions[index].question =
updatedQuestion;

saveQuestions();

showQuestions();

}

}

// SEARCH QUESTIONS

function searchQuestions(){

let value =
document.getElementById("searchBox")
.value.toLowerCase();

let cards =
document.querySelectorAll(".question-card");

cards.forEach(card=>{

card.style.display =
card.innerText.toLowerCase()
.includes(value)
? "block"
: "none";

});

}

// LOAD STUDENT RESULTS

function loadStudentResults(){

let results =
JSON.parse(
localStorage.getItem("quizResults")
) || [];

let container =
document.getElementById("student-results");

if(!container) return;

container.innerHTML = "";

results.forEach(result=>{

container.innerHTML += `

<div class="result-card">

<h3>${result.name}</h3>

<p>Email: ${result.email}</p>

<p>Score: ${result.score}</p>

</div>

`;

});

}

// EXPORT RESULTS

function exportResults(){

let results =
JSON.parse(
localStorage.getItem("quizResults")
) || [];

if(results.length === 0){

alert("No Results Found");
return;

}

let data = "";

results.forEach(result=>{

data += `
Student Name: ${result.name}
Email: ${result.email}
Score: ${result.score}

`;

});

let blob =
new Blob(
[data],
{type:"text/plain"}
);

let a =
document.createElement("a");

a.href =
URL.createObjectURL(blob);

a.download =
"student-results.txt";

a.click();

}

// INITIAL LOAD

showQuestions();

loadStudentResults();