export function loadProjectsFromLocalStorage() {
  const projects = localStorage.getItem('allProjects');
  return projects ? JSON.parse(projects) : [];
}

export function saveProjectsToLocalStorage(projects) {
  localStorage.setItem('allProjects', JSON.stringify(projects));
}

export function loadTasksFromLocalStorage(projectName) {
  const tasks = localStorage.getItem(`${projectName}_Folder`);
  return tasks ? JSON.parse(tasks) : [];
}

export function saveTasksToLocalStorage(projectName, tasks) {
  localStorage.setItem(`${projectName}_Folder`, JSON.stringify(tasks));
}
