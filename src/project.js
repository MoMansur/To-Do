import taskDOM from "./todoDOM.js";
import newTaskFormDOM from "./taskForm.js";

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


  simpleDisplayer(array){
    taskDOM(array)
  }
  
  displayer(array) {
    space.innerHTML = "";
    taskDOM(array)
    this.dom(array.name);
    newTaskFormDOM(array)
    this.newTaskFormBtn(array)
    return array;
  }


  newTaskFormBtn(selectArray){
    const addTaskBtn = document.getElementById('addTaskButton');
    addTaskBtn.addEventListener('click', () => {
      const theForm = newTaskFormDOM(selectArray);
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
    //<i class="fa-solid fa-circle-plus"></i>
    space.append(addTaskButton);
  }



}

