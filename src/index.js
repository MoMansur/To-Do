const taskSpace = document.getElementById('taskSpace')

import modal from "./projectDom.js";
import todoFunctions from "./functions.js";
todoFunctions(taskSpace)

import ProjectManager from "./projectManager.js";
import Project from "./project.js";



const myProjectManager = new ProjectManager();



myProjectManager.displayer();



const createNewProject = document.getElementById('createNewProject')
createNewProject.addEventListener('click', ()=>{
    modal.openModal()
})




// const form = newProjectPopUpForm().form

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     ProjectManager.prototype.newTask(titleInput.value, descriptionInput.value, prioritySelect.value, dueDateInput.value)
    
//     console.log('kkk')

// });


