function formatDateToDMY(date) {
  const [year, month, day] = date.split('-'); // Assuming the date is initially in 'year-month-day' format
  return `${day}/${month}/${year}`;
}




export default class Task {
  constructor(title, description, dueDate, priority, isCompleted = false) {
    this.title = title;
    this.description = description;
    this.dueDate = formatDateToDMY(dueDate);
    this.priority = priority;
    this.isCompleted = isCompleted;
  }

  completedFunc(checkbox) {
    this.isCompleted = checkbox.checked;
    console.log(this.isCompleted)
    return this.isCompleted;
  }

  toggleCompletion(isCompleted, projectId, taskId) {
    this.completed = isCompleted;
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    const project = projects.find(proj => proj.id === projectId);
    if (project) {
      const task = project.tasks[taskId];
      if (task) {
        task.completed = this.completed;
        localStorage.setItem('projects', JSON.stringify(projects));
      }
    }
  }
  
}



