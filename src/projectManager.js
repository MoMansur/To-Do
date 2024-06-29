import modal from "./projectDom.js"
import { Project } from "./project.js"

// import { projectFunctionDisplayer } from "./index.js"


const taskSpace = document.getElementById('taskSpace')


export default class ProjectManager{
  constructor(){
    this.defaultProject = new Project(1, 'Default')
    this.newProject = new Project()

    this.allProjectFolder =[]
    this.allTask = []

    this.newProjectFunc(1, 'Default');
  }
   
    newProjectFunc(id, name) {
      this.newProject = new Project(id, name);
      this.allProjectFolder.push(this.newProject);
      return this.newProject;
    }

    
    getProjects(){
      const projectFolder = document.querySelectorAll('#projectFolder')

      projectFolder.forEach((folderDom, index) =>{
        folderDom.addEventListener('click', ()=>{
          taskSpace.innerHTML = ""
          const reBox = this.allProjectFolder[index]
          console.log(reBox)
          reBox.prototype.displayer()
        })
      })
    }
    displayer(index){ 
      const button = document.createElement('button');
      button.innerText = 'Add New Task';
      button.id = 'addTaskButton';
      button.className = 'btn btn-primary';
      //   button.addEventListener('click', () => {
      //   console.log('Add New Task button clicked!');
      // });
      
        this.allProjectFolder.forEach(project => {
            taskSpace.innerHTML = ""
           
            modal.addProjectUI(project.name, index)  
            taskSpace.append(button)        
        });
        console.log(this.allProjectFolder)
    }
   
}

const myProjectManager = new ProjectManager();



myProjectManager.newProjectFunc(2, 'Round 2');
myProjectManager.newProjectFunc(3, 'Round 3');

myProjectManager.displayer();
myProjectManager.getProjects()


// projectFunctionDisplayer(this.allProjectFolder)

// createTask(myProjectManager)