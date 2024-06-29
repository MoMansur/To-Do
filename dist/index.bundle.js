/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// import { v4 as uuidv4 } from 'uuid';
var container = document.getElementById('container');
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
    key: "displayTask",
    value: function displayTask() {
      console.log(this.project);
      return this.project;
    }
  }]);
}();
var ProjectManager = /*#__PURE__*/function () {
  function ProjectManager() {
    _classCallCheck(this, ProjectManager);
    this.allProjectsArr = [];
    this.newProject = new Project();
    this.defaultProject = new Project(1, 'Default');
    this.allTask = [];
  }
  return _createClass(ProjectManager, [{
    key: "newProjectFunc",
    value: function newProjectFunc(id, name) {
      this.newProject = new Project(id, name);
      return this.newProject;
    }
  }, {
    key: "allProjects",
    value: function allProjects() {
      this.allProjectsArr.push(this.newProject);
      console.log(this.allProjectsArr);
    }
  }]);
}();
var newProjectManager = new ProjectManager();
var taskArray = /*#__PURE__*/_createClass(function taskArray(title, description, dueDate, priority) {
  _classCallCheck(this, taskArray);
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
});
var newProject = newProjectManager.defaultProject;
console.log(newProject);
function newTask(title, description, dueDate, priority) {
  var theNewTask = new taskArray(title, description, dueDate, priority);
  newProject.addTasks(theNewTask);
  newProject.displayTask();
}
newTask(3, 2, 3, 4);
newTask(3, 4, 3, 4);
newTask(3, 2, 3, 4);
newTask(3, 4, 3, 4);
var testBtn = document.getElementById('testBtn');
newProjectManager.allProjects();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDNUI7QUFFQ2dCLE9BQU8sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFDaEJBLE9BQU8sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFDaEJBLE9BQU8sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFDaEJBLE9BQU8sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFHakIsSUFBTUUsT0FBTyxHQUFHL0IsUUFBUSxDQUFDQyxjQUFjLENBQUMsU0FBUyxDQUFDO0FBSWxEc0IsaUJBQWlCLENBQUNELFdBQVcsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpXHJcblxyXG5jbGFzcyBQcm9qZWN0e1xyXG4gICAgY29uc3RydWN0b3IoaWQsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZFxyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcclxuICAgICAgICB0aGlzLnByb2plY3QgPSBbXSAgIFxyXG4gICAgfSAgXHJcbiAgICBhZGRUYXNrcyhhcnIpe1xyXG4gICAgICAgIHRoaXMucHJvamVjdC5wdXNoKGFycilcclxuICAgICAgIHJldHVybiB0aGlzLnByb2plY3RcclxuICAgIH1cclxuICAgIGRpc3BsYXlUYXNrKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9qZWN0KVxyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RcclxuICAgIH1cclxufVxyXG5jbGFzcyBQcm9qZWN0TWFuYWdlcntcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5hbGxQcm9qZWN0c0FyciA9IFtdXHJcbiAgICAgICAgdGhpcy5uZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoKVxyXG4gICAgICAgIHRoaXMuZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdCgxLCAnRGVmYXVsdCcpXHJcbiAgICAgICAgdGhpcy5hbGxUYXNrID0gW11cclxuICAgIH1cclxuICAgIG5ld1Byb2plY3RGdW5jKGlkLCBuYW1lKXtcclxuICAgICAgICB0aGlzLm5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChpZCwgbmFtZSlcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXdQcm9qZWN0XHJcbiAgICB9XHJcbiAgICBhbGxQcm9qZWN0cygpe1xyXG4gICAgICAgIHRoaXMuYWxsUHJvamVjdHNBcnIucHVzaCh0aGlzLm5ld1Byb2plY3QpXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hbGxQcm9qZWN0c0FycilcclxuICAgIH1cclxufVxyXG5jb25zdCBuZXdQcm9qZWN0TWFuYWdlciA9IG5ldyBQcm9qZWN0TWFuYWdlcigpXHJcblxyXG5cclxuY2xhc3MgdGFza0FycmF5e1xyXG4gICAgY29uc3RydWN0b3IgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpe1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgbmV3UHJvamVjdCA9IG5ld1Byb2plY3RNYW5hZ2VyLmRlZmF1bHRQcm9qZWN0XHJcblxyXG5jb25zb2xlLmxvZyhuZXdQcm9qZWN0KVxyXG5cclxuZnVuY3Rpb24gbmV3VGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgICBjb25zdCB0aGVOZXdUYXNrID0gbmV3IHRhc2tBcnJheSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcclxuICAgIFxyXG4gICAgbmV3UHJvamVjdC5hZGRUYXNrcyh0aGVOZXdUYXNrKVxyXG4gICAgbmV3UHJvamVjdC5kaXNwbGF5VGFzaygpXHJcbn1cclxuXHJcbiBuZXdUYXNrKDMsMiwzLDQpXHJcbiBuZXdUYXNrKDMsNCwzLDQpXHJcbiBuZXdUYXNrKDMsMiwzLDQpXHJcbiBuZXdUYXNrKDMsNCwzLDQpXHJcblxyXG4gXHJcbmNvbnN0IHRlc3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdEJ0bicpXHJcblxyXG5cclxuXHJcbm5ld1Byb2plY3RNYW5hZ2VyLmFsbFByb2plY3RzKCkiXSwibmFtZXMiOlsiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlByb2plY3QiLCJpZCIsIm5hbWUiLCJfY2xhc3NDYWxsQ2hlY2siLCJwcm9qZWN0IiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJhZGRUYXNrcyIsImFyciIsInB1c2giLCJkaXNwbGF5VGFzayIsImNvbnNvbGUiLCJsb2ciLCJQcm9qZWN0TWFuYWdlciIsImFsbFByb2plY3RzQXJyIiwibmV3UHJvamVjdCIsImRlZmF1bHRQcm9qZWN0IiwiYWxsVGFzayIsIm5ld1Byb2plY3RGdW5jIiwiYWxsUHJvamVjdHMiLCJuZXdQcm9qZWN0TWFuYWdlciIsInRhc2tBcnJheSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJuZXdUYXNrIiwidGhlTmV3VGFzayIsInRlc3RCdG4iXSwic291cmNlUm9vdCI6IiJ9