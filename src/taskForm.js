
export default function newTaskFormDOM(selectArray) {
    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');

    const form = document.createElement('form');
    form.id = 'newTaskForm';
    form.classList.add('popup-form', 'needs-validation');
    form.setAttribute('novalidate', '');
    
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    titleLabel.className = 'form-label';
    titleLabel.htmlFor = 'projectTitle';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.className = 'form-control';
    titleInput.id = 'projectTitle';
    titleInput.name = 'title';
    titleInput.required = true;
    titleInput.style.height = '50px'
    
    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    descriptionLabel.className = 'form-label';
    descriptionLabel.htmlFor = 'projectDescription';
    const descriptionInput = document.createElement('textarea');
    descriptionInput.className = 'form-control';
    descriptionInput.id = 'projectDescription';
    descriptionInput.name = 'description';
    descriptionInput.required = true;
    
    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due Date:';
    dueDateLabel.className = 'form-label';
    dueDateLabel.htmlFor = 'projectDueDate';
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.className = 'form-control';
    dueDateInput.id = 'projectDueDate';
    dueDateInput.name = 'dueDate';
    dueDateInput.style.height = '50px'
    
    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority:';
    priorityLabel.className = 'form-label';
    priorityLabel.htmlFor = 'projectPriority';
    
    const prioritySelect = document.createElement('select');
    prioritySelect.className = 'form-select';
    prioritySelect.id = 'projectPriority';
    prioritySelect.name = 'priority';
    prioritySelect.required = true;
    prioritySelect.style.height = '50px'
    
    const priorityOptions = ['Low', 'Medium', 'High'];
    priorityOptions.forEach(optionText => {
      const option = document.createElement('option');
      option.value = optionText.toLowerCase();
      option.textContent = optionText;
      prioritySelect.appendChild(option);
    });
    
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Create Project';
    submitButton.className = 'btn btn-success mt-3';
    
    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.textContent = 'Cancel';
    cancelButton.className = 'btn btn-danger mt-3 ms-2';
    
    cancelButton.addEventListener('click', () => {
        formContainer.style.display = 'none';
    });

    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);
    form.appendChild(dueDateLabel);
    form.appendChild(dueDateInput);
    form.appendChild(priorityLabel);
    form.appendChild(prioritySelect);
    form.appendChild(submitButton);
    form.appendChild(cancelButton);

    formContainer.appendChild(form);

    form.addEventListener('submit', (e) => {

      function formatDateToDMY(date) {
        const [year, month, day] = date.split('-'); // Assuming the date is initially in 'year-month-day' format
        return `${day}/${month}/${year}`;
      }
      
      e.preventDefault();
      const title = titleInput.value;
      const description = descriptionInput.value;
      const dueDate = formatDateToDMY(dueDateInput.value)
      const priority = prioritySelect.value;

      const theNewTask = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        isCompleted: false
      };

      selectArray.push(theNewTask);
      console.log(selectArray);
      formContainer.style.display = 'none'; // Hide the form after submission
    });
    

    return formContainer;
}
