function register(){

let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

let password =
document.getElementById("password").value;

let role =
document.getElementById("role").value;

if(
name === ""
||
email === ""
||
password === ""
){

alert("Fill All Fields");
return;

}

let users =
JSON.parse(
localStorage.getItem("users")
) || [];

let alreadyExists =
users.find(u=>u.email === email);

if(alreadyExists){

alert("User Already Exists");
return;

}

users.push({

name:name,
email:email,
password:password,
role:role

});

localStorage.setItem(
"users",
JSON.stringify(users)
);

alert("Registration Successful");

window.location =
"login.html";

}