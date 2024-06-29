import taskDOM from "./todoDOM.js"
import newProjectPopUpForm from "./taskForm.js"

const taskSpace = document.getElementById('taskSpace')

export class Project{
    constructor(id, name){
        this.id = id
        this.name = name
        this.project = []   
    }  
    addTasks(arr){
        this.project.push(arr)
       return this.project
    }
    displayer(){
        const array = this.project
        taskSpace.innerHTML = ""
        array.forEach(arrItem => {
            taskDOM(arrItem.title, arrItem.description, arrItem.dueDate, arrItem.priority)
        });
        taskSpace.append(newProjectPopUpForm())
        console.log(array)
        return array
    }
    deleteTask(){
        const indexAttribute = parseInt(taskSpace.getAttribute("data-index"));
        this.project.splice(indexAttribute, 1);
        displayer()
    }
}






 

