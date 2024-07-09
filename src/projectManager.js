import Project from "./project.js";
import modal from "./projectDOM.js";
import { loadProjectsFromLocalStorage, saveProjectsToLocalStorage } from './localStorage.js';

const taskSpace = document.getElementById('taskSpace');
const space = document.getElementById('space');
const title = document.getElementById('title');

export default class ProjectManager {
  constructor() {
    this.allProjectFolder = [];
    this.loadProjects();

    if (this.allProjectFolder.length === 0) {
      this.userData();
    }
  }

  userData() {
    const nameForm = document.getElementById('nameForm');
    nameForm.style.display = 'block';

    const userNameStorage = JSON.parse(localStorage.getItem('userName')) || 'User';
    localStorage.setItem('userName', JSON.stringify(userNameStorage));

    const navUserName = document.getElementById('navUserName');
    nameForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const userNameInput = document.getElementById('userName');
      const userName = userNameInput.value;

      if (userName) {
        localStorage.setItem('userName', JSON.stringify(userName));
        console.log('Name saved:', userName);

        this.addNewProject(0, 'Default', 'black');
        nameForm.style.display = 'none';
        this.displayer();
      } else {
        console.log('User name is empty.');
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = 'Name cannot be empty.';
      }
    });
  }

  homePage() {
    space.style.backgroundColor = '#cedbe9';
    title.innerHTML = 'Home';
    this.displayer();
  }

  allTodos() {
    space.innerHTML = '';
    title.innerText = 'All Todos';

    this.allProjectFolder.forEach(todo => {
      const allTodosVar = todo.project;
      if (allTodosVar === '') {
        space.innerHTML = '<h4>No Task Found</h4>';
      }
      Project.prototype.simpleDisplayer(allTodosVar);
    });
  }

  completedTask() {
    space.innerHTML = '';
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

    if (!completedTasksFound) {
      space.innerHTML = '<h4>No Completed Task Found</h4>';
    }
  }

  pendingTodo() {
    space.innerHTML = '';
    title.innerText = 'Pending Tasks';
    const today = new Date();
    const pendingTasks = [];

    this.allProjectFolder.forEach(projects => {
      projects.project.forEach(task => {
        const dueDate = new Date(task.dueDate);
        if (task.isCompleted === false && today <= dueDate) {
          pendingTasks.push(task);
        }
      });
    });

    if (pendingTasks.length > 0) {
      pendingTasks.forEach(task => {
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
    space.innerHTML = '';
    title.innerText = 'Today Tasks';

    this.allProjectFolder.forEach(projects => {
      projects.project.forEach(task => {
        if (task.dueDate === localDate) {
          Project.prototype.simpleDisplayer([task]);
        }
      });
    });
  }

  missedTasks() {
    space.innerHTML = '';
    title.innerText = 'Missed Tasks';
    const today = new Date();
    const missedTasks = [];

    this.allProjectFolder.forEach(projects => {
      projects.project.forEach(task => {
        const dueDate = new Date(task.dueDate);
        if (task.isCompleted === false && today > dueDate) {
          missedTasks.push(task);
          title.style.backgroundColor = 'red';
        }
      });
    });

    if (missedTasks.length > 0) {
      missedTasks.forEach(task => {
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

  deleteProject(index) {
    const comfirm = confirm('Are you sure you want to delete this Task?');
    if (comfirm) {
      this.allProjectFolder.splice(index, 1);
      this.saveProjects();
      this.projectPageandSideBarDOM(this.allProjectFolder);
      this.newProjectBtn();
    }
  }

  displayer() {
    space.innerHTML = '';
    title.innerHTML = 'Home';
    navUserName.textContent = JSON.parse(localStorage.getItem('userName'));

    space.style.backgroundColor = '';
    this.projectPageandSideBarDOM(this.allProjectFolder);
    this.newProjectBtn();
    this.newProjectForm(this.allProjectFolder);
    this.footer();
  }

  newProjectBtn() {
    const newProjectBtn = document.createElement('button');
    newProjectBtn.textContent = 'Add Project';
    newProjectBtn.id = 'addProject';
    newProjectBtn.className = 'btn btn-primary createNewProject';
    newProjectBtn.style.width = '100%';
    space.append(newProjectBtn);

    const createNewProject = document.querySelectorAll('.createNewProject');
    createNewProject.forEach(btn => {
      btn.addEventListener('click', () => {
        modal.openModal();
      });
    });
  }

  newProjectForm(project) {
    const saveBtnNewProject = modal.saveButton;
    saveBtnNewProject.addEventListener('click', () => {
      const name = modal.nameInput.value;
      const color = modal.colorSelect.value;
      const id = this.allProjectFolder.length + 1;

      const duplicateProject = this.allProjectFolder.find(item => item.name === name);

      if (duplicateProject) {
        alert('A project with this name already exists.');
      } else {
        this.addNewProject(id, name, color);
        this.projectPageandSideBarDOM(project);
        modal.closeModal();
        this.newProjectBtn();
      }
    });
  }

  getSelectedProjectArray(array) {
    Project.prototype.simpleDisplayer(array);
    this.saveProjects();
    return array;
  }

  refresher(disArray) {
    Project.prototype.simpleDisplayer(disArray);
    this.saveProjects();
  }

  projectPageandSideBarDOM(projects) {
    const newProjectUL = document.getElementById('newProjectUL');
    newProjectUL.innerHTML = '';
    space.innerHTML = '';
    title.innerText = 'My Projects';

    projects.forEach((project, index) => {
      // Sidebar Project List
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item';
      listItem.id = 'projectFolder';
      listItem.setAttribute('data-index', index);

      const icon = document.createElement('i');
      icon.className = 'fa-solid fa-folder project-icon';
      icon.style.color = project.color;

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
      deleteIcon.id = 'deleteProject';
      deleteIcon.style.padding = '5px';
      deleteIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        const index = parseInt(listItemTaskSpace.getAttribute('data-index'));
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

  footer() {
    const footer = document.createElement('footer');
    footer.innerHTML = '&copy; 2024 by Mo_Mansur ';

    const link = document.createElement('a');
    link.href = 'https://github.com/MoMansur';
    link.className = 'link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover';

    const linkText = document.createTextNode(' Mo_Mansur GitHub');
    link.appendChild(linkText);
    footer.appendChild(link);

    const remainingText = document.createTextNode('. All rights reserved.');
    footer.appendChild(remainingText);

    footer.style.textAlign = 'center';
    space.appendChild(footer);
  }
}
