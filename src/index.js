const taskSpace = document.getElementById('taskSpace')

import modal from "./projectDom.js";
import todoFunctions from "./functions.js";


import ProjectManager from "./projectManager.js";


const myProjectManager = new ProjectManager();


myProjectManager.displayer()












todoFunctions(taskSpace)


const createNewProject = document.getElementById('createNewProject')
createNewProject.addEventListener('click', ()=>{
    modal.openModal()
})

