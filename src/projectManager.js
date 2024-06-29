import modal from "./projectDom.js"
import { Project } from "./project.js"

import { projectFunctionDisplayer } from "./index.js"

export class ProjectManager{
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

    

    displayer(){ 
        this.allProjectFolder.forEach(project => {
            modal.addProjectUI(project.name)          
        });
        console.log(this.allProjectFolder)
    }
}

const myProjectManager = new ProjectManager();

myProjectManager.newProjectFunc(2, 'Round 2');
myProjectManager.newProjectFunc(3, 'Round 3');

myProjectManager.displayer();


// projectFunctionDisplayer(this.allProjectFolder)