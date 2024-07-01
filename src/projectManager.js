const taskSpace = document.getElementById('taskSpace')

import Project from "./project.js"
import modal from "./projectDom.js"
import { displayTaskSpace } from "./index.js"

export default class ProjectManager{
  constructor(){
    this.defaultProject = new Project(1, 'Default')
    this.newProject = new Project()
    this.allProjectFolder =[]
    this.allTask = []

    this.addNewProject(1, 'Default').newTask('Task 2', 'This is a description for task 2', '2024-07-20', 'Medium')
  }
    addNewProject(id, name, color) {
      this.newProject = new Project(id, name, color);
      this.allProjectFolder.push(this.newProject);
      return this.newProject;
    }

  deleteProject(id) {
    this.allProjectFolder = this.allProjectFolder.filter(project => project.project.id !== id);
    this.displayer();
  }
 

  displayer() {
    const newProjectUL = document.getElementById('newProjectUL');
    newProjectUL.innerHTML = "";
  
    this.allProjectFolder.forEach((project) => {
      this.liCreate(project, 'white', project.name);
      this.saveButton(project);
    });
  
    displayTaskSpace(this.allProjectFolder);
  }
  
  saveButton(project) {
    const saveBtnNewProject = modal.saveButton;
    saveBtnNewProject.addEventListener('click', () => {
      const name = modal.nameInput.value;
      const color = modal.colorSelect.value;
      const id = this.allProjectFolder.length + 1;
      
      this.addNewProject(id, name, color);
      this.liCreate(project, color, name);
      displayTaskSpace(this.allProjectFolder);
   
      modal.closeModal();
      console.log(this.allProjectFolder, id)
    });
  }
  
  liCreate(project, color, name) {
    const newProjectUL = document.getElementById('newProjectUL');

  
    let id = this.allProjectFolder.length

      const listItem = document.createElement('li');
      listItem.className = 'list-group-item';
      listItem.id = 'projectFolder';
      listItem.setAttribute('data-index', id);

      const icon = document.createElement('i');
      icon.className = 'fa-solid fa-hashtag';
      listItem.append(icon);
      listItem.append(document.createTextNode(name));

      const deleteIcon = document.createElement('i');
      deleteIcon.className = 'fa-solid fa-trash';
      deleteIcon.id = 'deleteIcon';
      deleteIcon.style.float = 'right';
      deleteIcon.style.cursor = 'pointer';
      
      deleteIcon.addEventListener('click', (e) => {
        // e.stopPropagation();
        this.deleteProject(project.id);
      });
      listItem.append(deleteIcon);

      listItem.style.backgroundColor = color

      listItem.addEventListener('click', () => {
        let getProjectArray = project.project;
        Project.prototype.displayer(getProjectArray);
        this.getSelectedProjectArray(getProjectArray);
      });
      newProjectUL.append(listItem);
     return listItem
   }
    
    getSelectedProjectArray(array){
      let selectArray = array
      console.log(selectArray)
      return selectArray
    }

    createTaskSpace(id, name){
      taskSpace.innerHTML = ""
      this.addNewProject(id, name)
    }
  
  
  
}
