const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY ="username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem("username", username);
    greeting.innerText = `Hi ${username}! Have a great day :)`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername ===null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hi ${savedUsername}! Have a great day :)`;
}

function paintGreetings(username) {
    greeting.innerText = `Hi ${username}! Have a great day :)`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}