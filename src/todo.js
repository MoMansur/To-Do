// Importing ProjectManager from projectManager.js
import ProjectManager  from "./projectManager.js";

// // Create a new instance of ProjectManager and get the default project


export default class Task{
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
  
}


export function createTask(theProject, array){

  const newProjectManager = new ProjectManager()

  const newProject = newProjectManager.newProjectFunc()

  function displayer(arr) {
    arr.displayer();
  }
  
 function newTask(title, description, dueDate, priority) {
    const theNewTask = new Task(title, description, dueDate, priority);
    newProject.addTasks(theNewTask);
    displayer(newProject);

  }
  
  // Creating new tasks
  newTask('Task 1', 'This is a description for task 1', '2024-07-15', 'High');
  newTask('Task 2', 'This is a description for task 2', '2024-07-20', 'Medium');
  
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

