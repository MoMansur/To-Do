import { deleteFunction } from "./todo.js";

const taskSpace = document.getElementById('taskSpace');

export default function taskDOM(titleText, descriptionText, priorityText, dueDateText, index) {
  // Create task card elements
  const card = document.createElement('div');
  card.className = 'card task-card';
  card.setAttribute('data-index', index)

  const row = document.createElement('div');
  row.className = 'row no-gutters';

  const colIcon = document.createElement('div');
  colIcon.className = 'col-md-2 d-flex align-items-center justify-content-center bg-primary text-white position-relative';

  const icon = document.createElement('i');
  icon.className = 'fas fa-tasks fa-2x';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'big-checkbox';
  checkbox.ariaLabel = 'Task Complete';

  const colBody = document.createElement('div');
  colBody.className = 'col-md-10';

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  const title = document.createElement('h5');
  title.className = 'card-title';
  title.textContent = titleText;

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
  editButton.className = 'btn btn-warning btn-sm';
  editButton.innerHTML = '<i class="fas fa-edit"></i> Edit';

  const deleteButton = document.createElement('button');
  deleteButton.className = 'btn btn-danger btn-sm';
  deleteButton.innerHTML = '<i class="fas fa-trash"></i> Delete';

  const checkboxContainer = document.createElement('div');
  checkboxContainer.className = 'form-check';
  checkboxContainer.id = 'divForCheckBox';

  const taskCompletedCheckbox = document.createElement('input');
  taskCompletedCheckbox.className = 'form-check-input';
  taskCompletedCheckbox.type = 'checkbox';
  taskCompletedCheckbox.id = 'taskCompleted';

  const taskCompletedLabel = document.createElement('label');
  taskCompletedLabel.className = 'form-check-label';
  taskCompletedLabel.htmlFor = 'taskCompleted';
  taskCompletedLabel.textContent = 'Completed';

  // Append elements
  colIcon.appendChild(icon);
  colIcon.appendChild(checkbox);

  buttonGroup.appendChild(editButton);
  buttonGroup.appendChild(deleteButton);

  checkboxContainer.appendChild(taskCompletedCheckbox);
  checkboxContainer.appendChild(taskCompletedLabel);

  buttonContainer.appendChild(buttonGroup);
  buttonContainer.appendChild(checkboxContainer);

  cardBody.appendChild(title);
  cardBody.appendChild(description);
  cardBody.appendChild(priority);
  cardBody.appendChild(dueDate);
  cardBody.appendChild(buttonContainer);

  colBody.appendChild(cardBody);

  row.appendChild(colIcon);
  row.appendChild(colBody);

  card.appendChild(row);

  // Append card to container
  taskSpace.appendChild(card);

  deleteButton.addEventListener('click', ()=>{
    deleteFunction(card)
  })
}
