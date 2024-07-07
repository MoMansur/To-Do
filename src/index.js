const taskSpace = document.getElementById('taskSpace')

import todoFunctions from "./functions.js";


import ProjectManager from "./projectManager.js";


const myProjectManager = new ProjectManager();

// myProjectManager.homePage()
// myProjectManager.displayer()
myProjectManager.allTodos()

export const theManager = ()=> myProjectManager

// Selecting elements by ID
const addTaskButton = document.querySelectorAll('.addtasksidebar');
const allTodosItem = document.querySelectorAll('.allTodos');
const todayItem = document.querySelectorAll('.TodayTodos');
const completedItem = document.querySelectorAll('.CompletedTodo');
const upcomingItem = document.querySelectorAll('.UpcomingTodo');
const missedItem = document.querySelectorAll('.MissedTodo');
const homePage =  document.querySelectorAll('.homePage')

homePage.forEach(menu =>
  menu.addEventListener('click', ()=>{
  myProjectManager.homePage()
  myProjectManager.saveProjects()
})
)

allTodosItem.forEach(menu =>
  menu.addEventListener('click', () => {
    // Handle click on All Todos item
    myProjectManager.allTodos();
    myProjectManager.saveProjects()
  })
)
todayItem.forEach(menu =>
  menu.addEventListener('click', () => {
  // Handle click on Today item
  console.log('Today item clicked');
  myProjectManager.todayTodos()
  myProjectManager.saveProjects()

})
)

completedItem.forEach(menu =>
  menu.addEventListener('click', () => {
  // Handle click on Completed item
  myProjectManager.completedTask();
  myProjectManager.saveProjects()

})
)

upcomingItem.forEach(menu =>
  menu.addEventListener('click', () => {
  // Handle click on Upcoming item
  myProjectManager.pendingTodo()
})
)

missedItem.forEach(menu =>
  menu.addEventListener('click', () => {
  // Handle click on Missed item
})
)






const sidebarContainer =  document.getElementById('sidebarContainer')

const sidebarIcon = document.getElementById('sidebarIcon')

const mainSpaceCol = document.getElementById('mainSpaceCol')

const navMenuRow = document.getElementById('navMenuRow')
const theNavListUl = document.getElementById('theNavListUl')

let isClicked = true

sidebarIcon.addEventListener('click', ()=>{
  if(isClicked){
    sidebarContainer.style.display = 'none'
    mainSpaceCol.className = 'col-12'
    navMenuRow.style.display = 'block'
    taskSpace.style.padding ='10px'
    
  }else{
    sidebarContainer.style.display = 'block'
    mainSpaceCol.className = 'col-10'
    navMenuRow.style.display = 'none'

  }
  isClicked = !isClicked
})


todoFunctions(taskSpace)



