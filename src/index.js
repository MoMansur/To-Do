const taskSpace = document.getElementById('taskSpace')

import modal from "./projectDom.js";
import todoFunctions from "./functions.js";


import ProjectManager from "./projectManager.js";


const myProjectManager = new ProjectManager();


myProjectManager.displayer()


// Selecting elements
const addTaskButton = document.getElementById('addtasksidebar');
const allTodosItem = document.querySelector('#defaultItemsBox #search');
const todayItem = document.querySelector('#defaultItemsBox .list-group-item:nth-child(2)');
const completedItem = document.querySelector('#defaultItemsBox .list-group-item:nth-child(3)');
const upcomingItem = document.querySelector('#defaultItemsBox .list-group-item:nth-child(4)');
const missedItem = document.querySelector('#defaultItemsBox .list-group-item:nth-child(5)');

// Usage example: Adding event listeners
addTaskButton.addEventListener('click', () => {
  
});

allTodosItem.addEventListener('click', ()=>{
    myProjectManager.allTodos()
})

todayItem.addEventListener('click', () => {
  // Handle click on today item
});

completedItem.addEventListener('click', () => {
  // Handle click on completed item
});

upcomingItem.addEventListener('click', () => {
  // Handle click on upcoming item
});

missedItem.addEventListener('click', () => {
  // Handle click on missed item
});








todoFunctions(taskSpace)


const createNewProject = document.getElementById('createNewProject')
createNewProject.addEventListener('click', ()=>{
    modal.openModal()
})

