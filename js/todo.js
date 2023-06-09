const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

const toDoEventHandler = {
  changeCheckBoxes: (event) => {
    const input = event.target;
    const item = toDos.find((item) => item.id == parseInt(input.id));

    item.checked = !item.checked;
    toDoEventHandler.saveToDos();
  },
  saveToDos: () => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  },
  loadToDos: () => {
    const savedToDos = localStorage.getItem(TODOS_KEY);

    if (savedToDos !== null) {
      const parsedToDos = JSON.parse(savedToDos);
      toDos = parsedToDos;
      parsedToDos.forEach(toDoEventHandler.paintToDo);
    }
  },
  deleteToDo: (event) => {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDos) => toDos.id !== parseInt(li.id));
    toDoEventHandler.saveToDos();
  },

  paintToDo: (newTodo) => {
    const li = document.createElement("li");
    const input = document.createElement("input");
    const span = document.createElement("span");
    const button = document.createElement("button");

    input.type = "checkbox";

    button.innerText = "❌";
    button.addEventListener("click", toDoEventHandler.deleteToDo);

    span.innerText = newTodo.text;
    li.id = newTodo.id;
    input.id = newTodo.id;
    input.checked = newTodo.checked;

    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
  },

  handleToDoSubmit: (event) => {
    event.preventDefault();

    const newTodoObj = {
      text: toDoInput.value,
      id: Date.now(),
      checked: false,
    };
    toDoInput.value = "";
    toDos.push(newTodoObj);

    toDoEventHandler.paintToDo(newTodoObj);
    toDoEventHandler.saveToDos();
  },
};

toDoForm.addEventListener("submit", toDoEventHandler.handleToDoSubmit);
toDoList.addEventListener("change", toDoEventHandler.changeCheckBoxes);
toDoEventHandler.loadToDos();
