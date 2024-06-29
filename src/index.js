// import { v4 as uuidv4 } from 'uuid';
const container = document.getElementById('container')

class Project{
    constructor(id, name){
        this.id = id
        this.name = name
        this.project = []   
    }  
    addTasks(arr){
        this.project.push(arr)
       return this.project
    }
    displayTask(){
        console.log(this.project)
        return this.project
    }
}
class ProjectManager{
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
}
const newProjectManager = new ProjectManager()


class taskArray{
    constructor (title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate
        this.priority = priority
    }
}


const newProject = newProjectManager.defaultProject

console.log(newProject)

function newTask(title, description, dueDate, priority) {
    const theNewTask = new taskArray(title, description, dueDate, priority);
    
    newProject.addTasks(theNewTask)
    newProject.displayTask()
}

 newTask(3,2,3,4)
 newTask(3,4,3,4)
 newTask(3,2,3,4)
 newTask(3,4,3,4)

 
const testBtn = document.getElementById('testBtn')



newProjectManager.allProjects()