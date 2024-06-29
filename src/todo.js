const taskSpace = document.getElementById('taskSpace')

// import { v4 as uuidv4 } from 'uuid';
import newProjectPopUpForm from "./taskForm.js";
import taskDOM from "./todoDOM.js";

const taskArr = []

export default class taskArray{
    constructor (title, description, dueDate, priority){
        // this.id = uuidv4()
        this.title = title;
        this.description = description;
        this.dueDate = dueDate
        this.priority = priority
}

displayer(arr){
    taskSpace.innerHTML = ""
    arr.forEach(arrItem => {
        taskDOM(arrItem.title, arrItem.description, arrItem.dueDate, arrItem.priority)
    });
    taskSpace.append(newProjectPopUpForm())
    console.log(taskArr)
}
}

function displayer(arr){
    taskSpace.innerHTML = ""
    arr.forEach(arrItem => {
        taskDOM(arrItem.title, arrItem.description, arrItem.dueDate, arrItem.priority)
    });
    taskSpace.append(newProjectPopUpForm())
    
}


export function newTask(title, description, dueDate, priority) {
    const theNewTask = new taskArray(title, description, dueDate, priority);
    taskArr.push(theNewTask);
    displayer(taskArr)
    console.log(taskArr)
 
}


export function deleteFunction(theCard) {
    const indexAttribute = parseInt(theCard.getAttribute("data-index"));
    var confirmToRemove = confirm('Are you sure you want to remove this Book?');

    if (confirmToRemove) {
        taskArr.splice(indexAttribute, 1);
        displayer(taskArr)
        console.log(taskArr)
    } else {
      displayer(taskArr)
      console.log(taskArr)

    }
}


