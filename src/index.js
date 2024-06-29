const taskSpace = document.getElementById('taskSpace')

import ProjectManager from "./projectManager.js";
import modal from "./projectDom.js";

import todoFunctions from "./functions.js";
import { Project } from "./project.js";

todoFunctions(taskSpace)

import createTask from './todo.js'

const newProjectManager = new ProjectManager();

// createTask(newProjectManager)

Project.prototype.newTask('Task 1', 'This is a description for task 1', '2024-07-15', 'High');

export function projectFunctionDisplayer(arr){
    for(let i=0; i<arr.length; i++){
        
    }
}

const createNewProject = document.getElementById('createNewProject')

createNewProject.addEventListener('click', ()=>{
    modal.openModal()
})

// const saveBtnNewProject = modal.saveButton

// saveBtnNewProject.addEventListener('click', ()=>{
//     ProjectManager.prototype.newProjectFunc()
// })


