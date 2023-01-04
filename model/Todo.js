class Todo {
  static id = 1;
  constructor(desc, done = false) {
    this.id = Todo.id++;
    this.desc = desc;
    this.done = done;
    this.created = new Date();
    this.updated = new Date();
  }
}
