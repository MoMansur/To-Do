/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/project.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsQ0FBQzZFLGlCQUFpQixDQUFDO0VBRTlDTCxRQUFRLENBQUN4RSxXQUFXLENBQUNyQixLQUFLLENBQUM7RUFDM0I2RixRQUFRLENBQUN4RSxXQUFXLENBQUNwQixXQUFXLENBQUM7RUFDakM0RixRQUFRLENBQUN4RSxXQUFXLENBQUNsQixRQUFRLENBQUM7RUFDOUIwRixRQUFRLENBQUN4RSxXQUFXLENBQUNuQixPQUFPLENBQUM7RUFDN0IyRixRQUFRLENBQUN4RSxXQUFXLENBQUN5RSxlQUFlLENBQUM7RUFFckNGLE9BQU8sQ0FBQ3ZFLFdBQVcsQ0FBQ3dFLFFBQVEsQ0FBQztFQUU3QkwsR0FBRyxDQUFDbkUsV0FBVyxDQUFDb0UsT0FBTyxDQUFDO0VBQ3hCRCxHQUFHLENBQUNuRSxXQUFXLENBQUN1RSxPQUFPLENBQUM7RUFFeEJMLElBQUksQ0FBQ2xFLFdBQVcsQ0FBQ21FLEdBQUcsQ0FBQzs7RUFFckI7RUFDQTNHLFNBQVMsQ0FBQ3dDLFdBQVcsQ0FBQ2tFLElBQUksQ0FBQztFQUUzQlUsWUFBWSxDQUFDaEUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUk7SUFDekMxQix3REFBYyxDQUFDZ0YsSUFBSSxDQUFDO0VBQ3RCLENBQUMsQ0FBQztBQUNKOzs7Ozs7VUN6R0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Byb2plY3REb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcHJvamVjdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdGFza0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90b2RvRE9NLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0YXNrRE9NIGZyb20gXCIuL3RvZG9ET00uanNcIlxyXG5pbXBvcnQgbmV3UHJvamVjdFBvcFVwRm9ybSBmcm9tIFwiLi90YXNrRm9ybS5qc1wiXHJcblxyXG5jb25zdCB0YXNrU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1NwYWNlJylcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0e1xyXG4gICAgY29uc3RydWN0b3IoaWQsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZFxyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcclxuICAgICAgICB0aGlzLnByb2plY3QgPSBbXSAgIFxyXG4gICAgfSAgXHJcbiAgICBhZGRUYXNrcyhhcnIpe1xyXG4gICAgICAgIHRoaXMucHJvamVjdC5wdXNoKGFycilcclxuICAgICAgIHJldHVybiB0aGlzLnByb2plY3RcclxuICAgIH1cclxuICAgIGRpc3BsYXllcigpe1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gdGhpcy5wcm9qZWN0XHJcbiAgICAgICAgdGFza1NwYWNlLmlubmVySFRNTCA9IFwiXCJcclxuICAgICAgICBhcnJheS5mb3JFYWNoKGFyckl0ZW0gPT4ge1xyXG4gICAgICAgICAgICB0YXNrRE9NKGFyckl0ZW0udGl0bGUsIGFyckl0ZW0uZGVzY3JpcHRpb24sIGFyckl0ZW0uZHVlRGF0ZSwgYXJySXRlbS5wcmlvcml0eSlcclxuICAgICAgICB9KTtcclxuICAgICAgICB0YXNrU3BhY2UuYXBwZW5kKG5ld1Byb2plY3RQb3BVcEZvcm0oKSlcclxuICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGFycmF5KVxyXG4gICAgICAgIHJldHVybiBhcnJheVxyXG4gICAgfVxyXG4gICAgZGVsZXRlRnVuY3Rpb24oKXtcclxuICAgICAgICBjb25zdCBpbmRleEF0dHJpYnV0ZSA9IHBhcnNlSW50KHRhc2tTcGFjZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpKTtcclxuICAgICAgICB0aGlzLnByb2plY3Quc3BsaWNlKGluZGV4QXR0cmlidXRlLCAxKTtcclxuICAgICAgICBkaXNwbGF5ZXIoKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiBcclxuXHJcbiIsIi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSBtb2RhbCBhcyBhIGRlZmF1bHQgbW9kdWxlXHJcbmNvbnN0IHRhc2tTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrU3BhY2UnKVxyXG5jb25zdCBuZXdQcm9qZWN0VUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdFVMJylcclxuXHJcbmNvbnN0IG1vZGFsID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gTW9kYWwgY29udGFpbmVyXHJcbiAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9kYWxDb250YWluZXIuY2xhc3NOYW1lID0gJ21vZGFsJztcclxuICBcclxuICAgIC8vIE1vZGFsIGNvbnRlbnRcclxuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9kYWxDb250ZW50LmNsYXNzTmFtZSA9ICdtb2RhbC1jb250ZW50JztcclxuICBcclxuICAgIC8vIE1vZGFsIGhlYWRlclxyXG4gICAgY29uc3QgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsSGVhZGVyLmNsYXNzTmFtZSA9ICdtb2RhbC1oZWFkZXInO1xyXG4gICAgY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBtb2RhbFRpdGxlLnRleHRDb250ZW50ID0gJ05ldyBQcm9qZWN0JztcclxuICAgIG1vZGFsSGVhZGVyLmFwcGVuZENoaWxkKG1vZGFsVGl0bGUpO1xyXG4gIFxyXG4gICAgLy8gQ2xvc2UgYnV0dG9uXHJcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNsb3NlQnV0dG9uLmNsYXNzTmFtZSA9ICdjbG9zZSc7XHJcbiAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9ICfDlyc7XHJcbiAgICBtb2RhbEhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XHJcbiAgXHJcbiAgICAvLyBNb2RhbCBib2R5XHJcbiAgICBjb25zdCBtb2RhbEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsQm9keS5jbGFzc05hbWUgPSAnbW9kYWwtYm9keSc7XHJcbiAgXHJcbiAgICAvLyBQcm9qZWN0IE5hbWUgaW5wdXRcclxuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnUHJvamVjdCBOYW1lOic7XHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICBuYW1lSW5wdXQuaWQgPSAncHJvamVjdE5hbWUnO1xyXG4gICAgbmFtZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xyXG4gICAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XHJcbiAgICBtb2RhbEJvZHkuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcclxuICBcclxuICAgIC8vIE9wdGlvbmFsIENvbG9yIFNlbGVjdG9yIChleGFtcGxlKVxyXG4gICAgY29uc3QgY29sb3JMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb2xvckxhYmVsLnRleHRDb250ZW50ID0gJ0NvbG9yOic7XHJcbiAgICBjb25zdCBjb2xvclNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgY29sb3JTZWxlY3QuaWQgPSAncHJvamVjdENvbG9yJztcclxuICAgIGNvbG9yU2VsZWN0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xyXG4gICAgY29uc3QgY29sb3JPcHRpb25zID0gWydOb25lJywgJ1JlZCcsICdHcmVlbicsICdCbHVlJ107XHJcbiAgICBjb2xvck9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBvcHRpb247XHJcbiAgICAgIGNvbG9yU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgICBtb2RhbEJvZHkuYXBwZW5kQ2hpbGQoY29sb3JMYWJlbCk7XHJcbiAgICBtb2RhbEJvZHkuYXBwZW5kQ2hpbGQoY29sb3JTZWxlY3QpO1xyXG4gIFxyXG4gICAgLy8gU2F2ZSBidXR0b25cclxuICAgIGNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHNhdmVCdXR0b24uY2xhc3NOYW1lID0gJ2J0biBidG4tcHJpbWFyeSc7XHJcbiAgICBzYXZlQnV0dG9uLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBGb2xkZXInO1xyXG4gICAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xyXG4gIFxyXG4gICAgLy8gQXBwZW5kIGFsbCBwYXJ0cyB0byBtb2RhbCBjb250ZW50XHJcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxIZWFkZXIpO1xyXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsQm9keSk7XHJcbiAgICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xyXG4gIFxyXG4gICAgLy8gRXZlbnQgbGlzdGVuZXIgZm9yIGNsb3NlIGJ1dHRvblxyXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuICBcclxuICAgIC8vIEV2ZW50IGxpc3RlbmVyIGZvciBTYXZlIGJ1dHRvbiAoZXhhbXBsZSlcclxuICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gbmFtZUlucHV0LnZhbHVlO1xyXG4gICAgICBjb25zdCBwcm9qZWN0Q29sb3IgPSBjb2xvclNlbGVjdC52YWx1ZTtcclxuICAgICAgY29uc29sZS5sb2coYFByb2plY3QgTmFtZTogJHtwcm9qZWN0TmFtZX0sIENvbG9yOiAke3Byb2plY3RDb2xvcn1gKTtcclxuICAgICAgLy8gSW1wbGVtZW50IHlvdXIgc2F2ZSBsb2dpYyBoZXJlXHJcbiAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgICAgYWRkUHJvamVjdFVJKHByb2plY3ROYW1lKVxyXG5cclxuXHJcbiAgICB9KTtcclxuICBcclxuICAgIC8vIEZ1bmN0aW9uIHRvIGNsb3NlIHRoZSBtb2RhbFxyXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcclxuICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuICBcclxuICAgIC8vIEZ1bmN0aW9uIHRvIG9wZW4gdGhlIG1vZGFsXHJcbiAgICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XHJcbiAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICB0YXNrU3BhY2UuYXBwZW5kKG1vZGFsQ29udGFpbmVyKVxyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdFVJKHByb2plY3ROYW1lLCBpbmRleCl7XHJcbiAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgbGlzdEl0ZW0uY2xhc3NOYW1lID0gJ2xpc3QtZ3JvdXAtaXRlbSc7XHJcbiAgICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KVxyXG4gICAgICAvLyBDcmVhdGUgYW4gaWNvbiBlbGVtZW50XHJcbiAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgIGljb24uY2xhc3NOYW1lID0gJ2ZhLXNvbGlkIGZhLWhhc2h0YWcnO1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIC8vIEFwcGVuZCB0aGUgaWNvbiBhbmQgdGV4dCBub2RlIHRvIHRoZSBsaXN0IGl0ZW1cclxuICAgICAgbGlzdEl0ZW0uYXBwZW5kKGljb24pO1xyXG4gICAgICBsaXN0SXRlbS5hcHBlbmQocHJvamVjdE5hbWUpO1xyXG4gICAgICBcclxuXHJcbiAgICBcclxuICAgICAgbmV3UHJvamVjdFVMLmFwcGVuZChsaXN0SXRlbSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBFeHBvcnQgbW9kYWwgZnVuY3Rpb25zXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBvcGVuTW9kYWwsXHJcbiAgICAgIGNsb3NlTW9kYWwsXHJcbiAgICAgIGFkZFByb2plY3RVSSxcclxuICAgIH07XHJcbiAgfSkoKTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBtb2RhbDtcclxuICBcclxuICIsImltcG9ydCBtb2RhbCBmcm9tIFwiLi9wcm9qZWN0RG9tLmpzXCJcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QuanNcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RNYW5hZ2Vye1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmFsbFByb2plY3RzQXJyID0gW11cclxuICAgICAgICB0aGlzLm5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCgpXHJcbiAgICAgICAgdGhpcy5kZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KDEsICdEZWZhdWx0JylcclxuICAgICAgICB0aGlzLmFsbFRhc2sgPSBbXVxyXG4gICAgfVxyXG4gICAgbmV3UHJvamVjdEZ1bmMoaWQsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMubmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGlkLCBuYW1lKVxyXG4gICAgICAgIHJldHVybiB0aGlzLm5ld1Byb2plY3RcclxuICAgIH1cclxuICAgIGFsbFByb2plY3RzKCl7XHJcbiAgICAgICAgdGhpcy5hbGxQcm9qZWN0c0Fyci5wdXNoKHRoaXMubmV3UHJvamVjdClcclxuICAgIH1cclxuICAgIGRpc3BsYXllcigpe1xyXG4gICAgICAgIGNvbnN0IGFyciA9dGhpcy5hbGxQcm9qZWN0c0FyclxyXG4gICAgICAgIGFyci5mb3JFYWNoKGl0ZW0gPT57XHJcbiAgICAgICAgICAgIG1vZGFsLmFkZFByb2plY3RVSShpdGVtKVxyXG4gICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi8vIGltcG9ydCAnLi9jc3MvcHJvamVjdERPTS5jc3MnO1xyXG5cclxuaW1wb3J0IHsgbmV3VGFzayB9IGZyb20gXCIuL3RvZG8uanNcIjtcclxuaW1wb3J0IHRhc2tET00gZnJvbSBcIi4vdG9kb0RPTS5qc1wiO1xyXG5cclxuLy8gRnVuY3Rpb24gdG8gY3JlYXRlIGFuZCBzaG93IHRoZSBuZXcgcHJvamVjdCBwb3B1cCBmb3JtXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld1Byb2plY3RQb3BVcEZvcm0oKSB7XHJcbiAgICAvLyBDcmVhdGUgZm9ybSBlbGVtZW50c1xyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3BvcHVwLWZvcm0nKTtcclxuXHJcbiAgICAvLyBUaXRsZVxyXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlOic7XHJcbiAgICB0aXRsZUxhYmVsLmh0bWxGb3IgPSAncHJvamVjdFRpdGxlJztcclxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgdGl0bGVJbnB1dC5pZCA9ICdwcm9qZWN0VGl0bGUnO1xyXG4gICAgdGl0bGVJbnB1dC5uYW1lID0gJ3RpdGxlJztcclxuICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICAgIC8vIERlc2NyaXB0aW9uXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246JztcclxuICAgIGRlc2NyaXB0aW9uTGFiZWwuaHRtbEZvciA9ICdwcm9qZWN0RGVzY3JpcHRpb24nO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gJ3Byb2plY3REZXNjcmlwdGlvbic7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0Lm5hbWUgPSAnZGVzY3JpcHRpb24nO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcblxyXG4gICAgLy8gRHVlIERhdGVcclxuICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6JztcclxuICAgIGR1ZURhdGVMYWJlbC5odG1sRm9yID0gJ3Byb2plY3REdWVEYXRlJztcclxuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBkdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcclxuICAgIGR1ZURhdGVJbnB1dC5pZCA9ICdwcm9qZWN0RHVlRGF0ZSc7XHJcbiAgICBkdWVEYXRlSW5wdXQubmFtZSA9ICdkdWVEYXRlJztcclxuICAgIGR1ZURhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcblxyXG4gICAgLy8gUHJpb3JpdHlcclxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonO1xyXG4gICAgcHJpb3JpdHlMYWJlbC5odG1sRm9yID0gJ3Byb2plY3RQcmlvcml0eSc7XHJcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuaWQgPSAncHJvamVjdFByaW9yaXR5JztcclxuICAgIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSAncHJpb3JpdHknO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QucmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IHByaW9yaXR5T3B0aW9ucyA9IFsnTG93JywgJ01lZGl1bScsICdIaWdoJ107XHJcbiAgICBwcmlvcml0eU9wdGlvbnMuZm9yRWFjaChvcHRpb25UZXh0ID0+IHtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25UZXh0LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uVGV4dDtcclxuICAgICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU3VibWl0IEJ1dHRvblxyXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xyXG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBQcm9qZWN0JztcclxuXHJcbiAgICAvLyBBcHBlbmQgZWxlbWVudHMgdG8gZm9ybVxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcclxuXHJcbiAgICAvLyBBcHBlbmQgZm9ybSB0byBmb3JtIGNvbnRhaW5lclxyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcblxyXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGNsb3NlIHRoZSBmb3JtIG9uIHN1Ym1pdFxyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIEhhbmRsZSBmb3JtIHN1Ym1pc3Npb24gbG9naWMgaGVyZVxyXG4gICAgICAgIG5ld1Rhc2sodGl0bGVJbnB1dC52YWx1ZSwgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSwgcHJpb3JpdHlTZWxlY3QudmFsdWUsIGR1ZURhdGVJbnB1dC52YWx1ZSlcclxuICAgICAgICBmb3JtQ29udGFpbmVyLnJlbW92ZSgpOyBcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgcmV0dXJuIGZvcm1cclxufVxyXG5cclxuIiwiLy8gSW1wb3J0aW5nIFByb2plY3RNYW5hZ2VyIGZyb20gcHJvamVjdE1hbmFnZXIuanNcclxuaW1wb3J0IHsgUHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlci5qc1wiO1xyXG5cclxuLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIFByb2plY3RNYW5hZ2VyIGFuZCBnZXQgdGhlIGRlZmF1bHQgcHJvamVjdFxyXG5jb25zdCBuZXdQcm9qZWN0TWFuYWdlciA9IG5ldyBQcm9qZWN0TWFuYWdlcigpO1xyXG5jb25zdCBuZXdQcm9qZWN0ID0gbmV3UHJvamVjdE1hbmFnZXIuZGVmYXVsdFByb2plY3Q7XHJcblxyXG4vLyBEZWZpbmUgYSBjbGFzcyBmb3IgdGFzayBhcnJheXNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0FycmF5IHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheWVyKGFycikge1xyXG4gIGFyci5kaXNwbGF5ZXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5ld1Rhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gIGNvbnN0IHRoZU5ld1Rhc2sgPSBuZXcgVGFza0FycmF5KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xyXG4gIG5ld1Byb2plY3QuYWRkVGFza3ModGhlTmV3VGFzayk7XHJcbiAgZGlzcGxheWVyKG5ld1Byb2plY3QpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlRnVuY3Rpb24odGhlQ2FyZCkge1xyXG4gIGNvbnN0IGluZGV4QXR0cmlidXRlID0gcGFyc2VJbnQodGhlQ2FyZC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpKTtcclxuICBjb25zdCBjb25maXJtVG9SZW1vdmUgPSBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIHRoaXMgdGFzaz8nKTtcclxuXHJcbiAgaWYgKGNvbmZpcm1Ub1JlbW92ZSkge1xyXG4gICAgbmV3UHJvamVjdC5wcm9qZWN0LnNwbGljZShpbmRleEF0dHJpYnV0ZSwgMSk7XHJcbiAgICBkaXNwbGF5ZXIobmV3UHJvamVjdCk7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0KTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGlzcGxheWVyKG5ld1Byb2plY3QpO1xyXG4gICAgY29uc29sZS5sb2cobmV3UHJvamVjdCk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDcmVhdGluZyBuZXcgdGFza3NcclxubmV3VGFzaygnVGFzayAxJywgJ1RoaXMgaXMgYSBkZXNjcmlwdGlvbiBmb3IgdGFzayAxJywgJzIwMjQtMDctMTUnLCAnSGlnaCcpO1xyXG5uZXdUYXNrKCdUYXNrIDInLCAnVGhpcyBpcyBhIGRlc2NyaXB0aW9uIGZvciB0YXNrIDInLCAnMjAyNC0wNy0yMCcsICdNZWRpdW0nKTtcclxuIiwiaW1wb3J0IHsgZGVsZXRlRnVuY3Rpb24gfSBmcm9tIFwiLi90b2RvLmpzXCI7XHJcblxyXG5jb25zdCB0YXNrU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1NwYWNlJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrRE9NKHRpdGxlVGV4dCwgZGVzY3JpcHRpb25UZXh0LCBwcmlvcml0eVRleHQsIGR1ZURhdGVUZXh0LCBpbmRleCkge1xyXG4gIC8vIENyZWF0ZSB0YXNrIGNhcmQgZWxlbWVudHNcclxuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZC5jbGFzc05hbWUgPSAnY2FyZCB0YXNrLWNhcmQnO1xyXG4gIGNhcmQuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpXHJcblxyXG4gIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHJvdy5jbGFzc05hbWUgPSAncm93IG5vLWd1dHRlcnMnO1xyXG5cclxuICBjb25zdCBjb2xJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29sSWNvbi5jbGFzc05hbWUgPSAnY29sLW1kLTIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGJnLXByaW1hcnkgdGV4dC13aGl0ZSBwb3NpdGlvbi1yZWxhdGl2ZSc7XHJcblxyXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgaWNvbi5jbGFzc05hbWUgPSAnZmFzIGZhLXRhc2tzIGZhLTJ4JztcclxuXHJcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gIGNoZWNrYm94LmNsYXNzTmFtZSA9ICdiaWctY2hlY2tib3gnO1xyXG4gIGNoZWNrYm94LmFyaWFMYWJlbCA9ICdUYXNrIENvbXBsZXRlJztcclxuXHJcbiAgY29uc3QgY29sQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbEJvZHkuY2xhc3NOYW1lID0gJ2NvbC1tZC0xMCc7XHJcblxyXG4gIGNvbnN0IGNhcmRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZEJvZHkuY2xhc3NOYW1lID0gJ2NhcmQtYm9keSc7XHJcblxyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuICB0aXRsZS5jbGFzc05hbWUgPSAnY2FyZC10aXRsZSc7XHJcbiAgdGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZVRleHQ7XHJcblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGRlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICdjYXJkLXRleHQgZGVzY3JpcHRpb24nO1xyXG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb25UZXh0O1xyXG5cclxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwcmlvcml0eS5jbGFzc05hbWUgPSAnY2FyZC10ZXh0IHByaW9yaXR5JztcclxuICBwcmlvcml0eS5pbm5lckhUTUwgPSBgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPjxpIGNsYXNzPVwiZmFzIGZhLWZsYWdcIj48L2k+IFByaW9yaXR5OiAke3ByaW9yaXR5VGV4dH08L3NtYWxsPmA7XHJcblxyXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgZHVlRGF0ZS5jbGFzc05hbWUgPSAnY2FyZC10ZXh0JztcclxuICBkdWVEYXRlLmlubmVySFRNTCA9IGA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2FsZW5kYXItZGF5XCI+PC9pPiBEdWUgRGF0ZTogPHNwYW4gaWQ9XCJkdWVEYXRlXCI+JHtkdWVEYXRlVGV4dH08L3NwYW4+PC9zbWFsbD5gO1xyXG5cclxuICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBidXR0b25Db250YWluZXIuY2xhc3NOYW1lID0gJ2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXInO1xyXG5cclxuICBjb25zdCBidXR0b25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgZWRpdEJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi13YXJuaW5nIGJ0bi1zbSBtLTInO1xyXG4gIGVkaXRCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+IEVkaXQnO1xyXG5cclxuICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gJ2J0biBidG4tZGFuZ2VyIGJ0bi1zbSc7XHJcbiAgZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvaT4gRGVsZXRlJztcclxuXHJcbiAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjaGVja2JveENvbnRhaW5lci5jbGFzc05hbWUgPSAnZm9ybS1jaGVjayc7XHJcbiAgY2hlY2tib3hDb250YWluZXIuaWQgPSAnZGl2Rm9yQ2hlY2tCb3gnO1xyXG5cclxuICBjb25zdCB0YXNrQ29tcGxldGVkQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIHRhc2tDb21wbGV0ZWRDaGVja2JveC5jbGFzc05hbWUgPSAnZm9ybS1jaGVjay1pbnB1dCc7XHJcbiAgdGFza0NvbXBsZXRlZENoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gIHRhc2tDb21wbGV0ZWRDaGVja2JveC5pZCA9ICd0YXNrQ29tcGxldGVkJztcclxuXHJcbiAgY29uc3QgdGFza0NvbXBsZXRlZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICB0YXNrQ29tcGxldGVkTGFiZWwuY2xhc3NOYW1lID0gJ2Zvcm0tY2hlY2stbGFiZWwnO1xyXG4gIHRhc2tDb21wbGV0ZWRMYWJlbC5odG1sRm9yID0gJ3Rhc2tDb21wbGV0ZWQnO1xyXG4gIHRhc2tDb21wbGV0ZWRMYWJlbC50ZXh0Q29udGVudCA9ICdDb21wbGV0ZWQnO1xyXG5cclxuICAvLyBBcHBlbmQgZWxlbWVudHNcclxuICBjb2xJY29uLmFwcGVuZENoaWxkKGljb24pO1xyXG4gIGNvbEljb24uYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG5cclxuICBidXR0b25Hcm91cC5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcclxuICBidXR0b25Hcm91cC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xyXG5cclxuICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29tcGxldGVkQ2hlY2tib3gpO1xyXG4gIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb21wbGV0ZWRMYWJlbCk7XHJcblxyXG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Hcm91cCk7XHJcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVyKTtcclxuXHJcbiAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuICBjYXJkQm9keS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XHJcbiAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XHJcbiAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcclxuXHJcbiAgY29sQm9keS5hcHBlbmRDaGlsZChjYXJkQm9keSk7XHJcblxyXG4gIHJvdy5hcHBlbmRDaGlsZChjb2xJY29uKTtcclxuICByb3cuYXBwZW5kQ2hpbGQoY29sQm9keSk7XHJcblxyXG4gIGNhcmQuYXBwZW5kQ2hpbGQocm93KTtcclxuXHJcbiAgLy8gQXBwZW5kIGNhcmQgdG8gY29udGFpbmVyXHJcbiAgdGFza1NwYWNlLmFwcGVuZENoaWxkKGNhcmQpO1xyXG5cclxuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgZGVsZXRlRnVuY3Rpb24oY2FyZClcclxuICB9KVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcHJvamVjdC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJ0YXNrRE9NIiwibmV3UHJvamVjdFBvcFVwRm9ybSIsInRhc2tTcGFjZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJQcm9qZWN0IiwiaWQiLCJuYW1lIiwiX2NsYXNzQ2FsbENoZWNrIiwicHJvamVjdCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiYWRkVGFza3MiLCJhcnIiLCJwdXNoIiwiZGlzcGxheWVyIiwiYXJyYXkiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwiYXJySXRlbSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJhcHBlbmQiLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlRnVuY3Rpb24iLCJpbmRleEF0dHJpYnV0ZSIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwic3BsaWNlIiwibmV3UHJvamVjdFVMIiwibW9kYWwiLCJtb2RhbENvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJtb2RhbENvbnRlbnQiLCJtb2RhbEhlYWRlciIsIm1vZGFsVGl0bGUiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwiY2xvc2VCdXR0b24iLCJtb2RhbEJvZHkiLCJuYW1lTGFiZWwiLCJuYW1lSW5wdXQiLCJ0eXBlIiwiY29sb3JMYWJlbCIsImNvbG9yU2VsZWN0IiwiY29sb3JPcHRpb25zIiwib3B0aW9uIiwib3B0aW9uRWxlbWVudCIsInNhdmVCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwicHJvamVjdE5hbWUiLCJwcm9qZWN0Q29sb3IiLCJjb25jYXQiLCJjbG9zZU1vZGFsIiwiYWRkUHJvamVjdFVJIiwib3Blbk1vZGFsIiwiaW5kZXgiLCJsaXN0SXRlbSIsInNldEF0dHJpYnV0ZSIsImljb24iLCJQcm9qZWN0TWFuYWdlciIsImFsbFByb2plY3RzQXJyIiwibmV3UHJvamVjdCIsImRlZmF1bHRQcm9qZWN0IiwiYWxsVGFzayIsIm5ld1Byb2plY3RGdW5jIiwiYWxsUHJvamVjdHMiLCJpdGVtIiwibmV3VGFzayIsImZvcm1Db250YWluZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJmb3JtIiwidGl0bGVMYWJlbCIsImh0bWxGb3IiLCJ0aXRsZUlucHV0IiwicmVxdWlyZWQiLCJkZXNjcmlwdGlvbkxhYmVsIiwiZGVzY3JpcHRpb25JbnB1dCIsImR1ZURhdGVMYWJlbCIsImR1ZURhdGVJbnB1dCIsInByaW9yaXR5TGFiZWwiLCJwcmlvcml0eVNlbGVjdCIsInByaW9yaXR5T3B0aW9ucyIsIm9wdGlvblRleHQiLCJ0b0xvd2VyQ2FzZSIsInN1Ym1pdEJ1dHRvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZW1vdmUiLCJuZXdQcm9qZWN0TWFuYWdlciIsIlRhc2tBcnJheSIsImRlZmF1bHQiLCJ0aGVOZXdUYXNrIiwidGhlQ2FyZCIsImNvbmZpcm1Ub1JlbW92ZSIsImNvbmZpcm0iLCJ0aXRsZVRleHQiLCJkZXNjcmlwdGlvblRleHQiLCJwcmlvcml0eVRleHQiLCJkdWVEYXRlVGV4dCIsImNhcmQiLCJyb3ciLCJjb2xJY29uIiwiY2hlY2tib3giLCJhcmlhTGFiZWwiLCJjb2xCb2R5IiwiY2FyZEJvZHkiLCJidXR0b25Db250YWluZXIiLCJidXR0b25Hcm91cCIsImVkaXRCdXR0b24iLCJkZWxldGVCdXR0b24iLCJjaGVja2JveENvbnRhaW5lciIsInRhc2tDb21wbGV0ZWRDaGVja2JveCIsInRhc2tDb21wbGV0ZWRMYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=