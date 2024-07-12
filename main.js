/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   theManager: () => (/* binding */ theManager)
/* harmony export */ });
/* harmony import */ var _projectManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager.js */ "./src/projectManager.js");


// Initialize ProjectManager
const myProjectManager = new _projectManager_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
if (myProjectManager.allProjectFolder.length >= 1) {
  myProjectManager.displayer()
}

// Export function to access ProjectManager
const theManager = () => myProjectManager;

// // Selecting elements by ID
const taskSpace = document.getElementById('taskSpace');
const allTodosItem = document.querySelectorAll('.allTodos');
const todayItem = document.querySelectorAll('.TodayTodos');
const completedItem = document.querySelectorAll('.CompletedTodo');
const upcomingItem = document.querySelectorAll('.UpcomingTodo');
const missedItem = document.querySelectorAll('.MissedTodo');
const homePage = document.querySelectorAll('.homePage');

const sidebarContainer = document.getElementById('sidebarContainer');
const sidebarIcon = document.getElementById('sidebarIcon');
const mainSpaceCol = document.getElementById('mainSpaceCol');
const navMenuRow = document.getElementById('navMenuRow');


// Event Listeners
homePage.forEach(menu => menu.addEventListener('click', () => {
  myProjectManager.homePage();
  myProjectManager.saveProjects();
}));

allTodosItem.forEach(menu => menu.addEventListener('click', () => {
  myProjectManager.allTodos();
  myProjectManager.saveProjects();
}));

todayItem.forEach(menu => menu.addEventListener('click', () => {
  console.log('Today item clicked');
  myProjectManager.todayTodos();
  myProjectManager.saveProjects();
}));

completedItem.forEach(menu => menu.addEventListener('click', () => {
  myProjectManager.completedTask();
  myProjectManager.saveProjects();
}));

upcomingItem.forEach(menu => menu.addEventListener('click', () => {
  myProjectManager.pendingTodo();
}));

missedItem.forEach(menu => menu.addEventListener('click', () => {
  // Handle click on Missed item
  myProjectManager.missedTasks()
}));

let isClicked = true
sidebarIcon.addEventListener('click', () => {
  if (isClicked) {
    sidebarContainer.style.display = 'none';
    mainSpaceCol.className = 'col-12';
    navMenuRow.style.display = 'block';
    taskSpace.style.padding = '10px';
  } else {
    sidebarContainer.style.display = 'block';
    mainSpaceCol.className = 'col-10';
    navMenuRow.style.display = 'none';
  }
  isClicked = !isClicked;
});






/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadProjectsFromLocalStorage: () => (/* binding */ loadProjectsFromLocalStorage),
/* harmony export */   saveProjectsToLocalStorage: () => (/* binding */ saveProjectsToLocalStorage)
/* harmony export */ });
function loadProjectsFromLocalStorage() {
  const projects = localStorage.getItem('projects');
  return projects ? JSON.parse(projects) : [];
}

function saveProjectsToLocalStorage(allProjectFolder) {
  localStorage.setItem('projects', JSON.stringify(allProjectFolder));
}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _todoDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoDOM.js */ "./src/todoDOM.js");
/* harmony import */ var _taskForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskForm.js */ "./src/taskForm.js");



const space = document.getElementById('space');
const title = document.getElementById('title');

class Project {
  constructor(id, name, color) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.project = [];
  }


  simpleDisplayer(array){
    (0,_todoDOM_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array)
  }
  
  displayer(array) {
    space.innerHTML = "";
    (0,_todoDOM_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array)
    this.dom();
    (0,_taskForm_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array)
    this.newTaskFormBtn(array)
  }


  newTaskFormBtn(selectArray){
    const addTaskBtn = document.getElementById('addTaskButton');
    addTaskBtn.addEventListener('click', () => {
      const theForm = (0,_taskForm_js__WEBPACK_IMPORTED_MODULE_1__["default"])(selectArray);
      space.append(theForm);
      theForm.style.display = 'block';
    });
  }

  dom() {
    const addTaskButton = document.createElement('button');
    addTaskButton.textContent = 'Add Task';
    addTaskButton.id = 'addTaskButton';
    addTaskButton.className = 'btn btn-secondary';
    addTaskButton.style.width = '100%';
    space.append(addTaskButton);
  }



}


/***/ }),

/***/ "./src/projectDOM.js":
/*!***************************!*\
  !*** ./src/projectDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const taskSpace = document.getElementById('taskSpace')
const space = document.getElementById('space')


const modal = (function() {
    // Modal container
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal';
  
    // Modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
  
    // Modal header
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
    const modalTitle = document.createElement('h2');
    modalTitle.textContent = 'New Project';
    modalHeader.appendChild(modalTitle);
  
    // Close button
    const closeButton = document.createElement('span');
    closeButton.className = 'close';
    closeButton.textContent = '×';
    modalHeader.appendChild(closeButton);
  
    // Modal body
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';
  
    // Project Name input
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Project Name:';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'projectName';
    nameInput.className = 'form-control';
    modalBody.appendChild(nameLabel);
    modalBody.appendChild(nameInput);
  
    // Optional Color Selector (example)
    const colorLabel = document.createElement('label');
    colorLabel.textContent = 'Color:';
    const colorSelect = document.createElement('select');
    colorSelect.id = 'projectColor';
    colorSelect.className = 'form-control';
    const colorOptions = ['None', 'Red', 'Green', 'Blue', 'Pink', 'Yellow', 'Brown'];
    colorOptions.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.textContent = option;
      colorSelect.appendChild(optionElement);
    });
    modalBody.appendChild(colorLabel);
    modalBody.appendChild(colorSelect);
  
    // Save button
    const saveButton = document.createElement('button');
    saveButton.className = 'btn btn-primary mt-2';
    saveButton.id = 'saveBtnNewProject'
    saveButton.textContent = 'Create Folder';
    modalBody.appendChild(saveButton);

    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.textContent = 'Cancel';
    cancelButton.className = 'btn btn-danger mt-2 ms-2';
    
    cancelButton.addEventListener('click', () => {
        modalContainer.style.display = 'none';
    });
    modalBody.appendChild(cancelButton);
  
    // Append all parts to modal content
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContainer.appendChild(modalContent);
  
    // Event listener for close button
    closeButton.addEventListener('click', () => {
      modalContainer.style.display = 'none';
    });
  
    saveButton.addEventListener('click', () => {
      const projectName = nameInput.value;
      const projectColor = colorSelect.value;
      closeModal();
  
     
   
  
    });
  
   
    // Function to close the modal
    function closeModal() {
      modalContainer.style.display = 'none';
    }
  
    // Function to open the modal
    function openModal() {
      modalContainer.style.display = 'block';
      space.append(modalContainer)
      nameInput.value = '';
      colorSelect.selectedIndex = 0;
    }
  

    // Export modal functions
    return {
      openModal,
      closeModal,
      saveButton,
      nameInput,
      colorSelect,
    };
  })();
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);
  
 

/***/ }),

/***/ "./src/projectManager.js":
/*!*******************************!*\
  !*** ./src/projectManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectManager)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _projectDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectDOM.js */ "./src/projectDOM.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage.js");




const taskSpace = document.getElementById('taskSpace');
const space = document.getElementById('space');
const title = document.getElementById('title');

class ProjectManager {
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
      _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.simpleDisplayer(allTodosVar);
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
          _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.simpleDisplayer([task]);
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
        _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.simpleDisplayer([task]);
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
          _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.simpleDisplayer([task]);
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
        _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.simpleDisplayer([task]);
      });
    } else {
      space.innerHTML = '<h4>No Missed Tasks Found</h4>';
    }
  }

  loadProjects() {
    this.allProjectFolder = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.loadProjectsFromLocalStorage)();
  }

  saveProjects() {
    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjectsToLocalStorage)(this.allProjectFolder);
  }

  addNewProject(id, name, color) {
    const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](id, name, color);
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
        _projectDOM_js__WEBPACK_IMPORTED_MODULE_1__["default"].openModal();
      });
    });
  }

  newProjectForm(project) {
    const saveBtnNewProject = _projectDOM_js__WEBPACK_IMPORTED_MODULE_1__["default"].saveButton;
    saveBtnNewProject.addEventListener('click', () => {
      const name = _projectDOM_js__WEBPACK_IMPORTED_MODULE_1__["default"].nameInput.value;
      const color = _projectDOM_js__WEBPACK_IMPORTED_MODULE_1__["default"].colorSelect.value;
      const id = this.allProjectFolder.length + 1;

      const duplicateProject = this.allProjectFolder.find(item => item.name === name);

      if (duplicateProject) {
        alert('A project with this name already exists.');
      } else {
        this.addNewProject(id, name, color);
        this.projectPageandSideBarDOM(project);
        _projectDOM_js__WEBPACK_IMPORTED_MODULE_1__["default"].closeModal();
        this.newProjectBtn();
      }
    });
  }

  getSelectedProjectArray(array) {
    _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.simpleDisplayer(array);
    this.saveProjects();
    return array;
  }

  refresher(disArray) {
    _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.simpleDisplayer(disArray);
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
        _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.displayer(getProjectArray);
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
        _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.displayer(getProjectArray);
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

/***/ }),

/***/ "./src/taskForm.js":
/*!*************************!*\
  !*** ./src/taskForm.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newTaskFormDOM)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");


const space = document.getElementById('space');

function newTaskFormDOM(selectArray) {
    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');
    formContainer.id = 'formContainer'

    const form = document.createElement('form');
    form.id = 'newTaskForm';
    form.classList.add('popup-form', 'needs-validation');
    form.setAttribute('novalidate', '');
    
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    titleLabel.className = 'form-label';
    titleLabel.htmlFor = 'projectTitle';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.className = 'form-control';
    titleInput.id = 'projectTitle';
    titleInput.name = 'title';
    titleInput.required = true;
    titleInput.style.height = '50px';
    
    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    descriptionLabel.className = 'form-label';
    descriptionLabel.htmlFor = 'projectDescription';
    const descriptionInput = document.createElement('textarea');
    descriptionInput.className = 'form-control';
    descriptionInput.id = 'projectDescription';
    descriptionInput.name = 'description';
    descriptionInput.maxLength = 40
    descriptionInput.required = true;
    
    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due Date:';
    dueDateLabel.className = 'form-label';
    dueDateLabel.htmlFor = 'projectDueDate';
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.className = 'form-control';
    dueDateInput.id = 'projectDueDate';
    dueDateInput.name = 'dueDate';
    dueDateInput.style.height = '50px';
    dueDateInput.required = true;
    
    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority:';
    priorityLabel.className = 'form-label';
    priorityLabel.htmlFor = 'projectPriority';
    
    const prioritySelect = document.createElement('select');
    prioritySelect.className = 'form-select';
    prioritySelect.id = 'projectPriority';
    prioritySelect.name = 'priority';
    prioritySelect.required = true;
    prioritySelect.style.height = '50px';
    
    const priorityOptions = ['Low', 'Medium', 'High'];
    priorityOptions.forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText.toLowerCase();
        option.textContent = optionText;
        prioritySelect.appendChild(option);
    });
    
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Create Project';
    submitButton.className = 'btn btn-success mt-3';
    
    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.textContent = 'Cancel';
    cancelButton.className = 'btn btn-danger mt-3 ms-2';
    
    cancelButton.addEventListener('click', () => {
        formContainer.style.display = 'none';
    });

    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);
    form.appendChild(dueDateLabel);
    form.appendChild(dueDateInput);
    form.appendChild(priorityLabel);
    form.appendChild(prioritySelect);
    form.appendChild(submitButton);
    form.appendChild(cancelButton);

    formContainer.appendChild(form);

    form.addEventListener('submit', (e) => {
        function formatDateToDMY(date) {
            const [year, month, day] = date.split('-'); 
            const dateObject = new Date(year, month - 1, day); 
            const dayName = dateObject.toLocaleDateString('en-US', { weekday: 'long' }); // Get the day name
            const formattedDate = `${day}/${month}/${year}`;
            
            return `${dayName}, ${formattedDate}`;
        }
        
        e.preventDefault();
        
        if (!dueDateInput.value) {
            dueDateInput.classList.add('is-invalid');
            return;
        } else {
            dueDateInput.classList.remove('is-invalid');
        }

        const title = titleInput.value;
        const description = descriptionInput.value;
        const dueDate = dueDateInput.value;
        const priority = prioritySelect.value;

     
        const newTask = new _todo_js__WEBPACK_IMPORTED_MODULE_1__["default"](title, description, formatDateToDMY(dueDate), priority, false);

        selectArray.push(newTask);
        _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.displayer(selectArray)
        
        formContainer.style.display = 'none'; // Hide the form after submission
    });
    
    space.append(formContainer);
    
    return formContainer;
}

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _taskForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskForm.js */ "./src/taskForm.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/project.js");



const space = document.getElementById('space')

class Task {
  constructor(title, description, dueDate, priority, isCompleted = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isCompleted = isCompleted;
  }

  completedFunc(checkbox) {
    this.isCompleted = checkbox.checked;
    console.log(this.isCompleted)
    return this.isCompleted;
  }

  statusChange(task, status){
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    task.isCompleted = status
    localStorage.setItem('projects', JSON.stringify(projects));
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.theManager)().saveProjects()
  }
  
  deleteTask(project, index) {
    const comfirm = confirm('Are you sure you want to delete this Task?')
    const projects = JSON.parse(localStorage.getItem('projects')) || []; 
    if(comfirm){
      project.splice(index, 1);
      localStorage.setItem('projects', JSON.stringify(projects));
      document.querySelector(`.card.task-card[data-index="${index}"]`).remove();
    }
  }


  editTask(task, selectArray) {
    const formContainer = (0,_taskForm_js__WEBPACK_IMPORTED_MODULE_0__["default"])([]);
    space.appendChild(formContainer);
  
    const form = formContainer.querySelector('form');
    const titleInput = form.querySelector('#projectTitle');
    const descriptionInput = form.querySelector('#projectDescription');
    const dueDateInput = form.querySelector('#projectDueDate');
    const prioritySelect = form.querySelector('#projectPriority');
  
    // Pre-fill the form with the current task values
    titleInput.value = task.title;
    descriptionInput.value = task.description;
    dueDateInput.value = this.formatDateToDMY(task.dueDate);
    prioritySelect.value = task.priority;
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      task.title = titleInput.value;
      task.description = descriptionInput.value;
  
      if (dueDateInput.value) {
        task.dueDate = this.formatDateToDMY(dueDateInput.value);
      }
  
   
      task.priority = prioritySelect.value;
        const projects = JSON.parse(localStorage.getItem('projects')) || [];
      localStorage.setItem('projects', JSON.stringify(projects));

      (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.theManager)().saveProjects();
      _project_js__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.displayer(selectArray)
    
      // Hide the form container
      formContainer.style.display = 'none';
    });

    formContainer.style.display = 'block';
  }
  

  formatDateToDMY(date) {
    const [year, month, day] = date.split('-'); // Assuming the date is initially in 'year-month-day' format
    const dateObject = new Date(year, month - 1, day); // Create a Date object
    const dayName = dateObject.toLocaleDateString('en-US', { weekday: 'long' }); // Get the day name
    const formattedDate = `${day}/${month}/${year}`;
    
    return `${dayName}, ${formattedDate}`;
  }
  
  
}




/***/ }),

/***/ "./src/todoDOM.js":
/*!************************!*\
  !*** ./src/todoDOM.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ taskDOM)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");


function taskDOM(projectArray) {
  const space = document.getElementById('space');

  projectArray.forEach((task, index) => {
    const titleText = task.title;
    const descriptionText = task.description;
    const dueDateText = task.dueDate;
    const priorityText = task.priority;
    const isCompleted = task.isCompleted;

    const card = document.createElement('div');
    card.className = 'card task-card mb-3';
    card.setAttribute('data-index', index);

    const row = document.createElement('div');
    row.className = 'row no-gutters';

    const priorityBar = document.createElement('div');
    priorityBar.className = 'priority-bar';
    switch (priorityText) {
      case 'low':
        priorityBar.style.backgroundColor = '#28a745';
        break;
      case 'medium':
        priorityBar.style.backgroundColor = '#ffc107';
        break;
      case 'high':
        priorityBar.style.backgroundColor = '#dc3545';
        break;
      default:
        priorityBar.style.backgroundColor = '#6c757d';
        break;
    }

    const titleContainer = document.createElement('div');
    titleContainer.className = 'col-md-2 w-100 d-flex align-items-center justify-content-center text-white position-relative';
    titleContainer.id = 'titleContainer';
    const title = document.createElement('h2');
    title.className = 'card-title';
    title.textContent = titleText;
    titleContainer.style.backgroundColor = priorityBar.style.backgroundColor;

    titleContainer.appendChild(priorityBar);
    titleContainer.appendChild(title);

    const labelContainer = document.createElement('div');
    labelContainer.className = 'label-container d-flex justify-content-between';
    
    const descriptionLabel = document.createElement('span');
    descriptionLabel.className = 'label';
    descriptionLabel.innerHTML = `<small class="text-muted"><i class="fa-solid fa-note-sticky"></i> Description</small>`;
    descriptionLabel.id = 'descriptionLabelTask';
    
    const dueDateLabel = document.createElement('span');
    dueDateLabel.className = 'label';
    dueDateLabel.innerHTML = `<small class="text-muted"><i class="fas fa-calendar-day"></i> Due Date</small>`;
    
    const priorityLabel = document.createElement('span');
    priorityLabel.className = 'label';
    priorityLabel.innerHTML = `<small class="text-muted"><i class="fas fa-flag"></i> Priority</small>`;
    
    labelContainer.appendChild(descriptionLabel);
    labelContainer.appendChild(dueDateLabel);
    labelContainer.appendChild(priorityLabel);
    
    titleContainer.appendChild(labelContainer);
    

    const elementContainer = document.createElement('div');
    elementContainer.className = 'element-container d-flex align-items-center';
    elementContainer.id = 'elementContainer';

   
    const description = document.createElement('span');
    description.className = 'col-8 card-text description';
    description.textContent = descriptionText;
    description.id = 'carddescription';

    const viewButton = document.createElement('button');
    viewButton.classList.add('btn', 'btn-outline-primary', 'view-button', 'd-lg-none', 'd-md-none');
    viewButton.id = 'viewDescription'
    viewButton.innerHTML = '<i class="fa-solid fa-eye"></i>';


    let clickCount = 0;

    viewButton.addEventListener('click', () => {
      clickCount++;
      if (clickCount % 2 === 1) {
        description.style.display = 'flex';
        dueDate.style.display = 'none';
        priority.style.display = 'none';
        viewButton.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
      } else {
        description.style.display = 'none';
        dueDate.style.display = 'flex';
        priority.style.display = 'flex';
        viewButton.innerHTML = '<i class="fa-solid fa-eye"></i>';
      }
    });
    
    const priority = document.createElement('p');
    priority.className = 'card-text priority';
    priority.innerHTML = `<small class="text-muted"><i class="fas fa-flag"></i> ${priorityText}</small>`;

    const dueDate = document.createElement('p');
    dueDate.className = 'card-text';
    dueDate.innerHTML = `<small class="text-muted">
    <i class="fas fa-calendar-day"></i> ${dueDateText}</small>`;
    dueDate.setAttribute('required', true)


    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    cardBody.appendChild(elementContainer);

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'd-flex align-items-center p-2';
    buttonContainer.id = 'buttonContainer';
    buttonContainer.style.padding = '10px';
    const buttonGroup = document.createElement('div');
    buttonGroup.style.margin = '10px';

    const editButton = document.createElement('button');
    editButton.className = 'btn btn-warning btn-sm m-2';
    editButton.id = 'editBtnOfTask'
    editButton.innerHTML = '<i class="fas fa-edit"></i> Edit';

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.id = 'deletebtnOfTask'
    deleteButton.innerHTML = '<i class="fas fa-trash"></i> Delete';

    const checkboxSpan = document.createElement('span');
    checkboxSpan.className = 'checkbox-span';
    checkboxSpan.style.margin = '10px';
    checkboxSpan.id = 'checkBoxSpanOfTask'

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'form-check-input form-check-input-lg';
    checkbox.ariaLabel = 'Task Complete';

    const statusText = document.createElement('span');
    statusText.className = 'status-text';
  
    //APPENDER
    elementContainer.appendChild(description);
    elementContainer.appendChild(viewButton)
    elementContainer.appendChild(dueDate);
    elementContainer.appendChild(priority);

    checkboxSpan.appendChild(checkbox);
    checkboxSpan.appendChild(statusText);
    buttonContainer.appendChild(checkboxSpan);

    buttonGroup.appendChild(editButton);
    buttonGroup.appendChild(deleteButton);
    buttonContainer.appendChild(buttonGroup);

    row.appendChild(titleContainer);
    row.appendChild(cardBody);
    row.appendChild(buttonContainer);

    card.appendChild(row);
    space.appendChild(card);

    editButton.addEventListener('click', () => {
      _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.editTask(task, projectArray);
    });

  if (isCompleted) {
    checkbox.checked = true;
    statusText.textContent = 'Completed';
    checkboxSpan.style.backgroundColor = 'green';
    row.style.backgroundColor = 'lightgrey'
    checkbox.style.color = 'white';
    checkboxSpan.style.padding = '15px';
} else {
    checkbox.checked = false;
    statusText.textContent = 'Incomplete';
    checkboxSpan.style.backgroundColor = 'lightgrey';
    checkboxSpan.style.padding = '15px';
     row.style.backgroundColor = 'white'
}

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      statusText.textContent = 'Completed';
      checkboxSpan.style.backgroundColor = 'green'
      row.style.backgroundColor = 'lightgrey'

      checkbox.style.color = 'white'
      checkboxSpan.style.padding = '15px'
      _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.statusChange(task, true)
    } else {
      statusText.textContent = 'Incomplete';
      checkboxSpan.style.backgroundColor = 'lightgrey'
      checkboxSpan.style.padding = '15px'
      row.style.backgroundColor = 'white'

      _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.statusChange(task, false)
    }
  });

  deleteButton.addEventListener('click', () => {
    _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.deleteTask(projectArray, index, task);
  });


  });
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDakQ7QUFDQTtBQUNBLDZCQUE2QiwwREFBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDUG1DO0FBQ1E7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQU87QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQU87QUFDWDtBQUNBLElBQUksd0RBQWM7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isd0RBQWM7QUFDcEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUUsaUVBQWUsS0FBSyxFQUFDO0FBQ3ZCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkhtQztBQUNDO0FBQ3lEO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGLGFBQWE7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsWUFBWTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxnREFBSTtBQUNWLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sZ0RBQUk7QUFDVixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sZ0RBQUk7QUFDVjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSSxnREFBSTtBQUNSLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7OztVQ3ZOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Byb2plY3RET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcHJvamVjdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdGFza0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90b2RvRE9NLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0TWFuYWdlciBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlci5qc1wiO1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBQcm9qZWN0TWFuYWdlclxyXG5jb25zdCBteVByb2plY3RNYW5hZ2VyID0gbmV3IFByb2plY3RNYW5hZ2VyKCk7XHJcbmlmIChteVByb2plY3RNYW5hZ2VyLmFsbFByb2plY3RGb2xkZXIubGVuZ3RoID49IDEpIHtcclxuICBteVByb2plY3RNYW5hZ2VyLmRpc3BsYXllcigpXHJcbn1cclxuXHJcbi8vIEV4cG9ydCBmdW5jdGlvbiB0byBhY2Nlc3MgUHJvamVjdE1hbmFnZXJcclxuZXhwb3J0IGNvbnN0IHRoZU1hbmFnZXIgPSAoKSA9PiBteVByb2plY3RNYW5hZ2VyO1xyXG5cclxuLy8gLy8gU2VsZWN0aW5nIGVsZW1lbnRzIGJ5IElEXHJcbmNvbnN0IHRhc2tTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrU3BhY2UnKTtcclxuY29uc3QgYWxsVG9kb3NJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFsbFRvZG9zJyk7XHJcbmNvbnN0IHRvZGF5SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5Ub2RheVRvZG9zJyk7XHJcbmNvbnN0IGNvbXBsZXRlZEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuQ29tcGxldGVkVG9kbycpO1xyXG5jb25zdCB1cGNvbWluZ0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuVXBjb21pbmdUb2RvJyk7XHJcbmNvbnN0IG1pc3NlZEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuTWlzc2VkVG9kbycpO1xyXG5jb25zdCBob21lUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lUGFnZScpO1xyXG5cclxuY29uc3Qgc2lkZWJhckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlYmFyQ29udGFpbmVyJyk7XHJcbmNvbnN0IHNpZGViYXJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXJJY29uJyk7XHJcbmNvbnN0IG1haW5TcGFjZUNvbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluU3BhY2VDb2wnKTtcclxuY29uc3QgbmF2TWVudVJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZNZW51Um93Jyk7XHJcblxyXG5cclxuLy8gRXZlbnQgTGlzdGVuZXJzXHJcbmhvbWVQYWdlLmZvckVhY2gobWVudSA9PiBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIG15UHJvamVjdE1hbmFnZXIuaG9tZVBhZ2UoKTtcclxuICBteVByb2plY3RNYW5hZ2VyLnNhdmVQcm9qZWN0cygpO1xyXG59KSk7XHJcblxyXG5hbGxUb2Rvc0l0ZW0uZm9yRWFjaChtZW51ID0+IG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgbXlQcm9qZWN0TWFuYWdlci5hbGxUb2RvcygpO1xyXG4gIG15UHJvamVjdE1hbmFnZXIuc2F2ZVByb2plY3RzKCk7XHJcbn0pKTtcclxuXHJcbnRvZGF5SXRlbS5mb3JFYWNoKG1lbnUgPT4gbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjb25zb2xlLmxvZygnVG9kYXkgaXRlbSBjbGlja2VkJyk7XHJcbiAgbXlQcm9qZWN0TWFuYWdlci50b2RheVRvZG9zKCk7XHJcbiAgbXlQcm9qZWN0TWFuYWdlci5zYXZlUHJvamVjdHMoKTtcclxufSkpO1xyXG5cclxuY29tcGxldGVkSXRlbS5mb3JFYWNoKG1lbnUgPT4gbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBteVByb2plY3RNYW5hZ2VyLmNvbXBsZXRlZFRhc2soKTtcclxuICBteVByb2plY3RNYW5hZ2VyLnNhdmVQcm9qZWN0cygpO1xyXG59KSk7XHJcblxyXG51cGNvbWluZ0l0ZW0uZm9yRWFjaChtZW51ID0+IG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgbXlQcm9qZWN0TWFuYWdlci5wZW5kaW5nVG9kbygpO1xyXG59KSk7XHJcblxyXG5taXNzZWRJdGVtLmZvckVhY2gobWVudSA9PiBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIC8vIEhhbmRsZSBjbGljayBvbiBNaXNzZWQgaXRlbVxyXG4gIG15UHJvamVjdE1hbmFnZXIubWlzc2VkVGFza3MoKVxyXG59KSk7XHJcblxyXG5sZXQgaXNDbGlja2VkID0gdHJ1ZVxyXG5zaWRlYmFySWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBpZiAoaXNDbGlja2VkKSB7XHJcbiAgICBzaWRlYmFyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBtYWluU3BhY2VDb2wuY2xhc3NOYW1lID0gJ2NvbC0xMic7XHJcbiAgICBuYXZNZW51Um93LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgdGFza1NwYWNlLnN0eWxlLnBhZGRpbmcgPSAnMTBweCc7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNpZGViYXJDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBtYWluU3BhY2VDb2wuY2xhc3NOYW1lID0gJ2NvbC0xMCc7XHJcbiAgICBuYXZNZW51Um93LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG4gIGlzQ2xpY2tlZCA9ICFpc0NsaWNrZWQ7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKTtcclxuICByZXR1cm4gcHJvamVjdHMgPyBKU09OLnBhcnNlKHByb2plY3RzKSA6IFtdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoYWxsUHJvamVjdEZvbGRlcikge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RGb2xkZXIpKTtcclxufSIsImltcG9ydCB0YXNrRE9NIGZyb20gXCIuL3RvZG9ET00uanNcIjtcclxuaW1wb3J0IG5ld1Rhc2tGb3JtRE9NIGZyb20gXCIuL3Rhc2tGb3JtLmpzXCI7XHJcblxyXG5jb25zdCBzcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGFjZScpO1xyXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IoaWQsIG5hbWUsIGNvbG9yKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy5wcm9qZWN0ID0gW107XHJcbiAgfVxyXG5cclxuXHJcbiAgc2ltcGxlRGlzcGxheWVyKGFycmF5KXtcclxuICAgIHRhc2tET00oYXJyYXkpXHJcbiAgfVxyXG4gIFxyXG4gIGRpc3BsYXllcihhcnJheSkge1xyXG4gICAgc3BhY2UuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIHRhc2tET00oYXJyYXkpXHJcbiAgICB0aGlzLmRvbSgpO1xyXG4gICAgbmV3VGFza0Zvcm1ET00oYXJyYXkpXHJcbiAgICB0aGlzLm5ld1Rhc2tGb3JtQnRuKGFycmF5KVxyXG4gIH1cclxuXHJcblxyXG4gIG5ld1Rhc2tGb3JtQnRuKHNlbGVjdEFycmF5KXtcclxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0J1dHRvbicpO1xyXG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgdGhlRm9ybSA9IG5ld1Rhc2tGb3JtRE9NKHNlbGVjdEFycmF5KTtcclxuICAgICAgc3BhY2UuYXBwZW5kKHRoZUZvcm0pO1xyXG4gICAgICB0aGVGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkb20oKSB7XHJcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcclxuICAgIGFkZFRhc2tCdXR0b24uaWQgPSAnYWRkVGFza0J1dHRvbic7XHJcbiAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLXNlY29uZGFyeSc7XHJcbiAgICBhZGRUYXNrQnV0dG9uLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgc3BhY2UuYXBwZW5kKGFkZFRhc2tCdXR0b24pO1xyXG4gIH1cclxuXHJcblxyXG5cclxufVxyXG4iLCJjb25zdCB0YXNrU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1NwYWNlJylcclxuY29uc3Qgc3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BhY2UnKVxyXG5cclxuXHJcbmNvbnN0IG1vZGFsID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gTW9kYWwgY29udGFpbmVyXHJcbiAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9kYWxDb250YWluZXIuY2xhc3NOYW1lID0gJ21vZGFsJztcclxuICBcclxuICAgIC8vIE1vZGFsIGNvbnRlbnRcclxuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9kYWxDb250ZW50LmNsYXNzTmFtZSA9ICdtb2RhbC1jb250ZW50JztcclxuICBcclxuICAgIC8vIE1vZGFsIGhlYWRlclxyXG4gICAgY29uc3QgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsSGVhZGVyLmNsYXNzTmFtZSA9ICdtb2RhbC1oZWFkZXInO1xyXG4gICAgY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBtb2RhbFRpdGxlLnRleHRDb250ZW50ID0gJ05ldyBQcm9qZWN0JztcclxuICAgIG1vZGFsSGVhZGVyLmFwcGVuZENoaWxkKG1vZGFsVGl0bGUpO1xyXG4gIFxyXG4gICAgLy8gQ2xvc2UgYnV0dG9uXHJcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNsb3NlQnV0dG9uLmNsYXNzTmFtZSA9ICdjbG9zZSc7XHJcbiAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9ICfDlyc7XHJcbiAgICBtb2RhbEhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XHJcbiAgXHJcbiAgICAvLyBNb2RhbCBib2R5XHJcbiAgICBjb25zdCBtb2RhbEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsQm9keS5jbGFzc05hbWUgPSAnbW9kYWwtYm9keSc7XHJcbiAgXHJcbiAgICAvLyBQcm9qZWN0IE5hbWUgaW5wdXRcclxuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnUHJvamVjdCBOYW1lOic7XHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICBuYW1lSW5wdXQuaWQgPSAncHJvamVjdE5hbWUnO1xyXG4gICAgbmFtZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xyXG4gICAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XHJcbiAgICBtb2RhbEJvZHkuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcclxuICBcclxuICAgIC8vIE9wdGlvbmFsIENvbG9yIFNlbGVjdG9yIChleGFtcGxlKVxyXG4gICAgY29uc3QgY29sb3JMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb2xvckxhYmVsLnRleHRDb250ZW50ID0gJ0NvbG9yOic7XHJcbiAgICBjb25zdCBjb2xvclNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgY29sb3JTZWxlY3QuaWQgPSAncHJvamVjdENvbG9yJztcclxuICAgIGNvbG9yU2VsZWN0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xyXG4gICAgY29uc3QgY29sb3JPcHRpb25zID0gWydOb25lJywgJ1JlZCcsICdHcmVlbicsICdCbHVlJywgJ1BpbmsnLCAnWWVsbG93JywgJ0Jyb3duJ107XHJcbiAgICBjb2xvck9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBvcHRpb247XHJcbiAgICAgIGNvbG9yU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgICBtb2RhbEJvZHkuYXBwZW5kQ2hpbGQoY29sb3JMYWJlbCk7XHJcbiAgICBtb2RhbEJvZHkuYXBwZW5kQ2hpbGQoY29sb3JTZWxlY3QpO1xyXG4gIFxyXG4gICAgLy8gU2F2ZSBidXR0b25cclxuICAgIGNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHNhdmVCdXR0b24uY2xhc3NOYW1lID0gJ2J0biBidG4tcHJpbWFyeSBtdC0yJztcclxuICAgIHNhdmVCdXR0b24uaWQgPSAnc2F2ZUJ0bk5ld1Byb2plY3QnXHJcbiAgICBzYXZlQnV0dG9uLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBGb2xkZXInO1xyXG4gICAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xyXG5cclxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY2FuY2VsQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcclxuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLWRhbmdlciBtdC0yIG1zLTInO1xyXG4gICAgXHJcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG4gICAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XHJcbiAgXHJcbiAgICAvLyBBcHBlbmQgYWxsIHBhcnRzIHRvIG1vZGFsIGNvbnRlbnRcclxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbEhlYWRlcik7XHJcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxCb2R5KTtcclxuICAgIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XHJcbiAgXHJcbiAgICAvLyBFdmVudCBsaXN0ZW5lciBmb3IgY2xvc2UgYnV0dG9uXHJcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBuYW1lSW5wdXQudmFsdWU7XHJcbiAgICAgIGNvbnN0IHByb2plY3RDb2xvciA9IGNvbG9yU2VsZWN0LnZhbHVlO1xyXG4gICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgXHJcbiAgICAgXHJcbiAgIFxyXG4gIFxyXG4gICAgfSk7XHJcbiAgXHJcbiAgIFxyXG4gICAgLy8gRnVuY3Rpb24gdG8gY2xvc2UgdGhlIG1vZGFsXHJcbiAgICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xyXG4gICAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gRnVuY3Rpb24gdG8gb3BlbiB0aGUgbW9kYWxcclxuICAgIGZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcclxuICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIHNwYWNlLmFwcGVuZChtb2RhbENvbnRhaW5lcilcclxuICAgICAgbmFtZUlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgIGNvbG9yU2VsZWN0LnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgfVxyXG4gIFxyXG5cclxuICAgIC8vIEV4cG9ydCBtb2RhbCBmdW5jdGlvbnNcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG9wZW5Nb2RhbCxcclxuICAgICAgY2xvc2VNb2RhbCxcclxuICAgICAgc2F2ZUJ1dHRvbixcclxuICAgICAgbmFtZUlucHV0LFxyXG4gICAgICBjb2xvclNlbGVjdCxcclxuICAgIH07XHJcbiAgfSkoKTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBtb2RhbDtcclxuICBcclxuICIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcclxuaW1wb3J0IG1vZGFsIGZyb20gXCIuL3Byb2plY3RET00uanNcIjtcclxuaW1wb3J0IHsgbG9hZFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZS5qcyc7XHJcblxyXG5jb25zdCB0YXNrU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1NwYWNlJyk7XHJcbmNvbnN0IHNwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwYWNlJyk7XHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0TWFuYWdlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmFsbFByb2plY3RGb2xkZXIgPSBbXTtcclxuICAgIHRoaXMubG9hZFByb2plY3RzKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuYWxsUHJvamVjdEZvbGRlci5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy51c2VyRGF0YSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlckRhdGEoKSB7XHJcbiAgICBjb25zdCBuYW1lRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lRm9ybScpO1xyXG4gICAgbmFtZUZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgY29uc3QgdXNlck5hbWVTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlck5hbWUnKSkgfHwgJ1VzZXInO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJOYW1lJywgSlNPTi5zdHJpbmdpZnkodXNlck5hbWVTdG9yYWdlKSk7XHJcblxyXG4gICAgY29uc3QgbmF2VXNlck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2VXNlck5hbWUnKTtcclxuICAgIG5hbWVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgdXNlck5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyTmFtZScpO1xyXG4gICAgICBjb25zdCB1c2VyTmFtZSA9IHVzZXJOYW1lSW5wdXQudmFsdWU7XHJcblxyXG4gICAgICBpZiAodXNlck5hbWUpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlck5hbWUnLCBKU09OLnN0cmluZ2lmeSh1c2VyTmFtZSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOYW1lIHNhdmVkOicsIHVzZXJOYW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGROZXdQcm9qZWN0KDAsICdEZWZhdWx0JywgJ2JsYWNrJyk7XHJcbiAgICAgICAgbmFtZUZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0aGlzLmRpc3BsYXllcigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIG5hbWUgaXMgZW1wdHkuJyk7XHJcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yTWVzc2FnZScpO1xyXG4gICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9ICdOYW1lIGNhbm5vdCBiZSBlbXB0eS4nO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhvbWVQYWdlKCkge1xyXG4gICAgc3BhY2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNjZWRiZTknO1xyXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gJ0hvbWUnO1xyXG4gICAgdGhpcy5kaXNwbGF5ZXIoKTtcclxuICB9XHJcblxyXG4gIGFsbFRvZG9zKCkge1xyXG4gICAgc3BhY2UuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSAnQWxsIFRvZG9zJztcclxuXHJcbiAgICB0aGlzLmFsbFByb2plY3RGb2xkZXIuZm9yRWFjaCh0b2RvID0+IHtcclxuICAgICAgY29uc3QgYWxsVG9kb3NWYXIgPSB0b2RvLnByb2plY3Q7XHJcbiAgICAgIGlmIChhbGxUb2Rvc1ZhciA9PT0gJycpIHtcclxuICAgICAgICBzcGFjZS5pbm5lckhUTUwgPSAnPGg0Pk5vIFRhc2sgRm91bmQ8L2g0Pic7XHJcbiAgICAgIH1cclxuICAgICAgUHJvamVjdC5wcm90b3R5cGUuc2ltcGxlRGlzcGxheWVyKGFsbFRvZG9zVmFyKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29tcGxldGVkVGFzaygpIHtcclxuICAgIHNwYWNlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gJ0NvbXBsZXRlZCBUYXNrcyc7XHJcbiAgICBsZXQgY29tcGxldGVkVGFza3NGb3VuZCA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuYWxsUHJvamVjdEZvbGRlci5mb3JFYWNoKHByb2plY3RzID0+IHtcclxuICAgICAgcHJvamVjdHMucHJvamVjdC5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgIGlmICh0YXNrLmlzQ29tcGxldGVkKSB7XHJcbiAgICAgICAgICBjb21wbGV0ZWRUYXNrc0ZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgIFByb2plY3QucHJvdG90eXBlLnNpbXBsZURpc3BsYXllcihbdGFza10pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWNvbXBsZXRlZFRhc2tzRm91bmQpIHtcclxuICAgICAgc3BhY2UuaW5uZXJIVE1MID0gJzxoND5ObyBDb21wbGV0ZWQgVGFzayBGb3VuZDwvaDQ+JztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBlbmRpbmdUb2RvKCkge1xyXG4gICAgc3BhY2UuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSAnUGVuZGluZyBUYXNrcyc7XHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBwZW5kaW5nVGFza3MgPSBbXTtcclxuXHJcbiAgICB0aGlzLmFsbFByb2plY3RGb2xkZXIuZm9yRWFjaChwcm9qZWN0cyA9PiB7XHJcbiAgICAgIHByb2plY3RzLnByb2plY3QuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICBjb25zdCBkdWVEYXRlID0gbmV3IERhdGUodGFzay5kdWVEYXRlKTtcclxuICAgICAgICBpZiAodGFzay5pc0NvbXBsZXRlZCA9PT0gZmFsc2UgJiYgdG9kYXkgPD0gZHVlRGF0ZSkge1xyXG4gICAgICAgICAgcGVuZGluZ1Rhc2tzLnB1c2godGFzayk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChwZW5kaW5nVGFza3MubGVuZ3RoID4gMCkge1xyXG4gICAgICBwZW5kaW5nVGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICBQcm9qZWN0LnByb3RvdHlwZS5zaW1wbGVEaXNwbGF5ZXIoW3Rhc2tdKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzcGFjZS5pbm5lckhUTUwgPSAnPGg0Pk5vIFBlbmRpbmcgVGFza3MgRm91bmQ8L2g0Pic7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2RheVRvZG9zKCkge1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgd2Vla2RheTogJ2xvbmcnLFxyXG4gICAgICBkYXk6ICcyLWRpZ2l0JyxcclxuICAgICAgbW9udGg6ICcyLWRpZ2l0JyxcclxuICAgICAgeWVhcjogJ251bWVyaWMnXHJcbiAgICB9O1xyXG4gICAgY29uc3QgbG9jYWxEYXRlID0gdG9kYXkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1HQicsIG9wdGlvbnMpO1xyXG4gICAgc3BhY2UuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSAnVG9kYXkgVGFza3MnO1xyXG5cclxuICAgIHRoaXMuYWxsUHJvamVjdEZvbGRlci5mb3JFYWNoKHByb2plY3RzID0+IHtcclxuICAgICAgcHJvamVjdHMucHJvamVjdC5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgIGlmICh0YXNrLmR1ZURhdGUgPT09IGxvY2FsRGF0ZSkge1xyXG4gICAgICAgICAgUHJvamVjdC5wcm90b3R5cGUuc2ltcGxlRGlzcGxheWVyKFt0YXNrXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbWlzc2VkVGFza3MoKSB7XHJcbiAgICBzcGFjZS5pbm5lckhUTUwgPSAnJztcclxuICAgIHRpdGxlLmlubmVyVGV4dCA9ICdNaXNzZWQgVGFza3MnO1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgbWlzc2VkVGFza3MgPSBbXTtcclxuXHJcbiAgICB0aGlzLmFsbFByb2plY3RGb2xkZXIuZm9yRWFjaChwcm9qZWN0cyA9PiB7XHJcbiAgICAgIHByb2plY3RzLnByb2plY3QuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICBjb25zdCBkdWVEYXRlID0gbmV3IERhdGUodGFzay5kdWVEYXRlKTtcclxuICAgICAgICBpZiAodGFzay5pc0NvbXBsZXRlZCA9PT0gZmFsc2UgJiYgdG9kYXkgPiBkdWVEYXRlKSB7XHJcbiAgICAgICAgICBtaXNzZWRUYXNrcy5wdXNoKHRhc2spO1xyXG4gICAgICAgICAgdGl0bGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChtaXNzZWRUYXNrcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIG1pc3NlZFRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgUHJvamVjdC5wcm90b3R5cGUuc2ltcGxlRGlzcGxheWVyKFt0YXNrXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3BhY2UuaW5uZXJIVE1MID0gJzxoND5ObyBNaXNzZWQgVGFza3MgRm91bmQ8L2g0Pic7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2FkUHJvamVjdHMoKSB7XHJcbiAgICB0aGlzLmFsbFByb2plY3RGb2xkZXIgPSBsb2FkUHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCk7XHJcbiAgfVxyXG5cclxuICBzYXZlUHJvamVjdHMoKSB7XHJcbiAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSh0aGlzLmFsbFByb2plY3RGb2xkZXIpO1xyXG4gIH1cclxuXHJcbiAgYWRkTmV3UHJvamVjdChpZCwgbmFtZSwgY29sb3IpIHtcclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChpZCwgbmFtZSwgY29sb3IpO1xyXG4gICAgdGhpcy5hbGxQcm9qZWN0Rm9sZGVyLnB1c2gobmV3UHJvamVjdCk7XHJcbiAgICB0aGlzLnNhdmVQcm9qZWN0cygpO1xyXG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XHJcbiAgfVxyXG5cclxuICBkZWxldGVQcm9qZWN0KGluZGV4KSB7XHJcbiAgICBjb25zdCBjb21maXJtID0gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIFRhc2s/Jyk7XHJcbiAgICBpZiAoY29tZmlybSkge1xyXG4gICAgICB0aGlzLmFsbFByb2plY3RGb2xkZXIuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgdGhpcy5zYXZlUHJvamVjdHMoKTtcclxuICAgICAgdGhpcy5wcm9qZWN0UGFnZWFuZFNpZGVCYXJET00odGhpcy5hbGxQcm9qZWN0Rm9sZGVyKTtcclxuICAgICAgdGhpcy5uZXdQcm9qZWN0QnRuKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5ZXIoKSB7XHJcbiAgICBzcGFjZS5pbm5lckhUTUwgPSAnJztcclxuICAgIHRpdGxlLmlubmVySFRNTCA9ICdIb21lJztcclxuICAgIG5hdlVzZXJOYW1lLnRleHRDb250ZW50ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlck5hbWUnKSk7XHJcblxyXG4gICAgc3BhY2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XHJcbiAgICB0aGlzLnByb2plY3RQYWdlYW5kU2lkZUJhckRPTSh0aGlzLmFsbFByb2plY3RGb2xkZXIpO1xyXG4gICAgdGhpcy5uZXdQcm9qZWN0QnRuKCk7XHJcbiAgICB0aGlzLm5ld1Byb2plY3RGb3JtKHRoaXMuYWxsUHJvamVjdEZvbGRlcik7XHJcbiAgICB0aGlzLmZvb3RlcigpO1xyXG4gIH1cclxuXHJcbiAgbmV3UHJvamVjdEJ0bigpIHtcclxuICAgIGNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIG5ld1Byb2plY3RCdG4udGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xyXG4gICAgbmV3UHJvamVjdEJ0bi5pZCA9ICdhZGRQcm9qZWN0JztcclxuICAgIG5ld1Byb2plY3RCdG4uY2xhc3NOYW1lID0gJ2J0biBidG4tcHJpbWFyeSBjcmVhdGVOZXdQcm9qZWN0JztcclxuICAgIG5ld1Byb2plY3RCdG4uc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcbiAgICBzcGFjZS5hcHBlbmQobmV3UHJvamVjdEJ0bik7XHJcblxyXG4gICAgY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jcmVhdGVOZXdQcm9qZWN0Jyk7XHJcbiAgICBjcmVhdGVOZXdQcm9qZWN0LmZvckVhY2goYnRuID0+IHtcclxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1vZGFsLm9wZW5Nb2RhbCgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmV3UHJvamVjdEZvcm0ocHJvamVjdCkge1xyXG4gICAgY29uc3Qgc2F2ZUJ0bk5ld1Byb2plY3QgPSBtb2RhbC5zYXZlQnV0dG9uO1xyXG4gICAgc2F2ZUJ0bk5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSBtb2RhbC5uYW1lSW5wdXQudmFsdWU7XHJcbiAgICAgIGNvbnN0IGNvbG9yID0gbW9kYWwuY29sb3JTZWxlY3QudmFsdWU7XHJcbiAgICAgIGNvbnN0IGlkID0gdGhpcy5hbGxQcm9qZWN0Rm9sZGVyLmxlbmd0aCArIDE7XHJcblxyXG4gICAgICBjb25zdCBkdXBsaWNhdGVQcm9qZWN0ID0gdGhpcy5hbGxQcm9qZWN0Rm9sZGVyLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09IG5hbWUpO1xyXG5cclxuICAgICAgaWYgKGR1cGxpY2F0ZVByb2plY3QpIHtcclxuICAgICAgICBhbGVydCgnQSBwcm9qZWN0IHdpdGggdGhpcyBuYW1lIGFscmVhZHkgZXhpc3RzLicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYWRkTmV3UHJvamVjdChpZCwgbmFtZSwgY29sb3IpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdFBhZ2VhbmRTaWRlQmFyRE9NKHByb2plY3QpO1xyXG4gICAgICAgIG1vZGFsLmNsb3NlTW9kYWwoKTtcclxuICAgICAgICB0aGlzLm5ld1Byb2plY3RCdG4oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RlZFByb2plY3RBcnJheShhcnJheSkge1xyXG4gICAgUHJvamVjdC5wcm90b3R5cGUuc2ltcGxlRGlzcGxheWVyKGFycmF5KTtcclxuICAgIHRoaXMuc2F2ZVByb2plY3RzKCk7XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoZXIoZGlzQXJyYXkpIHtcclxuICAgIFByb2plY3QucHJvdG90eXBlLnNpbXBsZURpc3BsYXllcihkaXNBcnJheSk7XHJcbiAgICB0aGlzLnNhdmVQcm9qZWN0cygpO1xyXG4gIH1cclxuXHJcbiAgcHJvamVjdFBhZ2VhbmRTaWRlQmFyRE9NKHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0VUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdFVMJyk7XHJcbiAgICBuZXdQcm9qZWN0VUwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBzcGFjZS5pbm5lckhUTUwgPSAnJztcclxuICAgIHRpdGxlLmlubmVyVGV4dCA9ICdNeSBQcm9qZWN0cyc7XHJcblxyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcclxuICAgICAgLy8gU2lkZWJhciBQcm9qZWN0IExpc3RcclxuICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICBsaXN0SXRlbS5jbGFzc05hbWUgPSAnbGlzdC1ncm91cC1pdGVtJztcclxuICAgICAgbGlzdEl0ZW0uaWQgPSAncHJvamVjdEZvbGRlcic7XHJcbiAgICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcclxuXHJcbiAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgIGljb24uY2xhc3NOYW1lID0gJ2ZhLXNvbGlkIGZhLWZvbGRlciBwcm9qZWN0LWljb24nO1xyXG4gICAgICBpY29uLnN0eWxlLmNvbG9yID0gcHJvamVjdC5jb2xvcjtcclxuXHJcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBwcm9qZWN0TmFtZS5jbGFzc05hbWUgPSAncHJvamVjdC1uYW1lJztcclxuICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XHJcblxyXG4gICAgICBsaXN0SXRlbS5hcHBlbmQoaWNvbik7XHJcbiAgICAgIGxpc3RJdGVtLmFwcGVuZChwcm9qZWN0TmFtZSk7XHJcblxyXG4gICAgICBsaXN0SXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnV2hpdGUnO1xyXG4gICAgICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsZXQgZ2V0UHJvamVjdEFycmF5ID0gcHJvamVjdC5wcm9qZWN0O1xyXG4gICAgICAgIFByb2plY3QucHJvdG90eXBlLmRpc3BsYXllcihnZXRQcm9qZWN0QXJyYXkpO1xyXG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IHByb2plY3QubmFtZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBuZXdQcm9qZWN0VUwuYXBwZW5kKGxpc3RJdGVtKTtcclxuXHJcbiAgICAgIC8vIE1haW4gU3BhY2UgUHJvamVjdCBDYXJkc1xyXG4gICAgICBjb25zdCBsaXN0SXRlbVRhc2tTcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGxpc3RJdGVtVGFza1NwYWNlLmNsYXNzTmFtZSA9ICdwcm9qZWN0LWNhcmQnO1xyXG4gICAgICBsaXN0SXRlbVRhc2tTcGFjZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XHJcblxyXG4gICAgICBjb25zdCBjYXJkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgY2FyZEljb24uY2xhc3NOYW1lID0gJ2ZhLXNvbGlkIGZhLWZvbGRlciBwcm9qZWN0LWNhcmQtaWNvbic7XHJcbiAgICAgIGNhcmRJY29uLnN0eWxlLmNvbG9yID0gcHJvamVjdC5jb2xvcjtcclxuICAgICAgbGlzdEl0ZW1UYXNrU3BhY2UuYXBwZW5kKGNhcmRJY29uKTtcclxuXHJcbiAgICAgIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgY2FyZFRpdGxlLmNsYXNzTmFtZSA9ICdwcm9qZWN0LWNhcmQtdGl0bGUnO1xyXG4gICAgICBjYXJkVGl0bGUuaW5uZXJUZXh0ID0gcHJvamVjdC5uYW1lO1xyXG4gICAgICBsaXN0SXRlbVRhc2tTcGFjZS5hcHBlbmQoY2FyZFRpdGxlKTtcclxuXHJcbiAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgIGRlbGV0ZUljb24uY2xhc3NOYW1lID0gJ2ZhLXNvbGlkIGZhLXRyYXNoIGRlbGV0ZS1pY29uJztcclxuICAgICAgZGVsZXRlSWNvbi5pZCA9ICdkZWxldGVQcm9qZWN0JztcclxuICAgICAgZGVsZXRlSWNvbi5zdHlsZS5wYWRkaW5nID0gJzVweCc7XHJcbiAgICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChsaXN0SXRlbVRhc2tTcGFjZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSk7XHJcbiAgICAgICAgdGhpcy5kZWxldGVQcm9qZWN0KGluZGV4KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsaXN0SXRlbVRhc2tTcGFjZS5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcclxuICAgICAgc3BhY2UuYXBwZW5kKGxpc3RJdGVtVGFza1NwYWNlKTtcclxuXHJcbiAgICAgIGxpc3RJdGVtVGFza1NwYWNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCBnZXRQcm9qZWN0QXJyYXkgPSBwcm9qZWN0LnByb2plY3Q7XHJcbiAgICAgICAgUHJvamVjdC5wcm90b3R5cGUuZGlzcGxheWVyKGdldFByb2plY3RBcnJheSk7XHJcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gcHJvamVjdC5uYW1lO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyKCkge1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICBmb290ZXIuaW5uZXJIVE1MID0gJyZjb3B5OyAyMDI0IGJ5IE1vX01hbnN1ciAnO1xyXG5cclxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBsaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL01vTWFuc3VyJztcclxuICAgIGxpbmsuY2xhc3NOYW1lID0gJ2xpbmstb2Zmc2V0LTIgbGluay1vZmZzZXQtMy1ob3ZlciBsaW5rLXVuZGVybGluZSBsaW5rLXVuZGVybGluZS1vcGFjaXR5LTAgbGluay11bmRlcmxpbmUtb3BhY2l0eS03NS1ob3Zlcic7XHJcblxyXG4gICAgY29uc3QgbGlua1RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnIE1vX01hbnN1ciBHaXRIdWInKTtcclxuICAgIGxpbmsuYXBwZW5kQ2hpbGQobGlua1RleHQpO1xyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGxpbmspO1xyXG5cclxuICAgIGNvbnN0IHJlbWFpbmluZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnLiBBbGwgcmlnaHRzIHJlc2VydmVkLicpO1xyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHJlbWFpbmluZ1RleHQpO1xyXG5cclxuICAgIGZvb3Rlci5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgIHNwYWNlLmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbiAgfVxyXG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi90b2RvLmpzXCI7XHJcbmNvbnN0IHNwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwYWNlJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdUYXNrRm9ybURPTShzZWxlY3RBcnJheSkge1xyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5pZCA9ICdmb3JtQ29udGFpbmVyJ1xyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBmb3JtLmlkID0gJ25ld1Rhc2tGb3JtJztcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgncG9wdXAtZm9ybScsICduZWVkcy12YWxpZGF0aW9uJyk7XHJcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnbm92YWxpZGF0ZScsICcnKTtcclxuICAgIFxyXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlOic7XHJcbiAgICB0aXRsZUxhYmVsLmNsYXNzTmFtZSA9ICdmb3JtLWxhYmVsJztcclxuICAgIHRpdGxlTGFiZWwuaHRtbEZvciA9ICdwcm9qZWN0VGl0bGUnO1xyXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICB0aXRsZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xyXG4gICAgdGl0bGVJbnB1dC5pZCA9ICdwcm9qZWN0VGl0bGUnO1xyXG4gICAgdGl0bGVJbnB1dC5uYW1lID0gJ3RpdGxlJztcclxuICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgdGl0bGVJbnB1dC5zdHlsZS5oZWlnaHQgPSAnNTBweCc7XHJcbiAgICBcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjonO1xyXG4gICAgZGVzY3JpcHRpb25MYWJlbC5jbGFzc05hbWUgPSAnZm9ybS1sYWJlbCc7XHJcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmh0bWxGb3IgPSAncHJvamVjdERlc2NyaXB0aW9uJztcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSAncHJvamVjdERlc2NyaXB0aW9uJztcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQubmFtZSA9ICdkZXNjcmlwdGlvbic7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0Lm1heExlbmd0aCA9IDQwXHJcbiAgICBkZXNjcmlwdGlvbklucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgIFxyXG4gICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZTonO1xyXG4gICAgZHVlRGF0ZUxhYmVsLmNsYXNzTmFtZSA9ICdmb3JtLWxhYmVsJztcclxuICAgIGR1ZURhdGVMYWJlbC5odG1sRm9yID0gJ3Byb2plY3REdWVEYXRlJztcclxuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBkdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcclxuICAgIGR1ZURhdGVJbnB1dC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcclxuICAgIGR1ZURhdGVJbnB1dC5pZCA9ICdwcm9qZWN0RHVlRGF0ZSc7XHJcbiAgICBkdWVEYXRlSW5wdXQubmFtZSA9ICdkdWVEYXRlJztcclxuICAgIGR1ZURhdGVJbnB1dC5zdHlsZS5oZWlnaHQgPSAnNTBweCc7XHJcbiAgICBkdWVEYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgXHJcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcclxuICAgIHByaW9yaXR5TGFiZWwuY2xhc3NOYW1lID0gJ2Zvcm0tbGFiZWwnO1xyXG4gICAgcHJpb3JpdHlMYWJlbC5odG1sRm9yID0gJ3Byb2plY3RQcmlvcml0eSc7XHJcbiAgICBcclxuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5jbGFzc05hbWUgPSAnZm9ybS1zZWxlY3QnO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuaWQgPSAncHJvamVjdFByaW9yaXR5JztcclxuICAgIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSAncHJpb3JpdHknO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgcHJpb3JpdHlTZWxlY3Quc3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xyXG4gICAgXHJcbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbnMgPSBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddO1xyXG4gICAgcHJpb3JpdHlPcHRpb25zLmZvckVhY2gob3B0aW9uVGV4dCA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uVGV4dC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvblRleHQ7XHJcbiAgICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XHJcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnQ3JlYXRlIFByb2plY3QnO1xyXG4gICAgc3VibWl0QnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLXN1Y2Nlc3MgbXQtMyc7XHJcbiAgICBcclxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY2FuY2VsQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcclxuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLWRhbmdlciBtdC0zIG1zLTInO1xyXG4gICAgXHJcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcclxuXHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICBmdW5jdGlvbiBmb3JtYXREYXRlVG9ETVkoZGF0ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBbeWVhciwgbW9udGgsIGRheV0gPSBkYXRlLnNwbGl0KCctJyk7IFxyXG4gICAgICAgICAgICBjb25zdCBkYXRlT2JqZWN0ID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpOyBcclxuICAgICAgICAgICAgY29uc3QgZGF5TmFtZSA9IGRhdGVPYmplY3QudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHsgd2Vla2RheTogJ2xvbmcnIH0pOyAvLyBHZXQgdGhlIGRheSBuYW1lXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn1gO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGAke2RheU5hbWV9LCAke2Zvcm1hdHRlZERhdGV9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghZHVlRGF0ZUlucHV0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGR1ZURhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdpcy1pbnZhbGlkJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkdWVEYXRlSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaW52YWxpZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcclxuICAgICAgICBjb25zdCBkdWVEYXRlID0gZHVlRGF0ZUlucHV0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gcHJpb3JpdHlTZWxlY3QudmFsdWU7XHJcblxyXG4gICAgIFxyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGZvcm1hdERhdGVUb0RNWShkdWVEYXRlKSwgcHJpb3JpdHksIGZhbHNlKTtcclxuXHJcbiAgICAgICAgc2VsZWN0QXJyYXkucHVzaChuZXdUYXNrKTtcclxuICAgICAgICBQcm9qZWN0LnByb3RvdHlwZS5kaXNwbGF5ZXIoc2VsZWN0QXJyYXkpXHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAvLyBIaWRlIHRoZSBmb3JtIGFmdGVyIHN1Ym1pc3Npb25cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBzcGFjZS5hcHBlbmQoZm9ybUNvbnRhaW5lcik7XHJcbiAgICBcclxuICAgIHJldHVybiBmb3JtQ29udGFpbmVyO1xyXG59IiwiaW1wb3J0IG5ld1Rhc2tGb3JtRE9NIGZyb20gXCIuL3Rhc2tGb3JtLmpzXCI7XHJcbmltcG9ydCB7IHRoZU1hbmFnZXIgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XHJcbmNvbnN0IHNwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwYWNlJylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzQ29tcGxldGVkID0gZmFsc2UpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB0aGlzLmlzQ29tcGxldGVkID0gaXNDb21wbGV0ZWQ7XHJcbiAgfVxyXG5cclxuICBjb21wbGV0ZWRGdW5jKGNoZWNrYm94KSB7XHJcbiAgICB0aGlzLmlzQ29tcGxldGVkID0gY2hlY2tib3guY2hlY2tlZDtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuaXNDb21wbGV0ZWQpXHJcbiAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlZDtcclxuICB9XHJcblxyXG4gIHN0YXR1c0NoYW5nZSh0YXNrLCBzdGF0dXMpe1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB8fCBbXTtcclxuICAgIHRhc2suaXNDb21wbGV0ZWQgPSBzdGF0dXNcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XHJcbiAgICB0aGVNYW5hZ2VyKCkuc2F2ZVByb2plY3RzKClcclxuICB9XHJcbiAgXHJcbiAgZGVsZXRlVGFzayhwcm9qZWN0LCBpbmRleCkge1xyXG4gICAgY29uc3QgY29tZmlybSA9IGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBUYXNrPycpXHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpIHx8IFtdOyBcclxuICAgIGlmKGNvbWZpcm0pe1xyXG4gICAgICBwcm9qZWN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXJkLnRhc2stY2FyZFtkYXRhLWluZGV4PVwiJHtpbmRleH1cIl1gKS5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBlZGl0VGFzayh0YXNrLCBzZWxlY3RBcnJheSkge1xyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IG5ld1Rhc2tGb3JtRE9NKFtdKTtcclxuICAgIHNwYWNlLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xyXG4gIFxyXG4gICAgY29uc3QgZm9ybSA9IGZvcm1Db250YWluZXIucXVlcnlTZWxlY3RvcignZm9ybScpO1xyXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignI3Byb2plY3RUaXRsZScpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignI3Byb2plY3REZXNjcmlwdGlvbicpO1xyXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdER1ZURhdGUnKTtcclxuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFByaW9yaXR5Jyk7XHJcbiAgXHJcbiAgICAvLyBQcmUtZmlsbCB0aGUgZm9ybSB3aXRoIHRoZSBjdXJyZW50IHRhc2sgdmFsdWVzXHJcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gdGFzay50aXRsZTtcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xyXG4gICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gdGhpcy5mb3JtYXREYXRlVG9ETVkodGFzay5kdWVEYXRlKTtcclxuICAgIHByaW9yaXR5U2VsZWN0LnZhbHVlID0gdGFzay5wcmlvcml0eTtcclxuICBcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIFxyXG4gICAgICB0YXNrLnRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcclxuICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XHJcbiAgXHJcbiAgICAgIGlmIChkdWVEYXRlSW5wdXQudmFsdWUpIHtcclxuICAgICAgICB0YXNrLmR1ZURhdGUgPSB0aGlzLmZvcm1hdERhdGVUb0RNWShkdWVEYXRlSW5wdXQudmFsdWUpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgIFxyXG4gICAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHlTZWxlY3QudmFsdWU7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB8fCBbXTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuXHJcbiAgICAgIHRoZU1hbmFnZXIoKS5zYXZlUHJvamVjdHMoKTtcclxuICAgICAgUHJvamVjdC5wcm90b3R5cGUuZGlzcGxheWVyKHNlbGVjdEFycmF5KVxyXG4gICAgXHJcbiAgICAgIC8vIEhpZGUgdGhlIGZvcm0gY29udGFpbmVyXHJcbiAgICAgIGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG5cclxuICAgIGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfVxyXG4gIFxyXG5cclxuICBmb3JtYXREYXRlVG9ETVkoZGF0ZSkge1xyXG4gICAgY29uc3QgW3llYXIsIG1vbnRoLCBkYXldID0gZGF0ZS5zcGxpdCgnLScpOyAvLyBBc3N1bWluZyB0aGUgZGF0ZSBpcyBpbml0aWFsbHkgaW4gJ3llYXItbW9udGgtZGF5JyBmb3JtYXRcclxuICAgIGNvbnN0IGRhdGVPYmplY3QgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7IC8vIENyZWF0ZSBhIERhdGUgb2JqZWN0XHJcbiAgICBjb25zdCBkYXlOYW1lID0gZGF0ZU9iamVjdC50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywgeyB3ZWVrZGF5OiAnbG9uZycgfSk7IC8vIEdldCB0aGUgZGF5IG5hbWVcclxuICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn1gO1xyXG4gICAgXHJcbiAgICByZXR1cm4gYCR7ZGF5TmFtZX0sICR7Zm9ybWF0dGVkRGF0ZX1gO1xyXG4gIH1cclxuICBcclxuICBcclxufVxyXG5cclxuXHJcbiIsImltcG9ydCBUYXNrIGZyb20gXCIuL3RvZG8uanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2tET00ocHJvamVjdEFycmF5KSB7XHJcbiAgY29uc3Qgc3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BhY2UnKTtcclxuXHJcbiAgcHJvamVjdEFycmF5LmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCB0aXRsZVRleHQgPSB0YXNrLnRpdGxlO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25UZXh0ID0gdGFzay5kZXNjcmlwdGlvbjtcclxuICAgIGNvbnN0IGR1ZURhdGVUZXh0ID0gdGFzay5kdWVEYXRlO1xyXG4gICAgY29uc3QgcHJpb3JpdHlUZXh0ID0gdGFzay5wcmlvcml0eTtcclxuICAgIGNvbnN0IGlzQ29tcGxldGVkID0gdGFzay5pc0NvbXBsZXRlZDtcclxuXHJcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkLmNsYXNzTmFtZSA9ICdjYXJkIHRhc2stY2FyZCBtYi0zJztcclxuICAgIGNhcmQuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpO1xyXG5cclxuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcm93LmNsYXNzTmFtZSA9ICdyb3cgbm8tZ3V0dGVycyc7XHJcblxyXG4gICAgY29uc3QgcHJpb3JpdHlCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByaW9yaXR5QmFyLmNsYXNzTmFtZSA9ICdwcmlvcml0eS1iYXInO1xyXG4gICAgc3dpdGNoIChwcmlvcml0eVRleHQpIHtcclxuICAgICAgY2FzZSAnbG93JzpcclxuICAgICAgICBwcmlvcml0eUJhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzI4YTc0NSc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ21lZGl1bSc6XHJcbiAgICAgICAgcHJpb3JpdHlCYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmMxMDcnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdoaWdoJzpcclxuICAgICAgICBwcmlvcml0eUJhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2RjMzU0NSc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcHJpb3JpdHlCYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM2Yzc1N2QnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aXRsZUNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29sLW1kLTIgdy0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtd2hpdGUgcG9zaXRpb24tcmVsYXRpdmUnO1xyXG4gICAgdGl0bGVDb250YWluZXIuaWQgPSAndGl0bGVDb250YWluZXInO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgdGl0bGUuY2xhc3NOYW1lID0gJ2NhcmQtdGl0bGUnO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZVRleHQ7XHJcbiAgICB0aXRsZUNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwcmlvcml0eUJhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XHJcblxyXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlCYXIpO1xyXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IGxhYmVsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsYWJlbENvbnRhaW5lci5jbGFzc05hbWUgPSAnbGFiZWwtY29udGFpbmVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbic7XHJcbiAgICBcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmNsYXNzTmFtZSA9ICdsYWJlbCc7XHJcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmlubmVySFRNTCA9IGA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1ub3RlLXN0aWNreVwiPjwvaT4gRGVzY3JpcHRpb248L3NtYWxsPmA7XHJcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmlkID0gJ2Rlc2NyaXB0aW9uTGFiZWxUYXNrJztcclxuICAgIFxyXG4gICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgZHVlRGF0ZUxhYmVsLmNsYXNzTmFtZSA9ICdsYWJlbCc7XHJcbiAgICBkdWVEYXRlTGFiZWwuaW5uZXJIVE1MID0gYDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj48aSBjbGFzcz1cImZhcyBmYS1jYWxlbmRhci1kYXlcIj48L2k+IER1ZSBEYXRlPC9zbWFsbD5gO1xyXG4gICAgXHJcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgcHJpb3JpdHlMYWJlbC5jbGFzc05hbWUgPSAnbGFiZWwnO1xyXG4gICAgcHJpb3JpdHlMYWJlbC5pbm5lckhUTUwgPSBgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPjxpIGNsYXNzPVwiZmFzIGZhLWZsYWdcIj48L2k+IFByaW9yaXR5PC9zbWFsbD5gO1xyXG4gICAgXHJcbiAgICBsYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcclxuICAgIGxhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XHJcbiAgICBsYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcclxuICAgIFxyXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWxDb250YWluZXIpO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgZWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlbWVudENvbnRhaW5lci5jbGFzc05hbWUgPSAnZWxlbWVudC1jb250YWluZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic7XHJcbiAgICBlbGVtZW50Q29udGFpbmVyLmlkID0gJ2VsZW1lbnRDb250YWluZXInO1xyXG5cclxuICAgXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICdjb2wtOCBjYXJkLXRleHQgZGVzY3JpcHRpb24nO1xyXG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvblRleHQ7XHJcbiAgICBkZXNjcmlwdGlvbi5pZCA9ICdjYXJkZGVzY3JpcHRpb24nO1xyXG5cclxuICAgIGNvbnN0IHZpZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHZpZXdCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2J0bi1vdXRsaW5lLXByaW1hcnknLCAndmlldy1idXR0b24nLCAnZC1sZy1ub25lJywgJ2QtbWQtbm9uZScpO1xyXG4gICAgdmlld0J1dHRvbi5pZCA9ICd2aWV3RGVzY3JpcHRpb24nXHJcbiAgICB2aWV3QnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWV5ZVwiPjwvaT4nO1xyXG5cclxuXHJcbiAgICBsZXQgY2xpY2tDb3VudCA9IDA7XHJcblxyXG4gICAgdmlld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY2xpY2tDb3VudCsrO1xyXG4gICAgICBpZiAoY2xpY2tDb3VudCAlIDIgPT09IDEpIHtcclxuICAgICAgICBkZXNjcmlwdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIGR1ZURhdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBwcmlvcml0eS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHZpZXdCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtZXllLXNsYXNoXCI+PC9pPic7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVzY3JpcHRpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBkdWVEYXRlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgcHJpb3JpdHkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICB2aWV3QnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWV5ZVwiPjwvaT4nO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwcmlvcml0eS5jbGFzc05hbWUgPSAnY2FyZC10ZXh0IHByaW9yaXR5JztcclxuICAgIHByaW9yaXR5LmlubmVySFRNTCA9IGA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+PGkgY2xhc3M9XCJmYXMgZmEtZmxhZ1wiPjwvaT4gJHtwcmlvcml0eVRleHR9PC9zbWFsbD5gO1xyXG5cclxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkdWVEYXRlLmNsYXNzTmFtZSA9ICdjYXJkLXRleHQnO1xyXG4gICAgZHVlRGF0ZS5pbm5lckhUTUwgPSBgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPlxyXG4gICAgPGkgY2xhc3M9XCJmYXMgZmEtY2FsZW5kYXItZGF5XCI+PC9pPiAke2R1ZURhdGVUZXh0fTwvc21hbGw+YDtcclxuICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIHRydWUpXHJcblxyXG5cclxuICAgIGNvbnN0IGNhcmRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkQm9keS5jbGFzc05hbWUgPSAnY2FyZC1ib2R5JztcclxuICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKGVsZW1lbnRDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHAtMic7XHJcbiAgICBidXR0b25Db250YWluZXIuaWQgPSAnYnV0dG9uQ29udGFpbmVyJztcclxuICAgIGJ1dHRvbkNvbnRhaW5lci5zdHlsZS5wYWRkaW5nID0gJzEwcHgnO1xyXG4gICAgY29uc3QgYnV0dG9uR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ1dHRvbkdyb3VwLnN0eWxlLm1hcmdpbiA9ICcxMHB4JztcclxuXHJcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBlZGl0QnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLXdhcm5pbmcgYnRuLXNtIG0tMic7XHJcbiAgICBlZGl0QnV0dG9uLmlkID0gJ2VkaXRCdG5PZlRhc2snXHJcbiAgICBlZGl0QnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPiBFZGl0JztcclxuXHJcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi1kYW5nZXIgYnRuLXNtJztcclxuICAgIGRlbGV0ZUJ1dHRvbi5pZCA9ICdkZWxldGVidG5PZlRhc2snXHJcbiAgICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoXCI+PC9pPiBEZWxldGUnO1xyXG5cclxuICAgIGNvbnN0IGNoZWNrYm94U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNoZWNrYm94U3Bhbi5jbGFzc05hbWUgPSAnY2hlY2tib3gtc3Bhbic7XHJcbiAgICBjaGVja2JveFNwYW4uc3R5bGUubWFyZ2luID0gJzEwcHgnO1xyXG4gICAgY2hlY2tib3hTcGFuLmlkID0gJ2NoZWNrQm94U3Bhbk9mVGFzaydcclxuXHJcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcclxuICAgIGNoZWNrYm94LmNsYXNzTmFtZSA9ICdmb3JtLWNoZWNrLWlucHV0IGZvcm0tY2hlY2staW5wdXQtbGcnO1xyXG4gICAgY2hlY2tib3guYXJpYUxhYmVsID0gJ1Rhc2sgQ29tcGxldGUnO1xyXG5cclxuICAgIGNvbnN0IHN0YXR1c1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBzdGF0dXNUZXh0LmNsYXNzTmFtZSA9ICdzdGF0dXMtdGV4dCc7XHJcbiAgXHJcbiAgICAvL0FQUEVOREVSXHJcbiAgICBlbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuICAgIGVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodmlld0J1dHRvbilcclxuICAgIGVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XHJcbiAgICBlbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcclxuXHJcbiAgICBjaGVja2JveFNwYW4uYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG4gICAgY2hlY2tib3hTcGFuLmFwcGVuZENoaWxkKHN0YXR1c1RleHQpO1xyXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94U3Bhbik7XHJcblxyXG4gICAgYnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XHJcbiAgICBidXR0b25Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkdyb3VwKTtcclxuXHJcbiAgICByb3cuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xyXG4gICAgcm93LmFwcGVuZENoaWxkKGNhcmRCb2R5KTtcclxuICAgIHJvdy5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xyXG5cclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgIHNwYWNlLmFwcGVuZENoaWxkKGNhcmQpO1xyXG5cclxuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIFRhc2sucHJvdG90eXBlLmVkaXRUYXNrKHRhc2ssIHByb2plY3RBcnJheSk7XHJcbiAgICB9KTtcclxuXHJcbiAgaWYgKGlzQ29tcGxldGVkKSB7XHJcbiAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgIHN0YXR1c1RleHQudGV4dENvbnRlbnQgPSAnQ29tcGxldGVkJztcclxuICAgIGNoZWNrYm94U3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xyXG4gICAgcm93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdsaWdodGdyZXknXHJcbiAgICBjaGVja2JveC5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XHJcbiAgICBjaGVja2JveFNwYW4uc3R5bGUucGFkZGluZyA9ICcxNXB4JztcclxufSBlbHNlIHtcclxuICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIHN0YXR1c1RleHQudGV4dENvbnRlbnQgPSAnSW5jb21wbGV0ZSc7XHJcbiAgICBjaGVja2JveFNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2xpZ2h0Z3JleSc7XHJcbiAgICBjaGVja2JveFNwYW4uc3R5bGUucGFkZGluZyA9ICcxNXB4JztcclxuICAgICByb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG59XHJcblxyXG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICAgIHN0YXR1c1RleHQudGV4dENvbnRlbnQgPSAnQ29tcGxldGVkJztcclxuICAgICAgY2hlY2tib3hTcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgcm93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdsaWdodGdyZXknXHJcblxyXG4gICAgICBjaGVja2JveC5zdHlsZS5jb2xvciA9ICd3aGl0ZSdcclxuICAgICAgY2hlY2tib3hTcGFuLnN0eWxlLnBhZGRpbmcgPSAnMTVweCdcclxuICAgICAgVGFzay5wcm90b3R5cGUuc3RhdHVzQ2hhbmdlKHRhc2ssIHRydWUpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdGF0dXNUZXh0LnRleHRDb250ZW50ID0gJ0luY29tcGxldGUnO1xyXG4gICAgICBjaGVja2JveFNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2xpZ2h0Z3JleSdcclxuICAgICAgY2hlY2tib3hTcGFuLnN0eWxlLnBhZGRpbmcgPSAnMTVweCdcclxuICAgICAgcm93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuXHJcbiAgICAgIFRhc2sucHJvdG90eXBlLnN0YXR1c0NoYW5nZSh0YXNrLCBmYWxzZSlcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgVGFzay5wcm90b3R5cGUuZGVsZXRlVGFzayhwcm9qZWN0QXJyYXksIGluZGV4LCB0YXNrKTtcclxuICB9KTtcclxuXHJcblxyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==