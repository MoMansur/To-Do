const taskSpace = document.getElementById('taskSpace')

import modal from "./projectDom.js";
import todoFunctions from "./functions.js";
todoFunctions(taskSpace)

import ProjectManager from "./projectManager.js";
import Project from "./project.js";
import { createTask } from "./todo.js"

const myProjectManager = new ProjectManager();
myProjectManager.displayer()



const createNewProject = document.getElementById('createNewProject')
createNewProject.addEventListener('click', ()=>{
    modal.openModal()
})


export function displayTaskSpace(projects) {
    // Create the main container for the task space
    taskSpace.innerHTML = ""

    const homePage = document.createElement('div');
    homePage.id = 'homePage';
    homePage.style.padding = '20px';
    homePage.style.border = '1px solid #ccc';
    homePage.style.borderRadius = '5px';
  
    // Create and append the title
    const title = document.createElement('h2');
    title.innerText = 'My Todos Project';

    
    homePage.appendChild(title);
  
    // Create and append the list container
    const projectList = document.createElement('ul');
    projectList.style.listStyleType = 'none';
    projectList.style.padding = '0';
  
    // Loop through the projects array and create list items for each project
    projects.forEach((project, index) => {
      const listItem = document.createElement('li');
      listItem.className = 'project-item';
      listItem.style.padding = '10px';
      listItem.style.borderBottom = '1px solid #ccc';
        listItem.innerText = project.name;
        listItem.setAttribute('data-index', index);

        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-solid fa-trash';
        deleteIcon.id = 'deleteIcon';
        deleteIcon.style.float = 'right';
        deleteIcon.style.cursor = 'pointer';

        deleteIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log()
          });
        listItem.appendChild(deleteIcon);
        projectList.appendChild(listItem);

    listItem.addEventListener('click', ()=>{
        const index = parseInt(listItem.getAttribute('data-index'))
        console.log(index)
        let get = project.project;
        Project.prototype.displayer(get);
        ProjectManager.prototype.getSelectedProjectArray(get);
    
    })

    deleteIcon.addEventListener('click', ()=>{
            const indexAttribute = parseInt(listItem.getAttribute("data-index"));
            // projects.splice(indexAttribute, 1);
            
            // console.log(projects)
            // taskSpace.innerHTML = ''
            // ProjectManager.prototype.displayer()

            ProjectManager.prototype.deleteProject(indexAttribute)
    })
      

    });
  // Append the project list to the task space container
    homePage.appendChild(projectList);
  
    // Append the task space to the body or a specific container in your HTML
    taskSpace.appendChild(homePage);

   
  }
  
  
  
  


// const form = newProjectPopUpForm().form

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     ProjectManager.prototype.newTask(titleInput.value, descriptionInput.value, prioritySelect.value, dueDateInput.value)
    
//     console.log('kkk')

// });


