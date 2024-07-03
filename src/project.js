import taskDOM from "./todoDOM.js";
import newProjectPopUpForm from "./taskForm.js";

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

  addTasks(task) {
    this.project.push(task);
    this.saveTasks();
  }

  simpleDisplayer(array){
    taskDOM(array)

  }
  displayer(array) {
    space.innerHTML = "";
    taskDOM(array)
    this.dom(array.name);
    return array;
  }

  
  deleteProject(){
  ProjectManager.prototype.saveProjects()

  }
 

  newTaskFormBtn(selectArray){
    const addTaskBtn = document.getElementById('addTaskButton');
    addTaskBtn.addEventListener('click', () => {
      const theForm = newProjectPopUpForm(selectArray);
      space.append(theForm);
      theForm.style.display = 'block';
    });
  }

  dom() {
    const addTaskButton = document.createElement('button');
    addTaskButton.textContent = 'Add Task';
    addTaskButton.id = 'addTaskButton';
    addTaskButton.className = 'btn btn-secondary';
    addTaskButton.style.width = '100%';
    space.append(addTaskButton);
  }


  getSelectedTask(array, index){
    const theIndex = array[index]
    console.log(theIndex)
    return theIndex
  }

  

}

