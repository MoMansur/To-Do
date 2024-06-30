const taskSpace = document.getElementById('taskSpace')

import Project from "./project.js"
import modal from "./projectDom.js"
export default class ProjectManager{
  constructor(){
    this.defaultProject = new Project(1, 'Default')
    this.newProject = new Project()
    this.allProjectFolder =[]
    this.allTask = []

    this.addNewProject(1, 'Default');
  }
    addNewProject(id, name, color) {
      this.newProject = new Project(id, name, color);
      this.allProjectFolder.push(this.newProject);
      return this.newProject;
    }

  deleteProject(id) {
    this.allProjectFolder = this.allProjectFolder.filter(project => project.id !== id);
    this.displayer();
  }
 

  displayer() {
    const newProjectUL = document.getElementById('newProjectUL');
    
      this.allProjectFolder.forEach((project) => {
        newProjectUL.innerHTML = ''
      this.liCreate(project, 'white', project.name)
      this.saveButtun(project)

      
    });
    console.log(this.allProjectFolder);
  }
   saveButtun(project,){

    const saveBtnNewProject = modal.saveButton
    saveBtnNewProject.addEventListener('click', ()=>{
      const name = modal.nameInput.value
      const color = modal.colorSelect
      const id = this.allProjectFolder.length + 1
      this.addNewProject(id, name, color.value)
      console.log(this.allProjectFolder)
       
        this.liCreate(project, color, name)
        modal.closeModal()
  })
   }

   liCreate(project, color, name){
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
        let get = project.project;
        Project.prototype.displayer(get);
        this.getSelectedProjectArray(get);
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
