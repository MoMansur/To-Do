import Project from "./project.js";
import modal from "./projectDom.js";
import { loadProjectsFromLocalStorage, saveProjectsToLocalStorage } from './localStorage.js';

const taskSpace = document.getElementById('taskSpace')
const space = document.getElementById('space');
const title = document.getElementById('title')

export default class ProjectManager {
  constructor() {
    this.allProjectFolder = [];
    this.loadProjects();

    if (this.allProjectFolder.length === 0) {
    this.addNewProject(0,  'Default', 'black',)
    }

    console.log(this.allProjectFolder);
  }
//Methods Below

userData(){

}

homePage(){
  space.style.backgroundColor = '#cedbe9'
  title.innerHTML = `Home`
  this.displayer()
 
}

   allTodos(){
    space.innerHTML = ""
    title.innerText = 'All Todos'
    
   
    this.allProjectFolder.forEach(todo =>{
      const allTodosVar = todo.project
      if(allTodosVar === ''){space.innerHTML = '<h4>No Task Found</h4>'}
      Project.prototype.simpleDisplayer(allTodosVar)
      // this.getSelectedProjectArray(allTodosVar)
      console.log(allTodosVar)
    })
  }

  completedTask() {
    space.innerHTML = "";
    title.innerText = 'Completed Tasks';
    
    let completedTasksFound = false;
  
    this.allProjectFolder.forEach(projects => {
      projects.project.forEach(task => {
        if (task.isCompleted) {
          completedTasksFound = true;
          Project.prototype.simpleDisplayer([task]);

        }
      });

    });
    this.saveProjects();

  
    if (!completedTasksFound) {
      space.innerHTML = '<h4>No Completed Task Found</h4>';
    }
  }
  pendingTodo() {
    space.innerHTML = "";
    title.innerText = 'Pending Tasks';
  
    const today = new Date();
  
    const pendingTasks = [];
  
    this.allProjectFolder.forEach(projects => {
      projects.project.forEach(task => {
        const dueDate = new Date(task.dueDate); // Assuming task.dueDate is in a parseable date format
  
        if (task.isCompleted === false && today <= dueDate) {
          pendingTasks.push(task);
        }
      });
    });
  
    if (pendingTasks.length > 0) {
      pendingTasks.forEach(task => {
        // Assuming Project.prototype.simpleDisplayer takes an array of tasks and displays them
        Project.prototype.simpleDisplayer([task]);
      });
    } else {
      space.innerHTML = '<h4>No Pending Tasks Found</h4>';
    }
  }
  
  todayTodos() {
    const today = new Date();
    const options = {
      weekday: 'long',
      day: '2-digit', 
      month: '2-digit',
      year: 'numeric' 
    };
    const localDate = today.toLocaleDateString('en-GB', options); 
    space.innerHTML = "";
    title.innerText = 'Today Tasks';

    this.allProjectFolder.forEach(projects => {
      projects.project.forEach(task => {
        if (task.dueDate === localDate) {
          Project.prototype.simpleDisplayer([task]);
          console.log(task);
        }
      });
    });

    console.log(localDate); 
  }

  missedTasks(){
    space.innerHTML = "";
  title.innerText = 'Missed Tasks';
  const today = new Date();

  const missedTasks = [];

  this.allProjectFolder.forEach(projects => {
    projects.project.forEach(task => {
      const dueDate = new Date(task.dueDate); // Assuming task.dueDate is in a parseable date format

      if (task.isCompleted === false && today > dueDate) {
        missedTasks.push(task);
        title.style.backgroundColor = 'red'
      }
    });
  });

  if (missedTasks.length > 0) {
    missedTasks.forEach(task => {
      // Assuming Project.prototype.simpleDisplayer takes an array of tasks and displays them
      Project.prototype.simpleDisplayer([task]);
    });
  } else {
    space.innerHTML = '<h4>No Missed Tasks Found</h4>';
  }
  }

  loadProjects() {
    this.allProjectFolder = loadProjectsFromLocalStorage();
  }

  saveProjects() {
    saveProjectsToLocalStorage(this.allProjectFolder);
  }

  addNewProject(id, name, color) {
    const newProject = new Project(id, name, color);
    this.allProjectFolder.push(newProject);
    this.saveProjects();
    return newProject;
  }

  displayer() {
    space.innerHTML = "";
    title.innerHTML = `Home`

    space.style.backgroundColor = ''
    this.projectPageandSideBarDOM(this.allProjectFolder);
    this.newProjectBtn()
    this.footer()

  }

  newProjectBtn() {
    const newProjectBtn = document.createElement('button');
    newProjectBtn.textContent = 'Add Project';
    newProjectBtn.id = 'addProject';
    newProjectBtn.className = 'btn btn-primary';
    newProjectBtn.style.width = '100%';
    space.append(newProjectBtn);
  
    newProjectBtn.addEventListener('click', ()=>{
      modal.openModal()
      this.newProjectForm(this.allProjectFolder)
    })
  }

  deleteProject(index) {
    const comfirm = confirm('Are you sure you want to delete this Task?')
    if(comfirm){
      this.allProjectFolder.splice(index, 1);
      this.saveProjects();
      this.projectPageandSideBarDOM(this.allProjectFolder);
      this.newProjectBtn()
    }
  }

  newProjectForm(project) {
      const createNewProject = document.getElementById('createNewProject')
      createNewProject.addEventListener('click', ()=>{
      modal.openModal()
    })

    const saveBtnNewProject = modal.saveButton;
    saveBtnNewProject.addEventListener('click', () => {
      const name = modal.nameInput.value;
      const color = modal.colorSelect.value;
      const id = this.allProjectFolder.length + 1;

      this.addNewProject(id, name, color,);
      this.projectPageandSideBarDOM(project);
      modal.closeModal();
      this.newProjectBtn()
    });
  
  }

  getSelectedProjectArray(array) {
    Project.prototype.simpleDisplayer(array);
    this.saveProjects();
    return array;
  }

  refresher(disArray) {
    Project.prototype.simpleDisplayer(disArray)
    this.saveProjects()
  }

  projectPageandSideBarDOM(projects) {
  const newProjectUL = document.getElementById('newProjectUL');

  newProjectUL.innerHTML = "";
  space.innerHTML = "";
  title.innerText = 'My Projects';

  projects.forEach((project, index) => {
    // Sidebar Project List
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.id = 'projectFolder';
    listItem.setAttribute('data-index', index);

    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-folder project-icon'; 



    const projectName = document.createElement('span');
    projectName.className = 'project-name';
    projectName.textContent = project.name;

    listItem.append(icon);
    listItem.append(projectName);


    listItem.style.backgroundColor = 'White';
    listItem.addEventListener('click', () => {
      let getProjectArray = project.project;
      Project.prototype.displayer(getProjectArray);
      title.innerText = project.name;
    });

newProjectUL.append(listItem);

    // Main Space Project Cards
    const listItemTaskSpace = document.createElement('li');
    listItemTaskSpace.className = 'project-card';
    listItemTaskSpace.setAttribute('data-index', index);

    const cardIcon = document.createElement('i');
    cardIcon.className = 'fa-solid fa-folder project-card-icon';
    cardIcon.style.color = project.color; 
    listItemTaskSpace.append(cardIcon);

    const cardTitle = document.createElement('span');
    cardTitle.className = 'project-card-title';
    cardTitle.innerText = project.name;
    listItemTaskSpace.append(cardTitle);

    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa-solid fa-trash delete-icon';
    deleteIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      const index = parseInt(listItemTaskSpace.getAttribute("data-index"));
      this.deleteProject(index);
    });

    listItemTaskSpace.appendChild(deleteIcon);
    space.append(listItemTaskSpace);

    listItemTaskSpace.addEventListener('click', () => {
      let getProjectArray = project.project;
      Project.prototype.displayer(getProjectArray);
      title.innerText = project.name;
    });
  });
}

footer(){
  // Create the footer element
const footer = document.createElement('footer');
footer.innerHTML = '&copy; 2024 by Mo_Mansur ';

const link = document.createElement('a');
link.href = "https://github.com/MoMansur";
link.className = "link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover";

// Create the image element
// const img = document.createElement('img');
// img.src = "./img/github.png";
// img.alt = "github";

// // Append the image to the link
// link.appendChild(img);


const linkText = document.createTextNode(" Mo_Mansur GitHub");
link.appendChild(linkText);
footer.appendChild(link);

const remainingText = document.createTextNode(". All rights reserved.");
footer.appendChild(remainingText);

footer.style.textAlign = 'center'

space.appendChild(footer);

}
}

