const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDoEventHandler = {
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
    toDoEventHandler.paintToDo(newTodo);
  },
};

toDoForm.addEventListener("submit", toDoEventHandler.handleToDoSubmit);
