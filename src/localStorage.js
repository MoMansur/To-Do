export const loadProjectsFromLocalStorage = () => {
    const projects = localStorage.getItem('arr');
    return projects ? JSON.parse(projects) : [];
};
  
export const saveProjectsToLocalStorage = (projects) => {
    localStorage.setItem('arr', JSON.stringify(projects));
};
  