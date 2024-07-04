import Task from "./todo.js";

export default function taskDOM(projectArray) {
  const space = document.getElementById('space');

  projectArray.forEach((task, index) => {
    const titleText = task.title;
    const descriptionText = task.description;
    const dueDateText = task.dueDate;
    const priorityText = task.priority;
    const isCompleted = task.isCompleted;

    const card = document.createElement('div');
    card.className = 'card task-card mb-3';
    card.setAttribute('data-index', index);

    const row = document.createElement('div');
    row.className = 'row no-gutters';

    const priorityBar = document.createElement('div');
    priorityBar.className = 'priority-bar';
    switch (priorityText.toLowerCase()) {
      case 'low':
        priorityBar.style.backgroundColor = '#28a745';
        break;
      case 'medium':
        priorityBar.style.backgroundColor = '#ffc107';
        break;
      case 'high':
        priorityBar.style.backgroundColor = '#dc3545';
        break;
      default:
        priorityBar.style.backgroundColor = '#6c757d';
        break;
    }

    const titleContainer = document.createElement('div');
    titleContainer.className = 'col-md-2 w-100 d-flex align-items-center justify-content-center text-white position-relative';
    titleContainer.id = 'titleContainer';
    const title = document.createElement('h2');
    title.className = 'card-title';
    title.textContent = titleText;
    titleContainer.style.backgroundColor = priorityBar.style.backgroundColor;

    titleContainer.appendChild(priorityBar);
    titleContainer.appendChild(title);

    const labelContainer = document.createElement('div');
    labelContainer.className = 'label-container d-flex justify-content-between';

    const descriptionLabel = document.createElement('span');
    descriptionLabel.className = 'label';
    descriptionLabel.textContent = 'Description';

    const dueDateLabel = document.createElement('span');
    dueDateLabel.className = 'label';
    dueDateLabel.textContent = 'Due Date';

    const priorityLabel = document.createElement('span');
    priorityLabel.className = 'label';
    priorityLabel.textContent = 'Priority';

    labelContainer.appendChild(descriptionLabel);
    labelContainer.appendChild(dueDateLabel);
    labelContainer.appendChild(priorityLabel);

    titleContainer.appendChild(labelContainer);

    const elementContainer = document.createElement('div');
    elementContainer.className = 'element-container d-flex align-items-center';
    elementContainer.id = 'elementContainer';

   


    const description = document.createElement('span');
    description.className = 'col-8 card-text description';
    description.textContent = descriptionText;
    description.id = 'carddescription';

    const priority = document.createElement('p');
    priority.className = 'card-text priority';
    priority.innerHTML = `<small class="text-muted"><i class="fas fa-flag"></i> ${priorityText}</small>`;

    const dueDate = document.createElement('p');
    dueDate.className = 'card-text';
    dueDate.innerHTML = `<small class="text-muted">
    <i class="fas fa-calendar-day"></i> ${dueDateText}</small>`;
    dueDate.setAttribute('required', true)


  
    elementContainer.appendChild(description);
    elementContainer.appendChild(dueDate);
    elementContainer.appendChild(priority);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    cardBody.appendChild(elementContainer);

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'd-flex align-items-center p-2';
    buttonContainer.id = 'buttonContainer';

    const buttonGroup = document.createElement('div');
    buttonGroup.style.margin = '10px';

    const editButton = document.createElement('button');
    editButton.className = 'btn btn-warning btn-sm m-2';
    editButton.innerHTML = '<i class="fas fa-edit"></i> Edit';

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.innerHTML = '<i class="fas fa-trash"></i> Delete';

   
    


    buttonContainer.style.padding = '10px';

    const checkboxSpan = document.createElement('span');
    checkboxSpan.className = 'checkbox-span';
    checkboxSpan.style.margin = '10px';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'form-check-input form-check-input-lg';
    checkbox.ariaLabel = 'Task Complete';

    const statusText = document.createElement('span');
    statusText.className = 'status-text';
  

    if(isCompleted){
      checkbox.checked = true
      statusText.textContent = 'Completed';
      checkboxSpan.style.backgroundColor = 'green'
      checkbox.style.color = 'white'
      checkboxSpan.style.padding = '15px'
    }else{
        checkbox.checked = false
      statusText.textContent = 'Incomplete';
      checkboxSpan.style.backgroundColor = 'lightgrey'
      checkboxSpan.style.padding = '15px'
    }

       
    checkboxSpan.appendChild(checkbox);
    checkboxSpan.appendChild(statusText);
    buttonContainer.appendChild(checkboxSpan);



    buttonGroup.appendChild(editButton);
    buttonGroup.appendChild(deleteButton);

    buttonContainer.appendChild(buttonGroup);

    row.appendChild(titleContainer);
    row.appendChild(cardBody);
    row.appendChild(buttonContainer);

    card.appendChild(row);

    space.appendChild(card);

 

    editButton.addEventListener('click', () => {
      Task.prototype.editTask(task, index, 0, card);
    });

    
  ///////////////////////
  checkbox.addEventListener('change', () => {
 
    if (checkbox.checked) {
      statusText.textContent = 'Completed';
      checkboxSpan.style.backgroundColor = 'green'
      checkbox.style.color = 'white'
      checkboxSpan.style.padding = '15px'
      Task.prototype.statusChange(task, true)
    } else {
      statusText.textContent = 'Incomplete';
      checkboxSpan.style.backgroundColor = 'lightgrey'
      checkboxSpan.style.padding = '15px'
      Task.prototype.statusChange(task, false)
    }
  });


  deleteButton.addEventListener('click', () => {
    const projectId = task.id;
    const taskId = parseInt(card.getAttribute('data-index'));
    console.log(projectArray)
    console.log(task)
    Task.prototype.deleteTask(projectArray, index);
  });


  });
}



