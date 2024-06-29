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
/* harmony export */   "default": () => (/* binding */ projectArray)
/* harmony export */ });


function projectArray(){
    const projectsArr = []

    return projectsArr
}

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
const taskSpace = document.getElementById('taskSpace');
const settingsIcon = document.getElementById('settingsIcons');
const userName = document.getElementById('userName');


// Function to create and export the settings page
function createSettingsPage(taskSpace, userName) {
    // Clear existing content in taskSpace
    taskSpace.innerHTML = '';

    // Settings Page Elements
    const settingsContainer = document.createElement('div');
    settingsContainer.className = 'settings-container';

    // Username Change Section
    const usernameSection = document.createElement('div');
    usernameSection.className = 'settings-section';

    const usernameLabel = document.createElement('label');
    usernameLabel.textContent = 'Change Username: ';

    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.id = 'newUsernameInput';
    usernameInput.placeholder = 'Enter new username...';

    const usernameButton = document.createElement('button');
    usernameButton.textContent = 'Change';
    usernameButton.className = 'btn btn-primary';
    usernameButton.addEventListener('click', () => {
        const newUsername = usernameInput.value.trim();
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
    const bgColorSection = document.createElement('div');
    bgColorSection.className = 'settings-section';

    const bgColorLabel = document.createElement('label');
    bgColorLabel.textContent = 'Change Background Color: ';

    const bgColorSelect = document.createElement('select');
    bgColorSelect.id = 'bgColorSelect';
    bgColorSelect.className = 'form-control';

    const colors = ['Default', 'Blue', 'Green', 'Yellow', 'Red']; // Example colors
    colors.forEach(color => {
        const option = document.createElement('option');
        option.textContent = color;
        bgColorSelect.appendChild(option);
    });

    bgColorSelect.addEventListener('change', () => {
        const selectedColor = bgColorSelect.value.toLowerCase();
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
    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');

    const form = document.createElement('form');
    form.classList.add('popup-form');

    // Title
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    titleLabel.htmlFor = 'projectTitle';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'projectTitle';
    titleInput.name = 'title';
    titleInput.required = true;

    // Description
    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    descriptionLabel.htmlFor = 'projectDescription';
    const descriptionInput = document.createElement('textarea');
    descriptionInput.id = 'projectDescription';
    descriptionInput.name = 'description';
    descriptionInput.required = true;

    // Due Date
    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due Date:';
    dueDateLabel.htmlFor = 'projectDueDate';
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.id = 'projectDueDate';
    dueDateInput.name = 'dueDate';
    dueDateInput.required = true;

    // Priority
    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority:';
    priorityLabel.htmlFor = 'projectPriority';
    const prioritySelect = document.createElement('select');
    prioritySelect.id = 'projectPriority';
    prioritySelect.name = 'priority';
    prioritySelect.required = true;

    const priorityOptions = ['Low', 'Medium', 'High'];
    priorityOptions.forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText.toLowerCase();
        option.textContent = optionText;
        prioritySelect.appendChild(option);
    });

    // Submit Button
    const submitButton = document.createElement('button');
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
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Handle form submission logic here
        (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.newTask)(titleInput.value, descriptionInput.value, prioritySelect.value, dueDateInput.value)
        formContainer.remove(); 

    });


    return form
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
const taskSpace = document.getElementById('taskSpace')

const taskArr = []

;


class taskArray{
    constructor (title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate
        this.priority = priority
}

displayer(arr){
    taskSpace.innerHTML = ""
    arr.forEach(arrItem => {
        ;(0,_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arrItem.title, arrItem.description, arrItem.dueDate, arrItem.priority)
    });
    taskSpace.append((0,_taskForm_js__WEBPACK_IMPORTED_MODULE_0__["default"])())
    console.log(taskArr)
}
}

function displayer(arr){
    taskSpace.innerHTML = ""
    arr.forEach(arrItem => {
        ;(0,_todoDOM_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arrItem.title, arrItem.description, arrItem.dueDate, arrItem.priority)
    });
    taskSpace.append((0,_taskForm_js__WEBPACK_IMPORTED_MODULE_0__["default"])())
    
}


function newTask(title, description, dueDate, priority) {
    const theNewTask = new taskArray(title, description, dueDate, priority);
    taskArr.push(theNewTask);
    displayer(taskArr)
    console.log(taskArr)
 
}


function deleteFunction(theCard) {
    const indexAttribute = parseInt(theCard.getAttribute("data-index"));
    var confirmToRemove = confirm('Are you sure you want to remove this Book?');

    if (confirmToRemove) {
        taskArr.splice(indexAttribute, 1);
        displayer(taskArr)
        console.log(taskArr)
    } else {
      displayer(taskArr)
      console.log(taskArr)

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


const taskSpace = document.getElementById('taskSpace');

function taskDOM(titleText, descriptionText, priorityText, dueDateText, index) {
  // Create task card elements
  const card = document.createElement('div');
  card.className = 'card task-card';
  card.setAttribute('data-index', index)

  const row = document.createElement('div');
  row.className = 'row no-gutters';

  const colIcon = document.createElement('div');
  colIcon.className = 'col-md-2 d-flex align-items-center justify-content-center bg-primary text-white position-relative';

  const icon = document.createElement('i');
  icon.className = 'fas fa-tasks fa-2x';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'big-checkbox';
  checkbox.ariaLabel = 'Task Complete';

  const colBody = document.createElement('div');
  colBody.className = 'col-md-10';

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  const title = document.createElement('h5');
  title.className = 'card-title';
  title.textContent = titleText;

  const description = document.createElement('p');
  description.className = 'card-text description';
  description.textContent = descriptionText;

  const priority = document.createElement('p');
  priority.className = 'card-text priority';
  priority.innerHTML = `<small class="text-muted"><i class="fas fa-flag"></i> Priority: ${priorityText}</small>`;

  const dueDate = document.createElement('p');
  dueDate.className = 'card-text';
  dueDate.innerHTML = `<small class="text-muted"><i class="fas fa-calendar-day"></i> Due Date: <span id="dueDate">${dueDateText}</span></small>`;

  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'd-flex justify-content-between align-items-center';

  const buttonGroup = document.createElement('div');

  const editButton = document.createElement('button');
  editButton.className = 'btn btn-warning btn-sm';
  editButton.innerHTML = '<i class="fas fa-edit"></i> Edit';

  const deleteButton = document.createElement('button');
  deleteButton.className = 'btn btn-danger btn-sm';
  deleteButton.innerHTML = '<i class="fas fa-trash"></i> Delete';

  const checkboxContainer = document.createElement('div');
  checkboxContainer.className = 'form-check';
  checkboxContainer.id = 'divForCheckBox';

  const taskCompletedCheckbox = document.createElement('input');
  taskCompletedCheckbox.className = 'form-check-input';
  taskCompletedCheckbox.type = 'checkbox';
  taskCompletedCheckbox.id = 'taskCompleted';

  const taskCompletedLabel = document.createElement('label');
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

  deleteButton.addEventListener('click', ()=>{
    (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.deleteFunction)(card)
  })
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
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage.js");
/* harmony import */ var _taskForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskForm.js */ "./src/taskForm.js");
/* harmony import */ var _todoDOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoDOM.js */ "./src/todoDOM.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.js */ "./src/settings.js");
const taskSpace = document.getElementById('taskSpace')

;


// import './css/projectDOM.css';







const settingsIcon = document.getElementById('settingsIcon');
const userName = document.getElementById('userName');

settingsIcon.addEventListener('click', ()=>{
    (0,_settings_js__WEBPACK_IMPORTED_MODULE_3__["default"])(taskSpace, userName)

})


const addTaskBtn = document.getElementById('addTask')

let isOn =  true
addTaskBtn.addEventListener('click', ()=>{
    if(isOn){
        taskSpace.append((0,_taskForm_js__WEBPACK_IMPORTED_MODULE_1__["default"])())
    }else{
       (0,_taskForm_js__WEBPACK_IMPORTED_MODULE_1__["default"])().remove()
    }
    isOn = !isOn

})

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQWM7QUFDbEIsR0FBRztBQUNIOzs7Ozs7O1VDekdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBLENBQTRDO0FBQ0k7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDbUM7QUFDbkM7QUFDK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBa0I7QUFDdEI7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0RBQW1CO0FBQzVDLEtBQUs7QUFDTCxPQUFPLHdEQUFtQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3NldHRpbmdzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Rhc2tGb3JtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdG9kb0RPTS5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdEFycmF5KCl7XHJcbiAgICBjb25zdCBwcm9qZWN0c0FyciA9IFtdXHJcblxyXG4gICAgcmV0dXJuIHByb2plY3RzQXJyXHJcbn0iLCJjb25zdCB0YXNrU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1NwYWNlJyk7XHJcbmNvbnN0IHNldHRpbmdzSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXR0aW5nc0ljb25zJyk7XHJcbmNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJOYW1lJyk7XHJcblxyXG5cclxuLy8gRnVuY3Rpb24gdG8gY3JlYXRlIGFuZCBleHBvcnQgdGhlIHNldHRpbmdzIHBhZ2VcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2V0dGluZ3NQYWdlKHRhc2tTcGFjZSwgdXNlck5hbWUpIHtcclxuICAgIC8vIENsZWFyIGV4aXN0aW5nIGNvbnRlbnQgaW4gdGFza1NwYWNlXHJcbiAgICB0YXNrU3BhY2UuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgLy8gU2V0dGluZ3MgUGFnZSBFbGVtZW50c1xyXG4gICAgY29uc3Qgc2V0dGluZ3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNldHRpbmdzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdzZXR0aW5ncy1jb250YWluZXInO1xyXG5cclxuICAgIC8vIFVzZXJuYW1lIENoYW5nZSBTZWN0aW9uXHJcbiAgICBjb25zdCB1c2VybmFtZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHVzZXJuYW1lU2VjdGlvbi5jbGFzc05hbWUgPSAnc2V0dGluZ3Mtc2VjdGlvbic7XHJcblxyXG4gICAgY29uc3QgdXNlcm5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICB1c2VybmFtZUxhYmVsLnRleHRDb250ZW50ID0gJ0NoYW5nZSBVc2VybmFtZTogJztcclxuXHJcbiAgICBjb25zdCB1c2VybmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHVzZXJuYW1lSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICAgIHVzZXJuYW1lSW5wdXQuaWQgPSAnbmV3VXNlcm5hbWVJbnB1dCc7XHJcbiAgICB1c2VybmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ0VudGVyIG5ldyB1c2VybmFtZS4uLic7XHJcblxyXG4gICAgY29uc3QgdXNlcm5hbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHVzZXJuYW1lQnV0dG9uLnRleHRDb250ZW50ID0gJ0NoYW5nZSc7XHJcbiAgICB1c2VybmFtZUJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi1wcmltYXJ5JztcclxuICAgIHVzZXJuYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld1VzZXJuYW1lID0gdXNlcm5hbWVJbnB1dC52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgaWYgKG5ld1VzZXJuYW1lICE9PSAnJykge1xyXG4gICAgICAgICAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9IG5ld1VzZXJuYW1lO1xyXG4gICAgICAgICAgICAvLyBZb3UgY2FuIHNhdmUgdGhlIG5ldyB1c2VybmFtZSB0byBsb2NhbFN0b3JhZ2Ugb3Igc2VuZCBpdCB0byBhIHNlcnZlciBoZXJlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVc2VybmFtZSBjaGFuZ2VkIHRvOicsIG5ld1VzZXJuYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIGVudGVyIGEgdmFsaWQgdXNlcm5hbWUuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdXNlcm5hbWVTZWN0aW9uLmFwcGVuZENoaWxkKHVzZXJuYW1lTGFiZWwpO1xyXG4gICAgdXNlcm5hbWVTZWN0aW9uLmFwcGVuZENoaWxkKHVzZXJuYW1lSW5wdXQpO1xyXG4gICAgdXNlcm5hbWVTZWN0aW9uLmFwcGVuZENoaWxkKHVzZXJuYW1lQnV0dG9uKTtcclxuXHJcbiAgICAvLyBCYWNrZ3JvdW5kIENvbG9yIENoYW5nZSBTZWN0aW9uXHJcbiAgICBjb25zdCBiZ0NvbG9yU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYmdDb2xvclNlY3Rpb24uY2xhc3NOYW1lID0gJ3NldHRpbmdzLXNlY3Rpb24nO1xyXG5cclxuICAgIGNvbnN0IGJnQ29sb3JMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBiZ0NvbG9yTGFiZWwudGV4dENvbnRlbnQgPSAnQ2hhbmdlIEJhY2tncm91bmQgQ29sb3I6ICc7XHJcblxyXG4gICAgY29uc3QgYmdDb2xvclNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgYmdDb2xvclNlbGVjdC5pZCA9ICdiZ0NvbG9yU2VsZWN0JztcclxuICAgIGJnQ29sb3JTZWxlY3QuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCc7XHJcblxyXG4gICAgY29uc3QgY29sb3JzID0gWydEZWZhdWx0JywgJ0JsdWUnLCAnR3JlZW4nLCAnWWVsbG93JywgJ1JlZCddOyAvLyBFeGFtcGxlIGNvbG9yc1xyXG4gICAgY29sb3JzLmZvckVhY2goY29sb3IgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNvbG9yO1xyXG4gICAgICAgIGJnQ29sb3JTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGJnQ29sb3JTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQ29sb3IgPSBiZ0NvbG9yU2VsZWN0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkQ29sb3IgPT09ICdkZWZhdWx0Jykge1xyXG4gICAgICAgICAgICB0YXNrU3BhY2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7IC8vIFJlc2V0IHRvIGRlZmF1bHRcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0YXNrU3BhY2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc2VsZWN0ZWRDb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBiZ0NvbG9yU2VjdGlvbi5hcHBlbmRDaGlsZChiZ0NvbG9yTGFiZWwpO1xyXG4gICAgYmdDb2xvclNlY3Rpb24uYXBwZW5kQ2hpbGQoYmdDb2xvclNlbGVjdCk7XHJcblxyXG4gICAgLy8gQXBwZW5kIFNlY3Rpb25zIHRvIFNldHRpbmdzIENvbnRhaW5lclxyXG4gICAgc2V0dGluZ3NDb250YWluZXIuYXBwZW5kQ2hpbGQodXNlcm5hbWVTZWN0aW9uKTtcclxuICAgIHNldHRpbmdzQ29udGFpbmVyLmFwcGVuZENoaWxkKGJnQ29sb3JTZWN0aW9uKTtcclxuXHJcbiAgICAvLyBBcHBlbmQgU2V0dGluZ3MgQ29udGFpbmVyIHRvIHRhc2tTcGFjZVxyXG4gICAgdGFza1NwYWNlLmFwcGVuZENoaWxkKHNldHRpbmdzQ29udGFpbmVyKTtcclxufVxyXG5cclxuIiwiLy8gaW1wb3J0ICcuL2Nzcy9wcm9qZWN0RE9NLmNzcyc7XHJcblxyXG5pbXBvcnQgeyBuZXdUYXNrIH0gZnJvbSBcIi4vdG9kby5qc1wiO1xyXG5pbXBvcnQgdGFza0RPTSBmcm9tIFwiLi90b2RvRE9NLmpzXCI7XHJcblxyXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgYW5kIHNob3cgdGhlIG5ldyBwcm9qZWN0IHBvcHVwIGZvcm1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3UHJvamVjdFBvcFVwRm9ybSgpIHtcclxuICAgIC8vIENyZWF0ZSBmb3JtIGVsZW1lbnRzXHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgncG9wdXAtZm9ybScpO1xyXG5cclxuICAgIC8vIFRpdGxlXHJcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGU6JztcclxuICAgIHRpdGxlTGFiZWwuaHRtbEZvciA9ICdwcm9qZWN0VGl0bGUnO1xyXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICB0aXRsZUlucHV0LmlkID0gJ3Byb2plY3RUaXRsZSc7XHJcbiAgICB0aXRsZUlucHV0Lm5hbWUgPSAndGl0bGUnO1xyXG4gICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcblxyXG4gICAgLy8gRGVzY3JpcHRpb25cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjonO1xyXG4gICAgZGVzY3JpcHRpb25MYWJlbC5odG1sRm9yID0gJ3Byb2plY3REZXNjcmlwdGlvbic7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSAncHJvamVjdERlc2NyaXB0aW9uJztcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQubmFtZSA9ICdkZXNjcmlwdGlvbic7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBEdWUgRGF0ZVxyXG4gICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZTonO1xyXG4gICAgZHVlRGF0ZUxhYmVsLmh0bWxGb3IgPSAncHJvamVjdER1ZURhdGUnO1xyXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGR1ZURhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xyXG4gICAgZHVlRGF0ZUlucHV0LmlkID0gJ3Byb2plY3REdWVEYXRlJztcclxuICAgIGR1ZURhdGVJbnB1dC5uYW1lID0gJ2R1ZURhdGUnO1xyXG4gICAgZHVlRGF0ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuXHJcbiAgICAvLyBQcmlvcml0eVxyXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5Oic7XHJcbiAgICBwcmlvcml0eUxhYmVsLmh0bWxGb3IgPSAncHJvamVjdFByaW9yaXR5JztcclxuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5pZCA9ICdwcm9qZWN0UHJpb3JpdHknO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QubmFtZSA9ICdwcmlvcml0eSc7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5yZXF1aXJlZCA9IHRydWU7XHJcblxyXG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb25zID0gWydMb3cnLCAnTWVkaXVtJywgJ0hpZ2gnXTtcclxuICAgIHByaW9yaXR5T3B0aW9ucy5mb3JFYWNoKG9wdGlvblRleHQgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IG9wdGlvblRleHQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb25UZXh0O1xyXG4gICAgICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTdWJtaXQgQnV0dG9uXHJcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XHJcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnQ3JlYXRlIFByb2plY3QnO1xyXG5cclxuICAgIC8vIEFwcGVuZCBlbGVtZW50cyB0byBmb3JtXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG5cclxuICAgIC8vIEFwcGVuZCBmb3JtIHRvIGZvcm0gY29udGFpbmVyXHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cclxuXHJcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gY2xvc2UgdGhlIGZvcm0gb24gc3VibWl0XHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gSGFuZGxlIGZvcm0gc3VibWlzc2lvbiBsb2dpYyBoZXJlXHJcbiAgICAgICAgbmV3VGFzayh0aXRsZUlucHV0LnZhbHVlLCBkZXNjcmlwdGlvbklucHV0LnZhbHVlLCBwcmlvcml0eVNlbGVjdC52YWx1ZSwgZHVlRGF0ZUlucHV0LnZhbHVlKVxyXG4gICAgICAgIGZvcm1Db250YWluZXIucmVtb3ZlKCk7IFxyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gZm9ybVxyXG59XHJcblxyXG4iLCJjb25zdCB0YXNrU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1NwYWNlJylcclxuXHJcbmNvbnN0IHRhc2tBcnIgPSBbXVxyXG5cclxuaW1wb3J0IG5ld1Byb2plY3RQb3BVcEZvcm0gZnJvbSBcIi4vdGFza0Zvcm0uanNcIjtcclxuaW1wb3J0IHRhc2tET00gZnJvbSBcIi4vdG9kb0RPTS5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGFza0FycmF5e1xyXG4gICAgY29uc3RydWN0b3IgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpe1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG59XHJcblxyXG5kaXNwbGF5ZXIoYXJyKXtcclxuICAgIHRhc2tTcGFjZS5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICBhcnIuZm9yRWFjaChhcnJJdGVtID0+IHtcclxuICAgICAgICB0YXNrRE9NKGFyckl0ZW0udGl0bGUsIGFyckl0ZW0uZGVzY3JpcHRpb24sIGFyckl0ZW0uZHVlRGF0ZSwgYXJySXRlbS5wcmlvcml0eSlcclxuICAgIH0pO1xyXG4gICAgdGFza1NwYWNlLmFwcGVuZChuZXdQcm9qZWN0UG9wVXBGb3JtKCkpXHJcbiAgICBjb25zb2xlLmxvZyh0YXNrQXJyKVxyXG59XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXllcihhcnIpe1xyXG4gICAgdGFza1NwYWNlLmlubmVySFRNTCA9IFwiXCJcclxuICAgIGFyci5mb3JFYWNoKGFyckl0ZW0gPT4ge1xyXG4gICAgICAgIHRhc2tET00oYXJySXRlbS50aXRsZSwgYXJySXRlbS5kZXNjcmlwdGlvbiwgYXJySXRlbS5kdWVEYXRlLCBhcnJJdGVtLnByaW9yaXR5KVxyXG4gICAgfSk7XHJcbiAgICB0YXNrU3BhY2UuYXBwZW5kKG5ld1Byb2plY3RQb3BVcEZvcm0oKSlcclxuICAgIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5ld1Rhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xyXG4gICAgY29uc3QgdGhlTmV3VGFzayA9IG5ldyB0YXNrQXJyYXkodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XHJcbiAgICB0YXNrQXJyLnB1c2godGhlTmV3VGFzayk7XHJcbiAgICBkaXNwbGF5ZXIodGFza0FycilcclxuICAgIGNvbnNvbGUubG9nKHRhc2tBcnIpXHJcbiBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVGdW5jdGlvbih0aGVDYXJkKSB7XHJcbiAgICBjb25zdCBpbmRleEF0dHJpYnV0ZSA9IHBhcnNlSW50KHRoZUNhcmQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKSk7XHJcbiAgICB2YXIgY29uZmlybVRvUmVtb3ZlID0gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGlzIEJvb2s/Jyk7XHJcblxyXG4gICAgaWYgKGNvbmZpcm1Ub1JlbW92ZSkge1xyXG4gICAgICAgIHRhc2tBcnIuc3BsaWNlKGluZGV4QXR0cmlidXRlLCAxKTtcclxuICAgICAgICBkaXNwbGF5ZXIodGFza0FycilcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrQXJyKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcGxheWVyKHRhc2tBcnIpXHJcbiAgICAgIGNvbnNvbGUubG9nKHRhc2tBcnIpXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgZGVsZXRlRnVuY3Rpb24gfSBmcm9tIFwiLi90b2RvLmpzXCI7XHJcblxyXG5jb25zdCB0YXNrU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1NwYWNlJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrRE9NKHRpdGxlVGV4dCwgZGVzY3JpcHRpb25UZXh0LCBwcmlvcml0eVRleHQsIGR1ZURhdGVUZXh0LCBpbmRleCkge1xyXG4gIC8vIENyZWF0ZSB0YXNrIGNhcmQgZWxlbWVudHNcclxuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZC5jbGFzc05hbWUgPSAnY2FyZCB0YXNrLWNhcmQnO1xyXG4gIGNhcmQuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpXHJcblxyXG4gIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHJvdy5jbGFzc05hbWUgPSAncm93IG5vLWd1dHRlcnMnO1xyXG5cclxuICBjb25zdCBjb2xJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29sSWNvbi5jbGFzc05hbWUgPSAnY29sLW1kLTIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGJnLXByaW1hcnkgdGV4dC13aGl0ZSBwb3NpdGlvbi1yZWxhdGl2ZSc7XHJcblxyXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgaWNvbi5jbGFzc05hbWUgPSAnZmFzIGZhLXRhc2tzIGZhLTJ4JztcclxuXHJcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gIGNoZWNrYm94LmNsYXNzTmFtZSA9ICdiaWctY2hlY2tib3gnO1xyXG4gIGNoZWNrYm94LmFyaWFMYWJlbCA9ICdUYXNrIENvbXBsZXRlJztcclxuXHJcbiAgY29uc3QgY29sQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbEJvZHkuY2xhc3NOYW1lID0gJ2NvbC1tZC0xMCc7XHJcblxyXG4gIGNvbnN0IGNhcmRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY2FyZEJvZHkuY2xhc3NOYW1lID0gJ2NhcmQtYm9keSc7XHJcblxyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuICB0aXRsZS5jbGFzc05hbWUgPSAnY2FyZC10aXRsZSc7XHJcbiAgdGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZVRleHQ7XHJcblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGRlc2NyaXB0aW9uLmNsYXNzTmFtZSA9ICdjYXJkLXRleHQgZGVzY3JpcHRpb24nO1xyXG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb25UZXh0O1xyXG5cclxuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwcmlvcml0eS5jbGFzc05hbWUgPSAnY2FyZC10ZXh0IHByaW9yaXR5JztcclxuICBwcmlvcml0eS5pbm5lckhUTUwgPSBgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPjxpIGNsYXNzPVwiZmFzIGZhLWZsYWdcIj48L2k+IFByaW9yaXR5OiAke3ByaW9yaXR5VGV4dH08L3NtYWxsPmA7XHJcblxyXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgZHVlRGF0ZS5jbGFzc05hbWUgPSAnY2FyZC10ZXh0JztcclxuICBkdWVEYXRlLmlubmVySFRNTCA9IGA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2FsZW5kYXItZGF5XCI+PC9pPiBEdWUgRGF0ZTogPHNwYW4gaWQ9XCJkdWVEYXRlXCI+JHtkdWVEYXRlVGV4dH08L3NwYW4+PC9zbWFsbD5gO1xyXG5cclxuICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBidXR0b25Db250YWluZXIuY2xhc3NOYW1lID0gJ2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXInO1xyXG5cclxuICBjb25zdCBidXR0b25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgZWRpdEJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi13YXJuaW5nIGJ0bi1zbSc7XHJcbiAgZWRpdEJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtZWRpdFwiPjwvaT4gRWRpdCc7XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi1kYW5nZXIgYnRuLXNtJztcclxuICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoXCI+PC9pPiBEZWxldGUnO1xyXG5cclxuICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNoZWNrYm94Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdmb3JtLWNoZWNrJztcclxuICBjaGVja2JveENvbnRhaW5lci5pZCA9ICdkaXZGb3JDaGVja0JveCc7XHJcblxyXG4gIGNvbnN0IHRhc2tDb21wbGV0ZWRDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgdGFza0NvbXBsZXRlZENoZWNrYm94LmNsYXNzTmFtZSA9ICdmb3JtLWNoZWNrLWlucHV0JztcclxuICB0YXNrQ29tcGxldGVkQ2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgdGFza0NvbXBsZXRlZENoZWNrYm94LmlkID0gJ3Rhc2tDb21wbGV0ZWQnO1xyXG5cclxuICBjb25zdCB0YXNrQ29tcGxldGVkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIHRhc2tDb21wbGV0ZWRMYWJlbC5jbGFzc05hbWUgPSAnZm9ybS1jaGVjay1sYWJlbCc7XHJcbiAgdGFza0NvbXBsZXRlZExhYmVsLmh0bWxGb3IgPSAndGFza0NvbXBsZXRlZCc7XHJcbiAgdGFza0NvbXBsZXRlZExhYmVsLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlZCc7XHJcblxyXG4gIC8vIEFwcGVuZCBlbGVtZW50c1xyXG4gIGNvbEljb24uYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgY29sSWNvbi5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcblxyXG4gIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xyXG4gIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XHJcblxyXG4gIGNoZWNrYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb21wbGV0ZWRDaGVja2JveCk7XHJcbiAgY2hlY2tib3hDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbXBsZXRlZExhYmVsKTtcclxuXHJcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkdyb3VwKTtcclxuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXIpO1xyXG5cclxuICBjYXJkQm9keS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gIGNhcmRCb2R5LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcclxuICBjYXJkQm9keS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcclxuICBjYXJkQm9keS5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xyXG5cclxuICBjb2xCb2R5LmFwcGVuZENoaWxkKGNhcmRCb2R5KTtcclxuXHJcbiAgcm93LmFwcGVuZENoaWxkKGNvbEljb24pO1xyXG4gIHJvdy5hcHBlbmRDaGlsZChjb2xCb2R5KTtcclxuXHJcbiAgY2FyZC5hcHBlbmRDaGlsZChyb3cpO1xyXG5cclxuICAvLyBBcHBlbmQgY2FyZCB0byBjb250YWluZXJcclxuICB0YXNrU3BhY2UuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcblxyXG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICBkZWxldGVGdW5jdGlvbihjYXJkKVxyXG4gIH0pXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCB0YXNrU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1NwYWNlJylcclxuXHJcbmltcG9ydCBwcm9qZWN0QXJyYXkgZnJvbSBcIi4vbG9jYWxTdG9yYWdlLmpzXCJcclxuaW1wb3J0IG5ld1Byb2plY3RQb3BVcEZvcm0gZnJvbSBcIi4vdGFza0Zvcm0uanNcIjtcclxuXHJcbi8vIGltcG9ydCAnLi9jc3MvcHJvamVjdERPTS5jc3MnO1xyXG5cclxuXHJcbmltcG9ydCB0YXNrRE9NIGZyb20gXCIuL3RvZG9ET00uanNcIjtcclxuXHJcbmltcG9ydCBjcmVhdGVTZXR0aW5nc1BhZ2UgZnJvbSBcIi4vc2V0dGluZ3MuanNcIjtcclxuXHJcblxyXG5jb25zdCBzZXR0aW5nc0ljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0dGluZ3NJY29uJyk7XHJcbmNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJOYW1lJyk7XHJcblxyXG5zZXR0aW5nc0ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgY3JlYXRlU2V0dGluZ3NQYWdlKHRhc2tTcGFjZSwgdXNlck5hbWUpXHJcblxyXG59KVxyXG5cclxuXHJcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFzaycpXHJcblxyXG5sZXQgaXNPbiA9ICB0cnVlXHJcbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgaWYoaXNPbil7XHJcbiAgICAgICAgdGFza1NwYWNlLmFwcGVuZChuZXdQcm9qZWN0UG9wVXBGb3JtKCkpXHJcbiAgICB9ZWxzZXtcclxuICAgICAgIG5ld1Byb2plY3RQb3BVcEZvcm0oKS5yZW1vdmUoKVxyXG4gICAgfVxyXG4gICAgaXNPbiA9ICFpc09uXHJcblxyXG59KVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=