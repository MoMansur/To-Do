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
}

