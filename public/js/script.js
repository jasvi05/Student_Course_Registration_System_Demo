const API = "http://localhost:3000/api";

const registerForm = document.getElementById("registerForm");

if (registerForm) {

registerForm.addEventListener("submit", async e => {

e.preventDefault();

const data = {

name: document.getElementById("name").value,
email: document.getElementById("email").value,
password: document.getElementById("password").value

};

await fetch(API + "/auth/register", {

method: "POST",

headers: {
"Content-Type": "application/json"
},

body: JSON.stringify(data)

});

alert("Registration Successful");

window.location = "login.html";

});

}

const loginForm = document.getElementById("loginForm");

if (loginForm) {

loginForm.addEventListener("submit", async e => {

e.preventDefault();

const res = await fetch(API + "/auth/login", {

method: "POST",

headers: {
"Content-Type": "application/json"
},

body: JSON.stringify({

email: document.getElementById("email").value,
password: document.getElementById("password").value

})

});

if (res.ok) {

const user = await res.json();

localStorage.setItem("studentId", user._id);

window.location = "courses.html";

} else {

alert("Invalid Login");

}

});

}

async function loadCourses() {

const res = await fetch(API + "/courses");

const courses = await res.json();

const table = document.getElementById("courseTable");

if (!table) return;

courses.forEach(c => {

table.innerHTML += `

<tr>

<td>${c.title}</td>
<td>${c.instructor}</td>
<td>${c.credits}</td>

<td>

<button class="btn btn-success" onclick="enroll('${c._id}')">

Enroll

</button>

</td>

</tr>

`;

});

}

async function enroll(courseId) {

const studentId = localStorage.getItem("studentId");

await fetch(API + "/enroll", {

method: "POST",

headers: {
"Content-Type": "application/json"
},

body: JSON.stringify({

studentId,
courseId

})

});

alert("Course Enrolled");

}

if (document.getElementById("courseTable")) {

loadCourses();

}