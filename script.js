var input = document.getElementById("text-input");
var list = document.getElementById("to-do-list");
var deleteI = document.getElementById("deleteI");
var nr = document.getElementById("number-todo");

var todos = 0;

function inportTodo() {
  if (input.value) {
    updateList(input.value);
    todos++;
    nr.innerHTML = `${todos} Items`;
  }
}

function deleteItem(del) {
  del.parentElement.remove();
  todos--;
  nr.innerHTML = `${todos} Items`;
}

function clearAll() {
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
  todos = 0;
  nr.innerHTML = `${todos} Items`;
}

function checkB(check) {
  check.classList.toggle("checkbox-round-select-checked");
}

function updateList(text) {
  var html = "";
  html += `<div id="todoI">
  <input type="checkbox" onclick="checkB(this)" class="checkbox-round checkbox-round-select" />
    <a class="todo-text">${text}</a>
    <button onclick="deleteItem(this)" class="checkbox-round checkbox-round-delete">X</button>
    </div>`;
  list.innerHTML += html;
}

nr.innerHTML = `${todos} Items`;
