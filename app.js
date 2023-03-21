const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_USERNAME = "hidden";

function onLoginSubmit(event) {
  const username = loginInput.value;
  event.preventDefault();

  loginForm.classList.add(HIDDEN_USERNAME);
  localStorage.setItem("username", username);

  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_USERNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
