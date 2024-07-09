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
var myProjectManager = new _projectManager_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
if (myProjectManager.allProjectFolder.length >= 1) {
  myProjectManager.displayer();
}

// Export function to access ProjectManager
var theManager = function theManager() {
  return myProjectManager;
};

// // Selecting elements by ID
var taskSpace = document.getElementById('taskSpace');
var allTodosItem = document.querySelectorAll('.allTodos');
var todayItem = document.querySelectorAll('.TodayTodos');
var completedItem = document.querySelectorAll('.CompletedTodo');
var upcomingItem = document.querySelectorAll('.UpcomingTodo');
var missedItem = document.querySelectorAll('.MissedTodo');
var homePage = document.querySelectorAll('.homePage');
var sidebarContainer = document.getElementById('sidebarContainer');
var sidebarIcon = document.getElementById('sidebarIcon');
var mainSpaceCol = document.getElementById('mainSpaceCol');
var navMenuRow = document.getElementById('navMenuRow');

// Event Listeners
homePage.forEach(function (menu) {
  return menu.addEventListener('click', function () {
    myProjectManager.homePage();
    myProjectManager.saveProjects();
  });
});
allTodosItem.forEach(function (menu) {
  return menu.addEventListener('click', function () {
    myProjectManager.allTodos();
    myProjectManager.saveProjects();
  });
});
todayItem.forEach(function (menu) {
  return menu.addEventListener('click', function () {
    console.log('Today item clicked');
    myProjectManager.todayTodos();
    myProjectManager.saveProjects();
  });
});
completedItem.forEach(function (menu) {
  return menu.addEventListener('click', function () {
    myProjectManager.completedTask();
    myProjectManager.saveProjects();
  });
});
upcomingItem.forEach(function (menu) {
  return menu.addEventListener('click', function () {
    myProjectManager.pendingTodo();
  });
});
missedItem.forEach(function (menu) {
  return menu.addEventListener('click', function () {
    // Handle click on Missed item
    myProjectManager.missedTasks();
  });
});
sidebarIcon.addEventListener('click', function () {
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
  var projects = localStorage.getItem('projects');
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


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
    key: "simpleDisplayer",
    value: function simpleDisplayer(array) {
      (0,_todoDOM_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array);
    }
  }, {
    key: "displayer",
    value: function displayer(array) {
      space.innerHTML = "";
      (0,_todoDOM_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array);
      this.dom();
      (0,_taskForm_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array);
      this.newTaskFormBtn(array);
    }
  }, {
    key: "newTaskFormBtn",
    value: function newTaskFormBtn(selectArray) {
      var addTaskBtn = document.getElementById('addTaskButton');
      addTaskBtn.addEventListener('click', function () {
        var theForm = (0,_taskForm_js__WEBPACK_IMPORTED_MODULE_1__["default"])(selectArray);
        space.append(theForm);
        theForm.style.display = 'block';
      });
    }
  }, {
    key: "dom",
    value: function dom() {
      var addTaskButton = document.createElement('button');
      addTaskButton.textContent = 'Add Task';
      addTaskButton.id = 'addTaskButton';
      addTaskButton.className = 'btn btn-secondary';
      addTaskButton.style.width = '100%';
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
  var colorOptions = ['None', 'Red', 'Green', 'Blue', 'Pink', 'Yellow', 'Brown'];
  colorOptions.forEach(function (option) {
    var optionElement = document.createElement('option');
    optionElement.textContent = option;
    colorSelect.appendChild(optionElement);
  });
  modalBody.appendChild(colorLabel);
  modalBody.appendChild(colorSelect);

  // Save button
  var saveButton = document.createElement('button');
  saveButton.className = 'btn btn-primary mt-2';
  saveButton.id = 'saveBtnNewProject';
  saveButton.textContent = 'Create Folder';
  modalBody.appendChild(saveButton);
  var cancelButton = document.createElement('button');
  cancelButton.type = 'button';
  cancelButton.textContent = 'Cancel';
  cancelButton.className = 'btn btn-danger mt-2 ms-2';
  cancelButton.addEventListener('click', function () {
    modalContainer.style.display = 'none';
  });
  modalBody.appendChild(cancelButton);

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
    nameInput.value = '';
    colorSelect.selectedIndex = 0;
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
    this.allProjectFolder = [];
    this.loadProjects();
    if (this.allProjectFolder.length === 0) {
      this.userData();
    }
  }
  return _createClass(ProjectManager, [{
    key: "userData",
    value: function userData() {
      var _this = this;
      var nameForm = document.getElementById('nameForm');
      nameForm.style.display = 'block';
      var userNameStorage = JSON.parse(localStorage.getItem('userName')) || 'User';
      localStorage.setItem('userName', JSON.stringify(userNameStorage));
      var navUserName = document.getElementById('navUserName');
      nameForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var userNameInput = document.getElementById('userName');
        var userName = userNameInput.value;
        if (userName) {
          localStorage.setItem('userName', JSON.stringify(userName));
          console.log('Name saved:', userName);
          _this.addNewProject(0, 'Default', 'black');
          nameForm.style.display = 'none';
          _this.displayer();
        } else {
          console.log('User name is empty.');
          var errorMessage = document.getElementById('errorMessage');
          errorMessage.textContent = 'Name cannot be empty.';
        }
      });
    }
  }, {
    key: "homePage",
    value: function homePage() {
      space.style.backgroundColor = '#cedbe9';
      title.innerHTML = 'Home';
      this.displayer();
    }
  }, {
    key: "allTodos",
    value: function allTodos() {
      space.innerHTML = '';
      title.innerText = 'All Todos';
      this.allProjectFolder.forEach(function (todo) {
        var allTodosVar = todo.project;
        if (allTodosVar === '') {
          space.innerHTML = '<h4>No Task Found</h4>';
        }
        _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.simpleDisplayer(allTodosVar);
      });
    }
  }, {
    key: "completedTask",
    value: function completedTask() {
      space.innerHTML = '';
      title.innerText = 'Completed Tasks';
      var completedTasksFound = false;
      this.allProjectFolder.forEach(function (projects) {
        projects.project.forEach(function (task) {
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
  }, {
    key: "pendingTodo",
    value: function pendingTodo() {
      space.innerHTML = '';
      title.innerText = 'Pending Tasks';
      var today = new Date();
      var pendingTasks = [];
      this.allProjectFolder.forEach(function (projects) {
        projects.project.forEach(function (task) {
          var dueDate = new Date(task.dueDate);
          if (task.isCompleted === false && today <= dueDate) {
            pendingTasks.push(task);
          }
        });
      });
      if (pendingTasks.length > 0) {
        pendingTasks.forEach(function (task) {
          _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.simpleDisplayer([task]);
        });
      } else {
        space.innerHTML = '<h4>No Pending Tasks Found</h4>';
      }
    }
  }, {
    key: "todayTodos",
    value: function todayTodos() {
      var today = new Date();
      var options = {
        weekday: 'long',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      };
      var localDate = today.toLocaleDateString('en-GB', options);
      space.innerHTML = '';
      title.innerText = 'Today Tasks';
      this.allProjectFolder.forEach(function (projects) {
        projects.project.forEach(function (task) {
          if (task.dueDate === localDate) {
            _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.simpleDisplayer([task]);
          }
        });
      });
    }
  }, {
    key: "missedTasks",
    value: function missedTasks() {
      space.innerHTML = '';
      title.innerText = 'Missed Tasks';
      var today = new Date();
      var missedTasks = [];
      this.allProjectFolder.forEach(function (projects) {
        projects.project.forEach(function (task) {
          var dueDate = new Date(task.dueDate);
          if (task.isCompleted === false && today > dueDate) {
            missedTasks.push(task);
            title.style.backgroundColor = 'red';
          }
        });
      });
      if (missedTasks.length > 0) {
        missedTasks.forEach(function (task) {
          _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.simpleDisplayer([task]);
        });
      } else {
        space.innerHTML = '<h4>No Missed Tasks Found</h4>';
      }
    }
  }, {
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
      var newProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](id, name, color);
      this.allProjectFolder.push(newProject);
      this.saveProjects();
      return newProject;
    }
  }, {
    key: "deleteProject",
    value: function deleteProject(index) {
      var comfirm = confirm('Are you sure you want to delete this Task?');
      if (comfirm) {
        this.allProjectFolder.splice(index, 1);
        this.saveProjects();
        this.projectPageandSideBarDOM(this.allProjectFolder);
        this.newProjectBtn();
      }
    }
  }, {
    key: "displayer",
    value: function displayer() {
      space.innerHTML = '';
      title.innerHTML = 'Home';
      navUserName.textContent = JSON.parse(localStorage.getItem('userName'));
      space.style.backgroundColor = '';
      this.projectPageandSideBarDOM(this.allProjectFolder);
      this.newProjectBtn();
      this.newProjectForm(this.allProjectFolder);
      this.footer();
    }
  }, {
    key: "newProjectBtn",
    value: function newProjectBtn() {
      var newProjectBtn = document.createElement('button');
      newProjectBtn.textContent = 'Add Project';
      newProjectBtn.id = 'addProject';
      newProjectBtn.className = 'btn btn-primary createNewProject';
      newProjectBtn.style.width = '100%';
      space.append(newProjectBtn);
      var createNewProject = document.querySelectorAll('.createNewProject');
      createNewProject.forEach(function (btn) {
        btn.addEventListener('click', function () {
          _projectDom_js__WEBPACK_IMPORTED_MODULE_1__["default"].openModal();
        });
      });
    }
  }, {
    key: "newProjectForm",
    value: function newProjectForm(project) {
      var _this2 = this;
      var saveBtnNewProject = _projectDom_js__WEBPACK_IMPORTED_MODULE_1__["default"].saveButton;
      saveBtnNewProject.addEventListener('click', function () {
        var name = _projectDom_js__WEBPACK_IMPORTED_MODULE_1__["default"].nameInput.value;
        var color = _projectDom_js__WEBPACK_IMPORTED_MODULE_1__["default"].colorSelect.value;
        var id = _this2.allProjectFolder.length + 1;
        var duplicateProject = _this2.allProjectFolder.find(function (item) {
          return item.name === name;
        });
        if (duplicateProject) {
          alert('A project with this name already exists.');
        } else {
          _this2.addNewProject(id, name, color);
          _this2.projectPageandSideBarDOM(project);
          _projectDom_js__WEBPACK_IMPORTED_MODULE_1__["default"].closeModal();
          _this2.newProjectBtn();
        }
      });
    }
  }, {
    key: "getSelectedProjectArray",
    value: function getSelectedProjectArray(array) {
      _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.simpleDisplayer(array);
      this.saveProjects();
      return array;
    }
  }, {
    key: "refresher",
    value: function refresher(disArray) {
      _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.simpleDisplayer(disArray);
      this.saveProjects();
    }
  }, {
    key: "projectPageandSideBarDOM",
    value: function projectPageandSideBarDOM(projects) {
      var _this3 = this;
      var newProjectUL = document.getElementById('newProjectUL');
      newProjectUL.innerHTML = '';
      space.innerHTML = '';
      title.innerText = 'My Projects';
      projects.forEach(function (project, index) {
        // Sidebar Project List
        var listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.id = 'projectFolder';
        listItem.setAttribute('data-index', index);
        var icon = document.createElement('i');
        icon.className = 'fa-solid fa-folder project-icon';
        icon.style.color = project.color;
        var projectName = document.createElement('span');
        projectName.className = 'project-name';
        projectName.textContent = project.name;
        listItem.append(icon);
        listItem.append(projectName);
        listItem.style.backgroundColor = 'White';
        listItem.addEventListener('click', function () {
          var getProjectArray = project.project;
          _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.displayer(getProjectArray);
          title.innerText = project.name;
        });
        newProjectUL.append(listItem);

        // Main Space Project Cards
        var listItemTaskSpace = document.createElement('li');
        listItemTaskSpace.className = 'project-card';
        listItemTaskSpace.setAttribute('data-index', index);
        var cardIcon = document.createElement('i');
        cardIcon.className = 'fa-solid fa-folder project-card-icon';
        cardIcon.style.color = project.color;
        listItemTaskSpace.append(cardIcon);
        var cardTitle = document.createElement('span');
        cardTitle.className = 'project-card-title';
        cardTitle.innerText = project.name;
        listItemTaskSpace.append(cardTitle);
        var deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-solid fa-trash delete-icon';
        deleteIcon.id = 'deleteProject';
        deleteIcon.style.padding = '5px';
        deleteIcon.addEventListener('click', function (e) {
          e.stopPropagation();
          var index = parseInt(listItemTaskSpace.getAttribute('data-index'));
          _this3.deleteProject(index);
        });
        listItemTaskSpace.appendChild(deleteIcon);
        space.append(listItemTaskSpace);
        listItemTaskSpace.addEventListener('click', function () {
          var getProjectArray = project.project;
          _project_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.displayer(getProjectArray);
          title.innerText = project.name;
        });
      });
    }
  }, {
    key: "footer",
    value: function footer() {
      var footer = document.createElement('footer');
      footer.innerHTML = '&copy; 2024 by Mo_Mansur ';
      var link = document.createElement('a');
      link.href = 'https://github.com/MoMansur';
      link.className = 'link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover';
      var linkText = document.createTextNode(' Mo_Mansur GitHub');
      link.appendChild(linkText);
      footer.appendChild(link);
      var remainingText = document.createTextNode('. All rights reserved.');
      footer.appendChild(remainingText);
      footer.style.textAlign = 'center';
      space.appendChild(footer);
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
/* harmony export */   "default": () => (/* binding */ newTaskFormDOM)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var space = document.getElementById('space');
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
  descriptionInput.maxLength = 40;
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
  dueDateInput.required = true;
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
    function formatDateToDMY(date) {
      var _date$split = date.split('-'),
        _date$split2 = _slicedToArray(_date$split, 3),
        year = _date$split2[0],
        month = _date$split2[1],
        day = _date$split2[2];
      var dateObject = new Date(year, month - 1, day);
      var dayName = dateObject.toLocaleDateString('en-US', {
        weekday: 'long'
      }); // Get the day name
      var formattedDate = "".concat(day, "/").concat(month, "/").concat(year);
      return "".concat(dayName, ", ").concat(formattedDate);
    }
    e.preventDefault();
    if (!dueDateInput.value) {
      dueDateInput.classList.add('is-invalid');
      return;
    } else {
      dueDateInput.classList.remove('is-invalid');
    }
    var title = titleInput.value;
    var description = descriptionInput.value;
    var dueDate = dueDateInput.value;
    var priority = prioritySelect.value;
    var newTask = new _todo_js__WEBPACK_IMPORTED_MODULE_2__["default"](title, description, formatDateToDMY(dueDate), priority, false);
    selectArray.push(newTask);
    _project_js__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.displayer(selectArray);
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
/* harmony import */ var _projectManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager.js */ "./src/projectManager.js");
/* harmony import */ var _taskForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskForm.js */ "./src/taskForm.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var space = document.getElementById('space');
var Task = /*#__PURE__*/function () {
  function Task(title, description, dueDate, priority) {
    var isCompleted = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    _classCallCheck(this, Task);
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isCompleted = isCompleted;
  }
  return _createClass(Task, [{
    key: "completedFunc",
    value: function completedFunc(checkbox) {
      this.isCompleted = checkbox.checked;
      console.log(this.isCompleted);
      return this.isCompleted;
    }
  }, {
    key: "statusChange",
    value: function statusChange(task, status) {
      var projects = JSON.parse(localStorage.getItem('projects')) || [];
      task.isCompleted = status;
      localStorage.setItem('projects', JSON.stringify(projects));
      (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.theManager)().saveProjects();
    }
  }, {
    key: "deleteTask",
    value: function deleteTask(project, index) {
      var comfirm = confirm('Are you sure you want to delete this Task?');
      var projects = JSON.parse(localStorage.getItem('projects')) || [];
      if (comfirm) {
        project.splice(index, 1);
        localStorage.setItem('projects', JSON.stringify(projects));
        document.querySelector(".card.task-card[data-index=\"".concat(index, "\"]")).remove();
      }
    }
  }, {
    key: "editTask",
    value: function editTask(task, selectArray) {
      var _this = this;
      var formContainer = (0,_taskForm_js__WEBPACK_IMPORTED_MODULE_1__["default"])([]);
      space.appendChild(formContainer);
      var form = formContainer.querySelector('form');
      var titleInput = form.querySelector('#projectTitle');
      var descriptionInput = form.querySelector('#projectDescription');
      var dueDateInput = form.querySelector('#projectDueDate');
      var prioritySelect = form.querySelector('#projectPriority');

      // Pre-fill the form with the current task values
      titleInput.value = task.title;
      descriptionInput.value = task.description;
      dueDateInput.value = this.formatDateToDMY(task.dueDate);
      prioritySelect.value = task.priority;
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        task.title = titleInput.value;
        task.description = descriptionInput.value;
        if (dueDateInput.value) {
          task.dueDate = _this.formatDateToDMY(dueDateInput.value);
        }
        task.priority = prioritySelect.value;
        var projects = JSON.parse(localStorage.getItem('projects')) || [];
        localStorage.setItem('projects', JSON.stringify(projects));
        (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.theManager)().saveProjects();
        _project_js__WEBPACK_IMPORTED_MODULE_3__["default"].prototype.displayer(selectArray);

        // Hide the form container
        formContainer.style.display = 'none';
      });
      formContainer.style.display = 'block';
    }
  }, {
    key: "formatDateToDMY",
    value: function formatDateToDMY(date) {
      var _date$split = date.split('-'),
        _date$split2 = _slicedToArray(_date$split, 3),
        year = _date$split2[0],
        month = _date$split2[1],
        day = _date$split2[2]; // Assuming the date is initially in 'year-month-day' format
      var dateObject = new Date(year, month - 1, day); // Create a Date object
      var dayName = dateObject.toLocaleDateString('en-US', {
        weekday: 'long'
      }); // Get the day name
      var formattedDate = "".concat(day, "/").concat(month, "/").concat(year);
      return "".concat(dayName, ", ").concat(formattedDate);
    }
  }]);
}();


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
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _projectManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectManager.js */ "./src/projectManager.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");



function taskDOM(projectArray) {
  var space = document.getElementById('space');
  projectArray.forEach(function (task, index) {
    var titleText = task.title;
    var descriptionText = task.description;
    var dueDateText = task.dueDate;
    var priorityText = task.priority;
    var isCompleted = task.isCompleted;
    var card = document.createElement('div');
    card.className = 'card task-card mb-3';
    card.setAttribute('data-index', index);
    var row = document.createElement('div');
    row.className = 'row no-gutters';
    var priorityBar = document.createElement('div');
    priorityBar.className = 'priority-bar';
    switch (priorityText.toLowerCase()) {
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
    var titleContainer = document.createElement('div');
    titleContainer.className = 'col-md-2 w-100 d-flex align-items-center justify-content-center text-white position-relative';
    titleContainer.id = 'titleContainer';
    var title = document.createElement('h2');
    title.className = 'card-title';
    title.textContent = titleText;
    titleContainer.style.backgroundColor = priorityBar.style.backgroundColor;
    titleContainer.appendChild(priorityBar);
    titleContainer.appendChild(title);
    var labelContainer = document.createElement('div');
    labelContainer.className = 'label-container d-flex justify-content-between';
    var descriptionLabel = document.createElement('span');
    descriptionLabel.className = 'label';
    descriptionLabel.innerHTML = "<small class=\"text-muted\"><i class=\"fa-solid fa-note-sticky\"></i> Description</small>";
    descriptionLabel.id = 'descriptionLabelTask';
    var dueDateLabel = document.createElement('span');
    dueDateLabel.className = 'label';
    dueDateLabel.innerHTML = "<small class=\"text-muted\"><i class=\"fas fa-calendar-day\"></i> Due Date</small>";
    var priorityLabel = document.createElement('span');
    priorityLabel.className = 'label';
    priorityLabel.innerHTML = "<small class=\"text-muted\"><i class=\"fas fa-flag\"></i> Priority</small>";
    labelContainer.appendChild(descriptionLabel);
    labelContainer.appendChild(dueDateLabel);
    labelContainer.appendChild(priorityLabel);
    titleContainer.appendChild(labelContainer);
    var elementContainer = document.createElement('div');
    elementContainer.className = 'element-container d-flex align-items-center';
    elementContainer.id = 'elementContainer';
    var description = document.createElement('span');
    description.className = 'col-8 card-text description';
    description.textContent = descriptionText;
    description.id = 'carddescription';
    var viewButton = document.createElement('button');
    viewButton.classList.add('btn', 'btn-outline-primary', 'view-button', 'd-lg-none', 'd-md-none');
    viewButton.id = 'viewDescription';
    viewButton.innerHTML = '<i class="fa-solid fa-eye"></i>';

    // viewButton.style.display = 'flex'
    var isClicked = true;
    viewButton.addEventListener('click', function () {
      description.classList.toggle('d-none');
      if (isClicked) {
        viewButton.innerHTML = '<i class="fa-solid fa-eye"></i>';
        description.style.display = 'none';
        dueDate.style.display = 'flex';
        priority.style.display = 'flex';
      } else {
        description.style.display = 'flex';
        dueDate.style.display = 'none';
        priority.style.display = 'none';
        viewButton.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
      }
      isClicked = !isClicked;
    });
    var priority = document.createElement('p');
    priority.className = 'card-text priority';
    priority.innerHTML = "<small class=\"text-muted\"><i class=\"fas fa-flag\"></i> ".concat(priorityText, "</small>");
    var dueDate = document.createElement('p');
    dueDate.className = 'card-text';
    dueDate.innerHTML = "<small class=\"text-muted\">\n    <i class=\"fas fa-calendar-day\"></i> ".concat(dueDateText, "</small>");
    dueDate.setAttribute('required', true);
    var cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    cardBody.appendChild(elementContainer);
    var buttonContainer = document.createElement('div');
    buttonContainer.className = 'd-flex align-items-center p-2';
    buttonContainer.id = 'buttonContainer';
    var buttonGroup = document.createElement('div');
    buttonGroup.style.margin = '10px';
    var editButton = document.createElement('button');
    editButton.className = 'btn btn-warning btn-sm m-2';
    editButton.id = 'editBtnOfTask';
    editButton.innerHTML = '<i class="fas fa-edit"></i> Edit';
    var deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.id = 'deletebtnOfTask';
    deleteButton.innerHTML = '<i class="fas fa-trash"></i> Delete';
    buttonContainer.style.padding = '10px';
    var checkboxSpan = document.createElement('span');
    checkboxSpan.className = 'checkbox-span';
    checkboxSpan.style.margin = '10px';
    checkboxSpan.id = 'checkBoxSpanOfTask';
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'form-check-input form-check-input-lg';
    checkbox.ariaLabel = 'Task Complete';
    var statusText = document.createElement('span');
    statusText.className = 'status-text';
    elementContainer.appendChild(description);
    elementContainer.appendChild(viewButton);
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
    editButton.addEventListener('click', function () {
      _todo_js__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.editTask(task, projectArray);
    });

    ///////////////////////

    if (task.isCompleted) {
      checkbox.checked = true;
      statusText.textContent = 'Completed';
      checkboxSpan.style.backgroundColor = 'green';
      row.style.backgroundColor = 'lightgrey';
      checkbox.style.color = 'white';
      checkboxSpan.style.padding = '15px';
    } else {
      checkbox.checked = false;
      statusText.textContent = 'Incomplete';
      checkboxSpan.style.backgroundColor = 'lightgrey';
      checkboxSpan.style.padding = '15px';
      row.style.backgroundColor = 'white';
    }
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        statusText.textContent = 'Completed';
        checkboxSpan.style.backgroundColor = 'green';
        row.style.backgroundColor = 'lightgrey';
        checkbox.style.color = 'white';
        checkboxSpan.style.padding = '15px';
        _todo_js__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.statusChange(task, true);
      } else {
        statusText.textContent = 'Incomplete';
        checkboxSpan.style.backgroundColor = 'lightgrey';
        checkboxSpan.style.padding = '15px';
        row.style.backgroundColor = 'white';
        _todo_js__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.statusChange(task, false);
      }
    });
    deleteButton.addEventListener('click', function () {
      _todo_js__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.deleteTask(projectArray, index, task);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O01BQzFDO0lBQ0YsQ0FBQyxDQUFDO0lBR0ZxSCxZQUFZLENBQUNoTixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtNQUMzQ2lKLGdEQUFJLENBQUN4RCxTQUFTLENBQUNrRyxVQUFVLENBQUNHLFlBQVksRUFBRW5GLEtBQUssRUFBRWhCLElBQUksQ0FBQztJQUN0RCxDQUFDLENBQUM7RUFHRixDQUFDLENBQUM7QUFDSjs7Ozs7O1VDblBBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcHJvamVjdERvbS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wcm9qZWN0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90YXNrRm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3RvZG9ET00uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2plY3RNYW5hZ2VyIGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyLmpzXCI7XHJcblxyXG4vLyBJbml0aWFsaXplIFByb2plY3RNYW5hZ2VyXHJcbmNvbnN0IG15UHJvamVjdE1hbmFnZXIgPSBuZXcgUHJvamVjdE1hbmFnZXIoKTtcclxuaWYgKG15UHJvamVjdE1hbmFnZXIuYWxsUHJvamVjdEZvbGRlci5sZW5ndGggPj0gMSkge1xyXG4gIG15UHJvamVjdE1hbmFnZXIuZGlzcGxheWVyKClcclxufVxyXG5cclxuLy8gRXhwb3J0IGZ1bmN0aW9uIHRvIGFjY2VzcyBQcm9qZWN0TWFuYWdlclxyXG5leHBvcnQgY29uc3QgdGhlTWFuYWdlciA9ICgpID0+IG15UHJvamVjdE1hbmFnZXI7XHJcblxyXG5cclxuXHJcbi8vIC8vIFNlbGVjdGluZyBlbGVtZW50cyBieSBJRFxyXG5jb25zdCB0YXNrU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1NwYWNlJyk7XHJcbmNvbnN0IGFsbFRvZG9zSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbGxUb2RvcycpO1xyXG5jb25zdCB0b2RheUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuVG9kYXlUb2RvcycpO1xyXG5jb25zdCBjb21wbGV0ZWRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLkNvbXBsZXRlZFRvZG8nKTtcclxuY29uc3QgdXBjb21pbmdJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLlVwY29taW5nVG9kbycpO1xyXG5jb25zdCBtaXNzZWRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLk1pc3NlZFRvZG8nKTtcclxuY29uc3QgaG9tZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZVBhZ2UnKTtcclxuXHJcbmNvbnN0IHNpZGViYXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhckNvbnRhaW5lcicpO1xyXG5jb25zdCBzaWRlYmFySWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlYmFySWNvbicpO1xyXG5jb25zdCBtYWluU3BhY2VDb2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpblNwYWNlQ29sJyk7XHJcbmNvbnN0IG5hdk1lbnVSb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2TWVudVJvdycpO1xyXG5cclxuXHJcbi8vIEV2ZW50IExpc3RlbmVyc1xyXG5ob21lUGFnZS5mb3JFYWNoKG1lbnUgPT4gbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBteVByb2plY3RNYW5hZ2VyLmhvbWVQYWdlKCk7XHJcbiAgbXlQcm9qZWN0TWFuYWdlci5zYXZlUHJvamVjdHMoKTtcclxufSkpO1xyXG5cclxuYWxsVG9kb3NJdGVtLmZvckVhY2gobWVudSA9PiBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIG15UHJvamVjdE1hbmFnZXIuYWxsVG9kb3MoKTtcclxuICBteVByb2plY3RNYW5hZ2VyLnNhdmVQcm9qZWN0cygpO1xyXG59KSk7XHJcblxyXG50b2RheUl0ZW0uZm9yRWFjaChtZW51ID0+IG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ1RvZGF5IGl0ZW0gY2xpY2tlZCcpO1xyXG4gIG15UHJvamVjdE1hbmFnZXIudG9kYXlUb2RvcygpO1xyXG4gIG15UHJvamVjdE1hbmFnZXIuc2F2ZVByb2plY3RzKCk7XHJcbn0pKTtcclxuXHJcbmNvbXBsZXRlZEl0ZW0uZm9yRWFjaChtZW51ID0+IG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgbXlQcm9qZWN0TWFuYWdlci5jb21wbGV0ZWRUYXNrKCk7XHJcbiAgbXlQcm9qZWN0TWFuYWdlci5zYXZlUHJvamVjdHMoKTtcclxufSkpO1xyXG5cclxudXBjb21pbmdJdGVtLmZvckVhY2gobWVudSA9PiBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIG15UHJvamVjdE1hbmFnZXIucGVuZGluZ1RvZG8oKTtcclxufSkpO1xyXG5cclxubWlzc2VkSXRlbS5mb3JFYWNoKG1lbnUgPT4gbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAvLyBIYW5kbGUgY2xpY2sgb24gTWlzc2VkIGl0ZW1cclxuICBteVByb2plY3RNYW5hZ2VyLm1pc3NlZFRhc2tzKClcclxufSkpO1xyXG5cclxuc2lkZWJhckljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgaWYgKGlzQ2xpY2tlZCkge1xyXG4gICAgc2lkZWJhckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgbWFpblNwYWNlQ29sLmNsYXNzTmFtZSA9ICdjb2wtMTInO1xyXG4gICAgbmF2TWVudVJvdy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIHRhc2tTcGFjZS5zdHlsZS5wYWRkaW5nID0gJzEwcHgnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzaWRlYmFyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgbWFpblNwYWNlQ29sLmNsYXNzTmFtZSA9ICdjb2wtMTAnO1xyXG4gICAgbmF2TWVudVJvdy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxuICBpc0NsaWNrZWQgPSAhaXNDbGlja2VkO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJleHBvcnQgZnVuY3Rpb24gbG9hZFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuICBjb25zdCBwcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpO1xyXG4gIHJldHVybiBwcm9qZWN0cyA/IEpTT04ucGFyc2UocHJvamVjdHMpIDogW107XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZShhbGxQcm9qZWN0Rm9sZGVyKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdEZvbGRlcikpO1xyXG59XHJcbiIsImltcG9ydCB0YXNrRE9NIGZyb20gXCIuL3RvZG9ET00uanNcIjtcclxuaW1wb3J0IG5ld1Rhc2tGb3JtRE9NIGZyb20gXCIuL3Rhc2tGb3JtLmpzXCI7XHJcblxyXG5jb25zdCBzcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGFjZScpO1xyXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IoaWQsIG5hbWUsIGNvbG9yKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy5wcm9qZWN0ID0gW107XHJcbiAgfVxyXG5cclxuXHJcbiAgc2ltcGxlRGlzcGxheWVyKGFycmF5KXtcclxuICAgIHRhc2tET00oYXJyYXkpXHJcbiAgfVxyXG4gIFxyXG4gIGRpc3BsYXllcihhcnJheSkge1xyXG4gICAgc3BhY2UuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIHRhc2tET00oYXJyYXkpXHJcbiAgICB0aGlzLmRvbSgpO1xyXG4gICAgbmV3VGFza0Zvcm1ET00oYXJyYXkpXHJcbiAgICB0aGlzLm5ld1Rhc2tGb3JtQnRuKGFycmF5KVxyXG4gIH1cclxuXHJcblxyXG4gIG5ld1Rhc2tGb3JtQnRuKHNlbGVjdEFycmF5KXtcclxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFza0J1dHRvbicpO1xyXG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgdGhlRm9ybSA9IG5ld1Rhc2tGb3JtRE9NKHNlbGVjdEFycmF5KTtcclxuICAgICAgc3BhY2UuYXBwZW5kKHRoZUZvcm0pO1xyXG4gICAgICB0aGVGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkb20oKSB7XHJcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBhZGRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcclxuICAgIGFkZFRhc2tCdXR0b24uaWQgPSAnYWRkVGFza0J1dHRvbic7XHJcbiAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLXNlY29uZGFyeSc7XHJcbiAgICBhZGRUYXNrQnV0dG9uLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgc3BhY2UuYXBwZW5kKGFkZFRhc2tCdXR0b24pO1xyXG4gIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuIiwiY29uc3QgdGFza1NwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tTcGFjZScpXHJcbmNvbnN0IHNwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwYWNlJylcclxuXHJcblxyXG5jb25zdCBtb2RhbCA9IChmdW5jdGlvbigpIHtcclxuICAgIC8vIE1vZGFsIGNvbnRhaW5lclxyXG4gICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdtb2RhbCc7XHJcbiAgXHJcbiAgICAvLyBNb2RhbCBjb250ZW50XHJcbiAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsQ29udGVudC5jbGFzc05hbWUgPSAnbW9kYWwtY29udGVudCc7XHJcbiAgXHJcbiAgICAvLyBNb2RhbCBoZWFkZXJcclxuICAgIGNvbnN0IG1vZGFsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb2RhbEhlYWRlci5jbGFzc05hbWUgPSAnbW9kYWwtaGVhZGVyJztcclxuICAgIGNvbnN0IG1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgbW9kYWxUaXRsZS50ZXh0Q29udGVudCA9ICdOZXcgUHJvamVjdCc7XHJcbiAgICBtb2RhbEhlYWRlci5hcHBlbmRDaGlsZChtb2RhbFRpdGxlKTtcclxuICBcclxuICAgIC8vIENsb3NlIGJ1dHRvblxyXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBjbG9zZUJ1dHRvbi5jbGFzc05hbWUgPSAnY2xvc2UnO1xyXG4gICAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSAnw5cnO1xyXG4gICAgbW9kYWxIZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xyXG4gIFxyXG4gICAgLy8gTW9kYWwgYm9keVxyXG4gICAgY29uc3QgbW9kYWxCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb2RhbEJvZHkuY2xhc3NOYW1lID0gJ21vZGFsLWJvZHknO1xyXG4gIFxyXG4gICAgLy8gUHJvamVjdCBOYW1lIGlucHV0XHJcbiAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QgTmFtZTonO1xyXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIG5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgbmFtZUlucHV0LmlkID0gJ3Byb2plY3ROYW1lJztcclxuICAgIG5hbWVJbnB1dC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcclxuICAgIG1vZGFsQm9keS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xyXG4gICAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XHJcbiAgXHJcbiAgICAvLyBPcHRpb25hbCBDb2xvciBTZWxlY3RvciAoZXhhbXBsZSlcclxuICAgIGNvbnN0IGNvbG9yTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgY29sb3JMYWJlbC50ZXh0Q29udGVudCA9ICdDb2xvcjonO1xyXG4gICAgY29uc3QgY29sb3JTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgIGNvbG9yU2VsZWN0LmlkID0gJ3Byb2plY3RDb2xvcic7XHJcbiAgICBjb2xvclNlbGVjdC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcclxuICAgIGNvbnN0IGNvbG9yT3B0aW9ucyA9IFsnTm9uZScsICdSZWQnLCAnR3JlZW4nLCAnQmx1ZScsICdQaW5rJywgJ1llbGxvdycsICdCcm93biddO1xyXG4gICAgY29sb3JPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICBvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gb3B0aW9uO1xyXG4gICAgICBjb2xvclNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcclxuICAgIH0pO1xyXG4gICAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKGNvbG9yTGFiZWwpO1xyXG4gICAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKGNvbG9yU2VsZWN0KTtcclxuICBcclxuICAgIC8vIFNhdmUgYnV0dG9uXHJcbiAgICBjb25zdCBzYXZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBzYXZlQnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLXByaW1hcnkgbXQtMic7XHJcbiAgICBzYXZlQnV0dG9uLmlkID0gJ3NhdmVCdG5OZXdQcm9qZWN0J1xyXG4gICAgc2F2ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDcmVhdGUgRm9sZGVyJztcclxuICAgIG1vZGFsQm9keS5hcHBlbmRDaGlsZChzYXZlQnV0dG9uKTtcclxuXHJcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XHJcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcclxuICAgIGNhbmNlbEJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi1kYW5nZXIgbXQtMiBtcy0yJztcclxuICAgIFxyXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuICAgIG1vZGFsQm9keS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xyXG4gIFxyXG4gICAgLy8gQXBwZW5kIGFsbCBwYXJ0cyB0byBtb2RhbCBjb250ZW50XHJcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxIZWFkZXIpO1xyXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsQm9keSk7XHJcbiAgICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xyXG4gIFxyXG4gICAgLy8gRXZlbnQgbGlzdGVuZXIgZm9yIGNsb3NlIGJ1dHRvblxyXG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuICBcclxuICAgIHNhdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gbmFtZUlucHV0LnZhbHVlO1xyXG4gICAgICBjb25zdCBwcm9qZWN0Q29sb3IgPSBjb2xvclNlbGVjdC52YWx1ZTtcclxuICAgICAgY2xvc2VNb2RhbCgpO1xyXG4gIFxyXG4gICAgIFxyXG4gICBcclxuICBcclxuICAgIH0pO1xyXG4gIFxyXG4gICBcclxuICAgIC8vIEZ1bmN0aW9uIHRvIGNsb3NlIHRoZSBtb2RhbFxyXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcclxuICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuICBcclxuICAgIC8vIEZ1bmN0aW9uIHRvIG9wZW4gdGhlIG1vZGFsXHJcbiAgICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XHJcbiAgICAgIG1vZGFsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBzcGFjZS5hcHBlbmQobW9kYWxDb250YWluZXIpXHJcbiAgICAgIG5hbWVJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICBjb2xvclNlbGVjdC5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgIH1cclxuICBcclxuXHJcbiAgICAvLyBFeHBvcnQgbW9kYWwgZnVuY3Rpb25zXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBvcGVuTW9kYWwsXHJcbiAgICAgIGNsb3NlTW9kYWwsXHJcbiAgICAgIHNhdmVCdXR0b24sXHJcbiAgICAgIG5hbWVJbnB1dCxcclxuICAgICAgY29sb3JTZWxlY3QsXHJcbiAgICB9O1xyXG4gIH0pKCk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgbW9kYWw7XHJcbiAgXHJcbiAiLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCBtb2RhbCBmcm9tIFwiLi9wcm9qZWN0RG9tLmpzXCI7XHJcbmltcG9ydCB7IGxvYWRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UsIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UuanMnO1xyXG5cclxuY29uc3QgdGFza1NwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tTcGFjZScpO1xyXG5jb25zdCBzcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGFjZScpO1xyXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdE1hbmFnZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5hbGxQcm9qZWN0Rm9sZGVyID0gW107XHJcbiAgICB0aGlzLmxvYWRQcm9qZWN0cygpO1xyXG5cclxuICAgIGlmICh0aGlzLmFsbFByb2plY3RGb2xkZXIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMudXNlckRhdGEoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZXJEYXRhKCkge1xyXG4gICAgY29uc3QgbmFtZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZUZvcm0nKTtcclxuICAgIG5hbWVGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgIGNvbnN0IHVzZXJOYW1lU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJOYW1lJykpIHx8ICdVc2VyJztcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyTmFtZScsIEpTT04uc3RyaW5naWZ5KHVzZXJOYW1lU3RvcmFnZSkpO1xyXG5cclxuICAgIGNvbnN0IG5hdlVzZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdlVzZXJOYW1lJyk7XHJcbiAgICBuYW1lRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IHVzZXJOYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlck5hbWUnKTtcclxuICAgICAgY29uc3QgdXNlck5hbWUgPSB1c2VyTmFtZUlucHV0LnZhbHVlO1xyXG5cclxuICAgICAgaWYgKHVzZXJOYW1lKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJOYW1lJywgSlNPTi5zdHJpbmdpZnkodXNlck5hbWUpKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnTmFtZSBzYXZlZDonLCB1c2VyTmFtZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkTmV3UHJvamVjdCgwLCAnRGVmYXVsdCcsICdibGFjaycpO1xyXG4gICAgICAgIG5hbWVGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5ZXIoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVXNlciBuYW1lIGlzIGVtcHR5LicpO1xyXG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvck1lc3NhZ2UnKTtcclxuICAgICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSAnTmFtZSBjYW5ub3QgYmUgZW1wdHkuJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBob21lUGFnZSgpIHtcclxuICAgIHNwYWNlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjY2VkYmU5JztcclxuICAgIHRpdGxlLmlubmVySFRNTCA9ICdIb21lJztcclxuICAgIHRoaXMuZGlzcGxheWVyKCk7XHJcbiAgfVxyXG5cclxuICBhbGxUb2RvcygpIHtcclxuICAgIHNwYWNlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gJ0FsbCBUb2Rvcyc7XHJcblxyXG4gICAgdGhpcy5hbGxQcm9qZWN0Rm9sZGVyLmZvckVhY2godG9kbyA9PiB7XHJcbiAgICAgIGNvbnN0IGFsbFRvZG9zVmFyID0gdG9kby5wcm9qZWN0O1xyXG4gICAgICBpZiAoYWxsVG9kb3NWYXIgPT09ICcnKSB7XHJcbiAgICAgICAgc3BhY2UuaW5uZXJIVE1MID0gJzxoND5ObyBUYXNrIEZvdW5kPC9oND4nO1xyXG4gICAgICB9XHJcbiAgICAgIFByb2plY3QucHJvdG90eXBlLnNpbXBsZURpc3BsYXllcihhbGxUb2Rvc1Zhcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbXBsZXRlZFRhc2soKSB7XHJcbiAgICBzcGFjZS5pbm5lckhUTUwgPSAnJztcclxuICAgIHRpdGxlLmlubmVyVGV4dCA9ICdDb21wbGV0ZWQgVGFza3MnO1xyXG4gICAgbGV0IGNvbXBsZXRlZFRhc2tzRm91bmQgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmFsbFByb2plY3RGb2xkZXIuZm9yRWFjaChwcm9qZWN0cyA9PiB7XHJcbiAgICAgIHByb2plY3RzLnByb2plY3QuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICBpZiAodGFzay5pc0NvbXBsZXRlZCkge1xyXG4gICAgICAgICAgY29tcGxldGVkVGFza3NGb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICBQcm9qZWN0LnByb3RvdHlwZS5zaW1wbGVEaXNwbGF5ZXIoW3Rhc2tdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFjb21wbGV0ZWRUYXNrc0ZvdW5kKSB7XHJcbiAgICAgIHNwYWNlLmlubmVySFRNTCA9ICc8aDQ+Tm8gQ29tcGxldGVkIFRhc2sgRm91bmQ8L2g0Pic7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwZW5kaW5nVG9kbygpIHtcclxuICAgIHNwYWNlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gJ1BlbmRpbmcgVGFza3MnO1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgcGVuZGluZ1Rhc2tzID0gW107XHJcblxyXG4gICAgdGhpcy5hbGxQcm9qZWN0Rm9sZGVyLmZvckVhY2gocHJvamVjdHMgPT4ge1xyXG4gICAgICBwcm9qZWN0cy5wcm9qZWN0LmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IG5ldyBEYXRlKHRhc2suZHVlRGF0ZSk7XHJcbiAgICAgICAgaWYgKHRhc2suaXNDb21wbGV0ZWQgPT09IGZhbHNlICYmIHRvZGF5IDw9IGR1ZURhdGUpIHtcclxuICAgICAgICAgIHBlbmRpbmdUYXNrcy5wdXNoKHRhc2spO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocGVuZGluZ1Rhc2tzLmxlbmd0aCA+IDApIHtcclxuICAgICAgcGVuZGluZ1Rhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgUHJvamVjdC5wcm90b3R5cGUuc2ltcGxlRGlzcGxheWVyKFt0YXNrXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3BhY2UuaW5uZXJIVE1MID0gJzxoND5ObyBQZW5kaW5nIFRhc2tzIEZvdW5kPC9oND4nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9kYXlUb2RvcygpIHtcclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIHdlZWtkYXk6ICdsb25nJyxcclxuICAgICAgZGF5OiAnMi1kaWdpdCcsXHJcbiAgICAgIG1vbnRoOiAnMi1kaWdpdCcsXHJcbiAgICAgIHllYXI6ICdudW1lcmljJ1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGxvY2FsRGF0ZSA9IHRvZGF5LnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tR0InLCBvcHRpb25zKTtcclxuICAgIHNwYWNlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gJ1RvZGF5IFRhc2tzJztcclxuXHJcbiAgICB0aGlzLmFsbFByb2plY3RGb2xkZXIuZm9yRWFjaChwcm9qZWN0cyA9PiB7XHJcbiAgICAgIHByb2plY3RzLnByb2plY3QuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICBpZiAodGFzay5kdWVEYXRlID09PSBsb2NhbERhdGUpIHtcclxuICAgICAgICAgIFByb2plY3QucHJvdG90eXBlLnNpbXBsZURpc3BsYXllcihbdGFza10pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG1pc3NlZFRhc2tzKCkge1xyXG4gICAgc3BhY2UuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSAnTWlzc2VkIFRhc2tzJztcclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IG1pc3NlZFRhc2tzID0gW107XHJcblxyXG4gICAgdGhpcy5hbGxQcm9qZWN0Rm9sZGVyLmZvckVhY2gocHJvamVjdHMgPT4ge1xyXG4gICAgICBwcm9qZWN0cy5wcm9qZWN0LmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IG5ldyBEYXRlKHRhc2suZHVlRGF0ZSk7XHJcbiAgICAgICAgaWYgKHRhc2suaXNDb21wbGV0ZWQgPT09IGZhbHNlICYmIHRvZGF5ID4gZHVlRGF0ZSkge1xyXG4gICAgICAgICAgbWlzc2VkVGFza3MucHVzaCh0YXNrKTtcclxuICAgICAgICAgIHRpdGxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAobWlzc2VkVGFza3MubGVuZ3RoID4gMCkge1xyXG4gICAgICBtaXNzZWRUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgIFByb2plY3QucHJvdG90eXBlLnNpbXBsZURpc3BsYXllcihbdGFza10pO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNwYWNlLmlubmVySFRNTCA9ICc8aDQ+Tm8gTWlzc2VkIFRhc2tzIEZvdW5kPC9oND4nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9hZFByb2plY3RzKCkge1xyXG4gICAgdGhpcy5hbGxQcm9qZWN0Rm9sZGVyID0gbG9hZFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVByb2plY3RzKCkge1xyXG4gICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UodGhpcy5hbGxQcm9qZWN0Rm9sZGVyKTtcclxuICB9XHJcblxyXG4gIGFkZE5ld1Byb2plY3QoaWQsIG5hbWUsIGNvbG9yKSB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoaWQsIG5hbWUsIGNvbG9yKTtcclxuICAgIHRoaXMuYWxsUHJvamVjdEZvbGRlci5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgdGhpcy5zYXZlUHJvamVjdHMoKTtcclxuICAgIHJldHVybiBuZXdQcm9qZWN0O1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlUHJvamVjdChpbmRleCkge1xyXG4gICAgY29uc3QgY29tZmlybSA9IGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBUYXNrPycpO1xyXG4gICAgaWYgKGNvbWZpcm0pIHtcclxuICAgICAgdGhpcy5hbGxQcm9qZWN0Rm9sZGVyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIHRoaXMuc2F2ZVByb2plY3RzKCk7XHJcbiAgICAgIHRoaXMucHJvamVjdFBhZ2VhbmRTaWRlQmFyRE9NKHRoaXMuYWxsUHJvamVjdEZvbGRlcik7XHJcbiAgICAgIHRoaXMubmV3UHJvamVjdEJ0bigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGlzcGxheWVyKCkge1xyXG4gICAgc3BhY2UuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSAnSG9tZSc7XHJcbiAgICBuYXZVc2VyTmFtZS50ZXh0Q29udGVudCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJOYW1lJykpO1xyXG5cclxuICAgIHNwYWNlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xyXG4gICAgdGhpcy5wcm9qZWN0UGFnZWFuZFNpZGVCYXJET00odGhpcy5hbGxQcm9qZWN0Rm9sZGVyKTtcclxuICAgIHRoaXMubmV3UHJvamVjdEJ0bigpO1xyXG4gICAgdGhpcy5uZXdQcm9qZWN0Rm9ybSh0aGlzLmFsbFByb2plY3RGb2xkZXIpO1xyXG4gICAgdGhpcy5mb290ZXIoKTtcclxuICB9XHJcblxyXG4gIG5ld1Byb2plY3RCdG4oKSB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBuZXdQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcclxuICAgIG5ld1Byb2plY3RCdG4uaWQgPSAnYWRkUHJvamVjdCc7XHJcbiAgICBuZXdQcm9qZWN0QnRuLmNsYXNzTmFtZSA9ICdidG4gYnRuLXByaW1hcnkgY3JlYXRlTmV3UHJvamVjdCc7XHJcbiAgICBuZXdQcm9qZWN0QnRuLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgc3BhY2UuYXBwZW5kKG5ld1Byb2plY3RCdG4pO1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZU5ld1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3JlYXRlTmV3UHJvamVjdCcpO1xyXG4gICAgY3JlYXRlTmV3UHJvamVjdC5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBtb2RhbC5vcGVuTW9kYWwoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5ld1Byb2plY3RGb3JtKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHNhdmVCdG5OZXdQcm9qZWN0ID0gbW9kYWwuc2F2ZUJ1dHRvbjtcclxuICAgIHNhdmVCdG5OZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBuYW1lID0gbW9kYWwubmFtZUlucHV0LnZhbHVlO1xyXG4gICAgICBjb25zdCBjb2xvciA9IG1vZGFsLmNvbG9yU2VsZWN0LnZhbHVlO1xyXG4gICAgICBjb25zdCBpZCA9IHRoaXMuYWxsUHJvamVjdEZvbGRlci5sZW5ndGggKyAxO1xyXG5cclxuICAgICAgY29uc3QgZHVwbGljYXRlUHJvamVjdCA9IHRoaXMuYWxsUHJvamVjdEZvbGRlci5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSBuYW1lKTtcclxuXHJcbiAgICAgIGlmIChkdXBsaWNhdGVQcm9qZWN0KSB7XHJcbiAgICAgICAgYWxlcnQoJ0EgcHJvamVjdCB3aXRoIHRoaXMgbmFtZSBhbHJlYWR5IGV4aXN0cy4nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmFkZE5ld1Byb2plY3QoaWQsIG5hbWUsIGNvbG9yKTtcclxuICAgICAgICB0aGlzLnByb2plY3RQYWdlYW5kU2lkZUJhckRPTShwcm9qZWN0KTtcclxuICAgICAgICBtb2RhbC5jbG9zZU1vZGFsKCk7XHJcbiAgICAgICAgdGhpcy5uZXdQcm9qZWN0QnRuKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWRQcm9qZWN0QXJyYXkoYXJyYXkpIHtcclxuICAgIFByb2plY3QucHJvdG90eXBlLnNpbXBsZURpc3BsYXllcihhcnJheSk7XHJcbiAgICB0aGlzLnNhdmVQcm9qZWN0cygpO1xyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaGVyKGRpc0FycmF5KSB7XHJcbiAgICBQcm9qZWN0LnByb3RvdHlwZS5zaW1wbGVEaXNwbGF5ZXIoZGlzQXJyYXkpO1xyXG4gICAgdGhpcy5zYXZlUHJvamVjdHMoKTtcclxuICB9XHJcblxyXG4gIHByb2plY3RQYWdlYW5kU2lkZUJhckRPTShwcm9qZWN0cykge1xyXG4gICAgY29uc3QgbmV3UHJvamVjdFVMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3RVTCcpO1xyXG4gICAgbmV3UHJvamVjdFVMLmlubmVySFRNTCA9ICcnO1xyXG4gICAgc3BhY2UuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSAnTXkgUHJvamVjdHMnO1xyXG5cclxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XHJcbiAgICAgIC8vIFNpZGViYXIgUHJvamVjdCBMaXN0XHJcbiAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgbGlzdEl0ZW0uY2xhc3NOYW1lID0gJ2xpc3QtZ3JvdXAtaXRlbSc7XHJcbiAgICAgIGxpc3RJdGVtLmlkID0gJ3Byb2plY3RGb2xkZXInO1xyXG4gICAgICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XHJcblxyXG4gICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICBpY29uLmNsYXNzTmFtZSA9ICdmYS1zb2xpZCBmYS1mb2xkZXIgcHJvamVjdC1pY29uJztcclxuICAgICAgaWNvbi5zdHlsZS5jb2xvciA9IHByb2plY3QuY29sb3I7XHJcblxyXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgcHJvamVjdE5hbWUuY2xhc3NOYW1lID0gJ3Byb2plY3QtbmFtZSc7XHJcbiAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xyXG5cclxuICAgICAgbGlzdEl0ZW0uYXBwZW5kKGljb24pO1xyXG4gICAgICBsaXN0SXRlbS5hcHBlbmQocHJvamVjdE5hbWUpO1xyXG5cclxuICAgICAgbGlzdEl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ1doaXRlJztcclxuICAgICAgbGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGdldFByb2plY3RBcnJheSA9IHByb2plY3QucHJvamVjdDtcclxuICAgICAgICBQcm9qZWN0LnByb3RvdHlwZS5kaXNwbGF5ZXIoZ2V0UHJvamVjdEFycmF5KTtcclxuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBwcm9qZWN0Lm5hbWU7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbmV3UHJvamVjdFVMLmFwcGVuZChsaXN0SXRlbSk7XHJcblxyXG4gICAgICAvLyBNYWluIFNwYWNlIFByb2plY3QgQ2FyZHNcclxuICAgICAgY29uc3QgbGlzdEl0ZW1UYXNrU3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICBsaXN0SXRlbVRhc2tTcGFjZS5jbGFzc05hbWUgPSAncHJvamVjdC1jYXJkJztcclxuICAgICAgbGlzdEl0ZW1UYXNrU3BhY2Uuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpO1xyXG5cclxuICAgICAgY29uc3QgY2FyZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgIGNhcmRJY29uLmNsYXNzTmFtZSA9ICdmYS1zb2xpZCBmYS1mb2xkZXIgcHJvamVjdC1jYXJkLWljb24nO1xyXG4gICAgICBjYXJkSWNvbi5zdHlsZS5jb2xvciA9IHByb2plY3QuY29sb3I7XHJcbiAgICAgIGxpc3RJdGVtVGFza1NwYWNlLmFwcGVuZChjYXJkSWNvbik7XHJcblxyXG4gICAgICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgIGNhcmRUaXRsZS5jbGFzc05hbWUgPSAncHJvamVjdC1jYXJkLXRpdGxlJztcclxuICAgICAgY2FyZFRpdGxlLmlubmVyVGV4dCA9IHByb2plY3QubmFtZTtcclxuICAgICAgbGlzdEl0ZW1UYXNrU3BhY2UuYXBwZW5kKGNhcmRUaXRsZSk7XHJcblxyXG4gICAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICBkZWxldGVJY29uLmNsYXNzTmFtZSA9ICdmYS1zb2xpZCBmYS10cmFzaCBkZWxldGUtaWNvbic7XHJcbiAgICAgIGRlbGV0ZUljb24uaWQgPSAnZGVsZXRlUHJvamVjdCc7XHJcbiAgICAgIGRlbGV0ZUljb24uc3R5bGUucGFkZGluZyA9ICc1cHgnO1xyXG4gICAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQobGlzdEl0ZW1UYXNrU3BhY2UuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpO1xyXG4gICAgICAgIHRoaXMuZGVsZXRlUHJvamVjdChpbmRleCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGlzdEl0ZW1UYXNrU3BhY2UuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XHJcbiAgICAgIHNwYWNlLmFwcGVuZChsaXN0SXRlbVRhc2tTcGFjZSk7XHJcblxyXG4gICAgICBsaXN0SXRlbVRhc2tTcGFjZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsZXQgZ2V0UHJvamVjdEFycmF5ID0gcHJvamVjdC5wcm9qZWN0O1xyXG4gICAgICAgIFByb2plY3QucHJvdG90eXBlLmRpc3BsYXllcihnZXRQcm9qZWN0QXJyYXkpO1xyXG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IHByb2plY3QubmFtZTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZvb3RlcigpIHtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gICAgZm9vdGVyLmlubmVySFRNTCA9ICcmY29weTsgMjAyNCBieSBNb19NYW5zdXIgJztcclxuXHJcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9Nb01hbnN1cic7XHJcbiAgICBsaW5rLmNsYXNzTmFtZSA9ICdsaW5rLW9mZnNldC0yIGxpbmstb2Zmc2V0LTMtaG92ZXIgbGluay11bmRlcmxpbmUgbGluay11bmRlcmxpbmUtb3BhY2l0eS0wIGxpbmstdW5kZXJsaW5lLW9wYWNpdHktNzUtaG92ZXInO1xyXG5cclxuICAgIGNvbnN0IGxpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyBNb19NYW5zdXIgR2l0SHViJyk7XHJcbiAgICBsaW5rLmFwcGVuZENoaWxkKGxpbmtUZXh0KTtcclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChsaW5rKTtcclxuXHJcbiAgICBjb25zdCByZW1haW5pbmdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4nKTtcclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChyZW1haW5pbmdUZXh0KTtcclxuXHJcbiAgICBmb290ZXIuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICBzcGFjZS5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyB0aGVNYW5hZ2VyIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi90b2RvLmpzXCI7XHJcbmNvbnN0IHNwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwYWNlJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdUYXNrRm9ybURPTShzZWxlY3RBcnJheSkge1xyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBmb3JtLmlkID0gJ25ld1Rhc2tGb3JtJztcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgncG9wdXAtZm9ybScsICduZWVkcy12YWxpZGF0aW9uJyk7XHJcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnbm92YWxpZGF0ZScsICcnKTtcclxuICAgIFxyXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlOic7XHJcbiAgICB0aXRsZUxhYmVsLmNsYXNzTmFtZSA9ICdmb3JtLWxhYmVsJztcclxuICAgIHRpdGxlTGFiZWwuaHRtbEZvciA9ICdwcm9qZWN0VGl0bGUnO1xyXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICB0aXRsZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xyXG4gICAgdGl0bGVJbnB1dC5pZCA9ICdwcm9qZWN0VGl0bGUnO1xyXG4gICAgdGl0bGVJbnB1dC5uYW1lID0gJ3RpdGxlJztcclxuICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgdGl0bGVJbnB1dC5zdHlsZS5oZWlnaHQgPSAnNTBweCc7XHJcbiAgICBcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjonO1xyXG4gICAgZGVzY3JpcHRpb25MYWJlbC5jbGFzc05hbWUgPSAnZm9ybS1sYWJlbCc7XHJcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmh0bWxGb3IgPSAncHJvamVjdERlc2NyaXB0aW9uJztcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSAncHJvamVjdERlc2NyaXB0aW9uJztcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQubmFtZSA9ICdkZXNjcmlwdGlvbic7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0Lm1heExlbmd0aCA9IDQwXHJcbiAgICBkZXNjcmlwdGlvbklucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgIFxyXG4gICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZTonO1xyXG4gICAgZHVlRGF0ZUxhYmVsLmNsYXNzTmFtZSA9ICdmb3JtLWxhYmVsJztcclxuICAgIGR1ZURhdGVMYWJlbC5odG1sRm9yID0gJ3Byb2plY3REdWVEYXRlJztcclxuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBkdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcclxuICAgIGR1ZURhdGVJbnB1dC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcclxuICAgIGR1ZURhdGVJbnB1dC5pZCA9ICdwcm9qZWN0RHVlRGF0ZSc7XHJcbiAgICBkdWVEYXRlSW5wdXQubmFtZSA9ICdkdWVEYXRlJztcclxuICAgIGR1ZURhdGVJbnB1dC5zdHlsZS5oZWlnaHQgPSAnNTBweCc7XHJcbiAgICBkdWVEYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgXHJcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcclxuICAgIHByaW9yaXR5TGFiZWwuY2xhc3NOYW1lID0gJ2Zvcm0tbGFiZWwnO1xyXG4gICAgcHJpb3JpdHlMYWJlbC5odG1sRm9yID0gJ3Byb2plY3RQcmlvcml0eSc7XHJcbiAgICBcclxuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5jbGFzc05hbWUgPSAnZm9ybS1zZWxlY3QnO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QuaWQgPSAncHJvamVjdFByaW9yaXR5JztcclxuICAgIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSAncHJpb3JpdHknO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgcHJpb3JpdHlTZWxlY3Quc3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xyXG4gICAgXHJcbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbnMgPSBbJ0xvdycsICdNZWRpdW0nLCAnSGlnaCddO1xyXG4gICAgcHJpb3JpdHlPcHRpb25zLmZvckVhY2gob3B0aW9uVGV4dCA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uVGV4dC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvblRleHQ7XHJcbiAgICAgICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XHJcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnQ3JlYXRlIFByb2plY3QnO1xyXG4gICAgc3VibWl0QnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLXN1Y2Nlc3MgbXQtMyc7XHJcbiAgICBcclxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY2FuY2VsQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcclxuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLWRhbmdlciBtdC0zIG1zLTInO1xyXG4gICAgXHJcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcclxuXHJcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICBmdW5jdGlvbiBmb3JtYXREYXRlVG9ETVkoZGF0ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBbeWVhciwgbW9udGgsIGRheV0gPSBkYXRlLnNwbGl0KCctJyk7IFxyXG4gICAgICAgICAgICBjb25zdCBkYXRlT2JqZWN0ID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpOyBcclxuICAgICAgICAgICAgY29uc3QgZGF5TmFtZSA9IGRhdGVPYmplY3QudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHsgd2Vla2RheTogJ2xvbmcnIH0pOyAvLyBHZXQgdGhlIGRheSBuYW1lXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn1gO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGAke2RheU5hbWV9LCAke2Zvcm1hdHRlZERhdGV9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghZHVlRGF0ZUlucHV0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGR1ZURhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdpcy1pbnZhbGlkJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkdWVEYXRlSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaW52YWxpZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcclxuICAgICAgICBjb25zdCBkdWVEYXRlID0gZHVlRGF0ZUlucHV0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gcHJpb3JpdHlTZWxlY3QudmFsdWU7XHJcblxyXG4gICAgIFxyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGZvcm1hdERhdGVUb0RNWShkdWVEYXRlKSwgcHJpb3JpdHksIGZhbHNlKTtcclxuXHJcbiAgICAgICAgc2VsZWN0QXJyYXkucHVzaChuZXdUYXNrKTtcclxuICAgICAgICBQcm9qZWN0LnByb3RvdHlwZS5kaXNwbGF5ZXIoc2VsZWN0QXJyYXkpXHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAvLyBIaWRlIHRoZSBmb3JtIGFmdGVyIHN1Ym1pc3Npb25cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBzcGFjZS5hcHBlbmQoZm9ybUNvbnRhaW5lcik7XHJcbiAgICBcclxuICAgIHJldHVybiBmb3JtQ29udGFpbmVyO1xyXG59XHJcbiIsImltcG9ydCBQcm9qZWN0TWFuYWdlciBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlci5qc1wiO1xyXG5pbXBvcnQgbmV3VGFza0Zvcm1ET00gZnJvbSBcIi4vdGFza0Zvcm0uanNcIjtcclxuXHJcbmltcG9ydCB7IHRoZU1hbmFnZXIgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XHJcbmNvbnN0IHNwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwYWNlJylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzQ29tcGxldGVkID0gZmFsc2UpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB0aGlzLmlzQ29tcGxldGVkID0gaXNDb21wbGV0ZWQ7XHJcbiAgfVxyXG5cclxuICBjb21wbGV0ZWRGdW5jKGNoZWNrYm94KSB7XHJcbiAgICB0aGlzLmlzQ29tcGxldGVkID0gY2hlY2tib3guY2hlY2tlZDtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuaXNDb21wbGV0ZWQpXHJcbiAgICByZXR1cm4gdGhpcy5pc0NvbXBsZXRlZDtcclxuICB9XHJcblxyXG4gIHN0YXR1c0NoYW5nZSh0YXNrLCBzdGF0dXMpe1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB8fCBbXTtcclxuICAgIHRhc2suaXNDb21wbGV0ZWQgPSBzdGF0dXNcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XHJcbiAgICB0aGVNYW5hZ2VyKCkuc2F2ZVByb2plY3RzKClcclxuICB9XHJcbiAgXHJcbiAgZGVsZXRlVGFzayhwcm9qZWN0LCBpbmRleCkge1xyXG4gICAgY29uc3QgY29tZmlybSA9IGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBUYXNrPycpXHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpIHx8IFtdOyBcclxuICAgIGlmKGNvbWZpcm0pe1xyXG4gICAgICBwcm9qZWN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXJkLnRhc2stY2FyZFtkYXRhLWluZGV4PVwiJHtpbmRleH1cIl1gKS5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBlZGl0VGFzayh0YXNrLCBzZWxlY3RBcnJheSkge1xyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IG5ld1Rhc2tGb3JtRE9NKFtdKTtcclxuICAgIHNwYWNlLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xyXG4gIFxyXG4gICAgY29uc3QgZm9ybSA9IGZvcm1Db250YWluZXIucXVlcnlTZWxlY3RvcignZm9ybScpO1xyXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignI3Byb2plY3RUaXRsZScpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignI3Byb2plY3REZXNjcmlwdGlvbicpO1xyXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdER1ZURhdGUnKTtcclxuICAgIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFByaW9yaXR5Jyk7XHJcbiAgXHJcbiAgICAvLyBQcmUtZmlsbCB0aGUgZm9ybSB3aXRoIHRoZSBjdXJyZW50IHRhc2sgdmFsdWVzXHJcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gdGFzay50aXRsZTtcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xyXG4gICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gdGhpcy5mb3JtYXREYXRlVG9ETVkodGFzay5kdWVEYXRlKTtcclxuICAgIHByaW9yaXR5U2VsZWN0LnZhbHVlID0gdGFzay5wcmlvcml0eTtcclxuICBcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIFxyXG4gICAgICB0YXNrLnRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcclxuICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XHJcbiAgXHJcbiAgICAgIGlmIChkdWVEYXRlSW5wdXQudmFsdWUpIHtcclxuICAgICAgICB0YXNrLmR1ZURhdGUgPSB0aGlzLmZvcm1hdERhdGVUb0RNWShkdWVEYXRlSW5wdXQudmFsdWUpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgIFxyXG4gICAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHlTZWxlY3QudmFsdWU7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKSB8fCBbXTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuXHJcbiAgICAgIHRoZU1hbmFnZXIoKS5zYXZlUHJvamVjdHMoKTtcclxuICAgICAgUHJvamVjdC5wcm90b3R5cGUuZGlzcGxheWVyKHNlbGVjdEFycmF5KVxyXG4gICAgXHJcbiAgICAgIC8vIEhpZGUgdGhlIGZvcm0gY29udGFpbmVyXHJcbiAgICAgIGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG5cclxuICAgIGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfVxyXG4gIFxyXG5cclxuICBmb3JtYXREYXRlVG9ETVkoZGF0ZSkge1xyXG4gICAgY29uc3QgW3llYXIsIG1vbnRoLCBkYXldID0gZGF0ZS5zcGxpdCgnLScpOyAvLyBBc3N1bWluZyB0aGUgZGF0ZSBpcyBpbml0aWFsbHkgaW4gJ3llYXItbW9udGgtZGF5JyBmb3JtYXRcclxuICAgIGNvbnN0IGRhdGVPYmplY3QgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7IC8vIENyZWF0ZSBhIERhdGUgb2JqZWN0XHJcbiAgICBjb25zdCBkYXlOYW1lID0gZGF0ZU9iamVjdC50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywgeyB3ZWVrZGF5OiAnbG9uZycgfSk7IC8vIEdldCB0aGUgZGF5IG5hbWVcclxuICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn1gO1xyXG4gICAgXHJcbiAgICByZXR1cm4gYCR7ZGF5TmFtZX0sICR7Zm9ybWF0dGVkRGF0ZX1gO1xyXG4gIH1cclxuICBcclxuICBcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCBQcm9qZWN0TWFuYWdlciBmcm9tIFwiLi9wcm9qZWN0TWFuYWdlci5qc1wiO1xyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi90b2RvLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrRE9NKHByb2plY3RBcnJheSkge1xyXG4gIGNvbnN0IHNwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwYWNlJyk7XHJcblxyXG4gIHByb2plY3RBcnJheS5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgdGl0bGVUZXh0ID0gdGFzay50aXRsZTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGV4dCA9IHRhc2suZGVzY3JpcHRpb247XHJcbiAgICBjb25zdCBkdWVEYXRlVGV4dCA9IHRhc2suZHVlRGF0ZTtcclxuICAgIGNvbnN0IHByaW9yaXR5VGV4dCA9IHRhc2sucHJpb3JpdHk7XHJcbiAgICBjb25zdCBpc0NvbXBsZXRlZCA9IHRhc2suaXNDb21wbGV0ZWQ7XHJcblxyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZC5jbGFzc05hbWUgPSAnY2FyZCB0YXNrLWNhcmQgbWItMyc7XHJcbiAgICBjYXJkLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcclxuXHJcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJvdy5jbGFzc05hbWUgPSAncm93IG5vLWd1dHRlcnMnO1xyXG5cclxuICAgIGNvbnN0IHByaW9yaXR5QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcmlvcml0eUJhci5jbGFzc05hbWUgPSAncHJpb3JpdHktYmFyJztcclxuICAgIHN3aXRjaCAocHJpb3JpdHlUZXh0LnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgY2FzZSAnbG93JzpcclxuICAgICAgICBwcmlvcml0eUJhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzI4YTc0NSc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ21lZGl1bSc6XHJcbiAgICAgICAgcHJpb3JpdHlCYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmMxMDcnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdoaWdoJzpcclxuICAgICAgICBwcmlvcml0eUJhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2RjMzU0NSc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcHJpb3JpdHlCYXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM2Yzc1N2QnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aXRsZUNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29sLW1kLTIgdy0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtd2hpdGUgcG9zaXRpb24tcmVsYXRpdmUnO1xyXG4gICAgdGl0bGVDb250YWluZXIuaWQgPSAndGl0bGVDb250YWluZXInO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgdGl0bGUuY2xhc3NOYW1lID0gJ2NhcmQtdGl0bGUnO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZVRleHQ7XHJcbiAgICB0aXRsZUNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwcmlvcml0eUJhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XHJcblxyXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlCYXIpO1xyXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IGxhYmVsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsYWJlbENvbnRhaW5lci5jbGFzc05hbWUgPSAnbGFiZWwtY29udGFpbmVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbic7XHJcbiAgICBcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmNsYXNzTmFtZSA9ICdsYWJlbCc7XHJcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmlubmVySFRNTCA9IGA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1ub3RlLXN0aWNreVwiPjwvaT4gRGVzY3JpcHRpb248L3NtYWxsPmA7XHJcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmlkID0gJ2Rlc2NyaXB0aW9uTGFiZWxUYXNrJztcclxuICAgIFxyXG4gICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgZHVlRGF0ZUxhYmVsLmNsYXNzTmFtZSA9ICdsYWJlbCc7XHJcbiAgICBkdWVEYXRlTGFiZWwuaW5uZXJIVE1MID0gYDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj48aSBjbGFzcz1cImZhcyBmYS1jYWxlbmRhci1kYXlcIj48L2k+IER1ZSBEYXRlPC9zbWFsbD5gO1xyXG4gICAgXHJcbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgcHJpb3JpdHlMYWJlbC5jbGFzc05hbWUgPSAnbGFiZWwnO1xyXG4gICAgcHJpb3JpdHlMYWJlbC5pbm5lckhUTUwgPSBgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPjxpIGNsYXNzPVwiZmFzIGZhLWZsYWdcIj48L2k+IFByaW9yaXR5PC9zbWFsbD5gO1xyXG4gICAgXHJcbiAgICBsYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcclxuICAgIGxhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XHJcbiAgICBsYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcclxuICAgIFxyXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWxDb250YWluZXIpO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgZWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlbWVudENvbnRhaW5lci5jbGFzc05hbWUgPSAnZWxlbWVudC1jb250YWluZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcic7XHJcbiAgICBlbGVtZW50Q29udGFpbmVyLmlkID0gJ2VsZW1lbnRDb250YWluZXInO1xyXG5cclxuICAgXHJcblxyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgZGVzY3JpcHRpb24uY2xhc3NOYW1lID0gJ2NvbC04IGNhcmQtdGV4dCBkZXNjcmlwdGlvbic7XHJcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uVGV4dDtcclxuICAgIGRlc2NyaXB0aW9uLmlkID0gJ2NhcmRkZXNjcmlwdGlvbic7XHJcblxyXG4gICAgY29uc3Qgdmlld0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdmlld0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnYnRuLW91dGxpbmUtcHJpbWFyeScsICd2aWV3LWJ1dHRvbicsICdkLWxnLW5vbmUnLCAnZC1tZC1ub25lJyk7XHJcbiAgICB2aWV3QnV0dG9uLmlkID0gJ3ZpZXdEZXNjcmlwdGlvbidcclxuICAgIHZpZXdCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtZXllXCI+PC9pPic7XHJcblxyXG5cclxuICBcclxuICAgICAgLy8gdmlld0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICBsZXQgaXNDbGlja2VkID0gdHJ1ZVxyXG4gICAgdmlld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ2Qtbm9uZScpO1xyXG4gICAgICBpZiAoaXNDbGlja2VkKSB7XHJcbiAgICAgICAgICB2aWV3QnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWV5ZVwiPjwvaT4nO1xyXG4gICAgICAgICAgZGVzY3JpcHRpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgICAgZHVlRGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgICAgICBwcmlvcml0eS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgICAgICBkdWVEYXRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICBwcmlvcml0eS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgdmlld0J1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1leWUtc2xhc2hcIj48L2k+JztcclxuICAgICAgfVxyXG4gICAgICBpc0NsaWNrZWQgPSFpc0NsaWNrZWRcclxuICB9KTtcclxuXHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHByaW9yaXR5LmNsYXNzTmFtZSA9ICdjYXJkLXRleHQgcHJpb3JpdHknO1xyXG4gICAgcHJpb3JpdHkuaW5uZXJIVE1MID0gYDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj48aSBjbGFzcz1cImZhcyBmYS1mbGFnXCI+PC9pPiAke3ByaW9yaXR5VGV4dH08L3NtYWxsPmA7XHJcblxyXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGR1ZURhdGUuY2xhc3NOYW1lID0gJ2NhcmQtdGV4dCc7XHJcbiAgICBkdWVEYXRlLmlubmVySFRNTCA9IGA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+XHJcbiAgICA8aSBjbGFzcz1cImZhcyBmYS1jYWxlbmRhci1kYXlcIj48L2k+ICR7ZHVlRGF0ZVRleHR9PC9zbWFsbD5gO1xyXG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgdHJ1ZSlcclxuXHJcblxyXG4gICAgY29uc3QgY2FyZEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmRCb2R5LmNsYXNzTmFtZSA9ICdjYXJkLWJvZHknO1xyXG4gICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudENvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidXR0b25Db250YWluZXIuY2xhc3NOYW1lID0gJ2QtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcC0yJztcclxuICAgIGJ1dHRvbkNvbnRhaW5lci5pZCA9ICdidXR0b25Db250YWluZXInO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidXR0b25Hcm91cC5zdHlsZS5tYXJnaW4gPSAnMTBweCc7XHJcblxyXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgZWRpdEJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi13YXJuaW5nIGJ0bi1zbSBtLTInO1xyXG4gICAgZWRpdEJ1dHRvbi5pZCA9ICdlZGl0QnRuT2ZUYXNrJ1xyXG4gICAgZWRpdEJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtZWRpdFwiPjwvaT4gRWRpdCc7XHJcblxyXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gJ2J0biBidG4tZGFuZ2VyIGJ0bi1zbSc7XHJcbiAgICBkZWxldGVCdXR0b24uaWQgPSAnZGVsZXRlYnRuT2ZUYXNrJ1xyXG4gICAgZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvaT4gRGVsZXRlJztcclxuXHJcbiAgIFxyXG4gICAgXHJcblxyXG5cclxuICAgIGJ1dHRvbkNvbnRhaW5lci5zdHlsZS5wYWRkaW5nID0gJzEwcHgnO1xyXG5cclxuICAgIGNvbnN0IGNoZWNrYm94U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNoZWNrYm94U3Bhbi5jbGFzc05hbWUgPSAnY2hlY2tib3gtc3Bhbic7XHJcbiAgICBjaGVja2JveFNwYW4uc3R5bGUubWFyZ2luID0gJzEwcHgnO1xyXG4gICAgY2hlY2tib3hTcGFuLmlkID0gJ2NoZWNrQm94U3Bhbk9mVGFzaydcclxuXHJcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcclxuICAgIGNoZWNrYm94LmNsYXNzTmFtZSA9ICdmb3JtLWNoZWNrLWlucHV0IGZvcm0tY2hlY2staW5wdXQtbGcnO1xyXG4gICAgY2hlY2tib3guYXJpYUxhYmVsID0gJ1Rhc2sgQ29tcGxldGUnO1xyXG5cclxuICAgIGNvbnN0IHN0YXR1c1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBzdGF0dXNUZXh0LmNsYXNzTmFtZSA9ICdzdGF0dXMtdGV4dCc7XHJcbiAgXHJcblxyXG5cclxuICAgIFxyXG4gIFxyXG4gICAgZWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgICBlbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHZpZXdCdXR0b24pXHJcbiAgICBlbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xyXG4gICAgZWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eSk7XHJcblxyXG4gICAgICAgXHJcbiAgICBjaGVja2JveFNwYW4uYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xyXG4gICAgY2hlY2tib3hTcGFuLmFwcGVuZENoaWxkKHN0YXR1c1RleHQpO1xyXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrYm94U3Bhbik7XHJcblxyXG5cclxuXHJcbiAgICBidXR0b25Hcm91cC5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcclxuICAgIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XHJcblxyXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkdyb3VwKTtcclxuXHJcbiAgICByb3cuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xyXG4gICAgcm93LmFwcGVuZENoaWxkKGNhcmRCb2R5KTtcclxuICAgIHJvdy5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xyXG5cclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQocm93KTtcclxuXHJcbiAgICBzcGFjZS5hcHBlbmRDaGlsZChjYXJkKTtcclxuXHJcbiBcclxuXHJcbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBUYXNrLnByb3RvdHlwZS5lZGl0VGFzayh0YXNrLHByb2plY3RBcnJheSApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgXHJcbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgaWYgKHRhc2suaXNDb21wbGV0ZWQpIHtcclxuICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgc3RhdHVzVGV4dC50ZXh0Q29udGVudCA9ICdDb21wbGV0ZWQnO1xyXG4gICAgY2hlY2tib3hTcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbic7XHJcbiAgICByb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2xpZ2h0Z3JleSdcclxuICAgIGNoZWNrYm94LnN0eWxlLmNvbG9yID0gJ3doaXRlJztcclxuICAgIGNoZWNrYm94U3Bhbi5zdHlsZS5wYWRkaW5nID0gJzE1cHgnO1xyXG59IGVsc2Uge1xyXG4gICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgc3RhdHVzVGV4dC50ZXh0Q29udGVudCA9ICdJbmNvbXBsZXRlJztcclxuICAgIGNoZWNrYm94U3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHRncmV5JztcclxuICAgIGNoZWNrYm94U3Bhbi5zdHlsZS5wYWRkaW5nID0gJzE1cHgnO1xyXG4gICAgIHJvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnd2hpdGUnXHJcbn1cclxuXHJcbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gXHJcblxyXG5cclxuICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICAgIHN0YXR1c1RleHQudGV4dENvbnRlbnQgPSAnQ29tcGxldGVkJztcclxuICAgICAgY2hlY2tib3hTcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbidcclxuICAgICAgcm93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdsaWdodGdyZXknXHJcblxyXG4gICAgICBjaGVja2JveC5zdHlsZS5jb2xvciA9ICd3aGl0ZSdcclxuICAgICAgY2hlY2tib3hTcGFuLnN0eWxlLnBhZGRpbmcgPSAnMTVweCdcclxuICAgICAgVGFzay5wcm90b3R5cGUuc3RhdHVzQ2hhbmdlKHRhc2ssIHRydWUpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdGF0dXNUZXh0LnRleHRDb250ZW50ID0gJ0luY29tcGxldGUnO1xyXG4gICAgICBjaGVja2JveFNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2xpZ2h0Z3JleSdcclxuICAgICAgY2hlY2tib3hTcGFuLnN0eWxlLnBhZGRpbmcgPSAnMTVweCdcclxuICAgICAgcm93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxuXHJcbiAgICAgIFRhc2sucHJvdG90eXBlLnN0YXR1c0NoYW5nZSh0YXNrLCBmYWxzZSlcclxuICAgIH1cclxuICB9KTtcclxuXHJcblxyXG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIFRhc2sucHJvdG90eXBlLmRlbGV0ZVRhc2socHJvamVjdEFycmF5LCBpbmRleCwgdGFzayk7XHJcbiAgfSk7XHJcblxyXG5cclxuICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIlByb2plY3RNYW5hZ2VyIiwibXlQcm9qZWN0TWFuYWdlciIsImFsbFByb2plY3RGb2xkZXIiLCJsZW5ndGgiLCJkaXNwbGF5ZXIiLCJ0aGVNYW5hZ2VyIiwidGFza1NwYWNlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFsbFRvZG9zSXRlbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0b2RheUl0ZW0iLCJjb21wbGV0ZWRJdGVtIiwidXBjb21pbmdJdGVtIiwibWlzc2VkSXRlbSIsImhvbWVQYWdlIiwic2lkZWJhckNvbnRhaW5lciIsInNpZGViYXJJY29uIiwibWFpblNwYWNlQ29sIiwibmF2TWVudVJvdyIsImZvckVhY2giLCJtZW51IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNhdmVQcm9qZWN0cyIsImFsbFRvZG9zIiwiY29uc29sZSIsImxvZyIsInRvZGF5VG9kb3MiLCJjb21wbGV0ZWRUYXNrIiwicGVuZGluZ1RvZG8iLCJtaXNzZWRUYXNrcyIsImlzQ2xpY2tlZCIsInN0eWxlIiwiZGlzcGxheSIsImNsYXNzTmFtZSIsInBhZGRpbmciLCJsb2FkUHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlIiwicHJvamVjdHMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidGFza0RPTSIsIm5ld1Rhc2tGb3JtRE9NIiwic3BhY2UiLCJ0aXRsZSIsIlByb2plY3QiLCJpZCIsIm5hbWUiLCJjb2xvciIsIl9jbGFzc0NhbGxDaGVjayIsInByb2plY3QiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInNpbXBsZURpc3BsYXllciIsImFycmF5IiwiaW5uZXJIVE1MIiwiZG9tIiwibmV3VGFza0Zvcm1CdG4iLCJzZWxlY3RBcnJheSIsImFkZFRhc2tCdG4iLCJ0aGVGb3JtIiwiYXBwZW5kIiwiYWRkVGFza0J1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIndpZHRoIiwiZGVmYXVsdCIsIm1vZGFsIiwibW9kYWxDb250YWluZXIiLCJtb2RhbENvbnRlbnQiLCJtb2RhbEhlYWRlciIsIm1vZGFsVGl0bGUiLCJhcHBlbmRDaGlsZCIsImNsb3NlQnV0dG9uIiwibW9kYWxCb2R5IiwibmFtZUxhYmVsIiwibmFtZUlucHV0IiwidHlwZSIsImNvbG9yTGFiZWwiLCJjb2xvclNlbGVjdCIsImNvbG9yT3B0aW9ucyIsIm9wdGlvbiIsIm9wdGlvbkVsZW1lbnQiLCJzYXZlQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwicHJvamVjdE5hbWUiLCJwcm9qZWN0Q29sb3IiLCJjbG9zZU1vZGFsIiwib3Blbk1vZGFsIiwic2VsZWN0ZWRJbmRleCIsImxvYWRQcm9qZWN0cyIsInVzZXJEYXRhIiwiX3RoaXMiLCJuYW1lRm9ybSIsInVzZXJOYW1lU3RvcmFnZSIsIm5hdlVzZXJOYW1lIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlck5hbWVJbnB1dCIsInVzZXJOYW1lIiwiYWRkTmV3UHJvamVjdCIsImVycm9yTWVzc2FnZSIsImJhY2tncm91bmRDb2xvciIsImlubmVyVGV4dCIsInRvZG8iLCJhbGxUb2Rvc1ZhciIsInByb3RvdHlwZSIsImNvbXBsZXRlZFRhc2tzRm91bmQiLCJ0YXNrIiwiaXNDb21wbGV0ZWQiLCJ0b2RheSIsIkRhdGUiLCJwZW5kaW5nVGFza3MiLCJkdWVEYXRlIiwicHVzaCIsIm9wdGlvbnMiLCJ3ZWVrZGF5IiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwibG9jYWxEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwibmV3UHJvamVjdCIsImRlbGV0ZVByb2plY3QiLCJpbmRleCIsImNvbWZpcm0iLCJjb25maXJtIiwic3BsaWNlIiwicHJvamVjdFBhZ2VhbmRTaWRlQmFyRE9NIiwibmV3UHJvamVjdEJ0biIsIm5ld1Byb2plY3RGb3JtIiwiZm9vdGVyIiwiY3JlYXRlTmV3UHJvamVjdCIsImJ0biIsIl90aGlzMiIsInNhdmVCdG5OZXdQcm9qZWN0IiwiZHVwbGljYXRlUHJvamVjdCIsImZpbmQiLCJpdGVtIiwiYWxlcnQiLCJnZXRTZWxlY3RlZFByb2plY3RBcnJheSIsInJlZnJlc2hlciIsImRpc0FycmF5IiwiX3RoaXMzIiwibmV3UHJvamVjdFVMIiwibGlzdEl0ZW0iLCJzZXRBdHRyaWJ1dGUiLCJpY29uIiwiZ2V0UHJvamVjdEFycmF5IiwibGlzdEl0ZW1UYXNrU3BhY2UiLCJjYXJkSWNvbiIsImNhcmRUaXRsZSIsImRlbGV0ZUljb24iLCJzdG9wUHJvcGFnYXRpb24iLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsImxpbmsiLCJocmVmIiwibGlua1RleHQiLCJjcmVhdGVUZXh0Tm9kZSIsInJlbWFpbmluZ1RleHQiLCJ0ZXh0QWxpZ24iLCJUYXNrIiwiZm9ybUNvbnRhaW5lciIsImNsYXNzTGlzdCIsImFkZCIsImZvcm0iLCJ0aXRsZUxhYmVsIiwiaHRtbEZvciIsInRpdGxlSW5wdXQiLCJyZXF1aXJlZCIsImhlaWdodCIsImRlc2NyaXB0aW9uTGFiZWwiLCJkZXNjcmlwdGlvbklucHV0IiwibWF4TGVuZ3RoIiwiZHVlRGF0ZUxhYmVsIiwiZHVlRGF0ZUlucHV0IiwicHJpb3JpdHlMYWJlbCIsInByaW9yaXR5U2VsZWN0IiwicHJpb3JpdHlPcHRpb25zIiwib3B0aW9uVGV4dCIsInRvTG93ZXJDYXNlIiwic3VibWl0QnV0dG9uIiwiZm9ybWF0RGF0ZVRvRE1ZIiwiZGF0ZSIsIl9kYXRlJHNwbGl0Iiwic3BsaXQiLCJfZGF0ZSRzcGxpdDIiLCJfc2xpY2VkVG9BcnJheSIsImRhdGVPYmplY3QiLCJkYXlOYW1lIiwiZm9ybWF0dGVkRGF0ZSIsImNvbmNhdCIsInJlbW92ZSIsImRlc2NyaXB0aW9uIiwicHJpb3JpdHkiLCJuZXdUYXNrIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiY29tcGxldGVkRnVuYyIsImNoZWNrYm94IiwiY2hlY2tlZCIsInN0YXR1c0NoYW5nZSIsInN0YXR1cyIsImRlbGV0ZVRhc2siLCJxdWVyeVNlbGVjdG9yIiwiZWRpdFRhc2siLCJwcm9qZWN0QXJyYXkiLCJ0aXRsZVRleHQiLCJkZXNjcmlwdGlvblRleHQiLCJkdWVEYXRlVGV4dCIsInByaW9yaXR5VGV4dCIsImNhcmQiLCJyb3ciLCJwcmlvcml0eUJhciIsInRpdGxlQ29udGFpbmVyIiwibGFiZWxDb250YWluZXIiLCJlbGVtZW50Q29udGFpbmVyIiwidmlld0J1dHRvbiIsInRvZ2dsZSIsImNhcmRCb2R5IiwiYnV0dG9uQ29udGFpbmVyIiwiYnV0dG9uR3JvdXAiLCJtYXJnaW4iLCJlZGl0QnV0dG9uIiwiZGVsZXRlQnV0dG9uIiwiY2hlY2tib3hTcGFuIiwiYXJpYUxhYmVsIiwic3RhdHVzVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=