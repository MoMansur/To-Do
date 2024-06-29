

export function deleteFunction(theCard) {
    const indexAttribute = parseInt(theCard.getAttribute("data-index"));
    const confirmToRemove = confirm('Are you sure you want to remove this task?');
  
    if (confirmToRemove) {
      newProject.project.splice(indexAttribute, 1);
      displayer(newProject);
      console.log(newProject);
    } else {
      displayer(newProject);
      console.log(newProject);
    }
  }