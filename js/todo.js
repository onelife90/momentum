const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let toDos = [];

const toDoEventHandler = {
  saveToDos: () => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  },
  deleteToDo: (event) => {
    const li = event.target.parentElement;
    li.remove();
  },
  paintToDo: (newTodo) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.innerText = "❌";
    button.addEventListener("click", toDoEventHandler.deleteToDo);

    span.innerText = newTodo;
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
  },
  handleToDoSubmit: (event) => {
    event.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);

    toDoEventHandler.paintToDo(newTodo);
    toDoEventHandler.saveToDos();
  },
  loadToDos: () => {
    const savedToDos = localStorage.getItem(TODOS_KEY);
    console.log(savedToDos);
    if (savedToDos !== null) {
      const parsedToDos = JSON.parse(savedToDos);
      toDos = parsedToDos;
      parsedToDos.forEach(toDoEventHandler.paintToDo);
    }
  },
};

toDoForm.addEventListener("submit", toDoEventHandler.handleToDoSubmit);
toDoEventHandler.loadToDos();
