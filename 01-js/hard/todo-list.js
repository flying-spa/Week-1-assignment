/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.todos = [];
  }
  add(todo) {
    this.todos.push(todo)
  }
  remove(indexOfTodo) {
    this.todos.splice(indexOfTodo, 1);
  }
  update(index, updatedTodo) {
    this.todos.splice(index, 1, updatedTodo);
  }
  getAll() {
    return this.todos;
  }
  clear() {
    this.todos = [];
    return this.todos;
  }

}

// var todo = new Todo();

// //add some todos
// todo.add({
//   "title": "gym",
//   "description": "workout from 6-7pm"
// })
// todo.add({"title": "work",
// "description": "work from 8-9pm"})
// console.log(todo.getAll());

// //udpate some existing todos
// todo.update(1, {
//   "title": "office-work",
//   "description": "work from 8-11pm"
// })
// console.log(todo.getAll()[1]);

// //remove the todo present at a certain index
// todo.remove(1);
// console.log(todo.getAll());

// //clear the todo list
// todo.clear();
// console.log(todo.clear());


 module.exports = Todo;
