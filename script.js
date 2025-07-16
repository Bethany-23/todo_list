const todoArray = [];
const input = document.getElementById("todo");
const display = document.getElementById("unord-li");

function saveTodo() {
  const newTodo = input.value.trim();
  if (newTodo === "") return;

  todoArray.push(newTodo);
  input.value = "";
  renderTodos();
}

function deleteTodo(index) {
  todoArray.splice(index, 1); // remove one item at index
  renderTodos();
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
