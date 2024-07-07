import newTaskFormDOM from "./taskForm.js";
import createSettingsPage from "./settingsDom.js";


function todoFunctions(theDiv){
const settingsIcon = document.getElementById('settingsIcon');
const sideBaruserName = document.getElementById('userName');
const navUserName = document.getElementById('navUserName')
settingsIcon.addEventListener('click', ()=>{
    createSettingsPage(theDiv, userName)
})




};

export default todoFunctions