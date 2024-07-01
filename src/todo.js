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



