import modal from "./projectDom.js"
import { Project } from "./project.js"

export class ProjectManager{
    constructor(){
        this.allProjectsArr = []
        this.newProject = new Project()
        this.defaultProject = new Project(1, 'Default')
        this.allTask = []
    }
    newProjectFunc(id, name){
        this.newProject = new Project(id, name)
        return this.newProject
    }
    allProjects(){
        this.allProjectsArr.push(this.newProject)
        console.log(this.allProjectsArr)
    }
    displayer(){
            modal.addProjectUI('Hello')
    }
}
ProjectManager.prototype.displayer()
