const taskSpace = document.getElementById('taskSpace')

import Project from "./project.js"
import modal from "./projectDom.js"
import { displayTaskSpace } from "./index.js"
import { loadProjectsFromLocalStorage, saveProjectsToLocalStorage } from './localStorage.js'


export default class ProjectManager{
  constructor(){
    this.defaultProject = new Project(0, 'Default', 'white')
    this.newProject = []
    this.allProjectFolder = []
    this.loadProjects();
    this.allTask = []

    if (this.allProjectFolder.length === 0) {
      this.addNewProject(1, 'Default', 'white').newTask('Task 2', 'This is a description for task 2', '2024-07-20', 'Medium');
    }
    console.log(this.allProjectFolder)
  }
  
  loadProjects() {
    this.allProjectFolder = loadProjectsFromLocalStorage();
  }

  saveProjects() {
    saveProjectsToLocalStorage(this.allProjectFolder);
  }


    addNewProject(id, name, color) {
      this.newProject = new Project(id, name, color);
      this.allProjectFolder.push(this.newProject);
      this.saveProjects();
      return this.newProject;
    }

  displayer() {  
    this.allProjectFolder.forEach((project) => {
     this.domCreator()
    });
    
    console.log(this.allProjectFolder)
  }

  deleteProject(index) {
    this.allProjectFolder = this.allProjectFolder.filter((_, i) => i !== index);
    this.saveProjects();
    this.displayer(); // Update the display after deletion
  }
  
  
  domCreator(){
    this.liCreate(this.allProjectFolder);
    this.saveButton(this.allProjectFolder);
    displayTaskSpace(this.allProjectFolder);
  }

  saveButton(project) {
    const saveBtnNewProject = modal.saveButton;
    saveBtnNewProject.addEventListener('click', () => {
      const name = modal.nameInput.value;
      const color = modal.colorSelect.value;
      const id = this.allProjectFolder.length + 1;
      
      this.addNewProject(id, name, color);
      this.liCreate(project)
      displayTaskSpace(this.allProjectFolder);   
      modal.closeModal();
    });
  }
  
  liCreate(projects) {
    const newProjectUL = document.getElementById('newProjectUL');
    newProjectUL.innerHTML = ""

    projects.forEach((project, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.id = 'projectFolder';
    listItem.setAttribute('data-index', index);

    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-hashtag';
    icon.style.color = project.color
    icon.style.fontWeight = '100'
    listItem.append(icon);
    listItem.append(document.createTextNode(project.name));

    listItem.style.backgroundColor = 'White'
    listItem.addEventListener('click', () => {
      let getProjectArray = project.project;
      this.getSelectedProjectArray(getProjectArray);
      Project.prototype.displayer(getProjectArray);
    });
    newProjectUL.append(listItem);
    })
   }
    
    getSelectedProjectArray(array){
      let selectArray = array
      console.log(selectArray)
      return selectArray
    }

    refresher(){
      taskSpace.innerHTML = ""
      this.displayer()
    }
}
