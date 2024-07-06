import ProjectManager from "./projectManager.js";
import newTaskFormDOM from "./taskForm.js";

import { theManager } from "./index.js";
const space = document.getElementById('space')

export default class Task {
  constructor(title, description, dueDate, priority, isCompleted = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isCompleted = isCompleted;
  }

  completedFunc(checkbox) {
    this.isCompleted = checkbox.checked;
    console.log(this.isCompleted)
    return this.isCompleted;
  }

  statusChange(task, status){
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    task.isCompleted = status
    localStorage.setItem('projects', JSON.stringify(projects));
    theManager().saveProjects()
  }
  
  deleteTask(project, index) {
    const comfirm = confirm('Are you sure you want to delete this Task?')
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
      
    if(comfirm){
      project.splice(index, 1);
      localStorage.setItem('projects', JSON.stringify(projects));
      document.querySelector(`.card.task-card[data-index="${index}"]`).remove();
    }
  }


  editTask(task, index, card) {
    const formContainer = newTaskFormDOM([]);
    space.appendChild(formContainer);
  
    const form = formContainer.querySelector('form');
    const titleInput = form.querySelector('#projectTitle');
    const descriptionInput = form.querySelector('#projectDescription');
    const dueDateInput = form.querySelector('#projectDueDate');
    const prioritySelect = form.querySelector('#projectPriority');
  
    titleInput.value = task.title;
    descriptionInput.value = task.description;
    dueDateInput.value = task.dueDate;
    prioritySelect.value = task.priority;
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      task.title = titleInput.value;
      task.description = descriptionInput.value;
      task.dueDate = this.formatDateToDMY(dueDateInput.value);
      task.priority = prioritySelect.value;
  
      const projects = JSON.parse(localStorage.getItem('projects')) || [];
    
      localStorage.setItem('projects', JSON.stringify(projects));

      theManager().saveProjects()

      // theManager().refresher(task)
      formContainer.style.display = 'none';
    });
    formContainer.style.display = 'block';
  }

  formatDateToDMY(date) {
    const [year, month, day] = date.split('-'); // Assuming the date is initially in 'year-month-day' format
    const dateObject = new Date(year, month - 1, day); // Create a Date object
    
    const dayName = dateObject.toLocaleDateString('en-US', { weekday: 'long' }); // Get the day name
    const formattedDate = `${day}/${month}/${year}`;
    
    return `${dayName}, ${formattedDate}`;
  }
  
  
}



