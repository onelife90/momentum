const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

const toDoEventHandler = {
  saveToDos: () => {
    localStorage.setItem("todos", JSON.stringify(toDos));
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
};

toDoForm.addEventListener("submit", toDoEventHandler.handleToDoSubmit);
