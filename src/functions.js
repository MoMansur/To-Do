import newTaskFormDOM from "./taskForm.js";
import createSettingsPage from "./settings.js";


function todoFunctions(theDiv){
const settingsIcon = document.getElementById('settingsIcon');
const userName = document.getElementById('userName');
settingsIcon.addEventListener('click', ()=>{
    createSettingsPage(theDiv, userName)
})


// const addTaskBtn = document.getElementById('addTask')
// let isOn =  true
// addTaskBtn.addEventListener('click', ()=>{
//     if(isOn){
//         theDiv.appendChild(newTaskFormDOM())
//     }else{
//        newTaskFormDOM().remove()
//     }
//     isOn = !isOn
// })


};

export default todoFunctions