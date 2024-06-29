const taskSpace = document.getElementById('taskSpace')

import projectArray from "./localStorage.js"
import newProjectPopUpForm from "./taskForm.js";

// import './css/projectDOM.css';


import taskDOM from "./todoDOM.js";

import createSettingsPage from "./settings.js";


const settingsIcon = document.getElementById('settingsIcon');
const userName = document.getElementById('userName');

settingsIcon.addEventListener('click', ()=>{
    createSettingsPage(taskSpace, userName)

})


const addTaskBtn = document.getElementById('addTask')

let isOn =  true
addTaskBtn.addEventListener('click', ()=>{
    if(isOn){
        taskSpace.append(newProjectPopUpForm())
    }else{
       newProjectPopUpForm().remove()
    }
    isOn = !isOn

})
