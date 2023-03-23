const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDoEventHandler = {
  paintToDo: (newTodo) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    toDoList.appendChild(li);
  },
  handleToDoSubmit: (event) => {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDoEventHandler.paintToDo(newTodo);
  },
};

toDoForm.addEventListener("submit", toDoEventHandler.handleToDoSubmit);
