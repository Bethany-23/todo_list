let currentFilter = 'all';
let todoArray = JSON.parse(localStorage.getItem("todos")) || [];
const input = document.getElementById("todo");
const display = document.getElementById("unord-li");

window.onload = renderTodos;

function saveTodo() {
  const newTodo = input.value.trim();
  if (newTodo === "") return;

  todoArray.push({ text: newTodo, done: false }); // store as object
  input.value = "";
  updateLocalStorage();
  renderTodos();
}

function deleteTodo(index) {
  todoArray.splice(index, 1);
  updateLocalStorage();
  renderTodos();
}

function toggleDone(index) {
  todoArray[index].done = !todoArray[index].done;
  updateLocalStorage();
  renderTodos();
}

function updateLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todoArray));
}
function setFilter(filter) {
  currentFilter = filter;
  renderTodos();
}

function renderTodos() {
  let listItems = "";
  for (let i = 0; i < todoArray.length; i++) {
    const todo = todoArray[i];

    // Apply filtering
    if (
      currentFilter === "completed" && !todo.done ||
      currentFilter === "active" && todo.done
    ) {
      continue;
    }

    const doneClass = todo.done ? "done" : "";

    listItems += `
      <li class="todo-item ${doneClass}" onclick="toggleDone(${i})">
        ${todo.text}
        <span class="delete-btn" onclick="event.stopPropagation(); deleteTodo(${i})">❌</span>
      </li>
    `;
  }
  display.innerHTML = listItems;
}

