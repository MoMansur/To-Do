const taskSpace = document.getElementById('taskSpace')


// import { v4 as uuidv4 } from 'uuid';
import modal from "./projectDom.js";

import todoFunctions from "./functions.js";

todoFunctions(taskSpace)


const createNewProject = document.getElementById('createNewProject')

createNewProject.addEventListener('click', ()=>{
    modal.openModal()
})

