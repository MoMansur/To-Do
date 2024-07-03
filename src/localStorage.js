export function loadProjectsFromLocalStorage() {
  const projects = localStorage.getItem('projects');
  return projects ? JSON.parse(projects) : [];
}

export function saveProjectsToLocalStorage(allProjectFolder) {
  localStorage.setItem('projects', JSON.stringify(allProjectFolder));
}
