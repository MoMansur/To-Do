// import { v4 as uuidv4 } from 'uuid';

class Project{
    constructor(id, name){
        this.id = id
        this.name = name
        this.project = []
        
    }  
    pushNewTask(arr){
        this.project.push(arr)
       return this.project
    }
    displayTask(){
        console.log(this.project)
    }
}

class taskArray{
    constructor (title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate
        this.priority = priority
    }
}

const newProject = new Project(2, 'Test')


function newProjectFunc(arr){
    newProject.pushNewTask(arr)
    newProject.displayTask()
}

function newTask(title, description, dueDate, priority) {
    const theNewTask = new taskArray(title, description, dueDate, priority);
  
    newProjectFunc(theNewTask)
}

 newTask(3,2,3,4)
 newTask(3,4,3,4)
 newTask(3,2,3,4)
 newTask(3,4,3,4)
 
const testBtn = document.getElementById('testBtn')

class ProjectManager{
    constructor(){
        this.list = []
        this.allTask = []
    }
}

