import projectArray from "./localStorage.js"
import newProjectPopUpForm from "./projectDOM.js";

console.log(projectArray())
console.log('hello')


// Assuming your 'createNewProject' button exists in your HTML
const createNewProject = document.createElement('button')

document.body.append(createNewProject)

// Event listener for createNewProject button
createNewProject.addEventListener('click', ()=>{
    newProjectPopUpForm()
    console.log('hello')
});
