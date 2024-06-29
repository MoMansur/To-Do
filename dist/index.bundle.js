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

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _todoDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoDOM.js */ "./src/todoDOM.js");
/* harmony import */ var _taskForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskForm.js */ "./src/taskForm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var taskSpace = document.getElementById('taskSpace');
var Project = /*#__PURE__*/function () {
  function Project(id, name) {
    _classCallCheck(this, Project);
    this.id = id;
    this.name = name;
    this.project = [];
  }
  return _createClass(Project, [{
    key: "addTasks",
    value: function addTasks(arr) {
      this.project.push(arr);
      return this.project;
    }
  }, {
    key: "displayer",
    value: function displayer() {
      var array = this.project;
      taskSpace.innerHTML = "";
      array.forEach(function (arrItem) {
        (0,_todoDOM_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arrItem.title, arrItem.description, arrItem.dueDate, arrItem.priority);
      });
      taskSpace.append((0,_taskForm_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
      console.log(array);
      return array;
    }
  }, {
    key: "deleteFunction",
    value: function deleteFunction() {
      var indexAttribute = parseInt(taskSpace.getAttribute("data-index"));
      this.project.splice(indexAttribute, 1);
      displayer();
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

  // Event listener for Save button (example)
  saveButton.addEventListener('click', function () {
    var projectName = nameInput.value;
    var projectColor = colorSelect.value;
    console.log("Project Name: ".concat(projectName, ", Color: ").concat(projectColor));
    // Implement your save logic here
    closeModal();
    addProjectUI(projectName);
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
  function addProjectUI(projectName, index) {
    var listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.setAttribute('data-index', index);
    // Create an icon element
    var icon = document.createElement('i');
    icon.className = 'fa-solid fa-hashtag';

    // Append the icon and text node to the list item
    listItem.append(icon);
    listItem.append(projectName);
    newProjectUL.append(listItem);
  }

  // Export modal functions
  return {
    openModal: openModal,
    closeModal: closeModal,
    addProjectUI: addProjectUI
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
/* harmony export */   ProjectManager: () => (/* binding */ ProjectManager)
/* harmony export */ });
/* harmony import */ var _projectDom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectDom.js */ "./src/projectDom.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var ProjectManager = /*#__PURE__*/function () {
  function ProjectManager() {
    _classCallCheck(this, ProjectManager);
    this.allProjectsArr = [];
    this.newProject = new _project_js__WEBPACK_IMPORTED_MODULE_1__.Project();
    this.defaultProject = new _project_js__WEBPACK_IMPORTED_MODULE_1__.Project(1, 'Default');
    this.allTask = [];
  }
  return _createClass(ProjectManager, [{
    key: "newProjectFunc",
    value: function newProjectFunc(id, name) {
      this.newProject = new _project_js__WEBPACK_IMPORTED_MODULE_1__.Project(id, name);
      return this.newProject;
    }
  }, {
    key: "allProjects",
    value: function allProjects() {
      this.allProjectsArr.push(this.newProject);
    }
  }, {
    key: "displayer",
    value: function displayer() {
      var arr = this.allProjectsArr;
      arr.forEach(function (item) {
        _projectDom_js__WEBPACK_IMPORTED_MODULE_0__["default"].addProjectUI(item);
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
/* harmony export */   "default": () => (/* binding */ newProjectPopUpForm)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _todoDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoDOM.js */ "./src/todoDOM.js");
// import './css/projectDOM.css';




// Function to create and show the new project popup form
function newProjectPopUpForm() {
  // Create form elements
  var formContainer = document.createElement('div');
  formContainer.classList.add('form-container');
  var form = document.createElement('form');
  form.classList.add('popup-form');

  // Title
  var titleLabel = document.createElement('label');
  titleLabel.textContent = 'Title:';
  titleLabel.htmlFor = 'projectTitle';
  var titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.id = 'projectTitle';
  titleInput.name = 'title';
  titleInput.required = true;

  // Description
  var descriptionLabel = document.createElement('label');
  descriptionLabel.textContent = 'Description:';
  descriptionLabel.htmlFor = 'projectDescription';
  var descriptionInput = document.createElement('textarea');
  descriptionInput.id = 'projectDescription';
  descriptionInput.name = 'description';
  descriptionInput.required = true;

  // Due Date
  var dueDateLabel = document.createElement('label');
  dueDateLabel.textContent = 'Due Date:';
  dueDateLabel.htmlFor = 'projectDueDate';
  var dueDateInput = document.createElement('input');
  dueDateInput.type = 'date';
  dueDateInput.id = 'projectDueDate';
  dueDateInput.name = 'dueDate';
  dueDateInput.required = true;

  // Priority
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

  // Submit Button
  var submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Create Project';

  // Append elements to form
  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(descriptionLabel);
  form.appendChild(descriptionInput);
  form.appendChild(dueDateLabel);
  form.appendChild(dueDateInput);
  form.appendChild(priorityLabel);
  form.appendChild(prioritySelect);
  form.appendChild(submitButton);

  // Append form to form container
  formContainer.appendChild(form);

  // Add event listener to close the form on submit
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Handle form submission logic here
    (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.newTask)(titleInput.value, descriptionInput.value, prioritySelect.value, dueDateInput.value);
    formContainer.remove();
  });
  return form;
}

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TaskArray),
/* harmony export */   deleteFunction: () => (/* binding */ deleteFunction),
/* harmony export */   newTask: () => (/* binding */ newTask)
/* harmony export */ });
/* harmony import */ var _projectManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager.js */ "./src/projectManager.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
// Importing ProjectManager from projectManager.js


// Create a new instance of ProjectManager and get the default project
var newProjectManager = new _projectManager_js__WEBPACK_IMPORTED_MODULE_0__.ProjectManager();
var newProject = newProjectManager.defaultProject;

// Define a class for task arrays
var TaskArray = /*#__PURE__*/_createClass(function TaskArray(title, description, dueDate, priority) {
  _classCallCheck(this, TaskArray);
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
});

function displayer(arr) {
  arr.displayer();
}
function newTask(title, description, dueDate, priority) {
  var theNewTask = new TaskArray(title, description, dueDate, priority);
  newProject.addTasks(theNewTask);
  displayer(newProject);
}
function deleteFunction(theCard) {
  var indexAttribute = parseInt(theCard.getAttribute("data-index"));
  var confirmToRemove = confirm('Are you sure you want to remove this task?');
  if (confirmToRemove) {
    newProject.project.splice(indexAttribute, 1);
    displayer(newProject);
    console.log(newProject);
  } else {
    displayer(newProject);
    console.log(newProject);
  }
}

// Creating new tasks
newTask('Task 1', 'This is a description for task 1', '2024-07-15', 'High');
newTask('Task 2', 'This is a description for task 2', '2024-07-20', 'Medium');

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

var taskSpace = document.getElementById('taskSpace');
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
  taskSpace.appendChild(card);
  deleteButton.addEventListener('click', function () {
    (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.deleteFunction)(card);
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
var taskSpace = document.getElementById('taskSpace');

// import { ProjectManager } from "./projectManager.js";


(0,_functions_js__WEBPACK_IMPORTED_MODULE_1__["default"])(taskSpace);
var createNewProject = document.getElementById('createNewProject');
createNewProject.addEventListener('click', function () {
  _projectDom_js__WEBPACK_IMPORTED_MODULE_0__["default"].openModal();
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUV0RDtBQUNvQztBQUVPO0FBRTNDSix5REFBYSxDQUFDUSxTQUFTLENBQUM7QUFHeEIsSUFBTXFJLGdCQUFnQixHQUFHMUksUUFBUSxDQUFDQyxjQUFjLENBQUMsa0JBQWtCLENBQUM7QUFFcEV5SSxnQkFBZ0IsQ0FBQ3ZJLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFJO0VBQzNDZ0Msc0RBQUssQ0FBQzJCLFNBQVMsQ0FBQyxDQUFDO0FBR3JCLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcHJvamVjdERvbS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wcm9qZWN0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90YXNrRm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3RvZG9ET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmV3UHJvamVjdFBvcFVwRm9ybSBmcm9tIFwiLi90YXNrRm9ybS5qc1wiO1xyXG5pbXBvcnQgY3JlYXRlU2V0dGluZ3NQYWdlIGZyb20gXCIuL3NldHRpbmdzLmpzXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gdG9kb0Z1bmN0aW9ucyh0aGVEaXYpe1xyXG5jb25zdCBzZXR0aW5nc0ljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3NJY29uJyk7XHJcbmNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJOYW1lJyk7XHJcbnNldHRpbmdzSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICBjcmVhdGVTZXR0aW5nc1BhZ2UodGhlRGl2LCB1c2VyTmFtZSlcclxufSlcclxuXHJcblxyXG4vLyBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2snKVxyXG4vLyBsZXQgaXNPbiA9ICB0cnVlXHJcbi8vIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4vLyAgICAgaWYoaXNPbil7XHJcbi8vICAgICAgICAgdGhlRGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3RQb3BVcEZvcm0oKSlcclxuLy8gICAgIH1lbHNle1xyXG4vLyAgICAgICAgbmV3UHJvamVjdFBvcFVwRm9ybSgpLnJlbW92ZSgpXHJcbi8vICAgICB9XHJcbi8vICAgICBpc09uID0gIWlzT25cclxuLy8gfSlcclxuXHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9kb0Z1bmN0aW9ucyIsImltcG9ydCB0YXNrRE9NIGZyb20gXCIuL3RvZG9ET00uanNcIlxyXG5pbXBvcnQgbmV3UHJvamVjdFBvcFVwRm9ybSBmcm9tIFwiLi90YXNrRm9ybS5qc1wiXHJcblxyXG5jb25zdCB0YXNrU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1NwYWNlJylcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0e1xyXG4gICAgY29uc3RydWN0b3IoaWQsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZFxyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcclxuICAgICAgICB0aGlzLnByb2plY3QgPSBbXSAgIFxyXG4gICAgfSAgXHJcbiAgICBhZGRUYXNrcyhhcnIpe1xyXG4gICAgICAgIHRoaXMucHJvamVjdC5wdXNoKGFycilcclxuICAgICAgIHJldHVybiB0aGlzLnByb2plY3RcclxuICAgIH1cclxuICAgIGRpc3BsYXllcigpe1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gdGhpcy5wcm9qZWN0XHJcbiAgICAgICAgdGFza1NwYWNlLmlubmVySFRNTCA9IFwiXCJcclxuICAgICAgICBhcnJheS5mb3JFYWNoKGFyckl0ZW0gPT4ge1xyXG4gICAgICAgICAgICB0YXNrRE9NKGFyckl0ZW0udGl0bGUsIGFyckl0ZW0uZGVzY3JpcHRpb24sIGFyckl0ZW0uZHVlRGF0ZSwgYXJySXRlbS5wcmlvcml0eSlcclxuICAgICAgICB9KTtcclxuICAgICAgICB0YXNrU3BhY2UuYXBwZW5kKG5ld1Byb2plY3RQb3BVcEZvcm0oKSlcclxuICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGFycmF5KVxyXG4gICAgICAgIHJldHVybiBhcnJheVxyXG4gICAgfVxyXG4gICAgZGVsZXRlRnVuY3Rpb24oKXtcclxuICAgICAgICBjb25zdCBpbmRleEF0dHJpYnV0ZSA9IHBhcnNlSW50KHRhc2tTcGFjZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpKTtcclxuICAgICAgICB0aGlzLnByb2plY3Quc3BsaWNlKGluZGV4QXR0cmlidXRlLCAxKTtcclxuICAgICAgICBkaXNwbGF5ZXIoKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiBcclxuXHJcbiIsIi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSBtb2RhbCBhcyBhIGRlZmF1bHQgbW9kdWxlXHJcbmNvbnN0IHRhc2tTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrU3BhY2UnKVxyXG5jb25zdCBuZXdQcm9qZWN0VUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdFVMJylcclxuXHJcbmNvbnN0IG1vZGFsID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gTW9kYWwgY29udGFpbmVyXHJcbiAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9kYWxDb250YWluZXIuY2xhc3NOYW1lID0gJ21vZGFsJztcclxuICBcclxuICAgIC8vIE1vZGFsIGNvbnRlbnRcclxuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9kYWxDb250ZW50LmNsYXNzTmFtZSA9ICdtb2RhbC1jb250ZW50JztcclxuICBcclxuICAgIC8vIE1vZGFsIGhlYWRlclxyXG4gICAgY29uc3QgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsSGVhZGVyLmNsYXNzTmFtZSA9ICdtb2RhbC1oZWFkZXInO1xyXG4gICAgY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBtb2RhbFRpdGxlLnRleHRDb250ZW50ID0gJ05ldyBQcm9qZWN0JztcclxuICAgIG1vZGFsSGVhZGVyLmFwcGVuZENoaWxkKG1vZGFsVGl0bGUpO1xyXG4gIFxyXG4gICAgLy8gQ2xvc2UgYnV0dG9uXHJcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNsb3NlQnV0dG9uLmNsYXNzTmFtZSA9ICdjbG9zZSc7XHJcbiAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9ICfDlyc7XHJcbiAgICBtb2RhbEhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XHJcbiAgXHJcbiAgICAvLyBNb2RhbCBib2R5XHJcbiAgICBjb25zdCBtb2RhbEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsQm9keS5jbGFzc05hbWUgPSAnbW9kYWwtYm9keSc7XHJcbiAgXHJcbiAgICAvLyBQcm9qZWN0IE5hbWUgaW5wdXRcclxuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnUHJvamVjdCBOYW1lOic7XHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICBuYW1lSW5wdXQuaWQgPSAncHJvamVjdE5hbWUnO1xyXG4gICAgbmFtZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xyXG4gICAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XHJcbiAgICBtb2RhbEJvZHkuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcclxuICBcclxuICAgIC8vIE9wdGlvbmFsIENvbG9yIFNlbGVjdG9yIChleGFtcGxlKVxyXG4gICAgY29uc3QgY29sb3JMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb2xvckxhYmVsLnRleHRDb250ZW50ID0gJ0NvbG9yOic7XHJcbiAgICBjb25zdCBjb2xvclNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgY29sb3JTZWxlY3QuaWQgPSAncHJvamVjdENvbG9yJztcclxuICAgIGNvbG9yU2VsZWN0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xyXG4gICAgY29uc3QgY29sb3JPcHRpb25zID0gWydOb25lJywgJ1JlZCcsICdHcmVlbicsICdCbHVlJ107XHJcbiAgICBjb2xvck9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBvcHRpb247XHJcbiAgICAgIGNvbG9yU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgICBtb2RhbEJvZHkuYXBwZW5kQ2hpbGQoY29sb3JMYWJlbCk7XHJcbiAgICBtb2RhbEJvZHkuYXBwZW5kQ2hpbGQoY29sb3JTZWxlY3QpO1xyXG4gIFxyXG4gICAgLy8gU2F2ZSBidXR0b25cclxuICAgIGNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHNhdmVCdXR0b24uY2xhc3NOYW1lID0gJ2J0biBidG4tcHJpbWFyeSc7XHJcbiAgICBzYXZlQnV0dG9uLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBGb2xkZXInO1xyXG4gICAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xyXG4gIFxyXG4gICAgLy8gQXBwZW5kIGFsbCBwYXJ0cyB0byBtb2RhbCBjb250ZW50XHJcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxIZWFkZXIpO1xyXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsQm9keSk7XHJcbiAgICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xyXG4gIFxyXG4gICAgLy8gRXZlbnQgbGlzdGVuZXIgZm9yIGNsb3NlIGJ1dHRvblxyXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuICBcclxuICAgIC8vIEV2ZW50IGxpc3RlbmVyIGZvciBTYXZlIGJ1dHRvbiAoZXhhbXBsZSlcclxuICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gbmFtZUlucHV0LnZhbHVlO1xyXG4gICAgICBjb25zdCBwcm9qZWN0Q29sb3IgPSBjb2xvclNlbGVjdC52YWx1ZTtcclxuICAgICAgY29uc29sZS5sb2coYFByb2plY3QgTmFtZTogJHtwcm9qZWN0TmFtZX0sIENvbG9yOiAke3Byb2plY3RDb2xvcn1gKTtcclxuICAgICAgLy8gSW1wbGVtZW50IHlvdXIgc2F2ZSBsb2dpYyBoZXJlXHJcbiAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgICAgYWRkUHJvamVjdFVJKHByb2plY3ROYW1lKVxyXG5cclxuXHJcbiAgICB9KTtcclxuICBcclxuICAgIC8vIEZ1bmN0aW9uIHRvIGNsb3NlIHRoZSBtb2RhbFxyXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcclxuICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuICBcclxuICAgIC8vIEZ1bmN0aW9uIHRvIG9wZW4gdGhlIG1vZGFsXHJcbiAgICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XHJcbiAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICB0YXNrU3BhY2UuYXBwZW5kKG1vZGFsQ29udGFpbmVyKVxyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdFVJKHByb2plY3ROYW1lLCBpbmRleCl7XHJcbiAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgbGlzdEl0ZW0uY2xhc3NOYW1lID0gJ2xpc3QtZ3JvdXAtaXRlbSc7XHJcbiAgICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KVxyXG4gICAgICAvLyBDcmVhdGUgYW4gaWNvbiBlbGVtZW50XHJcbiAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgIGljb24uY2xhc3NOYW1lID0gJ2ZhLXNvbGlkIGZhLWhhc2h0YWcnO1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIC8vIEFwcGVuZCB0aGUgaWNvbiBhbmQgdGV4dCBub2RlIHRvIHRoZSBsaXN0IGl0ZW1cclxuICAgICAgbGlzdEl0ZW0uYXBwZW5kKGljb24pO1xyXG4gICAgICBsaXN0SXRlbS5hcHBlbmQocHJvamVjdE5hbWUpO1xyXG4gICAgICBcclxuXHJcbiAgICBcclxuICAgICAgbmV3UHJvamVjdFVMLmFwcGVuZChsaXN0SXRlbSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBFeHBvcnQgbW9kYWwgZnVuY3Rpb25zXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBvcGVuTW9kYWwsXHJcbiAgICAgIGNsb3NlTW9kYWwsXHJcbiAgICAgIGFkZFByb2plY3RVSSxcclxuICAgIH07XHJcbiAgfSkoKTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBtb2RhbDtcclxuICBcclxuICIsImltcG9ydCBtb2RhbCBmcm9tIFwiLi9wcm9qZWN0RG9tLmpzXCJcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QuanNcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RNYW5hZ2Vye1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmFsbFByb2plY3RzQXJyID0gW11cclxuICAgICAgICB0aGlzLm5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCgpXHJcbiAgICAgICAgdGhpcy5kZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KDEsICdEZWZhdWx0JylcclxuICAgICAgICB0aGlzLmFsbFRhc2sgPSBbXVxyXG4gICAgfVxyXG4gICAgbmV3UHJvamVjdEZ1bmMoaWQsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMubmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGlkLCBuYW1lKVxyXG4gICAgICAgIHJldHVybiB0aGlzLm5ld1Byb2plY3RcclxuICAgIH1cclxuICAgIGFsbFByb2plY3RzKCl7XHJcbiAgICAgICAgdGhpcy5hbGxQcm9qZWN0c0Fyci5wdXNoKHRoaXMubmV3UHJvamVjdClcclxuICAgIH1cclxuICAgIGRpc3BsYXllcigpe1xyXG4gICAgICAgIGNvbnN0IGFyciA9dGhpcy5hbGxQcm9qZWN0c0FyclxyXG4gICAgICAgIGFyci5mb3JFYWNoKGl0ZW0gPT57XHJcbiAgICAgICAgICAgIG1vZGFsLmFkZFByb2plY3RVSShpdGVtKVxyXG4gICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImNvbnN0IHRhc2tTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrU3BhY2UnKTtcclxuY29uc3Qgc2V0dGluZ3NJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzSWNvbnMnKTtcclxuY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlck5hbWUnKTtcclxuXHJcblxyXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgYW5kIGV4cG9ydCB0aGUgc2V0dGluZ3MgcGFnZVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTZXR0aW5nc1BhZ2UodGFza1NwYWNlLCB1c2VyTmFtZSkge1xyXG4gICAgLy8gQ2xlYXIgZXhpc3RpbmcgY29udGVudCBpbiB0YXNrU3BhY2VcclxuICAgIHRhc2tTcGFjZS5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAvLyBTZXR0aW5ncyBQYWdlIEVsZW1lbnRzXHJcbiAgICBjb25zdCBzZXR0aW5nc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2V0dGluZ3NDb250YWluZXIuY2xhc3NOYW1lID0gJ3NldHRpbmdzLWNvbnRhaW5lcic7XHJcblxyXG4gICAgLy8gVXNlcm5hbWUgQ2hhbmdlIFNlY3Rpb25cclxuICAgIGNvbnN0IHVzZXJuYW1lU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdXNlcm5hbWVTZWN0aW9uLmNsYXNzTmFtZSA9ICdzZXR0aW5ncy1zZWN0aW9uJztcclxuXHJcbiAgICBjb25zdCB1c2VybmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIHVzZXJuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnQ2hhbmdlIFVzZXJuYW1lOiAnO1xyXG5cclxuICAgIGNvbnN0IHVzZXJuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdXNlcm5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgdXNlcm5hbWVJbnB1dC5pZCA9ICduZXdVc2VybmFtZUlucHV0JztcclxuICAgIHVzZXJuYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgbmV3IHVzZXJuYW1lLi4uJztcclxuXHJcbiAgICBjb25zdCB1c2VybmFtZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdXNlcm5hbWVCdXR0b24udGV4dENvbnRlbnQgPSAnQ2hhbmdlJztcclxuICAgIHVzZXJuYW1lQnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLXByaW1hcnknO1xyXG4gICAgdXNlcm5hbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3VXNlcm5hbWUgPSB1c2VybmFtZUlucHV0LnZhbHVlLnRyaW0oKTtcclxuICAgICAgICBpZiAobmV3VXNlcm5hbWUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gbmV3VXNlcm5hbWU7XHJcbiAgICAgICAgICAgIC8vIFlvdSBjYW4gc2F2ZSB0aGUgbmV3IHVzZXJuYW1lIHRvIGxvY2FsU3RvcmFnZSBvciBzZW5kIGl0IHRvIGEgc2VydmVyIGhlcmVcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzZXJuYW1lIGNoYW5nZWQgdG86JywgbmV3VXNlcm5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYSB2YWxpZCB1c2VybmFtZS4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VybmFtZVNlY3Rpb24uYXBwZW5kQ2hpbGQodXNlcm5hbWVMYWJlbCk7XHJcbiAgICB1c2VybmFtZVNlY3Rpb24uYXBwZW5kQ2hpbGQodXNlcm5hbWVJbnB1dCk7XHJcbiAgICB1c2VybmFtZVNlY3Rpb24uYXBwZW5kQ2hpbGQodXNlcm5hbWVCdXR0b24pO1xyXG5cclxuICAgIC8vIEJhY2tncm91bmQgQ29sb3IgQ2hhbmdlIFNlY3Rpb25cclxuICAgIGNvbnN0IGJnQ29sb3JTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBiZ0NvbG9yU2VjdGlvbi5jbGFzc05hbWUgPSAnc2V0dGluZ3Mtc2VjdGlvbic7XHJcblxyXG4gICAgY29uc3QgYmdDb2xvckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGJnQ29sb3JMYWJlbC50ZXh0Q29udGVudCA9ICdDaGFuZ2UgQmFja2dyb3VuZCBDb2xvcjogJztcclxuXHJcbiAgICBjb25zdCBiZ0NvbG9yU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICBiZ0NvbG9yU2VsZWN0LmlkID0gJ2JnQ29sb3JTZWxlY3QnO1xyXG4gICAgYmdDb2xvclNlbGVjdC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcclxuXHJcbiAgICBjb25zdCBjb2xvcnMgPSBbJ0RlZmF1bHQnLCAnQmx1ZScsICdHcmVlbicsICdZZWxsb3cnLCAnUmVkJ107IC8vIEV4YW1wbGUgY29sb3JzXHJcbiAgICBjb2xvcnMuZm9yRWFjaChjb2xvciA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29sb3I7XHJcbiAgICAgICAgYmdDb2xvclNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYmdDb2xvclNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDb2xvciA9IGJnQ29sb3JTZWxlY3QudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRDb2xvciA9PT0gJ2RlZmF1bHQnKSB7XHJcbiAgICAgICAgICAgIHRhc2tTcGFjZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJzsgLy8gUmVzZXQgdG8gZGVmYXVsdFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhc2tTcGFjZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzZWxlY3RlZENvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGJnQ29sb3JTZWN0aW9uLmFwcGVuZENoaWxkKGJnQ29sb3JMYWJlbCk7XHJcbiAgICBiZ0NvbG9yU2VjdGlvbi5hcHBlbmRDaGlsZChiZ0NvbG9yU2VsZWN0KTtcclxuXHJcbiAgICAvLyBBcHBlbmQgU2VjdGlvbnMgdG8gU2V0dGluZ3MgQ29udGFpbmVyXHJcbiAgICBzZXR0aW5nc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh1c2VybmFtZVNlY3Rpb24pO1xyXG4gICAgc2V0dGluZ3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYmdDb2xvclNlY3Rpb24pO1xyXG5cclxuICAgIC8vIEFwcGVuZCBTZXR0aW5ncyBDb250YWluZXIgdG8gdGFza1NwYWNlXHJcbiAgICB0YXNrU3BhY2UuYXBwZW5kQ2hpbGQoc2V0dGluZ3NDb250YWluZXIpO1xyXG59XHJcblxyXG4iLCIvLyBpbXBvcnQgJy4vY3NzL3Byb2plY3RET00uY3NzJztcclxuXHJcbmltcG9ydCB7IG5ld1Rhc2sgfSBmcm9tIFwiLi90b2RvLmpzXCI7XHJcbmltcG9ydCB0YXNrRE9NIGZyb20gXCIuL3RvZG9ET00uanNcIjtcclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhbmQgc2hvdyB0aGUgbmV3IHByb2plY3QgcG9wdXAgZm9ybVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdQcm9qZWN0UG9wVXBGb3JtKCkge1xyXG4gICAgLy8gQ3JlYXRlIGZvcm0gZWxlbWVudHNcclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXInKTtcclxuXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdwb3B1cC1mb3JtJyk7XHJcblxyXG4gICAgLy8gVGl0bGVcclxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZTonO1xyXG4gICAgdGl0bGVMYWJlbC5odG1sRm9yID0gJ3Byb2plY3RUaXRsZSc7XHJcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICAgIHRpdGxlSW5wdXQuaWQgPSAncHJvamVjdFRpdGxlJztcclxuICAgIHRpdGxlSW5wdXQubmFtZSA9ICd0aXRsZSc7XHJcbiAgICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBEZXNjcmlwdGlvblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOic7XHJcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmh0bWxGb3IgPSAncHJvamVjdERlc2NyaXB0aW9uJztcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9ICdwcm9qZWN0RGVzY3JpcHRpb24nO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gJ2Rlc2NyaXB0aW9uJztcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICAgIC8vIER1ZSBEYXRlXHJcbiAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOic7XHJcbiAgICBkdWVEYXRlTGFiZWwuaHRtbEZvciA9ICdwcm9qZWN0RHVlRGF0ZSc7XHJcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XHJcbiAgICBkdWVEYXRlSW5wdXQuaWQgPSAncHJvamVjdER1ZURhdGUnO1xyXG4gICAgZHVlRGF0ZUlucHV0Lm5hbWUgPSAnZHVlRGF0ZSc7XHJcbiAgICBkdWVEYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICAgIC8vIFByaW9yaXR5XHJcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcclxuICAgIHByaW9yaXR5TGFiZWwuaHRtbEZvciA9ICdwcm9qZWN0UHJpb3JpdHknO1xyXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgIHByaW9yaXR5U2VsZWN0LmlkID0gJ3Byb2plY3RQcmlvcml0eSc7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5uYW1lID0gJ3ByaW9yaXR5JztcclxuICAgIHByaW9yaXR5U2VsZWN0LnJlcXVpcmVkID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbnMgPSBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddO1xyXG4gICAgcHJpb3JpdHlPcHRpb25zLmZvckVhY2gob3B0aW9uVGV4dCA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uVGV4dC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvblRleHQ7XHJcbiAgICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFN1Ym1pdCBCdXR0b25cclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgc3VibWl0QnV0dG9uLnR5cGUgPSAnc3VibWl0JztcclxuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDcmVhdGUgUHJvamVjdCc7XHJcblxyXG4gICAgLy8gQXBwZW5kIGVsZW1lbnRzIHRvIGZvcm1cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcblxyXG4gICAgLy8gQXBwZW5kIGZvcm0gdG8gZm9ybSBjb250YWluZXJcclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG5cclxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBjbG9zZSB0aGUgZm9ybSBvbiBzdWJtaXRcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBIYW5kbGUgZm9ybSBzdWJtaXNzaW9uIGxvZ2ljIGhlcmVcclxuICAgICAgICBuZXdUYXNrKHRpdGxlSW5wdXQudmFsdWUsIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsIHByaW9yaXR5U2VsZWN0LnZhbHVlLCBkdWVEYXRlSW5wdXQudmFsdWUpXHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci5yZW1vdmUoKTsgXHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHJldHVybiBmb3JtXHJcbn1cclxuXHJcbiIsIi8vIEltcG9ydGluZyBQcm9qZWN0TWFuYWdlciBmcm9tIHByb2plY3RNYW5hZ2VyLmpzXHJcbmltcG9ydCB7IFByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4vcHJvamVjdE1hbmFnZXIuanNcIjtcclxuXHJcbi8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBQcm9qZWN0TWFuYWdlciBhbmQgZ2V0IHRoZSBkZWZhdWx0IHByb2plY3RcclxuY29uc3QgbmV3UHJvamVjdE1hbmFnZXIgPSBuZXcgUHJvamVjdE1hbmFnZXIoKTtcclxuY29uc3QgbmV3UHJvamVjdCA9IG5ld1Byb2plY3RNYW5hZ2VyLmRlZmF1bHRQcm9qZWN0O1xyXG5cclxuLy8gRGVmaW5lIGEgY2xhc3MgZm9yIHRhc2sgYXJyYXlzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tBcnJheSB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXllcihhcnIpIHtcclxuICBhcnIuZGlzcGxheWVyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXdUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICBjb25zdCB0aGVOZXdUYXNrID0gbmV3IFRhc2tBcnJheSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcclxuICBuZXdQcm9qZWN0LmFkZFRhc2tzKHRoZU5ld1Rhc2spO1xyXG4gIGRpc3BsYXllcihuZXdQcm9qZWN0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUZ1bmN0aW9uKHRoZUNhcmQpIHtcclxuICBjb25zdCBpbmRleEF0dHJpYnV0ZSA9IHBhcnNlSW50KHRoZUNhcmQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKSk7XHJcbiAgY29uc3QgY29uZmlybVRvUmVtb3ZlID0gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGlzIHRhc2s/Jyk7XHJcblxyXG4gIGlmIChjb25maXJtVG9SZW1vdmUpIHtcclxuICAgIG5ld1Byb2plY3QucHJvamVjdC5zcGxpY2UoaW5kZXhBdHRyaWJ1dGUsIDEpO1xyXG4gICAgZGlzcGxheWVyKG5ld1Byb2plY3QpO1xyXG4gICAgY29uc29sZS5sb2cobmV3UHJvamVjdCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRpc3BsYXllcihuZXdQcm9qZWN0KTtcclxuICAgIGNvbnNvbGUubG9nKG5ld1Byb2plY3QpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQ3JlYXRpbmcgbmV3IHRhc2tzXHJcbm5ld1Rhc2soJ1Rhc2sgMScsICdUaGlzIGlzIGEgZGVzY3JpcHRpb24gZm9yIHRhc2sgMScsICcyMDI0LTA3LTE1JywgJ0hpZ2gnKTtcclxubmV3VGFzaygnVGFzayAyJywgJ1RoaXMgaXMgYSBkZXNjcmlwdGlvbiBmb3IgdGFzayAyJywgJzIwMjQtMDctMjAnLCAnTWVkaXVtJyk7XHJcbiIsImltcG9ydCB7IGRlbGV0ZUZ1bmN0aW9uIH0gZnJvbSBcIi4vdG9kby5qc1wiO1xyXG5cclxuY29uc3QgdGFza1NwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tTcGFjZScpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFza0RPTSh0aXRsZVRleHQsIGRlc2NyaXB0aW9uVGV4dCwgcHJpb3JpdHlUZXh0LCBkdWVEYXRlVGV4dCwgaW5kZXgpIHtcclxuICAvLyBDcmVhdGUgdGFzayBjYXJkIGVsZW1lbnRzXHJcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhcmQuY2xhc3NOYW1lID0gJ2NhcmQgdGFzay1jYXJkJztcclxuICBjYXJkLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KVxyXG5cclxuICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICByb3cuY2xhc3NOYW1lID0gJ3JvdyBuby1ndXR0ZXJzJztcclxuXHJcbiAgY29uc3QgY29sSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbEljb24uY2xhc3NOYW1lID0gJ2NvbC1tZC0yIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBiZy1wcmltYXJ5IHRleHQtd2hpdGUgcG9zaXRpb24tcmVsYXRpdmUnO1xyXG5cclxuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGljb24uY2xhc3NOYW1lID0gJ2ZhcyBmYS10YXNrcyBmYS0yeCc7XHJcblxyXG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcclxuICBjaGVja2JveC5jbGFzc05hbWUgPSAnYmlnLWNoZWNrYm94JztcclxuICBjaGVja2JveC5hcmlhTGFiZWwgPSAnVGFzayBDb21wbGV0ZSc7XHJcblxyXG4gIGNvbnN0IGNvbEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb2xCb2R5LmNsYXNzTmFtZSA9ICdjb2wtbWQtMTAnO1xyXG5cclxuICBjb25zdCBjYXJkQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhcmRCb2R5LmNsYXNzTmFtZSA9ICdjYXJkLWJvZHknO1xyXG5cclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgdGl0bGUuY2xhc3NOYW1lID0gJ2NhcmQtdGl0bGUnO1xyXG4gIHRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVUZXh0O1xyXG5cclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBkZXNjcmlwdGlvbi5jbGFzc05hbWUgPSAnY2FyZC10ZXh0IGRlc2NyaXB0aW9uJztcclxuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uVGV4dDtcclxuXHJcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgcHJpb3JpdHkuY2xhc3NOYW1lID0gJ2NhcmQtdGV4dCBwcmlvcml0eSc7XHJcbiAgcHJpb3JpdHkuaW5uZXJIVE1MID0gYDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj48aSBjbGFzcz1cImZhcyBmYS1mbGFnXCI+PC9pPiBQcmlvcml0eTogJHtwcmlvcml0eVRleHR9PC9zbWFsbD5gO1xyXG5cclxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGR1ZURhdGUuY2xhc3NOYW1lID0gJ2NhcmQtdGV4dCc7XHJcbiAgZHVlRGF0ZS5pbm5lckhUTUwgPSBgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPjxpIGNsYXNzPVwiZmFzIGZhLWNhbGVuZGFyLWRheVwiPjwvaT4gRHVlIERhdGU6IDxzcGFuIGlkPVwiZHVlRGF0ZVwiPiR7ZHVlRGF0ZVRleHR9PC9zcGFuPjwvc21hbGw+YDtcclxuXHJcbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyJztcclxuXHJcbiAgY29uc3QgYnV0dG9uR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGVkaXRCdXR0b24uY2xhc3NOYW1lID0gJ2J0biBidG4td2FybmluZyBidG4tc20gbS0yJztcclxuICBlZGl0QnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPiBFZGl0JztcclxuXHJcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLWRhbmdlciBidG4tc20nO1xyXG4gIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtdHJhc2hcIj48L2k+IERlbGV0ZSc7XHJcblxyXG4gIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2hlY2tib3hDb250YWluZXIuY2xhc3NOYW1lID0gJ2Zvcm0tY2hlY2snO1xyXG4gIGNoZWNrYm94Q29udGFpbmVyLmlkID0gJ2RpdkZvckNoZWNrQm94JztcclxuXHJcbiAgY29uc3QgdGFza0NvbXBsZXRlZENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICB0YXNrQ29tcGxldGVkQ2hlY2tib3guY2xhc3NOYW1lID0gJ2Zvcm0tY2hlY2staW5wdXQnO1xyXG4gIHRhc2tDb21wbGV0ZWRDaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcclxuICB0YXNrQ29tcGxldGVkQ2hlY2tib3guaWQgPSAndGFza0NvbXBsZXRlZCc7XHJcblxyXG4gIGNvbnN0IHRhc2tDb21wbGV0ZWRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgdGFza0NvbXBsZXRlZExhYmVsLmNsYXNzTmFtZSA9ICdmb3JtLWNoZWNrLWxhYmVsJztcclxuICB0YXNrQ29tcGxldGVkTGFiZWwuaHRtbEZvciA9ICd0YXNrQ29tcGxldGVkJztcclxuICB0YXNrQ29tcGxldGVkTGFiZWwudGV4dENvbnRlbnQgPSAnQ29tcGxldGVkJztcclxuXHJcbiAgLy8gQXBwZW5kIGVsZW1lbnRzXHJcbiAgY29sSWNvbi5hcHBlbmRDaGlsZChpY29uKTtcclxuICBjb2xJY29uLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuXHJcbiAgYnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XHJcbiAgYnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuXHJcbiAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbXBsZXRlZENoZWNrYm94KTtcclxuICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29tcGxldGVkTGFiZWwpO1xyXG5cclxuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uR3JvdXApO1xyXG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcik7XHJcblxyXG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICBjYXJkQm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xyXG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xyXG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XHJcblxyXG4gIGNvbEJvZHkuYXBwZW5kQ2hpbGQoY2FyZEJvZHkpO1xyXG5cclxuICByb3cuYXBwZW5kQ2hpbGQoY29sSWNvbik7XHJcbiAgcm93LmFwcGVuZENoaWxkKGNvbEJvZHkpO1xyXG5cclxuICBjYXJkLmFwcGVuZENoaWxkKHJvdyk7XHJcblxyXG4gIC8vIEFwcGVuZCBjYXJkIHRvIGNvbnRhaW5lclxyXG4gIHRhc2tTcGFjZS5hcHBlbmRDaGlsZChjYXJkKTtcclxuXHJcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGRlbGV0ZUZ1bmN0aW9uKGNhcmQpXHJcbiAgfSlcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IHRhc2tTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrU3BhY2UnKVxyXG5cclxuLy8gaW1wb3J0IHsgUHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlci5qc1wiO1xyXG5pbXBvcnQgbW9kYWwgZnJvbSBcIi4vcHJvamVjdERvbS5qc1wiO1xyXG5cclxuaW1wb3J0IHRvZG9GdW5jdGlvbnMgZnJvbSBcIi4vZnVuY3Rpb25zLmpzXCI7XHJcblxyXG50b2RvRnVuY3Rpb25zKHRhc2tTcGFjZSlcclxuXHJcblxyXG5jb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZU5ld1Byb2plY3QnKVxyXG5cclxuY3JlYXRlTmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICBtb2RhbC5vcGVuTW9kYWwoKVxyXG5cclxuICAgXHJcbn0pXHJcblxyXG4iXSwibmFtZXMiOlsibmV3UHJvamVjdFBvcFVwRm9ybSIsImNyZWF0ZVNldHRpbmdzUGFnZSIsInRvZG9GdW5jdGlvbnMiLCJ0aGVEaXYiLCJzZXR0aW5nc0ljb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidXNlck5hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwidGFza0RPTSIsInRhc2tTcGFjZSIsIlByb2plY3QiLCJpZCIsIm5hbWUiLCJfY2xhc3NDYWxsQ2hlY2siLCJwcm9qZWN0IiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJhZGRUYXNrcyIsImFyciIsInB1c2giLCJkaXNwbGF5ZXIiLCJhcnJheSIsImlubmVySFRNTCIsImZvckVhY2giLCJhcnJJdGVtIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcmlvcml0eSIsImFwcGVuZCIsImNvbnNvbGUiLCJsb2ciLCJkZWxldGVGdW5jdGlvbiIsImluZGV4QXR0cmlidXRlIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJzcGxpY2UiLCJuZXdQcm9qZWN0VUwiLCJtb2RhbCIsIm1vZGFsQ29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1vZGFsQ29udGVudCIsIm1vZGFsSGVhZGVyIiwibW9kYWxUaXRsZSIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJjbG9zZUJ1dHRvbiIsIm1vZGFsQm9keSIsIm5hbWVMYWJlbCIsIm5hbWVJbnB1dCIsInR5cGUiLCJjb2xvckxhYmVsIiwiY29sb3JTZWxlY3QiLCJjb2xvck9wdGlvbnMiLCJvcHRpb24iLCJvcHRpb25FbGVtZW50Iiwic2F2ZUJ1dHRvbiIsInN0eWxlIiwiZGlzcGxheSIsInByb2plY3ROYW1lIiwicHJvamVjdENvbG9yIiwiY29uY2F0IiwiY2xvc2VNb2RhbCIsImFkZFByb2plY3RVSSIsIm9wZW5Nb2RhbCIsImluZGV4IiwibGlzdEl0ZW0iLCJzZXRBdHRyaWJ1dGUiLCJpY29uIiwiUHJvamVjdE1hbmFnZXIiLCJhbGxQcm9qZWN0c0FyciIsIm5ld1Byb2plY3QiLCJkZWZhdWx0UHJvamVjdCIsImFsbFRhc2siLCJuZXdQcm9qZWN0RnVuYyIsImFsbFByb2plY3RzIiwiaXRlbSIsInNldHRpbmdzQ29udGFpbmVyIiwidXNlcm5hbWVTZWN0aW9uIiwidXNlcm5hbWVMYWJlbCIsInVzZXJuYW1lSW5wdXQiLCJwbGFjZWhvbGRlciIsInVzZXJuYW1lQnV0dG9uIiwibmV3VXNlcm5hbWUiLCJ0cmltIiwiYWxlcnQiLCJiZ0NvbG9yU2VjdGlvbiIsImJnQ29sb3JMYWJlbCIsImJnQ29sb3JTZWxlY3QiLCJjb2xvcnMiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJ0b0xvd2VyQ2FzZSIsImJhY2tncm91bmRDb2xvciIsIm5ld1Rhc2siLCJmb3JtQ29udGFpbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiZm9ybSIsInRpdGxlTGFiZWwiLCJodG1sRm9yIiwidGl0bGVJbnB1dCIsInJlcXVpcmVkIiwiZGVzY3JpcHRpb25MYWJlbCIsImRlc2NyaXB0aW9uSW5wdXQiLCJkdWVEYXRlTGFiZWwiLCJkdWVEYXRlSW5wdXQiLCJwcmlvcml0eUxhYmVsIiwicHJpb3JpdHlTZWxlY3QiLCJwcmlvcml0eU9wdGlvbnMiLCJvcHRpb25UZXh0Iiwic3VibWl0QnV0dG9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlbW92ZSIsIm5ld1Byb2plY3RNYW5hZ2VyIiwiVGFza0FycmF5IiwiZGVmYXVsdCIsInRoZU5ld1Rhc2siLCJ0aGVDYXJkIiwiY29uZmlybVRvUmVtb3ZlIiwiY29uZmlybSIsInRpdGxlVGV4dCIsImRlc2NyaXB0aW9uVGV4dCIsInByaW9yaXR5VGV4dCIsImR1ZURhdGVUZXh0IiwiY2FyZCIsInJvdyIsImNvbEljb24iLCJjaGVja2JveCIsImFyaWFMYWJlbCIsImNvbEJvZHkiLCJjYXJkQm9keSIsImJ1dHRvbkNvbnRhaW5lciIsImJ1dHRvbkdyb3VwIiwiZWRpdEJ1dHRvbiIsImRlbGV0ZUJ1dHRvbiIsImNoZWNrYm94Q29udGFpbmVyIiwidGFza0NvbXBsZXRlZENoZWNrYm94IiwidGFza0NvbXBsZXRlZExhYmVsIiwiY3JlYXRlTmV3UHJvamVjdCJdLCJzb3VyY2VSb290IjoiIn0=