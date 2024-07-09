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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/project.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7TUFDMUM7SUFDRixDQUFDLENBQUM7SUFHRnFILFlBQVksQ0FBQ2hOLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO01BQzNDaUosZ0RBQUksQ0FBQ3hELFNBQVMsQ0FBQ2tHLFVBQVUsQ0FBQ0csWUFBWSxFQUFFbkYsS0FBSyxFQUFFaEIsSUFBSSxDQUFDO0lBQ3RELENBQUMsQ0FBQztFQUdGLENBQUMsQ0FBQztBQUNKOzs7Ozs7VUNuUEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wcm9qZWN0RG9tLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Byb2plY3RNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Rhc2tGb3JtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdG9kb0RPTS5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdE1hbmFnZXIgZnJvbSBcIi4vcHJvamVjdE1hbmFnZXIuanNcIjtcclxuXHJcbi8vIEluaXRpYWxpemUgUHJvamVjdE1hbmFnZXJcclxuY29uc3QgbXlQcm9qZWN0TWFuYWdlciA9IG5ldyBQcm9qZWN0TWFuYWdlcigpO1xyXG5pZiAobXlQcm9qZWN0TWFuYWdlci5hbGxQcm9qZWN0Rm9sZGVyLmxlbmd0aCA+PSAxKSB7XHJcbiAgbXlQcm9qZWN0TWFuYWdlci5kaXNwbGF5ZXIoKVxyXG59XHJcblxyXG4vLyBFeHBvcnQgZnVuY3Rpb24gdG8gYWNjZXNzIFByb2plY3RNYW5hZ2VyXHJcbmV4cG9ydCBjb25zdCB0aGVNYW5hZ2VyID0gKCkgPT4gbXlQcm9qZWN0TWFuYWdlcjtcclxuXHJcblxyXG5cclxuLy8gLy8gU2VsZWN0aW5nIGVsZW1lbnRzIGJ5IElEXHJcbmNvbnN0IHRhc2tTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrU3BhY2UnKTtcclxuY29uc3QgYWxsVG9kb3NJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFsbFRvZG9zJyk7XHJcbmNvbnN0IHRvZGF5SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5Ub2RheVRvZG9zJyk7XHJcbmNvbnN0IGNvbXBsZXRlZEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuQ29tcGxldGVkVG9kbycpO1xyXG5jb25zdCB1cGNvbWluZ0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuVXBjb21pbmdUb2RvJyk7XHJcbmNvbnN0IG1pc3NlZEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuTWlzc2VkVG9kbycpO1xyXG5jb25zdCBob21lUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lUGFnZScpO1xyXG5cclxuY29uc3Qgc2lkZWJhckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlYmFyQ29udGFpbmVyJyk7XHJcbmNvbnN0IHNpZGViYXJJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXJJY29uJyk7XHJcbmNvbnN0IG1haW5TcGFjZUNvbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluU3BhY2VDb2wnKTtcclxuY29uc3QgbmF2TWVudVJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZNZW51Um93Jyk7XHJcblxyXG5cclxuLy8gRXZlbnQgTGlzdGVuZXJzXHJcbmhvbWVQYWdlLmZvckVhY2gobWVudSA9PiBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIG15UHJvamVjdE1hbmFnZXIuaG9tZVBhZ2UoKTtcclxuICBteVByb2plY3RNYW5hZ2VyLnNhdmVQcm9qZWN0cygpO1xyXG59KSk7XHJcblxyXG5hbGxUb2Rvc0l0ZW0uZm9yRWFjaChtZW51ID0+IG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgbXlQcm9qZWN0TWFuYWdlci5hbGxUb2RvcygpO1xyXG4gIG15UHJvamVjdE1hbmFnZXIuc2F2ZVByb2plY3RzKCk7XHJcbn0pKTtcclxuXHJcbnRvZGF5SXRlbS5mb3JFYWNoKG1lbnUgPT4gbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjb25zb2xlLmxvZygnVG9kYXkgaXRlbSBjbGlja2VkJyk7XHJcbiAgbXlQcm9qZWN0TWFuYWdlci50b2RheVRvZG9zKCk7XHJcbiAgbXlQcm9qZWN0TWFuYWdlci5zYXZlUHJvamVjdHMoKTtcclxufSkpO1xyXG5cclxuY29tcGxldGVkSXRlbS5mb3JFYWNoKG1lbnUgPT4gbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBteVByb2plY3RNYW5hZ2VyLmNvbXBsZXRlZFRhc2soKTtcclxuICBteVByb2plY3RNYW5hZ2VyLnNhdmVQcm9qZWN0cygpO1xyXG59KSk7XHJcblxyXG51cGNvbWluZ0l0ZW0uZm9yRWFjaChtZW51ID0+IG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgbXlQcm9qZWN0TWFuYWdlci5wZW5kaW5nVG9kbygpO1xyXG59KSk7XHJcblxyXG5taXNzZWRJdGVtLmZvckVhY2gobWVudSA9PiBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIC8vIEhhbmRsZSBjbGljayBvbiBNaXNzZWQgaXRlbVxyXG4gIG15UHJvamVjdE1hbmFnZXIubWlzc2VkVGFza3MoKVxyXG59KSk7XHJcblxyXG5zaWRlYmFySWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBpZiAoaXNDbGlja2VkKSB7XHJcbiAgICBzaWRlYmFyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBtYWluU3BhY2VDb2wuY2xhc3NOYW1lID0gJ2NvbC0xMic7XHJcbiAgICBuYXZNZW51Um93LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgdGFza1NwYWNlLnN0eWxlLnBhZGRpbmcgPSAnMTBweCc7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNpZGViYXJDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBtYWluU3BhY2VDb2wuY2xhc3NOYW1lID0gJ2NvbC0xMCc7XHJcbiAgICBuYXZNZW51Um93LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG4gIGlzQ2xpY2tlZCA9ICFpc0NsaWNrZWQ7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsImV4cG9ydCBmdW5jdGlvbiBsb2FkUHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCkge1xyXG4gIGNvbnN0IHByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJyk7XHJcbiAgcmV0dXJuIHByb2plY3RzID8gSlNPTi5wYXJzZShwcm9qZWN0cykgOiBbXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKGFsbFByb2plY3RGb2xkZXIpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0Rm9sZGVyKSk7XHJcbn1cclxuIiwiaW1wb3J0IHRhc2tET00gZnJvbSBcIi4vdG9kb0RPTS5qc1wiO1xyXG5pbXBvcnQgbmV3VGFza0Zvcm1ET00gZnJvbSBcIi4vdGFza0Zvcm0uanNcIjtcclxuXHJcbmNvbnN0IHNwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwYWNlJyk7XHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihpZCwgbmFtZSwgY29sb3IpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB0aGlzLnByb2plY3QgPSBbXTtcclxuICB9XHJcblxyXG5cclxuICBzaW1wbGVEaXNwbGF5ZXIoYXJyYXkpe1xyXG4gICAgdGFza0RPTShhcnJheSlcclxuICB9XHJcbiAgXHJcbiAgZGlzcGxheWVyKGFycmF5KSB7XHJcbiAgICBzcGFjZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgdGFza0RPTShhcnJheSlcclxuICAgIHRoaXMuZG9tKCk7XHJcbiAgICBuZXdUYXNrRm9ybURPTShhcnJheSlcclxuICAgIHRoaXMubmV3VGFza0Zvcm1CdG4oYXJyYXkpXHJcbiAgfVxyXG5cclxuXHJcbiAgbmV3VGFza0Zvcm1CdG4oc2VsZWN0QXJyYXkpe1xyXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnV0dG9uJyk7XHJcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCB0aGVGb3JtID0gbmV3VGFza0Zvcm1ET00oc2VsZWN0QXJyYXkpO1xyXG4gICAgICBzcGFjZS5hcHBlbmQodGhlRm9ybSk7XHJcbiAgICAgIHRoZUZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRvbSgpIHtcclxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xyXG4gICAgYWRkVGFza0J1dHRvbi5pZCA9ICdhZGRUYXNrQnV0dG9uJztcclxuICAgIGFkZFRhc2tCdXR0b24uY2xhc3NOYW1lID0gJ2J0biBidG4tc2Vjb25kYXJ5JztcclxuICAgIGFkZFRhc2tCdXR0b24uc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcbiAgICBzcGFjZS5hcHBlbmQoYWRkVGFza0J1dHRvbik7XHJcbiAgfVxyXG5cclxuXHJcblxyXG59XHJcblxyXG4iLCJjb25zdCB0YXNrU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1NwYWNlJylcclxuY29uc3Qgc3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BhY2UnKVxyXG5cclxuXHJcbmNvbnN0IG1vZGFsID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gTW9kYWwgY29udGFpbmVyXHJcbiAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9kYWxDb250YWluZXIuY2xhc3NOYW1lID0gJ21vZGFsJztcclxuICBcclxuICAgIC8vIE1vZGFsIGNvbnRlbnRcclxuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9kYWxDb250ZW50LmNsYXNzTmFtZSA9ICdtb2RhbC1jb250ZW50JztcclxuICBcclxuICAgIC8vIE1vZGFsIGhlYWRlclxyXG4gICAgY29uc3QgbW9kYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsSGVhZGVyLmNsYXNzTmFtZSA9ICdtb2RhbC1oZWFkZXInO1xyXG4gICAgY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBtb2RhbFRpdGxlLnRleHRDb250ZW50ID0gJ05ldyBQcm9qZWN0JztcclxuICAgIG1vZGFsSGVhZGVyLmFwcGVuZENoaWxkKG1vZGFsVGl0bGUpO1xyXG4gIFxyXG4gICAgLy8gQ2xvc2UgYnV0dG9uXHJcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNsb3NlQnV0dG9uLmNsYXNzTmFtZSA9ICdjbG9zZSc7XHJcbiAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9ICfDlyc7XHJcbiAgICBtb2RhbEhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XHJcbiAgXHJcbiAgICAvLyBNb2RhbCBib2R5XHJcbiAgICBjb25zdCBtb2RhbEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsQm9keS5jbGFzc05hbWUgPSAnbW9kYWwtYm9keSc7XHJcbiAgXHJcbiAgICAvLyBQcm9qZWN0IE5hbWUgaW5wdXRcclxuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnUHJvamVjdCBOYW1lOic7XHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICBuYW1lSW5wdXQuaWQgPSAncHJvamVjdE5hbWUnO1xyXG4gICAgbmFtZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xyXG4gICAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XHJcbiAgICBtb2RhbEJvZHkuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcclxuICBcclxuICAgIC8vIE9wdGlvbmFsIENvbG9yIFNlbGVjdG9yIChleGFtcGxlKVxyXG4gICAgY29uc3QgY29sb3JMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb2xvckxhYmVsLnRleHRDb250ZW50ID0gJ0NvbG9yOic7XHJcbiAgICBjb25zdCBjb2xvclNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgY29sb3JTZWxlY3QuaWQgPSAncHJvamVjdENvbG9yJztcclxuICAgIGNvbG9yU2VsZWN0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xyXG4gICAgY29uc3QgY29sb3JPcHRpb25zID0gWydOb25lJywgJ1JlZCcsICdHcmVlbicsICdCbHVlJywgJ1BpbmsnLCAnWWVsbG93JywgJ0Jyb3duJ107XHJcbiAgICBjb2xvck9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBvcHRpb247XHJcbiAgICAgIGNvbG9yU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgICBtb2RhbEJvZHkuYXBwZW5kQ2hpbGQoY29sb3JMYWJlbCk7XHJcbiAgICBtb2RhbEJvZHkuYXBwZW5kQ2hpbGQoY29sb3JTZWxlY3QpO1xyXG4gIFxyXG4gICAgLy8gU2F2ZSBidXR0b25cclxuICAgIGNvbnN0IHNhdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHNhdmVCdXR0b24uY2xhc3NOYW1lID0gJ2J0biBidG4tcHJpbWFyeSBtdC0yJztcclxuICAgIHNhdmVCdXR0b24uaWQgPSAnc2F2ZUJ0bk5ld1Byb2plY3QnXHJcbiAgICBzYXZlQnV0dG9uLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBGb2xkZXInO1xyXG4gICAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKHNhdmVCdXR0b24pO1xyXG5cclxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY2FuY2VsQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcclxuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gICAgY2FuY2VsQnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLWRhbmdlciBtdC0yIG1zLTInO1xyXG4gICAgXHJcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG4gICAgbW9kYWxCb2R5LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XHJcbiAgXHJcbiAgICAvLyBBcHBlbmQgYWxsIHBhcnRzIHRvIG1vZGFsIGNvbnRlbnRcclxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbEhlYWRlcik7XHJcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxCb2R5KTtcclxuICAgIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XHJcbiAgXHJcbiAgICAvLyBFdmVudCBsaXN0ZW5lciBmb3IgY2xvc2UgYnV0dG9uXHJcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgc2F2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBuYW1lSW5wdXQudmFsdWU7XHJcbiAgICAgIGNvbnN0IHByb2plY3RDb2xvciA9IGNvbG9yU2VsZWN0LnZhbHVlO1xyXG4gICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgXHJcbiAgICAgXHJcbiAgIFxyXG4gIFxyXG4gICAgfSk7XHJcbiAgXHJcbiAgIFxyXG4gICAgLy8gRnVuY3Rpb24gdG8gY2xvc2UgdGhlIG1vZGFsXHJcbiAgICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xyXG4gICAgICBtb2RhbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gRnVuY3Rpb24gdG8gb3BlbiB0aGUgbW9kYWxcclxuICAgIGZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcclxuICAgICAgbW9kYWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIHNwYWNlLmFwcGVuZChtb2RhbENvbnRhaW5lcilcclxuICAgICAgbmFtZUlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgIGNvbG9yU2VsZWN0LnNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgfVxyXG4gIFxyXG5cclxuICAgIC8vIEV4cG9ydCBtb2RhbCBmdW5jdGlvbnNcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG9wZW5Nb2RhbCxcclxuICAgICAgY2xvc2VNb2RhbCxcclxuICAgICAgc2F2ZUJ1dHRvbixcclxuICAgICAgbmFtZUlucHV0LFxyXG4gICAgICBjb2xvclNlbGVjdCxcclxuICAgIH07XHJcbiAgfSkoKTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBtb2RhbDtcclxuICBcclxuICIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcclxuaW1wb3J0IG1vZGFsIGZyb20gXCIuL3Byb2plY3REb20uanNcIjtcclxuaW1wb3J0IHsgbG9hZFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZS5qcyc7XHJcblxyXG5jb25zdCB0YXNrU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1NwYWNlJyk7XHJcbmNvbnN0IHNwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwYWNlJyk7XHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0TWFuYWdlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmFsbFByb2plY3RGb2xkZXIgPSBbXTtcclxuICAgIHRoaXMubG9hZFByb2plY3RzKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuYWxsUHJvamVjdEZvbGRlci5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy51c2VyRGF0YSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlckRhdGEoKSB7XHJcbiAgICBjb25zdCBuYW1lRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lRm9ybScpO1xyXG4gICAgbmFtZUZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgY29uc3QgdXNlck5hbWVTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlck5hbWUnKSkgfHwgJ1VzZXInO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJOYW1lJywgSlNPTi5zdHJpbmdpZnkodXNlck5hbWVTdG9yYWdlKSk7XHJcblxyXG4gICAgY29uc3QgbmF2VXNlck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2VXNlck5hbWUnKTtcclxuICAgIG5hbWVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgdXNlck5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyTmFtZScpO1xyXG4gICAgICBjb25zdCB1c2VyTmFtZSA9IHVzZXJOYW1lSW5wdXQudmFsdWU7XHJcblxyXG4gICAgICBpZiAodXNlck5hbWUpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlck5hbWUnLCBKU09OLnN0cmluZ2lmeSh1c2VyTmFtZSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOYW1lIHNhdmVkOicsIHVzZXJOYW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGROZXdQcm9qZWN0KDAsICdEZWZhdWx0JywgJ2JsYWNrJyk7XHJcbiAgICAgICAgbmFtZUZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0aGlzLmRpc3BsYXllcigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIG5hbWUgaXMgZW1wdHkuJyk7XHJcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yTWVzc2FnZScpO1xyXG4gICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9ICdOYW1lIGNhbm5vdCBiZSBlbXB0eS4nO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhvbWVQYWdlKCkge1xyXG4gICAgc3BhY2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNjZWRiZTknO1xyXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gJ0hvbWUnO1xyXG4gICAgdGhpcy5kaXNwbGF5ZXIoKTtcclxuICB9XHJcblxyXG4gIGFsbFRvZG9zKCkge1xyXG4gICAgc3BhY2UuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSAnQWxsIFRvZG9zJztcclxuXHJcbiAgICB0aGlzLmFsbFByb2plY3RGb2xkZXIuZm9yRWFjaCh0b2RvID0+IHtcclxuICAgICAgY29uc3QgYWxsVG9kb3NWYXIgPSB0b2RvLnByb2plY3Q7XHJcbiAgICAgIGlmIChhbGxUb2Rvc1ZhciA9PT0gJycpIHtcclxuICAgICAgICBzcGFjZS5pbm5lckhUTUwgPSAnPGg0Pk5vIFRhc2sgRm91bmQ8L2g0Pic7XHJcbiAgICAgIH1cclxuICAgICAgUHJvamVjdC5wcm90b3R5cGUuc2ltcGxlRGlzcGxheWVyKGFsbFRvZG9zVmFyKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29tcGxldGVkVGFzaygpIHtcclxuICAgIHNwYWNlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gJ0NvbXBsZXRlZCBUYXNrcyc7XHJcbiAgICBsZXQgY29tcGxldGVkVGFza3NGb3VuZCA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuYWxsUHJvamVjdEZvbGRlci5mb3JFYWNoKHByb2plY3RzID0+IHtcclxuICAgICAgcHJvamVjdHMucHJvamVjdC5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgIGlmICh0YXNrLmlzQ29tcGxldGVkKSB7XHJcbiAgICAgICAgICBjb21wbGV0ZWRUYXNrc0ZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgIFByb2plY3QucHJvdG90eXBlLnNpbXBsZURpc3BsYXllcihbdGFza10pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWNvbXBsZXRlZFRhc2tzRm91bmQpIHtcclxuICAgICAgc3BhY2UuaW5uZXJIVE1MID0gJzxoND5ObyBDb21wbGV0ZWQgVGFzayBGb3VuZDwvaDQ+JztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBlbmRpbmdUb2RvKCkge1xyXG4gICAgc3BhY2UuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSAnUGVuZGluZyBUYXNrcyc7XHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBwZW5kaW5nVGFza3MgPSBbXTtcclxuXHJcbiAgICB0aGlzLmFsbFByb2plY3RGb2xkZXIuZm9yRWFjaChwcm9qZWN0cyA9PiB7XHJcbiAgICAgIHByb2plY3RzLnByb2plY3QuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICBjb25zdCBkdWVEYXRlID0gbmV3IERhdGUodGFzay5kdWVEYXRlKTtcclxuICAgICAgICBpZiAodGFzay5pc0NvbXBsZXRlZCA9PT0gZmFsc2UgJiYgdG9kYXkgPD0gZHVlRGF0ZSkge1xyXG4gICAgICAgICAgcGVuZGluZ1Rhc2tzLnB1c2godGFzayk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChwZW5kaW5nVGFza3MubGVuZ3RoID4gMCkge1xyXG4gICAgICBwZW5kaW5nVGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICBQcm9qZWN0LnByb3RvdHlwZS5zaW1wbGVEaXNwbGF5ZXIoW3Rhc2tdKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzcGFjZS5pbm5lckhUTUwgPSAnPGg0Pk5vIFBlbmRpbmcgVGFza3MgRm91bmQ8L2g0Pic7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2RheVRvZG9zKCkge1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgd2Vla2RheTogJ2xvbmcnLFxyXG4gICAgICBkYXk6ICcyLWRpZ2l0JyxcclxuICAgICAgbW9udGg6ICcyLWRpZ2l0JyxcclxuICAgICAgeWVhcjogJ251bWVyaWMnXHJcbiAgICB9O1xyXG4gICAgY29uc3QgbG9jYWxEYXRlID0gdG9kYXkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1HQicsIG9wdGlvbnMpO1xyXG4gICAgc3BhY2UuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSAnVG9kYXkgVGFza3MnO1xyXG5cclxuICAgIHRoaXMuYWxsUHJvamVjdEZvbGRlci5mb3JFYWNoKHByb2plY3RzID0+IHtcclxuICAgICAgcHJvamVjdHMucHJvamVjdC5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgIGlmICh0YXNrLmR1ZURhdGUgPT09IGxvY2FsRGF0ZSkge1xyXG4gICAgICAgICAgUHJvamVjdC5wcm90b3R5cGUuc2ltcGxlRGlzcGxheWVyKFt0YXNrXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbWlzc2VkVGFza3MoKSB7XHJcbiAgICBzcGFjZS5pbm5lckhUTUwgPSAnJztcclxuICAgIHRpdGxlLmlubmVyVGV4dCA9ICdNaXNzZWQgVGFza3MnO1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgbWlzc2VkVGFza3MgPSBbXTtcclxuXHJcbiAgICB0aGlzLmFsbFByb2plY3RGb2xkZXIuZm9yRWFjaChwcm9qZWN0cyA9PiB7XHJcbiAgICAgIHByb2plY3RzLnByb2plY3QuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICBjb25zdCBkdWVEYXRlID0gbmV3IERhdGUodGFzay5kdWVEYXRlKTtcclxuICAgICAgICBpZiAodGFzay5pc0NvbXBsZXRlZCA9PT0gZmFsc2UgJiYgdG9kYXkgPiBkdWVEYXRlKSB7XHJcbiAgICAgICAgICBtaXNzZWRUYXNrcy5wdXNoKHRhc2spO1xyXG4gICAgICAgICAgdGl0bGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChtaXNzZWRUYXNrcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIG1pc3NlZFRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgUHJvamVjdC5wcm90b3R5cGUuc2ltcGxlRGlzcGxheWVyKFt0YXNrXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3BhY2UuaW5uZXJIVE1MID0gJzxoND5ObyBNaXNzZWQgVGFza3MgRm91bmQ8L2g0Pic7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2FkUHJvamVjdHMoKSB7XHJcbiAgICB0aGlzLmFsbFByb2plY3RGb2xkZXIgPSBsb2FkUHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCk7XHJcbiAgfVxyXG5cclxuICBzYXZlUHJvamVjdHMoKSB7XHJcbiAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSh0aGlzLmFsbFByb2plY3RGb2xkZXIpO1xyXG4gIH1cclxuXHJcbiAgYWRkTmV3UHJvamVjdChpZCwgbmFtZSwgY29sb3IpIHtcclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChpZCwgbmFtZSwgY29sb3IpO1xyXG4gICAgdGhpcy5hbGxQcm9qZWN0Rm9sZGVyLnB1c2gobmV3UHJvamVjdCk7XHJcbiAgICB0aGlzLnNhdmVQcm9qZWN0cygpO1xyXG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XHJcbiAgfVxyXG5cclxuICBkZWxldGVQcm9qZWN0KGluZGV4KSB7XHJcbiAgICBjb25zdCBjb21maXJtID0gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIFRhc2s/Jyk7XHJcbiAgICBpZiAoY29tZmlybSkge1xyXG4gICAgICB0aGlzLmFsbFByb2plY3RGb2xkZXIuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgdGhpcy5zYXZlUHJvamVjdHMoKTtcclxuICAgICAgdGhpcy5wcm9qZWN0UGFnZWFuZFNpZGVCYXJET00odGhpcy5hbGxQcm9qZWN0Rm9sZGVyKTtcclxuICAgICAgdGhpcy5uZXdQcm9qZWN0QnRuKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5ZXIoKSB7XHJcbiAgICBzcGFjZS5pbm5lckhUTUwgPSAnJztcclxuICAgIHRpdGxlLmlubmVySFRNTCA9ICdIb21lJztcclxuICAgIG5hdlVzZXJOYW1lLnRleHRDb250ZW50ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlck5hbWUnKSk7XHJcblxyXG4gICAgc3BhY2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XHJcbiAgICB0aGlzLnByb2plY3RQYWdlYW5kU2lkZUJhckRPTSh0aGlzLmFsbFByb2plY3RGb2xkZXIpO1xyXG4gICAgdGhpcy5uZXdQcm9qZWN0QnRuKCk7XHJcbiAgICB0aGlzLm5ld1Byb2plY3RGb3JtKHRoaXMuYWxsUHJvamVjdEZvbGRlcik7XHJcbiAgICB0aGlzLmZvb3RlcigpO1xyXG4gIH1cclxuXHJcbiAgbmV3UHJvamVjdEJ0bigpIHtcclxuICAgIGNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIG5ld1Byb2plY3RCdG4udGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xyXG4gICAgbmV3UHJvamVjdEJ0bi5pZCA9ICdhZGRQcm9qZWN0JztcclxuICAgIG5ld1Byb2plY3RCdG4uY2xhc3NOYW1lID0gJ2J0biBidG4tcHJpbWFyeSBjcmVhdGVOZXdQcm9qZWN0JztcclxuICAgIG5ld1Byb2plY3RCdG4uc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcbiAgICBzcGFjZS5hcHBlbmQobmV3UHJvamVjdEJ0bik7XHJcblxyXG4gICAgY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jcmVhdGVOZXdQcm9qZWN0Jyk7XHJcbiAgICBjcmVhdGVOZXdQcm9qZWN0LmZvckVhY2goYnRuID0+IHtcclxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1vZGFsLm9wZW5Nb2RhbCgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmV3UHJvamVjdEZvcm0ocHJvamVjdCkge1xyXG4gICAgY29uc3Qgc2F2ZUJ0bk5ld1Byb2plY3QgPSBtb2RhbC5zYXZlQnV0dG9uO1xyXG4gICAgc2F2ZUJ0bk5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSBtb2RhbC5uYW1lSW5wdXQudmFsdWU7XHJcbiAgICAgIGNvbnN0IGNvbG9yID0gbW9kYWwuY29sb3JTZWxlY3QudmFsdWU7XHJcbiAgICAgIGNvbnN0IGlkID0gdGhpcy5hbGxQcm9qZWN0Rm9sZGVyLmxlbmd0aCArIDE7XHJcblxyXG4gICAgICBjb25zdCBkdXBsaWNhdGVQcm9qZWN0ID0gdGhpcy5hbGxQcm9qZWN0Rm9sZGVyLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09IG5hbWUpO1xyXG5cclxuICAgICAgaWYgKGR1cGxpY2F0ZVByb2plY3QpIHtcclxuICAgICAgICBhbGVydCgnQSBwcm9qZWN0IHdpdGggdGhpcyBuYW1lIGFscmVhZHkgZXhpc3RzLicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYWRkTmV3UHJvamVjdChpZCwgbmFtZSwgY29sb3IpO1xyXG4gICAgICAgIHRoaXMucHJvamVjdFBhZ2VhbmRTaWRlQmFyRE9NKHByb2plY3QpO1xyXG4gICAgICAgIG1vZGFsLmNsb3NlTW9kYWwoKTtcclxuICAgICAgICB0aGlzLm5ld1Byb2plY3RCdG4oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RlZFByb2plY3RBcnJheShhcnJheSkge1xyXG4gICAgUHJvamVjdC5wcm90b3R5cGUuc2ltcGxlRGlzcGxheWVyKGFycmF5KTtcclxuICAgIHRoaXMuc2F2ZVByb2plY3RzKCk7XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoZXIoZGlzQXJyYXkpIHtcclxuICAgIFByb2plY3QucHJvdG90eXBlLnNpbXBsZURpc3BsYXllcihkaXNBcnJheSk7XHJcbiAgICB0aGlzLnNhdmVQcm9qZWN0cygpO1xyXG4gIH1cclxuXHJcbiAgcHJvamVjdFBhZ2VhbmRTaWRlQmFyRE9NKHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0VUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdFVMJyk7XHJcbiAgICBuZXdQcm9qZWN0VUwuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBzcGFjZS5pbm5lckhUTUwgPSAnJztcclxuICAgIHRpdGxlLmlubmVyVGV4dCA9ICdNeSBQcm9qZWN0cyc7XHJcblxyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcclxuICAgICAgLy8gU2lkZWJhciBQcm9qZWN0IExpc3RcclxuICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICBsaXN0SXRlbS5jbGFzc05hbWUgPSAnbGlzdC1ncm91cC1pdGVtJztcclxuICAgICAgbGlzdEl0ZW0uaWQgPSAncHJvamVjdEZvbGRlcic7XHJcbiAgICAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcclxuXHJcbiAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgIGljb24uY2xhc3NOYW1lID0gJ2ZhLXNvbGlkIGZhLWZvbGRlciBwcm9qZWN0LWljb24nO1xyXG4gICAgICBpY29uLnN0eWxlLmNvbG9yID0gcHJvamVjdC5jb2xvcjtcclxuXHJcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBwcm9qZWN0TmFtZS5jbGFzc05hbWUgPSAncHJvamVjdC1uYW1lJztcclxuICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XHJcblxyXG4gICAgICBsaXN0SXRlbS5hcHBlbmQoaWNvbik7XHJcbiAgICAgIGxpc3RJdGVtLmFwcGVuZChwcm9qZWN0TmFtZSk7XHJcblxyXG4gICAgICBsaXN0SXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnV2hpdGUnO1xyXG4gICAgICBsaXN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsZXQgZ2V0UHJvamVjdEFycmF5ID0gcHJvamVjdC5wcm9qZWN0O1xyXG4gICAgICAgIFByb2plY3QucHJvdG90eXBlLmRpc3BsYXllcihnZXRQcm9qZWN0QXJyYXkpO1xyXG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IHByb2plY3QubmFtZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBuZXdQcm9qZWN0VUwuYXBwZW5kKGxpc3RJdGVtKTtcclxuXHJcbiAgICAgIC8vIE1haW4gU3BhY2UgUHJvamVjdCBDYXJkc1xyXG4gICAgICBjb25zdCBsaXN0SXRlbVRhc2tTcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGxpc3RJdGVtVGFza1NwYWNlLmNsYXNzTmFtZSA9ICdwcm9qZWN0LWNhcmQnO1xyXG4gICAgICBsaXN0SXRlbVRhc2tTcGFjZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XHJcblxyXG4gICAgICBjb25zdCBjYXJkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgY2FyZEljb24uY2xhc3NOYW1lID0gJ2ZhLXNvbGlkIGZhLWZvbGRlciBwcm9qZWN0LWNhcmQtaWNvbic7XHJcbiAgICAgIGNhcmRJY29uLnN0eWxlLmNvbG9yID0gcHJvamVjdC5jb2xvcjtcclxuICAgICAgbGlzdEl0ZW1UYXNrU3BhY2UuYXBwZW5kKGNhcmRJY29uKTtcclxuXHJcbiAgICAgIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgY2FyZFRpdGxlLmNsYXNzTmFtZSA9ICdwcm9qZWN0LWNhcmQtdGl0bGUnO1xyXG4gICAgICBjYXJkVGl0bGUuaW5uZXJUZXh0ID0gcHJvamVjdC5uYW1lO1xyXG4gICAgICBsaXN0SXRlbVRhc2tTcGFjZS5hcHBlbmQoY2FyZFRpdGxlKTtcclxuXHJcbiAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgIGRlbGV0ZUljb24uY2xhc3NOYW1lID0gJ2ZhLXNvbGlkIGZhLXRyYXNoIGRlbGV0ZS1pY29uJztcclxuICAgICAgZGVsZXRlSWNvbi5pZCA9ICdkZWxldGVQcm9qZWN0JztcclxuICAgICAgZGVsZXRlSWNvbi5zdHlsZS5wYWRkaW5nID0gJzVweCc7XHJcbiAgICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChsaXN0SXRlbVRhc2tTcGFjZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSk7XHJcbiAgICAgICAgdGhpcy5kZWxldGVQcm9qZWN0KGluZGV4KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsaXN0SXRlbVRhc2tTcGFjZS5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcclxuICAgICAgc3BhY2UuYXBwZW5kKGxpc3RJdGVtVGFza1NwYWNlKTtcclxuXHJcbiAgICAgIGxpc3RJdGVtVGFza1NwYWNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCBnZXRQcm9qZWN0QXJyYXkgPSBwcm9qZWN0LnByb2plY3Q7XHJcbiAgICAgICAgUHJvamVjdC5wcm90b3R5cGUuZGlzcGxheWVyKGdldFByb2plY3RBcnJheSk7XHJcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gcHJvamVjdC5uYW1lO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyKCkge1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICBmb290ZXIuaW5uZXJIVE1MID0gJyZjb3B5OyAyMDI0IGJ5IE1vX01hbnN1ciAnO1xyXG5cclxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBsaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL01vTWFuc3VyJztcclxuICAgIGxpbmsuY2xhc3NOYW1lID0gJ2xpbmstb2Zmc2V0LTIgbGluay1vZmZzZXQtMy1ob3ZlciBsaW5rLXVuZGVybGluZSBsaW5rLXVuZGVybGluZS1vcGFjaXR5LTAgbGluay11bmRlcmxpbmUtb3BhY2l0eS03NS1ob3Zlcic7XHJcblxyXG4gICAgY29uc3QgbGlua1RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnIE1vX01hbnN1ciBHaXRIdWInKTtcclxuICAgIGxpbmsuYXBwZW5kQ2hpbGQobGlua1RleHQpO1xyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGxpbmspO1xyXG5cclxuICAgIGNvbnN0IHJlbWFpbmluZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnLiBBbGwgcmlnaHRzIHJlc2VydmVkLicpO1xyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHJlbWFpbmluZ1RleHQpO1xyXG5cclxuICAgIGZvb3Rlci5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgIHNwYWNlLmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHRoZU1hbmFnZXIgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL3RvZG8uanNcIjtcclxuY29uc3Qgc3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BhY2UnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld1Rhc2tGb3JtRE9NKHNlbGVjdEFycmF5KSB7XHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGZvcm0uaWQgPSAnbmV3VGFza0Zvcm0nO1xyXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdwb3B1cC1mb3JtJywgJ25lZWRzLXZhbGlkYXRpb24nKTtcclxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdub3ZhbGlkYXRlJywgJycpO1xyXG4gICAgXHJcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGU6JztcclxuICAgIHRpdGxlTGFiZWwuY2xhc3NOYW1lID0gJ2Zvcm0tbGFiZWwnO1xyXG4gICAgdGl0bGVMYWJlbC5odG1sRm9yID0gJ3Byb2plY3RUaXRsZSc7XHJcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICAgIHRpdGxlSW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCc7XHJcbiAgICB0aXRsZUlucHV0LmlkID0gJ3Byb2plY3RUaXRsZSc7XHJcbiAgICB0aXRsZUlucHV0Lm5hbWUgPSAndGl0bGUnO1xyXG4gICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICB0aXRsZUlucHV0LnN0eWxlLmhlaWdodCA9ICc1MHB4JztcclxuICAgIFxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOic7XHJcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmNsYXNzTmFtZSA9ICdmb3JtLWxhYmVsJztcclxuICAgIGRlc2NyaXB0aW9uTGFiZWwuaHRtbEZvciA9ICdwcm9qZWN0RGVzY3JpcHRpb24nO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9ICdwcm9qZWN0RGVzY3JpcHRpb24nO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gJ2Rlc2NyaXB0aW9uJztcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQubWF4TGVuZ3RoID0gNDBcclxuICAgIGRlc2NyaXB0aW9uSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgXHJcbiAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOic7XHJcbiAgICBkdWVEYXRlTGFiZWwuY2xhc3NOYW1lID0gJ2Zvcm0tbGFiZWwnO1xyXG4gICAgZHVlRGF0ZUxhYmVsLmh0bWxGb3IgPSAncHJvamVjdER1ZURhdGUnO1xyXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGR1ZURhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xyXG4gICAgZHVlRGF0ZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xyXG4gICAgZHVlRGF0ZUlucHV0LmlkID0gJ3Byb2plY3REdWVEYXRlJztcclxuICAgIGR1ZURhdGVJbnB1dC5uYW1lID0gJ2R1ZURhdGUnO1xyXG4gICAgZHVlRGF0ZUlucHV0LnN0eWxlLmhlaWdodCA9ICc1MHB4JztcclxuICAgIGR1ZURhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICBcclxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonO1xyXG4gICAgcHJpb3JpdHlMYWJlbC5jbGFzc05hbWUgPSAnZm9ybS1sYWJlbCc7XHJcbiAgICBwcmlvcml0eUxhYmVsLmh0bWxGb3IgPSAncHJvamVjdFByaW9yaXR5JztcclxuICAgIFxyXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgIHByaW9yaXR5U2VsZWN0LmNsYXNzTmFtZSA9ICdmb3JtLXNlbGVjdCc7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5pZCA9ICdwcm9qZWN0UHJpb3JpdHknO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QubmFtZSA9ICdwcmlvcml0eSc7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICBwcmlvcml0eVNlbGVjdC5zdHlsZS5oZWlnaHQgPSAnNTBweCc7XHJcbiAgICBcclxuICAgIGNvbnN0IHByaW9yaXR5T3B0aW9ucyA9IFsnTG93JywgJ01lZGl1bScsICdIaWdoJ107XHJcbiAgICBwcmlvcml0eU9wdGlvbnMuZm9yRWFjaChvcHRpb25UZXh0ID0+IHtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25UZXh0LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uVGV4dDtcclxuICAgICAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgc3VibWl0QnV0dG9uLnR5cGUgPSAnc3VibWl0JztcclxuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDcmVhdGUgUHJvamVjdCc7XHJcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NOYW1lID0gJ2J0biBidG4tc3VjY2VzcyBtdC0zJztcclxuICAgIFxyXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjYW5jZWxCdXR0b24udHlwZSA9ICdidXR0b24nO1xyXG4gICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XHJcbiAgICBjYW5jZWxCdXR0b24uY2xhc3NOYW1lID0gJ2J0biBidG4tZGFuZ2VyIG10LTMgbXMtMic7XHJcbiAgICBcclxuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xyXG5cclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZvcm1hdERhdGVUb0RNWShkYXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF5XSA9IGRhdGUuc3BsaXQoJy0nKTsgXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVPYmplY3QgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7IFxyXG4gICAgICAgICAgICBjb25zdCBkYXlOYW1lID0gZGF0ZU9iamVjdC50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywgeyB3ZWVrZGF5OiAnbG9uZycgfSk7IC8vIEdldCB0aGUgZGF5IG5hbWVcclxuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGAke2RheX0vJHttb250aH0vJHt5ZWFyfWA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gYCR7ZGF5TmFtZX0sICR7Zm9ybWF0dGVkRGF0ZX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCFkdWVEYXRlSW5wdXQudmFsdWUpIHtcclxuICAgICAgICAgICAgZHVlRGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2lzLWludmFsaWQnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGR1ZURhdGVJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1pbnZhbGlkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkdWVEYXRlSW5wdXQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBwcmlvcml0eVNlbGVjdC52YWx1ZTtcclxuXHJcbiAgICAgXHJcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZm9ybWF0RGF0ZVRvRE1ZKGR1ZURhdGUpLCBwcmlvcml0eSwgZmFsc2UpO1xyXG5cclxuICAgICAgICBzZWxlY3RBcnJheS5wdXNoKG5ld1Rhc2spO1xyXG4gICAgICAgIFByb2plY3QucHJvdG90eXBlLmRpc3BsYXllcihzZWxlY3RBcnJheSlcclxuICAgICAgICBcclxuICAgICAgICBmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IC8vIEhpZGUgdGhlIGZvcm0gYWZ0ZXIgc3VibWlzc2lvblxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHNwYWNlLmFwcGVuZChmb3JtQ29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGZvcm1Db250YWluZXI7XHJcbn1cclxuIiwiaW1wb3J0IFByb2plY3RNYW5hZ2VyIGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyLmpzXCI7XHJcbmltcG9ydCBuZXdUYXNrRm9ybURPTSBmcm9tIFwiLi90YXNrRm9ybS5qc1wiO1xyXG5cclxuaW1wb3J0IHsgdGhlTWFuYWdlciB9IGZyb20gXCIuL2luZGV4LmpzXCI7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcclxuY29uc3Qgc3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BhY2UnKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaXNDb21wbGV0ZWQgPSBmYWxzZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIHRoaXMuaXNDb21wbGV0ZWQgPSBpc0NvbXBsZXRlZDtcclxuICB9XHJcblxyXG4gIGNvbXBsZXRlZEZ1bmMoY2hlY2tib3gpIHtcclxuICAgIHRoaXMuaXNDb21wbGV0ZWQgPSBjaGVja2JveC5jaGVja2VkO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5pc0NvbXBsZXRlZClcclxuICAgIHJldHVybiB0aGlzLmlzQ29tcGxldGVkO1xyXG4gIH1cclxuXHJcbiAgc3RhdHVzQ2hhbmdlKHRhc2ssIHN0YXR1cyl7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpIHx8IFtdO1xyXG4gICAgdGFzay5pc0NvbXBsZXRlZCA9IHN0YXR1c1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuICAgIHRoZU1hbmFnZXIoKS5zYXZlUHJvamVjdHMoKVxyXG4gIH1cclxuICBcclxuICBkZWxldGVUYXNrKHByb2plY3QsIGluZGV4KSB7XHJcbiAgICBjb25zdCBjb21maXJtID0gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIFRhc2s/JylcclxuICAgIGNvbnN0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkgfHwgW107IFxyXG4gICAgaWYoY29tZmlybSl7XHJcbiAgICAgIHByb2plY3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhcmQudGFzay1jYXJkW2RhdGEtaW5kZXg9XCIke2luZGV4fVwiXWApLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGVkaXRUYXNrKHRhc2ssIHNlbGVjdEFycmF5KSB7XHJcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gbmV3VGFza0Zvcm1ET00oW10pO1xyXG4gICAgc3BhY2UuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XHJcbiAgXHJcbiAgICBjb25zdCBmb3JtID0gZm9ybUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFRpdGxlJyk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdERlc2NyaXB0aW9uJyk7XHJcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0RHVlRGF0ZScpO1xyXG4gICAgY29uc3QgcHJpb3JpdHlTZWxlY3QgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0UHJpb3JpdHknKTtcclxuICBcclxuICAgIC8vIFByZS1maWxsIHRoZSBmb3JtIHdpdGggdGhlIGN1cnJlbnQgdGFzayB2YWx1ZXNcclxuICAgIHRpdGxlSW5wdXQudmFsdWUgPSB0YXNrLnRpdGxlO1xyXG4gICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XHJcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSB0aGlzLmZvcm1hdERhdGVUb0RNWSh0YXNrLmR1ZURhdGUpO1xyXG4gICAgcHJpb3JpdHlTZWxlY3QudmFsdWUgPSB0YXNrLnByaW9yaXR5O1xyXG4gIFxyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgXHJcbiAgICAgIHRhc2sudGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xyXG4gICAgICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcclxuICBcclxuICAgICAgaWYgKGR1ZURhdGVJbnB1dC52YWx1ZSkge1xyXG4gICAgICAgIHRhc2suZHVlRGF0ZSA9IHRoaXMuZm9ybWF0RGF0ZVRvRE1ZKGR1ZURhdGVJbnB1dC52YWx1ZSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgXHJcbiAgICAgIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eVNlbGVjdC52YWx1ZTtcclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpIHx8IFtdO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG5cclxuICAgICAgdGhlTWFuYWdlcigpLnNhdmVQcm9qZWN0cygpO1xyXG4gICAgICBQcm9qZWN0LnByb3RvdHlwZS5kaXNwbGF5ZXIoc2VsZWN0QXJyYXkpXHJcbiAgICBcclxuICAgICAgLy8gSGlkZSB0aGUgZm9ybSBjb250YWluZXJcclxuICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9XHJcbiAgXHJcblxyXG4gIGZvcm1hdERhdGVUb0RNWShkYXRlKSB7XHJcbiAgICBjb25zdCBbeWVhciwgbW9udGgsIGRheV0gPSBkYXRlLnNwbGl0KCctJyk7IC8vIEFzc3VtaW5nIHRoZSBkYXRlIGlzIGluaXRpYWxseSBpbiAneWVhci1tb250aC1kYXknIGZvcm1hdFxyXG4gICAgY29uc3QgZGF0ZU9iamVjdCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KTsgLy8gQ3JlYXRlIGEgRGF0ZSBvYmplY3RcclxuICAgIGNvbnN0IGRheU5hbWUgPSBkYXRlT2JqZWN0LnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCB7IHdlZWtkYXk6ICdsb25nJyB9KTsgLy8gR2V0IHRoZSBkYXkgbmFtZVxyXG4gICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGAke2RheX0vJHttb250aH0vJHt5ZWFyfWA7XHJcbiAgICBcclxuICAgIHJldHVybiBgJHtkYXlOYW1lfSwgJHtmb3JtYXR0ZWREYXRlfWA7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3QuanNcIjtcclxuaW1wb3J0IFByb2plY3RNYW5hZ2VyIGZyb20gXCIuL3Byb2plY3RNYW5hZ2VyLmpzXCI7XHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL3RvZG8uanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2tET00ocHJvamVjdEFycmF5KSB7XHJcbiAgY29uc3Qgc3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BhY2UnKTtcclxuXHJcbiAgcHJvamVjdEFycmF5LmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCB0aXRsZVRleHQgPSB0YXNrLnRpdGxlO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25UZXh0ID0gdGFzay5kZXNjcmlwdGlvbjtcclxuICAgIGNvbnN0IGR1ZURhdGVUZXh0ID0gdGFzay5kdWVEYXRlO1xyXG4gICAgY29uc3QgcHJpb3JpdHlUZXh0ID0gdGFzay5wcmlvcml0eTtcclxuICAgIGNvbnN0IGlzQ29tcGxldGVkID0gdGFzay5pc0NvbXBsZXRlZDtcclxuXHJcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkLmNsYXNzTmFtZSA9ICdjYXJkIHRhc2stY2FyZCBtYi0zJztcclxuICAgIGNhcmQuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpO1xyXG5cclxuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcm93LmNsYXNzTmFtZSA9ICdyb3cgbm8tZ3V0dGVycyc7XHJcblxyXG4gICAgY29uc3QgcHJpb3JpdHlCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByaW9yaXR5QmFyLmNsYXNzTmFtZSA9ICdwcmlvcml0eS1iYXInO1xyXG4gICAgc3dpdGNoIChwcmlvcml0eVRleHQudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICBjYXNlICdsb3cnOlxyXG4gICAgICAgIHByaW9yaXR5QmFyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMjhhNzQ1JztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnbWVkaXVtJzpcclxuICAgICAgICBwcmlvcml0eUJhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmYzEwNyc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2hpZ2gnOlxyXG4gICAgICAgIHByaW9yaXR5QmFyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZGMzNTQ1JztcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBwcmlvcml0eUJhci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzZjNzU3ZCc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRpdGxlQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb2wtbWQtMiB3LTEwMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC13aGl0ZSBwb3NpdGlvbi1yZWxhdGl2ZSc7XHJcbiAgICB0aXRsZUNvbnRhaW5lci5pZCA9ICd0aXRsZUNvbnRhaW5lcic7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICB0aXRsZS5jbGFzc05hbWUgPSAnY2FyZC10aXRsZSc7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRpdGxlVGV4dDtcclxuICAgIHRpdGxlQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHByaW9yaXR5QmFyLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcclxuXHJcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUJhcik7XHJcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gICAgY29uc3QgbGFiZWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxhYmVsQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdsYWJlbC1jb250YWluZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuJztcclxuICAgIFxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGRlc2NyaXB0aW9uTGFiZWwuY2xhc3NOYW1lID0gJ2xhYmVsJztcclxuICAgIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJIVE1MID0gYDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLW5vdGUtc3RpY2t5XCI+PC9pPiBEZXNjcmlwdGlvbjwvc21hbGw+YDtcclxuICAgIGRlc2NyaXB0aW9uTGFiZWwuaWQgPSAnZGVzY3JpcHRpb25MYWJlbFRhc2snO1xyXG4gICAgXHJcbiAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBkdWVEYXRlTGFiZWwuY2xhc3NOYW1lID0gJ2xhYmVsJztcclxuICAgIGR1ZURhdGVMYWJlbC5pbm5lckhUTUwgPSBgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPjxpIGNsYXNzPVwiZmFzIGZhLWNhbGVuZGFyLWRheVwiPjwvaT4gRHVlIERhdGU8L3NtYWxsPmA7XHJcbiAgICBcclxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBwcmlvcml0eUxhYmVsLmNsYXNzTmFtZSA9ICdsYWJlbCc7XHJcbiAgICBwcmlvcml0eUxhYmVsLmlubmVySFRNTCA9IGA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+PGkgY2xhc3M9XCJmYXMgZmEtZmxhZ1wiPjwvaT4gUHJpb3JpdHk8L3NtYWxsPmA7XHJcbiAgICBcclxuICAgIGxhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xyXG4gICAgbGFiZWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcclxuICAgIGxhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xyXG4gICAgXHJcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbENvbnRhaW5lcik7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBlbGVtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGVtZW50Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdlbGVtZW50LWNvbnRhaW5lciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJztcclxuICAgIGVsZW1lbnRDb250YWluZXIuaWQgPSAnZWxlbWVudENvbnRhaW5lcic7XHJcblxyXG4gICBcclxuXHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBkZXNjcmlwdGlvbi5jbGFzc05hbWUgPSAnY29sLTggY2FyZC10ZXh0IGRlc2NyaXB0aW9uJztcclxuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb25UZXh0O1xyXG4gICAgZGVzY3JpcHRpb24uaWQgPSAnY2FyZGRlc2NyaXB0aW9uJztcclxuXHJcbiAgICBjb25zdCB2aWV3QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB2aWV3QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdidG4tb3V0bGluZS1wcmltYXJ5JywgJ3ZpZXctYnV0dG9uJywgJ2QtbGctbm9uZScsICdkLW1kLW5vbmUnKTtcclxuICAgIHZpZXdCdXR0b24uaWQgPSAndmlld0Rlc2NyaXB0aW9uJ1xyXG4gICAgdmlld0J1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1leWVcIj48L2k+JztcclxuXHJcblxyXG4gIFxyXG4gICAgICAvLyB2aWV3QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIGxldCBpc0NsaWNrZWQgPSB0cnVlXHJcbiAgICB2aWV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnZC1ub25lJyk7XHJcbiAgICAgIGlmIChpc0NsaWNrZWQpIHtcclxuICAgICAgICAgIHZpZXdCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtZXllXCI+PC9pPic7XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgICBkdWVEYXRlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgICAgICAgIHByaW9yaXR5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVzY3JpcHRpb24uc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgIGR1ZURhdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIHByaW9yaXR5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICB2aWV3QnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWV5ZS1zbGFzaFwiPjwvaT4nO1xyXG4gICAgICB9XHJcbiAgICAgIGlzQ2xpY2tlZCA9IWlzQ2xpY2tlZFxyXG4gIH0pO1xyXG5cclxuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcHJpb3JpdHkuY2xhc3NOYW1lID0gJ2NhcmQtdGV4dCBwcmlvcml0eSc7XHJcbiAgICBwcmlvcml0eS5pbm5lckhUTUwgPSBgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPjxpIGNsYXNzPVwiZmFzIGZhLWZsYWdcIj48L2k+ICR7cHJpb3JpdHlUZXh0fTwvc21hbGw+YDtcclxuXHJcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZHVlRGF0ZS5jbGFzc05hbWUgPSAnY2FyZC10ZXh0JztcclxuICAgIGR1ZURhdGUuaW5uZXJIVE1MID0gYDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj5cclxuICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNhbGVuZGFyLWRheVwiPjwvaT4gJHtkdWVEYXRlVGV4dH08L3NtYWxsPmA7XHJcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKVxyXG5cclxuXHJcbiAgICBjb25zdCBjYXJkQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZEJvZHkuY2xhc3NOYW1lID0gJ2NhcmQtYm9keSc7XHJcbiAgICBjYXJkQm9keS5hcHBlbmRDaGlsZChlbGVtZW50Q29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc05hbWUgPSAnZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBwLTInO1xyXG4gICAgYnV0dG9uQ29udGFpbmVyLmlkID0gJ2J1dHRvbkNvbnRhaW5lcic7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ1dHRvbkdyb3VwLnN0eWxlLm1hcmdpbiA9ICcxMHB4JztcclxuXHJcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBlZGl0QnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLXdhcm5pbmcgYnRuLXNtIG0tMic7XHJcbiAgICBlZGl0QnV0dG9uLmlkID0gJ2VkaXRCdG5PZlRhc2snXHJcbiAgICBlZGl0QnV0dG9uLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPiBFZGl0JztcclxuXHJcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi1kYW5nZXIgYnRuLXNtJztcclxuICAgIGRlbGV0ZUJ1dHRvbi5pZCA9ICdkZWxldGVidG5PZlRhc2snXHJcbiAgICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoXCI+PC9pPiBEZWxldGUnO1xyXG5cclxuICAgXHJcbiAgICBcclxuXHJcblxyXG4gICAgYnV0dG9uQ29udGFpbmVyLnN0eWxlLnBhZGRpbmcgPSAnMTBweCc7XHJcblxyXG4gICAgY29uc3QgY2hlY2tib3hTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY2hlY2tib3hTcGFuLmNsYXNzTmFtZSA9ICdjaGVja2JveC1zcGFuJztcclxuICAgIGNoZWNrYm94U3Bhbi5zdHlsZS5tYXJnaW4gPSAnMTBweCc7XHJcbiAgICBjaGVja2JveFNwYW4uaWQgPSAnY2hlY2tCb3hTcGFuT2ZUYXNrJ1xyXG5cclxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gICAgY2hlY2tib3guY2xhc3NOYW1lID0gJ2Zvcm0tY2hlY2staW5wdXQgZm9ybS1jaGVjay1pbnB1dC1sZyc7XHJcbiAgICBjaGVja2JveC5hcmlhTGFiZWwgPSAnVGFzayBDb21wbGV0ZSc7XHJcblxyXG4gICAgY29uc3Qgc3RhdHVzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHN0YXR1c1RleHQuY2xhc3NOYW1lID0gJ3N0YXR1cy10ZXh0JztcclxuICBcclxuXHJcblxyXG4gICAgXHJcbiAgXHJcbiAgICBlbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuICAgIGVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodmlld0J1dHRvbilcclxuICAgIGVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XHJcbiAgICBlbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcclxuXHJcbiAgICAgICBcclxuICAgIGNoZWNrYm94U3Bhbi5hcHBlbmRDaGlsZChjaGVja2JveCk7XHJcbiAgICBjaGVja2JveFNwYW4uYXBwZW5kQ2hpbGQoc3RhdHVzVGV4dCk7XHJcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3hTcGFuKTtcclxuXHJcblxyXG5cclxuICAgIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xyXG4gICAgYnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuXHJcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uR3JvdXApO1xyXG5cclxuICAgIHJvdy5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XHJcbiAgICByb3cuYXBwZW5kQ2hpbGQoY2FyZEJvZHkpO1xyXG4gICAgcm93LmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XHJcblxyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChyb3cpO1xyXG5cclxuICAgIHNwYWNlLmFwcGVuZENoaWxkKGNhcmQpO1xyXG5cclxuIFxyXG5cclxuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIFRhc2sucHJvdG90eXBlLmVkaXRUYXNrKHRhc2sscHJvamVjdEFycmF5ICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBcclxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICBpZiAodGFzay5pc0NvbXBsZXRlZCkge1xyXG4gICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICBzdGF0dXNUZXh0LnRleHRDb250ZW50ID0gJ0NvbXBsZXRlZCc7XHJcbiAgICBjaGVja2JveFNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcclxuICAgIHJvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHRncmV5J1xyXG4gICAgY2hlY2tib3guc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xyXG4gICAgY2hlY2tib3hTcGFuLnN0eWxlLnBhZGRpbmcgPSAnMTVweCc7XHJcbn0gZWxzZSB7XHJcbiAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICBzdGF0dXNUZXh0LnRleHRDb250ZW50ID0gJ0luY29tcGxldGUnO1xyXG4gICAgY2hlY2tib3hTcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdsaWdodGdyZXknO1xyXG4gICAgY2hlY2tib3hTcGFuLnN0eWxlLnBhZGRpbmcgPSAnMTVweCc7XHJcbiAgICAgcm93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSdcclxufVxyXG5cclxuICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiBcclxuXHJcblxyXG4gICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcclxuICAgICAgc3RhdHVzVGV4dC50ZXh0Q29udGVudCA9ICdDb21wbGV0ZWQnO1xyXG4gICAgICBjaGVja2JveFNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJ1xyXG4gICAgICByb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2xpZ2h0Z3JleSdcclxuXHJcbiAgICAgIGNoZWNrYm94LnN0eWxlLmNvbG9yID0gJ3doaXRlJ1xyXG4gICAgICBjaGVja2JveFNwYW4uc3R5bGUucGFkZGluZyA9ICcxNXB4J1xyXG4gICAgICBUYXNrLnByb3RvdHlwZS5zdGF0dXNDaGFuZ2UodGFzaywgdHJ1ZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0YXR1c1RleHQudGV4dENvbnRlbnQgPSAnSW5jb21wbGV0ZSc7XHJcbiAgICAgIGNoZWNrYm94U3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHRncmV5J1xyXG4gICAgICBjaGVja2JveFNwYW4uc3R5bGUucGFkZGluZyA9ICcxNXB4J1xyXG4gICAgICByb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJ1xyXG5cclxuICAgICAgVGFzay5wcm90b3R5cGUuc3RhdHVzQ2hhbmdlKHRhc2ssIGZhbHNlKVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuXHJcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgVGFzay5wcm90b3R5cGUuZGVsZXRlVGFzayhwcm9qZWN0QXJyYXksIGluZGV4LCB0YXNrKTtcclxuICB9KTtcclxuXHJcblxyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcHJvamVjdC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJQcm9qZWN0TWFuYWdlciIsIm15UHJvamVjdE1hbmFnZXIiLCJhbGxQcm9qZWN0Rm9sZGVyIiwibGVuZ3RoIiwiZGlzcGxheWVyIiwidGhlTWFuYWdlciIsInRhc2tTcGFjZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhbGxUb2Rvc0l0ZW0iLCJxdWVyeVNlbGVjdG9yQWxsIiwidG9kYXlJdGVtIiwiY29tcGxldGVkSXRlbSIsInVwY29taW5nSXRlbSIsIm1pc3NlZEl0ZW0iLCJob21lUGFnZSIsInNpZGViYXJDb250YWluZXIiLCJzaWRlYmFySWNvbiIsIm1haW5TcGFjZUNvbCIsIm5hdk1lbnVSb3ciLCJmb3JFYWNoIiwibWVudSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzYXZlUHJvamVjdHMiLCJhbGxUb2RvcyIsImNvbnNvbGUiLCJsb2ciLCJ0b2RheVRvZG9zIiwiY29tcGxldGVkVGFzayIsInBlbmRpbmdUb2RvIiwibWlzc2VkVGFza3MiLCJpc0NsaWNrZWQiLCJzdHlsZSIsImRpc3BsYXkiLCJjbGFzc05hbWUiLCJwYWRkaW5nIiwibG9hZFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSIsInByb2plY3RzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInRhc2tET00iLCJuZXdUYXNrRm9ybURPTSIsInNwYWNlIiwidGl0bGUiLCJQcm9qZWN0IiwiaWQiLCJuYW1lIiwiY29sb3IiLCJfY2xhc3NDYWxsQ2hlY2siLCJwcm9qZWN0IiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJzaW1wbGVEaXNwbGF5ZXIiLCJhcnJheSIsImlubmVySFRNTCIsImRvbSIsIm5ld1Rhc2tGb3JtQnRuIiwic2VsZWN0QXJyYXkiLCJhZGRUYXNrQnRuIiwidGhlRm9ybSIsImFwcGVuZCIsImFkZFRhc2tCdXR0b24iLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJ3aWR0aCIsImRlZmF1bHQiLCJtb2RhbCIsIm1vZGFsQ29udGFpbmVyIiwibW9kYWxDb250ZW50IiwibW9kYWxIZWFkZXIiLCJtb2RhbFRpdGxlIiwiYXBwZW5kQ2hpbGQiLCJjbG9zZUJ1dHRvbiIsIm1vZGFsQm9keSIsIm5hbWVMYWJlbCIsIm5hbWVJbnB1dCIsInR5cGUiLCJjb2xvckxhYmVsIiwiY29sb3JTZWxlY3QiLCJjb2xvck9wdGlvbnMiLCJvcHRpb24iLCJvcHRpb25FbGVtZW50Iiwic2F2ZUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsInByb2plY3ROYW1lIiwicHJvamVjdENvbG9yIiwiY2xvc2VNb2RhbCIsIm9wZW5Nb2RhbCIsInNlbGVjdGVkSW5kZXgiLCJsb2FkUHJvamVjdHMiLCJ1c2VyRGF0YSIsIl90aGlzIiwibmFtZUZvcm0iLCJ1c2VyTmFtZVN0b3JhZ2UiLCJuYXZVc2VyTmFtZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJOYW1lSW5wdXQiLCJ1c2VyTmFtZSIsImFkZE5ld1Byb2plY3QiLCJlcnJvck1lc3NhZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpbm5lclRleHQiLCJ0b2RvIiwiYWxsVG9kb3NWYXIiLCJwcm90b3R5cGUiLCJjb21wbGV0ZWRUYXNrc0ZvdW5kIiwidGFzayIsImlzQ29tcGxldGVkIiwidG9kYXkiLCJEYXRlIiwicGVuZGluZ1Rhc2tzIiwiZHVlRGF0ZSIsInB1c2giLCJvcHRpb25zIiwid2Vla2RheSIsImRheSIsIm1vbnRoIiwieWVhciIsImxvY2FsRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIm5ld1Byb2plY3QiLCJkZWxldGVQcm9qZWN0IiwiaW5kZXgiLCJjb21maXJtIiwiY29uZmlybSIsInNwbGljZSIsInByb2plY3RQYWdlYW5kU2lkZUJhckRPTSIsIm5ld1Byb2plY3RCdG4iLCJuZXdQcm9qZWN0Rm9ybSIsImZvb3RlciIsImNyZWF0ZU5ld1Byb2plY3QiLCJidG4iLCJfdGhpczIiLCJzYXZlQnRuTmV3UHJvamVjdCIsImR1cGxpY2F0ZVByb2plY3QiLCJmaW5kIiwiaXRlbSIsImFsZXJ0IiwiZ2V0U2VsZWN0ZWRQcm9qZWN0QXJyYXkiLCJyZWZyZXNoZXIiLCJkaXNBcnJheSIsIl90aGlzMyIsIm5ld1Byb2plY3RVTCIsImxpc3RJdGVtIiwic2V0QXR0cmlidXRlIiwiaWNvbiIsImdldFByb2plY3RBcnJheSIsImxpc3RJdGVtVGFza1NwYWNlIiwiY2FyZEljb24iLCJjYXJkVGl0bGUiLCJkZWxldGVJY29uIiwic3RvcFByb3BhZ2F0aW9uIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJsaW5rIiwiaHJlZiIsImxpbmtUZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJyZW1haW5pbmdUZXh0IiwidGV4dEFsaWduIiwiVGFzayIsImZvcm1Db250YWluZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJmb3JtIiwidGl0bGVMYWJlbCIsImh0bWxGb3IiLCJ0aXRsZUlucHV0IiwicmVxdWlyZWQiLCJoZWlnaHQiLCJkZXNjcmlwdGlvbkxhYmVsIiwiZGVzY3JpcHRpb25JbnB1dCIsIm1heExlbmd0aCIsImR1ZURhdGVMYWJlbCIsImR1ZURhdGVJbnB1dCIsInByaW9yaXR5TGFiZWwiLCJwcmlvcml0eVNlbGVjdCIsInByaW9yaXR5T3B0aW9ucyIsIm9wdGlvblRleHQiLCJ0b0xvd2VyQ2FzZSIsInN1Ym1pdEJ1dHRvbiIsImZvcm1hdERhdGVUb0RNWSIsImRhdGUiLCJfZGF0ZSRzcGxpdCIsInNwbGl0IiwiX2RhdGUkc3BsaXQyIiwiX3NsaWNlZFRvQXJyYXkiLCJkYXRlT2JqZWN0IiwiZGF5TmFtZSIsImZvcm1hdHRlZERhdGUiLCJjb25jYXQiLCJyZW1vdmUiLCJkZXNjcmlwdGlvbiIsInByaW9yaXR5IiwibmV3VGFzayIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsImNvbXBsZXRlZEZ1bmMiLCJjaGVja2JveCIsImNoZWNrZWQiLCJzdGF0dXNDaGFuZ2UiLCJzdGF0dXMiLCJkZWxldGVUYXNrIiwicXVlcnlTZWxlY3RvciIsImVkaXRUYXNrIiwicHJvamVjdEFycmF5IiwidGl0bGVUZXh0IiwiZGVzY3JpcHRpb25UZXh0IiwiZHVlRGF0ZVRleHQiLCJwcmlvcml0eVRleHQiLCJjYXJkIiwicm93IiwicHJpb3JpdHlCYXIiLCJ0aXRsZUNvbnRhaW5lciIsImxhYmVsQ29udGFpbmVyIiwiZWxlbWVudENvbnRhaW5lciIsInZpZXdCdXR0b24iLCJ0b2dnbGUiLCJjYXJkQm9keSIsImJ1dHRvbkNvbnRhaW5lciIsImJ1dHRvbkdyb3VwIiwibWFyZ2luIiwiZWRpdEJ1dHRvbiIsImRlbGV0ZUJ1dHRvbiIsImNoZWNrYm94U3BhbiIsImFyaWFMYWJlbCIsInN0YXR1c1RleHQiXSwic291cmNlUm9vdCI6IiJ9