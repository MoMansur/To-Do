import taskDOM from "./todoDOM.js";
import newProjectPopUpForm from "./taskForm.js";
import Task from "./todo.js";
import { saveTasksToLocalStorage } from './localStorage.js';
import ProjectManager from "./projectManager.js";

const space = document.getElementById('space');
const title = document.getElementById('title');

export default class Project {
  constructor(id, name, color) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.project = [];
  }

  newTask(title, description, dueDate, priority, isCompleted) {
  }

  newTaskFormBtn(selectArray){
    const addTaskBtn = document.getElementById('addTaskButton');
    addTaskBtn.addEventListener('click', () => {
      const theForm = newProjectPopUpForm(selectArray);
      space.append(theForm);
      theForm.style.display = 'block';
    });
    console.log(selectArray);
  }

  deleteProject(){
    this.saveTasks();

  }

  addTasks(task) {
    this.project.push(task);
    this.saveTasks();
  }

  saveTasks() {
    saveTasksToLocalStorage(this.name, this.project);
  }

  displayer(array) {
    space.innerHTML = "";

    array.forEach(arrItem => {
      taskDOM(arrItem.title, arrItem.description, arrItem.dueDate, arrItem.priority, arrItem.completed);
    });
    this.dom(array.name);

    this.getSelectedTask(array, 0)
    return array;
  }

  dom(projectName) {
    const addTaskButton = document.createElement('button');
    addTaskButton.textContent = 'Add Task';
    addTaskButton.id = 'addTaskButton';
    addTaskButton.className = 'btn btn-primary';
    addTaskButton.style.width = '100%';
    space.append(addTaskButton);
  }

  getSelectedTask(array, index){
    const theIndex = array[index]
    console.log(theIndex)
    return theIndex
  }

  editTask(title, description, dueDate, priority, isCompleted = false){

  }
}

