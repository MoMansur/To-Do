export function loadProjectsFromLocalStorage() {
    const data = localStorage.getItem('Allproject');
    return data ? JSON.parse(data) : [];
  }
  
  export function saveProjectsToLocalStorage(projects) {
    localStorage.setItem('Allproject', JSON.stringify(projects));
  }
  