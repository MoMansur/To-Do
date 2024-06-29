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
  var addTaskBtn = document.getElementById('addTask');
  var isOn = true;
  addTaskBtn.addEventListener('click', function () {
    if (isOn) {
      theDiv.appendChild((0,_taskForm_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
    } else {
      (0,_taskForm_js__WEBPACK_IMPORTED_MODULE_0__["default"])().remove();
    }
    isOn = !isOn;
  });
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoFunctions);

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
  saveButton.textContent = 'Save';
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
    function newArrayProject(newProject) {
      var newArray = [newProject];
    }
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
    closeModal: closeModal
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

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
/* harmony export */   "default": () => (/* binding */ taskArray),
/* harmony export */   deleteFunction: () => (/* binding */ deleteFunction),
/* harmony export */   newTask: () => (/* binding */ newTask)
/* harmony export */ });
/* harmony import */ var _taskForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskForm.js */ "./src/taskForm.js");
/* harmony import */ var _todoDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoDOM.js */ "./src/todoDOM.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var taskSpace = document.getElementById('taskSpace');

// import { v4 as uuidv4 } from 'uuid';


var taskArr = [];
var taskArray = /*#__PURE__*/function () {
  function taskArray(title, description, dueDate, priority) {
    _classCallCheck(this, taskArray);
    // this.id = uuidv4()
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
  return _createClass(taskArray, [{
    key: "displayer",
    value: function displayer(arr) {
      taskSpace.innerHTML = "";
      arr.forEach(function (arrItem) {
        (0,_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arrItem.title, arrItem.description, arrItem.dueDate, arrItem.priority);
      });
      taskSpace.append((0,_taskForm_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
      console.log(taskArr);
    }
  }]);
}();

function displayer(arr) {
  taskSpace.innerHTML = "";
  arr.forEach(function (arrItem) {
    (0,_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arrItem.title, arrItem.description, arrItem.dueDate, arrItem.priority);
  });
  taskSpace.append((0,_taskForm_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
}
function newTask(title, description, dueDate, priority) {
  var theNewTask = new taskArray(title, description, dueDate, priority);
  taskArr.push(theNewTask);
  displayer(taskArr);
  console.log(taskArr);
}
function deleteFunction(theCard) {
  var indexAttribute = parseInt(theCard.getAttribute("data-index"));
  var confirmToRemove = confirm('Are you sure you want to remove this Book?');
  if (confirmToRemove) {
    taskArr.splice(indexAttribute, 1);
    displayer(taskArr);
    console.log(taskArr);
  } else {
    displayer(taskArr);
    console.log(taskArr);
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
  editButton.className = 'btn btn-warning btn-sm';
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

// import { v4 as uuidv4 } from 'uuid';


(0,_functions_js__WEBPACK_IMPORTED_MODULE_1__["default"])(taskSpace);
var createNewProject = document.getElementById('createNewProject');
createNewProject.addEventListener('click', function () {
  _projectDom_js__WEBPACK_IMPORTED_MODULE_0__["default"].openModal();
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDRDtBQUcvQyxTQUFTRSxhQUFhQSxDQUFDQyxNQUFNLEVBQUM7RUFDOUIsSUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxjQUFjLENBQUM7RUFDNUQsSUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNDLGNBQWMsQ0FBQyxVQUFVLENBQUM7RUFDcERGLFlBQVksQ0FBQ0ksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQUk7SUFDdkNQLHdEQUFrQixDQUFDRSxNQUFNLEVBQUVJLFFBQVEsQ0FBQztFQUN4QyxDQUFDLENBQUM7RUFHRixJQUFNRSxVQUFVLEdBQUdKLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFNBQVMsQ0FBQztFQUNyRCxJQUFJSSxJQUFJLEdBQUksSUFBSTtFQUNoQkQsVUFBVSxDQUFDRCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSTtJQUNyQyxJQUFHRSxJQUFJLEVBQUM7TUFDSlAsTUFBTSxDQUFDUSxXQUFXLENBQUNYLHdEQUFtQixDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDLE1BQUk7TUFDRkEsd0RBQW1CLENBQUMsQ0FBQyxDQUFDWSxNQUFNLENBQUMsQ0FBQztJQUNqQztJQUNBRixJQUFJLEdBQUcsQ0FBQ0EsSUFBSTtFQUNoQixDQUFDLENBQUM7QUFHRjtBQUFDO0FBRUQsaUVBQWVSLGFBQWE7Ozs7Ozs7Ozs7Ozs7O0FDMUI1QjtBQUNBLElBQU1XLFNBQVMsR0FBR1IsUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFDO0FBQ3RELElBQU1RLFlBQVksR0FBR1QsUUFBUSxDQUFDQyxjQUFjLENBQUMsY0FBYyxDQUFDO0FBRTVELElBQU1TLEtBQUssR0FBSSxZQUFXO0VBQ3RCO0VBQ0EsSUFBTUMsY0FBYyxHQUFHWCxRQUFRLENBQUNZLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDcERELGNBQWMsQ0FBQ0UsU0FBUyxHQUFHLE9BQU87O0VBRWxDO0VBQ0EsSUFBTUMsWUFBWSxHQUFHZCxRQUFRLENBQUNZLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDbERFLFlBQVksQ0FBQ0QsU0FBUyxHQUFHLGVBQWU7O0VBRXhDO0VBQ0EsSUFBTUUsV0FBVyxHQUFHZixRQUFRLENBQUNZLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDakRHLFdBQVcsQ0FBQ0YsU0FBUyxHQUFHLGNBQWM7RUFDdEMsSUFBTUcsVUFBVSxHQUFHaEIsUUFBUSxDQUFDWSxhQUFhLENBQUMsSUFBSSxDQUFDO0VBQy9DSSxVQUFVLENBQUNDLFdBQVcsR0FBRyxhQUFhO0VBQ3RDRixXQUFXLENBQUNULFdBQVcsQ0FBQ1UsVUFBVSxDQUFDOztFQUVuQztFQUNBLElBQU1FLFdBQVcsR0FBR2xCLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLE1BQU0sQ0FBQztFQUNsRE0sV0FBVyxDQUFDTCxTQUFTLEdBQUcsT0FBTztFQUMvQkssV0FBVyxDQUFDRCxXQUFXLEdBQUcsR0FBRztFQUM3QkYsV0FBVyxDQUFDVCxXQUFXLENBQUNZLFdBQVcsQ0FBQzs7RUFFcEM7RUFDQSxJQUFNQyxTQUFTLEdBQUduQixRQUFRLENBQUNZLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDL0NPLFNBQVMsQ0FBQ04sU0FBUyxHQUFHLFlBQVk7O0VBRWxDO0VBQ0EsSUFBTU8sU0FBUyxHQUFHcEIsUUFBUSxDQUFDWSxhQUFhLENBQUMsT0FBTyxDQUFDO0VBQ2pEUSxTQUFTLENBQUNILFdBQVcsR0FBRyxlQUFlO0VBQ3ZDLElBQU1JLFNBQVMsR0FBR3JCLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUNqRFMsU0FBUyxDQUFDQyxJQUFJLEdBQUcsTUFBTTtFQUN2QkQsU0FBUyxDQUFDRSxFQUFFLEdBQUcsYUFBYTtFQUM1QkYsU0FBUyxDQUFDUixTQUFTLEdBQUcsY0FBYztFQUNwQ00sU0FBUyxDQUFDYixXQUFXLENBQUNjLFNBQVMsQ0FBQztFQUNoQ0QsU0FBUyxDQUFDYixXQUFXLENBQUNlLFNBQVMsQ0FBQzs7RUFFaEM7RUFDQSxJQUFNRyxVQUFVLEdBQUd4QixRQUFRLENBQUNZLGFBQWEsQ0FBQyxPQUFPLENBQUM7RUFDbERZLFVBQVUsQ0FBQ1AsV0FBVyxHQUFHLFFBQVE7RUFDakMsSUFBTVEsV0FBVyxHQUFHekIsUUFBUSxDQUFDWSxhQUFhLENBQUMsUUFBUSxDQUFDO0VBQ3BEYSxXQUFXLENBQUNGLEVBQUUsR0FBRyxjQUFjO0VBQy9CRSxXQUFXLENBQUNaLFNBQVMsR0FBRyxjQUFjO0VBQ3RDLElBQU1hLFlBQVksR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQztFQUNyREEsWUFBWSxDQUFDQyxPQUFPLENBQUMsVUFBQUMsTUFBTSxFQUFJO0lBQzdCLElBQU1DLGFBQWEsR0FBRzdCLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUN0RGlCLGFBQWEsQ0FBQ1osV0FBVyxHQUFHVyxNQUFNO0lBQ2xDSCxXQUFXLENBQUNuQixXQUFXLENBQUN1QixhQUFhLENBQUM7RUFDeEMsQ0FBQyxDQUFDO0VBQ0ZWLFNBQVMsQ0FBQ2IsV0FBVyxDQUFDa0IsVUFBVSxDQUFDO0VBQ2pDTCxTQUFTLENBQUNiLFdBQVcsQ0FBQ21CLFdBQVcsQ0FBQzs7RUFFbEM7RUFDQSxJQUFNSyxVQUFVLEdBQUc5QixRQUFRLENBQUNZLGFBQWEsQ0FBQyxRQUFRLENBQUM7RUFDbkRrQixVQUFVLENBQUNqQixTQUFTLEdBQUcsaUJBQWlCO0VBQ3hDaUIsVUFBVSxDQUFDYixXQUFXLEdBQUcsTUFBTTtFQUMvQkUsU0FBUyxDQUFDYixXQUFXLENBQUN3QixVQUFVLENBQUM7O0VBRWpDO0VBQ0FoQixZQUFZLENBQUNSLFdBQVcsQ0FBQ1MsV0FBVyxDQUFDO0VBQ3JDRCxZQUFZLENBQUNSLFdBQVcsQ0FBQ2EsU0FBUyxDQUFDO0VBQ25DUixjQUFjLENBQUNMLFdBQVcsQ0FBQ1EsWUFBWSxDQUFDOztFQUV4QztFQUNBSSxXQUFXLENBQUNmLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQzFDUSxjQUFjLENBQUNvQixLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0VBQ3ZDLENBQUMsQ0FBQzs7RUFFRjtFQUNBRixVQUFVLENBQUMzQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUN6QyxJQUFNOEIsV0FBVyxHQUFHWixTQUFTLENBQUNhLEtBQUs7SUFDbkMsSUFBTUMsWUFBWSxHQUFHVixXQUFXLENBQUNTLEtBQUs7SUFDdENFLE9BQU8sQ0FBQ0MsR0FBRyxrQkFBQUMsTUFBQSxDQUFrQkwsV0FBVyxlQUFBSyxNQUFBLENBQVlILFlBQVksQ0FBRSxDQUFDO0lBQ25FO0lBQ0FJLFVBQVUsQ0FBQyxDQUFDO0lBQ1pDLFlBQVksQ0FBQ1AsV0FBVyxDQUFDO0lBR3pCLFNBQVNRLGVBQWVBLENBQUNDLFVBQVUsRUFBQztNQUNsQyxJQUFNQyxRQUFRLEdBQUcsQ0FBQ0QsVUFBVSxDQUFDO0lBQy9CO0VBQ0YsQ0FBQyxDQUFDOztFQUVGO0VBQ0EsU0FBU0gsVUFBVUEsQ0FBQSxFQUFHO0lBQ3BCNUIsY0FBYyxDQUFDb0IsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtFQUd2Qzs7RUFFQTtFQUNBLFNBQVNZLFNBQVNBLENBQUEsRUFBRztJQUNuQmpDLGNBQWMsQ0FBQ29CLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE9BQU87SUFDdEN4QixTQUFTLENBQUNxQyxNQUFNLENBQUNsQyxjQUFjLENBQUM7RUFDbEM7RUFFQSxTQUFTNkIsWUFBWUEsQ0FBQ1AsV0FBVyxFQUFFYSxLQUFLLEVBQUM7SUFDdkMsSUFBTUMsUUFBUSxHQUFHL0MsUUFBUSxDQUFDWSxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQzdDbUMsUUFBUSxDQUFDbEMsU0FBUyxHQUFHLGlCQUFpQjtJQUN0Q2tDLFFBQVEsQ0FBQ0MsWUFBWSxDQUFDLFlBQVksRUFBRUYsS0FBSyxDQUFDO0lBQzFDO0lBQ0EsSUFBTUcsSUFBSSxHQUFHakQsUUFBUSxDQUFDWSxhQUFhLENBQUMsR0FBRyxDQUFDO0lBQ3hDcUMsSUFBSSxDQUFDcEMsU0FBUyxHQUFHLHFCQUFxQjs7SUFHdEM7SUFDQWtDLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDSSxJQUFJLENBQUM7SUFDckJGLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDWixXQUFXLENBQUM7SUFJNUJ4QixZQUFZLENBQUNvQyxNQUFNLENBQUNFLFFBQVEsQ0FBQztFQUMvQjs7RUFFQTtFQUNBLE9BQU87SUFDTEgsU0FBUyxFQUFUQSxTQUFTO0lBQ1RMLFVBQVUsRUFBVkE7RUFDRixDQUFDO0FBQ0gsQ0FBQyxDQUFFLENBQUM7QUFFSixpRUFBZTdCLEtBQUs7Ozs7Ozs7Ozs7Ozs7O0FDNUh0QixJQUFNRixTQUFTLEdBQUdSLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQztBQUN0RCxJQUFNRixZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGVBQWUsQ0FBQztBQUM3RCxJQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFVBQVUsQ0FBQzs7QUFHcEQ7QUFDZSxTQUFTTCxrQkFBa0JBLENBQUNZLFNBQVMsRUFBRU4sUUFBUSxFQUFFO0VBQzVEO0VBQ0FNLFNBQVMsQ0FBQzBDLFNBQVMsR0FBRyxFQUFFOztFQUV4QjtFQUNBLElBQU1DLGlCQUFpQixHQUFHbkQsUUFBUSxDQUFDWSxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3ZEdUMsaUJBQWlCLENBQUN0QyxTQUFTLEdBQUcsb0JBQW9COztFQUVsRDtFQUNBLElBQU11QyxlQUFlLEdBQUdwRCxRQUFRLENBQUNZLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDckR3QyxlQUFlLENBQUN2QyxTQUFTLEdBQUcsa0JBQWtCO0VBRTlDLElBQU13QyxhQUFhLEdBQUdyRCxRQUFRLENBQUNZLGFBQWEsQ0FBQyxPQUFPLENBQUM7RUFDckR5QyxhQUFhLENBQUNwQyxXQUFXLEdBQUcsbUJBQW1CO0VBRS9DLElBQU1xQyxhQUFhLEdBQUd0RCxRQUFRLENBQUNZLGFBQWEsQ0FBQyxPQUFPLENBQUM7RUFDckQwQyxhQUFhLENBQUNoQyxJQUFJLEdBQUcsTUFBTTtFQUMzQmdDLGFBQWEsQ0FBQy9CLEVBQUUsR0FBRyxrQkFBa0I7RUFDckMrQixhQUFhLENBQUNDLFdBQVcsR0FBRyx1QkFBdUI7RUFFbkQsSUFBTUMsY0FBYyxHQUFHeEQsUUFBUSxDQUFDWSxhQUFhLENBQUMsUUFBUSxDQUFDO0VBQ3ZENEMsY0FBYyxDQUFDdkMsV0FBVyxHQUFHLFFBQVE7RUFDckN1QyxjQUFjLENBQUMzQyxTQUFTLEdBQUcsaUJBQWlCO0VBQzVDMkMsY0FBYyxDQUFDckQsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDM0MsSUFBTXNELFdBQVcsR0FBR0gsYUFBYSxDQUFDcEIsS0FBSyxDQUFDd0IsSUFBSSxDQUFDLENBQUM7SUFDOUMsSUFBSUQsV0FBVyxLQUFLLEVBQUUsRUFBRTtNQUNwQnZELFFBQVEsQ0FBQ2UsV0FBVyxHQUFHd0MsV0FBVztNQUNsQztNQUNBckIsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLEVBQUVvQixXQUFXLENBQUM7SUFDcEQsQ0FBQyxNQUFNO01BQ0hFLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQztJQUMzQztFQUNKLENBQUMsQ0FBQztFQUVGUCxlQUFlLENBQUM5QyxXQUFXLENBQUMrQyxhQUFhLENBQUM7RUFDMUNELGVBQWUsQ0FBQzlDLFdBQVcsQ0FBQ2dELGFBQWEsQ0FBQztFQUMxQ0YsZUFBZSxDQUFDOUMsV0FBVyxDQUFDa0QsY0FBYyxDQUFDOztFQUUzQztFQUNBLElBQU1JLGNBQWMsR0FBRzVELFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNwRGdELGNBQWMsQ0FBQy9DLFNBQVMsR0FBRyxrQkFBa0I7RUFFN0MsSUFBTWdELFlBQVksR0FBRzdELFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUNwRGlELFlBQVksQ0FBQzVDLFdBQVcsR0FBRywyQkFBMkI7RUFFdEQsSUFBTTZDLGFBQWEsR0FBRzlELFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUN0RGtELGFBQWEsQ0FBQ3ZDLEVBQUUsR0FBRyxlQUFlO0VBQ2xDdUMsYUFBYSxDQUFDakQsU0FBUyxHQUFHLGNBQWM7RUFFeEMsSUFBTWtELE1BQU0sR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0VBQzlEQSxNQUFNLENBQUNwQyxPQUFPLENBQUMsVUFBQXFDLEtBQUssRUFBSTtJQUNwQixJQUFNcEMsTUFBTSxHQUFHNUIsUUFBUSxDQUFDWSxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQy9DZ0IsTUFBTSxDQUFDWCxXQUFXLEdBQUcrQyxLQUFLO0lBQzFCRixhQUFhLENBQUN4RCxXQUFXLENBQUNzQixNQUFNLENBQUM7RUFDckMsQ0FBQyxDQUFDO0VBRUZrQyxhQUFhLENBQUMzRCxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBTTtJQUMzQyxJQUFNOEQsYUFBYSxHQUFHSCxhQUFhLENBQUM1QixLQUFLLENBQUNnQyxXQUFXLENBQUMsQ0FBQztJQUN2RCxJQUFJRCxhQUFhLEtBQUssU0FBUyxFQUFFO01BQzdCekQsU0FBUyxDQUFDdUIsS0FBSyxDQUFDb0MsZUFBZSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUMsTUFBTTtNQUNIM0QsU0FBUyxDQUFDdUIsS0FBSyxDQUFDb0MsZUFBZSxHQUFHRixhQUFhO0lBQ25EO0VBQ0osQ0FBQyxDQUFDO0VBRUZMLGNBQWMsQ0FBQ3RELFdBQVcsQ0FBQ3VELFlBQVksQ0FBQztFQUN4Q0QsY0FBYyxDQUFDdEQsV0FBVyxDQUFDd0QsYUFBYSxDQUFDOztFQUV6QztFQUNBWCxpQkFBaUIsQ0FBQzdDLFdBQVcsQ0FBQzhDLGVBQWUsQ0FBQztFQUM5Q0QsaUJBQWlCLENBQUM3QyxXQUFXLENBQUNzRCxjQUFjLENBQUM7O0VBRTdDO0VBQ0FwRCxTQUFTLENBQUNGLFdBQVcsQ0FBQzZDLGlCQUFpQixDQUFDO0FBQzVDOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBOztBQUVvQztBQUNEOztBQUVuQztBQUNlLFNBQVN4RCxtQkFBbUJBLENBQUEsRUFBRztFQUMxQztFQUNBLElBQU0yRSxhQUFhLEdBQUd0RSxRQUFRLENBQUNZLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDbkQwRCxhQUFhLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixDQUFDO0VBRTdDLElBQU1DLElBQUksR0FBR3pFLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLE1BQU0sQ0FBQztFQUMzQzZELElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDOztFQUVoQztFQUNBLElBQU1FLFVBQVUsR0FBRzFFLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUNsRDhELFVBQVUsQ0FBQ3pELFdBQVcsR0FBRyxRQUFRO0VBQ2pDeUQsVUFBVSxDQUFDQyxPQUFPLEdBQUcsY0FBYztFQUNuQyxJQUFNQyxVQUFVLEdBQUc1RSxRQUFRLENBQUNZLGFBQWEsQ0FBQyxPQUFPLENBQUM7RUFDbERnRSxVQUFVLENBQUN0RCxJQUFJLEdBQUcsTUFBTTtFQUN4QnNELFVBQVUsQ0FBQ3JELEVBQUUsR0FBRyxjQUFjO0VBQzlCcUQsVUFBVSxDQUFDQyxJQUFJLEdBQUcsT0FBTztFQUN6QkQsVUFBVSxDQUFDRSxRQUFRLEdBQUcsSUFBSTs7RUFFMUI7RUFDQSxJQUFNQyxnQkFBZ0IsR0FBRy9FLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUN4RG1FLGdCQUFnQixDQUFDOUQsV0FBVyxHQUFHLGNBQWM7RUFDN0M4RCxnQkFBZ0IsQ0FBQ0osT0FBTyxHQUFHLG9CQUFvQjtFQUMvQyxJQUFNSyxnQkFBZ0IsR0FBR2hGLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLFVBQVUsQ0FBQztFQUMzRG9FLGdCQUFnQixDQUFDekQsRUFBRSxHQUFHLG9CQUFvQjtFQUMxQ3lELGdCQUFnQixDQUFDSCxJQUFJLEdBQUcsYUFBYTtFQUNyQ0csZ0JBQWdCLENBQUNGLFFBQVEsR0FBRyxJQUFJOztFQUVoQztFQUNBLElBQU1HLFlBQVksR0FBR2pGLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUNwRHFFLFlBQVksQ0FBQ2hFLFdBQVcsR0FBRyxXQUFXO0VBQ3RDZ0UsWUFBWSxDQUFDTixPQUFPLEdBQUcsZ0JBQWdCO0VBQ3ZDLElBQU1PLFlBQVksR0FBR2xGLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUNwRHNFLFlBQVksQ0FBQzVELElBQUksR0FBRyxNQUFNO0VBQzFCNEQsWUFBWSxDQUFDM0QsRUFBRSxHQUFHLGdCQUFnQjtFQUNsQzJELFlBQVksQ0FBQ0wsSUFBSSxHQUFHLFNBQVM7RUFDN0JLLFlBQVksQ0FBQ0osUUFBUSxHQUFHLElBQUk7O0VBRTVCO0VBQ0EsSUFBTUssYUFBYSxHQUFHbkYsUUFBUSxDQUFDWSxhQUFhLENBQUMsT0FBTyxDQUFDO0VBQ3JEdUUsYUFBYSxDQUFDbEUsV0FBVyxHQUFHLFdBQVc7RUFDdkNrRSxhQUFhLENBQUNSLE9BQU8sR0FBRyxpQkFBaUI7RUFDekMsSUFBTVMsY0FBYyxHQUFHcEYsUUFBUSxDQUFDWSxhQUFhLENBQUMsUUFBUSxDQUFDO0VBQ3ZEd0UsY0FBYyxDQUFDN0QsRUFBRSxHQUFHLGlCQUFpQjtFQUNyQzZELGNBQWMsQ0FBQ1AsSUFBSSxHQUFHLFVBQVU7RUFDaENPLGNBQWMsQ0FBQ04sUUFBUSxHQUFHLElBQUk7RUFFOUIsSUFBTU8sZUFBZSxHQUFHLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUM7RUFDakRBLGVBQWUsQ0FBQzFELE9BQU8sQ0FBQyxVQUFBMkQsVUFBVSxFQUFJO0lBQ2xDLElBQU0xRCxNQUFNLEdBQUc1QixRQUFRLENBQUNZLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDL0NnQixNQUFNLENBQUNNLEtBQUssR0FBR29ELFVBQVUsQ0FBQ3BCLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZDdEMsTUFBTSxDQUFDWCxXQUFXLEdBQUdxRSxVQUFVO0lBQy9CRixjQUFjLENBQUM5RSxXQUFXLENBQUNzQixNQUFNLENBQUM7RUFDdEMsQ0FBQyxDQUFDOztFQUVGO0VBQ0EsSUFBTTJELFlBQVksR0FBR3ZGLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUNyRDJFLFlBQVksQ0FBQ2pFLElBQUksR0FBRyxRQUFRO0VBQzVCaUUsWUFBWSxDQUFDdEUsV0FBVyxHQUFHLGdCQUFnQjs7RUFFM0M7RUFDQXdELElBQUksQ0FBQ25FLFdBQVcsQ0FBQ29FLFVBQVUsQ0FBQztFQUM1QkQsSUFBSSxDQUFDbkUsV0FBVyxDQUFDc0UsVUFBVSxDQUFDO0VBQzVCSCxJQUFJLENBQUNuRSxXQUFXLENBQUN5RSxnQkFBZ0IsQ0FBQztFQUNsQ04sSUFBSSxDQUFDbkUsV0FBVyxDQUFDMEUsZ0JBQWdCLENBQUM7RUFDbENQLElBQUksQ0FBQ25FLFdBQVcsQ0FBQzJFLFlBQVksQ0FBQztFQUM5QlIsSUFBSSxDQUFDbkUsV0FBVyxDQUFDNEUsWUFBWSxDQUFDO0VBQzlCVCxJQUFJLENBQUNuRSxXQUFXLENBQUM2RSxhQUFhLENBQUM7RUFDL0JWLElBQUksQ0FBQ25FLFdBQVcsQ0FBQzhFLGNBQWMsQ0FBQztFQUNoQ1gsSUFBSSxDQUFDbkUsV0FBVyxDQUFDaUYsWUFBWSxDQUFDOztFQUU5QjtFQUNBakIsYUFBYSxDQUFDaEUsV0FBVyxDQUFDbUUsSUFBSSxDQUFDOztFQUcvQjtFQUNBQSxJQUFJLENBQUN0RSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQ3FGLEtBQUssRUFBSztJQUN2Q0EsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUN0QjtJQUNBckIsaURBQU8sQ0FBQ1EsVUFBVSxDQUFDMUMsS0FBSyxFQUFFOEMsZ0JBQWdCLENBQUM5QyxLQUFLLEVBQUVrRCxjQUFjLENBQUNsRCxLQUFLLEVBQUVnRCxZQUFZLENBQUNoRCxLQUFLLENBQUM7SUFDM0ZvQyxhQUFhLENBQUMvRCxNQUFNLENBQUMsQ0FBQztFQUUxQixDQUFDLENBQUM7RUFHRixPQUFPa0UsSUFBSTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRkEsSUFBTWpFLFNBQVMsR0FBR1IsUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFDOztBQUV0RDtBQUNnRDtBQUNiO0FBRW5DLElBQU15RixPQUFPLEdBQUcsRUFBRTtBQUFBLElBRUdDLFNBQVM7RUFDMUIsU0FBQUEsVUFBYUMsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFDO0lBQUFDLGVBQUEsT0FBQUwsU0FBQTtJQUMvQztJQUNBLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQSxXQUFXO0lBQzlCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0VBQ2hDO0VBQUMsT0FBQUUsWUFBQSxDQUFBTixTQUFBO0lBQUFPLEdBQUE7SUFBQWhFLEtBQUEsRUFFRCxTQUFBaUUsVUFBVUMsR0FBRyxFQUFDO01BQ1Y1RixTQUFTLENBQUMwQyxTQUFTLEdBQUcsRUFBRTtNQUN4QmtELEdBQUcsQ0FBQ3pFLE9BQU8sQ0FBQyxVQUFBMEUsT0FBTyxFQUFJO1FBQ25CaEMsdURBQU8sQ0FBQ2dDLE9BQU8sQ0FBQ1QsS0FBSyxFQUFFUyxPQUFPLENBQUNSLFdBQVcsRUFBRVEsT0FBTyxDQUFDUCxPQUFPLEVBQUVPLE9BQU8sQ0FBQ04sUUFBUSxDQUFDO01BQ2xGLENBQUMsQ0FBQztNQUNGdkYsU0FBUyxDQUFDcUMsTUFBTSxDQUFDbEQsd0RBQW1CLENBQUMsQ0FBQyxDQUFDO01BQ3ZDeUMsT0FBTyxDQUFDQyxHQUFHLENBQUNxRCxPQUFPLENBQUM7SUFDeEI7RUFBQztBQUFBO0FBaEI2QjtBQW1COUIsU0FBU1MsU0FBU0EsQ0FBQ0MsR0FBRyxFQUFDO0VBQ25CNUYsU0FBUyxDQUFDMEMsU0FBUyxHQUFHLEVBQUU7RUFDeEJrRCxHQUFHLENBQUN6RSxPQUFPLENBQUMsVUFBQTBFLE9BQU8sRUFBSTtJQUNuQmhDLHVEQUFPLENBQUNnQyxPQUFPLENBQUNULEtBQUssRUFBRVMsT0FBTyxDQUFDUixXQUFXLEVBQUVRLE9BQU8sQ0FBQ1AsT0FBTyxFQUFFTyxPQUFPLENBQUNOLFFBQVEsQ0FBQztFQUNsRixDQUFDLENBQUM7RUFDRnZGLFNBQVMsQ0FBQ3FDLE1BQU0sQ0FBQ2xELHdEQUFtQixDQUFDLENBQUMsQ0FBQztBQUUzQztBQUdPLFNBQVN5RSxPQUFPQSxDQUFDd0IsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0VBQzNELElBQU1RLFVBQVUsR0FBRyxJQUFJWixTQUFTLENBQUNDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsQ0FBQztFQUN2RUwsT0FBTyxDQUFDYyxJQUFJLENBQUNELFVBQVUsQ0FBQztFQUN4QkosU0FBUyxDQUFDVCxPQUFPLENBQUM7RUFDbEJ0RCxPQUFPLENBQUNDLEdBQUcsQ0FBQ3FELE9BQU8sQ0FBQztBQUV4QjtBQUdPLFNBQVNlLGNBQWNBLENBQUNDLE9BQU8sRUFBRTtFQUNwQyxJQUFNQyxjQUFjLEdBQUdDLFFBQVEsQ0FBQ0YsT0FBTyxDQUFDRyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7RUFDbkUsSUFBSUMsZUFBZSxHQUFHQyxPQUFPLENBQUMsNENBQTRDLENBQUM7RUFFM0UsSUFBSUQsZUFBZSxFQUFFO0lBQ2pCcEIsT0FBTyxDQUFDc0IsTUFBTSxDQUFDTCxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDUixTQUFTLENBQUNULE9BQU8sQ0FBQztJQUNsQnRELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDcUQsT0FBTyxDQUFDO0VBQ3hCLENBQUMsTUFBTTtJQUNMUyxTQUFTLENBQUNULE9BQU8sQ0FBQztJQUNsQnRELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDcUQsT0FBTyxDQUFDO0VBRXRCO0FBQ0o7Ozs7Ozs7Ozs7Ozs7OztBQzNEMkM7QUFFM0MsSUFBTWxGLFNBQVMsR0FBR1IsUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFDO0FBRXZDLFNBQVNvRSxPQUFPQSxDQUFDNEMsU0FBUyxFQUFFQyxlQUFlLEVBQUVDLFlBQVksRUFBRUMsV0FBVyxFQUFFdEUsS0FBSyxFQUFFO0VBQzVGO0VBQ0EsSUFBTXVFLElBQUksR0FBR3JILFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLEtBQUssQ0FBQztFQUMxQ3lHLElBQUksQ0FBQ3hHLFNBQVMsR0FBRyxnQkFBZ0I7RUFDakN3RyxJQUFJLENBQUNyRSxZQUFZLENBQUMsWUFBWSxFQUFFRixLQUFLLENBQUM7RUFFdEMsSUFBTXdFLEdBQUcsR0FBR3RILFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLEtBQUssQ0FBQztFQUN6QzBHLEdBQUcsQ0FBQ3pHLFNBQVMsR0FBRyxnQkFBZ0I7RUFFaEMsSUFBTTBHLE9BQU8sR0FBR3ZILFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLEtBQUssQ0FBQztFQUM3QzJHLE9BQU8sQ0FBQzFHLFNBQVMsR0FBRyxtR0FBbUc7RUFFdkgsSUFBTW9DLElBQUksR0FBR2pELFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUN4Q3FDLElBQUksQ0FBQ3BDLFNBQVMsR0FBRyxvQkFBb0I7RUFFckMsSUFBTTJHLFFBQVEsR0FBR3hILFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUNoRDRHLFFBQVEsQ0FBQ2xHLElBQUksR0FBRyxVQUFVO0VBQzFCa0csUUFBUSxDQUFDM0csU0FBUyxHQUFHLGNBQWM7RUFDbkMyRyxRQUFRLENBQUNDLFNBQVMsR0FBRyxlQUFlO0VBRXBDLElBQU1DLE9BQU8sR0FBRzFILFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLEtBQUssQ0FBQztFQUM3QzhHLE9BQU8sQ0FBQzdHLFNBQVMsR0FBRyxXQUFXO0VBRS9CLElBQU04RyxRQUFRLEdBQUczSCxRQUFRLENBQUNZLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDOUMrRyxRQUFRLENBQUM5RyxTQUFTLEdBQUcsV0FBVztFQUVoQyxJQUFNK0UsS0FBSyxHQUFHNUYsUUFBUSxDQUFDWSxhQUFhLENBQUMsSUFBSSxDQUFDO0VBQzFDZ0YsS0FBSyxDQUFDL0UsU0FBUyxHQUFHLFlBQVk7RUFDOUIrRSxLQUFLLENBQUMzRSxXQUFXLEdBQUdnRyxTQUFTO0VBRTdCLElBQU1wQixXQUFXLEdBQUc3RixRQUFRLENBQUNZLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDL0NpRixXQUFXLENBQUNoRixTQUFTLEdBQUcsdUJBQXVCO0VBQy9DZ0YsV0FBVyxDQUFDNUUsV0FBVyxHQUFHaUcsZUFBZTtFQUV6QyxJQUFNbkIsUUFBUSxHQUFHL0YsUUFBUSxDQUFDWSxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQzVDbUYsUUFBUSxDQUFDbEYsU0FBUyxHQUFHLG9CQUFvQjtFQUN6Q2tGLFFBQVEsQ0FBQzdDLFNBQVMsMEVBQUFaLE1BQUEsQ0FBc0U2RSxZQUFZLGFBQVU7RUFFOUcsSUFBTXJCLE9BQU8sR0FBRzlGLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUMzQ2tGLE9BQU8sQ0FBQ2pGLFNBQVMsR0FBRyxXQUFXO0VBQy9CaUYsT0FBTyxDQUFDNUMsU0FBUyx1R0FBQVosTUFBQSxDQUFpRzhFLFdBQVcsb0JBQWlCO0VBRTlJLElBQU1RLGVBQWUsR0FBRzVILFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNyRGdILGVBQWUsQ0FBQy9HLFNBQVMsR0FBRyxtREFBbUQ7RUFFL0UsSUFBTWdILFdBQVcsR0FBRzdILFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLEtBQUssQ0FBQztFQUVqRCxJQUFNa0gsVUFBVSxHQUFHOUgsUUFBUSxDQUFDWSxhQUFhLENBQUMsUUFBUSxDQUFDO0VBQ25Ea0gsVUFBVSxDQUFDakgsU0FBUyxHQUFHLHdCQUF3QjtFQUMvQ2lILFVBQVUsQ0FBQzVFLFNBQVMsR0FBRyxrQ0FBa0M7RUFFekQsSUFBTTZFLFlBQVksR0FBRy9ILFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUNyRG1ILFlBQVksQ0FBQ2xILFNBQVMsR0FBRyx1QkFBdUI7RUFDaERrSCxZQUFZLENBQUM3RSxTQUFTLEdBQUcscUNBQXFDO0VBRTlELElBQU04RSxpQkFBaUIsR0FBR2hJLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLEtBQUssQ0FBQztFQUN2RG9ILGlCQUFpQixDQUFDbkgsU0FBUyxHQUFHLFlBQVk7RUFDMUNtSCxpQkFBaUIsQ0FBQ3pHLEVBQUUsR0FBRyxnQkFBZ0I7RUFFdkMsSUFBTTBHLHFCQUFxQixHQUFHakksUUFBUSxDQUFDWSxhQUFhLENBQUMsT0FBTyxDQUFDO0VBQzdEcUgscUJBQXFCLENBQUNwSCxTQUFTLEdBQUcsa0JBQWtCO0VBQ3BEb0gscUJBQXFCLENBQUMzRyxJQUFJLEdBQUcsVUFBVTtFQUN2QzJHLHFCQUFxQixDQUFDMUcsRUFBRSxHQUFHLGVBQWU7RUFFMUMsSUFBTTJHLGtCQUFrQixHQUFHbEksUUFBUSxDQUFDWSxhQUFhLENBQUMsT0FBTyxDQUFDO0VBQzFEc0gsa0JBQWtCLENBQUNySCxTQUFTLEdBQUcsa0JBQWtCO0VBQ2pEcUgsa0JBQWtCLENBQUN2RCxPQUFPLEdBQUcsZUFBZTtFQUM1Q3VELGtCQUFrQixDQUFDakgsV0FBVyxHQUFHLFdBQVc7O0VBRTVDO0VBQ0FzRyxPQUFPLENBQUNqSCxXQUFXLENBQUMyQyxJQUFJLENBQUM7RUFDekJzRSxPQUFPLENBQUNqSCxXQUFXLENBQUNrSCxRQUFRLENBQUM7RUFFN0JLLFdBQVcsQ0FBQ3ZILFdBQVcsQ0FBQ3dILFVBQVUsQ0FBQztFQUNuQ0QsV0FBVyxDQUFDdkgsV0FBVyxDQUFDeUgsWUFBWSxDQUFDO0VBRXJDQyxpQkFBaUIsQ0FBQzFILFdBQVcsQ0FBQzJILHFCQUFxQixDQUFDO0VBQ3BERCxpQkFBaUIsQ0FBQzFILFdBQVcsQ0FBQzRILGtCQUFrQixDQUFDO0VBRWpETixlQUFlLENBQUN0SCxXQUFXLENBQUN1SCxXQUFXLENBQUM7RUFDeENELGVBQWUsQ0FBQ3RILFdBQVcsQ0FBQzBILGlCQUFpQixDQUFDO0VBRTlDTCxRQUFRLENBQUNySCxXQUFXLENBQUNzRixLQUFLLENBQUM7RUFDM0IrQixRQUFRLENBQUNySCxXQUFXLENBQUN1RixXQUFXLENBQUM7RUFDakM4QixRQUFRLENBQUNySCxXQUFXLENBQUN5RixRQUFRLENBQUM7RUFDOUI0QixRQUFRLENBQUNySCxXQUFXLENBQUN3RixPQUFPLENBQUM7RUFDN0I2QixRQUFRLENBQUNySCxXQUFXLENBQUNzSCxlQUFlLENBQUM7RUFFckNGLE9BQU8sQ0FBQ3BILFdBQVcsQ0FBQ3FILFFBQVEsQ0FBQztFQUU3QkwsR0FBRyxDQUFDaEgsV0FBVyxDQUFDaUgsT0FBTyxDQUFDO0VBQ3hCRCxHQUFHLENBQUNoSCxXQUFXLENBQUNvSCxPQUFPLENBQUM7RUFFeEJMLElBQUksQ0FBQy9HLFdBQVcsQ0FBQ2dILEdBQUcsQ0FBQzs7RUFFckI7RUFDQTlHLFNBQVMsQ0FBQ0YsV0FBVyxDQUFDK0csSUFBSSxDQUFDO0VBRTNCVSxZQUFZLENBQUM1SCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSTtJQUN6Q3NHLHdEQUFjLENBQUNZLElBQUksQ0FBQztFQUN0QixDQUFDLENBQUM7QUFDSjs7Ozs7O1VDekdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7OztBQ05BLElBQU03RyxTQUFTLEdBQUdSLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQzs7QUFHdEQ7QUFDb0M7QUFFTztBQUUzQ0oseURBQWEsQ0FBQ1csU0FBUyxDQUFDO0FBR3hCLElBQU0ySCxnQkFBZ0IsR0FBR25JLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGtCQUFrQixDQUFDO0FBRXBFa0ksZ0JBQWdCLENBQUNoSSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBSTtFQUMzQ08sc0RBQUssQ0FBQ2tDLFNBQVMsQ0FBQyxDQUFDO0FBQ3JCLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Byb2plY3REb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdGFza0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90b2RvRE9NLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5ld1Byb2plY3RQb3BVcEZvcm0gZnJvbSBcIi4vdGFza0Zvcm0uanNcIjtcclxuaW1wb3J0IGNyZWF0ZVNldHRpbmdzUGFnZSBmcm9tIFwiLi9zZXR0aW5ncy5qc1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHRvZG9GdW5jdGlvbnModGhlRGl2KXtcclxuY29uc3Qgc2V0dGluZ3NJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzSWNvbicpO1xyXG5jb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyTmFtZScpO1xyXG5zZXR0aW5nc0ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgY3JlYXRlU2V0dGluZ3NQYWdlKHRoZURpdiwgdXNlck5hbWUpXHJcbn0pXHJcblxyXG5cclxuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrJylcclxubGV0IGlzT24gPSAgdHJ1ZVxyXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGlmKGlzT24pe1xyXG4gICAgICAgIHRoZURpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0UG9wVXBGb3JtKCkpXHJcbiAgICB9ZWxzZXtcclxuICAgICAgIG5ld1Byb2plY3RQb3BVcEZvcm0oKS5yZW1vdmUoKVxyXG4gICAgfVxyXG4gICAgaXNPbiA9ICFpc09uXHJcbn0pXHJcblxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZG9GdW5jdGlvbnMiLCIvLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgbW9kYWwgYXMgYSBkZWZhdWx0IG1vZHVsZVxyXG5jb25zdCB0YXNrU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1NwYWNlJylcclxuY29uc3QgbmV3UHJvamVjdFVMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3RVTCcpXHJcblxyXG5jb25zdCBtb2RhbCA9IChmdW5jdGlvbigpIHtcclxuICAgIC8vIE1vZGFsIGNvbnRhaW5lclxyXG4gICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdtb2RhbCc7XHJcbiAgXHJcbiAgICAvLyBNb2RhbCBjb250ZW50XHJcbiAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsQ29udGVudC5jbGFzc05hbWUgPSAnbW9kYWwtY29udGVudCc7XHJcbiAgXHJcbiAgICAvLyBNb2RhbCBoZWFkZXJcclxuICAgIGNvbnN0IG1vZGFsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb2RhbEhlYWRlci5jbGFzc05hbWUgPSAnbW9kYWwtaGVhZGVyJztcclxuICAgIGNvbnN0IG1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgbW9kYWxUaXRsZS50ZXh0Q29udGVudCA9ICdOZXcgUHJvamVjdCc7XHJcbiAgICBtb2RhbEhlYWRlci5hcHBlbmRDaGlsZChtb2RhbFRpdGxlKTtcclxuICBcclxuICAgIC8vIENsb3NlIGJ1dHRvblxyXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBjbG9zZUJ1dHRvbi5jbGFzc05hbWUgPSAnY2xvc2UnO1xyXG4gICAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSAnw5cnO1xyXG4gICAgbW9kYWxIZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xyXG4gIFxyXG4gICAgLy8gTW9kYWwgYm9keVxyXG4gICAgY29uc3QgbW9kYWxCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb2RhbEJvZHkuY2xhc3NOYW1lID0gJ21vZGFsLWJvZHknO1xyXG4gIFxyXG4gICAgLy8gUHJvamVjdCBOYW1lIGlucHV0XHJcbiAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QgTmFtZTonO1xyXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIG5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgbmFtZUlucHV0LmlkID0gJ3Byb2plY3ROYW1lJztcclxuICAgIG5hbWVJbnB1dC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcclxuICAgIG1vZGFsQm9keS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xyXG4gICAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XHJcbiAgXHJcbiAgICAvLyBPcHRpb25hbCBDb2xvciBTZWxlY3RvciAoZXhhbXBsZSlcclxuICAgIGNvbnN0IGNvbG9yTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgY29sb3JMYWJlbC50ZXh0Q29udGVudCA9ICdDb2xvcjonO1xyXG4gICAgY29uc3QgY29sb3JTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgIGNvbG9yU2VsZWN0LmlkID0gJ3Byb2plY3RDb2xvcic7XHJcbiAgICBjb2xvclNlbGVjdC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcclxuICAgIGNvbnN0IGNvbG9yT3B0aW9ucyA9IFsnTm9uZScsICdSZWQnLCAnR3JlZW4nLCAnQmx1ZSddO1xyXG4gICAgY29sb3JPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICBvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gb3B0aW9uO1xyXG4gICAgICBjb2xvclNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcclxuICAgIH0pO1xyXG4gICAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKGNvbG9yTGFiZWwpO1xyXG4gICAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKGNvbG9yU2VsZWN0KTtcclxuICBcclxuICAgIC8vIFNhdmUgYnV0dG9uXHJcbiAgICBjb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBzYXZlQnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLXByaW1hcnknO1xyXG4gICAgc2F2ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdTYXZlJztcclxuICAgIG1vZGFsQm9keS5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcclxuICBcclxuICAgIC8vIEFwcGVuZCBhbGwgcGFydHMgdG8gbW9kYWwgY29udGVudFxyXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsSGVhZGVyKTtcclxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbEJvZHkpO1xyXG4gICAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcclxuICBcclxuICAgIC8vIEV2ZW50IGxpc3RlbmVyIGZvciBjbG9zZSBidXR0b25cclxuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICAvLyBFdmVudCBsaXN0ZW5lciBmb3IgU2F2ZSBidXR0b24gKGV4YW1wbGUpXHJcbiAgICBzYXZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IG5hbWVJbnB1dC52YWx1ZTtcclxuICAgICAgY29uc3QgcHJvamVjdENvbG9yID0gY29sb3JTZWxlY3QudmFsdWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBQcm9qZWN0IE5hbWU6ICR7cHJvamVjdE5hbWV9LCBDb2xvcjogJHtwcm9qZWN0Q29sb3J9YCk7XHJcbiAgICAgIC8vIEltcGxlbWVudCB5b3VyIHNhdmUgbG9naWMgaGVyZVxyXG4gICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICAgIGFkZFByb2plY3RVSShwcm9qZWN0TmFtZSlcclxuXHJcblxyXG4gICAgICBmdW5jdGlvbiBuZXdBcnJheVByb2plY3QobmV3UHJvamVjdCl7XHJcbiAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBbbmV3UHJvamVjdF1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICAvLyBGdW5jdGlvbiB0byBjbG9zZSB0aGUgbW9kYWxcclxuICAgIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XHJcbiAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG5cclxuICAgIH1cclxuICBcclxuICAgIC8vIEZ1bmN0aW9uIHRvIG9wZW4gdGhlIG1vZGFsXHJcbiAgICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XHJcbiAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICB0YXNrU3BhY2UuYXBwZW5kKG1vZGFsQ29udGFpbmVyKVxyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdFVJKHByb2plY3ROYW1lLCBpbmRleCl7XHJcbiAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgbGlzdEl0ZW0uY2xhc3NOYW1lID0gJ2xpc3QtZ3JvdXAtaXRlbSc7XHJcbiAgICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KVxyXG4gICAgICAvLyBDcmVhdGUgYW4gaWNvbiBlbGVtZW50XHJcbiAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgIGljb24uY2xhc3NOYW1lID0gJ2ZhLXNvbGlkIGZhLWhhc2h0YWcnO1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIC8vIEFwcGVuZCB0aGUgaWNvbiBhbmQgdGV4dCBub2RlIHRvIHRoZSBsaXN0IGl0ZW1cclxuICAgICAgbGlzdEl0ZW0uYXBwZW5kKGljb24pO1xyXG4gICAgICBsaXN0SXRlbS5hcHBlbmQocHJvamVjdE5hbWUpO1xyXG4gICAgICBcclxuXHJcbiAgICBcclxuICAgICAgbmV3UHJvamVjdFVMLmFwcGVuZChsaXN0SXRlbSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBFeHBvcnQgbW9kYWwgZnVuY3Rpb25zXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBvcGVuTW9kYWwsXHJcbiAgICAgIGNsb3NlTW9kYWxcclxuICAgIH07XHJcbiAgfSkoKTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBtb2RhbDtcclxuICBcclxuICIsImNvbnN0IHRhc2tTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrU3BhY2UnKTtcclxuY29uc3Qgc2V0dGluZ3NJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzSWNvbnMnKTtcclxuY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlck5hbWUnKTtcclxuXHJcblxyXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgYW5kIGV4cG9ydCB0aGUgc2V0dGluZ3MgcGFnZVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTZXR0aW5nc1BhZ2UodGFza1NwYWNlLCB1c2VyTmFtZSkge1xyXG4gICAgLy8gQ2xlYXIgZXhpc3RpbmcgY29udGVudCBpbiB0YXNrU3BhY2VcclxuICAgIHRhc2tTcGFjZS5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAvLyBTZXR0aW5ncyBQYWdlIEVsZW1lbnRzXHJcbiAgICBjb25zdCBzZXR0aW5nc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2V0dGluZ3NDb250YWluZXIuY2xhc3NOYW1lID0gJ3NldHRpbmdzLWNvbnRhaW5lcic7XHJcblxyXG4gICAgLy8gVXNlcm5hbWUgQ2hhbmdlIFNlY3Rpb25cclxuICAgIGNvbnN0IHVzZXJuYW1lU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdXNlcm5hbWVTZWN0aW9uLmNsYXNzTmFtZSA9ICdzZXR0aW5ncy1zZWN0aW9uJztcclxuXHJcbiAgICBjb25zdCB1c2VybmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIHVzZXJuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnQ2hhbmdlIFVzZXJuYW1lOiAnO1xyXG5cclxuICAgIGNvbnN0IHVzZXJuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdXNlcm5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgdXNlcm5hbWVJbnB1dC5pZCA9ICduZXdVc2VybmFtZUlucHV0JztcclxuICAgIHVzZXJuYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgbmV3IHVzZXJuYW1lLi4uJztcclxuXHJcbiAgICBjb25zdCB1c2VybmFtZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdXNlcm5hbWVCdXR0b24udGV4dENvbnRlbnQgPSAnQ2hhbmdlJztcclxuICAgIHVzZXJuYW1lQnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLXByaW1hcnknO1xyXG4gICAgdXNlcm5hbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3VXNlcm5hbWUgPSB1c2VybmFtZUlucHV0LnZhbHVlLnRyaW0oKTtcclxuICAgICAgICBpZiAobmV3VXNlcm5hbWUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gbmV3VXNlcm5hbWU7XHJcbiAgICAgICAgICAgIC8vIFlvdSBjYW4gc2F2ZSB0aGUgbmV3IHVzZXJuYW1lIHRvIGxvY2FsU3RvcmFnZSBvciBzZW5kIGl0IHRvIGEgc2VydmVyIGhlcmVcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzZXJuYW1lIGNoYW5nZWQgdG86JywgbmV3VXNlcm5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYSB2YWxpZCB1c2VybmFtZS4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VybmFtZVNlY3Rpb24uYXBwZW5kQ2hpbGQodXNlcm5hbWVMYWJlbCk7XHJcbiAgICB1c2VybmFtZVNlY3Rpb24uYXBwZW5kQ2hpbGQodXNlcm5hbWVJbnB1dCk7XHJcbiAgICB1c2VybmFtZVNlY3Rpb24uYXBwZW5kQ2hpbGQodXNlcm5hbWVCdXR0b24pO1xyXG5cclxuICAgIC8vIEJhY2tncm91bmQgQ29sb3IgQ2hhbmdlIFNlY3Rpb25cclxuICAgIGNvbnN0IGJnQ29sb3JTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBiZ0NvbG9yU2VjdGlvbi5jbGFzc05hbWUgPSAnc2V0dGluZ3Mtc2VjdGlvbic7XHJcblxyXG4gICAgY29uc3QgYmdDb2xvckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGJnQ29sb3JMYWJlbC50ZXh0Q29udGVudCA9ICdDaGFuZ2UgQmFja2dyb3VuZCBDb2xvcjogJztcclxuXHJcbiAgICBjb25zdCBiZ0NvbG9yU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICBiZ0NvbG9yU2VsZWN0LmlkID0gJ2JnQ29sb3JTZWxlY3QnO1xyXG4gICAgYmdDb2xvclNlbGVjdC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcclxuXHJcbiAgICBjb25zdCBjb2xvcnMgPSBbJ0RlZmF1bHQnLCAnQmx1ZScsICdHcmVlbicsICdZZWxsb3cnLCAnUmVkJ107IC8vIEV4YW1wbGUgY29sb3JzXHJcbiAgICBjb2xvcnMuZm9yRWFjaChjb2xvciA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY29sb3I7XHJcbiAgICAgICAgYmdDb2xvclNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYmdDb2xvclNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDb2xvciA9IGJnQ29sb3JTZWxlY3QudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRDb2xvciA9PT0gJ2RlZmF1bHQnKSB7XHJcbiAgICAgICAgICAgIHRhc2tTcGFjZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJzsgLy8gUmVzZXQgdG8gZGVmYXVsdFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhc2tTcGFjZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzZWxlY3RlZENvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGJnQ29sb3JTZWN0aW9uLmFwcGVuZENoaWxkKGJnQ29sb3JMYWJlbCk7XHJcbiAgICBiZ0NvbG9yU2VjdGlvbi5hcHBlbmRDaGlsZChiZ0NvbG9yU2VsZWN0KTtcclxuXHJcbiAgICAvLyBBcHBlbmQgU2VjdGlvbnMgdG8gU2V0dGluZ3MgQ29udGFpbmVyXHJcbiAgICBzZXR0aW5nc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh1c2VybmFtZVNlY3Rpb24pO1xyXG4gICAgc2V0dGluZ3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYmdDb2xvclNlY3Rpb24pO1xyXG5cclxuICAgIC8vIEFwcGVuZCBTZXR0aW5ncyBDb250YWluZXIgdG8gdGFza1NwYWNlXHJcbiAgICB0YXNrU3BhY2UuYXBwZW5kQ2hpbGQoc2V0dGluZ3NDb250YWluZXIpO1xyXG59XHJcblxyXG4iLCIvLyBpbXBvcnQgJy4vY3NzL3Byb2plY3RET00uY3NzJztcclxuXHJcbmltcG9ydCB7IG5ld1Rhc2sgfSBmcm9tIFwiLi90b2RvLmpzXCI7XHJcbmltcG9ydCB0YXNrRE9NIGZyb20gXCIuL3RvZG9ET00uanNcIjtcclxuXHJcbi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhbmQgc2hvdyB0aGUgbmV3IHByb2plY3QgcG9wdXAgZm9ybVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdQcm9qZWN0UG9wVXBGb3JtKCkge1xyXG4gICAgLy8gQ3JlYXRlIGZvcm0gZWxlbWVudHNcclxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXInKTtcclxuXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdwb3B1cC1mb3JtJyk7XHJcblxyXG4gICAgLy8gVGl0bGVcclxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZTonO1xyXG4gICAgdGl0bGVMYWJlbC5odG1sRm9yID0gJ3Byb2plY3RUaXRsZSc7XHJcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICAgIHRpdGxlSW5wdXQuaWQgPSAncHJvamVjdFRpdGxlJztcclxuICAgIHRpdGxlSW5wdXQubmFtZSA9ICd0aXRsZSc7XHJcbiAgICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBEZXNjcmlwdGlvblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOic7XHJcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmh0bWxGb3IgPSAncHJvamVjdERlc2NyaXB0aW9uJztcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9ICdwcm9qZWN0RGVzY3JpcHRpb24nO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gJ2Rlc2NyaXB0aW9uJztcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICAgIC8vIER1ZSBEYXRlXHJcbiAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOic7XHJcbiAgICBkdWVEYXRlTGFiZWwuaHRtbEZvciA9ICdwcm9qZWN0RHVlRGF0ZSc7XHJcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XHJcbiAgICBkdWVEYXRlSW5wdXQuaWQgPSAncHJvamVjdER1ZURhdGUnO1xyXG4gICAgZHVlRGF0ZUlucHV0Lm5hbWUgPSAnZHVlRGF0ZSc7XHJcbiAgICBkdWVEYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICAgIC8vIFByaW9yaXR5XHJcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcclxuICAgIHByaW9yaXR5TGFiZWwuaHRtbEZvciA9ICdwcm9qZWN0UHJpb3JpdHknO1xyXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgIHByaW9yaXR5U2VsZWN0LmlkID0gJ3Byb2plY3RQcmlvcml0eSc7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5uYW1lID0gJ3ByaW9yaXR5JztcclxuICAgIHByaW9yaXR5U2VsZWN0LnJlcXVpcmVkID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbnMgPSBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddO1xyXG4gICAgcHJpb3JpdHlPcHRpb25zLmZvckVhY2gob3B0aW9uVGV4dCA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uVGV4dC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvblRleHQ7XHJcbiAgICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFN1Ym1pdCBCdXR0b25cclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgc3VibWl0QnV0dG9uLnR5cGUgPSAnc3VibWl0JztcclxuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDcmVhdGUgUHJvamVjdCc7XHJcblxyXG4gICAgLy8gQXBwZW5kIGVsZW1lbnRzIHRvIGZvcm1cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcblxyXG4gICAgLy8gQXBwZW5kIGZvcm0gdG8gZm9ybSBjb250YWluZXJcclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG5cclxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBjbG9zZSB0aGUgZm9ybSBvbiBzdWJtaXRcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBIYW5kbGUgZm9ybSBzdWJtaXNzaW9uIGxvZ2ljIGhlcmVcclxuICAgICAgICBuZXdUYXNrKHRpdGxlSW5wdXQudmFsdWUsIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsIHByaW9yaXR5U2VsZWN0LnZhbHVlLCBkdWVEYXRlSW5wdXQudmFsdWUpXHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci5yZW1vdmUoKTsgXHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHJldHVybiBmb3JtXHJcbn1cclxuXHJcbiIsImNvbnN0IHRhc2tTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrU3BhY2UnKVxyXG5cclxuLy8gaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCBuZXdQcm9qZWN0UG9wVXBGb3JtIGZyb20gXCIuL3Rhc2tGb3JtLmpzXCI7XHJcbmltcG9ydCB0YXNrRE9NIGZyb20gXCIuL3RvZG9ET00uanNcIjtcclxuXHJcbmNvbnN0IHRhc2tBcnIgPSBbXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGFza0FycmF5e1xyXG4gICAgY29uc3RydWN0b3IgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpe1xyXG4gICAgICAgIC8vIHRoaXMuaWQgPSB1dWlkdjQoKVxyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG59XHJcblxyXG5kaXNwbGF5ZXIoYXJyKXtcclxuICAgIHRhc2tTcGFjZS5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICBhcnIuZm9yRWFjaChhcnJJdGVtID0+IHtcclxuICAgICAgICB0YXNrRE9NKGFyckl0ZW0udGl0bGUsIGFyckl0ZW0uZGVzY3JpcHRpb24sIGFyckl0ZW0uZHVlRGF0ZSwgYXJySXRlbS5wcmlvcml0eSlcclxuICAgIH0pO1xyXG4gICAgdGFza1NwYWNlLmFwcGVuZChuZXdQcm9qZWN0UG9wVXBGb3JtKCkpXHJcbiAgICBjb25zb2xlLmxvZyh0YXNrQXJyKVxyXG59XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXllcihhcnIpe1xyXG4gICAgdGFza1NwYWNlLmlubmVySFRNTCA9IFwiXCJcclxuICAgIGFyci5mb3JFYWNoKGFyckl0ZW0gPT4ge1xyXG4gICAgICAgIHRhc2tET00oYXJySXRlbS50aXRsZSwgYXJySXRlbS5kZXNjcmlwdGlvbiwgYXJySXRlbS5kdWVEYXRlLCBhcnJJdGVtLnByaW9yaXR5KVxyXG4gICAgfSk7XHJcbiAgICB0YXNrU3BhY2UuYXBwZW5kKG5ld1Byb2plY3RQb3BVcEZvcm0oKSlcclxuICAgIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5ld1Rhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgY29uc3QgdGhlTmV3VGFzayA9IG5ldyB0YXNrQXJyYXkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XHJcbiAgICB0YXNrQXJyLnB1c2godGhlTmV3VGFzayk7XHJcbiAgICBkaXNwbGF5ZXIodGFza0FycilcclxuICAgIGNvbnNvbGUubG9nKHRhc2tBcnIpXHJcbiBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVGdW5jdGlvbih0aGVDYXJkKSB7XHJcbiAgICBjb25zdCBpbmRleEF0dHJpYnV0ZSA9IHBhcnNlSW50KHRoZUNhcmQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKSk7XHJcbiAgICB2YXIgY29uZmlybVRvUmVtb3ZlID0gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGlzIEJvb2s/Jyk7XHJcblxyXG4gICAgaWYgKGNvbmZpcm1Ub1JlbW92ZSkge1xyXG4gICAgICAgIHRhc2tBcnIuc3BsaWNlKGluZGV4QXR0cmlidXRlLCAxKTtcclxuICAgICAgICBkaXNwbGF5ZXIodGFza0FycilcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrQXJyKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcGxheWVyKHRhc2tBcnIpXHJcbiAgICAgIGNvbnNvbGUubG9nKHRhc2tBcnIpXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgZGVsZXRlRnVuY3Rpb24gfSBmcm9tIFwiLi90b2RvLmpzXCI7XHJcblxyXG5jb25zdCB0YXNrU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1NwYWNlJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrRE9NKHRpdGxlVGV4dCwgZGVzY3JpcHRpb25UZXh0LCBwcmlvcml0eVRleHQsIGR1ZURhdGVUZXh0LCBpbmRleCkge1xyXG4gIC8vIENyZWF0ZSB0YXNrIGNhcmQgZWxlbWVudHNcclxuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZC5jbGFzc05hbWUgPSAnY2FyZCB0YXNrLWNhcmQnO1xyXG4gIGNhcmQuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpXHJcblxyXG4gIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHJvdy5jbGFzc05hbWUgPSAncm93IG5vLWd1dHRlcnMnO1xyXG5cclxuICBjb25zdCBjb2xJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29sSWNvbi5jbGFzc05hbWUgPSAnY29sLW1kLTIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGJnLXByaW1hcnkgdGV4dC13aGl0ZSBwb3NpdGlvbi1yZWxhdGl2ZSc7XHJcblxyXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgaWNvbi5jbGFzc05hbWUgPSAnZmFzIGZhLXRhc2tzIGZhLTJ4JztcclxuXHJcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gIGNoZWNrYm94LmNsYXNzTmFtZSA9ICdiaWctY2hlY2tib3gnO1xyXG4gIGNoZWNrYm94LmFyaWFMYWJlbCA9ICdUYXNrIENvbXBsZXRlJztcclxuXHJcbiAgY29uc3QgY29sQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbEJvZHkuY2xhc3NOYW1lID0gJ2NvbC1tZC0xMCc7XHJcblxyXG4gIGNvbnN0IGNhcmRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZEJvZHkuY2xhc3NOYW1lID0gJ2NhcmQtYm9keSc7XHJcblxyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuICB0aXRsZS5jbGFzc05hbWUgPSAnY2FyZC10aXRsZSc7XHJcbiAgdGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZVRleHQ7XHJcblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGRlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICdjYXJkLXRleHQgZGVzY3JpcHRpb24nO1xyXG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb25UZXh0O1xyXG5cclxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwcmlvcml0eS5jbGFzc05hbWUgPSAnY2FyZC10ZXh0IHByaW9yaXR5JztcclxuICBwcmlvcml0eS5pbm5lckhUTUwgPSBgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPjxpIGNsYXNzPVwiZmFzIGZhLWZsYWdcIj48L2k+IFByaW9yaXR5OiAke3ByaW9yaXR5VGV4dH08L3NtYWxsPmA7XHJcblxyXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgZHVlRGF0ZS5jbGFzc05hbWUgPSAnY2FyZC10ZXh0JztcclxuICBkdWVEYXRlLmlubmVySFRNTCA9IGA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2FsZW5kYXItZGF5XCI+PC9pPiBEdWUgRGF0ZTogPHNwYW4gaWQ9XCJkdWVEYXRlXCI+JHtkdWVEYXRlVGV4dH08L3NwYW4+PC9zbWFsbD5gO1xyXG5cclxuICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBidXR0b25Db250YWluZXIuY2xhc3NOYW1lID0gJ2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXInO1xyXG5cclxuICBjb25zdCBidXR0b25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgZWRpdEJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi13YXJuaW5nIGJ0bi1zbSc7XHJcbiAgZWRpdEJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtZWRpdFwiPjwvaT4gRWRpdCc7XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi1kYW5nZXIgYnRuLXNtJztcclxuICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoXCI+PC9pPiBEZWxldGUnO1xyXG5cclxuICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdmb3JtLWNoZWNrJztcclxuICBjaGVja2JveENvbnRhaW5lci5pZCA9ICdkaXZGb3JDaGVja0JveCc7XHJcblxyXG4gIGNvbnN0IHRhc2tDb21wbGV0ZWRDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdGFza0NvbXBsZXRlZENoZWNrYm94LmNsYXNzTmFtZSA9ICdmb3JtLWNoZWNrLWlucHV0JztcclxuICB0YXNrQ29tcGxldGVkQ2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgdGFza0NvbXBsZXRlZENoZWNrYm94LmlkID0gJ3Rhc2tDb21wbGV0ZWQnO1xyXG5cclxuICBjb25zdCB0YXNrQ29tcGxldGVkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIHRhc2tDb21wbGV0ZWRMYWJlbC5jbGFzc05hbWUgPSAnZm9ybS1jaGVjay1sYWJlbCc7XHJcbiAgdGFza0NvbXBsZXRlZExhYmVsLmh0bWxGb3IgPSAndGFza0NvbXBsZXRlZCc7XHJcbiAgdGFza0NvbXBsZXRlZExhYmVsLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlZCc7XHJcblxyXG4gIC8vIEFwcGVuZCBlbGVtZW50c1xyXG4gIGNvbEljb24uYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgY29sSWNvbi5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcblxyXG4gIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xyXG4gIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XHJcblxyXG4gIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb21wbGV0ZWRDaGVja2JveCk7XHJcbiAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbXBsZXRlZExhYmVsKTtcclxuXHJcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkdyb3VwKTtcclxuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXIpO1xyXG5cclxuICBjYXJkQm9keS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcclxuICBjYXJkQm9keS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcclxuICBjYXJkQm9keS5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xyXG5cclxuICBjb2xCb2R5LmFwcGVuZENoaWxkKGNhcmRCb2R5KTtcclxuXHJcbiAgcm93LmFwcGVuZENoaWxkKGNvbEljb24pO1xyXG4gIHJvdy5hcHBlbmRDaGlsZChjb2xCb2R5KTtcclxuXHJcbiAgY2FyZC5hcHBlbmRDaGlsZChyb3cpO1xyXG5cclxuICAvLyBBcHBlbmQgY2FyZCB0byBjb250YWluZXJcclxuICB0YXNrU3BhY2UuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcblxyXG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICBkZWxldGVGdW5jdGlvbihjYXJkKVxyXG4gIH0pXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCB0YXNrU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1NwYWNlJylcclxuXHJcblxyXG4vLyBpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IG1vZGFsIGZyb20gXCIuL3Byb2plY3REb20uanNcIjtcclxuXHJcbmltcG9ydCB0b2RvRnVuY3Rpb25zIGZyb20gXCIuL2Z1bmN0aW9ucy5qc1wiO1xyXG5cclxudG9kb0Z1bmN0aW9ucyh0YXNrU3BhY2UpXHJcblxyXG5cclxuY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGVOZXdQcm9qZWN0JylcclxuXHJcbmNyZWF0ZU5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgbW9kYWwub3Blbk1vZGFsKClcclxufSlcclxuXHJcbiJdLCJuYW1lcyI6WyJuZXdQcm9qZWN0UG9wVXBGb3JtIiwiY3JlYXRlU2V0dGluZ3NQYWdlIiwidG9kb0Z1bmN0aW9ucyIsInRoZURpdiIsInNldHRpbmdzSWNvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1c2VyTmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRUYXNrQnRuIiwiaXNPbiIsImFwcGVuZENoaWxkIiwicmVtb3ZlIiwidGFza1NwYWNlIiwibmV3UHJvamVjdFVMIiwibW9kYWwiLCJtb2RhbENvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJtb2RhbENvbnRlbnQiLCJtb2RhbEhlYWRlciIsIm1vZGFsVGl0bGUiLCJ0ZXh0Q29udGVudCIsImNsb3NlQnV0dG9uIiwibW9kYWxCb2R5IiwibmFtZUxhYmVsIiwibmFtZUlucHV0IiwidHlwZSIsImlkIiwiY29sb3JMYWJlbCIsImNvbG9yU2VsZWN0IiwiY29sb3JPcHRpb25zIiwiZm9yRWFjaCIsIm9wdGlvbiIsIm9wdGlvbkVsZW1lbnQiLCJzYXZlQnV0dG9uIiwic3R5bGUiLCJkaXNwbGF5IiwicHJvamVjdE5hbWUiLCJ2YWx1ZSIsInByb2plY3RDb2xvciIsImNvbnNvbGUiLCJsb2ciLCJjb25jYXQiLCJjbG9zZU1vZGFsIiwiYWRkUHJvamVjdFVJIiwibmV3QXJyYXlQcm9qZWN0IiwibmV3UHJvamVjdCIsIm5ld0FycmF5Iiwib3Blbk1vZGFsIiwiYXBwZW5kIiwiaW5kZXgiLCJsaXN0SXRlbSIsInNldEF0dHJpYnV0ZSIsImljb24iLCJpbm5lckhUTUwiLCJzZXR0aW5nc0NvbnRhaW5lciIsInVzZXJuYW1lU2VjdGlvbiIsInVzZXJuYW1lTGFiZWwiLCJ1c2VybmFtZUlucHV0IiwicGxhY2Vob2xkZXIiLCJ1c2VybmFtZUJ1dHRvbiIsIm5ld1VzZXJuYW1lIiwidHJpbSIsImFsZXJ0IiwiYmdDb2xvclNlY3Rpb24iLCJiZ0NvbG9yTGFiZWwiLCJiZ0NvbG9yU2VsZWN0IiwiY29sb3JzIiwiY29sb3IiLCJzZWxlY3RlZENvbG9yIiwidG9Mb3dlckNhc2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJuZXdUYXNrIiwidGFza0RPTSIsImZvcm1Db250YWluZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJmb3JtIiwidGl0bGVMYWJlbCIsImh0bWxGb3IiLCJ0aXRsZUlucHV0IiwibmFtZSIsInJlcXVpcmVkIiwiZGVzY3JpcHRpb25MYWJlbCIsImRlc2NyaXB0aW9uSW5wdXQiLCJkdWVEYXRlTGFiZWwiLCJkdWVEYXRlSW5wdXQiLCJwcmlvcml0eUxhYmVsIiwicHJpb3JpdHlTZWxlY3QiLCJwcmlvcml0eU9wdGlvbnMiLCJvcHRpb25UZXh0Iiwic3VibWl0QnV0dG9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhc2tBcnIiLCJ0YXNrQXJyYXkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiZGlzcGxheWVyIiwiYXJyIiwiYXJySXRlbSIsImRlZmF1bHQiLCJ0aGVOZXdUYXNrIiwicHVzaCIsImRlbGV0ZUZ1bmN0aW9uIiwidGhlQ2FyZCIsImluZGV4QXR0cmlidXRlIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJjb25maXJtVG9SZW1vdmUiLCJjb25maXJtIiwic3BsaWNlIiwidGl0bGVUZXh0IiwiZGVzY3JpcHRpb25UZXh0IiwicHJpb3JpdHlUZXh0IiwiZHVlRGF0ZVRleHQiLCJjYXJkIiwicm93IiwiY29sSWNvbiIsImNoZWNrYm94IiwiYXJpYUxhYmVsIiwiY29sQm9keSIsImNhcmRCb2R5IiwiYnV0dG9uQ29udGFpbmVyIiwiYnV0dG9uR3JvdXAiLCJlZGl0QnV0dG9uIiwiZGVsZXRlQnV0dG9uIiwiY2hlY2tib3hDb250YWluZXIiLCJ0YXNrQ29tcGxldGVkQ2hlY2tib3giLCJ0YXNrQ29tcGxldGVkTGFiZWwiLCJjcmVhdGVOZXdQcm9qZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==