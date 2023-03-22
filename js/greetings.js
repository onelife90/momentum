const HIDDEN_USERNAME = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_USERNAME);
}

function onLoginSubmit(event) {
  const username = loginInput.value;
  event.preventDefault();

  loginForm.classList.add(HIDDEN_USERNAME);
  localStorage.setItem(USERNAME_KEY, username);

  paintGreetings(username);
}

// check for username in localStorage
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_USERNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
