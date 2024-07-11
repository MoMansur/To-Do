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


  
      // viewButton.style.display = 'flex'
    let isClicked = true


    viewButton.addEventListener('click', ()=>{
      description.classList.toggle('d-none');
      if (isClicked) {
          viewButton.innerHTML = '<i class="fa-solid fa-eye"></i>';
          description.style.display = 'none'
          dueDate.style.display = 'flex'
          priority.style.display = 'flex'

      } else {
        description.style.display = 'flex'
        dueDate.style.display = 'none'
        priority.style.display = 'none'
        viewButton.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
      }
      isClicked =!isClicked
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

   
    


    buttonContainer.style.padding = '10px';

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
      _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.editTask(task,projectArray );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNpRDtBQUNqRDtBQUNBO0FBQ0EsNkJBQTZCLDBEQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDUG1DO0FBQ1E7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQU87QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQU87QUFDWDtBQUNBLElBQUksd0RBQWM7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isd0RBQWM7QUFDcEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUUsaUVBQWUsS0FBSyxFQUFDO0FBQ3ZCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkhtQztBQUNDO0FBQ3lEO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGLGFBQWE7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsWUFBWTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGdEQUFJO0FBQ1YsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxnREFBSTtBQUNWLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxnREFBSTtBQUNWO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQUk7QUFDUixHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7VUMvT0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wcm9qZWN0RE9NLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Byb2plY3RNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Rhc2tGb3JtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdG9kb0RPTS5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFByb2plY3RNYW5hZ2VyIGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyLmpzXCI7XHJcblxyXG4vLyBJbml0aWFsaXplIFByb2plY3RNYW5hZ2VyXHJcbmNvbnN0IG15UHJvamVjdE1hbmFnZXIgPSBuZXcgUHJvamVjdE1hbmFnZXIoKTtcclxuaWYgKG15UHJvamVjdE1hbmFnZXIuYWxsUHJvamVjdEZvbGRlci5sZW5ndGggPj0gMSkge1xyXG4gIG15UHJvamVjdE1hbmFnZXIuZGlzcGxheWVyKClcclxufVxyXG5cclxuLy8gRXhwb3J0IGZ1bmN0aW9uIHRvIGFjY2VzcyBQcm9qZWN0TWFuYWdlclxyXG5leHBvcnQgY29uc3QgdGhlTWFuYWdlciA9ICgpID0+IG15UHJvamVjdE1hbmFnZXI7XHJcblxyXG5cclxuXHJcbi8vIC8vIFNlbGVjdGluZyBlbGVtZW50cyBieSBJRFxyXG5jb25zdCB0YXNrU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1NwYWNlJyk7XHJcbmNvbnN0IGFsbFRvZG9zSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbGxUb2RvcycpO1xyXG5jb25zdCB0b2RheUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuVG9kYXlUb2RvcycpO1xyXG5jb25zdCBjb21wbGV0ZWRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkNvbXBsZXRlZFRvZG8nKTtcclxuY29uc3QgdXBjb21pbmdJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLlVwY29taW5nVG9kbycpO1xyXG5jb25zdCBtaXNzZWRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLk1pc3NlZFRvZG8nKTtcclxuY29uc3QgaG9tZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZVBhZ2UnKTtcclxuXHJcbmNvbnN0IHNpZGViYXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhckNvbnRhaW5lcicpO1xyXG5jb25zdCBzaWRlYmFySWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlYmFySWNvbicpO1xyXG5jb25zdCBtYWluU3BhY2VDb2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpblNwYWNlQ29sJyk7XHJcbmNvbnN0IG5hdk1lbnVSb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2TWVudVJvdycpO1xyXG5cclxuXHJcbi8vIEV2ZW50IExpc3RlbmVyc1xyXG5ob21lUGFnZS5mb3JFYWNoKG1lbnUgPT4gbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBteVByb2plY3RNYW5hZ2VyLmhvbWVQYWdlKCk7XHJcbiAgbXlQcm9qZWN0TWFuYWdlci5zYXZlUHJvamVjdHMoKTtcclxufSkpO1xyXG5cclxuYWxsVG9kb3NJdGVtLmZvckVhY2gobWVudSA9PiBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIG15UHJvamVjdE1hbmFnZXIuYWxsVG9kb3MoKTtcclxuICBteVByb2plY3RNYW5hZ2VyLnNhdmVQcm9qZWN0cygpO1xyXG59KSk7XHJcblxyXG50b2RheUl0ZW0uZm9yRWFjaChtZW51ID0+IG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ1RvZGF5IGl0ZW0gY2xpY2tlZCcpO1xyXG4gIG15UHJvamVjdE1hbmFnZXIudG9kYXlUb2RvcygpO1xyXG4gIG15UHJvamVjdE1hbmFnZXIuc2F2ZVByb2plY3RzKCk7XHJcbn0pKTtcclxuXHJcbmNvbXBsZXRlZEl0ZW0uZm9yRWFjaChtZW51ID0+IG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgbXlQcm9qZWN0TWFuYWdlci5jb21wbGV0ZWRUYXNrKCk7XHJcbiAgbXlQcm9qZWN0TWFuYWdlci5zYXZlUHJvamVjdHMoKTtcclxufSkpO1xyXG5cclxudXBjb21pbmdJdGVtLmZvckVhY2gobWVudSA9PiBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIG15UHJvamVjdE1hbmFnZXIucGVuZGluZ1RvZG8oKTtcclxufSkpO1xyXG5cclxubWlzc2VkSXRlbS5mb3JFYWNoKG1lbnUgPT4gbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAvLyBIYW5kbGUgY2xpY2sgb24gTWlzc2VkIGl0ZW1cclxuICBteVByb2plY3RNYW5hZ2VyLm1pc3NlZFRhc2tzKClcclxufSkpO1xyXG5cclxubGV0IGlzQ2xpY2tlZCA9IHRydWVcclxuc2lkZWJhckljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgaWYgKGlzQ2xpY2tlZCkge1xyXG4gICAgc2lkZWJhckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgbWFpblNwYWNlQ29sLmNsYXNzTmFtZSA9ICdjb2wtMTInO1xyXG4gICAgbmF2TWVudVJvdy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIHRhc2tTcGFjZS5zdHlsZS5wYWRkaW5nID0gJzEwcHgnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzaWRlYmFyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgbWFpblNwYWNlQ29sLmNsYXNzTmFtZSA9ICdjb2wtMTAnO1xyXG4gICAgbmF2TWVudVJvdy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxuICBpc0NsaWNrZWQgPSAhaXNDbGlja2VkO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbiIsImV4cG9ydCBmdW5jdGlvbiBsb2FkUHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCkge1xyXG4gIGNvbnN0IHByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJyk7XHJcbiAgcmV0dXJuIHByb2plY3RzID8gSlNPTi5wYXJzZShwcm9qZWN0cykgOiBbXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKGFsbFByb2plY3RGb2xkZXIpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0Rm9sZGVyKSk7XHJcbn0iLCJpbXBvcnQgdGFza0RPTSBmcm9tIFwiLi90b2RvRE9NLmpzXCI7XHJcbmltcG9ydCBuZXdUYXNrRm9ybURPTSBmcm9tIFwiLi90YXNrRm9ybS5qc1wiO1xyXG5cclxuY29uc3Qgc3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BhY2UnKTtcclxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBjb2xvcikge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMucHJvamVjdCA9IFtdO1xyXG4gIH1cclxuXHJcblxyXG4gIHNpbXBsZURpc3BsYXllcihhcnJheSl7XHJcbiAgICB0YXNrRE9NKGFycmF5KVxyXG4gIH1cclxuICBcclxuICBkaXNwbGF5ZXIoYXJyYXkpIHtcclxuICAgIHNwYWNlLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB0YXNrRE9NKGFycmF5KVxyXG4gICAgdGhpcy5kb20oKTtcclxuICAgIG5ld1Rhc2tGb3JtRE9NKGFycmF5KVxyXG4gICAgdGhpcy5uZXdUYXNrRm9ybUJ0bihhcnJheSlcclxuICB9XHJcblxyXG5cclxuICBuZXdUYXNrRm9ybUJ0bihzZWxlY3RBcnJheSl7XHJcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tCdXR0b24nKTtcclxuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRoZUZvcm0gPSBuZXdUYXNrRm9ybURPTShzZWxlY3RBcnJheSk7XHJcbiAgICAgIHNwYWNlLmFwcGVuZCh0aGVGb3JtKTtcclxuICAgICAgdGhlRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZG9tKCkge1xyXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYWRkVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XHJcbiAgICBhZGRUYXNrQnV0dG9uLmlkID0gJ2FkZFRhc2tCdXR0b24nO1xyXG4gICAgYWRkVGFza0J1dHRvbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi1zZWNvbmRhcnknO1xyXG4gICAgYWRkVGFza0J1dHRvbi5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgIHNwYWNlLmFwcGVuZChhZGRUYXNrQnV0dG9uKTtcclxuICB9XHJcblxyXG5cclxuXHJcbn1cclxuIiwiY29uc3QgdGFza1NwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tTcGFjZScpXHJcbmNvbnN0IHNwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwYWNlJylcclxuXHJcblxyXG5jb25zdCBtb2RhbCA9IChmdW5jdGlvbigpIHtcclxuICAgIC8vIE1vZGFsIGNvbnRhaW5lclxyXG4gICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdtb2RhbCc7XHJcbiAgXHJcbiAgICAvLyBNb2RhbCBjb250ZW50XHJcbiAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsQ29udGVudC5jbGFzc05hbWUgPSAnbW9kYWwtY29udGVudCc7XHJcbiAgXHJcbiAgICAvLyBNb2RhbCBoZWFkZXJcclxuICAgIGNvbnN0IG1vZGFsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb2RhbEhlYWRlci5jbGFzc05hbWUgPSAnbW9kYWwtaGVhZGVyJztcclxuICAgIGNvbnN0IG1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgbW9kYWxUaXRsZS50ZXh0Q29udGVudCA9ICdOZXcgUHJvamVjdCc7XHJcbiAgICBtb2RhbEhlYWRlci5hcHBlbmRDaGlsZChtb2RhbFRpdGxlKTtcclxuICBcclxuICAgIC8vIENsb3NlIGJ1dHRvblxyXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBjbG9zZUJ1dHRvbi5jbGFzc05hbWUgPSAnY2xvc2UnO1xyXG4gICAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSAnw5cnO1xyXG4gICAgbW9kYWxIZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xyXG4gIFxyXG4gICAgLy8gTW9kYWwgYm9keVxyXG4gICAgY29uc3QgbW9kYWxCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb2RhbEJvZHkuY2xhc3NOYW1lID0gJ21vZGFsLWJvZHknO1xyXG4gIFxyXG4gICAgLy8gUHJvamVjdCBOYW1lIGlucHV0XHJcbiAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QgTmFtZTonO1xyXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIG5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgbmFtZUlucHV0LmlkID0gJ3Byb2plY3ROYW1lJztcclxuICAgIG5hbWVJbnB1dC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcclxuICAgIG1vZGFsQm9keS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xyXG4gICAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XHJcbiAgXHJcbiAgICAvLyBPcHRpb25hbCBDb2xvciBTZWxlY3RvciAoZXhhbXBsZSlcclxuICAgIGNvbnN0IGNvbG9yTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgY29sb3JMYWJlbC50ZXh0Q29udGVudCA9ICdDb2xvcjonO1xyXG4gICAgY29uc3QgY29sb3JTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgIGNvbG9yU2VsZWN0LmlkID0gJ3Byb2plY3RDb2xvcic7XHJcbiAgICBjb2xvclNlbGVjdC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcclxuICAgIGNvbnN0IGNvbG9yT3B0aW9ucyA9IFsnTm9uZScsICdSZWQnLCAnR3JlZW4nLCAnQmx1ZScsICdQaW5rJywgJ1llbGxvdycsICdCcm93biddO1xyXG4gICAgY29sb3JPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICBvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gb3B0aW9uO1xyXG4gICAgICBjb2xvclNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcclxuICAgIH0pO1xyXG4gICAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKGNvbG9yTGFiZWwpO1xyXG4gICAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKGNvbG9yU2VsZWN0KTtcclxuICBcclxuICAgIC8vIFNhdmUgYnV0dG9uXHJcbiAgICBjb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBzYXZlQnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLXByaW1hcnkgbXQtMic7XHJcbiAgICBzYXZlQnV0dG9uLmlkID0gJ3NhdmVCdG5OZXdQcm9qZWN0J1xyXG4gICAgc2F2ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDcmVhdGUgRm9sZGVyJztcclxuICAgIG1vZGFsQm9keS5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcclxuXHJcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XHJcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICAgIGNhbmNlbEJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi1kYW5nZXIgbXQtMiBtcy0yJztcclxuICAgIFxyXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuICAgIG1vZGFsQm9keS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xyXG4gIFxyXG4gICAgLy8gQXBwZW5kIGFsbCBwYXJ0cyB0byBtb2RhbCBjb250ZW50XHJcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxIZWFkZXIpO1xyXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsQm9keSk7XHJcbiAgICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xyXG4gIFxyXG4gICAgLy8gRXZlbnQgbGlzdGVuZXIgZm9yIGNsb3NlIGJ1dHRvblxyXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuICBcclxuICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gbmFtZUlucHV0LnZhbHVlO1xyXG4gICAgICBjb25zdCBwcm9qZWN0Q29sb3IgPSBjb2xvclNlbGVjdC52YWx1ZTtcclxuICAgICAgY2xvc2VNb2RhbCgpO1xyXG4gIFxyXG4gICAgIFxyXG4gICBcclxuICBcclxuICAgIH0pO1xyXG4gIFxyXG4gICBcclxuICAgIC8vIEZ1bmN0aW9uIHRvIGNsb3NlIHRoZSBtb2RhbFxyXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcclxuICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuICBcclxuICAgIC8vIEZ1bmN0aW9uIHRvIG9wZW4gdGhlIG1vZGFsXHJcbiAgICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XHJcbiAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBzcGFjZS5hcHBlbmQobW9kYWxDb250YWluZXIpXHJcbiAgICAgIG5hbWVJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICBjb2xvclNlbGVjdC5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgIH1cclxuICBcclxuXHJcbiAgICAvLyBFeHBvcnQgbW9kYWwgZnVuY3Rpb25zXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBvcGVuTW9kYWwsXHJcbiAgICAgIGNsb3NlTW9kYWwsXHJcbiAgICAgIHNhdmVCdXR0b24sXHJcbiAgICAgIG5hbWVJbnB1dCxcclxuICAgICAgY29sb3JTZWxlY3QsXHJcbiAgICB9O1xyXG4gIH0pKCk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgbW9kYWw7XHJcbiAgXHJcbiAiLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCBtb2RhbCBmcm9tIFwiLi9wcm9qZWN0RE9NLmpzXCI7XHJcbmltcG9ydCB7IGxvYWRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UsIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UuanMnO1xyXG5cclxuY29uc3QgdGFza1NwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tTcGFjZScpO1xyXG5jb25zdCBzcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGFjZScpO1xyXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdE1hbmFnZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5hbGxQcm9qZWN0Rm9sZGVyID0gW107XHJcbiAgICB0aGlzLmxvYWRQcm9qZWN0cygpO1xyXG5cclxuICAgIGlmICh0aGlzLmFsbFByb2plY3RGb2xkZXIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMudXNlckRhdGEoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZXJEYXRhKCkge1xyXG4gICAgY29uc3QgbmFtZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZUZvcm0nKTtcclxuICAgIG5hbWVGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgIGNvbnN0IHVzZXJOYW1lU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJOYW1lJykpIHx8ICdVc2VyJztcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyTmFtZScsIEpTT04uc3RyaW5naWZ5KHVzZXJOYW1lU3RvcmFnZSkpO1xyXG5cclxuICAgIGNvbnN0IG5hdlVzZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdlVzZXJOYW1lJyk7XHJcbiAgICBuYW1lRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHVzZXJOYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlck5hbWUnKTtcclxuICAgICAgY29uc3QgdXNlck5hbWUgPSB1c2VyTmFtZUlucHV0LnZhbHVlO1xyXG5cclxuICAgICAgaWYgKHVzZXJOYW1lKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJOYW1lJywgSlNPTi5zdHJpbmdpZnkodXNlck5hbWUpKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnTmFtZSBzYXZlZDonLCB1c2VyTmFtZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkTmV3UHJvamVjdCgwLCAnRGVmYXVsdCcsICdibGFjaycpO1xyXG4gICAgICAgIG5hbWVGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5ZXIoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVXNlciBuYW1lIGlzIGVtcHR5LicpO1xyXG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvck1lc3NhZ2UnKTtcclxuICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSAnTmFtZSBjYW5ub3QgYmUgZW1wdHkuJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBob21lUGFnZSgpIHtcclxuICAgIHNwYWNlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjY2VkYmU5JztcclxuICAgIHRpdGxlLmlubmVySFRNTCA9ICdIb21lJztcclxuICAgIHRoaXMuZGlzcGxheWVyKCk7XHJcbiAgfVxyXG5cclxuICBhbGxUb2RvcygpIHtcclxuICAgIHNwYWNlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gJ0FsbCBUb2Rvcyc7XHJcblxyXG4gICAgdGhpcy5hbGxQcm9qZWN0Rm9sZGVyLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICAgIGNvbnN0IGFsbFRvZG9zVmFyID0gdG9kby5wcm9qZWN0O1xyXG4gICAgICBpZiAoYWxsVG9kb3NWYXIgPT09ICcnKSB7XHJcbiAgICAgICAgc3BhY2UuaW5uZXJIVE1MID0gJzxoND5ObyBUYXNrIEZvdW5kPC9oND4nO1xyXG4gICAgICB9XHJcbiAgICAgIFByb2plY3QucHJvdG90eXBlLnNpbXBsZURpc3BsYXllcihhbGxUb2Rvc1Zhcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbXBsZXRlZFRhc2soKSB7XHJcbiAgICBzcGFjZS5pbm5lckhUTUwgPSAnJztcclxuICAgIHRpdGxlLmlubmVyVGV4dCA9ICdDb21wbGV0ZWQgVGFza3MnO1xyXG4gICAgbGV0IGNvbXBsZXRlZFRhc2tzRm91bmQgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmFsbFByb2plY3RGb2xkZXIuZm9yRWFjaChwcm9qZWN0cyA9PiB7XHJcbiAgICAgIHByb2plY3RzLnByb2plY3QuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICBpZiAodGFzay5pc0NvbXBsZXRlZCkge1xyXG4gICAgICAgICAgY29tcGxldGVkVGFza3NGb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICBQcm9qZWN0LnByb3RvdHlwZS5zaW1wbGVEaXNwbGF5ZXIoW3Rhc2tdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFjb21wbGV0ZWRUYXNrc0ZvdW5kKSB7XHJcbiAgICAgIHNwYWNlLmlubmVySFRNTCA9ICc8aDQ+Tm8gQ29tcGxldGVkIFRhc2sgRm91bmQ8L2g0Pic7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwZW5kaW5nVG9kbygpIHtcclxuICAgIHNwYWNlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gJ1BlbmRpbmcgVGFza3MnO1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgcGVuZGluZ1Rhc2tzID0gW107XHJcblxyXG4gICAgdGhpcy5hbGxQcm9qZWN0Rm9sZGVyLmZvckVhY2gocHJvamVjdHMgPT4ge1xyXG4gICAgICBwcm9qZWN0cy5wcm9qZWN0LmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IG5ldyBEYXRlKHRhc2suZHVlRGF0ZSk7XHJcbiAgICAgICAgaWYgKHRhc2suaXNDb21wbGV0ZWQgPT09IGZhbHNlICYmIHRvZGF5IDw9IGR1ZURhdGUpIHtcclxuICAgICAgICAgIHBlbmRpbmdUYXNrcy5wdXNoKHRhc2spO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocGVuZGluZ1Rhc2tzLmxlbmd0aCA+IDApIHtcclxuICAgICAgcGVuZGluZ1Rhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgUHJvamVjdC5wcm90b3R5cGUuc2ltcGxlRGlzcGxheWVyKFt0YXNrXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3BhY2UuaW5uZXJIVE1MID0gJzxoND5ObyBQZW5kaW5nIFRhc2tzIEZvdW5kPC9oND4nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9kYXlUb2RvcygpIHtcclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIHdlZWtkYXk6ICdsb25nJyxcclxuICAgICAgZGF5OiAnMi1kaWdpdCcsXHJcbiAgICAgIG1vbnRoOiAnMi1kaWdpdCcsXHJcbiAgICAgIHllYXI6ICdudW1lcmljJ1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvY2FsRGF0ZSA9IHRvZGF5LnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tR0InLCBvcHRpb25zKTtcclxuICAgIHNwYWNlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gJ1RvZGF5IFRhc2tzJztcclxuXHJcbiAgICB0aGlzLmFsbFByb2plY3RGb2xkZXIuZm9yRWFjaChwcm9qZWN0cyA9PiB7XHJcbiAgICAgIHByb2plY3RzLnByb2plY3QuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICBpZiAodGFzay5kdWVEYXRlID09PSBsb2NhbERhdGUpIHtcclxuICAgICAgICAgIFByb2plY3QucHJvdG90eXBlLnNpbXBsZURpc3BsYXllcihbdGFza10pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG1pc3NlZFRhc2tzKCkge1xyXG4gICAgc3BhY2UuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSAnTWlzc2VkIFRhc2tzJztcclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IG1pc3NlZFRhc2tzID0gW107XHJcblxyXG4gICAgdGhpcy5hbGxQcm9qZWN0Rm9sZGVyLmZvckVhY2gocHJvamVjdHMgPT4ge1xyXG4gICAgICBwcm9qZWN0cy5wcm9qZWN0LmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IG5ldyBEYXRlKHRhc2suZHVlRGF0ZSk7XHJcbiAgICAgICAgaWYgKHRhc2suaXNDb21wbGV0ZWQgPT09IGZhbHNlICYmIHRvZGF5ID4gZHVlRGF0ZSkge1xyXG4gICAgICAgICAgbWlzc2VkVGFza3MucHVzaCh0YXNrKTtcclxuICAgICAgICAgIHRpdGxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAobWlzc2VkVGFza3MubGVuZ3RoID4gMCkge1xyXG4gICAgICBtaXNzZWRUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgIFByb2plY3QucHJvdG90eXBlLnNpbXBsZURpc3BsYXllcihbdGFza10pO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNwYWNlLmlubmVySFRNTCA9ICc8aDQ+Tm8gTWlzc2VkIFRhc2tzIEZvdW5kPC9oND4nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9hZFByb2plY3RzKCkge1xyXG4gICAgdGhpcy5hbGxQcm9qZWN0Rm9sZGVyID0gbG9hZFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVByb2plY3RzKCkge1xyXG4gICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UodGhpcy5hbGxQcm9qZWN0Rm9sZGVyKTtcclxuICB9XHJcblxyXG4gIGFkZE5ld1Byb2plY3QoaWQsIG5hbWUsIGNvbG9yKSB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoaWQsIG5hbWUsIGNvbG9yKTtcclxuICAgIHRoaXMuYWxsUHJvamVjdEZvbGRlci5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgdGhpcy5zYXZlUHJvamVjdHMoKTtcclxuICAgIHJldHVybiBuZXdQcm9qZWN0O1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlUHJvamVjdChpbmRleCkge1xyXG4gICAgY29uc3QgY29tZmlybSA9IGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBUYXNrPycpO1xyXG4gICAgaWYgKGNvbWZpcm0pIHtcclxuICAgICAgdGhpcy5hbGxQcm9qZWN0Rm9sZGVyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIHRoaXMuc2F2ZVByb2plY3RzKCk7XHJcbiAgICAgIHRoaXMucHJvamVjdFBhZ2VhbmRTaWRlQmFyRE9NKHRoaXMuYWxsUHJvamVjdEZvbGRlcik7XHJcbiAgICAgIHRoaXMubmV3UHJvamVjdEJ0bigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGlzcGxheWVyKCkge1xyXG4gICAgc3BhY2UuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSAnSG9tZSc7XHJcbiAgICBuYXZVc2VyTmFtZS50ZXh0Q29udGVudCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJOYW1lJykpO1xyXG5cclxuICAgIHNwYWNlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xyXG4gICAgdGhpcy5wcm9qZWN0UGFnZWFuZFNpZGVCYXJET00odGhpcy5hbGxQcm9qZWN0Rm9sZGVyKTtcclxuICAgIHRoaXMubmV3UHJvamVjdEJ0bigpO1xyXG4gICAgdGhpcy5uZXdQcm9qZWN0Rm9ybSh0aGlzLmFsbFByb2plY3RGb2xkZXIpO1xyXG4gICAgdGhpcy5mb290ZXIoKTtcclxuICB9XHJcblxyXG4gIG5ld1Byb2plY3RCdG4oKSB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBuZXdQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcclxuICAgIG5ld1Byb2plY3RCdG4uaWQgPSAnYWRkUHJvamVjdCc7XHJcbiAgICBuZXdQcm9qZWN0QnRuLmNsYXNzTmFtZSA9ICdidG4gYnRuLXByaW1hcnkgY3JlYXRlTmV3UHJvamVjdCc7XHJcbiAgICBuZXdQcm9qZWN0QnRuLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgc3BhY2UuYXBwZW5kKG5ld1Byb2plY3RCdG4pO1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZU5ld1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3JlYXRlTmV3UHJvamVjdCcpO1xyXG4gICAgY3JlYXRlTmV3UHJvamVjdC5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBtb2RhbC5vcGVuTW9kYWwoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5ld1Byb2plY3RGb3JtKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHNhdmVCdG5OZXdQcm9qZWN0ID0gbW9kYWwuc2F2ZUJ1dHRvbjtcclxuICAgIHNhdmVCdG5OZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBuYW1lID0gbW9kYWwubmFtZUlucHV0LnZhbHVlO1xyXG4gICAgICBjb25zdCBjb2xvciA9IG1vZGFsLmNvbG9yU2VsZWN0LnZhbHVlO1xyXG4gICAgICBjb25zdCBpZCA9IHRoaXMuYWxsUHJvamVjdEZvbGRlci5sZW5ndGggKyAxO1xyXG5cclxuICAgICAgY29uc3QgZHVwbGljYXRlUHJvamVjdCA9IHRoaXMuYWxsUHJvamVjdEZvbGRlci5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSBuYW1lKTtcclxuXHJcbiAgICAgIGlmIChkdXBsaWNhdGVQcm9qZWN0KSB7XHJcbiAgICAgICAgYWxlcnQoJ0EgcHJvamVjdCB3aXRoIHRoaXMgbmFtZSBhbHJlYWR5IGV4aXN0cy4nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmFkZE5ld1Byb2plY3QoaWQsIG5hbWUsIGNvbG9yKTtcclxuICAgICAgICB0aGlzLnByb2plY3RQYWdlYW5kU2lkZUJhckRPTShwcm9qZWN0KTtcclxuICAgICAgICBtb2RhbC5jbG9zZU1vZGFsKCk7XHJcbiAgICAgICAgdGhpcy5uZXdQcm9qZWN0QnRuKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWRQcm9qZWN0QXJyYXkoYXJyYXkpIHtcclxuICAgIFByb2plY3QucHJvdG90eXBlLnNpbXBsZURpc3BsYXllcihhcnJheSk7XHJcbiAgICB0aGlzLnNhdmVQcm9qZWN0cygpO1xyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaGVyKGRpc0FycmF5KSB7XHJcbiAgICBQcm9qZWN0LnByb3RvdHlwZS5zaW1wbGVEaXNwbGF5ZXIoZGlzQXJyYXkpO1xyXG4gICAgdGhpcy5zYXZlUHJvamVjdHMoKTtcclxuICB9XHJcblxyXG4gIHByb2plY3RQYWdlYW5kU2lkZUJhckRPTShwcm9qZWN0cykge1xyXG4gICAgY29uc3QgbmV3UHJvamVjdFVMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3RVTCcpO1xyXG4gICAgbmV3UHJvamVjdFVMLmlubmVySFRNTCA9ICcnO1xyXG4gICAgc3BhY2UuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSAnTXkgUHJvamVjdHMnO1xyXG5cclxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XHJcbiAgICAgIC8vIFNpZGViYXIgUHJvamVjdCBMaXN0XHJcbiAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgbGlzdEl0ZW0uY2xhc3NOYW1lID0gJ2xpc3QtZ3JvdXAtaXRlbSc7XHJcbiAgICAgIGxpc3RJdGVtLmlkID0gJ3Byb2plY3RGb2xkZXInO1xyXG4gICAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XHJcblxyXG4gICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICBpY29uLmNsYXNzTmFtZSA9ICdmYS1zb2xpZCBmYS1mb2xkZXIgcHJvamVjdC1pY29uJztcclxuICAgICAgaWNvbi5zdHlsZS5jb2xvciA9IHByb2plY3QuY29sb3I7XHJcblxyXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgcHJvamVjdE5hbWUuY2xhc3NOYW1lID0gJ3Byb2plY3QtbmFtZSc7XHJcbiAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xyXG5cclxuICAgICAgbGlzdEl0ZW0uYXBwZW5kKGljb24pO1xyXG4gICAgICBsaXN0SXRlbS5hcHBlbmQocHJvamVjdE5hbWUpO1xyXG5cclxuICAgICAgbGlzdEl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ1doaXRlJztcclxuICAgICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGdldFByb2plY3RBcnJheSA9IHByb2plY3QucHJvamVjdDtcclxuICAgICAgICBQcm9qZWN0LnByb3RvdHlwZS5kaXNwbGF5ZXIoZ2V0UHJvamVjdEFycmF5KTtcclxuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBwcm9qZWN0Lm5hbWU7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbmV3UHJvamVjdFVMLmFwcGVuZChsaXN0SXRlbSk7XHJcblxyXG4gICAgICAvLyBNYWluIFNwYWNlIFByb2plY3QgQ2FyZHNcclxuICAgICAgY29uc3QgbGlzdEl0ZW1UYXNrU3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICBsaXN0SXRlbVRhc2tTcGFjZS5jbGFzc05hbWUgPSAncHJvamVjdC1jYXJkJztcclxuICAgICAgbGlzdEl0ZW1UYXNrU3BhY2Uuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpO1xyXG5cclxuICAgICAgY29uc3QgY2FyZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgIGNhcmRJY29uLmNsYXNzTmFtZSA9ICdmYS1zb2xpZCBmYS1mb2xkZXIgcHJvamVjdC1jYXJkLWljb24nO1xyXG4gICAgICBjYXJkSWNvbi5zdHlsZS5jb2xvciA9IHByb2plY3QuY29sb3I7XHJcbiAgICAgIGxpc3RJdGVtVGFza1NwYWNlLmFwcGVuZChjYXJkSWNvbik7XHJcblxyXG4gICAgICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIGNhcmRUaXRsZS5jbGFzc05hbWUgPSAncHJvamVjdC1jYXJkLXRpdGxlJztcclxuICAgICAgY2FyZFRpdGxlLmlubmVyVGV4dCA9IHByb2plY3QubmFtZTtcclxuICAgICAgbGlzdEl0ZW1UYXNrU3BhY2UuYXBwZW5kKGNhcmRUaXRsZSk7XHJcblxyXG4gICAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICBkZWxldGVJY29uLmNsYXNzTmFtZSA9ICdmYS1zb2xpZCBmYS10cmFzaCBkZWxldGUtaWNvbic7XHJcbiAgICAgIGRlbGV0ZUljb24uaWQgPSAnZGVsZXRlUHJvamVjdCc7XHJcbiAgICAgIGRlbGV0ZUljb24uc3R5bGUucGFkZGluZyA9ICc1cHgnO1xyXG4gICAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQobGlzdEl0ZW1UYXNrU3BhY2UuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpO1xyXG4gICAgICAgIHRoaXMuZGVsZXRlUHJvamVjdChpbmRleCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGlzdEl0ZW1UYXNrU3BhY2UuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XHJcbiAgICAgIHNwYWNlLmFwcGVuZChsaXN0SXRlbVRhc2tTcGFjZSk7XHJcblxyXG4gICAgICBsaXN0SXRlbVRhc2tTcGFjZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsZXQgZ2V0UHJvamVjdEFycmF5ID0gcHJvamVjdC5wcm9qZWN0O1xyXG4gICAgICAgIFByb2plY3QucHJvdG90eXBlLmRpc3BsYXllcihnZXRQcm9qZWN0QXJyYXkpO1xyXG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IHByb2plY3QubmFtZTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZvb3RlcigpIHtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gICAgZm9vdGVyLmlubmVySFRNTCA9ICcmY29weTsgMjAyNCBieSBNb19NYW5zdXIgJztcclxuXHJcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9Nb01hbnN1cic7XHJcbiAgICBsaW5rLmNsYXNzTmFtZSA9ICdsaW5rLW9mZnNldC0yIGxpbmstb2Zmc2V0LTMtaG92ZXIgbGluay11bmRlcmxpbmUgbGluay11bmRlcmxpbmUtb3BhY2l0eS0wIGxpbmstdW5kZXJsaW5lLW9wYWNpdHktNzUtaG92ZXInO1xyXG5cclxuICAgIGNvbnN0IGxpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyBNb19NYW5zdXIgR2l0SHViJyk7XHJcbiAgICBsaW5rLmFwcGVuZENoaWxkKGxpbmtUZXh0KTtcclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChsaW5rKTtcclxuXHJcbiAgICBjb25zdCByZW1haW5pbmdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4nKTtcclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChyZW1haW5pbmdUZXh0KTtcclxuXHJcbiAgICBmb290ZXIuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICBzcGFjZS5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG4gIH1cclxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcclxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdG9kby5qc1wiO1xyXG5jb25zdCBzcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGFjZScpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3VGFza0Zvcm1ET00oc2VsZWN0QXJyYXkpIHtcclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXInKTtcclxuICAgIGZvcm1Db250YWluZXIuaWQgPSAnZm9ybUNvbnRhaW5lcidcclxuXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgZm9ybS5pZCA9ICduZXdUYXNrRm9ybSc7XHJcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3BvcHVwLWZvcm0nLCAnbmVlZHMtdmFsaWRhdGlvbicpO1xyXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ25vdmFsaWRhdGUnLCAnJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZTonO1xyXG4gICAgdGl0bGVMYWJlbC5jbGFzc05hbWUgPSAnZm9ybS1sYWJlbCc7XHJcbiAgICB0aXRsZUxhYmVsLmh0bWxGb3IgPSAncHJvamVjdFRpdGxlJztcclxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgdGl0bGVJbnB1dC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcclxuICAgIHRpdGxlSW5wdXQuaWQgPSAncHJvamVjdFRpdGxlJztcclxuICAgIHRpdGxlSW5wdXQubmFtZSA9ICd0aXRsZSc7XHJcbiAgICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgIHRpdGxlSW5wdXQuc3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xyXG4gICAgXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246JztcclxuICAgIGRlc2NyaXB0aW9uTGFiZWwuY2xhc3NOYW1lID0gJ2Zvcm0tbGFiZWwnO1xyXG4gICAgZGVzY3JpcHRpb25MYWJlbC5odG1sRm9yID0gJ3Byb2plY3REZXNjcmlwdGlvbic7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCc7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gJ3Byb2plY3REZXNjcmlwdGlvbic7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0Lm5hbWUgPSAnZGVzY3JpcHRpb24nO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5tYXhMZW5ndGggPSA0MFxyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICBcclxuICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6JztcclxuICAgIGR1ZURhdGVMYWJlbC5jbGFzc05hbWUgPSAnZm9ybS1sYWJlbCc7XHJcbiAgICBkdWVEYXRlTGFiZWwuaHRtbEZvciA9ICdwcm9qZWN0RHVlRGF0ZSc7XHJcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XHJcbiAgICBkdWVEYXRlSW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCc7XHJcbiAgICBkdWVEYXRlSW5wdXQuaWQgPSAncHJvamVjdER1ZURhdGUnO1xyXG4gICAgZHVlRGF0ZUlucHV0Lm5hbWUgPSAnZHVlRGF0ZSc7XHJcbiAgICBkdWVEYXRlSW5wdXQuc3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xyXG4gICAgZHVlRGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgIFxyXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5Oic7XHJcbiAgICBwcmlvcml0eUxhYmVsLmNsYXNzTmFtZSA9ICdmb3JtLWxhYmVsJztcclxuICAgIHByaW9yaXR5TGFiZWwuaHRtbEZvciA9ICdwcm9qZWN0UHJpb3JpdHknO1xyXG4gICAgXHJcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuY2xhc3NOYW1lID0gJ2Zvcm0tc2VsZWN0JztcclxuICAgIHByaW9yaXR5U2VsZWN0LmlkID0gJ3Byb2plY3RQcmlvcml0eSc7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5uYW1lID0gJ3ByaW9yaXR5JztcclxuICAgIHByaW9yaXR5U2VsZWN0LnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgIHByaW9yaXR5U2VsZWN0LnN0eWxlLmhlaWdodCA9ICc1MHB4JztcclxuICAgIFxyXG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb25zID0gWydMb3cnLCAnTWVkaXVtJywgJ0hpZ2gnXTtcclxuICAgIHByaW9yaXR5T3B0aW9ucy5mb3JFYWNoKG9wdGlvblRleHQgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IG9wdGlvblRleHQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb25UZXh0O1xyXG4gICAgICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xyXG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBQcm9qZWN0JztcclxuICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi1zdWNjZXNzIG10LTMnO1xyXG4gICAgXHJcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XHJcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICAgIGNhbmNlbEJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi1kYW5nZXIgbXQtMyBtcy0yJztcclxuICAgIFxyXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XHJcblxyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgZnVuY3Rpb24gZm9ybWF0RGF0ZVRvRE1ZKGRhdGUpIHtcclxuICAgICAgICAgICAgY29uc3QgW3llYXIsIG1vbnRoLCBkYXldID0gZGF0ZS5zcGxpdCgnLScpOyBcclxuICAgICAgICAgICAgY29uc3QgZGF0ZU9iamVjdCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KTsgXHJcbiAgICAgICAgICAgIGNvbnN0IGRheU5hbWUgPSBkYXRlT2JqZWN0LnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCB7IHdlZWtkYXk6ICdsb25nJyB9KTsgLy8gR2V0IHRoZSBkYXkgbmFtZVxyXG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gYCR7ZGF5fS8ke21vbnRofS8ke3llYXJ9YDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBgJHtkYXlOYW1lfSwgJHtmb3JtYXR0ZWREYXRlfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoIWR1ZURhdGVJbnB1dC52YWx1ZSkge1xyXG4gICAgICAgICAgICBkdWVEYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgnaXMtaW52YWxpZCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZHVlRGF0ZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWludmFsaWQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcclxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IHByaW9yaXR5U2VsZWN0LnZhbHVlO1xyXG5cclxuICAgICBcclxuICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBmb3JtYXREYXRlVG9ETVkoZHVlRGF0ZSksIHByaW9yaXR5LCBmYWxzZSk7XHJcblxyXG4gICAgICAgIHNlbGVjdEFycmF5LnB1c2gobmV3VGFzayk7XHJcbiAgICAgICAgUHJvamVjdC5wcm90b3R5cGUuZGlzcGxheWVyKHNlbGVjdEFycmF5KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgLy8gSGlkZSB0aGUgZm9ybSBhZnRlciBzdWJtaXNzaW9uXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgc3BhY2UuYXBwZW5kKGZvcm1Db250YWluZXIpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZm9ybUNvbnRhaW5lcjtcclxufSIsImltcG9ydCBuZXdUYXNrRm9ybURPTSBmcm9tIFwiLi90YXNrRm9ybS5qc1wiO1xyXG5cclxuaW1wb3J0IHsgdGhlTWFuYWdlciB9IGZyb20gXCIuL2luZGV4LmpzXCI7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcclxuY29uc3Qgc3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BhY2UnKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaXNDb21wbGV0ZWQgPSBmYWxzZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIHRoaXMuaXNDb21wbGV0ZWQgPSBpc0NvbXBsZXRlZDtcclxuICB9XHJcblxyXG4gIGNvbXBsZXRlZEZ1bmMoY2hlY2tib3gpIHtcclxuICAgIHRoaXMuaXNDb21wbGV0ZWQgPSBjaGVja2JveC5jaGVja2VkO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5pc0NvbXBsZXRlZClcclxuICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGVkO1xyXG4gIH1cclxuXHJcbiAgc3RhdHVzQ2hhbmdlKHRhc2ssIHN0YXR1cyl7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpIHx8IFtdO1xyXG4gICAgdGFzay5pc0NvbXBsZXRlZCA9IHN0YXR1c1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuICAgIHRoZU1hbmFnZXIoKS5zYXZlUHJvamVjdHMoKVxyXG4gIH1cclxuICBcclxuICBkZWxldGVUYXNrKHByb2plY3QsIGluZGV4KSB7XHJcbiAgICBjb25zdCBjb21maXJtID0gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIFRhc2s/JylcclxuICAgIGNvbnN0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkgfHwgW107IFxyXG4gICAgaWYoY29tZmlybSl7XHJcbiAgICAgIHByb2plY3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhcmQudGFzay1jYXJkW2RhdGEtaW5kZXg9XCIke2luZGV4fVwiXWApLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGVkaXRUYXNrKHRhc2ssIHNlbGVjdEFycmF5KSB7XHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gbmV3VGFza0Zvcm1ET00oW10pO1xyXG4gICAgc3BhY2UuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XHJcbiAgXHJcbiAgICBjb25zdCBmb3JtID0gZm9ybUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFRpdGxlJyk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdERlc2NyaXB0aW9uJyk7XHJcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0RHVlRGF0ZScpO1xyXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0UHJpb3JpdHknKTtcclxuICBcclxuICAgIC8vIFByZS1maWxsIHRoZSBmb3JtIHdpdGggdGhlIGN1cnJlbnQgdGFzayB2YWx1ZXNcclxuICAgIHRpdGxlSW5wdXQudmFsdWUgPSB0YXNrLnRpdGxlO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XHJcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSB0aGlzLmZvcm1hdERhdGVUb0RNWSh0YXNrLmR1ZURhdGUpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QudmFsdWUgPSB0YXNrLnByaW9yaXR5O1xyXG4gIFxyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgXHJcbiAgICAgIHRhc2sudGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xyXG4gICAgICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcclxuICBcclxuICAgICAgaWYgKGR1ZURhdGVJbnB1dC52YWx1ZSkge1xyXG4gICAgICAgIHRhc2suZHVlRGF0ZSA9IHRoaXMuZm9ybWF0RGF0ZVRvRE1ZKGR1ZURhdGVJbnB1dC52YWx1ZSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgXHJcbiAgICAgIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eVNlbGVjdC52YWx1ZTtcclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpIHx8IFtdO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG5cclxuICAgICAgdGhlTWFuYWdlcigpLnNhdmVQcm9qZWN0cygpO1xyXG4gICAgICBQcm9qZWN0LnByb3RvdHlwZS5kaXNwbGF5ZXIoc2VsZWN0QXJyYXkpXHJcbiAgICBcclxuICAgICAgLy8gSGlkZSB0aGUgZm9ybSBjb250YWluZXJcclxuICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9XHJcbiAgXHJcblxyXG4gIGZvcm1hdERhdGVUb0RNWShkYXRlKSB7XHJcbiAgICBjb25zdCBbeWVhciwgbW9udGgsIGRheV0gPSBkYXRlLnNwbGl0KCctJyk7IC8vIEFzc3VtaW5nIHRoZSBkYXRlIGlzIGluaXRpYWxseSBpbiAneWVhci1tb250aC1kYXknIGZvcm1hdFxyXG4gICAgY29uc3QgZGF0ZU9iamVjdCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KTsgLy8gQ3JlYXRlIGEgRGF0ZSBvYmplY3RcclxuICAgIGNvbnN0IGRheU5hbWUgPSBkYXRlT2JqZWN0LnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCB7IHdlZWtkYXk6ICdsb25nJyB9KTsgLy8gR2V0IHRoZSBkYXkgbmFtZVxyXG4gICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGAke2RheX0vJHttb250aH0vJHt5ZWFyfWA7XHJcbiAgICBcclxuICAgIHJldHVybiBgJHtkYXlOYW1lfSwgJHtmb3JtYXR0ZWREYXRlfWA7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdG9kby5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFza0RPTShwcm9qZWN0QXJyYXkpIHtcclxuICBjb25zdCBzcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGFjZScpO1xyXG5cclxuICBwcm9qZWN0QXJyYXkuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IHRpdGxlVGV4dCA9IHRhc2sudGl0bGU7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblRleHQgPSB0YXNrLmRlc2NyaXB0aW9uO1xyXG4gICAgY29uc3QgZHVlRGF0ZVRleHQgPSB0YXNrLmR1ZURhdGU7XHJcbiAgICBjb25zdCBwcmlvcml0eVRleHQgPSB0YXNrLnByaW9yaXR5O1xyXG4gICAgY29uc3QgaXNDb21wbGV0ZWQgPSB0YXNrLmlzQ29tcGxldGVkO1xyXG5cclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmQuY2xhc3NOYW1lID0gJ2NhcmQgdGFzay1jYXJkIG1iLTMnO1xyXG4gICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XHJcblxyXG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByb3cuY2xhc3NOYW1lID0gJ3JvdyBuby1ndXR0ZXJzJztcclxuXHJcbiAgICBjb25zdCBwcmlvcml0eUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJpb3JpdHlCYXIuY2xhc3NOYW1lID0gJ3ByaW9yaXR5LWJhcic7XHJcbiAgICBzd2l0Y2ggKHByaW9yaXR5VGV4dCkge1xyXG4gICAgICBjYXNlICdsb3cnOlxyXG4gICAgICAgIHByaW9yaXR5QmFyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMjhhNzQ1JztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnbWVkaXVtJzpcclxuICAgICAgICBwcmlvcml0eUJhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmYzEwNyc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2hpZ2gnOlxyXG4gICAgICAgIHByaW9yaXR5QmFyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZGMzNTQ1JztcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBwcmlvcml0eUJhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzZjNzU3ZCc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRpdGxlQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb2wtbWQtMiB3LTEwMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC13aGl0ZSBwb3NpdGlvbi1yZWxhdGl2ZSc7XHJcbiAgICB0aXRsZUNvbnRhaW5lci5pZCA9ICd0aXRsZUNvbnRhaW5lcic7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICB0aXRsZS5jbGFzc05hbWUgPSAnY2FyZC10aXRsZSc7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRpdGxlVGV4dDtcclxuICAgIHRpdGxlQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHByaW9yaXR5QmFyLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcclxuXHJcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUJhcik7XHJcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gICAgY29uc3QgbGFiZWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxhYmVsQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdsYWJlbC1jb250YWluZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuJztcclxuICAgIFxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGRlc2NyaXB0aW9uTGFiZWwuY2xhc3NOYW1lID0gJ2xhYmVsJztcclxuICAgIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJIVE1MID0gYDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLW5vdGUtc3RpY2t5XCI+PC9pPiBEZXNjcmlwdGlvbjwvc21hbGw+YDtcclxuICAgIGRlc2NyaXB0aW9uTGFiZWwuaWQgPSAnZGVzY3JpcHRpb25MYWJlbFRhc2snO1xyXG4gICAgXHJcbiAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBkdWVEYXRlTGFiZWwuY2xhc3NOYW1lID0gJ2xhYmVsJztcclxuICAgIGR1ZURhdGVMYWJlbC5pbm5lckhUTUwgPSBgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPjxpIGNsYXNzPVwiZmFzIGZhLWNhbGVuZGFyLWRheVwiPjwvaT4gRHVlIERhdGU8L3NtYWxsPmA7XHJcbiAgICBcclxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBwcmlvcml0eUxhYmVsLmNsYXNzTmFtZSA9ICdsYWJlbCc7XHJcbiAgICBwcmlvcml0eUxhYmVsLmlubmVySFRNTCA9IGA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+PGkgY2xhc3M9XCJmYXMgZmEtZmxhZ1wiPjwvaT4gUHJpb3JpdHk8L3NtYWxsPmA7XHJcbiAgICBcclxuICAgIGxhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xyXG4gICAgbGFiZWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcclxuICAgIGxhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xyXG4gICAgXHJcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbENvbnRhaW5lcik7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBlbGVtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGVtZW50Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdlbGVtZW50LWNvbnRhaW5lciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJztcclxuICAgIGVsZW1lbnRDb250YWluZXIuaWQgPSAnZWxlbWVudENvbnRhaW5lcic7XHJcblxyXG4gICBcclxuXHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBkZXNjcmlwdGlvbi5jbGFzc05hbWUgPSAnY29sLTggY2FyZC10ZXh0IGRlc2NyaXB0aW9uJztcclxuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb25UZXh0O1xyXG4gICAgZGVzY3JpcHRpb24uaWQgPSAnY2FyZGRlc2NyaXB0aW9uJztcclxuXHJcbiAgICBjb25zdCB2aWV3QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB2aWV3QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tb3V0bGluZS1wcmltYXJ5JywgJ3ZpZXctYnV0dG9uJywgJ2QtbGctbm9uZScsICdkLW1kLW5vbmUnKTtcclxuICAgIHZpZXdCdXR0b24uaWQgPSAndmlld0Rlc2NyaXB0aW9uJ1xyXG4gICAgdmlld0J1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1leWVcIj48L2k+JztcclxuXHJcblxyXG4gIFxyXG4gICAgICAvLyB2aWV3QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIGxldCBpc0NsaWNrZWQgPSB0cnVlXHJcblxyXG5cclxuICAgIHZpZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdkLW5vbmUnKTtcclxuICAgICAgaWYgKGlzQ2xpY2tlZCkge1xyXG4gICAgICAgICAgdmlld0J1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1leWVcIj48L2k+JztcclxuICAgICAgICAgIGRlc2NyaXB0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICAgIGR1ZURhdGUuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgICAgcHJpb3JpdHkuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZXNjcmlwdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgICAgZHVlRGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgcHJpb3JpdHkuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIHZpZXdCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtZXllLXNsYXNoXCI+PC9pPic7XHJcbiAgICAgIH1cclxuICAgICAgaXNDbGlja2VkID0haXNDbGlja2VkXHJcbiAgfSk7XHJcblxyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwcmlvcml0eS5jbGFzc05hbWUgPSAnY2FyZC10ZXh0IHByaW9yaXR5JztcclxuICAgIHByaW9yaXR5LmlubmVySFRNTCA9IGA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+PGkgY2xhc3M9XCJmYXMgZmEtZmxhZ1wiPjwvaT4gJHtwcmlvcml0eVRleHR9PC9zbWFsbD5gO1xyXG5cclxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkdWVEYXRlLmNsYXNzTmFtZSA9ICdjYXJkLXRleHQnO1xyXG4gICAgZHVlRGF0ZS5pbm5lckhUTUwgPSBgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPlxyXG4gICAgPGkgY2xhc3M9XCJmYXMgZmEtY2FsZW5kYXItZGF5XCI+PC9pPiAke2R1ZURhdGVUZXh0fTwvc21hbGw+YDtcclxuICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIHRydWUpXHJcblxyXG5cclxuICAgIGNvbnN0IGNhcmRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkQm9keS5jbGFzc05hbWUgPSAnY2FyZC1ib2R5JztcclxuICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKGVsZW1lbnRDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHAtMic7XHJcbiAgICBidXR0b25Db250YWluZXIuaWQgPSAnYnV0dG9uQ29udGFpbmVyJztcclxuXHJcbiAgICBjb25zdCBidXR0b25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnV0dG9uR3JvdXAuc3R5bGUubWFyZ2luID0gJzEwcHgnO1xyXG5cclxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGVkaXRCdXR0b24uY2xhc3NOYW1lID0gJ2J0biBidG4td2FybmluZyBidG4tc20gbS0yJztcclxuICAgIGVkaXRCdXR0b24uaWQgPSAnZWRpdEJ0bk9mVGFzaydcclxuICAgIGVkaXRCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+IEVkaXQnO1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLWRhbmdlciBidG4tc20nO1xyXG4gICAgZGVsZXRlQnV0dG9uLmlkID0gJ2RlbGV0ZWJ0bk9mVGFzaydcclxuICAgIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtdHJhc2hcIj48L2k+IERlbGV0ZSc7XHJcblxyXG4gICBcclxuICAgIFxyXG5cclxuXHJcbiAgICBidXR0b25Db250YWluZXIuc3R5bGUucGFkZGluZyA9ICcxMHB4JztcclxuXHJcbiAgICBjb25zdCBjaGVja2JveFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBjaGVja2JveFNwYW4uY2xhc3NOYW1lID0gJ2NoZWNrYm94LXNwYW4nO1xyXG4gICAgY2hlY2tib3hTcGFuLnN0eWxlLm1hcmdpbiA9ICcxMHB4JztcclxuICAgIGNoZWNrYm94U3Bhbi5pZCA9ICdjaGVja0JveFNwYW5PZlRhc2snXHJcblxyXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgICBjaGVja2JveC5jbGFzc05hbWUgPSAnZm9ybS1jaGVjay1pbnB1dCBmb3JtLWNoZWNrLWlucHV0LWxnJztcclxuICAgIGNoZWNrYm94LmFyaWFMYWJlbCA9ICdUYXNrIENvbXBsZXRlJztcclxuXHJcbiAgICBjb25zdCBzdGF0dXNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgc3RhdHVzVGV4dC5jbGFzc05hbWUgPSAnc3RhdHVzLXRleHQnO1xyXG4gIFxyXG5cclxuXHJcbiAgICBcclxuICBcclxuICAgIGVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gICAgZWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh2aWV3QnV0dG9uKVxyXG4gICAgZWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlKTtcclxuICAgIGVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xyXG5cclxuICAgICAgIFxyXG4gICAgY2hlY2tib3hTcGFuLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuICAgIGNoZWNrYm94U3Bhbi5hcHBlbmRDaGlsZChzdGF0dXNUZXh0KTtcclxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveFNwYW4pO1xyXG5cclxuXHJcblxyXG4gICAgYnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XHJcbiAgICBidXR0b25Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG5cclxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Hcm91cCk7XHJcblxyXG4gICAgcm93LmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcclxuICAgIHJvdy5hcHBlbmRDaGlsZChjYXJkQm9keSk7XHJcbiAgICByb3cuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcclxuXHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKHJvdyk7XHJcblxyXG4gICAgc3BhY2UuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcblxyXG4gXHJcblxyXG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgVGFzay5wcm90b3R5cGUuZWRpdFRhc2sodGFzayxwcm9qZWN0QXJyYXkgKTtcclxuICAgIH0pO1xyXG5cclxuICBpZiAoaXNDb21wbGV0ZWQpIHtcclxuICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgc3RhdHVzVGV4dC50ZXh0Q29udGVudCA9ICdDb21wbGV0ZWQnO1xyXG4gICAgY2hlY2tib3hTcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbic7XHJcbiAgICByb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2xpZ2h0Z3JleSdcclxuICAgIGNoZWNrYm94LnN0eWxlLmNvbG9yID0gJ3doaXRlJztcclxuICAgIGNoZWNrYm94U3Bhbi5zdHlsZS5wYWRkaW5nID0gJzE1cHgnO1xyXG59IGVsc2Uge1xyXG4gICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgc3RhdHVzVGV4dC50ZXh0Q29udGVudCA9ICdJbmNvbXBsZXRlJztcclxuICAgIGNoZWNrYm94U3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHRncmV5JztcclxuICAgIGNoZWNrYm94U3Bhbi5zdHlsZS5wYWRkaW5nID0gJzE1cHgnO1xyXG4gICAgIHJvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbn1cclxuXHJcbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcclxuICAgICAgc3RhdHVzVGV4dC50ZXh0Q29udGVudCA9ICdDb21wbGV0ZWQnO1xyXG4gICAgICBjaGVja2JveFNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICByb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2xpZ2h0Z3JleSdcclxuXHJcbiAgICAgIGNoZWNrYm94LnN0eWxlLmNvbG9yID0gJ3doaXRlJ1xyXG4gICAgICBjaGVja2JveFNwYW4uc3R5bGUucGFkZGluZyA9ICcxNXB4J1xyXG4gICAgICBUYXNrLnByb3RvdHlwZS5zdGF0dXNDaGFuZ2UodGFzaywgdHJ1ZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0YXR1c1RleHQudGV4dENvbnRlbnQgPSAnSW5jb21wbGV0ZSc7XHJcbiAgICAgIGNoZWNrYm94U3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHRncmV5J1xyXG4gICAgICBjaGVja2JveFNwYW4uc3R5bGUucGFkZGluZyA9ICcxNXB4J1xyXG4gICAgICByb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG5cclxuICAgICAgVGFzay5wcm90b3R5cGUuc3RhdHVzQ2hhbmdlKHRhc2ssIGZhbHNlKVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuXHJcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgVGFzay5wcm90b3R5cGUuZGVsZXRlVGFzayhwcm9qZWN0QXJyYXksIGluZGV4LCB0YXNrKTtcclxuICB9KTtcclxuXHJcblxyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==