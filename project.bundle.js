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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/project.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Byb2plY3REb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcHJvamVjdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdGFza0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90b2RvRE9NLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2Nzcy9wcm9qZWN0RE9NLmNzcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9jc3MvcHJvamVjdERPTS5jc3M/M2VjOCIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbG9hZFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXJyJyk7XHJcbiAgICByZXR1cm4gZGF0YSA/IEpTT04ucGFyc2UoZGF0YSkgOiBbXTtcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKHByb2plY3RzKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXJyJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuICB9XHJcbiAgIiwiaW1wb3J0IHRhc2tET00gZnJvbSBcIi4vdG9kb0RPTS5qc1wiO1xyXG5pbXBvcnQgbmV3UHJvamVjdFBvcFVwRm9ybSBmcm9tIFwiLi90YXNrRm9ybS5qc1wiO1xyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi90b2RvLmpzXCI7XHJcbmNvbnN0IHRhc2tTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrU3BhY2UnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBjb2xvcikge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMucHJvamVjdCA9IFtdO1xyXG4gIH1cclxuXHJcbiAgbmV3VGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICBjb25zdCB0aGVOZXdUYXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XHJcbiAgICB0aGlzLnByb2plY3QucHVzaCh0aGVOZXdUYXNrKTtcclxuICAgIHRoaXMuZGlzcGxheWVyKHRoaXMucHJvamVjdCk7XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrcyh0YXNrKSB7XHJcbiAgICB0aGlzLnByb2plY3QucHVzaCh0YXNrKVxyXG4gIH1cclxuXHJcbiAgZGlzcGxheWVyKGFycmF5KSB7XHJcbiAgICB0YXNrU3BhY2UuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGFycmF5LmZvckVhY2goYXJySXRlbSA9PiB7XHJcbiAgICAgIHRhc2tET00oYXJySXRlbS50aXRsZSwgYXJySXRlbS5kZXNjcmlwdGlvbiwgYXJySXRlbS5kdWVEYXRlLCBhcnJJdGVtLnByaW9yaXR5KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbiAgZG9tKCkge1xyXG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYWRkVGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XHJcbiAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLXByaW1hcnknO1xyXG4gICAgYWRkVGFza0J1dHRvbi5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxuICAgIHRhc2tTcGFjZS5hcHBlbmRDaGlsZChhZGRUYXNrQnV0dG9uKTtcclxuICB9XHJcblxyXG4gIFxyXG59XHJcbiIsIi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSBtb2RhbCBhcyBhIGRlZmF1bHQgbW9kdWxlXHJcbmNvbnN0IHRhc2tTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrU3BhY2UnKVxyXG5jb25zdCBuZXdQcm9qZWN0VUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdFVMJylcclxuXHJcbmNvbnN0IG1vZGFsID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gTW9kYWwgY29udGFpbmVyXHJcbiAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9kYWxDb250YWluZXIuY2xhc3NOYW1lID0gJ21vZGFsJztcclxuICBcclxuICAgIC8vIE1vZGFsIGNvbnRlbnRcclxuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9kYWxDb250ZW50LmNsYXNzTmFtZSA9ICdtb2RhbC1jb250ZW50JztcclxuICBcclxuICAgIC8vIE1vZGFsIGhlYWRlclxyXG4gICAgY29uc3QgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsSGVhZGVyLmNsYXNzTmFtZSA9ICdtb2RhbC1oZWFkZXInO1xyXG4gICAgY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBtb2RhbFRpdGxlLnRleHRDb250ZW50ID0gJ05ldyBQcm9qZWN0JztcclxuICAgIG1vZGFsSGVhZGVyLmFwcGVuZENoaWxkKG1vZGFsVGl0bGUpO1xyXG4gIFxyXG4gICAgLy8gQ2xvc2UgYnV0dG9uXHJcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNsb3NlQnV0dG9uLmNsYXNzTmFtZSA9ICdjbG9zZSc7XHJcbiAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9ICfDlyc7XHJcbiAgICBtb2RhbEhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XHJcbiAgXHJcbiAgICAvLyBNb2RhbCBib2R5XHJcbiAgICBjb25zdCBtb2RhbEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsQm9keS5jbGFzc05hbWUgPSAnbW9kYWwtYm9keSc7XHJcbiAgXHJcbiAgICAvLyBQcm9qZWN0IE5hbWUgaW5wdXRcclxuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnUHJvamVjdCBOYW1lOic7XHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICBuYW1lSW5wdXQuaWQgPSAncHJvamVjdE5hbWUnO1xyXG4gICAgbmFtZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xyXG4gICAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XHJcbiAgICBtb2RhbEJvZHkuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcclxuICBcclxuICAgIC8vIE9wdGlvbmFsIENvbG9yIFNlbGVjdG9yIChleGFtcGxlKVxyXG4gICAgY29uc3QgY29sb3JMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb2xvckxhYmVsLnRleHRDb250ZW50ID0gJ0NvbG9yOic7XHJcbiAgICBjb25zdCBjb2xvclNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgY29sb3JTZWxlY3QuaWQgPSAncHJvamVjdENvbG9yJztcclxuICAgIGNvbG9yU2VsZWN0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xyXG4gICAgY29uc3QgY29sb3JPcHRpb25zID0gWydOb25lJywgJ1JlZCcsICdHcmVlbicsICdCbHVlJ107XHJcbiAgICBjb2xvck9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBvcHRpb247XHJcbiAgICAgIGNvbG9yU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgICBtb2RhbEJvZHkuYXBwZW5kQ2hpbGQoY29sb3JMYWJlbCk7XHJcbiAgICBtb2RhbEJvZHkuYXBwZW5kQ2hpbGQoY29sb3JTZWxlY3QpO1xyXG4gIFxyXG4gICAgLy8gU2F2ZSBidXR0b25cclxuICAgIGNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHNhdmVCdXR0b24uY2xhc3NOYW1lID0gJ2J0biBidG4tcHJpbWFyeSc7XHJcbiAgICBzYXZlQnV0dG9uLmlkID0gJ3NhdmVCdG5OZXdQcm9qZWN0J1xyXG4gICAgc2F2ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDcmVhdGUgRm9sZGVyJztcclxuICAgIG1vZGFsQm9keS5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcclxuICBcclxuICAgIC8vIEFwcGVuZCBhbGwgcGFydHMgdG8gbW9kYWwgY29udGVudFxyXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsSGVhZGVyKTtcclxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbEJvZHkpO1xyXG4gICAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcclxuICBcclxuICAgIC8vIEV2ZW50IGxpc3RlbmVyIGZvciBjbG9zZSBidXR0b25cclxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IG5hbWVJbnB1dC52YWx1ZTtcclxuICAgICAgY29uc3QgcHJvamVjdENvbG9yID0gY29sb3JTZWxlY3QudmFsdWU7XHJcbiAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgXHJcbiAgXHJcbiAgICB9KTtcclxuICBcclxuICAgIC8vIEZ1bmN0aW9uIHRvIGNsb3NlIHRoZSBtb2RhbFxyXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcclxuICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuICBcclxuICAgIC8vIEZ1bmN0aW9uIHRvIG9wZW4gdGhlIG1vZGFsXHJcbiAgICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XHJcbiAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICB0YXNrU3BhY2UuYXBwZW5kKG1vZGFsQ29udGFpbmVyKVxyXG4gICAgfVxyXG4gIFxyXG5cclxuICAgIC8vIEV4cG9ydCBtb2RhbCBmdW5jdGlvbnNcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG9wZW5Nb2RhbCxcclxuICAgICAgY2xvc2VNb2RhbCxcclxuICAgICAgc2F2ZUJ1dHRvbixcclxuICAgICAgbmFtZUlucHV0LFxyXG4gICAgICBjb2xvclNlbGVjdCxcclxuICAgIH07XHJcbiAgfSkoKTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBtb2RhbDtcclxuICBcclxuICIsImNvbnN0IHRhc2tTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrU3BhY2UnKVxyXG5cclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiXHJcbmltcG9ydCBtb2RhbCBmcm9tIFwiLi9wcm9qZWN0RG9tLmpzXCJcclxuaW1wb3J0IHsgbG9hZFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZS5qcydcclxuaW1wb3J0IG5ld1Byb2plY3RQb3BVcEZvcm0gZnJvbSBcIi4vdGFza0Zvcm0uanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdE1hbmFnZXJ7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMubmV3UHJvamVjdCA9IFtdXHJcbiAgICB0aGlzLmFsbFByb2plY3RGb2xkZXIgPSBbXVxyXG4gICAgdGhpcy5sb2FkUHJvamVjdHMoKTtcclxuICAgIHRoaXMuYWxsVGFzayA9IFtdXHJcblxyXG4gICAgaWYgKHRoaXMuYWxsUHJvamVjdEZvbGRlci5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5hZGROZXdQcm9qZWN0KDEsICdEZWZhdWx0JywgJ3doaXRlJykubmV3VGFzaygnVGFzayAyJywgJ1RoaXMgaXMgYSBkZXNjcmlwdGlvbiBmb3IgdGFzayAyJywgJzIwMjQtMDctMjAnLCAnTWVkaXVtJyk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmFsbFByb2plY3RGb2xkZXIpXHJcbiAgfVxyXG4gIFxyXG4gIGxvYWRQcm9qZWN0cygpIHtcclxuICAgIHRoaXMuYWxsUHJvamVjdEZvbGRlciA9IGxvYWRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICB9XHJcblxyXG4gIHNhdmVQcm9qZWN0cygpIHtcclxuICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKHRoaXMuYWxsUHJvamVjdEZvbGRlcik7XHJcbiAgfVxyXG5cclxuXHJcbiAgYWRkTmV3UHJvamVjdChpZCwgbmFtZSwgY29sb3IpIHtcclxuICAgIHRoaXMubmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGlkLCBuYW1lLCBjb2xvcik7XHJcbiAgICB0aGlzLmFsbFByb2plY3RGb2xkZXIucHVzaCh0aGlzLm5ld1Byb2plY3QpO1xyXG4gICAgdGhpcy5zYXZlUHJvamVjdHMoKTtcclxuICAgIHJldHVybiB0aGlzLm5ld1Byb2plY3Q7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5ZXIoKSB7ICBcclxuICAgIHRoaXMuYWxsUHJvamVjdEZvbGRlci5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgdGhpcy5kb21DcmVhdG9yKClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gZGVsZXRlUHJvamVjdChpbmRleCkge1xyXG4gIC8vICAgdGhpcy5hbGxQcm9qZWN0Rm9sZGVyID0gdGhpcy5hbGxQcm9qZWN0Rm9sZGVyLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaW5kZXgpO1xyXG4gIC8vICAgdGhpcy5zYXZlUHJvamVjdHMoKTtcclxuICAvLyAgIHRoaXMuZGlzcGxheWVyKCk7IFxyXG4gIC8vIH1cclxuICBcclxuICBcclxuICBkb21DcmVhdG9yKCl7XHJcbiAgICB0aGlzLmxpQ3JlYXRlKHRoaXMuYWxsUHJvamVjdEZvbGRlcik7XHJcbiAgICB0aGlzLnNhdmVCdXR0b24odGhpcy5hbGxQcm9qZWN0Rm9sZGVyKTtcclxuICAgIC8vIGRpc3BsYXlUYXNrU3BhY2UodGhpcy5hbGxQcm9qZWN0Rm9sZGVyKTtcclxuXHJcbiAgfVxyXG5cclxuICBzYXZlQnV0dG9uKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHNhdmVCdG5OZXdQcm9qZWN0ID0gbW9kYWwuc2F2ZUJ1dHRvbjtcclxuICAgIHNhdmVCdG5OZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBuYW1lID0gbW9kYWwubmFtZUlucHV0LnZhbHVlO1xyXG4gICAgICBjb25zdCBjb2xvciA9IG1vZGFsLmNvbG9yU2VsZWN0LnZhbHVlO1xyXG4gICAgICBjb25zdCBpZCA9IHRoaXMuYWxsUHJvamVjdEZvbGRlci5sZW5ndGggKyAxO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5hZGROZXdQcm9qZWN0KGlkLCBuYW1lLCBjb2xvcik7XHJcbiAgICAgIHRoaXMubGlDcmVhdGUocHJvamVjdClcclxuICAgICAgbW9kYWwuY2xvc2VNb2RhbCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIGxpQ3JlYXRlKHByb2plY3RzKSB7XHJcblxyXG5cclxuICAgIGNvbnN0IG5ld1Byb2plY3RVTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0VUwnKTtcclxuICAgIG5ld1Byb2plY3RVTC5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICB0YXNrU3BhY2UuaW5uZXJIVE1MID0gXCJcIlxyXG5cclxuICAgICAvLyBDcmVhdGUgdGhlIG1haW4gY29udGFpbmVyIGZvciB0aGUgdGFzayBzcGFjZVxyXG4gICAgIGNvbnN0IGhvbWVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgaG9tZVBhZ2UuaWQgPSAnaG9tZVBhZ2UnO1xyXG4gICAgIGhvbWVQYWdlLnN0eWxlLnBhZGRpbmcgPSAnMjBweCc7XHJcbiAgICAgaG9tZVBhZ2Uuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCAjY2NjJztcclxuICAgICBob21lUGFnZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNXB4JztcclxuICAgXHJcbiAgICAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgdGhlIHRpdGxlXHJcbiAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgIHRpdGxlLmlubmVyVGV4dCA9ICdNeSBUb2RvcyBQcm9qZWN0JztcclxuIFxyXG4gICAgIFxyXG4gICAgIGhvbWVQYWdlLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgXHJcbiAgICAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgdGhlIGxpc3QgY29udGFpbmVyXHJcbiAgICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgIHByb2plY3RMaXN0LnN0eWxlLmxpc3RTdHlsZVR5cGUgPSAnbm9uZSc7XHJcbiAgICAgcHJvamVjdExpc3Quc3R5bGUucGFkZGluZyA9ICcwJztcclxuICBcclxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBsaXN0SXRlbS5jbGFzc05hbWUgPSAnbGlzdC1ncm91cC1pdGVtJztcclxuICAgIGxpc3RJdGVtLmlkID0gJ3Byb2plY3RGb2xkZXInO1xyXG4gICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpO1xyXG5cclxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBpY29uLmNsYXNzTmFtZSA9ICdmYS1zb2xpZCBmYS1oYXNodGFnJztcclxuICAgIGljb24uc3R5bGUuY29sb3IgPSBwcm9qZWN0LmNvbG9yXHJcbiAgICBpY29uLnN0eWxlLmZvbnRXZWlnaHQgPSAnMTAwJ1xyXG4gICAgbGlzdEl0ZW0uYXBwZW5kKGljb24pO1xyXG4gICAgbGlzdEl0ZW0uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHByb2plY3QubmFtZSkpO1xyXG5cclxuICAgIGxpc3RJdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdXaGl0ZSdcclxuICAgIGxpc3RJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBsZXQgZ2V0UHJvamVjdEFycmF5ID0gcHJvamVjdC5wcm9qZWN0O1xyXG4gICAgICB0aGlzLmdldFNlbGVjdGVkUHJvamVjdEFycmF5KGdldFByb2plY3RBcnJheSk7XHJcbiAgICB9KVxyXG5cclxuICAgICAgY29uc3QgbGlzdEl0ZW1UYXNrU3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICBsaXN0SXRlbVRhc2tTcGFjZS5jbGFzc05hbWUgPSAncHJvamVjdC1pdGVtJztcclxuICAgICAgbGlzdEl0ZW1UYXNrU3BhY2Uuc3R5bGUucGFkZGluZyA9ICcxMHB4JztcclxuICAgICAgbGlzdEl0ZW1UYXNrU3BhY2Uuc3R5bGUuYm9yZGVyQm90dG9tID0gJzFweCBzb2xpZCAjY2NjJztcclxuICAgICAgbGlzdEl0ZW1UYXNrU3BhY2UuaW5uZXJUZXh0ID0gcHJvamVjdC5uYW1lO1xyXG4gICAgICBsaXN0SXRlbVRhc2tTcGFjZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgICAgZGVsZXRlSWNvbi5jbGFzc05hbWUgPSAnZmEtc29saWQgZmEtdHJhc2gnO1xyXG4gICAgICAgIGRlbGV0ZUljb24uaWQgPSAnZGVsZXRlSWNvbic7XHJcbiAgICAgICAgZGVsZXRlSWNvbi5zdHlsZS5mbG9hdCA9ICdyaWdodCc7XHJcbiAgICAgICAgZGVsZXRlSWNvbi5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XHJcblxyXG4gICAgICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygpXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGlzdEl0ZW1UYXNrU3BhY2UuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XHJcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW1UYXNrU3BhY2UpO1xyXG5cclxuICAgICAgICBsaXN0SXRlbVRhc2tTcGFjZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgIGxldCBnZXRQcm9qZWN0QXJyYXkgPSBwcm9qZWN0LnByb2plY3Q7XHJcbiAgICAgICAgICB0aGlzLmdldFNlbGVjdGVkUHJvamVjdEFycmF5KGdldFByb2plY3RBcnJheSk7XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgY29uc3QgaW5kZXhBdHRyaWJ1dGUgPSBwYXJzZUludChsaXN0SXRlbVRhc2tTcGFjZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpKTtcclxuICAgICAgICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4QXR0cmlidXRlLCAxKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxyXG4gICAgICAgICAgICAvLyB0YXNrU3BhY2UuaW5uZXJIVE1MID0gJydcclxuICAgICAgICAgICAgdGhpcy5zYXZlUHJvamVjdHMoKVxyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXllcigpXHJcblxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGhvbWVQYWdlLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KTtcclxuICAgXHJcbiAgICB0YXNrU3BhY2UuYXBwZW5kQ2hpbGQoaG9tZVBhZ2UpO1xyXG4gICAgbmV3UHJvamVjdFVMLmFwcGVuZChsaXN0SXRlbSk7XHJcblxyXG4gICAgfSlcclxuXHJcbiAgIH1cclxuXHJcbiAgICBcclxuICAgIGdldFNlbGVjdGVkUHJvamVjdEFycmF5KGFycmF5KXtcclxuICAgICAgbGV0IHNlbGVjdEFycmF5ID0gYXJyYXlcclxuICAgICAgY29uc29sZS5sb2coc2VsZWN0QXJyYXkpXHJcbiAgICAgIHRoaXMucmVmcmVzaGVyKClcclxuICAgICAgUHJvamVjdC5wcm90b3R5cGUuZGlzcGxheWVyKHNlbGVjdEFycmF5KTtcclxuXHJcbiAgICAgIHRhc2tTcGFjZS5hcHBlbmQobmV3UHJvamVjdFBvcFVwRm9ybShzZWxlY3RBcnJheSkuZm9ybSlcclxuICAgICAgdGhpcy5zYXZlUHJvamVjdHMoKVxyXG5cclxuICAgICAgcmV0dXJuIHNlbGVjdEFycmF5XHJcbiAgICB9XHJcblxyXG4gICBcclxuXHJcbiAgICByZWZyZXNoZXIoKXtcclxuICAgICAgdGFza1NwYWNlLmlubmVySFRNTCA9IFwiXCJcclxuICAgICAgdGhpcy5kaXNwbGF5ZXIoKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAnLi9jc3MvcHJvamVjdERPTS5jc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdQcm9qZWN0UG9wVXBGb3JtKHNlbGVjdEFycmF5KSB7XHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGZvcm0uaWQgPSAnbmV3VGFza0Zvcm0nO1xyXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdwb3B1cC1mb3JtJyk7XHJcblxyXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlOic7XHJcbiAgICB0aXRsZUxhYmVsLmh0bWxGb3IgPSAncHJvamVjdFRpdGxlJztcclxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgdGl0bGVJbnB1dC5pZCA9ICdwcm9qZWN0VGl0bGUnO1xyXG4gICAgdGl0bGVJbnB1dC5uYW1lID0gJ3RpdGxlJztcclxuICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjonO1xyXG4gICAgZGVzY3JpcHRpb25MYWJlbC5odG1sRm9yID0gJ3Byb2plY3REZXNjcmlwdGlvbic7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSAncHJvamVjdERlc2NyaXB0aW9uJztcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQubmFtZSA9ICdkZXNjcmlwdGlvbic7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOic7XHJcbiAgICBkdWVEYXRlTGFiZWwuaHRtbEZvciA9ICdwcm9qZWN0RHVlRGF0ZSc7XHJcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XHJcbiAgICBkdWVEYXRlSW5wdXQuaWQgPSAncHJvamVjdER1ZURhdGUnO1xyXG4gICAgZHVlRGF0ZUlucHV0Lm5hbWUgPSAnZHVlRGF0ZSc7XHJcblxyXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5Oic7XHJcbiAgICBwcmlvcml0eUxhYmVsLmh0bWxGb3IgPSAncHJvamVjdFByaW9yaXR5JztcclxuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5pZCA9ICdwcm9qZWN0UHJpb3JpdHknO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QubmFtZSA9ICdwcmlvcml0eSc7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5yZXF1aXJlZCA9IHRydWU7XHJcblxyXG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb25zID0gWydMb3cnLCAnTWVkaXVtJywgJ0hpZ2gnXTtcclxuICAgIHByaW9yaXR5T3B0aW9ucy5mb3JFYWNoKG9wdGlvblRleHQgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uVGV4dC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb25UZXh0O1xyXG4gICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xyXG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBQcm9qZWN0JztcclxuXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG5cclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcclxuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlO1xyXG4gICAgICBjb25zdCBkdWVEYXRlID0gZHVlRGF0ZUlucHV0LnZhbHVlO1xyXG4gICAgICBjb25zdCBwcmlvcml0eSA9IHByaW9yaXR5U2VsZWN0LnZhbHVlO1xyXG5cclxuICAgICAgY29uc3QgY29sbGVjdGVkID0gW11cclxuICAgICBjb25zdCB0aGVOZXdUYXNrID0ge1xyXG4gICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgICAgZHVlRGF0ZTogZHVlRGF0ZSxcclxuICAgICAgcHJpb3JpdHk6IHByaW9yaXR5XHJcbiAgIH1cclxuICAgc2VsZWN0QXJyYXkucHVzaCh0aGVOZXdUYXNrKSAgXHJcbiAgICBjb25zb2xlLmxvZyhjb2xsZWN0ZWQpXHJcbn0pO1xyXG5cclxuICAgIHJldHVybiB7IGZvcm0gfTtcclxuICB9XHJcblxyXG4iLCIvLyBJbXBvcnRpbmcgUHJvamVjdE1hbmFnZXIgZnJvbSBwcm9qZWN0TWFuYWdlci5qc1xyXG5pbXBvcnQgUHJvamVjdE1hbmFnZXIgIGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyLmpzXCI7XHJcblxyXG4vLyAvLyBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgUHJvamVjdE1hbmFnZXIgYW5kIGdldCB0aGUgZGVmYXVsdCBwcm9qZWN0XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza3tcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuXHJcblxyXG4iLCIvLyBpbXBvcnQgeyBkZWxldGVGdW5jdGlvbiB9IGZyb20gXCIuL3RvZG8uanNcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrRE9NKHRpdGxlVGV4dCwgZGVzY3JpcHRpb25UZXh0LCBwcmlvcml0eVRleHQsIGR1ZURhdGVUZXh0LCBpbmRleCkge1xyXG4gIC8vIENyZWF0ZSB0YXNrIGNhcmQgZWxlbWVudHNcclxuICBjb25zdCB0YXNrU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1NwYWNlJyk7XHJcblxyXG4gIFxyXG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkLmNsYXNzTmFtZSA9ICdjYXJkIHRhc2stY2FyZCc7XHJcbiAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleClcclxuXHJcbiAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcm93LmNsYXNzTmFtZSA9ICdyb3cgbm8tZ3V0dGVycyc7XHJcblxyXG4gIGNvbnN0IGNvbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb2xJY29uLmNsYXNzTmFtZSA9ICdjb2wtbWQtMiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgYmctcHJpbWFyeSB0ZXh0LXdoaXRlIHBvc2l0aW9uLXJlbGF0aXZlJztcclxuXHJcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBpY29uLmNsYXNzTmFtZSA9ICdmYXMgZmEtdGFza3MgZmEtMngnO1xyXG5cclxuICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgY2hlY2tib3guY2xhc3NOYW1lID0gJ2JpZy1jaGVja2JveCc7XHJcbiAgY2hlY2tib3guYXJpYUxhYmVsID0gJ1Rhc2sgQ29tcGxldGUnO1xyXG5cclxuICBjb25zdCBjb2xCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29sQm9keS5jbGFzc05hbWUgPSAnY29sLW1kLTEwJztcclxuXHJcbiAgY29uc3QgY2FyZEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkQm9keS5jbGFzc05hbWUgPSAnY2FyZC1ib2R5JztcclxuXHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xyXG4gIHRpdGxlLmNsYXNzTmFtZSA9ICdjYXJkLXRpdGxlJztcclxuICB0aXRsZS50ZXh0Q29udGVudCA9IHRpdGxlVGV4dDtcclxuXHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgZGVzY3JpcHRpb24uY2xhc3NOYW1lID0gJ2NhcmQtdGV4dCBkZXNjcmlwdGlvbic7XHJcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvblRleHQ7XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHByaW9yaXR5LmNsYXNzTmFtZSA9ICdjYXJkLXRleHQgcHJpb3JpdHknO1xyXG4gIHByaW9yaXR5LmlubmVySFRNTCA9IGA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+PGkgY2xhc3M9XCJmYXMgZmEtZmxhZ1wiPjwvaT4gUHJpb3JpdHk6ICR7cHJpb3JpdHlUZXh0fTwvc21hbGw+YDtcclxuXHJcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBkdWVEYXRlLmNsYXNzTmFtZSA9ICdjYXJkLXRleHQnO1xyXG4gIGR1ZURhdGUuaW5uZXJIVE1MID0gYDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj48aSBjbGFzcz1cImZhcyBmYS1jYWxlbmRhci1kYXlcIj48L2k+IER1ZSBEYXRlOiA8c3BhbiBpZD1cImR1ZURhdGVcIj4ke2R1ZURhdGVUZXh0fTwvc3Bhbj48L3NtYWxsPmA7XHJcblxyXG4gIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGJ1dHRvbkNvbnRhaW5lci5jbGFzc05hbWUgPSAnZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlcic7XHJcblxyXG4gIGNvbnN0IGJ1dHRvbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBlZGl0QnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLXdhcm5pbmcgYnRuLXNtIG0tMic7XHJcbiAgZWRpdEJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtZWRpdFwiPjwvaT4gRWRpdCc7XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi1kYW5nZXIgYnRuLXNtJztcclxuICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoXCI+PC9pPiBEZWxldGUnO1xyXG5cclxuICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdmb3JtLWNoZWNrJztcclxuICBjaGVja2JveENvbnRhaW5lci5pZCA9ICdkaXZGb3JDaGVja0JveCc7XHJcblxyXG4gIGNvbnN0IHRhc2tDb21wbGV0ZWRDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdGFza0NvbXBsZXRlZENoZWNrYm94LmNsYXNzTmFtZSA9ICdmb3JtLWNoZWNrLWlucHV0JztcclxuICB0YXNrQ29tcGxldGVkQ2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgdGFza0NvbXBsZXRlZENoZWNrYm94LmlkID0gJ3Rhc2tDb21wbGV0ZWQnO1xyXG5cclxuICBjb25zdCB0YXNrQ29tcGxldGVkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIHRhc2tDb21wbGV0ZWRMYWJlbC5jbGFzc05hbWUgPSAnZm9ybS1jaGVjay1sYWJlbCc7XHJcbiAgdGFza0NvbXBsZXRlZExhYmVsLmh0bWxGb3IgPSAndGFza0NvbXBsZXRlZCc7XHJcbiAgdGFza0NvbXBsZXRlZExhYmVsLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlZCc7XHJcblxyXG4gIC8vIEFwcGVuZCBlbGVtZW50c1xyXG4gIGNvbEljb24uYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgY29sSWNvbi5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcblxyXG4gIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xyXG4gIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XHJcblxyXG4gIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb21wbGV0ZWRDaGVja2JveCk7XHJcbiAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbXBsZXRlZExhYmVsKTtcclxuXHJcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkdyb3VwKTtcclxuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXIpO1xyXG5cclxuICBjYXJkQm9keS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcclxuICBjYXJkQm9keS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcclxuICBjYXJkQm9keS5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xyXG5cclxuICBjb2xCb2R5LmFwcGVuZENoaWxkKGNhcmRCb2R5KTtcclxuXHJcbiAgcm93LmFwcGVuZENoaWxkKGNvbEljb24pO1xyXG4gIHJvdy5hcHBlbmRDaGlsZChjb2xCb2R5KTtcclxuXHJcbiAgY2FyZC5hcHBlbmRDaGlsZChyb3cpO1xyXG5cclxuICAvLyBBcHBlbmQgY2FyZCB0byBjb250YWluZXJcclxuICB0YXNrU3BhY2UuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcblxyXG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICBkZWxldGVGdW5jdGlvbihjYXJkKVxyXG4gIH0pXHJcbn1cclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tb2RhbCB7XHJcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogT3ZlcmxheSBiYWNrZ3JvdW5kICovXHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgICBtYXJnaW46IDE1JSBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gIH1cclxuICBcclxuICAubW9kYWwtaGVhZGVyIGgyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgLmNsb3NlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWJvZHkgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1ib2R5IGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4gIC5tb2RhbC1ib2R5IHNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICAubW9kYWwtYm9keSBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICBgLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvcHJvamVjdERPTS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhLEVBQUUsc0JBQXNCO0lBQ3JDLGVBQWU7SUFDZixVQUFVO0lBQ1YsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlDQUFpQyxFQUFFLHVCQUF1QjtFQUM1RDs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztFQUVBOztJQUVFLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0VBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1vZGFsIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogT3ZlcmxheSBiYWNrZ3JvdW5kICovXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5tb2RhbC1jb250ZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXHJcXG4gICAgbWFyZ2luOiAxNSUgYXV0bztcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1vZGFsLWhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5tb2RhbC1oZWFkZXIgaDIge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jbG9zZSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubW9kYWwtYm9keSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5tb2RhbC1ib2R5IGxhYmVsIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1vZGFsLWJvZHkgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcclxcbiAgLm1vZGFsLWJvZHkgc2VsZWN0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDhweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1vZGFsLWJvZHkgYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB9XFxyXFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0RE9NLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3RET00uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wcm9qZWN0LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbImxvYWRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UiLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlIiwicHJvamVjdHMiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidGFza0RPTSIsIm5ld1Byb2plY3RQb3BVcEZvcm0iLCJUYXNrIiwidGFza1NwYWNlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlByb2plY3QiLCJpZCIsIm5hbWUiLCJjb2xvciIsIl9jbGFzc0NhbGxDaGVjayIsInByb2plY3QiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIm5ld1Rhc2siLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwidGhlTmV3VGFzayIsInB1c2giLCJkaXNwbGF5ZXIiLCJhZGRUYXNrcyIsInRhc2siLCJhcnJheSIsImlubmVySFRNTCIsImZvckVhY2giLCJhcnJJdGVtIiwiZG9tIiwiYWRkVGFza0J1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImNsYXNzTmFtZSIsInN0eWxlIiwid2lkdGgiLCJhcHBlbmRDaGlsZCIsImRlZmF1bHQiLCJuZXdQcm9qZWN0VUwiLCJtb2RhbCIsIm1vZGFsQ29udGFpbmVyIiwibW9kYWxDb250ZW50IiwibW9kYWxIZWFkZXIiLCJtb2RhbFRpdGxlIiwiY2xvc2VCdXR0b24iLCJtb2RhbEJvZHkiLCJuYW1lTGFiZWwiLCJuYW1lSW5wdXQiLCJ0eXBlIiwiY29sb3JMYWJlbCIsImNvbG9yU2VsZWN0IiwiY29sb3JPcHRpb25zIiwib3B0aW9uIiwib3B0aW9uRWxlbWVudCIsInNhdmVCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzcGxheSIsInByb2plY3ROYW1lIiwicHJvamVjdENvbG9yIiwiY2xvc2VNb2RhbCIsIm9wZW5Nb2RhbCIsImFwcGVuZCIsIlByb2plY3RNYW5hZ2VyIiwibmV3UHJvamVjdCIsImFsbFByb2plY3RGb2xkZXIiLCJsb2FkUHJvamVjdHMiLCJhbGxUYXNrIiwibGVuZ3RoIiwiYWRkTmV3UHJvamVjdCIsImNvbnNvbGUiLCJsb2ciLCJzYXZlUHJvamVjdHMiLCJfdGhpcyIsImRvbUNyZWF0b3IiLCJsaUNyZWF0ZSIsIl90aGlzMiIsInNhdmVCdG5OZXdQcm9qZWN0IiwiX3RoaXMzIiwiaG9tZVBhZ2UiLCJwYWRkaW5nIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiaW5uZXJUZXh0IiwicHJvamVjdExpc3QiLCJsaXN0U3R5bGVUeXBlIiwiaW5kZXgiLCJsaXN0SXRlbSIsInNldEF0dHJpYnV0ZSIsImljb24iLCJmb250V2VpZ2h0IiwiY3JlYXRlVGV4dE5vZGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJnZXRQcm9qZWN0QXJyYXkiLCJnZXRTZWxlY3RlZFByb2plY3RBcnJheSIsImxpc3RJdGVtVGFza1NwYWNlIiwiYm9yZGVyQm90dG9tIiwiZGVsZXRlSWNvbiIsImN1cnNvciIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJpbmRleEF0dHJpYnV0ZSIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwic3BsaWNlIiwic2VsZWN0QXJyYXkiLCJyZWZyZXNoZXIiLCJwcm90b3R5cGUiLCJmb3JtIiwiZm9ybUNvbnRhaW5lciIsImNsYXNzTGlzdCIsImFkZCIsInRpdGxlTGFiZWwiLCJodG1sRm9yIiwidGl0bGVJbnB1dCIsInJlcXVpcmVkIiwiZGVzY3JpcHRpb25MYWJlbCIsImRlc2NyaXB0aW9uSW5wdXQiLCJkdWVEYXRlTGFiZWwiLCJkdWVEYXRlSW5wdXQiLCJwcmlvcml0eUxhYmVsIiwicHJpb3JpdHlTZWxlY3QiLCJwcmlvcml0eU9wdGlvbnMiLCJvcHRpb25UZXh0IiwidG9Mb3dlckNhc2UiLCJzdWJtaXRCdXR0b24iLCJwcmV2ZW50RGVmYXVsdCIsImNvbGxlY3RlZCIsInRpdGxlVGV4dCIsImRlc2NyaXB0aW9uVGV4dCIsInByaW9yaXR5VGV4dCIsImR1ZURhdGVUZXh0IiwiY2FyZCIsInJvdyIsImNvbEljb24iLCJjaGVja2JveCIsImFyaWFMYWJlbCIsImNvbEJvZHkiLCJjYXJkQm9keSIsImNvbmNhdCIsImJ1dHRvbkNvbnRhaW5lciIsImJ1dHRvbkdyb3VwIiwiZWRpdEJ1dHRvbiIsImRlbGV0ZUJ1dHRvbiIsImNoZWNrYm94Q29udGFpbmVyIiwidGFza0NvbXBsZXRlZENoZWNrYm94IiwidGFza0NvbXBsZXRlZExhYmVsIiwiZGVsZXRlRnVuY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9