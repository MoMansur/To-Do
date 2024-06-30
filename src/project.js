import taskDOM from "./todoDOM.js"
import newProjectPopUpForm from "./taskForm.js"
import Task from "./todo.js";


const taskSpace = document.getElementById('taskSpace')

export default class Project {
    constructor(id, name, color) {
      this.id = id;
      this.name = name;
      this.color = color
      this.project = [];
      this.displayer(this.project)
    }

    newTask(title, description, dueDate, priority) {
      const theNewTask = new Task(title, description, dueDate, priority);
      this.project.push(theNewTask);
      // this.addTasks(theNewTask); 
      this.displayer(this.project);
    }
    addTasks(task) {
      // Using the length property to add a task
      this.project[this.project.length] = task;
    }
    
    collector(title, description, dueDate, priority){
      const collect = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority
      }
      this.addTasks(collect)
    }

    displayer(array) {
      taskSpace.innerHTML = "";
      array.forEach(arrItem => {
        taskDOM(arrItem.title, arrItem.description, arrItem.dueDate, arrItem.priority);
      });
      taskSpace.append(newProjectPopUpForm().form);
      return array;
    }
      
    deleteTask(index) {
      if (index >= 0 && index < this.project.length) {
        this.project.splice(index, 1);
        this.displayer();
      } else {
        console.error('Index out of bounds');
      }
    }
  }

 




 

