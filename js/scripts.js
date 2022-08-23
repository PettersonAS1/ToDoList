// Seleção
  const todoForm = document.querySelector("#todo-form");
  const todoForm = document.querySelector("#todo-input");
  const todoForm = document.querySelector("#todo-list");
  const todoForm = document.querySelector("#edit-form");
  const todoForm = document.querySelector("#edit-input");
  const todoForm = document.querySelector("#cancel-edit-btn");
// Funções
const saveTodo = (text) => {

  const todo = document.createElement("div");
  todo.classList.add("todo");

  const todoTitle = document.createElement("h3");
  todoTitle.innerText = text;
  todo.appendChild(todoTitle);

}
//Eventos
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = todoInput.value;

  if (inputValue) {
    saveTodo(inputValue)
  }
})