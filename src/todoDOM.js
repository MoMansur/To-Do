// import { deleteFunction } from "./todo.js";


export default function taskDOM(titleText, descriptionText,  dueDateText,priorityText, index) {
  // Create task card elements
  const space = document.getElementById('space');

  
  const card = document.createElement('div');
  card.className = 'card task-card mb-3';
  card.setAttribute('data-index', index)

  const row = document.createElement('div');
  row.className = 'row no-gutters';

    // Priority color indicator bar
    const priorityBar = document.createElement('div');
    priorityBar.className = 'priority-bar';
    switch (priorityText.toLowerCase()) {
      case 'low':
        priorityBar.style.backgroundColor = '#28a745'; // Green for low priority
        break;
      case 'medium':
        priorityBar.style.backgroundColor = '#ffc107'; // Yellow for medium priority
        break;
      case 'high':
        priorityBar.style.backgroundColor = '#dc3545'; // Red for high priority
        break;
      default:
        priorityBar.style.backgroundColor = '#6c757d'; // Gray for unknown priority
        break;
    }


  const titleContainer = document.createElement('div');
  titleContainer.className = 'col-md-2 w-100 d-flex align-items-center justify-content-center  text-white position-relative';

  const title = document.createElement('h2');
  title.className = 'card-title';
  title.textContent = titleText;


  titleContainer.style.backgroundColor = priorityBar.style.backgroundColor;


  titleContainer.appendChild(priorityBar);
  titleContainer.append(title)

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'big-checkbox';
  checkbox.ariaLabel = 'Task Complete';

  const colBody = document.createElement('div');
  colBody.className = 'col-md-10';

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';


  const description = document.createElement('p');
  description.className = 'card-text description';
  description.textContent = descriptionText;

  const priority = document.createElement('p');
  priority.className = 'card-text priority';
  priority.innerHTML = `<small class="text-muted"><i class="fas fa-flag"></i> Priority: ${priorityText}</small>`;

  const dueDate = document.createElement('p');
  dueDate.className = 'card-text';
  dueDate.innerHTML = `<small class="text-muted"><i class="fas fa-calendar-day"></i> Due Date: <span id="dueDate">${dueDateText}</span></small>`;

  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'd-flex justify-content-between align-items-center';

  const buttonGroup = document.createElement('div');

  const editButton = document.createElement('button');
  editButton.className = 'btn btn-warning btn-sm m-2';
  editButton.innerHTML = '<i class="fas fa-edit"></i> Edit';

  const deleteButton = document.createElement('button');
  deleteButton.className = 'btn btn-danger btn-sm';
  deleteButton.innerHTML = '<i class="fas fa-trash"></i> Delete';

  const checkboxContainer = document.createElement('div');
  checkboxContainer.className = 'form-check';
  checkboxContainer.id = 'divForCheckBox';
  checkboxContainer.style.backgroundColor = 'green'

  const taskCompletedCheckbox = document.createElement('input');
  taskCompletedCheckbox.className = 'form-check-input';
  taskCompletedCheckbox.type = 'checkbox';
  taskCompletedCheckbox.id = 'taskCompleted';

  const taskCompletedLabel = document.createElement('label');
  taskCompletedLabel.className = 'form-check-label';
  taskCompletedLabel.htmlFor = 'taskCompleted';
  taskCompletedLabel.textContent = 'Completed';

  // Append elements
  buttonContainer.appendChild(buttonGroup);
  buttonContainer.appendChild(checkboxContainer);

  buttonGroup.appendChild(editButton);
  buttonGroup.appendChild(deleteButton);

  checkboxContainer.appendChild(taskCompletedCheckbox);
  checkboxContainer.appendChild(taskCompletedLabel);

 

  cardBody.appendChild(description);
  cardBody.appendChild(priority);
  cardBody.appendChild(dueDate);
  cardBody.appendChild(buttonContainer);

  colBody.appendChild(cardBody);

  row.appendChild(titleContainer);
  row.appendChild(colBody);

  card.appendChild(row);

  // Append card to container
  space.appendChild(card);

  deleteButton.addEventListener('click', ()=>{
    deleteFunction(card)
  })
}
