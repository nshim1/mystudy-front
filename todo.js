console.log("external js");

const state = {
  todo: "",
};
const ids = {
  todoInput: "todo-input",
  todoForm: "todo-form",
};

const eventHandler = {
  todoSubmitHandler: function (e) {
    e.preventDefault();
    const todo = document.getElementById(ids.todoInput);
    console.log("submit:", state.todo);
    todo.value = "";
  },
  todoInputHandler: function (e) {
    state.todo = e.target.value;
  },
};

function registerEventHandler(id, eventType, handler) {
  const targetElement = document.getElementById(id);
  targetElement.addEventListener(eventType, handler);
  return targetElement;
}
// const todoForm = document.getElementById(ids.todoForm);
// const todoInput = document.getElementById(ids.todoInput);
registerEventHandler(ids.todoForm, "submit", eventHandler.todoSubmitHandler);
registerEventHandler(ids.todoInput, "input", eventHandler.todoInputHandler);
