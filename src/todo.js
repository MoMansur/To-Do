// Importing ProjectManager from projectManager.js
import { ProjectManager } from "./projectManager.js";

// Create a new instance of ProjectManager and get the default project
const newProjectManager = new ProjectManager();
const newProject = newProjectManager.defaultProject;

// Define a class for task arrays
export default class TaskArray {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

function displayer(arr) {
  arr.displayer();
}

export function newTask(title, description, dueDate, priority) {
  const theNewTask = new TaskArray(title, description, dueDate, priority);
  newProject.addTasks(theNewTask);
  displayer(newProject);
}

export function deleteFunction(theCard) {
  const indexAttribute = parseInt(theCard.getAttribute("data-index"));
  const confirmToRemove = confirm('Are you sure you want to remove this task?');

  if (confirmToRemove) {
    newProject.project.splice(indexAttribute, 1);
    displayer(newProject);
    console.log(newProject);
  } else {
    displayer(newProject);
    console.log(newProject);
  }
}

// Creating new tasks
newTask('Task 1', 'This is a description for task 1', '2024-07-15', 'High');
newTask('Task 2', 'This is a description for task 2', '2024-07-20', 'Medium');
