const taskSpace = document.getElementById('taskSpace')

import todoFunctions from "./functions.js";


import ProjectManager from "./projectManager.js";


const myProjectManager = new ProjectManager();


myProjectManager.displayer()


// Selecting elements by ID
const addTaskButton = document.getElementById('addtasksidebar');
const allTodosItem = document.getElementById('allTodos');
const todayItem = document.getElementById('TodayTodos');
const completedItem = document.getElementById('CompletedTodo');
const upcomingItem = document.getElementById('UpcomingTodo');
const missedItem = document.getElementById('MissedTodo');

// Usage example: Adding event listeners
addTaskButton.addEventListener('click', () => {
  // Handle click on Add Task button
});

allTodosItem.addEventListener('click', () => {
  // Handle click on All Todos item
  myProjectManager.allTodos();
  myProjectManager.saveProjects()
});

todayItem.addEventListener('click', () => {
  // Handle click on Today item
  console.log('Today item clicked');
  myProjectManager.todayTodos()
  myProjectManager.saveProjects()

});

completedItem.addEventListener('click', () => {
  // Handle click on Completed item
  myProjectManager.completedTask();
  myProjectManager.saveProjects()

});

upcomingItem.addEventListener('click', () => {
  // Handle click on Upcoming item
  myProjectManager.pendingTodo()
});

missedItem.addEventListener('click', () => {
  // Handle click on Missed item
});









todoFunctions(taskSpace)



