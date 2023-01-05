function convertDateFormat(date) {
  function zeroFormat(value) {
    // if (value < 10) {
    //   return `0${value}`;
    // }
    // return `${value}`;
    return value < 10 ? `0${value}` : `${value}`;
  }
  //date() value object 로 return 될때
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${zeroFormat(month)}-${zeroFormat(day)}`;
}

function convertDateFromString(date) {
  //<date>parameter: string 일대 slice usable
  //server 에서 data transfer 될때는 is comes as a string
  console.log(date);
  return date.slice(0, 10);
}

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
  if (typeof todoModel.created === "string") {
    td2.textContent = convertDateFromString(todoModel.created);
    td3.textContent = convertDateFromString(todoModel.updated);
  } else {
    td2.textContent = convertDateFormat(todoModel.created);
    td3.textContent = convertDateFormat(todoModel.created);
  }

  tr.append(td2);

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
async function getTodos() {
  const res = await fetch("http://localhost:4000/todos").then((res) =>
    res.json()
  );
  renderTodoList(res.todos);
}
