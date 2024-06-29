/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createNewProject)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }


var projectsArr = new Array();
var newProject = /*#__PURE__*/_createClass(function newProject(id) {
  _classCallCheck(this, newProject);
});
function createNewProject(id, name) {
  var newProjectArr = new Array([id, name]);
  projectsArr.push(newProjectArr);
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFDO0VBQzNDd0UsV0FBVyxDQUFDaEMsSUFBSSxDQUFDb0MsYUFBYSxDQUFDO0FBRW5DLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy90YXNrRm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3RvZG9ET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnLi9jc3MvcHJvamVjdERPTS5jc3MnO1xyXG5cclxuaW1wb3J0IHsgbmV3VGFzayB9IGZyb20gXCIuL3RvZG8uanNcIjtcclxuaW1wb3J0IHRhc2tET00gZnJvbSBcIi4vdG9kb0RPTS5qc1wiO1xyXG5cclxuLy8gRnVuY3Rpb24gdG8gY3JlYXRlIGFuZCBzaG93IHRoZSBuZXcgcHJvamVjdCBwb3B1cCBmb3JtXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld1Byb2plY3RQb3BVcEZvcm0oKSB7XHJcbiAgICAvLyBDcmVhdGUgZm9ybSBlbGVtZW50c1xyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3BvcHVwLWZvcm0nKTtcclxuXHJcbiAgICAvLyBUaXRsZVxyXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlOic7XHJcbiAgICB0aXRsZUxhYmVsLmh0bWxGb3IgPSAncHJvamVjdFRpdGxlJztcclxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgdGl0bGVJbnB1dC5pZCA9ICdwcm9qZWN0VGl0bGUnO1xyXG4gICAgdGl0bGVJbnB1dC5uYW1lID0gJ3RpdGxlJztcclxuICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICAgIC8vIERlc2NyaXB0aW9uXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246JztcclxuICAgIGRlc2NyaXB0aW9uTGFiZWwuaHRtbEZvciA9ICdwcm9qZWN0RGVzY3JpcHRpb24nO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gJ3Byb2plY3REZXNjcmlwdGlvbic7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0Lm5hbWUgPSAnZGVzY3JpcHRpb24nO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcblxyXG4gICAgLy8gRHVlIERhdGVcclxuICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6JztcclxuICAgIGR1ZURhdGVMYWJlbC5odG1sRm9yID0gJ3Byb2plY3REdWVEYXRlJztcclxuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBkdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcclxuICAgIGR1ZURhdGVJbnB1dC5pZCA9ICdwcm9qZWN0RHVlRGF0ZSc7XHJcbiAgICBkdWVEYXRlSW5wdXQubmFtZSA9ICdkdWVEYXRlJztcclxuICAgIGR1ZURhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcblxyXG4gICAgLy8gUHJpb3JpdHlcclxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonO1xyXG4gICAgcHJpb3JpdHlMYWJlbC5odG1sRm9yID0gJ3Byb2plY3RQcmlvcml0eSc7XHJcbiAgICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuaWQgPSAncHJvamVjdFByaW9yaXR5JztcclxuICAgIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSAncHJpb3JpdHknO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QucmVxdWlyZWQgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IHByaW9yaXR5T3B0aW9ucyA9IFsnTG93JywgJ01lZGl1bScsICdIaWdoJ107XHJcbiAgICBwcmlvcml0eU9wdGlvbnMuZm9yRWFjaChvcHRpb25UZXh0ID0+IHtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25UZXh0LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uVGV4dDtcclxuICAgICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU3VibWl0IEJ1dHRvblxyXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xyXG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBQcm9qZWN0JztcclxuXHJcbiAgICAvLyBBcHBlbmQgZWxlbWVudHMgdG8gZm9ybVxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcclxuXHJcbiAgICAvLyBBcHBlbmQgZm9ybSB0byBmb3JtIGNvbnRhaW5lclxyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcblxyXG4gICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGNsb3NlIHRoZSBmb3JtIG9uIHN1Ym1pdFxyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIEhhbmRsZSBmb3JtIHN1Ym1pc3Npb24gbG9naWMgaGVyZVxyXG4gICAgICAgIG5ld1Rhc2sodGl0bGVJbnB1dC52YWx1ZSwgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSwgcHJpb3JpdHlTZWxlY3QudmFsdWUsIGR1ZURhdGVJbnB1dC52YWx1ZSlcclxuICAgICAgICBmb3JtQ29udGFpbmVyLnJlbW92ZSgpOyBcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgcmV0dXJuIGZvcm1cclxufVxyXG5cclxuIiwiY29uc3QgdGFza1NwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tTcGFjZScpXHJcblxyXG4vLyBpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IG5ld1Byb2plY3RQb3BVcEZvcm0gZnJvbSBcIi4vdGFza0Zvcm0uanNcIjtcclxuaW1wb3J0IHRhc2tET00gZnJvbSBcIi4vdG9kb0RPTS5qc1wiO1xyXG5cclxuY29uc3QgdGFza0FyciA9IFtdXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0YXNrQXJyYXl7XHJcbiAgICBjb25zdHJ1Y3RvciAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSl7XHJcbiAgICAgICAgLy8gdGhpcy5pZCA9IHV1aWR2NCgpXHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XHJcbn1cclxuXHJcbmRpc3BsYXllcihhcnIpe1xyXG4gICAgdGFza1NwYWNlLmlubmVySFRNTCA9IFwiXCJcclxuICAgIGFyci5mb3JFYWNoKGFyckl0ZW0gPT4ge1xyXG4gICAgICAgIHRhc2tET00oYXJySXRlbS50aXRsZSwgYXJySXRlbS5kZXNjcmlwdGlvbiwgYXJySXRlbS5kdWVEYXRlLCBhcnJJdGVtLnByaW9yaXR5KVxyXG4gICAgfSk7XHJcbiAgICB0YXNrU3BhY2UuYXBwZW5kKG5ld1Byb2plY3RQb3BVcEZvcm0oKSlcclxuICAgIGNvbnNvbGUubG9nKHRhc2tBcnIpXHJcbn1cclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheWVyKGFycil7XHJcbiAgICB0YXNrU3BhY2UuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgYXJyLmZvckVhY2goYXJySXRlbSA9PiB7XHJcbiAgICAgICAgdGFza0RPTShhcnJJdGVtLnRpdGxlLCBhcnJJdGVtLmRlc2NyaXB0aW9uLCBhcnJJdGVtLmR1ZURhdGUsIGFyckl0ZW0ucHJpb3JpdHkpXHJcbiAgICB9KTtcclxuICAgIHRhc2tTcGFjZS5hcHBlbmQobmV3UHJvamVjdFBvcFVwRm9ybSgpKVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmV3VGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICBjb25zdCB0aGVOZXdUYXNrID0gbmV3IHRhc2tBcnJheSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcclxuICAgIHRhc2tBcnIucHVzaCh0aGVOZXdUYXNrKTtcclxuICAgIGRpc3BsYXllcih0YXNrQXJyKVxyXG4gICAgY29uc29sZS5sb2codGFza0FycilcclxuIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUZ1bmN0aW9uKHRoZUNhcmQpIHtcclxuICAgIGNvbnN0IGluZGV4QXR0cmlidXRlID0gcGFyc2VJbnQodGhlQ2FyZC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpKTtcclxuICAgIHZhciBjb25maXJtVG9SZW1vdmUgPSBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIHRoaXMgQm9vaz8nKTtcclxuXHJcbiAgICBpZiAoY29uZmlybVRvUmVtb3ZlKSB7XHJcbiAgICAgICAgdGFza0Fyci5zcGxpY2UoaW5kZXhBdHRyaWJ1dGUsIDEpO1xyXG4gICAgICAgIGRpc3BsYXllcih0YXNrQXJyKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tBcnIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNwbGF5ZXIodGFza0FycilcclxuICAgICAgY29uc29sZS5sb2codGFza0FycilcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBkZWxldGVGdW5jdGlvbiB9IGZyb20gXCIuL3RvZG8uanNcIjtcclxuXHJcbmNvbnN0IHRhc2tTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrU3BhY2UnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2tET00odGl0bGVUZXh0LCBkZXNjcmlwdGlvblRleHQsIHByaW9yaXR5VGV4dCwgZHVlRGF0ZVRleHQsIGluZGV4KSB7XHJcbiAgLy8gQ3JlYXRlIHRhc2sgY2FyZCBlbGVtZW50c1xyXG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkLmNsYXNzTmFtZSA9ICdjYXJkIHRhc2stY2FyZCc7XHJcbiAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleClcclxuXHJcbiAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcm93LmNsYXNzTmFtZSA9ICdyb3cgbm8tZ3V0dGVycyc7XHJcblxyXG4gIGNvbnN0IGNvbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb2xJY29uLmNsYXNzTmFtZSA9ICdjb2wtbWQtMiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgYmctcHJpbWFyeSB0ZXh0LXdoaXRlIHBvc2l0aW9uLXJlbGF0aXZlJztcclxuXHJcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBpY29uLmNsYXNzTmFtZSA9ICdmYXMgZmEtdGFza3MgZmEtMngnO1xyXG5cclxuICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgY2hlY2tib3guY2xhc3NOYW1lID0gJ2JpZy1jaGVja2JveCc7XHJcbiAgY2hlY2tib3guYXJpYUxhYmVsID0gJ1Rhc2sgQ29tcGxldGUnO1xyXG5cclxuICBjb25zdCBjb2xCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29sQm9keS5jbGFzc05hbWUgPSAnY29sLW1kLTEwJztcclxuXHJcbiAgY29uc3QgY2FyZEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkQm9keS5jbGFzc05hbWUgPSAnY2FyZC1ib2R5JztcclxuXHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xyXG4gIHRpdGxlLmNsYXNzTmFtZSA9ICdjYXJkLXRpdGxlJztcclxuICB0aXRsZS50ZXh0Q29udGVudCA9IHRpdGxlVGV4dDtcclxuXHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgZGVzY3JpcHRpb24uY2xhc3NOYW1lID0gJ2NhcmQtdGV4dCBkZXNjcmlwdGlvbic7XHJcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvblRleHQ7XHJcblxyXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHByaW9yaXR5LmNsYXNzTmFtZSA9ICdjYXJkLXRleHQgcHJpb3JpdHknO1xyXG4gIHByaW9yaXR5LmlubmVySFRNTCA9IGA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+PGkgY2xhc3M9XCJmYXMgZmEtZmxhZ1wiPjwvaT4gUHJpb3JpdHk6ICR7cHJpb3JpdHlUZXh0fTwvc21hbGw+YDtcclxuXHJcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBkdWVEYXRlLmNsYXNzTmFtZSA9ICdjYXJkLXRleHQnO1xyXG4gIGR1ZURhdGUuaW5uZXJIVE1MID0gYDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj48aSBjbGFzcz1cImZhcyBmYS1jYWxlbmRhci1kYXlcIj48L2k+IER1ZSBEYXRlOiA8c3BhbiBpZD1cImR1ZURhdGVcIj4ke2R1ZURhdGVUZXh0fTwvc3Bhbj48L3NtYWxsPmA7XHJcblxyXG4gIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGJ1dHRvbkNvbnRhaW5lci5jbGFzc05hbWUgPSAnZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlcic7XHJcblxyXG4gIGNvbnN0IGJ1dHRvbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBlZGl0QnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLXdhcm5pbmcgYnRuLXNtJztcclxuICBlZGl0QnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPiBFZGl0JztcclxuXHJcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLWRhbmdlciBidG4tc20nO1xyXG4gIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtdHJhc2hcIj48L2k+IERlbGV0ZSc7XHJcblxyXG4gIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2hlY2tib3hDb250YWluZXIuY2xhc3NOYW1lID0gJ2Zvcm0tY2hlY2snO1xyXG4gIGNoZWNrYm94Q29udGFpbmVyLmlkID0gJ2RpdkZvckNoZWNrQm94JztcclxuXHJcbiAgY29uc3QgdGFza0NvbXBsZXRlZENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICB0YXNrQ29tcGxldGVkQ2hlY2tib3guY2xhc3NOYW1lID0gJ2Zvcm0tY2hlY2staW5wdXQnO1xyXG4gIHRhc2tDb21wbGV0ZWRDaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcclxuICB0YXNrQ29tcGxldGVkQ2hlY2tib3guaWQgPSAndGFza0NvbXBsZXRlZCc7XHJcblxyXG4gIGNvbnN0IHRhc2tDb21wbGV0ZWRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgdGFza0NvbXBsZXRlZExhYmVsLmNsYXNzTmFtZSA9ICdmb3JtLWNoZWNrLWxhYmVsJztcclxuICB0YXNrQ29tcGxldGVkTGFiZWwuaHRtbEZvciA9ICd0YXNrQ29tcGxldGVkJztcclxuICB0YXNrQ29tcGxldGVkTGFiZWwudGV4dENvbnRlbnQgPSAnQ29tcGxldGVkJztcclxuXHJcbiAgLy8gQXBwZW5kIGVsZW1lbnRzXHJcbiAgY29sSWNvbi5hcHBlbmRDaGlsZChpY29uKTtcclxuICBjb2xJY29uLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcclxuXHJcbiAgYnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XHJcbiAgYnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuXHJcbiAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbXBsZXRlZENoZWNrYm94KTtcclxuICBjaGVja2JveENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29tcGxldGVkTGFiZWwpO1xyXG5cclxuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uR3JvdXApO1xyXG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcik7XHJcblxyXG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICBjYXJkQm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xyXG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xyXG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XHJcblxyXG4gIGNvbEJvZHkuYXBwZW5kQ2hpbGQoY2FyZEJvZHkpO1xyXG5cclxuICByb3cuYXBwZW5kQ2hpbGQoY29sSWNvbik7XHJcbiAgcm93LmFwcGVuZENoaWxkKGNvbEJvZHkpO1xyXG5cclxuICBjYXJkLmFwcGVuZENoaWxkKHJvdyk7XHJcblxyXG4gIC8vIEFwcGVuZCBjYXJkIHRvIGNvbnRhaW5lclxyXG4gIHRhc2tTcGFjZS5hcHBlbmRDaGlsZChjYXJkKTtcclxuXHJcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGRlbGV0ZUZ1bmN0aW9uKGNhcmQpXHJcbiAgfSlcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0YXNrQXJyYXkgZnJvbSBcIi4vdG9kby5qc1wiXHJcbmltcG9ydCB7IG5ld1Rhc2sgfSBmcm9tIFwiLi90b2RvLmpzXCJcclxuXHJcblxyXG5jb25zdCBwcm9qZWN0c0FyciA9IG5ldyBBcnJheSgpXHJcblxyXG5jbGFzcyBuZXdQcm9qZWN0e1xyXG4gICAgY29uc3RydWN0b3IoaWQsICl7XHJcblxyXG4gICAgfVxyXG59IFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoaWQsIG5hbWUpe1xyXG5cclxuICAgIGNvbnN0IG5ld1Byb2plY3RBcnIgPSBuZXcgQXJyYXkoW2lkLCBuYW1lXSlcclxuICAgIHByb2plY3RzQXJyLnB1c2gobmV3UHJvamVjdEFycilcclxuXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJuZXdUYXNrIiwidGFza0RPTSIsIm5ld1Byb2plY3RQb3BVcEZvcm0iLCJmb3JtQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZm9ybSIsInRpdGxlTGFiZWwiLCJ0ZXh0Q29udGVudCIsImh0bWxGb3IiLCJ0aXRsZUlucHV0IiwidHlwZSIsImlkIiwibmFtZSIsInJlcXVpcmVkIiwiZGVzY3JpcHRpb25MYWJlbCIsImRlc2NyaXB0aW9uSW5wdXQiLCJkdWVEYXRlTGFiZWwiLCJkdWVEYXRlSW5wdXQiLCJwcmlvcml0eUxhYmVsIiwicHJpb3JpdHlTZWxlY3QiLCJwcmlvcml0eU9wdGlvbnMiLCJmb3JFYWNoIiwib3B0aW9uVGV4dCIsIm9wdGlvbiIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJhcHBlbmRDaGlsZCIsInN1Ym1pdEJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlIiwidGFza1NwYWNlIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0YXNrQXJyIiwidGFza0FycmF5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcmlvcml0eSIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsImRpc3BsYXllciIsImFyciIsImlubmVySFRNTCIsImFyckl0ZW0iLCJhcHBlbmQiLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdCIsInRoZU5ld1Rhc2siLCJwdXNoIiwiZGVsZXRlRnVuY3Rpb24iLCJ0aGVDYXJkIiwiaW5kZXhBdHRyaWJ1dGUiLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsImNvbmZpcm1Ub1JlbW92ZSIsImNvbmZpcm0iLCJzcGxpY2UiLCJ0aXRsZVRleHQiLCJkZXNjcmlwdGlvblRleHQiLCJwcmlvcml0eVRleHQiLCJkdWVEYXRlVGV4dCIsImluZGV4IiwiY2FyZCIsImNsYXNzTmFtZSIsInNldEF0dHJpYnV0ZSIsInJvdyIsImNvbEljb24iLCJpY29uIiwiY2hlY2tib3giLCJhcmlhTGFiZWwiLCJjb2xCb2R5IiwiY2FyZEJvZHkiLCJjb25jYXQiLCJidXR0b25Db250YWluZXIiLCJidXR0b25Hcm91cCIsImVkaXRCdXR0b24iLCJkZWxldGVCdXR0b24iLCJjaGVja2JveENvbnRhaW5lciIsInRhc2tDb21wbGV0ZWRDaGVja2JveCIsInRhc2tDb21wbGV0ZWRMYWJlbCIsInByb2plY3RzQXJyIiwiQXJyYXkiLCJuZXdQcm9qZWN0IiwiY3JlYXRlTmV3UHJvamVjdCIsIm5ld1Byb2plY3RBcnIiXSwic291cmNlUm9vdCI6IiJ9