const taskSpace = document.getElementById('taskSpace')

// import { ProjectManager } from "./projectManager.js";
import modal from "./projectDom.js";

import todoFunctions from "./functions.js";

todoFunctions(taskSpace)


export function projectFunctionDisplayer(arr){
    for(let i=0; i<arr.length; i++){
        
    }
}

const createNewProject = document.getElementById('createNewProject')

createNewProject.addEventListener('click', ()=>{
    modal.openModal()

   
})

