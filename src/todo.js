import ProjectManager from "./projectManager.js";
import newTaskFormDOM from "./taskForm.js";


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
  }
  
  deleteTask(project, index) {
    const comfirm = confirm('Are you sure you want to delete this Task?')
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
  

    if(comfirm){
      project.splice(index, 1);
      localStorage.setItem('projects', JSON.stringify(projects));
      document.querySelector(`.card.task-card[data-index="${index}"]`).remove();
      
    }else{

    }
 
  }
  
  editTask(task, projectId, taskId, card) {
    const formContainer = newTaskFormDOM([]);
    document.body.appendChild(formContainer);
  
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
      task.dueDate = dueDateInput.value;
      task.priority = prioritySelect.value;
  
      const projects = JSON.parse(localStorage.getItem('projects')) || [];
      const project = projects.find(proj => proj.id === projectId);
      if (project) {
        const taskToUpdate = project.tasks[taskId];
        if (taskToUpdate) {
          taskToUpdate.title = task.title;
          taskToUpdate.description = task.description;
          taskToUpdate.dueDate = formatDateToDMY(task.dueDate);
          taskToUpdate.priority = task.priority;
          localStorage.setItem('projects', JSON.stringify(projects));
  
          card.querySelector('.card-title').textContent = task.title;
          card.querySelector('.description').textContent = task.description;
          card.querySelector('.fa-calendar-day').parentElement.innerHTML = `<small class="text-muted"><i class="fas fa-calendar-day"></i> ${task.dueDate}</small>`;
          card.querySelector('.fa-flag').parentElement.innerHTML = `<small class="text-muted"><i class="fas fa-flag"></i> ${task.priority}</small>`;
        }
      }    
      formContainer.style.display = 'none';
    });
    formContainer.style.display = 'block';
  }
  
}



