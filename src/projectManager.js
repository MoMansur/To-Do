import Project from "./project.js";
import modal from "./projectDom.js";
import { loadProjectsFromLocalStorage, saveProjectsToLocalStorage } from './localStorage.js';

const space = document.getElementById('space');



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

homePage(){
  this.getSelectedProjectArray(this.allProjectFolder)
  this.allTodos()
  title.innerHTML = `Home`

}
   allTodos(){
    space.innerHTML = ""
    title.innerText = 'All My Todos'
   
    this.allProjectFolder.forEach(todo =>{
      const allTodosVar = todo.project
      if(allTodosVar === ''){space.innerHTML = '<h4>No Task Found</h4>'}
      // Project.prototype.simpleDisplayer(allTodosVar)
      this.getSelectedProjectArray(allTodosVar)
      console.log(allTodosVar)
    })
  }

  completedTask() {
    space.innerHTML = "";
    title.innerText = 'All My Completed Tasks';
    
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

  pendingTodo(){
    space.innerHTML = "";
    title.innerText = 'All My Completed Tasks';
    
    this.allProjectFolder.forEach(projects => {
      projects.project.forEach(task => {
        if (task.isCompleted === false) {
          const arr = projects.project
          Project.prototype.simpleDisplayer(arr);
       
          if(arr === ''){space.innerHTML = '<h4>No Upcoming Task Found</h4>'}

        }
      });
    });
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
    this.projectPageandSideBarDOM(this.allProjectFolder);
    this.newProjectForm(this.allProjectFolder);  
  }

  deleteProject(index) {
    this.allProjectFolder.splice(index, 1);
    this.saveProjects();
    this.projectPageandSideBarDOM(this.allProjectFolder);
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
    });
  }

  getSelectedProjectArray(array) {
    Project.prototype.simpleDisplayer(array);

    this.saveProjects();
    return array;
  }

 

  refresher(disArray) {
    Project.prototype.displayer(disArray)
    this.saveProjects()
  }



  projectPageandSideBarDOM(projects) {
    const newProjectUL = document.getElementById('newProjectUL');
    newProjectUL.innerHTML = "";
    space.innerHTML = "";

    title.innerText = 'My Projects';
    title.style.alignItems = 'center';

    const projectList = document.createElement('ul');
    projectList.style.listStyleType = 'none';
    projectList.style.padding = '0';

    projects.forEach((project, index) => {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item';
      listItem.id = 'projectFolder';
      listItem.setAttribute('data-index', index);

      const icon = document.createElement('i');
      icon.className = 'fa-solid fa-hashtag';
      icon.style.color = project.color;
      icon.style.fontWeight = '100';
      listItem.append(icon);
      listItem.append(document.createTextNode(project.name));

      listItem.style.backgroundColor = 'White';
      listItem.addEventListener('click', () => {
        let getProjectArray = project.project;

        Project.prototype.displayer(getProjectArray);
        title.innerText = project.name;
      });

      const listItemTaskSpace = document.createElement('li');
      listItemTaskSpace.className = 'project-item';
      listItemTaskSpace.style.padding = '10px';
      listItemTaskSpace.style.borderBottom = '1px solid #ccc';
      listItemTaskSpace.innerText = project.name;
      listItemTaskSpace.setAttribute('data-index', index);

      const deleteIcon = document.createElement('i');
      deleteIcon.className = 'fa-solid fa-trash';
      deleteIcon.id = 'deleteIcon';
      deleteIcon.style.float = 'right';
      deleteIcon.style.cursor = 'pointer';

      deleteIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        const index = parseInt(listItemTaskSpace.getAttribute("data-index"));
        this.deleteProject(index);
      });

      listItemTaskSpace.appendChild(deleteIcon);
      projectList.appendChild(listItemTaskSpace);

      listItemTaskSpace.addEventListener('click', () => {
        let getProjectArray = project.project;
        Project.prototype.displayer(getProjectArray);
        title.innerText = project.name;
      });

      space.append(projectList);
      newProjectUL.append(listItem);
    });
  }
}

