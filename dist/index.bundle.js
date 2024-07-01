/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskForm.js */ "./src/taskForm.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.js */ "./src/settings.js");


function todoFunctions(theDiv) {
  var settingsIcon = document.getElementById('settingsIcon');
  var userName = document.getElementById('userName');
  settingsIcon.addEventListener('click', function () {
    (0,_settings_js__WEBPACK_IMPORTED_MODULE_1__["default"])(theDiv, userName);
  });

  // const addTaskBtn = document.getElementById('addTask')
  // let isOn =  true
  // addTaskBtn.addEventListener('click', ()=>{
  //     if(isOn){
  //         theDiv.appendChild(newProjectPopUpForm())
  //     }else{
  //        newProjectPopUpForm().remove()
  //     }
  //     isOn = !isOn
  // })
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoFunctions);

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
  var data = localStorage.getItem('arr');
  return data ? JSON.parse(data) : [];
}
function saveProjectsToLocalStorage(projects) {
  localStorage.setItem('arr', JSON.stringify(projects));
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
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var taskSpace = document.getElementById('taskSpace');
var Project = /*#__PURE__*/function () {
  function Project(id, name, color) {
    _classCallCheck(this, Project);
    this.id = id;
    this.name = name;
    this.color = color;
    this.project = [];
  }
  return _createClass(Project, [{
    key: "newTask",
    value: function newTask(title, description, dueDate, priority) {
      var theNewTask = new _todo_js__WEBPACK_IMPORTED_MODULE_2__["default"](title, description, dueDate, priority);
      this.project.push(theNewTask);
      this.displayer(this.project);
    }
  }, {
    key: "addTasks",
    value: function addTasks(task) {
      this.project.push(task);
    }
  }, {
    key: "displayer",
    value: function displayer(array) {
      taskSpace.innerHTML = "";
      array.forEach(function (arrItem) {
        (0,_todoDOM_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arrItem.title, arrItem.description, arrItem.dueDate, arrItem.priority);
      });
      return array;
    }
  }, {
    key: "dom",
    value: function dom() {
      var addTaskButton = document.createElement('button');
      addTaskButton.textContent = 'Add Task';
      addTaskButton.className = 'btn btn-primary';
      addTaskButton.style.width = '100%';
      taskSpace.appendChild(addTaskButton);
    }
  }]);
}();


/***/ }),

/***/ "./src/projectDom.js":
/*!***************************!*\
  !*** ./src/projectDom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Create and export the modal as a default module
var taskSpace = document.getElementById('taskSpace');
var newProjectUL = document.getElementById('newProjectUL');
var modal = function () {
  // Modal container
  var modalContainer = document.createElement('div');
  modalContainer.className = 'modal';

  // Modal content
  var modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  // Modal header
  var modalHeader = document.createElement('div');
  modalHeader.className = 'modal-header';
  var modalTitle = document.createElement('h2');
  modalTitle.textContent = 'New Project';
  modalHeader.appendChild(modalTitle);

  // Close button
  var closeButton = document.createElement('span');
  closeButton.className = 'close';
  closeButton.textContent = '×';
  modalHeader.appendChild(closeButton);

  // Modal body
  var modalBody = document.createElement('div');
  modalBody.className = 'modal-body';

  // Project Name input
  var nameLabel = document.createElement('label');
  nameLabel.textContent = 'Project Name:';
  var nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'projectName';
  nameInput.className = 'form-control';
  modalBody.appendChild(nameLabel);
  modalBody.appendChild(nameInput);

  // Optional Color Selector (example)
  var colorLabel = document.createElement('label');
  colorLabel.textContent = 'Color:';
  var colorSelect = document.createElement('select');
  colorSelect.id = 'projectColor';
  colorSelect.className = 'form-control';
  var colorOptions = ['None', 'Red', 'Green', 'Blue'];
  colorOptions.forEach(function (option) {
    var optionElement = document.createElement('option');
    optionElement.textContent = option;
    colorSelect.appendChild(optionElement);
  });
  modalBody.appendChild(colorLabel);
  modalBody.appendChild(colorSelect);

  // Save button
  var saveButton = document.createElement('button');
  saveButton.className = 'btn btn-primary';
  saveButton.id = 'saveBtnNewProject';
  saveButton.textContent = 'Create Folder';
  modalBody.appendChild(saveButton);

  // Append all parts to modal content
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContainer.appendChild(modalContent);

  // Event listener for close button
  closeButton.addEventListener('click', function () {
    modalContainer.style.display = 'none';
  });
  saveButton.addEventListener('click', function () {
    var projectName = nameInput.value;
    var projectColor = colorSelect.value;
    closeModal();
  });

  // Function to close the modal
  function closeModal() {
    modalContainer.style.display = 'none';
  }

  // Function to open the modal
  function openModal() {
    modalContainer.style.display = 'block';
    taskSpace.append(modalContainer);
  }

  // Export modal functions
  return {
    openModal: openModal,
    closeModal: closeModal,
    saveButton: saveButton,
    nameInput: nameInput,
    colorSelect: colorSelect
  };
}();
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
/* harmony import */ var _projectDom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectDom.js */ "./src/projectDom.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage.js");
/* harmony import */ var _taskForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskForm.js */ "./src/taskForm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var taskSpace = document.getElementById('taskSpace');




var ProjectManager = /*#__PURE__*/function () {
  function ProjectManager() {
    _classCallCheck(this, ProjectManager);
    this.newProject = [];
    this.allProjectFolder = [];
    this.loadProjects();
    this.allTask = [];
    if (this.allProjectFolder.length === 0) {
      this.addNewProject(1, 'Default', 'white').newTask('Task 2', 'This is a description for task 2', '2024-07-20', 'Medium');
    }
    console.log(this.allProjectFolder);
  }
  return _createClass(ProjectManager, [{
    key: "loadProjects",
    value: function loadProjects() {
      this.allProjectFolder = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.loadProjectsFromLocalStorage)();
    }
  }, {
    key: "saveProjects",
    value: function saveProjects() {
      (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.saveProjectsToLocalStorage)(this.allProjectFolder);
    }
  }, {
    key: "addNewProject",
    value: function addNewProject(id, name, color) {
      this.newProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](id, name, color);
      this.allProjectFolder.push(this.newProject);
      this.saveProjects();
      return this.newProject;
    }
  }, {
    key: "displayer",
    value: function displayer() {
      var _this = this;
      this.allProjectFolder.forEach(function (project) {
        _this.domCreator();
      });
    }

    // deleteProject(index) {
    //   this.allProjectFolder = this.allProjectFolder.filter((_, i) => i !== index);
    //   this.saveProjects();
    //   this.displayer(); 
    // }
  }, {
    key: "domCreator",
    value: function domCreator() {
      this.liCreate(this.allProjectFolder);
      this.saveButton(this.allProjectFolder);
      // displayTaskSpace(this.allProjectFolder);
    }
  }, {
    key: "saveButton",
    value: function saveButton(project) {
      var _this2 = this;
      var saveBtnNewProject = _projectDom_js__WEBPACK_IMPORTED_MODULE_1__["default"].saveButton;
      saveBtnNewProject.addEventListener('click', function () {
        var name = _projectDom_js__WEBPACK_IMPORTED_MODULE_1__["default"].nameInput.value;
        var color = _projectDom_js__WEBPACK_IMPORTED_MODULE_1__["default"].colorSelect.value;
        var id = _this2.allProjectFolder.length + 1;
        _this2.addNewProject(id, name, color);
        _this2.liCreate(project);
        _projectDom_js__WEBPACK_IMPORTED_MODULE_1__["default"].closeModal();
      });
    }
  }, {
    key: "liCreate",
    value: function liCreate(projects) {
      var _this3 = this;
      var newProjectUL = document.getElementById('newProjectUL');
      newProjectUL.innerHTML = "";
      taskSpace.innerHTML = "";

      // Create the main container for the task space
      var homePage = document.createElement('div');
      homePage.id = 'homePage';
      homePage.style.padding = '20px';
      homePage.style.border = '1px solid #ccc';
      homePage.style.borderRadius = '5px';

      // Create and append the title
      var title = document.createElement('h2');
      title.innerText = 'My Todos Project';
      homePage.appendChild(title);

      // Create and append the list container
      var projectList = document.createElement('ul');
      projectList.style.listStyleType = 'none';
      projectList.style.padding = '0';
      projects.forEach(function (project, index) {
        var listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.id = 'projectFolder';
        listItem.setAttribute('data-index', index);
        var icon = document.createElement('i');
        icon.className = 'fa-solid fa-hashtag';
        icon.style.color = project.color;
        icon.style.fontWeight = '100';
        listItem.append(icon);
        listItem.append(document.createTextNode(project.name));
        listItem.style.backgroundColor = 'White';
        listItem.addEventListener('click', function () {
          var getProjectArray = project.project;
          _this3.getSelectedProjectArray(getProjectArray);
        });
        var listItemTaskSpace = document.createElement('li');
        listItemTaskSpace.className = 'project-item';
        listItemTaskSpace.style.padding = '10px';
        listItemTaskSpace.style.borderBottom = '1px solid #ccc';
        listItemTaskSpace.innerText = project.name;
        listItemTaskSpace.setAttribute('data-index', index);
        var deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-solid fa-trash';
        deleteIcon.id = 'deleteIcon';
        deleteIcon.style["float"] = 'right';
        deleteIcon.style.cursor = 'pointer';
        deleteIcon.addEventListener('click', function (e) {
          e.stopPropagation();
          console.log();
        });
        listItemTaskSpace.appendChild(deleteIcon);
        projectList.appendChild(listItemTaskSpace);
        listItemTaskSpace.addEventListener('click', function () {
          var getProjectArray = project.project;
          _this3.getSelectedProjectArray(getProjectArray);
        });
        deleteIcon.addEventListener('click', function () {
          var indexAttribute = parseInt(listItemTaskSpace.getAttribute("data-index"));
          projects.splice(indexAttribute, 1);
          console.log(projects);
          // taskSpace.innerHTML = ''
          _this3.saveProjects();
          _this3.displayer();
        });
        homePage.appendChild(projectList);
        taskSpace.appendChild(homePage);
        newProjectUL.append(listItem);
      });
    }
  }, {
    key: "getSelectedProjectArray",
    value: function getSelectedProjectArray(array) {
      var selectArray = array;
      console.log(selectArray);
      this.refresher();
      _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.displayer(selectArray);
      taskSpace.append((0,_taskForm_js__WEBPACK_IMPORTED_MODULE_3__["default"])(selectArray).form);
      this.saveProjects();
      return selectArray;
    }
  }, {
    key: "refresher",
    value: function refresher() {
      taskSpace.innerHTML = "";
      this.displayer();
    }
  }]);
}();


/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSettingsPage)
/* harmony export */ });
var taskSpace = document.getElementById('taskSpace');
var settingsIcon = document.getElementById('settingsIcons');
var userName = document.getElementById('userName');

// Function to create and export the settings page
function createSettingsPage(taskSpace, userName) {
  // Clear existing content in taskSpace
  taskSpace.innerHTML = '';

  // Settings Page Elements
  var settingsContainer = document.createElement('div');
  settingsContainer.className = 'settings-container';

  // Username Change Section
  var usernameSection = document.createElement('div');
  usernameSection.className = 'settings-section';
  var usernameLabel = document.createElement('label');
  usernameLabel.textContent = 'Change Username: ';
  var usernameInput = document.createElement('input');
  usernameInput.type = 'text';
  usernameInput.id = 'newUsernameInput';
  usernameInput.placeholder = 'Enter new username...';
  var usernameButton = document.createElement('button');
  usernameButton.textContent = 'Change';
  usernameButton.className = 'btn btn-primary';
  usernameButton.addEventListener('click', function () {
    var newUsername = usernameInput.value.trim();
    if (newUsername !== '') {
      userName.textContent = newUsername;
      // You can save the new username to localStorage or send it to a server here
      console.log('Username changed to:', newUsername);
    } else {
      alert('Please enter a valid username.');
    }
  });
  usernameSection.appendChild(usernameLabel);
  usernameSection.appendChild(usernameInput);
  usernameSection.appendChild(usernameButton);

  // Background Color Change Section
  var bgColorSection = document.createElement('div');
  bgColorSection.className = 'settings-section';
  var bgColorLabel = document.createElement('label');
  bgColorLabel.textContent = 'Change Background Color: ';
  var bgColorSelect = document.createElement('select');
  bgColorSelect.id = 'bgColorSelect';
  bgColorSelect.className = 'form-control';
  var colors = ['Default', 'Blue', 'Green', 'Yellow', 'Red']; // Example colors
  colors.forEach(function (color) {
    var option = document.createElement('option');
    option.textContent = color;
    bgColorSelect.appendChild(option);
  });
  bgColorSelect.addEventListener('change', function () {
    var selectedColor = bgColorSelect.value.toLowerCase();
    if (selectedColor === 'default') {
      taskSpace.style.backgroundColor = ''; // Reset to default
    } else {
      taskSpace.style.backgroundColor = selectedColor;
    }
  });
  bgColorSection.appendChild(bgColorLabel);
  bgColorSection.appendChild(bgColorSelect);

  // Append Sections to Settings Container
  settingsContainer.appendChild(usernameSection);
  settingsContainer.appendChild(bgColorSection);

  // Append Settings Container to taskSpace
  taskSpace.appendChild(settingsContainer);
}

/***/ }),

/***/ "./src/taskForm.js":
/*!*************************!*\
  !*** ./src/taskForm.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newProjectPopUpForm)
/* harmony export */ });
/* harmony import */ var _css_projectDOM_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/projectDOM.css */ "./src/css/projectDOM.css");

function newProjectPopUpForm(selectArray) {
  var formContainer = document.createElement('div');
  formContainer.classList.add('form-container');
  var form = document.createElement('form');
  form.id = 'newTaskForm';
  form.classList.add('popup-form');
  var titleLabel = document.createElement('label');
  titleLabel.textContent = 'Title:';
  titleLabel.htmlFor = 'projectTitle';
  var titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.id = 'projectTitle';
  titleInput.name = 'title';
  titleInput.required = true;
  var descriptionLabel = document.createElement('label');
  descriptionLabel.textContent = 'Description:';
  descriptionLabel.htmlFor = 'projectDescription';
  var descriptionInput = document.createElement('textarea');
  descriptionInput.id = 'projectDescription';
  descriptionInput.name = 'description';
  descriptionInput.required = true;
  var dueDateLabel = document.createElement('label');
  dueDateLabel.textContent = 'Due Date:';
  dueDateLabel.htmlFor = 'projectDueDate';
  var dueDateInput = document.createElement('input');
  dueDateInput.type = 'date';
  dueDateInput.id = 'projectDueDate';
  dueDateInput.name = 'dueDate';
  var priorityLabel = document.createElement('label');
  priorityLabel.textContent = 'Priority:';
  priorityLabel.htmlFor = 'projectPriority';
  var prioritySelect = document.createElement('select');
  prioritySelect.id = 'projectPriority';
  prioritySelect.name = 'priority';
  prioritySelect.required = true;
  var priorityOptions = ['Low', 'Medium', 'High'];
  priorityOptions.forEach(function (optionText) {
    var option = document.createElement('option');
    option.value = optionText.toLowerCase();
    option.textContent = optionText;
    prioritySelect.appendChild(option);
  });
  var submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Create Project';
  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(descriptionLabel);
  form.appendChild(descriptionInput);
  form.appendChild(dueDateLabel);
  form.appendChild(dueDateInput);
  form.appendChild(priorityLabel);
  form.appendChild(prioritySelect);
  form.appendChild(submitButton);
  formContainer.appendChild(form);
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var title = titleInput.value;
    var description = descriptionInput.value;
    var dueDate = dueDateInput.value;
    var priority = prioritySelect.value;
    var collected = [];
    var theNewTask = {
      title: title,
      description: description,
      dueDate: dueDate,
      priority: priority
    };
    selectArray.push(theNewTask);
    console.log(collected);
  });
  return {
    form: form
  };
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
/* harmony import */ var _projectManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager.js */ "./src/projectManager.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
// Importing ProjectManager from projectManager.js


// // Create a new instance of ProjectManager and get the default project
var Task = /*#__PURE__*/_createClass(function Task(title, description, dueDate, priority) {
  _classCallCheck(this, Task);
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
});


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
// import { deleteFunction } from "./todo.js";

function taskDOM(titleText, descriptionText, priorityText, dueDateText, index) {
  // Create task card elements
  var taskSpace = document.getElementById('taskSpace');
  var card = document.createElement('div');
  card.className = 'card task-card';
  card.setAttribute('data-index', index);
  var row = document.createElement('div');
  row.className = 'row no-gutters';
  var colIcon = document.createElement('div');
  colIcon.className = 'col-md-2 d-flex align-items-center justify-content-center bg-primary text-white position-relative';
  var icon = document.createElement('i');
  icon.className = 'fas fa-tasks fa-2x';
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'big-checkbox';
  checkbox.ariaLabel = 'Task Complete';
  var colBody = document.createElement('div');
  colBody.className = 'col-md-10';
  var cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  var title = document.createElement('h5');
  title.className = 'card-title';
  title.textContent = titleText;
  var description = document.createElement('p');
  description.className = 'card-text description';
  description.textContent = descriptionText;
  var priority = document.createElement('p');
  priority.className = 'card-text priority';
  priority.innerHTML = "<small class=\"text-muted\"><i class=\"fas fa-flag\"></i> Priority: ".concat(priorityText, "</small>");
  var dueDate = document.createElement('p');
  dueDate.className = 'card-text';
  dueDate.innerHTML = "<small class=\"text-muted\"><i class=\"fas fa-calendar-day\"></i> Due Date: <span id=\"dueDate\">".concat(dueDateText, "</span></small>");
  var buttonContainer = document.createElement('div');
  buttonContainer.className = 'd-flex justify-content-between align-items-center';
  var buttonGroup = document.createElement('div');
  var editButton = document.createElement('button');
  editButton.className = 'btn btn-warning btn-sm m-2';
  editButton.innerHTML = '<i class="fas fa-edit"></i> Edit';
  var deleteButton = document.createElement('button');
  deleteButton.className = 'btn btn-danger btn-sm';
  deleteButton.innerHTML = '<i class="fas fa-trash"></i> Delete';
  var checkboxContainer = document.createElement('div');
  checkboxContainer.className = 'form-check';
  checkboxContainer.id = 'divForCheckBox';
  var taskCompletedCheckbox = document.createElement('input');
  taskCompletedCheckbox.className = 'form-check-input';
  taskCompletedCheckbox.type = 'checkbox';
  taskCompletedCheckbox.id = 'taskCompleted';
  var taskCompletedLabel = document.createElement('label');
  taskCompletedLabel.className = 'form-check-label';
  taskCompletedLabel.htmlFor = 'taskCompleted';
  taskCompletedLabel.textContent = 'Completed';

  // Append elements
  colIcon.appendChild(icon);
  colIcon.appendChild(checkbox);
  buttonGroup.appendChild(editButton);
  buttonGroup.appendChild(deleteButton);
  checkboxContainer.appendChild(taskCompletedCheckbox);
  checkboxContainer.appendChild(taskCompletedLabel);
  buttonContainer.appendChild(buttonGroup);
  buttonContainer.appendChild(checkboxContainer);
  cardBody.appendChild(title);
  cardBody.appendChild(description);
  cardBody.appendChild(priority);
  cardBody.appendChild(dueDate);
  cardBody.appendChild(buttonContainer);
  colBody.appendChild(cardBody);
  row.appendChild(colIcon);
  row.appendChild(colBody);
  card.appendChild(row);

  // Append card to container
  taskSpace.appendChild(card);
  deleteButton.addEventListener('click', function () {
    deleteFunction(card);
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/projectDOM.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/projectDOM.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.modal {
    display: none; /* Hidden by default */
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4); /* Overlay background */
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 600px;
  }
  
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
  }
  
  .modal-header h2 {
    margin: 0;
  }
  
  .close {
    cursor: pointer;
    font-size: 24px;
  }
  
  .modal-body {
    margin-top: 10px;
  }
  
  .modal-body label {
    display: block;
    margin-bottom: 5px;
  }
  
  .modal-body input[type="text"],
  .modal-body select {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }
  
  .modal-body button {
    width: 100%;
    padding: 10px;
  }
  `, "",{"version":3,"sources":["webpack://./src/css/projectDOM.css"],"names":[],"mappings":"AAAA;IACI,aAAa,EAAE,sBAAsB;IACrC,eAAe;IACf,UAAU;IACV,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,iCAAiC,EAAE,uBAAuB;EAC5D;;EAEA;IACE,yBAAyB;IACzB,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,6BAA6B;EAC/B;;EAEA;IACE,SAAS;EACX;;EAEA;IACE,eAAe;IACf,eAAe;EACjB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,cAAc;IACd,kBAAkB;EACpB;;EAEA;;IAEE,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;EACxB;;EAEA;IACE,WAAW;IACX,aAAa;EACf","sourcesContent":[".modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0,0,0,0.4); /* Overlay background */\r\n  }\r\n  \r\n  .modal-content {\r\n    background-color: #fefefe;\r\n    margin: 15% auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 80%;\r\n    max-width: 600px;\r\n  }\r\n  \r\n  .modal-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border-bottom: 1px solid #ddd;\r\n  }\r\n  \r\n  .modal-header h2 {\r\n    margin: 0;\r\n  }\r\n  \r\n  .close {\r\n    cursor: pointer;\r\n    font-size: 24px;\r\n  }\r\n  \r\n  .modal-body {\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  .modal-body label {\r\n    display: block;\r\n    margin-bottom: 5px;\r\n  }\r\n  \r\n  .modal-body input[type=\"text\"],\r\n  .modal-body select {\r\n    width: 100%;\r\n    padding: 8px;\r\n    margin-bottom: 10px;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  .modal-body button {\r\n    width: 100%;\r\n    padding: 10px;\r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/projectDOM.css":
/*!********************************!*\
  !*** ./src/css/projectDOM.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_projectDOM_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./projectDOM.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/projectDOM.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_projectDOM_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_projectDOM_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_projectDOM_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_projectDOM_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_projectDOM_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/projectDOM.css */ "./src/css/projectDOM.css");
/* harmony import */ var _projectDom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectDom.js */ "./src/projectDom.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions.js */ "./src/functions.js");
/* harmony import */ var _projectManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectManager.js */ "./src/projectManager.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
var taskSpace = document.getElementById('taskSpace');



(0,_functions_js__WEBPACK_IMPORTED_MODULE_2__["default"])(taskSpace);


var myProjectManager = new _projectManager_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
myProjectManager.displayer();
var createNewProject = document.getElementById('createNewProject');
createNewProject.addEventListener('click', function () {
  _projectDom_js__WEBPACK_IMPORTED_MODULE_1__["default"].openModal();
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQztBQUNwRTJLLGdCQUFnQixDQUFDekssZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUk7RUFDM0MrQyxzREFBSyxDQUFDb0IsU0FBUyxDQUFDLENBQUM7QUFDckIsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcHJvamVjdERvbS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wcm9qZWN0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90YXNrRm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3RvZG9ET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvY3NzL3Byb2plY3RET00uY3NzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2Nzcy9wcm9qZWN0RE9NLmNzcz8zZWM4Iiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5ld1Byb2plY3RQb3BVcEZvcm0gZnJvbSBcIi4vdGFza0Zvcm0uanNcIjtcclxuaW1wb3J0IGNyZWF0ZVNldHRpbmdzUGFnZSBmcm9tIFwiLi9zZXR0aW5ncy5qc1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHRvZG9GdW5jdGlvbnModGhlRGl2KXtcclxuY29uc3Qgc2V0dGluZ3NJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzSWNvbicpO1xyXG5jb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyTmFtZScpO1xyXG5zZXR0aW5nc0ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgY3JlYXRlU2V0dGluZ3NQYWdlKHRoZURpdiwgdXNlck5hbWUpXHJcbn0pXHJcblxyXG5cclxuLy8gY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrJylcclxuLy8gbGV0IGlzT24gPSAgdHJ1ZVxyXG4vLyBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuLy8gICAgIGlmKGlzT24pe1xyXG4vLyAgICAgICAgIHRoZURpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0UG9wVXBGb3JtKCkpXHJcbi8vICAgICB9ZWxzZXtcclxuLy8gICAgICAgIG5ld1Byb2plY3RQb3BVcEZvcm0oKS5yZW1vdmUoKVxyXG4vLyAgICAgfVxyXG4vLyAgICAgaXNPbiA9ICFpc09uXHJcbi8vIH0pXHJcblxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZG9GdW5jdGlvbnMiLCJleHBvcnQgZnVuY3Rpb24gbG9hZFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJyJyk7XHJcbiAgICByZXR1cm4gZGF0YSA/IEpTT04ucGFyc2UoZGF0YSkgOiBbXTtcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKHByb2plY3RzKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJyJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuICB9XHJcbiAgIiwiaW1wb3J0IHRhc2tET00gZnJvbSBcIi4vdG9kb0RPTS5qc1wiO1xyXG5pbXBvcnQgbmV3UHJvamVjdFBvcFVwRm9ybSBmcm9tIFwiLi90YXNrRm9ybS5qc1wiO1xyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi90b2RvLmpzXCI7XHJcbmNvbnN0IHRhc2tTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrU3BhY2UnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBjb2xvcikge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMucHJvamVjdCA9IFtdO1xyXG4gIH1cclxuXHJcbiAgbmV3VGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICBjb25zdCB0aGVOZXdUYXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XHJcbiAgICB0aGlzLnByb2plY3QucHVzaCh0aGVOZXdUYXNrKTtcclxuICAgIHRoaXMuZGlzcGxheWVyKHRoaXMucHJvamVjdCk7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrcyh0YXNrKSB7XHJcbiAgICB0aGlzLnByb2plY3QucHVzaCh0YXNrKVxyXG4gIH1cclxuXHJcbiAgZGlzcGxheWVyKGFycmF5KSB7XHJcbiAgICB0YXNrU3BhY2UuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGFycmF5LmZvckVhY2goYXJySXRlbSA9PiB7XHJcbiAgICAgIHRhc2tET00oYXJySXRlbS50aXRsZSwgYXJySXRlbS5kZXNjcmlwdGlvbiwgYXJySXRlbS5kdWVEYXRlLCBhcnJJdGVtLnByaW9yaXR5KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbiAgZG9tKCkge1xyXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYWRkVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XHJcbiAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLXByaW1hcnknO1xyXG4gICAgYWRkVGFza0J1dHRvbi5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgIHRhc2tTcGFjZS5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcclxuICB9XHJcblxyXG4gIFxyXG59XHJcbiIsIi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSBtb2RhbCBhcyBhIGRlZmF1bHQgbW9kdWxlXHJcbmNvbnN0IHRhc2tTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrU3BhY2UnKVxyXG5jb25zdCBuZXdQcm9qZWN0VUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdFVMJylcclxuXHJcbmNvbnN0IG1vZGFsID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gTW9kYWwgY29udGFpbmVyXHJcbiAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9kYWxDb250YWluZXIuY2xhc3NOYW1lID0gJ21vZGFsJztcclxuICBcclxuICAgIC8vIE1vZGFsIGNvbnRlbnRcclxuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9kYWxDb250ZW50LmNsYXNzTmFtZSA9ICdtb2RhbC1jb250ZW50JztcclxuICBcclxuICAgIC8vIE1vZGFsIGhlYWRlclxyXG4gICAgY29uc3QgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsSGVhZGVyLmNsYXNzTmFtZSA9ICdtb2RhbC1oZWFkZXInO1xyXG4gICAgY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBtb2RhbFRpdGxlLnRleHRDb250ZW50ID0gJ05ldyBQcm9qZWN0JztcclxuICAgIG1vZGFsSGVhZGVyLmFwcGVuZENoaWxkKG1vZGFsVGl0bGUpO1xyXG4gIFxyXG4gICAgLy8gQ2xvc2UgYnV0dG9uXHJcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNsb3NlQnV0dG9uLmNsYXNzTmFtZSA9ICdjbG9zZSc7XHJcbiAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9ICfDlyc7XHJcbiAgICBtb2RhbEhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XHJcbiAgXHJcbiAgICAvLyBNb2RhbCBib2R5XHJcbiAgICBjb25zdCBtb2RhbEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsQm9keS5jbGFzc05hbWUgPSAnbW9kYWwtYm9keSc7XHJcbiAgXHJcbiAgICAvLyBQcm9qZWN0IE5hbWUgaW5wdXRcclxuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnUHJvamVjdCBOYW1lOic7XHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICBuYW1lSW5wdXQuaWQgPSAncHJvamVjdE5hbWUnO1xyXG4gICAgbmFtZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xyXG4gICAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XHJcbiAgICBtb2RhbEJvZHkuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcclxuICBcclxuICAgIC8vIE9wdGlvbmFsIENvbG9yIFNlbGVjdG9yIChleGFtcGxlKVxyXG4gICAgY29uc3QgY29sb3JMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb2xvckxhYmVsLnRleHRDb250ZW50ID0gJ0NvbG9yOic7XHJcbiAgICBjb25zdCBjb2xvclNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgY29sb3JTZWxlY3QuaWQgPSAncHJvamVjdENvbG9yJztcclxuICAgIGNvbG9yU2VsZWN0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xyXG4gICAgY29uc3QgY29sb3JPcHRpb25zID0gWydOb25lJywgJ1JlZCcsICdHcmVlbicsICdCbHVlJ107XHJcbiAgICBjb2xvck9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBvcHRpb247XHJcbiAgICAgIGNvbG9yU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgICBtb2RhbEJvZHkuYXBwZW5kQ2hpbGQoY29sb3JMYWJlbCk7XHJcbiAgICBtb2RhbEJvZHkuYXBwZW5kQ2hpbGQoY29sb3JTZWxlY3QpO1xyXG4gIFxyXG4gICAgLy8gU2F2ZSBidXR0b25cclxuICAgIGNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHNhdmVCdXR0b24uY2xhc3NOYW1lID0gJ2J0biBidG4tcHJpbWFyeSc7XHJcbiAgICBzYXZlQnV0dG9uLmlkID0gJ3NhdmVCdG5OZXdQcm9qZWN0J1xyXG4gICAgc2F2ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDcmVhdGUgRm9sZGVyJztcclxuICAgIG1vZGFsQm9keS5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcclxuICBcclxuICAgIC8vIEFwcGVuZCBhbGwgcGFydHMgdG8gbW9kYWwgY29udGVudFxyXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsSGVhZGVyKTtcclxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbEJvZHkpO1xyXG4gICAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcclxuICBcclxuICAgIC8vIEV2ZW50IGxpc3RlbmVyIGZvciBjbG9zZSBidXR0b25cclxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IG5hbWVJbnB1dC52YWx1ZTtcclxuICAgICAgY29uc3QgcHJvamVjdENvbG9yID0gY29sb3JTZWxlY3QudmFsdWU7XHJcbiAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgXHJcbiAgXHJcbiAgICB9KTtcclxuICBcclxuICAgIC8vIEZ1bmN0aW9uIHRvIGNsb3NlIHRoZSBtb2RhbFxyXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcclxuICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuICBcclxuICAgIC8vIEZ1bmN0aW9uIHRvIG9wZW4gdGhlIG1vZGFsXHJcbiAgICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XHJcbiAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICB0YXNrU3BhY2UuYXBwZW5kKG1vZGFsQ29udGFpbmVyKVxyXG4gICAgfVxyXG4gIFxyXG5cclxuICAgIC8vIEV4cG9ydCBtb2RhbCBmdW5jdGlvbnNcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG9wZW5Nb2RhbCxcclxuICAgICAgY2xvc2VNb2RhbCxcclxuICAgICAgc2F2ZUJ1dHRvbixcclxuICAgICAgbmFtZUlucHV0LFxyXG4gICAgICBjb2xvclNlbGVjdCxcclxuICAgIH07XHJcbiAgfSkoKTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBtb2RhbDtcclxuICBcclxuICIsImNvbnN0IHRhc2tTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrU3BhY2UnKVxyXG5cclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiXHJcbmltcG9ydCBtb2RhbCBmcm9tIFwiLi9wcm9qZWN0RG9tLmpzXCJcclxuaW1wb3J0IHsgbG9hZFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZS5qcydcclxuaW1wb3J0IG5ld1Byb2plY3RQb3BVcEZvcm0gZnJvbSBcIi4vdGFza0Zvcm0uanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdE1hbmFnZXJ7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMubmV3UHJvamVjdCA9IFtdXHJcbiAgICB0aGlzLmFsbFByb2plY3RGb2xkZXIgPSBbXVxyXG4gICAgdGhpcy5sb2FkUHJvamVjdHMoKTtcclxuICAgIHRoaXMuYWxsVGFzayA9IFtdXHJcblxyXG4gICAgaWYgKHRoaXMuYWxsUHJvamVjdEZvbGRlci5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5hZGROZXdQcm9qZWN0KDEsICdEZWZhdWx0JywgJ3doaXRlJykubmV3VGFzaygnVGFzayAyJywgJ1RoaXMgaXMgYSBkZXNjcmlwdGlvbiBmb3IgdGFzayAyJywgJzIwMjQtMDctMjAnLCAnTWVkaXVtJyk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmFsbFByb2plY3RGb2xkZXIpXHJcbiAgfVxyXG4gIFxyXG4gIGxvYWRQcm9qZWN0cygpIHtcclxuICAgIHRoaXMuYWxsUHJvamVjdEZvbGRlciA9IGxvYWRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICB9XHJcblxyXG4gIHNhdmVQcm9qZWN0cygpIHtcclxuICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKHRoaXMuYWxsUHJvamVjdEZvbGRlcik7XHJcbiAgfVxyXG5cclxuXHJcbiAgYWRkTmV3UHJvamVjdChpZCwgbmFtZSwgY29sb3IpIHtcclxuICAgIHRoaXMubmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGlkLCBuYW1lLCBjb2xvcik7XHJcbiAgICB0aGlzLmFsbFByb2plY3RGb2xkZXIucHVzaCh0aGlzLm5ld1Byb2plY3QpO1xyXG4gICAgdGhpcy5zYXZlUHJvamVjdHMoKTtcclxuICAgIHJldHVybiB0aGlzLm5ld1Byb2plY3Q7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5ZXIoKSB7ICBcclxuICAgIHRoaXMuYWxsUHJvamVjdEZvbGRlci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgdGhpcy5kb21DcmVhdG9yKClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gZGVsZXRlUHJvamVjdChpbmRleCkge1xyXG4gIC8vICAgdGhpcy5hbGxQcm9qZWN0Rm9sZGVyID0gdGhpcy5hbGxQcm9qZWN0Rm9sZGVyLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaW5kZXgpO1xyXG4gIC8vICAgdGhpcy5zYXZlUHJvamVjdHMoKTtcclxuICAvLyAgIHRoaXMuZGlzcGxheWVyKCk7IFxyXG4gIC8vIH1cclxuICBcclxuICBcclxuICBkb21DcmVhdG9yKCl7XHJcbiAgICB0aGlzLmxpQ3JlYXRlKHRoaXMuYWxsUHJvamVjdEZvbGRlcik7XHJcbiAgICB0aGlzLnNhdmVCdXR0b24odGhpcy5hbGxQcm9qZWN0Rm9sZGVyKTtcclxuICAgIC8vIGRpc3BsYXlUYXNrU3BhY2UodGhpcy5hbGxQcm9qZWN0Rm9sZGVyKTtcclxuXHJcbiAgfVxyXG5cclxuICBzYXZlQnV0dG9uKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHNhdmVCdG5OZXdQcm9qZWN0ID0gbW9kYWwuc2F2ZUJ1dHRvbjtcclxuICAgIHNhdmVCdG5OZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBuYW1lID0gbW9kYWwubmFtZUlucHV0LnZhbHVlO1xyXG4gICAgICBjb25zdCBjb2xvciA9IG1vZGFsLmNvbG9yU2VsZWN0LnZhbHVlO1xyXG4gICAgICBjb25zdCBpZCA9IHRoaXMuYWxsUHJvamVjdEZvbGRlci5sZW5ndGggKyAxO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5hZGROZXdQcm9qZWN0KGlkLCBuYW1lLCBjb2xvcik7XHJcbiAgICAgIHRoaXMubGlDcmVhdGUocHJvamVjdClcclxuICAgICAgbW9kYWwuY2xvc2VNb2RhbCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIGxpQ3JlYXRlKHByb2plY3RzKSB7XHJcblxyXG5cclxuICAgIGNvbnN0IG5ld1Byb2plY3RVTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0VUwnKTtcclxuICAgIG5ld1Byb2plY3RVTC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICB0YXNrU3BhY2UuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuICAgICAvLyBDcmVhdGUgdGhlIG1haW4gY29udGFpbmVyIGZvciB0aGUgdGFzayBzcGFjZVxyXG4gICAgIGNvbnN0IGhvbWVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgaG9tZVBhZ2UuaWQgPSAnaG9tZVBhZ2UnO1xyXG4gICAgIGhvbWVQYWdlLnN0eWxlLnBhZGRpbmcgPSAnMjBweCc7XHJcbiAgICAgaG9tZVBhZ2Uuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCAjY2NjJztcclxuICAgICBob21lUGFnZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNXB4JztcclxuICAgXHJcbiAgICAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgdGhlIHRpdGxlXHJcbiAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgIHRpdGxlLmlubmVyVGV4dCA9ICdNeSBUb2RvcyBQcm9qZWN0JztcclxuIFxyXG4gICAgIFxyXG4gICAgIGhvbWVQYWdlLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgXHJcbiAgICAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgdGhlIGxpc3QgY29udGFpbmVyXHJcbiAgICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgIHByb2plY3RMaXN0LnN0eWxlLmxpc3RTdHlsZVR5cGUgPSAnbm9uZSc7XHJcbiAgICAgcHJvamVjdExpc3Quc3R5bGUucGFkZGluZyA9ICcwJztcclxuICBcclxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBsaXN0SXRlbS5jbGFzc05hbWUgPSAnbGlzdC1ncm91cC1pdGVtJztcclxuICAgIGxpc3RJdGVtLmlkID0gJ3Byb2plY3RGb2xkZXInO1xyXG4gICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpO1xyXG5cclxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBpY29uLmNsYXNzTmFtZSA9ICdmYS1zb2xpZCBmYS1oYXNodGFnJztcclxuICAgIGljb24uc3R5bGUuY29sb3IgPSBwcm9qZWN0LmNvbG9yXHJcbiAgICBpY29uLnN0eWxlLmZvbnRXZWlnaHQgPSAnMTAwJ1xyXG4gICAgbGlzdEl0ZW0uYXBwZW5kKGljb24pO1xyXG4gICAgbGlzdEl0ZW0uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHByb2plY3QubmFtZSkpO1xyXG5cclxuICAgIGxpc3RJdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdXaGl0ZSdcclxuICAgIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBsZXQgZ2V0UHJvamVjdEFycmF5ID0gcHJvamVjdC5wcm9qZWN0O1xyXG4gICAgICB0aGlzLmdldFNlbGVjdGVkUHJvamVjdEFycmF5KGdldFByb2plY3RBcnJheSk7XHJcbiAgICB9KVxyXG5cclxuICAgICAgY29uc3QgbGlzdEl0ZW1UYXNrU3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICBsaXN0SXRlbVRhc2tTcGFjZS5jbGFzc05hbWUgPSAncHJvamVjdC1pdGVtJztcclxuICAgICAgbGlzdEl0ZW1UYXNrU3BhY2Uuc3R5bGUucGFkZGluZyA9ICcxMHB4JztcclxuICAgICAgbGlzdEl0ZW1UYXNrU3BhY2Uuc3R5bGUuYm9yZGVyQm90dG9tID0gJzFweCBzb2xpZCAjY2NjJztcclxuICAgICAgbGlzdEl0ZW1UYXNrU3BhY2UuaW5uZXJUZXh0ID0gcHJvamVjdC5uYW1lO1xyXG4gICAgICBsaXN0SXRlbVRhc2tTcGFjZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgICAgZGVsZXRlSWNvbi5jbGFzc05hbWUgPSAnZmEtc29saWQgZmEtdHJhc2gnO1xyXG4gICAgICAgIGRlbGV0ZUljb24uaWQgPSAnZGVsZXRlSWNvbic7XHJcbiAgICAgICAgZGVsZXRlSWNvbi5zdHlsZS5mbG9hdCA9ICdyaWdodCc7XHJcbiAgICAgICAgZGVsZXRlSWNvbi5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcblxyXG4gICAgICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygpXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGlzdEl0ZW1UYXNrU3BhY2UuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XHJcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW1UYXNrU3BhY2UpO1xyXG5cclxuICAgICAgICBsaXN0SXRlbVRhc2tTcGFjZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgIGxldCBnZXRQcm9qZWN0QXJyYXkgPSBwcm9qZWN0LnByb2plY3Q7XHJcbiAgICAgICAgICB0aGlzLmdldFNlbGVjdGVkUHJvamVjdEFycmF5KGdldFByb2plY3RBcnJheSk7XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgY29uc3QgaW5kZXhBdHRyaWJ1dGUgPSBwYXJzZUludChsaXN0SXRlbVRhc2tTcGFjZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpKTtcclxuICAgICAgICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4QXR0cmlidXRlLCAxKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxyXG4gICAgICAgICAgICAvLyB0YXNrU3BhY2UuaW5uZXJIVE1MID0gJydcclxuICAgICAgICAgICAgdGhpcy5zYXZlUHJvamVjdHMoKVxyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXllcigpXHJcblxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGhvbWVQYWdlLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KTtcclxuICAgXHJcbiAgICB0YXNrU3BhY2UuYXBwZW5kQ2hpbGQoaG9tZVBhZ2UpO1xyXG4gICAgbmV3UHJvamVjdFVMLmFwcGVuZChsaXN0SXRlbSk7XHJcblxyXG4gICAgfSlcclxuXHJcbiAgIH1cclxuXHJcbiAgICBcclxuICAgIGdldFNlbGVjdGVkUHJvamVjdEFycmF5KGFycmF5KXtcclxuICAgICAgbGV0IHNlbGVjdEFycmF5ID0gYXJyYXlcclxuICAgICAgY29uc29sZS5sb2coc2VsZWN0QXJyYXkpXHJcbiAgICAgIHRoaXMucmVmcmVzaGVyKClcclxuICAgICAgUHJvamVjdC5wcm90b3R5cGUuZGlzcGxheWVyKHNlbGVjdEFycmF5KTtcclxuXHJcbiAgICAgIHRhc2tTcGFjZS5hcHBlbmQobmV3UHJvamVjdFBvcFVwRm9ybShzZWxlY3RBcnJheSkuZm9ybSlcclxuICAgICAgdGhpcy5zYXZlUHJvamVjdHMoKVxyXG5cclxuICAgICAgcmV0dXJuIHNlbGVjdEFycmF5XHJcbiAgICB9XHJcblxyXG4gICBcclxuXHJcbiAgICByZWZyZXNoZXIoKXtcclxuICAgICAgdGFza1NwYWNlLmlubmVySFRNTCA9IFwiXCJcclxuICAgICAgdGhpcy5kaXNwbGF5ZXIoKVxyXG4gICAgfVxyXG59XHJcbiIsImNvbnN0IHRhc2tTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrU3BhY2UnKTtcclxuY29uc3Qgc2V0dGluZ3NJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzSWNvbnMnKTtcclxuY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlck5hbWUnKTtcclxuXHJcblxyXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgYW5kIGV4cG9ydCB0aGUgc2V0dGluZ3MgcGFnZVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTZXR0aW5nc1BhZ2UodGFza1NwYWNlLCB1c2VyTmFtZSkge1xyXG4gICAgLy8gQ2xlYXIgZXhpc3RpbmcgY29udGVudCBpbiB0YXNrU3BhY2VcclxuICAgIHRhc2tTcGFjZS5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAvLyBTZXR0aW5ncyBQYWdlIEVsZW1lbnRzXHJcbiAgICBjb25zdCBzZXR0aW5nc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2V0dGluZ3NDb250YWluZXIuY2xhc3NOYW1lID0gJ3NldHRpbmdzLWNvbnRhaW5lcic7XHJcblxyXG4gICAgLy8gVXNlcm5hbWUgQ2hhbmdlIFNlY3Rpb25cclxuICAgIGNvbnN0IHVzZXJuYW1lU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdXNlcm5hbWVTZWN0aW9uLmNsYXNzTmFtZSA9ICdzZXR0aW5ncy1zZWN0aW9uJztcclxuXHJcbiAgICBjb25zdCB1c2VybmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIHVzZXJuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnQ2hhbmdlIFVzZXJuYW1lOiAnO1xyXG5cclxuICAgIGNvbnN0IHVzZXJuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdXNlcm5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgdXNlcm5hbWVJbnB1dC5pZCA9ICduZXdVc2VybmFtZUlucHV0JztcclxuICAgIHVzZXJuYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgbmV3IHVzZXJuYW1lLi4uJztcclxuXHJcbiAgICBjb25zdCB1c2VybmFtZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdXNlcm5hbWVCdXR0b24udGV4dENvbnRlbnQgPSAnQ2hhbmdlJztcclxuICAgIHVzZXJuYW1lQnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLXByaW1hcnknO1xyXG4gICAgdXNlcm5hbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3VXNlcm5hbWUgPSB1c2VybmFtZUlucHV0LnZhbHVlLnRyaW0oKTtcclxuICAgICAgICBpZiAobmV3VXNlcm5hbWUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gbmV3VXNlcm5hbWU7XHJcbiAgICAgICAgICAgIC8vIFlvdSBjYW4gc2F2ZSB0aGUgbmV3IHVzZXJuYW1lIHRvIGxvY2FsU3RvcmFnZSBvciBzZW5kIGl0IHRvIGEgc2VydmVyIGhlcmVcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzZXJuYW1lIGNoYW5nZWQgdG86JywgbmV3VXNlcm5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYSB2YWxpZCB1c2VybmFtZS4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VybmFtZVNlY3Rpb24uYXBwZW5kQ2hpbGQodXNlcm5hbWVMYWJlbCk7XHJcbiAgICB1c2VybmFtZVNlY3Rpb24uYXBwZW5kQ2hpbGQodXNlcm5hbWVJbnB1dCk7XHJcbiAgICB1c2VybmFtZVNlY3Rpb24uYXBwZW5kQ2hpbGQodXNlcm5hbWVCdXR0b24pO1xyXG5cclxuICAgIC8vIEJhY2tncm91bmQgQ29sb3IgQ2hhbmdlIFNlY3Rpb25cclxuICAgIGNvbnN0IGJnQ29sb3JTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBiZ0NvbG9yU2VjdGlvbi5jbGFzc05hbWUgPSAnc2V0dGluZ3Mtc2VjdGlvbic7XHJcblxyXG4gICAgY29uc3QgYmdDb2xvckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGJnQ29sb3JMYWJlbC50ZXh0Q29udGVudCA9ICdDaGFuZ2UgQmFja2dyb3VuZCBDb2xvcjogJztcclxuXHJcbiAgICBjb25zdCBiZ0NvbG9yU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICBiZ0NvbG9yU2VsZWN0LmlkID0gJ2JnQ29sb3JTZWxlY3QnO1xyXG4gICAgYmdDb2xvclNlbGVjdC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcclxuXHJcbiAgICBjb25zdCBjb2xvcnMgPSBbJ0RlZmF1bHQnLCAnQmx1ZScsICdHcmVlbicsICdZZWxsb3cnLCAnUmVkJ107IC8vIEV4YW1wbGUgY29sb3JzXHJcbiAgICBjb2xvcnMuZm9yRWFjaChjb2xvciA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29sb3I7XHJcbiAgICAgICAgYmdDb2xvclNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYmdDb2xvclNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDb2xvciA9IGJnQ29sb3JTZWxlY3QudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRDb2xvciA9PT0gJ2RlZmF1bHQnKSB7XHJcbiAgICAgICAgICAgIHRhc2tTcGFjZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJzsgLy8gUmVzZXQgdG8gZGVmYXVsdFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhc2tTcGFjZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzZWxlY3RlZENvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGJnQ29sb3JTZWN0aW9uLmFwcGVuZENoaWxkKGJnQ29sb3JMYWJlbCk7XHJcbiAgICBiZ0NvbG9yU2VjdGlvbi5hcHBlbmRDaGlsZChiZ0NvbG9yU2VsZWN0KTtcclxuXHJcbiAgICAvLyBBcHBlbmQgU2VjdGlvbnMgdG8gU2V0dGluZ3MgQ29udGFpbmVyXHJcbiAgICBzZXR0aW5nc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh1c2VybmFtZVNlY3Rpb24pO1xyXG4gICAgc2V0dGluZ3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYmdDb2xvclNlY3Rpb24pO1xyXG5cclxuICAgIC8vIEFwcGVuZCBTZXR0aW5ncyBDb250YWluZXIgdG8gdGFza1NwYWNlXHJcbiAgICB0YXNrU3BhY2UuYXBwZW5kQ2hpbGQoc2V0dGluZ3NDb250YWluZXIpO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgJy4vY3NzL3Byb2plY3RET00uY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3UHJvamVjdFBvcFVwRm9ybShzZWxlY3RBcnJheSkge1xyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBmb3JtLmlkID0gJ25ld1Rhc2tGb3JtJztcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgncG9wdXAtZm9ybScpO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZTonO1xyXG4gICAgdGl0bGVMYWJlbC5odG1sRm9yID0gJ3Byb2plY3RUaXRsZSc7XHJcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICAgIHRpdGxlSW5wdXQuaWQgPSAncHJvamVjdFRpdGxlJztcclxuICAgIHRpdGxlSW5wdXQubmFtZSA9ICd0aXRsZSc7XHJcbiAgICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246JztcclxuICAgIGRlc2NyaXB0aW9uTGFiZWwuaHRtbEZvciA9ICdwcm9qZWN0RGVzY3JpcHRpb24nO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gJ3Byb2plY3REZXNjcmlwdGlvbic7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0Lm5hbWUgPSAnZGVzY3JpcHRpb24nO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcblxyXG4gICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZTonO1xyXG4gICAgZHVlRGF0ZUxhYmVsLmh0bWxGb3IgPSAncHJvamVjdER1ZURhdGUnO1xyXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGR1ZURhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xyXG4gICAgZHVlRGF0ZUlucHV0LmlkID0gJ3Byb2plY3REdWVEYXRlJztcclxuICAgIGR1ZURhdGVJbnB1dC5uYW1lID0gJ2R1ZURhdGUnO1xyXG5cclxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonO1xyXG4gICAgcHJpb3JpdHlMYWJlbC5odG1sRm9yID0gJ3Byb2plY3RQcmlvcml0eSc7XHJcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuaWQgPSAncHJvamVjdFByaW9yaXR5JztcclxuICAgIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSAncHJpb3JpdHknO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QucmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IHByaW9yaXR5T3B0aW9ucyA9IFsnTG93JywgJ01lZGl1bScsICdIaWdoJ107XHJcbiAgICBwcmlvcml0eU9wdGlvbnMuZm9yRWFjaChvcHRpb25UZXh0ID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgIG9wdGlvbi52YWx1ZSA9IG9wdGlvblRleHQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uVGV4dDtcclxuICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgc3VibWl0QnV0dG9uLnR5cGUgPSAnc3VibWl0JztcclxuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDcmVhdGUgUHJvamVjdCc7XHJcblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcclxuXHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCB0aXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XHJcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcclxuICAgICAgY29uc3QgZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcclxuICAgICAgY29uc3QgcHJpb3JpdHkgPSBwcmlvcml0eVNlbGVjdC52YWx1ZTtcclxuXHJcbiAgICAgIGNvbnN0IGNvbGxlY3RlZCA9IFtdXHJcbiAgICAgY29uc3QgdGhlTmV3VGFzayA9IHtcclxuICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXHJcbiAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXHJcbiAgICAgIHByaW9yaXR5OiBwcmlvcml0eVxyXG4gICB9XHJcbiAgIHNlbGVjdEFycmF5LnB1c2godGhlTmV3VGFzaykgIFxyXG4gICAgY29uc29sZS5sb2coY29sbGVjdGVkKVxyXG59KTtcclxuXHJcbiAgICByZXR1cm4geyBmb3JtIH07XHJcbiAgfVxyXG5cclxuIiwiLy8gSW1wb3J0aW5nIFByb2plY3RNYW5hZ2VyIGZyb20gcHJvamVjdE1hbmFnZXIuanNcclxuaW1wb3J0IFByb2plY3RNYW5hZ2VyICBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlci5qc1wiO1xyXG5cclxuLy8gLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFByb2plY3RNYW5hZ2VyIGFuZCBnZXQgdGhlIGRlZmF1bHQgcHJvamVjdFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2t7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcblxyXG5cclxuIiwiLy8gaW1wb3J0IHsgZGVsZXRlRnVuY3Rpb24gfSBmcm9tIFwiLi90b2RvLmpzXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFza0RPTSh0aXRsZVRleHQsIGRlc2NyaXB0aW9uVGV4dCwgcHJpb3JpdHlUZXh0LCBkdWVEYXRlVGV4dCwgaW5kZXgpIHtcclxuICAvLyBDcmVhdGUgdGFzayBjYXJkIGVsZW1lbnRzXHJcbiAgY29uc3QgdGFza1NwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tTcGFjZScpO1xyXG5cclxuICBcclxuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZC5jbGFzc05hbWUgPSAnY2FyZCB0YXNrLWNhcmQnO1xyXG4gIGNhcmQuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpXHJcblxyXG4gIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHJvdy5jbGFzc05hbWUgPSAncm93IG5vLWd1dHRlcnMnO1xyXG5cclxuICBjb25zdCBjb2xJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29sSWNvbi5jbGFzc05hbWUgPSAnY29sLW1kLTIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGJnLXByaW1hcnkgdGV4dC13aGl0ZSBwb3NpdGlvbi1yZWxhdGl2ZSc7XHJcblxyXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgaWNvbi5jbGFzc05hbWUgPSAnZmFzIGZhLXRhc2tzIGZhLTJ4JztcclxuXHJcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gIGNoZWNrYm94LmNsYXNzTmFtZSA9ICdiaWctY2hlY2tib3gnO1xyXG4gIGNoZWNrYm94LmFyaWFMYWJlbCA9ICdUYXNrIENvbXBsZXRlJztcclxuXHJcbiAgY29uc3QgY29sQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbEJvZHkuY2xhc3NOYW1lID0gJ2NvbC1tZC0xMCc7XHJcblxyXG4gIGNvbnN0IGNhcmRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZEJvZHkuY2xhc3NOYW1lID0gJ2NhcmQtYm9keSc7XHJcblxyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuICB0aXRsZS5jbGFzc05hbWUgPSAnY2FyZC10aXRsZSc7XHJcbiAgdGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZVRleHQ7XHJcblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGRlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICdjYXJkLXRleHQgZGVzY3JpcHRpb24nO1xyXG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb25UZXh0O1xyXG5cclxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwcmlvcml0eS5jbGFzc05hbWUgPSAnY2FyZC10ZXh0IHByaW9yaXR5JztcclxuICBwcmlvcml0eS5pbm5lckhUTUwgPSBgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPjxpIGNsYXNzPVwiZmFzIGZhLWZsYWdcIj48L2k+IFByaW9yaXR5OiAke3ByaW9yaXR5VGV4dH08L3NtYWxsPmA7XHJcblxyXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgZHVlRGF0ZS5jbGFzc05hbWUgPSAnY2FyZC10ZXh0JztcclxuICBkdWVEYXRlLmlubmVySFRNTCA9IGA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2FsZW5kYXItZGF5XCI+PC9pPiBEdWUgRGF0ZTogPHNwYW4gaWQ9XCJkdWVEYXRlXCI+JHtkdWVEYXRlVGV4dH08L3NwYW4+PC9zbWFsbD5gO1xyXG5cclxuICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBidXR0b25Db250YWluZXIuY2xhc3NOYW1lID0gJ2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXInO1xyXG5cclxuICBjb25zdCBidXR0b25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgZWRpdEJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi13YXJuaW5nIGJ0bi1zbSBtLTInO1xyXG4gIGVkaXRCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+IEVkaXQnO1xyXG5cclxuICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gJ2J0biBidG4tZGFuZ2VyIGJ0bi1zbSc7XHJcbiAgZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvaT4gRGVsZXRlJztcclxuXHJcbiAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjaGVja2JveENvbnRhaW5lci5jbGFzc05hbWUgPSAnZm9ybS1jaGVjayc7XHJcbiAgY2hlY2tib3hDb250YWluZXIuaWQgPSAnZGl2Rm9yQ2hlY2tCb3gnO1xyXG5cclxuICBjb25zdCB0YXNrQ29tcGxldGVkQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHRhc2tDb21wbGV0ZWRDaGVja2JveC5jbGFzc05hbWUgPSAnZm9ybS1jaGVjay1pbnB1dCc7XHJcbiAgdGFza0NvbXBsZXRlZENoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gIHRhc2tDb21wbGV0ZWRDaGVja2JveC5pZCA9ICd0YXNrQ29tcGxldGVkJztcclxuXHJcbiAgY29uc3QgdGFza0NvbXBsZXRlZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICB0YXNrQ29tcGxldGVkTGFiZWwuY2xhc3NOYW1lID0gJ2Zvcm0tY2hlY2stbGFiZWwnO1xyXG4gIHRhc2tDb21wbGV0ZWRMYWJlbC5odG1sRm9yID0gJ3Rhc2tDb21wbGV0ZWQnO1xyXG4gIHRhc2tDb21wbGV0ZWRMYWJlbC50ZXh0Q29udGVudCA9ICdDb21wbGV0ZWQnO1xyXG5cclxuICAvLyBBcHBlbmQgZWxlbWVudHNcclxuICBjb2xJY29uLmFwcGVuZENoaWxkKGljb24pO1xyXG4gIGNvbEljb24uYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG5cclxuICBidXR0b25Hcm91cC5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcclxuICBidXR0b25Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG5cclxuICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29tcGxldGVkQ2hlY2tib3gpO1xyXG4gIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb21wbGV0ZWRMYWJlbCk7XHJcblxyXG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Hcm91cCk7XHJcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVyKTtcclxuXHJcbiAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuICBjYXJkQm9keS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XHJcbiAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XHJcbiAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcclxuXHJcbiAgY29sQm9keS5hcHBlbmRDaGlsZChjYXJkQm9keSk7XHJcblxyXG4gIHJvdy5hcHBlbmRDaGlsZChjb2xJY29uKTtcclxuICByb3cuYXBwZW5kQ2hpbGQoY29sQm9keSk7XHJcblxyXG4gIGNhcmQuYXBwZW5kQ2hpbGQocm93KTtcclxuXHJcbiAgLy8gQXBwZW5kIGNhcmQgdG8gY29udGFpbmVyXHJcbiAgdGFza1NwYWNlLmFwcGVuZENoaWxkKGNhcmQpO1xyXG5cclxuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgZGVsZXRlRnVuY3Rpb24oY2FyZClcclxuICB9KVxyXG59XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubW9kYWwge1xyXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIE92ZXJsYXkgYmFja2dyb3VuZCAqL1xyXG4gIH1cclxuICBcclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgbWFyZ2luOiAxNSUgYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWhlYWRlciBoMiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbG9zZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1ib2R5IHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1ib2R5IGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICBcclxuICAubW9kYWwtYm9keSBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuICAubW9kYWwtYm9keSBzZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWJvZHkgYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Byb2plY3RET00uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYSxFQUFFLHNCQUFzQjtJQUNyQyxlQUFlO0lBQ2YsVUFBVTtJQUNWLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixpQ0FBaUMsRUFBRSx1QkFBdUI7RUFDNUQ7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGVBQWU7SUFDZixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7RUFFQTs7SUFFRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtFQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tb2RhbCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIE92ZXJsYXkgYmFja2dyb3VuZCAqL1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubW9kYWwtY29udGVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxyXFxuICAgIG1hcmdpbjogMTUlIGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5tb2RhbC1oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubW9kYWwtaGVhZGVyIGgyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2xvc2Uge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1vZGFsLWJvZHkge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubW9kYWwtYm9keSBsYWJlbCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5tb2RhbC1ib2R5IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXHJcXG4gIC5tb2RhbC1ib2R5IHNlbGVjdCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiA4cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5tb2RhbC1ib2R5IGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgfVxcclxcbiAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdERPTS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0RE9NLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiY29uc3QgdGFza1NwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tTcGFjZScpXHJcbmltcG9ydCAnLi9jc3MvcHJvamVjdERPTS5jc3MnXHJcblxyXG5pbXBvcnQgbW9kYWwgZnJvbSBcIi4vcHJvamVjdERvbS5qc1wiO1xyXG5pbXBvcnQgdG9kb0Z1bmN0aW9ucyBmcm9tIFwiLi9mdW5jdGlvbnMuanNcIjtcclxudG9kb0Z1bmN0aW9ucyh0YXNrU3BhY2UpXHJcblxyXG5pbXBvcnQgUHJvamVjdE1hbmFnZXIgZnJvbSBcIi4vcHJvamVjdE1hbmFnZXIuanNcIjtcclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xyXG5cclxuXHJcbmNvbnN0IG15UHJvamVjdE1hbmFnZXIgPSBuZXcgUHJvamVjdE1hbmFnZXIoKTtcclxubXlQcm9qZWN0TWFuYWdlci5kaXNwbGF5ZXIoKVxyXG5cclxuXHJcblxyXG5jb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZU5ld1Byb2plY3QnKVxyXG5jcmVhdGVOZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIG1vZGFsLm9wZW5Nb2RhbCgpXHJcbn0pXHJcblxyXG4iXSwibmFtZXMiOlsibmV3UHJvamVjdFBvcFVwRm9ybSIsImNyZWF0ZVNldHRpbmdzUGFnZSIsInRvZG9GdW5jdGlvbnMiLCJ0aGVEaXYiLCJzZXR0aW5nc0ljb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidXNlck5hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwibG9hZFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSIsImRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UiLCJwcm9qZWN0cyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ0YXNrRE9NIiwiVGFzayIsInRhc2tTcGFjZSIsIlByb2plY3QiLCJpZCIsIm5hbWUiLCJjb2xvciIsIl9jbGFzc0NhbGxDaGVjayIsInByb2plY3QiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIm5ld1Rhc2siLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwidGhlTmV3VGFzayIsInB1c2giLCJkaXNwbGF5ZXIiLCJhZGRUYXNrcyIsInRhc2siLCJhcnJheSIsImlubmVySFRNTCIsImZvckVhY2giLCJhcnJJdGVtIiwiZG9tIiwiYWRkVGFza0J1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImNsYXNzTmFtZSIsInN0eWxlIiwid2lkdGgiLCJhcHBlbmRDaGlsZCIsImRlZmF1bHQiLCJuZXdQcm9qZWN0VUwiLCJtb2RhbCIsIm1vZGFsQ29udGFpbmVyIiwibW9kYWxDb250ZW50IiwibW9kYWxIZWFkZXIiLCJtb2RhbFRpdGxlIiwiY2xvc2VCdXR0b24iLCJtb2RhbEJvZHkiLCJuYW1lTGFiZWwiLCJuYW1lSW5wdXQiLCJ0eXBlIiwiY29sb3JMYWJlbCIsImNvbG9yU2VsZWN0IiwiY29sb3JPcHRpb25zIiwib3B0aW9uIiwib3B0aW9uRWxlbWVudCIsInNhdmVCdXR0b24iLCJkaXNwbGF5IiwicHJvamVjdE5hbWUiLCJwcm9qZWN0Q29sb3IiLCJjbG9zZU1vZGFsIiwib3Blbk1vZGFsIiwiYXBwZW5kIiwiUHJvamVjdE1hbmFnZXIiLCJuZXdQcm9qZWN0IiwiYWxsUHJvamVjdEZvbGRlciIsImxvYWRQcm9qZWN0cyIsImFsbFRhc2siLCJsZW5ndGgiLCJhZGROZXdQcm9qZWN0IiwiY29uc29sZSIsImxvZyIsInNhdmVQcm9qZWN0cyIsIl90aGlzIiwiZG9tQ3JlYXRvciIsImxpQ3JlYXRlIiwiX3RoaXMyIiwic2F2ZUJ0bk5ld1Byb2plY3QiLCJfdGhpczMiLCJob21lUGFnZSIsInBhZGRpbmciLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJpbm5lclRleHQiLCJwcm9qZWN0TGlzdCIsImxpc3RTdHlsZVR5cGUiLCJpbmRleCIsImxpc3RJdGVtIiwic2V0QXR0cmlidXRlIiwiaWNvbiIsImZvbnRXZWlnaHQiLCJjcmVhdGVUZXh0Tm9kZSIsImJhY2tncm91bmRDb2xvciIsImdldFByb2plY3RBcnJheSIsImdldFNlbGVjdGVkUHJvamVjdEFycmF5IiwibGlzdEl0ZW1UYXNrU3BhY2UiLCJib3JkZXJCb3R0b20iLCJkZWxldGVJY29uIiwiY3Vyc29yIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImluZGV4QXR0cmlidXRlIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJzcGxpY2UiLCJzZWxlY3RBcnJheSIsInJlZnJlc2hlciIsInByb3RvdHlwZSIsImZvcm0iLCJzZXR0aW5nc0NvbnRhaW5lciIsInVzZXJuYW1lU2VjdGlvbiIsInVzZXJuYW1lTGFiZWwiLCJ1c2VybmFtZUlucHV0IiwicGxhY2Vob2xkZXIiLCJ1c2VybmFtZUJ1dHRvbiIsIm5ld1VzZXJuYW1lIiwidHJpbSIsImFsZXJ0IiwiYmdDb2xvclNlY3Rpb24iLCJiZ0NvbG9yTGFiZWwiLCJiZ0NvbG9yU2VsZWN0IiwiY29sb3JzIiwic2VsZWN0ZWRDb2xvciIsInRvTG93ZXJDYXNlIiwiZm9ybUNvbnRhaW5lciIsImNsYXNzTGlzdCIsImFkZCIsInRpdGxlTGFiZWwiLCJodG1sRm9yIiwidGl0bGVJbnB1dCIsInJlcXVpcmVkIiwiZGVzY3JpcHRpb25MYWJlbCIsImRlc2NyaXB0aW9uSW5wdXQiLCJkdWVEYXRlTGFiZWwiLCJkdWVEYXRlSW5wdXQiLCJwcmlvcml0eUxhYmVsIiwicHJpb3JpdHlTZWxlY3QiLCJwcmlvcml0eU9wdGlvbnMiLCJvcHRpb25UZXh0Iiwic3VibWl0QnV0dG9uIiwicHJldmVudERlZmF1bHQiLCJjb2xsZWN0ZWQiLCJ0aXRsZVRleHQiLCJkZXNjcmlwdGlvblRleHQiLCJwcmlvcml0eVRleHQiLCJkdWVEYXRlVGV4dCIsImNhcmQiLCJyb3ciLCJjb2xJY29uIiwiY2hlY2tib3giLCJhcmlhTGFiZWwiLCJjb2xCb2R5IiwiY2FyZEJvZHkiLCJjb25jYXQiLCJidXR0b25Db250YWluZXIiLCJidXR0b25Hcm91cCIsImVkaXRCdXR0b24iLCJkZWxldGVCdXR0b24iLCJjaGVja2JveENvbnRhaW5lciIsInRhc2tDb21wbGV0ZWRDaGVja2JveCIsInRhc2tDb21wbGV0ZWRMYWJlbCIsImRlbGV0ZUZ1bmN0aW9uIiwibXlQcm9qZWN0TWFuYWdlciIsImNyZWF0ZU5ld1Byb2plY3QiXSwic291cmNlUm9vdCI6IiJ9