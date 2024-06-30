import taskDOM from "./todoDOM.js"
import newProjectPopUpForm from "./taskForm.js"
import Task from "./todo.js";


const taskSpace = document.getElementById('taskSpace')

export default class Project {
    constructor(id, name) {
      this.id = id;
      this.name = name;
      this.project = [];
      this.displayer(this.project)
    }
  
    addTasks(arr) {
      this.project.push(arr);
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
    newTask(title, description, dueDate, priority) {
      const theNewTask = new Task(title, description, dueDate, priority);
      this.project.push(theNewTask);
      this.displayer(this.project);
    }
      
  }

 




 

