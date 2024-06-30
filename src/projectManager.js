const taskSpace = document.getElementById('taskSpace')

import Project from "./project.js"

export default class ProjectManager{
  constructor(){
    this.defaultProject = new Project(1, 'Default')
    this.newProject = new Project()
    this.allProjectFolder =[]
    this.allTask = []
    this.newProjectFunc(1, 'Default');
  }
    newProjectFunc(id, name) {
      this.newProject = new Project(id, name);
      this.allProjectFolder.push(this.newProject);
      return this.newProject;
    }

    displayer(index){ 
      const newProjectUL = document.getElementById('newProjectUL')
      newProjectUL.innerHTML = ""

        this.allProjectFolder.forEach(project => {
            taskSpace.innerHTML = ""            
          
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.id = 'projectFolder'
            listItem.setAttribute('data-index', index)
            const icon = document.createElement('i');
            icon.className = 'fa-solid fa-hashtag';
            listItem.append(icon);
            listItem.append(project.name);

         
          
            listItem.addEventListener('click', ()=>{
              console.log('clciked', project.name )
              let get  = project.project
              Project.prototype.displayer(get)
                
            })
            newProjectUL.append(listItem)
         

           
        });
        console.log(this.allProjectFolder)
    }
  
}
