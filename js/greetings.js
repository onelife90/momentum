const HIDDEN_USERNAME = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const savedUsername = localStorage.getItem(USERNAME_KEY);

const greetingEventHandler = {
  paintGreetings: (username) => {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_USERNAME);
  },
  onLoginSubmit: (event) => {
    const username = loginInput.value;
    event.preventDefault();

    loginForm.classList.add(HIDDEN_USERNAME);
    localStorage.setItem(USERNAME_KEY, username);

    greetingEventHandler.paintGreetings(username);
  },
};

// check for username in localStorage
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_USERNAME);
  loginForm.addEventListener("submit", greetingEventHandler.onLoginSubmit);
} else {
  greetingEventHandler.paintGreetings(savedUsername);
}
