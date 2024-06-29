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
var Project = /*#__PURE__*/function () {
  function Project(id, name) {
    _classCallCheck(this, Project);
    this.id = id;
    this.name = name;
    this.project = [];
  }
  return _createClass(Project, [{
    key: "pushNewTask",
    value: function pushNewTask(arr) {
      this.project.push(arr);
      return this.project;
    }
  }, {
    key: "displayTask",
    value: function displayTask() {
      console.log(this.project);
    }
  }]);
}();
var taskArray = /*#__PURE__*/_createClass(function taskArray(title, description, dueDate, priority) {
  _classCallCheck(this, taskArray);
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
});
var newProject = new Project(2, 'Test');
function newProjectFunc(arr) {
  newProject.pushNewTask(arr);
  newProject.displayTask();
}
function newTask(title, description, dueDate, priority) {
  var theNewTask = new taskArray(title, description, dueDate, priority);
  newProjectFunc(theNewTask);
}
newTask(3, 2, 3, 4);
newTask(3, 4, 3, 4);
newTask(3, 2, 3, 4);
newTask(3, 4, 3, 4);
var testBtn = document.getElementById('testBtn');
var ProjectManager = /*#__PURE__*/_createClass(function ProjectManager() {
  _classCallCheck(this, ProjectManager);
  this.list = [];
  this.allTask = [];
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSxJQUVNQSxPQUFPO0VBQ1QsU0FBQUEsUUFBWUMsRUFBRSxFQUFFQyxJQUFJLEVBQUM7SUFBQUMsZUFBQSxPQUFBSCxPQUFBO0lBQ2pCLElBQUksQ0FBQ0MsRUFBRSxHQUFHQSxFQUFFO0lBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBLElBQUk7SUFDaEIsSUFBSSxDQUFDRSxPQUFPLEdBQUcsRUFBRTtFQUVyQjtFQUFDLE9BQUFDLFlBQUEsQ0FBQUwsT0FBQTtJQUFBTSxHQUFBO0lBQUFDLEtBQUEsRUFDRCxTQUFBQyxZQUFZQyxHQUFHLEVBQUM7TUFDWixJQUFJLENBQUNMLE9BQU8sQ0FBQ00sSUFBSSxDQUFDRCxHQUFHLENBQUM7TUFDdkIsT0FBTyxJQUFJLENBQUNMLE9BQU87SUFDdEI7RUFBQztJQUFBRSxHQUFBO0lBQUFDLEtBQUEsRUFDRCxTQUFBSSxZQUFBLEVBQWE7TUFDVEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDVCxPQUFPLENBQUM7SUFDN0I7RUFBQztBQUFBO0FBQUEsSUFHQ1UsU0FBUyxnQkFBQVQsWUFBQSxDQUNYLFNBQUFTLFVBQWFDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBQztFQUFBZixlQUFBLE9BQUFXLFNBQUE7RUFDL0MsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7RUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBLFdBQVc7RUFDOUIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBLE9BQU87RUFDdEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVE7QUFDNUIsQ0FBQztBQUdMLElBQU1DLFVBQVUsR0FBRyxJQUFJbkIsT0FBTyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7QUFHekMsU0FBU29CLGNBQWNBLENBQUNYLEdBQUcsRUFBQztFQUN4QlUsVUFBVSxDQUFDWCxXQUFXLENBQUNDLEdBQUcsQ0FBQztFQUMzQlUsVUFBVSxDQUFDUixXQUFXLENBQUMsQ0FBQztBQUM1QjtBQUVBLFNBQVNVLE9BQU9BLENBQUNOLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtFQUNwRCxJQUFNSSxVQUFVLEdBQUcsSUFBSVIsU0FBUyxDQUFDQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxRQUFRLENBQUM7RUFFdkVFLGNBQWMsQ0FBQ0UsVUFBVSxDQUFDO0FBQzlCO0FBRUNELE9BQU8sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFDaEJBLE9BQU8sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFDaEJBLE9BQU8sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFDaEJBLE9BQU8sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFFakIsSUFBTUUsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxTQUFTLENBQUM7QUFBQSxJQUU1Q0MsY0FBYyxnQkFBQXJCLFlBQUEsQ0FDaEIsU0FBQXFCLGVBQUEsRUFBYTtFQUFBdkIsZUFBQSxPQUFBdUIsY0FBQTtFQUNULElBQUksQ0FBQ0MsSUFBSSxHQUFHLEVBQUU7RUFDZCxJQUFJLENBQUNDLE9BQU8sR0FBRyxFQUFFO0FBQ3JCLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xyXG5cclxuY2xhc3MgUHJvamVjdHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCBuYW1lKXtcclxuICAgICAgICB0aGlzLmlkID0gaWRcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXHJcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gW11cclxuICAgICAgICBcclxuICAgIH0gIFxyXG4gICAgcHVzaE5ld1Rhc2soYXJyKXtcclxuICAgICAgICB0aGlzLnByb2plY3QucHVzaChhcnIpXHJcbiAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5VGFzaygpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvamVjdClcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgdGFza0FycmF5e1xyXG4gICAgY29uc3RydWN0b3IgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpe1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoMiwgJ1Rlc3QnKVxyXG5cclxuXHJcbmZ1bmN0aW9uIG5ld1Byb2plY3RGdW5jKGFycil7XHJcbiAgICBuZXdQcm9qZWN0LnB1c2hOZXdUYXNrKGFycilcclxuICAgIG5ld1Byb2plY3QuZGlzcGxheVRhc2soKVxyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgIGNvbnN0IHRoZU5ld1Rhc2sgPSBuZXcgdGFza0FycmF5KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xyXG4gIFxyXG4gICAgbmV3UHJvamVjdEZ1bmModGhlTmV3VGFzaylcclxufVxyXG5cclxuIG5ld1Rhc2soMywyLDMsNClcclxuIG5ld1Rhc2soMyw0LDMsNClcclxuIG5ld1Rhc2soMywyLDMsNClcclxuIG5ld1Rhc2soMyw0LDMsNClcclxuIFxyXG5jb25zdCB0ZXN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlc3RCdG4nKVxyXG5cclxuY2xhc3MgUHJvamVjdE1hbmFnZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMubGlzdCA9IFtdXHJcbiAgICAgICAgdGhpcy5hbGxUYXNrID0gW11cclxuICAgIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIlByb2plY3QiLCJpZCIsIm5hbWUiLCJfY2xhc3NDYWxsQ2hlY2siLCJwcm9qZWN0IiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJwdXNoTmV3VGFzayIsImFyciIsInB1c2giLCJkaXNwbGF5VGFzayIsImNvbnNvbGUiLCJsb2ciLCJ0YXNrQXJyYXkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwibmV3UHJvamVjdCIsIm5ld1Byb2plY3RGdW5jIiwibmV3VGFzayIsInRoZU5ld1Rhc2siLCJ0ZXN0QnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlByb2plY3RNYW5hZ2VyIiwibGlzdCIsImFsbFRhc2siXSwic291cmNlUm9vdCI6IiJ9