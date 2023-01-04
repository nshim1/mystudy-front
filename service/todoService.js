function domTodo(todoModel) {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  th.setAttribute("scope", "row");
  th.textContent = todoModel.id;
  tr.append(th);
  td1.textContent = todoModel.desc;
  tr.append(td1);
  td2.textContent = todoModel.created;
  tr.append(td2);
  td3.textContent = todoModel.updated;
  tr.append(td3);
  td4.innerHTML += `<button type="button" class="btn btn-success">Edit</button>
  <button type="button" class="btn btn-danger">Delete</button>`;
  tr.append(td4);
  return tr;
}

function renderTodoList(todos) {
  const todoList = document.getElementById("todo-list");
  todos.forEach((todo) => {
    todoList.append(domTodo(todo));
  });
}
function createTodo(todo) {
  const todoModel = new Todo(todo);

  renderTodoList([todoModel]);
}
