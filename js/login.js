let selectedRole = "student";

function setRole(role){

selectedRole = role;

}

function login(){

let email =
document.getElementById("email").value;

let password =
document.getElementById("password").value;

let users =
JSON.parse(
localStorage.getItem("users")
) || [];

let user =
users.find(u=>

u.email === email
&&
u.password === password
&&
u.role === selectedRole

);

if(user){

localStorage.setItem(
"loggedInUser",
JSON.stringify(user)
);

alert("Login Successful");

if(selectedRole === "staff"){

window.location =
"admin.html";

}
else{

window.location =
"index.html";

}

}
else{

alert("Invalid Credentials");

}

}