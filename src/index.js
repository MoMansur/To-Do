
import ProjectManager from "./projectManager.js";

// Initialize ProjectManager
const myProjectManager = new ProjectManager();
if (myProjectManager.allProjectFolder.length >= 1) {
  myProjectManager.displayer()
}

// Export function to access ProjectManager
export const theManager = () => myProjectManager;



// // Selecting elements by ID
const taskSpace = document.getElementById('taskSpace');
const allTodosItem = document.querySelectorAll('.allTodos');
const todayItem = document.querySelectorAll('.TodayTodos');
const completedItem = document.querySelectorAll('.CompletedTodo');
const upcomingItem = document.querySelectorAll('.UpcomingTodo');
const missedItem = document.querySelectorAll('.MissedTodo');
const homePage = document.querySelectorAll('.homePage');

const sidebarContainer = document.getElementById('sidebarContainer');
const sidebarIcon = document.getElementById('sidebarIcon');
const mainSpaceCol = document.getElementById('mainSpaceCol');
const navMenuRow = document.getElementById('navMenuRow');


// Event Listeners
homePage.forEach(menu => menu.addEventListener('click', () => {
  myProjectManager.homePage();
  myProjectManager.saveProjects();
}));

allTodosItem.forEach(menu => menu.addEventListener('click', () => {
  myProjectManager.allTodos();
  myProjectManager.saveProjects();
}));

todayItem.forEach(menu => menu.addEventListener('click', () => {
  console.log('Today item clicked');
  myProjectManager.todayTodos();
  myProjectManager.saveProjects();
}));

completedItem.forEach(menu => menu.addEventListener('click', () => {
  myProjectManager.completedTask();
  myProjectManager.saveProjects();
}));

upcomingItem.forEach(menu => menu.addEventListener('click', () => {
  myProjectManager.pendingTodo();
}));

missedItem.forEach(menu => menu.addEventListener('click', () => {
  // Handle click on Missed item
  myProjectManager.missedTasks()
}));

let isClicked = true
sidebarIcon.addEventListener('click', () => {
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




