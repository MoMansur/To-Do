import taskDOM from "./todoDOM.js";
import newProjectPopUpForm from "./taskForm.js";
import Task from "./todo.js";
const taskSpace = document.getElementById('taskSpace');

export default class Project {
  constructor(id, name, color) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.project = [];
  }

  newTask(title, description, dueDate, priority) {
    const theNewTask = new Task(title, description, dueDate, priority);
    this.project.push(theNewTask);
    this.displayer(this.project);
  }

  addTasks(task) {
    this.project.push(task)
  }

  displayer(array) {
    taskSpace.innerHTML = "";
    array.forEach(arrItem => {
      taskDOM(arrItem.title, arrItem.description, arrItem.dueDate, arrItem.priority);
    });
    return array;
  }

  dom() {
    const addTaskButton = document.createElement('button');
    addTaskButton.textContent = 'Add Task';
    addTaskButton.className = 'btn btn-primary';
    addTaskButton.style.width = '100%';
    taskSpace.appendChild(addTaskButton);
  }

  
}
