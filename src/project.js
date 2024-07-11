import taskDOM from "./todoDOM.js";
import newTaskFormDOM from "./taskForm.js";

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
    this.dom();
    newTaskFormDOM(array)
    this.newTaskFormBtn(array)
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
    space.append(addTaskButton);
  }



}
