/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/taskForm.js":
/*!*************************!*\
  !*** ./src/taskForm.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newProjectPopUpForm)
/* harmony export */ });
function newProjectPopUpForm(selectArray) {
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/project.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcHJvamVjdERvbS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wcm9qZWN0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90YXNrRm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3RvZG9ET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGxvYWRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FycicpO1xyXG4gICAgcmV0dXJuIGRhdGEgPyBKU09OLnBhcnNlKGRhdGEpIDogW107XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBmdW5jdGlvbiBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZShwcm9qZWN0cykge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FycicsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XHJcbiAgfVxyXG4gICIsImltcG9ydCB0YXNrRE9NIGZyb20gXCIuL3RvZG9ET00uanNcIjtcclxuaW1wb3J0IG5ld1Byb2plY3RQb3BVcEZvcm0gZnJvbSBcIi4vdGFza0Zvcm0uanNcIjtcclxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdG9kby5qc1wiO1xyXG5cclxuY29uc3QgdGFza1NwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tTcGFjZScpXHJcbmNvbnN0IHNwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwYWNlJylcclxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBjb2xvcikge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMucHJvamVjdCA9IFtdO1xyXG4gIH1cclxuXHJcbiAgbmV3VGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICBjb25zdCB0aGVOZXdUYXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XHJcbiAgICB0aGlzLnByb2plY3QucHVzaCh0aGVOZXdUYXNrKTtcclxuICAgIHRoaXMuZGlzcGxheWVyKHRoaXMucHJvamVjdCk7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrcyh0YXNrKSB7XHJcbiAgICB0aGlzLnByb2plY3QucHVzaCh0YXNrKVxyXG4gIH1cclxuXHJcbiAgZGlzcGxheWVyKGFycmF5KSB7XHJcbiAgICB0YXNrU3BhY2UuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIHRpdGxlLmlubmVyVGV4dCA9IGFycmF5Lm5hbWVcclxuICAgIGFycmF5LmZvckVhY2goYXJySXRlbSA9PiB7XHJcbiAgICAgIHRhc2tET00oYXJySXRlbS50aXRsZSwgYXJySXRlbS5kZXNjcmlwdGlvbiwgYXJySXRlbS5kdWVEYXRlLCBhcnJJdGVtLnByaW9yaXR5KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kb20oYXJyYXkubmFtZSlcclxuICAgIHJldHVybiBhcnJheTtcclxuICB9XHJcblxyXG4gIGRvbShwcm9qZWN0TmFtZSkge1xyXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYWRkVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XHJcbiAgICBhZGRUYXNrQnV0dG9uLmlkID0gJ2FkZFRhc2tCdXR0b24nXHJcbiAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLXByaW1hcnknO1xyXG4gICAgYWRkVGFza0J1dHRvbi5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgIHRpdGxlLmlubmVyVGV4dCA9IHByb2plY3ROYW1lXHJcbiAgICBzcGFjZS5hcHBlbmQoYWRkVGFza0J1dHRvbik7XHJcbiAgfVxyXG5cclxuICBcclxufVxyXG4iLCJjb25zdCB0YXNrU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1NwYWNlJylcclxuY29uc3Qgc3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BhY2UnKVxyXG5cclxuXHJcbmNvbnN0IG1vZGFsID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gTW9kYWwgY29udGFpbmVyXHJcbiAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9kYWxDb250YWluZXIuY2xhc3NOYW1lID0gJ21vZGFsJztcclxuICBcclxuICAgIC8vIE1vZGFsIGNvbnRlbnRcclxuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9kYWxDb250ZW50LmNsYXNzTmFtZSA9ICdtb2RhbC1jb250ZW50JztcclxuICBcclxuICAgIC8vIE1vZGFsIGhlYWRlclxyXG4gICAgY29uc3QgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsSGVhZGVyLmNsYXNzTmFtZSA9ICdtb2RhbC1oZWFkZXInO1xyXG4gICAgY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBtb2RhbFRpdGxlLnRleHRDb250ZW50ID0gJ05ldyBQcm9qZWN0JztcclxuICAgIG1vZGFsSGVhZGVyLmFwcGVuZENoaWxkKG1vZGFsVGl0bGUpO1xyXG4gIFxyXG4gICAgLy8gQ2xvc2UgYnV0dG9uXHJcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNsb3NlQnV0dG9uLmNsYXNzTmFtZSA9ICdjbG9zZSc7XHJcbiAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9ICfDlyc7XHJcbiAgICBtb2RhbEhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XHJcbiAgXHJcbiAgICAvLyBNb2RhbCBib2R5XHJcbiAgICBjb25zdCBtb2RhbEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsQm9keS5jbGFzc05hbWUgPSAnbW9kYWwtYm9keSc7XHJcbiAgXHJcbiAgICAvLyBQcm9qZWN0IE5hbWUgaW5wdXRcclxuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnUHJvamVjdCBOYW1lOic7XHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICBuYW1lSW5wdXQuaWQgPSAncHJvamVjdE5hbWUnO1xyXG4gICAgbmFtZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xyXG4gICAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XHJcbiAgICBtb2RhbEJvZHkuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcclxuICBcclxuICAgIC8vIE9wdGlvbmFsIENvbG9yIFNlbGVjdG9yIChleGFtcGxlKVxyXG4gICAgY29uc3QgY29sb3JMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb2xvckxhYmVsLnRleHRDb250ZW50ID0gJ0NvbG9yOic7XHJcbiAgICBjb25zdCBjb2xvclNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgY29sb3JTZWxlY3QuaWQgPSAncHJvamVjdENvbG9yJztcclxuICAgIGNvbG9yU2VsZWN0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xyXG4gICAgY29uc3QgY29sb3JPcHRpb25zID0gWydOb25lJywgJ1JlZCcsICdHcmVlbicsICdCbHVlJ107XHJcbiAgICBjb2xvck9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBvcHRpb247XHJcbiAgICAgIGNvbG9yU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgICBtb2RhbEJvZHkuYXBwZW5kQ2hpbGQoY29sb3JMYWJlbCk7XHJcbiAgICBtb2RhbEJvZHkuYXBwZW5kQ2hpbGQoY29sb3JTZWxlY3QpO1xyXG4gIFxyXG4gICAgLy8gU2F2ZSBidXR0b25cclxuICAgIGNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHNhdmVCdXR0b24uY2xhc3NOYW1lID0gJ2J0biBidG4tcHJpbWFyeSc7XHJcbiAgICBzYXZlQnV0dG9uLmlkID0gJ3NhdmVCdG5OZXdQcm9qZWN0J1xyXG4gICAgc2F2ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDcmVhdGUgRm9sZGVyJztcclxuICAgIG1vZGFsQm9keS5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcclxuICBcclxuICAgIC8vIEFwcGVuZCBhbGwgcGFydHMgdG8gbW9kYWwgY29udGVudFxyXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsSGVhZGVyKTtcclxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbEJvZHkpO1xyXG4gICAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcclxuICBcclxuICAgIC8vIEV2ZW50IGxpc3RlbmVyIGZvciBjbG9zZSBidXR0b25cclxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IG5hbWVJbnB1dC52YWx1ZTtcclxuICAgICAgY29uc3QgcHJvamVjdENvbG9yID0gY29sb3JTZWxlY3QudmFsdWU7XHJcbiAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgXHJcbiAgXHJcbiAgICB9KTtcclxuICBcclxuICAgIC8vIEZ1bmN0aW9uIHRvIGNsb3NlIHRoZSBtb2RhbFxyXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcclxuICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuICBcclxuICAgIC8vIEZ1bmN0aW9uIHRvIG9wZW4gdGhlIG1vZGFsXHJcbiAgICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XHJcbiAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBzcGFjZS5hcHBlbmQobW9kYWxDb250YWluZXIpXHJcbiAgICB9XHJcbiAgXHJcblxyXG4gICAgLy8gRXhwb3J0IG1vZGFsIGZ1bmN0aW9uc1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgb3Blbk1vZGFsLFxyXG4gICAgICBjbG9zZU1vZGFsLFxyXG4gICAgICBzYXZlQnV0dG9uLFxyXG4gICAgICBuYW1lSW5wdXQsXHJcbiAgICAgIGNvbG9yU2VsZWN0LFxyXG4gICAgfTtcclxuICB9KSgpO1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IG1vZGFsO1xyXG4gIFxyXG4gIiwiY29uc3QgdGFza1NwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tTcGFjZScpXHJcbmNvbnN0IHNwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwYWNlJylcclxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKVxyXG5cclxuXHJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIlxyXG5pbXBvcnQgbW9kYWwgZnJvbSBcIi4vcHJvamVjdERvbS5qc1wiXHJcbmltcG9ydCB7IGxvYWRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UsIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UuanMnXHJcbmltcG9ydCBuZXdQcm9qZWN0UG9wVXBGb3JtIGZyb20gXCIuL3Rhc2tGb3JtLmpzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RNYW5hZ2Vye1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLm5ld1Byb2plY3QgPSBbXVxyXG4gICAgdGhpcy5hbGxQcm9qZWN0Rm9sZGVyID0gW11cclxuICAgIHRoaXMubG9hZFByb2plY3RzKCk7XHJcbiAgICB0aGlzLmFsbFRhc2sgPSBbXVxyXG5cclxuICAgIGlmICh0aGlzLmFsbFByb2plY3RGb2xkZXIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMuYWRkTmV3UHJvamVjdCgxLCAnRGVmYXVsdCcsICd3aGl0ZScpLm5ld1Rhc2soJ1Rhc2sgMicsICdUaGlzIGlzIGEgZGVzY3JpcHRpb24gZm9yIHRhc2sgMicsICcyMDI0LTA3LTIwJywgJ01lZGl1bScpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2codGhpcy5hbGxQcm9qZWN0Rm9sZGVyKVxyXG4gIH1cclxuICBcclxuICBsb2FkUHJvamVjdHMoKSB7XHJcbiAgICB0aGlzLmFsbFByb2plY3RGb2xkZXIgPSBsb2FkUHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCk7XHJcbiAgfVxyXG5cclxuICBzYXZlUHJvamVjdHMoKSB7XHJcbiAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSh0aGlzLmFsbFByb2plY3RGb2xkZXIpO1xyXG4gIH1cclxuXHJcblxyXG4gIGFkZE5ld1Byb2plY3QoaWQsIG5hbWUsIGNvbG9yKSB7XHJcbiAgICB0aGlzLm5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChpZCwgbmFtZSwgY29sb3IpO1xyXG4gICAgdGhpcy5hbGxQcm9qZWN0Rm9sZGVyLnB1c2godGhpcy5uZXdQcm9qZWN0KTtcclxuICAgIHRoaXMuc2F2ZVByb2plY3RzKCk7XHJcbiAgICByZXR1cm4gdGhpcy5uZXdQcm9qZWN0O1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheWVyKCkgeyAgXHJcbiAgICB0aGlzLmRvbUNyZWF0b3IoKVxyXG4gIH1cclxuXHJcbiAgZGVsZXRlUHJvamVjdChpbmRleCkge1xyXG4gICAgdGhpcy5hbGxQcm9qZWN0Rm9sZGVyLnNwbGljZShpbmRleCwgMSk7ICAgIFxyXG4gICAgdGhpcy5zYXZlUHJvamVjdHMoKTtcclxuICAgIHRoaXMuZGlzcGxheWVyKCk7IFxyXG4gIH1cclxuICBcclxuICBcclxuICBkb21DcmVhdG9yKCl7XHJcbiAgICB0aGlzLnByb2plY3RQYWdlYW5kU2lkZUJhckRPTSh0aGlzLmFsbFByb2plY3RGb2xkZXIpO1xyXG4gICAgdGhpcy5zYXZlQnV0dG9uKHRoaXMuYWxsUHJvamVjdEZvbGRlcik7XHJcbiAgfVxyXG5cclxuICBzYXZlQnV0dG9uKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHNhdmVCdG5OZXdQcm9qZWN0ID0gbW9kYWwuc2F2ZUJ1dHRvbjtcclxuICAgIHNhdmVCdG5OZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBuYW1lID0gbW9kYWwubmFtZUlucHV0LnZhbHVlO1xyXG4gICAgICBjb25zdCBjb2xvciA9IG1vZGFsLmNvbG9yU2VsZWN0LnZhbHVlO1xyXG4gICAgICBjb25zdCBpZCA9IHRoaXMuYWxsUHJvamVjdEZvbGRlci5sZW5ndGggKyAxO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5hZGROZXdQcm9qZWN0KGlkLCBuYW1lLCBjb2xvcik7XHJcbiAgICAgIHRoaXMucHJvamVjdFBhZ2VhbmRTaWRlQmFyRE9NKHByb2plY3QpXHJcbiAgICAgIG1vZGFsLmNsb3NlTW9kYWwoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgICBnZXRTZWxlY3RlZFByb2plY3RBcnJheShhcnJheSl7XHJcbiAgICAgIGxldCBzZWxlY3RBcnJheSA9IGFycmF5XHJcbiAgICAgIGNvbnNvbGUubG9nKHNlbGVjdEFycmF5KVxyXG4gICAgICB0aGlzLnJlZnJlc2hlcigpXHJcbiAgICAgIFByb2plY3QucHJvdG90eXBlLmRpc3BsYXllcihzZWxlY3RBcnJheSk7XHJcbiAgICAgIHRhc2tTcGFjZS5hcHBlbmQobmV3UHJvamVjdFBvcFVwRm9ybShzZWxlY3RBcnJheSkuZm9ybSlcclxuICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gc2VsZWN0QXJyYXkubmFtZVxyXG4gICAgICB0aGlzLnNhdmVQcm9qZWN0cygpXHJcbiAgICAgIHJldHVybiBzZWxlY3RBcnJheVxyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hlcigpe1xyXG4gICAgICB0YXNrU3BhY2UuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgICB0aGlzLmRpc3BsYXllcigpXHJcbiAgICB9XHJcbiAgICAvL0RPTVxyXG4gIHByb2plY3RQYWdlYW5kU2lkZUJhckRPTShwcm9qZWN0cykge1xyXG4gICAgY29uc3QgbmV3UHJvamVjdFVMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3RVTCcpO1xyXG4gICAgbmV3UHJvamVjdFVMLmlubmVySFRNTCA9IFwiXCJcclxuICAgIHNwYWNlLmlubmVySFRNTCA9IFwiXCJcclxuXHJcbiAgIFxyXG4gICAgIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHRoZSB0aXRsZVxyXG4gICAgIHRpdGxlLmlubmVyVGV4dCA9ICdNeSBUb2RvcyBQcm9qZWN0c3Nzc3Nzc3Nzc3NzJztcclxuIFxyXG4gICAgIFxyXG4gIFxyXG4gICBcclxuICAgICAvLyBDcmVhdGUgYW5kIGFwcGVuZCB0aGUgbGlzdCBjb250YWluZXJcclxuICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgcHJvamVjdExpc3Quc3R5bGUubGlzdFN0eWxlVHlwZSA9ICdub25lJztcclxuICAgICBwcm9qZWN0TGlzdC5zdHlsZS5wYWRkaW5nID0gJzAnO1xyXG4gIFxyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGxpc3RJdGVtLmNsYXNzTmFtZSA9ICdsaXN0LWdyb3VwLWl0ZW0nO1xyXG4gICAgbGlzdEl0ZW0uaWQgPSAncHJvamVjdEZvbGRlcic7XHJcbiAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XHJcblxyXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIGljb24uY2xhc3NOYW1lID0gJ2ZhLXNvbGlkIGZhLWhhc2h0YWcnO1xyXG4gICAgaWNvbi5zdHlsZS5jb2xvciA9IHByb2plY3QuY29sb3JcclxuICAgIGljb24uc3R5bGUuZm9udFdlaWdodCA9ICcxMDAnXHJcbiAgICBsaXN0SXRlbS5hcHBlbmQoaWNvbik7XHJcbiAgICBsaXN0SXRlbS5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocHJvamVjdC5uYW1lKSk7XHJcblxyXG4gICAgbGlzdEl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ1doaXRlJ1xyXG4gICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGxldCBnZXRQcm9qZWN0QXJyYXkgPSBwcm9qZWN0LnByb2plY3Q7XHJcbiAgICAgIHRoaXMuZ2V0U2VsZWN0ZWRQcm9qZWN0QXJyYXkoZ2V0UHJvamVjdEFycmF5KTtcclxuICAgICAgXHJcbiAgICB9KVxyXG5cclxuICAgICAgY29uc3QgbGlzdEl0ZW1UYXNrU3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICBsaXN0SXRlbVRhc2tTcGFjZS5jbGFzc05hbWUgPSAncHJvamVjdC1pdGVtJztcclxuICAgICAgbGlzdEl0ZW1UYXNrU3BhY2Uuc3R5bGUucGFkZGluZyA9ICcxMHB4JztcclxuICAgICAgbGlzdEl0ZW1UYXNrU3BhY2Uuc3R5bGUuYm9yZGVyQm90dG9tID0gJzFweCBzb2xpZCAjY2NjJztcclxuICAgICAgbGlzdEl0ZW1UYXNrU3BhY2UuaW5uZXJUZXh0ID0gcHJvamVjdC5uYW1lO1xyXG4gICAgICBsaXN0SXRlbVRhc2tTcGFjZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgICAgZGVsZXRlSWNvbi5jbGFzc05hbWUgPSAnZmEtc29saWQgZmEtdHJhc2gnO1xyXG4gICAgICAgIGRlbGV0ZUljb24uaWQgPSAnZGVsZXRlSWNvbic7XHJcbiAgICAgICAgZGVsZXRlSWNvbi5zdHlsZS5mbG9hdCA9ICdyaWdodCc7XHJcbiAgICAgICAgZGVsZXRlSWNvbi5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcblxyXG4gICAgICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygpXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGlzdEl0ZW1UYXNrU3BhY2UuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XHJcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW1UYXNrU3BhY2UpO1xyXG5cclxuICAgICAgICBsaXN0SXRlbVRhc2tTcGFjZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgIGxldCBnZXRQcm9qZWN0QXJyYXkgPSBwcm9qZWN0LnByb2plY3Q7XHJcbiAgICAgICAgICB0aGlzLmdldFNlbGVjdGVkUHJvamVjdEFycmF5KGdldFByb2plY3RBcnJheSk7XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQobGlzdEl0ZW1UYXNrU3BhY2UuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKSk7XHJcbiAgICAgIHRoaXMuZGVsZXRlUHJvamVjdChpbmRleClcclxuICAgICAgdGhpcy5zYXZlUHJvamVjdHMoKVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHNwYWNlLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KTtcclxuICAgXHJcbiAgICAvLyB0YXNrU3BhY2UuYXBwZW5kQ2hpbGQoaG9tZVBhZ2UpO1xyXG4gICAgbmV3UHJvamVjdFVMLmFwcGVuZChsaXN0SXRlbSk7XHJcblxyXG4gICAgfSlcclxuXHJcbiAgIH1cclxuXHJcbiBcclxufVxyXG4iLCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3UHJvamVjdFBvcFVwRm9ybShzZWxlY3RBcnJheSkge1xyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBmb3JtLmlkID0gJ25ld1Rhc2tGb3JtJztcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgncG9wdXAtZm9ybScsICduZWVkcy12YWxpZGF0aW9uJyk7XHJcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnbm92YWxpZGF0ZScsICcnKTtcclxuICAgIFxyXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlOic7XHJcbiAgICB0aXRsZUxhYmVsLmNsYXNzTmFtZSA9ICdmb3JtLWxhYmVsJztcclxuICAgIHRpdGxlTGFiZWwuaHRtbEZvciA9ICdwcm9qZWN0VGl0bGUnO1xyXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICB0aXRsZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xyXG4gICAgdGl0bGVJbnB1dC5pZCA9ICdwcm9qZWN0VGl0bGUnO1xyXG4gICAgdGl0bGVJbnB1dC5uYW1lID0gJ3RpdGxlJztcclxuICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgdGl0bGVJbnB1dC5zdHlsZS5oZWlnaHQgPSAnNTBweCdcclxuICAgIFxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOic7XHJcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmNsYXNzTmFtZSA9ICdmb3JtLWxhYmVsJztcclxuICAgIGRlc2NyaXB0aW9uTGFiZWwuaHRtbEZvciA9ICdwcm9qZWN0RGVzY3JpcHRpb24nO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9ICdwcm9qZWN0RGVzY3JpcHRpb24nO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gJ2Rlc2NyaXB0aW9uJztcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgXHJcbiAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOic7XHJcbiAgICBkdWVEYXRlTGFiZWwuY2xhc3NOYW1lID0gJ2Zvcm0tbGFiZWwnO1xyXG4gICAgZHVlRGF0ZUxhYmVsLmh0bWxGb3IgPSAncHJvamVjdER1ZURhdGUnO1xyXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGR1ZURhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xyXG4gICAgZHVlRGF0ZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xyXG4gICAgZHVlRGF0ZUlucHV0LmlkID0gJ3Byb2plY3REdWVEYXRlJztcclxuICAgIGR1ZURhdGVJbnB1dC5uYW1lID0gJ2R1ZURhdGUnO1xyXG4gICAgZHVlRGF0ZUlucHV0LnN0eWxlLmhlaWdodCA9ICc1MHB4J1xyXG4gICAgXHJcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcclxuICAgIHByaW9yaXR5TGFiZWwuY2xhc3NOYW1lID0gJ2Zvcm0tbGFiZWwnO1xyXG4gICAgcHJpb3JpdHlMYWJlbC5odG1sRm9yID0gJ3Byb2plY3RQcmlvcml0eSc7XHJcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuY2xhc3NOYW1lID0gJ2Zvcm0tc2VsZWN0JztcclxuICAgIHByaW9yaXR5U2VsZWN0LmlkID0gJ3Byb2plY3RQcmlvcml0eSc7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5uYW1lID0gJ3ByaW9yaXR5JztcclxuICAgIHByaW9yaXR5U2VsZWN0LnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgIHByaW9yaXR5U2VsZWN0LnN0eWxlLmhlaWdodCA9ICc1MHB4J1xyXG4gICAgXHJcbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbnMgPSBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddO1xyXG4gICAgcHJpb3JpdHlPcHRpb25zLmZvckVhY2gob3B0aW9uVGV4dCA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25UZXh0LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvblRleHQ7XHJcbiAgICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xyXG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBQcm9qZWN0JztcclxuICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi1zdWNjZXNzIG10LTMnO1xyXG4gICAgXHJcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XHJcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICAgIGNhbmNlbEJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi1kYW5nZXIgbXQtMyBtcy0yJztcclxuICAgIFxyXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XHJcblxyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xyXG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XHJcbiAgICAgIGNvbnN0IGR1ZURhdGUgPSBkdWVEYXRlSW5wdXQudmFsdWU7XHJcbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gcHJpb3JpdHlTZWxlY3QudmFsdWU7XHJcblxyXG4gICAgICBjb25zdCB0aGVOZXdUYXNrID0ge1xyXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXHJcbiAgICAgICAgZHVlRGF0ZTogZHVlRGF0ZSxcclxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHlcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHNlbGVjdEFycmF5LnB1c2godGhlTmV3VGFzayk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNlbGVjdEFycmF5KTtcclxuICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAvLyBIaWRlIHRoZSBmb3JtIGFmdGVyIHN1Ym1pc3Npb25cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBmb3JtQ29udGFpbmVyO1xyXG59XHJcbiIsIi8vIEltcG9ydGluZyBQcm9qZWN0TWFuYWdlciBmcm9tIHByb2plY3RNYW5hZ2VyLmpzXHJcbmltcG9ydCBQcm9qZWN0TWFuYWdlciAgZnJvbSBcIi4vcHJvamVjdE1hbmFnZXIuanNcIjtcclxuXHJcbi8vIC8vIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBQcm9qZWN0TWFuYWdlciBhbmQgZ2V0IHRoZSBkZWZhdWx0IHByb2plY3RcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNre1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5cclxuXHJcbiIsIi8vIGltcG9ydCB7IGRlbGV0ZUZ1bmN0aW9uIH0gZnJvbSBcIi4vdG9kby5qc1wiO1xyXG5cclxuXHJcbmNvbnN0IHRhc2tTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrU3BhY2UnKVxyXG5jb25zdCBzcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGFjZScpXHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJylcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrRE9NKHRpdGxlVGV4dCwgZGVzY3JpcHRpb25UZXh0LCBwcmlvcml0eVRleHQsIGR1ZURhdGVUZXh0LCBpbmRleCkge1xyXG4gIC8vIENyZWF0ZSB0YXNrIGNhcmQgZWxlbWVudHNcclxuXHJcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhcmQuY2xhc3NOYW1lID0gJ2NhcmQgdGFzay1jYXJkJztcclxuICBjYXJkLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KVxyXG5cclxuICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICByb3cuY2xhc3NOYW1lID0gJ3JvdyBuby1ndXR0ZXJzJztcclxuXHJcbiAgY29uc3QgY29sSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbEljb24uY2xhc3NOYW1lID0gJ2NvbC1tZC0yIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBiZy1wcmltYXJ5IHRleHQtd2hpdGUgcG9zaXRpb24tcmVsYXRpdmUnO1xyXG5cclxuICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gIGljb24uY2xhc3NOYW1lID0gJ2ZhcyBmYS10YXNrcyBmYS0yeCc7XHJcblxyXG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcclxuICBjaGVja2JveC5jbGFzc05hbWUgPSAnYmlnLWNoZWNrYm94JztcclxuICBjaGVja2JveC5hcmlhTGFiZWwgPSAnVGFzayBDb21wbGV0ZSc7XHJcblxyXG4gIGNvbnN0IGNvbEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb2xCb2R5LmNsYXNzTmFtZSA9ICdjb2wtbWQtMTAnO1xyXG5cclxuICBjb25zdCBjYXJkQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNhcmRCb2R5LmNsYXNzTmFtZSA9ICdjYXJkLWJvZHknO1xyXG5cclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgdGl0bGUuY2xhc3NOYW1lID0gJ2NhcmQtdGl0bGUnO1xyXG4gIHRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVUZXh0O1xyXG5cclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBkZXNjcmlwdGlvbi5jbGFzc05hbWUgPSAnY2FyZC10ZXh0IGRlc2NyaXB0aW9uJztcclxuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uVGV4dDtcclxuXHJcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgcHJpb3JpdHkuY2xhc3NOYW1lID0gJ2NhcmQtdGV4dCBwcmlvcml0eSc7XHJcbiAgcHJpb3JpdHkuaW5uZXJIVE1MID0gYDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj48aSBjbGFzcz1cImZhcyBmYS1mbGFnXCI+PC9pPiBQcmlvcml0eTogJHtwcmlvcml0eVRleHR9PC9zbWFsbD5gO1xyXG5cclxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGR1ZURhdGUuY2xhc3NOYW1lID0gJ2NhcmQtdGV4dCc7XHJcbiAgZHVlRGF0ZS5pbm5lckhUTUwgPSBgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPjxpIGNsYXNzPVwiZmFzIGZhLWNhbGVuZGFyLWRheVwiPjwvaT4gRHVlIERhdGU6IDxzcGFuIGlkPVwiZHVlRGF0ZVwiPiR7ZHVlRGF0ZVRleHR9PC9zcGFuPjwvc21hbGw+YDtcclxuXHJcbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyJztcclxuXHJcbiAgY29uc3QgYnV0dG9uR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGVkaXRCdXR0b24uY2xhc3NOYW1lID0gJ2J0biBidG4td2FybmluZyBidG4tc20gbS0yJztcclxuICBlZGl0QnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPiBFZGl0JztcclxuXHJcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLWRhbmdlciBidG4tc20nO1xyXG4gIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtdHJhc2hcIj48L2k+IERlbGV0ZSc7XHJcblxyXG4gIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2hlY2tib3hDb250YWluZXIuY2xhc3NOYW1lID0gJ2Zvcm0tY2hlY2snO1xyXG4gIGNoZWNrYm94Q29udGFpbmVyLmlkID0gJ2RpdkZvckNoZWNrQm94JztcclxuXHJcbiAgY29uc3QgdGFza0NvbXBsZXRlZENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICB0YXNrQ29tcGxldGVkQ2hlY2tib3guY2xhc3NOYW1lID0gJ2Zvcm0tY2hlY2staW5wdXQnO1xyXG4gIHRhc2tDb21wbGV0ZWRDaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcclxuICB0YXNrQ29tcGxldGVkQ2hlY2tib3guaWQgPSAndGFza0NvbXBsZXRlZCc7XHJcblxyXG4gIGNvbnN0IHRhc2tDb21wbGV0ZWRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgdGFza0NvbXBsZXRlZExhYmVsLmNsYXNzTmFtZSA9ICdmb3JtLWNoZWNrLWxhYmVsJztcclxuICB0YXNrQ29tcGxldGVkTGFiZWwuaHRtbEZvciA9ICd0YXNrQ29tcGxldGVkJztcclxuICB0YXNrQ29tcGxldGVkTGFiZWwudGV4dENvbnRlbnQgPSAnQ29tcGxldGVkJztcclxuXHJcbiAgLy8gQXBwZW5kIGVsZW1lbnRzXHJcbiAgY29sSWNvbi5hcHBlbmRDaGlsZChpY29uKTtcclxuICBjb2xJY29uLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuXHJcbiAgYnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XHJcbiAgYnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuXHJcbiAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbXBsZXRlZENoZWNrYm94KTtcclxuICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29tcGxldGVkTGFiZWwpO1xyXG5cclxuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uR3JvdXApO1xyXG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcik7XHJcblxyXG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICBjYXJkQm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xyXG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xyXG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XHJcblxyXG4gIGNvbEJvZHkuYXBwZW5kQ2hpbGQoY2FyZEJvZHkpO1xyXG5cclxuICByb3cuYXBwZW5kQ2hpbGQoY29sSWNvbik7XHJcbiAgcm93LmFwcGVuZENoaWxkKGNvbEJvZHkpO1xyXG5cclxuICBjYXJkLmFwcGVuZENoaWxkKHJvdyk7XHJcblxyXG4gIC8vIEFwcGVuZCBjYXJkIHRvIGNvbnRhaW5lclxyXG4gIHNwYWNlLmFwcGVuZChjYXJkKTtcclxuXHJcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGRlbGV0ZUZ1bmN0aW9uKGNhcmQpXHJcbiAgfSlcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3Byb2plY3QuanNcIik7XG4iLCIiXSwibmFtZXMiOlsibG9hZFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSIsImRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UiLCJwcm9qZWN0cyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ0YXNrRE9NIiwibmV3UHJvamVjdFBvcFVwRm9ybSIsIlRhc2siLCJ0YXNrU3BhY2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3BhY2UiLCJ0aXRsZSIsIlByb2plY3QiLCJpZCIsIm5hbWUiLCJjb2xvciIsIl9jbGFzc0NhbGxDaGVjayIsInByb2plY3QiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIm5ld1Rhc2siLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcmlvcml0eSIsInRoZU5ld1Rhc2siLCJwdXNoIiwiZGlzcGxheWVyIiwiYWRkVGFza3MiLCJ0YXNrIiwiYXJyYXkiLCJpbm5lckhUTUwiLCJpbm5lclRleHQiLCJmb3JFYWNoIiwiYXJySXRlbSIsImRvbSIsInByb2plY3ROYW1lIiwiYWRkVGFza0J1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImNsYXNzTmFtZSIsInN0eWxlIiwid2lkdGgiLCJhcHBlbmQiLCJkZWZhdWx0IiwibW9kYWwiLCJtb2RhbENvbnRhaW5lciIsIm1vZGFsQ29udGVudCIsIm1vZGFsSGVhZGVyIiwibW9kYWxUaXRsZSIsImFwcGVuZENoaWxkIiwiY2xvc2VCdXR0b24iLCJtb2RhbEJvZHkiLCJuYW1lTGFiZWwiLCJuYW1lSW5wdXQiLCJ0eXBlIiwiY29sb3JMYWJlbCIsImNvbG9yU2VsZWN0IiwiY29sb3JPcHRpb25zIiwib3B0aW9uIiwib3B0aW9uRWxlbWVudCIsInNhdmVCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzcGxheSIsInByb2plY3RDb2xvciIsImNsb3NlTW9kYWwiLCJvcGVuTW9kYWwiLCJQcm9qZWN0TWFuYWdlciIsIm5ld1Byb2plY3QiLCJhbGxQcm9qZWN0Rm9sZGVyIiwibG9hZFByb2plY3RzIiwiYWxsVGFzayIsImxlbmd0aCIsImFkZE5ld1Byb2plY3QiLCJjb25zb2xlIiwibG9nIiwic2F2ZVByb2plY3RzIiwiZG9tQ3JlYXRvciIsImRlbGV0ZVByb2plY3QiLCJpbmRleCIsInNwbGljZSIsInByb2plY3RQYWdlYW5kU2lkZUJhckRPTSIsIl90aGlzIiwic2F2ZUJ0bk5ld1Byb2plY3QiLCJnZXRTZWxlY3RlZFByb2plY3RBcnJheSIsInNlbGVjdEFycmF5IiwicmVmcmVzaGVyIiwicHJvdG90eXBlIiwiZm9ybSIsIl90aGlzMiIsIm5ld1Byb2plY3RVTCIsInByb2plY3RMaXN0IiwibGlzdFN0eWxlVHlwZSIsInBhZGRpbmciLCJsaXN0SXRlbSIsInNldEF0dHJpYnV0ZSIsImljb24iLCJmb250V2VpZ2h0IiwiY3JlYXRlVGV4dE5vZGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJnZXRQcm9qZWN0QXJyYXkiLCJsaXN0SXRlbVRhc2tTcGFjZSIsImJvcmRlckJvdHRvbSIsImRlbGV0ZUljb24iLCJjdXJzb3IiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJmb3JtQ29udGFpbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwidGl0bGVMYWJlbCIsImh0bWxGb3IiLCJ0aXRsZUlucHV0IiwicmVxdWlyZWQiLCJoZWlnaHQiLCJkZXNjcmlwdGlvbkxhYmVsIiwiZGVzY3JpcHRpb25JbnB1dCIsImR1ZURhdGVMYWJlbCIsImR1ZURhdGVJbnB1dCIsInByaW9yaXR5TGFiZWwiLCJwcmlvcml0eVNlbGVjdCIsInByaW9yaXR5T3B0aW9ucyIsIm9wdGlvblRleHQiLCJ0b0xvd2VyQ2FzZSIsInN1Ym1pdEJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsInByZXZlbnREZWZhdWx0IiwidGl0bGVUZXh0IiwiZGVzY3JpcHRpb25UZXh0IiwicHJpb3JpdHlUZXh0IiwiZHVlRGF0ZVRleHQiLCJjYXJkIiwicm93IiwiY29sSWNvbiIsImNoZWNrYm94IiwiYXJpYUxhYmVsIiwiY29sQm9keSIsImNhcmRCb2R5IiwiY29uY2F0IiwiYnV0dG9uQ29udGFpbmVyIiwiYnV0dG9uR3JvdXAiLCJlZGl0QnV0dG9uIiwiZGVsZXRlQnV0dG9uIiwiY2hlY2tib3hDb250YWluZXIiLCJ0YXNrQ29tcGxldGVkQ2hlY2tib3giLCJ0YXNrQ29tcGxldGVkTGFiZWwiLCJkZWxldGVGdW5jdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=