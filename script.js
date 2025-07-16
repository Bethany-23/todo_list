const todoArray = [];
const input = document.getElementById("todo");
const display = document.getElementById("unord-li");

function saveTodo() {
  const newTodo = input.value.trim();
  if (newTodo === "") return;

  todoArray.push(newTodo);
  input.value = ""; 

  let listItems = "";
  for (let i = 0; i < todoArray.length; i++) {
    listItems += `<li class="todo-item">${todoArray[i]}</li>`;
  }

  display.innerHTML = listItems;
}
