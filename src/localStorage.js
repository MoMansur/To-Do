export function loadProjectsFromLocalStorage() {
    const data = localStorage.getItem('arr');
    return data ? JSON.parse(data) : [];
  }
  
  export function saveProjectsToLocalStorage(projects) {
    localStorage.setItem('arr', JSON.stringify(projects));
  }
  