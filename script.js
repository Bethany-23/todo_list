let todoArray = JSON.parse(localStorage.getItem("todos")) || [];
const input = document.getElementById("todo");
const display = document.getElementById("unord-li");

// Load and render tasks on page load
window.onload = renderTodos;

function saveTodo() {
  const newTodo = input.value.trim();
  if (newTodo === "") return;

  todoArray.push(newTodo);
  input.value = "";
  updateLocalStorage();
  renderTodos();
}

function deleteTodo(index) {
  todoArray.splice(index, 1);
  updateLocalStorage();
  renderTodos();
}

function updateLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todoArray));
}

function renderTodos() {
  let listItems = "";
  for (let i = 0; i < todoArray.length; i++) {
    listItems += `
      <li class="todo-item">
        ${todoArray[i]}
        <span class="delete-btn" onclick="deleteTodo(${i})">❌</span>
      </li>
    `;
  }
  display.innerHTML = listItems;
}
