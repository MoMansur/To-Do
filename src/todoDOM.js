import ProjectManager from "./projectManager.js";
import Task from "./todo.js";

// import { deleteFunction } from "./todo.js";

export default function taskDOM(titleText, descriptionText, dueDateText, priorityText, index) {
  // Create task card elements
  const space = document.getElementById('space');

  const card = document.createElement('div');
  card.className = 'card task-card mb-3';
  card.setAttribute('data-index', index);

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
  titleContainer.className = 'col-md-2 w-100 d-flex align-items-center justify-content-center text-white position-relative';
  titleContainer.id = 'titleContainer';
  const title = document.createElement('h2');
  title.className = 'card-title';
  title.textContent = titleText;
  titleContainer.style.backgroundColor = priorityBar.style.backgroundColor;

  titleContainer.appendChild(priorityBar);
  titleContainer.appendChild(title);

  // Create a container for the labels
  const labelContainer = document.createElement('div');
  labelContainer.className = 'label-container d-flex justify-content-between';

  // Create individual labels


  const descriptionLabel = document.createElement('span');
  descriptionLabel.className = 'label';
  descriptionLabel.textContent = 'Description';

  const dueDateLabel = document.createElement('span');
  dueDateLabel.className = 'label';
  dueDateLabel.textContent = 'Due Date';

  const priorityLabel = document.createElement('span');
  priorityLabel.className = 'label';
  priorityLabel.textContent = 'Priority';

  // Append labels to the container

  labelContainer.appendChild(descriptionLabel);
  labelContainer.appendChild(dueDateLabel);
  labelContainer.appendChild(priorityLabel);

  // Append the container to the title container
  titleContainer.appendChild(labelContainer);

  // Create a container for the elements
  const elementContainer = document.createElement('div');
  elementContainer.className = 'element-container d-flex  align-items-center';
  elementContainer.id = 'elementContainer';

  // Create a span for the checkbox and completion status text
  const checkboxSpan = document.createElement('span');
  checkboxSpan.className = 'checkbox-span';
  checkboxSpan.style.margin = '10px'

  // Create a big checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'form-check-input form-check-input-lg';
  checkbox.ariaLabel = 'Task Complete';

  // Create the status text
  const statusText = document.createElement('span');
  statusText.className = 'status-text';
  statusText.textContent = 'Incomplete';

  checkboxSpan.appendChild(checkbox);
  checkboxSpan.appendChild(statusText);

  // Create the description element
  const description = document.createElement('span');
  description.className = 'col-8 card-text description';
  description.textContent = descriptionText;
  description.id = 'carddescription';

  // Create the priority element
  const priority = document.createElement('p');
  priority.className = 'card-text priority';
  priority.innerHTML = `<small class="text-muted"><i class="fas fa-flag"></i> ${priorityText}</small>`;

  // Create the due date element
  const dueDate = document.createElement('p');
  dueDate.className = 'card-text';
  dueDate.innerHTML = `<small class="text-muted"><i class="fas fa-calendar-day"></i> ${dueDateText}</small>`;

  // Append elements to the container

  elementContainer.appendChild(description);
  elementContainer.appendChild(dueDate);
  elementContainer.appendChild(priority);

  // Append the container to the card body
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  cardBody.appendChild(elementContainer);

  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'd-flex align-items-center p-2';
  buttonContainer.id = 'buttonContainer';

  const buttonGroup = document.createElement('div');
  buttonGroup.style.margin ='10px'

  const editButton = document.createElement('button');
  editButton.className = 'btn btn-warning btn-sm m-2';
  editButton.innerHTML = '<i class="fas fa-edit"></i> Edit';

  const deleteButton = document.createElement('button');
  deleteButton.className = 'btn btn-danger btn-sm';
  deleteButton.innerHTML = '<i class="fas fa-trash"></i> Delete';


  const taskCompletedCheckbox = document.createElement('input');
  taskCompletedCheckbox.className = 'form-check-input';
  taskCompletedCheckbox.type = 'checkbox';
  taskCompletedCheckbox.id = 'taskCompleted';

  const taskCompletedLabel = document.createElement('label');
  taskCompletedLabel.className = 'form-check-label';
  taskCompletedLabel.htmlFor = 'taskCompleted';
  taskCompletedLabel.textContent = 'Completed';

  // Append elements
  buttonContainer.appendChild(checkboxSpan)
  buttonContainer.style.padding = '10px'

  buttonGroup.appendChild(editButton);
  buttonGroup.appendChild(deleteButton);

  buttonContainer.appendChild(buttonGroup);

  row.appendChild(titleContainer);
  row.appendChild(cardBody);
  row.appendChild(buttonContainer);

  card.appendChild(row);

  // Append card to container
  space.appendChild(card);

  const task = new Task(titleText, descriptionText, dueDateText, priorityText);

  deleteButton.addEventListener('click', () => {
    deleteFunction(card);
  });

  checkbox.addEventListener('change', () => {
    const isCompleted = task.completedFunc(checkbox);
    
    // ProjectManager.prototype.saveProjects()
    console.log(checkbox.checked)

    if (isCompleted) {
      card.style.backgroundColor = 'lightgray';
      checkboxSpan.style.backgroundColor = 'green';
      statusText.textContent = 'Complete';

    } else {
      card.style.backgroundColor = '';
      statusText.textContent = 'Incomplete';
      checkboxSpan.style.backgroundColor = 'lightgray';
    }
  });
}
