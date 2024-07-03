import Project from "./project.js";
import modal from "./projectDom.js";
import { loadProjectsFromLocalStorage, saveProjectsToLocalStorage } from './localStorage.js';
import newProjectPopUpForm from "./taskForm.js";

export default class ProjectManager {
  constructor() {
    this.allProjectFolder = [];
    this.loadProjects();

    if (this.allProjectFolder.length === 0) {
      this.addNewProject(1, 'Default', 'white').newTask('Task 2', 'This is a description for task 2', '2024-07-20', 'Medium');
    }
    console.log(this.allProjectFolder);
  }

  allTodos(){
    space.innerHTML = ""

    title.innerText = 'All My Todos'
    this.allProjectFolder.forEach(todo =>{

      const allTodosVar = todo.project
      Project.prototype.simpleDisplayer(allTodosVar)
      console.log(allTodosVar)
    })
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
    this.domCreator();
  }

  domCreator() {
    this.projectPageandSideBarDOM(this.allProjectFolder);
    this.saveButton(this.allProjectFolder);
  }

  deleteProject(index) {
    this.allProjectFolder.splice(index, 1);
    this.saveProjects();
    this.projectPageandSideBarDOM(this.allProjectFolder);
  }

  saveButton(project) {
    const saveBtnNewProject = modal.saveButton;
    saveBtnNewProject.addEventListener('click', () => {
      const name = modal.nameInput.value;
      const color = modal.colorSelect.value;
      const id = this.allProjectFolder.length + 1;

      this.addNewProject(id, name, color);
      this.projectPageandSideBarDOM(project);
      modal.closeModal();
    });
  }

  getSelectedProjectArray(array) {
    let selectArray = array;
    this.selectedArrayDisplay(selectArray);

    this.saveProjects();
    return selectArray;
  }

  refresher() {
    space.innerHTML = "";
  }

  selectedArrayDisplay(selectArray) {
    space.append(newProjectPopUpForm(selectArray));
    Project.prototype.displayer(selectArray);
    Project.prototype.newTaskFormBtn(selectArray);
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
        this.getSelectedProjectArray(getProjectArray);
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
        this.saveProjects();
      });

      listItemTaskSpace.appendChild(deleteIcon);
      projectList.appendChild(listItemTaskSpace);

      listItemTaskSpace.addEventListener('click', () => {
        let getProjectArray = project.project;
        this.getSelectedProjectArray(getProjectArray);
        title.innerText = project.name;
      });

      space.append(projectList);
      newProjectUL.append(listItem);
    });
  }
}
