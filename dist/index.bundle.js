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
  //         theDiv.appendChild(newTaskFormDOM())
  //     }else{
  //        newTaskFormDOM().remove()
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
var space = document.getElementById('space');
var title = document.getElementById('title');
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
      title.innerText = array.name;
      array.forEach(function (arrItem) {
        (0,_todoDOM_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arrItem.title, arrItem.description, arrItem.dueDate, arrItem.priority);
      });
      this.dom(array.name);
      return array;
    }
  }, {
    key: "dom",
    value: function dom(projectName) {
      var addTaskButton = document.createElement('button');
      addTaskButton.textContent = 'Add Task';
      addTaskButton.id = 'addTaskButton';
      addTaskButton.className = 'btn btn-primary';
      addTaskButton.style.width = '100%';
      title.innerText = projectName;
      space.append(addTaskButton);
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
var taskSpace = document.getElementById('taskSpace');
var space = document.getElementById('space');
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
    space.append(modalContainer);
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
var space = document.getElementById('space');
var title = document.getElementById('title');




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
      this.domCreator();
    }
  }, {
    key: "deleteProject",
    value: function deleteProject(index) {
      this.allProjectFolder.splice(index, 1);
      this.saveProjects();
      this.displayer();
    }
  }, {
    key: "domCreator",
    value: function domCreator() {
      this.projectPageandSideBarDOM(this.allProjectFolder);
      this.saveButton(this.allProjectFolder);
    }
  }, {
    key: "saveButton",
    value: function saveButton(project) {
      var _this = this;
      var saveBtnNewProject = _projectDom_js__WEBPACK_IMPORTED_MODULE_1__["default"].saveButton;
      saveBtnNewProject.addEventListener('click', function () {
        var name = _projectDom_js__WEBPACK_IMPORTED_MODULE_1__["default"].nameInput.value;
        var color = _projectDom_js__WEBPACK_IMPORTED_MODULE_1__["default"].colorSelect.value;
        var id = _this.allProjectFolder.length + 1;
        _this.addNewProject(id, name, color);
        _this.projectPageandSideBarDOM(project);
        _projectDom_js__WEBPACK_IMPORTED_MODULE_1__["default"].closeModal();
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
      title.innerText = selectArray.name;
      this.saveProjects();
      return selectArray;
    }
  }, {
    key: "refresher",
    value: function refresher() {
      taskSpace.innerHTML = "";
      this.displayer();
    }
    //DOM
  }, {
    key: "projectPageandSideBarDOM",
    value: function projectPageandSideBarDOM(projects) {
      var _this2 = this;
      var newProjectUL = document.getElementById('newProjectUL');
      newProjectUL.innerHTML = "";
      space.innerHTML = "";

      // Create and append the title
      title.innerText = 'My Todos Projectssssssssssss';

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
          _this2.getSelectedProjectArray(getProjectArray);
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
          _this2.getSelectedProjectArray(getProjectArray);
        });
        deleteIcon.addEventListener('click', function () {
          var index = parseInt(listItemTaskSpace.getAttribute("data-index"));
          _this2.deleteProject(index);
          _this2.saveProjects();
        });
        space.appendChild(projectList);

        // taskSpace.appendChild(homePage);
        newProjectUL.append(listItem);
      });
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
/* harmony export */   "default": () => (/* binding */ newTaskFormDOM)
/* harmony export */ });
function newTaskFormDOM(selectArray) {
  var formContainer = document.createElement('div');
  formContainer.classList.add('form-container');
  var form = document.createElement('form');
  form.id = 'newTaskForm';
  form.classList.add('popup-form', 'needs-validation');
  form.setAttribute('novalidate', '');
  var titleLabel = document.createElement('label');
  titleLabel.textContent = 'Title:';
  titleLabel.className = 'form-label';
  titleLabel.htmlFor = 'projectTitle';
  var titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.className = 'form-control';
  titleInput.id = 'projectTitle';
  titleInput.name = 'title';
  titleInput.required = true;
  titleInput.style.height = '50px';
  var descriptionLabel = document.createElement('label');
  descriptionLabel.textContent = 'Description:';
  descriptionLabel.className = 'form-label';
  descriptionLabel.htmlFor = 'projectDescription';
  var descriptionInput = document.createElement('textarea');
  descriptionInput.className = 'form-control';
  descriptionInput.id = 'projectDescription';
  descriptionInput.name = 'description';
  descriptionInput.required = true;
  var dueDateLabel = document.createElement('label');
  dueDateLabel.textContent = 'Due Date:';
  dueDateLabel.className = 'form-label';
  dueDateLabel.htmlFor = 'projectDueDate';
  var dueDateInput = document.createElement('input');
  dueDateInput.type = 'date';
  dueDateInput.className = 'form-control';
  dueDateInput.id = 'projectDueDate';
  dueDateInput.name = 'dueDate';
  dueDateInput.style.height = '50px';
  var priorityLabel = document.createElement('label');
  priorityLabel.textContent = 'Priority:';
  priorityLabel.className = 'form-label';
  priorityLabel.htmlFor = 'projectPriority';
  var prioritySelect = document.createElement('select');
  prioritySelect.className = 'form-select';
  prioritySelect.id = 'projectPriority';
  prioritySelect.name = 'priority';
  prioritySelect.required = true;
  prioritySelect.style.height = '50px';
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
  submitButton.className = 'btn btn-success mt-3';
  var cancelButton = document.createElement('button');
  cancelButton.type = 'button';
  cancelButton.textContent = 'Cancel';
  cancelButton.className = 'btn btn-danger mt-3 ms-2';
  cancelButton.addEventListener('click', function () {
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
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var title = titleInput.value;
    var description = descriptionInput.value;
    var dueDate = dueDateInput.value;
    var priority = prioritySelect.value;
    var theNewTask = {
      title: title,
      description: description,
      dueDate: dueDate,
      priority: priority
    };
    selectArray.push(theNewTask);
    console.log(selectArray);
    formContainer.style.display = 'none'; // Hide the form after submission
  });
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

var taskSpace = document.getElementById('taskSpace');
var space = document.getElementById('space');
var title = document.getElementById('title');
function taskDOM(titleText, descriptionText, priorityText, dueDateText, index) {
  // Create task card elements

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
  space.append(card);
  deleteButton.addEventListener('click', function () {
    deleteFunction(card);
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
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projectDom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectDom.js */ "./src/projectDom.js");
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions.js */ "./src/functions.js");
/* harmony import */ var _projectManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectManager.js */ "./src/projectManager.js");
var taskSpace = document.getElementById('taskSpace');



var myProjectManager = new _projectManager_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
myProjectManager.displayer();
(0,_functions_js__WEBPACK_IMPORTED_MODULE_1__["default"])(taskSpace);
var createNewProject = document.getElementById('createNewProject');
createNewProject.addEventListener('click', function () {
  _projectDom_js__WEBPACK_IMPORTED_MODULE_0__["default"].openModal();
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BLElBQU16SSxTQUFTLEdBQUdoQixRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUM7QUFFbEI7QUFDTztBQUdNO0FBR2pELElBQU13SyxnQkFBZ0IsR0FBRyxJQUFJaEcsMERBQWMsQ0FBQyxDQUFDO0FBRzdDZ0csZ0JBQWdCLENBQUN2SSxTQUFTLENBQUMsQ0FBQztBQWE1QnJDLHlEQUFhLENBQUNtQixTQUFTLENBQUM7QUFHeEIsSUFBTTBKLGdCQUFnQixHQUFHMUssUUFBUSxDQUFDQyxjQUFjLENBQUMsa0JBQWtCLENBQUM7QUFDcEV5SyxnQkFBZ0IsQ0FBQ3ZLLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFJO0VBQzNDaUQsc0RBQUssQ0FBQ29CLFNBQVMsQ0FBQyxDQUFDO0FBQ3JCLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Byb2plY3REb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcHJvamVjdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdGFza0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90b2RvRE9NLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5ld1Byb2plY3RQb3BVcEZvcm0gZnJvbSBcIi4vdGFza0Zvcm0uanNcIjtcclxuaW1wb3J0IGNyZWF0ZVNldHRpbmdzUGFnZSBmcm9tIFwiLi9zZXR0aW5ncy5qc1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHRvZG9GdW5jdGlvbnModGhlRGl2KXtcclxuY29uc3Qgc2V0dGluZ3NJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzSWNvbicpO1xyXG5jb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyTmFtZScpO1xyXG5zZXR0aW5nc0ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgY3JlYXRlU2V0dGluZ3NQYWdlKHRoZURpdiwgdXNlck5hbWUpXHJcbn0pXHJcblxyXG5cclxuLy8gY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrJylcclxuLy8gbGV0IGlzT24gPSAgdHJ1ZVxyXG4vLyBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuLy8gICAgIGlmKGlzT24pe1xyXG4vLyAgICAgICAgIHRoZURpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0UG9wVXBGb3JtKCkpXHJcbi8vICAgICB9ZWxzZXtcclxuLy8gICAgICAgIG5ld1Byb2plY3RQb3BVcEZvcm0oKS5yZW1vdmUoKVxyXG4vLyAgICAgfVxyXG4vLyAgICAgaXNPbiA9ICFpc09uXHJcbi8vIH0pXHJcblxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZG9GdW5jdGlvbnMiLCJleHBvcnQgZnVuY3Rpb24gbG9hZFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJyJyk7XHJcbiAgICByZXR1cm4gZGF0YSA/IEpTT04ucGFyc2UoZGF0YSkgOiBbXTtcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKHByb2plY3RzKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJyJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuICB9XHJcbiAgIiwiaW1wb3J0IHRhc2tET00gZnJvbSBcIi4vdG9kb0RPTS5qc1wiO1xyXG5pbXBvcnQgbmV3UHJvamVjdFBvcFVwRm9ybSBmcm9tIFwiLi90YXNrRm9ybS5qc1wiO1xyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi90b2RvLmpzXCI7XHJcblxyXG5jb25zdCB0YXNrU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1NwYWNlJylcclxuY29uc3Qgc3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BhY2UnKVxyXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IoaWQsIG5hbWUsIGNvbG9yKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy5wcm9qZWN0ID0gW107XHJcbiAgfVxyXG5cclxuICBuZXdUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgIGNvbnN0IHRoZU5ld1Rhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcclxuICAgIHRoaXMucHJvamVjdC5wdXNoKHRoZU5ld1Rhc2spO1xyXG4gICAgdGhpcy5kaXNwbGF5ZXIodGhpcy5wcm9qZWN0KTtcclxuICB9XHJcblxyXG4gIGFkZFRhc2tzKHRhc2spIHtcclxuICAgIHRoaXMucHJvamVjdC5wdXNoKHRhc2spXHJcbiAgfVxyXG5cclxuICBkaXNwbGF5ZXIoYXJyYXkpIHtcclxuICAgIHRhc2tTcGFjZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gYXJyYXkubmFtZVxyXG4gICAgYXJyYXkuZm9yRWFjaChhcnJJdGVtID0+IHtcclxuICAgICAgdGFza0RPTShhcnJJdGVtLnRpdGxlLCBhcnJJdGVtLmRlc2NyaXB0aW9uLCBhcnJJdGVtLmR1ZURhdGUsIGFyckl0ZW0ucHJpb3JpdHkpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRvbShhcnJheS5uYW1lKVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbiAgZG9tKHByb2plY3ROYW1lKSB7XHJcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcclxuICAgIGFkZFRhc2tCdXR0b24uaWQgPSAnYWRkVGFza0J1dHRvbidcclxuICAgIGFkZFRhc2tCdXR0b24uY2xhc3NOYW1lID0gJ2J0biBidG4tcHJpbWFyeSc7XHJcbiAgICBhZGRUYXNrQnV0dG9uLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gcHJvamVjdE5hbWVcclxuICAgIHNwYWNlLmFwcGVuZChhZGRUYXNrQnV0dG9uKTtcclxuICB9XHJcblxyXG4gIFxyXG59XHJcbiIsImNvbnN0IHRhc2tTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrU3BhY2UnKVxyXG5jb25zdCBzcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGFjZScpXHJcblxyXG5cclxuY29uc3QgbW9kYWwgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBNb2RhbCBjb250YWluZXJcclxuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb2RhbENvbnRhaW5lci5jbGFzc05hbWUgPSAnbW9kYWwnO1xyXG4gIFxyXG4gICAgLy8gTW9kYWwgY29udGVudFxyXG4gICAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb2RhbENvbnRlbnQuY2xhc3NOYW1lID0gJ21vZGFsLWNvbnRlbnQnO1xyXG4gIFxyXG4gICAgLy8gTW9kYWwgaGVhZGVyXHJcbiAgICBjb25zdCBtb2RhbEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9kYWxIZWFkZXIuY2xhc3NOYW1lID0gJ21vZGFsLWhlYWRlcic7XHJcbiAgICBjb25zdCBtb2RhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIG1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QnO1xyXG4gICAgbW9kYWxIZWFkZXIuYXBwZW5kQ2hpbGQobW9kYWxUaXRsZSk7XHJcbiAgXHJcbiAgICAvLyBDbG9zZSBidXR0b25cclxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY2xvc2VCdXR0b24uY2xhc3NOYW1lID0gJ2Nsb3NlJztcclxuICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gJ8OXJztcclxuICAgIG1vZGFsSGVhZGVyLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcclxuICBcclxuICAgIC8vIE1vZGFsIGJvZHlcclxuICAgIGNvbnN0IG1vZGFsQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9kYWxCb2R5LmNsYXNzTmFtZSA9ICdtb2RhbC1ib2R5JztcclxuICBcclxuICAgIC8vIFByb2plY3QgTmFtZSBpbnB1dFxyXG4gICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0IE5hbWU6JztcclxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBuYW1lSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICAgIG5hbWVJbnB1dC5pZCA9ICdwcm9qZWN0TmFtZSc7XHJcbiAgICBuYW1lSW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCc7XHJcbiAgICBtb2RhbEJvZHkuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcclxuICAgIG1vZGFsQm9keS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xyXG4gIFxyXG4gICAgLy8gT3B0aW9uYWwgQ29sb3IgU2VsZWN0b3IgKGV4YW1wbGUpXHJcbiAgICBjb25zdCBjb2xvckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGNvbG9yTGFiZWwudGV4dENvbnRlbnQgPSAnQ29sb3I6JztcclxuICAgIGNvbnN0IGNvbG9yU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICBjb2xvclNlbGVjdC5pZCA9ICdwcm9qZWN0Q29sb3InO1xyXG4gICAgY29sb3JTZWxlY3QuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCc7XHJcbiAgICBjb25zdCBjb2xvck9wdGlvbnMgPSBbJ05vbmUnLCAnUmVkJywgJ0dyZWVuJywgJ0JsdWUnXTtcclxuICAgIGNvbG9yT3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgb3B0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IG9wdGlvbjtcclxuICAgICAgY29sb3JTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XHJcbiAgICB9KTtcclxuICAgIG1vZGFsQm9keS5hcHBlbmRDaGlsZChjb2xvckxhYmVsKTtcclxuICAgIG1vZGFsQm9keS5hcHBlbmRDaGlsZChjb2xvclNlbGVjdCk7XHJcbiAgXHJcbiAgICAvLyBTYXZlIGJ1dHRvblxyXG4gICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgc2F2ZUJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi1wcmltYXJ5JztcclxuICAgIHNhdmVCdXR0b24uaWQgPSAnc2F2ZUJ0bk5ld1Byb2plY3QnXHJcbiAgICBzYXZlQnV0dG9uLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBGb2xkZXInO1xyXG4gICAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xyXG4gIFxyXG4gICAgLy8gQXBwZW5kIGFsbCBwYXJ0cyB0byBtb2RhbCBjb250ZW50XHJcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxIZWFkZXIpO1xyXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsQm9keSk7XHJcbiAgICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xyXG4gIFxyXG4gICAgLy8gRXZlbnQgbGlzdGVuZXIgZm9yIGNsb3NlIGJ1dHRvblxyXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuICBcclxuICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gbmFtZUlucHV0LnZhbHVlO1xyXG4gICAgICBjb25zdCBwcm9qZWN0Q29sb3IgPSBjb2xvclNlbGVjdC52YWx1ZTtcclxuICAgICAgY2xvc2VNb2RhbCgpO1xyXG4gICBcclxuICBcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgLy8gRnVuY3Rpb24gdG8gY2xvc2UgdGhlIG1vZGFsXHJcbiAgICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xyXG4gICAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gRnVuY3Rpb24gdG8gb3BlbiB0aGUgbW9kYWxcclxuICAgIGZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcclxuICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIHNwYWNlLmFwcGVuZChtb2RhbENvbnRhaW5lcilcclxuICAgIH1cclxuICBcclxuXHJcbiAgICAvLyBFeHBvcnQgbW9kYWwgZnVuY3Rpb25zXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBvcGVuTW9kYWwsXHJcbiAgICAgIGNsb3NlTW9kYWwsXHJcbiAgICAgIHNhdmVCdXR0b24sXHJcbiAgICAgIG5hbWVJbnB1dCxcclxuICAgICAgY29sb3JTZWxlY3QsXHJcbiAgICB9O1xyXG4gIH0pKCk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgbW9kYWw7XHJcbiAgXHJcbiAiLCJjb25zdCB0YXNrU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1NwYWNlJylcclxuY29uc3Qgc3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BhY2UnKVxyXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpXHJcblxyXG5cclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiXHJcbmltcG9ydCBtb2RhbCBmcm9tIFwiLi9wcm9qZWN0RG9tLmpzXCJcclxuaW1wb3J0IHsgbG9hZFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZS5qcydcclxuaW1wb3J0IG5ld1Byb2plY3RQb3BVcEZvcm0gZnJvbSBcIi4vdGFza0Zvcm0uanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdE1hbmFnZXJ7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMubmV3UHJvamVjdCA9IFtdXHJcbiAgICB0aGlzLmFsbFByb2plY3RGb2xkZXIgPSBbXVxyXG4gICAgdGhpcy5sb2FkUHJvamVjdHMoKTtcclxuICAgIHRoaXMuYWxsVGFzayA9IFtdXHJcblxyXG4gICAgaWYgKHRoaXMuYWxsUHJvamVjdEZvbGRlci5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5hZGROZXdQcm9qZWN0KDEsICdEZWZhdWx0JywgJ3doaXRlJykubmV3VGFzaygnVGFzayAyJywgJ1RoaXMgaXMgYSBkZXNjcmlwdGlvbiBmb3IgdGFzayAyJywgJzIwMjQtMDctMjAnLCAnTWVkaXVtJyk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmFsbFByb2plY3RGb2xkZXIpXHJcbiAgfVxyXG4gIFxyXG4gIGxvYWRQcm9qZWN0cygpIHtcclxuICAgIHRoaXMuYWxsUHJvamVjdEZvbGRlciA9IGxvYWRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICB9XHJcblxyXG4gIHNhdmVQcm9qZWN0cygpIHtcclxuICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKHRoaXMuYWxsUHJvamVjdEZvbGRlcik7XHJcbiAgfVxyXG5cclxuXHJcbiAgYWRkTmV3UHJvamVjdChpZCwgbmFtZSwgY29sb3IpIHtcclxuICAgIHRoaXMubmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGlkLCBuYW1lLCBjb2xvcik7XHJcbiAgICB0aGlzLmFsbFByb2plY3RGb2xkZXIucHVzaCh0aGlzLm5ld1Byb2plY3QpO1xyXG4gICAgdGhpcy5zYXZlUHJvamVjdHMoKTtcclxuICAgIHJldHVybiB0aGlzLm5ld1Byb2plY3Q7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5ZXIoKSB7ICBcclxuICAgIHRoaXMuZG9tQ3JlYXRvcigpXHJcbiAgfVxyXG5cclxuICBkZWxldGVQcm9qZWN0KGluZGV4KSB7XHJcbiAgICB0aGlzLmFsbFByb2plY3RGb2xkZXIuc3BsaWNlKGluZGV4LCAxKTsgICAgXHJcbiAgICB0aGlzLnNhdmVQcm9qZWN0cygpO1xyXG4gICAgdGhpcy5kaXNwbGF5ZXIoKTsgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIGRvbUNyZWF0b3IoKXtcclxuICAgIHRoaXMucHJvamVjdFBhZ2VhbmRTaWRlQmFyRE9NKHRoaXMuYWxsUHJvamVjdEZvbGRlcik7XHJcbiAgICB0aGlzLnNhdmVCdXR0b24odGhpcy5hbGxQcm9qZWN0Rm9sZGVyKTtcclxuICB9XHJcblxyXG4gIHNhdmVCdXR0b24ocHJvamVjdCkge1xyXG4gICAgY29uc3Qgc2F2ZUJ0bk5ld1Byb2plY3QgPSBtb2RhbC5zYXZlQnV0dG9uO1xyXG4gICAgc2F2ZUJ0bk5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSBtb2RhbC5uYW1lSW5wdXQudmFsdWU7XHJcbiAgICAgIGNvbnN0IGNvbG9yID0gbW9kYWwuY29sb3JTZWxlY3QudmFsdWU7XHJcbiAgICAgIGNvbnN0IGlkID0gdGhpcy5hbGxQcm9qZWN0Rm9sZGVyLmxlbmd0aCArIDE7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmFkZE5ld1Byb2plY3QoaWQsIG5hbWUsIGNvbG9yKTtcclxuICAgICAgdGhpcy5wcm9qZWN0UGFnZWFuZFNpZGVCYXJET00ocHJvamVjdClcclxuICAgICAgbW9kYWwuY2xvc2VNb2RhbCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAgIGdldFNlbGVjdGVkUHJvamVjdEFycmF5KGFycmF5KXtcclxuICAgICAgbGV0IHNlbGVjdEFycmF5ID0gYXJyYXlcclxuICAgICAgY29uc29sZS5sb2coc2VsZWN0QXJyYXkpXHJcbiAgICAgIHRoaXMucmVmcmVzaGVyKClcclxuICAgICAgUHJvamVjdC5wcm90b3R5cGUuZGlzcGxheWVyKHNlbGVjdEFycmF5KTtcclxuICAgICAgdGFza1NwYWNlLmFwcGVuZChuZXdQcm9qZWN0UG9wVXBGb3JtKHNlbGVjdEFycmF5KS5mb3JtKVxyXG4gICAgICB0aXRsZS5pbm5lclRleHQgPSBzZWxlY3RBcnJheS5uYW1lXHJcbiAgICAgIHRoaXMuc2F2ZVByb2plY3RzKClcclxuICAgICAgcmV0dXJuIHNlbGVjdEFycmF5XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaGVyKCl7XHJcbiAgICAgIHRhc2tTcGFjZS5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICAgIHRoaXMuZGlzcGxheWVyKClcclxuICAgIH1cclxuICAgIC8vRE9NXHJcbiAgcHJvamVjdFBhZ2VhbmRTaWRlQmFyRE9NKHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0VUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdFVMJyk7XHJcbiAgICBuZXdQcm9qZWN0VUwuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgc3BhY2UuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuICAgXHJcbiAgICAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgdGhlIHRpdGxlXHJcbiAgICAgdGl0bGUuaW5uZXJUZXh0ID0gJ015IFRvZG9zIFByb2plY3Rzc3Nzc3Nzc3Nzc3MnO1xyXG4gXHJcbiAgICAgXHJcbiAgXHJcbiAgIFxyXG4gICAgIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHRoZSBsaXN0IGNvbnRhaW5lclxyXG4gICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICBwcm9qZWN0TGlzdC5zdHlsZS5saXN0U3R5bGVUeXBlID0gJ25vbmUnO1xyXG4gICAgIHByb2plY3RMaXN0LnN0eWxlLnBhZGRpbmcgPSAnMCc7XHJcbiAgXHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbGlzdEl0ZW0uY2xhc3NOYW1lID0gJ2xpc3QtZ3JvdXAtaXRlbSc7XHJcbiAgICBsaXN0SXRlbS5pZCA9ICdwcm9qZWN0Rm9sZGVyJztcclxuICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcclxuXHJcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgaWNvbi5jbGFzc05hbWUgPSAnZmEtc29saWQgZmEtaGFzaHRhZyc7XHJcbiAgICBpY29uLnN0eWxlLmNvbG9yID0gcHJvamVjdC5jb2xvclxyXG4gICAgaWNvbi5zdHlsZS5mb250V2VpZ2h0ID0gJzEwMCdcclxuICAgIGxpc3RJdGVtLmFwcGVuZChpY29uKTtcclxuICAgIGxpc3RJdGVtLmFwcGVuZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwcm9qZWN0Lm5hbWUpKTtcclxuXHJcbiAgICBsaXN0SXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnV2hpdGUnXHJcbiAgICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgbGV0IGdldFByb2plY3RBcnJheSA9IHByb2plY3QucHJvamVjdDtcclxuICAgICAgdGhpcy5nZXRTZWxlY3RlZFByb2plY3RBcnJheShnZXRQcm9qZWN0QXJyYXkpO1xyXG4gICAgICBcclxuICAgIH0pXHJcblxyXG4gICAgICBjb25zdCBsaXN0SXRlbVRhc2tTcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGxpc3RJdGVtVGFza1NwYWNlLmNsYXNzTmFtZSA9ICdwcm9qZWN0LWl0ZW0nO1xyXG4gICAgICBsaXN0SXRlbVRhc2tTcGFjZS5zdHlsZS5wYWRkaW5nID0gJzEwcHgnO1xyXG4gICAgICBsaXN0SXRlbVRhc2tTcGFjZS5zdHlsZS5ib3JkZXJCb3R0b20gPSAnMXB4IHNvbGlkICNjY2MnO1xyXG4gICAgICBsaXN0SXRlbVRhc2tTcGFjZS5pbm5lclRleHQgPSBwcm9qZWN0Lm5hbWU7XHJcbiAgICAgIGxpc3RJdGVtVGFza1NwYWNlLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgICBkZWxldGVJY29uLmNsYXNzTmFtZSA9ICdmYS1zb2xpZCBmYS10cmFzaCc7XHJcbiAgICAgICAgZGVsZXRlSWNvbi5pZCA9ICdkZWxldGVJY29uJztcclxuICAgICAgICBkZWxldGVJY29uLnN0eWxlLmZsb2F0ID0gJ3JpZ2h0JztcclxuICAgICAgICBkZWxldGVJY29uLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuXHJcbiAgICAgICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKClcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsaXN0SXRlbVRhc2tTcGFjZS5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcclxuICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbVRhc2tTcGFjZSk7XHJcblxyXG4gICAgICAgIGxpc3RJdGVtVGFza1NwYWNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgbGV0IGdldFByb2plY3RBcnJheSA9IHByb2plY3QucHJvamVjdDtcclxuICAgICAgICAgIHRoaXMuZ2V0U2VsZWN0ZWRQcm9qZWN0QXJyYXkoZ2V0UHJvamVjdEFycmF5KTtcclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChsaXN0SXRlbVRhc2tTcGFjZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpKTtcclxuICAgICAgdGhpcy5kZWxldGVQcm9qZWN0KGluZGV4KVxyXG4gICAgICB0aGlzLnNhdmVQcm9qZWN0cygpXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgc3BhY2UuYXBwZW5kQ2hpbGQocHJvamVjdExpc3QpO1xyXG4gICBcclxuICAgIC8vIHRhc2tTcGFjZS5hcHBlbmRDaGlsZChob21lUGFnZSk7XHJcbiAgICBuZXdQcm9qZWN0VUwuYXBwZW5kKGxpc3RJdGVtKTtcclxuXHJcbiAgICB9KVxyXG5cclxuICAgfVxyXG5cclxuIFxyXG59XHJcbiIsImNvbnN0IHRhc2tTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrU3BhY2UnKTtcclxuY29uc3Qgc2V0dGluZ3NJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzSWNvbnMnKTtcclxuY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlck5hbWUnKTtcclxuXHJcblxyXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgYW5kIGV4cG9ydCB0aGUgc2V0dGluZ3MgcGFnZVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTZXR0aW5nc1BhZ2UodGFza1NwYWNlLCB1c2VyTmFtZSkge1xyXG4gICAgLy8gQ2xlYXIgZXhpc3RpbmcgY29udGVudCBpbiB0YXNrU3BhY2VcclxuICAgIHRhc2tTcGFjZS5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAvLyBTZXR0aW5ncyBQYWdlIEVsZW1lbnRzXHJcbiAgICBjb25zdCBzZXR0aW5nc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2V0dGluZ3NDb250YWluZXIuY2xhc3NOYW1lID0gJ3NldHRpbmdzLWNvbnRhaW5lcic7XHJcblxyXG4gICAgLy8gVXNlcm5hbWUgQ2hhbmdlIFNlY3Rpb25cclxuICAgIGNvbnN0IHVzZXJuYW1lU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdXNlcm5hbWVTZWN0aW9uLmNsYXNzTmFtZSA9ICdzZXR0aW5ncy1zZWN0aW9uJztcclxuXHJcbiAgICBjb25zdCB1c2VybmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIHVzZXJuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnQ2hhbmdlIFVzZXJuYW1lOiAnO1xyXG5cclxuICAgIGNvbnN0IHVzZXJuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdXNlcm5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgdXNlcm5hbWVJbnB1dC5pZCA9ICduZXdVc2VybmFtZUlucHV0JztcclxuICAgIHVzZXJuYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgbmV3IHVzZXJuYW1lLi4uJztcclxuXHJcbiAgICBjb25zdCB1c2VybmFtZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdXNlcm5hbWVCdXR0b24udGV4dENvbnRlbnQgPSAnQ2hhbmdlJztcclxuICAgIHVzZXJuYW1lQnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLXByaW1hcnknO1xyXG4gICAgdXNlcm5hbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3VXNlcm5hbWUgPSB1c2VybmFtZUlucHV0LnZhbHVlLnRyaW0oKTtcclxuICAgICAgICBpZiAobmV3VXNlcm5hbWUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gbmV3VXNlcm5hbWU7XHJcbiAgICAgICAgICAgIC8vIFlvdSBjYW4gc2F2ZSB0aGUgbmV3IHVzZXJuYW1lIHRvIGxvY2FsU3RvcmFnZSBvciBzZW5kIGl0IHRvIGEgc2VydmVyIGhlcmVcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzZXJuYW1lIGNoYW5nZWQgdG86JywgbmV3VXNlcm5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYSB2YWxpZCB1c2VybmFtZS4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VybmFtZVNlY3Rpb24uYXBwZW5kQ2hpbGQodXNlcm5hbWVMYWJlbCk7XHJcbiAgICB1c2VybmFtZVNlY3Rpb24uYXBwZW5kQ2hpbGQodXNlcm5hbWVJbnB1dCk7XHJcbiAgICB1c2VybmFtZVNlY3Rpb24uYXBwZW5kQ2hpbGQodXNlcm5hbWVCdXR0b24pO1xyXG5cclxuICAgIC8vIEJhY2tncm91bmQgQ29sb3IgQ2hhbmdlIFNlY3Rpb25cclxuICAgIGNvbnN0IGJnQ29sb3JTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBiZ0NvbG9yU2VjdGlvbi5jbGFzc05hbWUgPSAnc2V0dGluZ3Mtc2VjdGlvbic7XHJcblxyXG4gICAgY29uc3QgYmdDb2xvckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGJnQ29sb3JMYWJlbC50ZXh0Q29udGVudCA9ICdDaGFuZ2UgQmFja2dyb3VuZCBDb2xvcjogJztcclxuXHJcbiAgICBjb25zdCBiZ0NvbG9yU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICBiZ0NvbG9yU2VsZWN0LmlkID0gJ2JnQ29sb3JTZWxlY3QnO1xyXG4gICAgYmdDb2xvclNlbGVjdC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcclxuXHJcbiAgICBjb25zdCBjb2xvcnMgPSBbJ0RlZmF1bHQnLCAnQmx1ZScsICdHcmVlbicsICdZZWxsb3cnLCAnUmVkJ107IC8vIEV4YW1wbGUgY29sb3JzXHJcbiAgICBjb2xvcnMuZm9yRWFjaChjb2xvciA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29sb3I7XHJcbiAgICAgICAgYmdDb2xvclNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYmdDb2xvclNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDb2xvciA9IGJnQ29sb3JTZWxlY3QudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRDb2xvciA9PT0gJ2RlZmF1bHQnKSB7XHJcbiAgICAgICAgICAgIHRhc2tTcGFjZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJzsgLy8gUmVzZXQgdG8gZGVmYXVsdFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhc2tTcGFjZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzZWxlY3RlZENvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGJnQ29sb3JTZWN0aW9uLmFwcGVuZENoaWxkKGJnQ29sb3JMYWJlbCk7XHJcbiAgICBiZ0NvbG9yU2VjdGlvbi5hcHBlbmRDaGlsZChiZ0NvbG9yU2VsZWN0KTtcclxuXHJcbiAgICAvLyBBcHBlbmQgU2VjdGlvbnMgdG8gU2V0dGluZ3MgQ29udGFpbmVyXHJcbiAgICBzZXR0aW5nc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh1c2VybmFtZVNlY3Rpb24pO1xyXG4gICAgc2V0dGluZ3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYmdDb2xvclNlY3Rpb24pO1xyXG5cclxuICAgIC8vIEFwcGVuZCBTZXR0aW5ncyBDb250YWluZXIgdG8gdGFza1NwYWNlXHJcbiAgICB0YXNrU3BhY2UuYXBwZW5kQ2hpbGQoc2V0dGluZ3NDb250YWluZXIpO1xyXG59XHJcblxyXG4iLCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3UHJvamVjdFBvcFVwRm9ybShzZWxlY3RBcnJheSkge1xyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBmb3JtLmlkID0gJ25ld1Rhc2tGb3JtJztcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgncG9wdXAtZm9ybScsICduZWVkcy12YWxpZGF0aW9uJyk7XHJcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnbm92YWxpZGF0ZScsICcnKTtcclxuICAgIFxyXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlOic7XHJcbiAgICB0aXRsZUxhYmVsLmNsYXNzTmFtZSA9ICdmb3JtLWxhYmVsJztcclxuICAgIHRpdGxlTGFiZWwuaHRtbEZvciA9ICdwcm9qZWN0VGl0bGUnO1xyXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICB0aXRsZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xyXG4gICAgdGl0bGVJbnB1dC5pZCA9ICdwcm9qZWN0VGl0bGUnO1xyXG4gICAgdGl0bGVJbnB1dC5uYW1lID0gJ3RpdGxlJztcclxuICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgdGl0bGVJbnB1dC5zdHlsZS5oZWlnaHQgPSAnNTBweCdcclxuICAgIFxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOic7XHJcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmNsYXNzTmFtZSA9ICdmb3JtLWxhYmVsJztcclxuICAgIGRlc2NyaXB0aW9uTGFiZWwuaHRtbEZvciA9ICdwcm9qZWN0RGVzY3JpcHRpb24nO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9ICdwcm9qZWN0RGVzY3JpcHRpb24nO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gJ2Rlc2NyaXB0aW9uJztcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgXHJcbiAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOic7XHJcbiAgICBkdWVEYXRlTGFiZWwuY2xhc3NOYW1lID0gJ2Zvcm0tbGFiZWwnO1xyXG4gICAgZHVlRGF0ZUxhYmVsLmh0bWxGb3IgPSAncHJvamVjdER1ZURhdGUnO1xyXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGR1ZURhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xyXG4gICAgZHVlRGF0ZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xyXG4gICAgZHVlRGF0ZUlucHV0LmlkID0gJ3Byb2plY3REdWVEYXRlJztcclxuICAgIGR1ZURhdGVJbnB1dC5uYW1lID0gJ2R1ZURhdGUnO1xyXG4gICAgZHVlRGF0ZUlucHV0LnN0eWxlLmhlaWdodCA9ICc1MHB4J1xyXG4gICAgXHJcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcclxuICAgIHByaW9yaXR5TGFiZWwuY2xhc3NOYW1lID0gJ2Zvcm0tbGFiZWwnO1xyXG4gICAgcHJpb3JpdHlMYWJlbC5odG1sRm9yID0gJ3Byb2plY3RQcmlvcml0eSc7XHJcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuY2xhc3NOYW1lID0gJ2Zvcm0tc2VsZWN0JztcclxuICAgIHByaW9yaXR5U2VsZWN0LmlkID0gJ3Byb2plY3RQcmlvcml0eSc7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5uYW1lID0gJ3ByaW9yaXR5JztcclxuICAgIHByaW9yaXR5U2VsZWN0LnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgIHByaW9yaXR5U2VsZWN0LnN0eWxlLmhlaWdodCA9ICc1MHB4J1xyXG4gICAgXHJcbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbnMgPSBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddO1xyXG4gICAgcHJpb3JpdHlPcHRpb25zLmZvckVhY2gob3B0aW9uVGV4dCA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25UZXh0LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvblRleHQ7XHJcbiAgICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xyXG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBQcm9qZWN0JztcclxuICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi1zdWNjZXNzIG10LTMnO1xyXG4gICAgXHJcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XHJcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICAgIGNhbmNlbEJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi1kYW5nZXIgbXQtMyBtcy0yJztcclxuICAgIFxyXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XHJcblxyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xyXG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XHJcbiAgICAgIGNvbnN0IGR1ZURhdGUgPSBkdWVEYXRlSW5wdXQudmFsdWU7XHJcbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gcHJpb3JpdHlTZWxlY3QudmFsdWU7XHJcblxyXG4gICAgICBjb25zdCB0aGVOZXdUYXNrID0ge1xyXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXHJcbiAgICAgICAgZHVlRGF0ZTogZHVlRGF0ZSxcclxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHlcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHNlbGVjdEFycmF5LnB1c2godGhlTmV3VGFzayk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNlbGVjdEFycmF5KTtcclxuICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAvLyBIaWRlIHRoZSBmb3JtIGFmdGVyIHN1Ym1pc3Npb25cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBmb3JtQ29udGFpbmVyO1xyXG59XHJcbiIsIi8vIEltcG9ydGluZyBQcm9qZWN0TWFuYWdlciBmcm9tIHByb2plY3RNYW5hZ2VyLmpzXHJcbmltcG9ydCBQcm9qZWN0TWFuYWdlciAgZnJvbSBcIi4vcHJvamVjdE1hbmFnZXIuanNcIjtcclxuXHJcbi8vIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBQcm9qZWN0TWFuYWdlciBhbmQgZ2V0IHRoZSBkZWZhdWx0IHByb2plY3RcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNre1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5cclxuXHJcbiIsIi8vIGltcG9ydCB7IGRlbGV0ZUZ1bmN0aW9uIH0gZnJvbSBcIi4vdG9kby5qc1wiO1xyXG5cclxuXHJcbmNvbnN0IHRhc2tTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrU3BhY2UnKVxyXG5jb25zdCBzcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGFjZScpXHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJylcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrRE9NKHRpdGxlVGV4dCwgZGVzY3JpcHRpb25UZXh0LCBwcmlvcml0eVRleHQsIGR1ZURhdGVUZXh0LCBpbmRleCkge1xyXG4gIC8vIENyZWF0ZSB0YXNrIGNhcmQgZWxlbWVudHNcclxuXHJcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhcmQuY2xhc3NOYW1lID0gJ2NhcmQgdGFzay1jYXJkJztcclxuICBjYXJkLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KVxyXG5cclxuICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICByb3cuY2xhc3NOYW1lID0gJ3JvdyBuby1ndXR0ZXJzJztcclxuXHJcbiAgY29uc3QgY29sSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbEljb24uY2xhc3NOYW1lID0gJ2NvbC1tZC0yIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBiZy1wcmltYXJ5IHRleHQtd2hpdGUgcG9zaXRpb24tcmVsYXRpdmUnO1xyXG5cclxuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGljb24uY2xhc3NOYW1lID0gJ2ZhcyBmYS10YXNrcyBmYS0yeCc7XHJcblxyXG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcclxuICBjaGVja2JveC5jbGFzc05hbWUgPSAnYmlnLWNoZWNrYm94JztcclxuICBjaGVja2JveC5hcmlhTGFiZWwgPSAnVGFzayBDb21wbGV0ZSc7XHJcblxyXG4gIGNvbnN0IGNvbEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb2xCb2R5LmNsYXNzTmFtZSA9ICdjb2wtbWQtMTAnO1xyXG5cclxuICBjb25zdCBjYXJkQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhcmRCb2R5LmNsYXNzTmFtZSA9ICdjYXJkLWJvZHknO1xyXG5cclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgdGl0bGUuY2xhc3NOYW1lID0gJ2NhcmQtdGl0bGUnO1xyXG4gIHRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVUZXh0O1xyXG5cclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBkZXNjcmlwdGlvbi5jbGFzc05hbWUgPSAnY2FyZC10ZXh0IGRlc2NyaXB0aW9uJztcclxuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uVGV4dDtcclxuXHJcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgcHJpb3JpdHkuY2xhc3NOYW1lID0gJ2NhcmQtdGV4dCBwcmlvcml0eSc7XHJcbiAgcHJpb3JpdHkuaW5uZXJIVE1MID0gYDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj48aSBjbGFzcz1cImZhcyBmYS1mbGFnXCI+PC9pPiBQcmlvcml0eTogJHtwcmlvcml0eVRleHR9PC9zbWFsbD5gO1xyXG5cclxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGR1ZURhdGUuY2xhc3NOYW1lID0gJ2NhcmQtdGV4dCc7XHJcbiAgZHVlRGF0ZS5pbm5lckhUTUwgPSBgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPjxpIGNsYXNzPVwiZmFzIGZhLWNhbGVuZGFyLWRheVwiPjwvaT4gRHVlIERhdGU6IDxzcGFuIGlkPVwiZHVlRGF0ZVwiPiR7ZHVlRGF0ZVRleHR9PC9zcGFuPjwvc21hbGw+YDtcclxuXHJcbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyJztcclxuXHJcbiAgY29uc3QgYnV0dG9uR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGVkaXRCdXR0b24uY2xhc3NOYW1lID0gJ2J0biBidG4td2FybmluZyBidG4tc20gbS0yJztcclxuICBlZGl0QnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPiBFZGl0JztcclxuXHJcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLWRhbmdlciBidG4tc20nO1xyXG4gIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtdHJhc2hcIj48L2k+IERlbGV0ZSc7XHJcblxyXG4gIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2hlY2tib3hDb250YWluZXIuY2xhc3NOYW1lID0gJ2Zvcm0tY2hlY2snO1xyXG4gIGNoZWNrYm94Q29udGFpbmVyLmlkID0gJ2RpdkZvckNoZWNrQm94JztcclxuXHJcbiAgY29uc3QgdGFza0NvbXBsZXRlZENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICB0YXNrQ29tcGxldGVkQ2hlY2tib3guY2xhc3NOYW1lID0gJ2Zvcm0tY2hlY2staW5wdXQnO1xyXG4gIHRhc2tDb21wbGV0ZWRDaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcclxuICB0YXNrQ29tcGxldGVkQ2hlY2tib3guaWQgPSAndGFza0NvbXBsZXRlZCc7XHJcblxyXG4gIGNvbnN0IHRhc2tDb21wbGV0ZWRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgdGFza0NvbXBsZXRlZExhYmVsLmNsYXNzTmFtZSA9ICdmb3JtLWNoZWNrLWxhYmVsJztcclxuICB0YXNrQ29tcGxldGVkTGFiZWwuaHRtbEZvciA9ICd0YXNrQ29tcGxldGVkJztcclxuICB0YXNrQ29tcGxldGVkTGFiZWwudGV4dENvbnRlbnQgPSAnQ29tcGxldGVkJztcclxuXHJcbiAgLy8gQXBwZW5kIGVsZW1lbnRzXHJcbiAgY29sSWNvbi5hcHBlbmRDaGlsZChpY29uKTtcclxuICBjb2xJY29uLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuXHJcbiAgYnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XHJcbiAgYnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuXHJcbiAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbXBsZXRlZENoZWNrYm94KTtcclxuICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29tcGxldGVkTGFiZWwpO1xyXG5cclxuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uR3JvdXApO1xyXG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcik7XHJcblxyXG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICBjYXJkQm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xyXG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xyXG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XHJcblxyXG4gIGNvbEJvZHkuYXBwZW5kQ2hpbGQoY2FyZEJvZHkpO1xyXG5cclxuICByb3cuYXBwZW5kQ2hpbGQoY29sSWNvbik7XHJcbiAgcm93LmFwcGVuZENoaWxkKGNvbEJvZHkpO1xyXG5cclxuICBjYXJkLmFwcGVuZENoaWxkKHJvdyk7XHJcblxyXG4gIC8vIEFwcGVuZCBjYXJkIHRvIGNvbnRhaW5lclxyXG4gIHNwYWNlLmFwcGVuZChjYXJkKTtcclxuXHJcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGRlbGV0ZUZ1bmN0aW9uKGNhcmQpXHJcbiAgfSlcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IHRhc2tTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrU3BhY2UnKVxyXG5cclxuaW1wb3J0IG1vZGFsIGZyb20gXCIuL3Byb2plY3REb20uanNcIjtcclxuaW1wb3J0IHRvZG9GdW5jdGlvbnMgZnJvbSBcIi4vZnVuY3Rpb25zLmpzXCI7XHJcblxyXG5cclxuaW1wb3J0IFByb2plY3RNYW5hZ2VyIGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyLmpzXCI7XHJcblxyXG5cclxuY29uc3QgbXlQcm9qZWN0TWFuYWdlciA9IG5ldyBQcm9qZWN0TWFuYWdlcigpO1xyXG5cclxuXHJcbm15UHJvamVjdE1hbmFnZXIuZGlzcGxheWVyKClcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxudG9kb0Z1bmN0aW9ucyh0YXNrU3BhY2UpXHJcblxyXG5cclxuY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGVOZXdQcm9qZWN0JylcclxuY3JlYXRlTmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICBtb2RhbC5vcGVuTW9kYWwoKVxyXG59KVxyXG5cclxuIl0sIm5hbWVzIjpbIm5ld1Byb2plY3RQb3BVcEZvcm0iLCJjcmVhdGVTZXR0aW5nc1BhZ2UiLCJ0b2RvRnVuY3Rpb25zIiwidGhlRGl2Iiwic2V0dGluZ3NJY29uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInVzZXJOYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvYWRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UiLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlIiwicHJvamVjdHMiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidGFza0RPTSIsIlRhc2siLCJ0YXNrU3BhY2UiLCJzcGFjZSIsInRpdGxlIiwiUHJvamVjdCIsImlkIiwibmFtZSIsImNvbG9yIiwiX2NsYXNzQ2FsbENoZWNrIiwicHJvamVjdCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwibmV3VGFzayIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwidGhlTmV3VGFzayIsInB1c2giLCJkaXNwbGF5ZXIiLCJhZGRUYXNrcyIsInRhc2siLCJhcnJheSIsImlubmVySFRNTCIsImlubmVyVGV4dCIsImZvckVhY2giLCJhcnJJdGVtIiwiZG9tIiwicHJvamVjdE5hbWUiLCJhZGRUYXNrQnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ3aWR0aCIsImFwcGVuZCIsImRlZmF1bHQiLCJtb2RhbCIsIm1vZGFsQ29udGFpbmVyIiwibW9kYWxDb250ZW50IiwibW9kYWxIZWFkZXIiLCJtb2RhbFRpdGxlIiwiYXBwZW5kQ2hpbGQiLCJjbG9zZUJ1dHRvbiIsIm1vZGFsQm9keSIsIm5hbWVMYWJlbCIsIm5hbWVJbnB1dCIsInR5cGUiLCJjb2xvckxhYmVsIiwiY29sb3JTZWxlY3QiLCJjb2xvck9wdGlvbnMiLCJvcHRpb24iLCJvcHRpb25FbGVtZW50Iiwic2F2ZUJ1dHRvbiIsImRpc3BsYXkiLCJwcm9qZWN0Q29sb3IiLCJjbG9zZU1vZGFsIiwib3Blbk1vZGFsIiwiUHJvamVjdE1hbmFnZXIiLCJuZXdQcm9qZWN0IiwiYWxsUHJvamVjdEZvbGRlciIsImxvYWRQcm9qZWN0cyIsImFsbFRhc2siLCJsZW5ndGgiLCJhZGROZXdQcm9qZWN0IiwiY29uc29sZSIsImxvZyIsInNhdmVQcm9qZWN0cyIsImRvbUNyZWF0b3IiLCJkZWxldGVQcm9qZWN0IiwiaW5kZXgiLCJzcGxpY2UiLCJwcm9qZWN0UGFnZWFuZFNpZGVCYXJET00iLCJfdGhpcyIsInNhdmVCdG5OZXdQcm9qZWN0IiwiZ2V0U2VsZWN0ZWRQcm9qZWN0QXJyYXkiLCJzZWxlY3RBcnJheSIsInJlZnJlc2hlciIsInByb3RvdHlwZSIsImZvcm0iLCJfdGhpczIiLCJuZXdQcm9qZWN0VUwiLCJwcm9qZWN0TGlzdCIsImxpc3RTdHlsZVR5cGUiLCJwYWRkaW5nIiwibGlzdEl0ZW0iLCJzZXRBdHRyaWJ1dGUiLCJpY29uIiwiZm9udFdlaWdodCIsImNyZWF0ZVRleHROb2RlIiwiYmFja2dyb3VuZENvbG9yIiwiZ2V0UHJvamVjdEFycmF5IiwibGlzdEl0ZW1UYXNrU3BhY2UiLCJib3JkZXJCb3R0b20iLCJkZWxldGVJY29uIiwiY3Vyc29yIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwic2V0dGluZ3NDb250YWluZXIiLCJ1c2VybmFtZVNlY3Rpb24iLCJ1c2VybmFtZUxhYmVsIiwidXNlcm5hbWVJbnB1dCIsInBsYWNlaG9sZGVyIiwidXNlcm5hbWVCdXR0b24iLCJuZXdVc2VybmFtZSIsInRyaW0iLCJhbGVydCIsImJnQ29sb3JTZWN0aW9uIiwiYmdDb2xvckxhYmVsIiwiYmdDb2xvclNlbGVjdCIsImNvbG9ycyIsInNlbGVjdGVkQ29sb3IiLCJ0b0xvd2VyQ2FzZSIsImZvcm1Db250YWluZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0aXRsZUxhYmVsIiwiaHRtbEZvciIsInRpdGxlSW5wdXQiLCJyZXF1aXJlZCIsImhlaWdodCIsImRlc2NyaXB0aW9uTGFiZWwiLCJkZXNjcmlwdGlvbklucHV0IiwiZHVlRGF0ZUxhYmVsIiwiZHVlRGF0ZUlucHV0IiwicHJpb3JpdHlMYWJlbCIsInByaW9yaXR5U2VsZWN0IiwicHJpb3JpdHlPcHRpb25zIiwib3B0aW9uVGV4dCIsInN1Ym1pdEJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsInByZXZlbnREZWZhdWx0IiwidGl0bGVUZXh0IiwiZGVzY3JpcHRpb25UZXh0IiwicHJpb3JpdHlUZXh0IiwiZHVlRGF0ZVRleHQiLCJjYXJkIiwicm93IiwiY29sSWNvbiIsImNoZWNrYm94IiwiYXJpYUxhYmVsIiwiY29sQm9keSIsImNhcmRCb2R5IiwiY29uY2F0IiwiYnV0dG9uQ29udGFpbmVyIiwiYnV0dG9uR3JvdXAiLCJlZGl0QnV0dG9uIiwiZGVsZXRlQnV0dG9uIiwiY2hlY2tib3hDb250YWluZXIiLCJ0YXNrQ29tcGxldGVkQ2hlY2tib3giLCJ0YXNrQ29tcGxldGVkTGFiZWwiLCJkZWxldGVGdW5jdGlvbiIsIm15UHJvamVjdE1hbmFnZXIiLCJjcmVhdGVOZXdQcm9qZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==