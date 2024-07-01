export default function newProjectPopUpForm(selectArray) {
    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');

    const form = document.createElement('form');
    form.id = 'newTaskForm';
    form.classList.add('popup-form');

    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    titleLabel.htmlFor = 'projectTitle';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'projectTitle';
    titleInput.name = 'title';
    titleInput.required = true;

    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    descriptionLabel.htmlFor = 'projectDescription';
    const descriptionInput = document.createElement('textarea');
    descriptionInput.id = 'projectDescription';
    descriptionInput.name = 'description';
    descriptionInput.required = true;

    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due Date:';
    dueDateLabel.htmlFor = 'projectDueDate';
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.id = 'projectDueDate';
    dueDateInput.name = 'dueDate';

    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority:';
    priorityLabel.htmlFor = 'projectPriority';
    const prioritySelect = document.createElement('select');
    prioritySelect.id = 'projectPriority';
    prioritySelect.name = 'priority';
    prioritySelect.required = true;

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

    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);
    form.appendChild(dueDateLabel);
    form.appendChild(dueDateInput);
    form.appendChild(priorityLabel);
    form.appendChild(prioritySelect);
    form.appendChild(submitButton);

    formContainer.appendChild(form);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = titleInput.value;
      const description = descriptionInput.value;
      const dueDate = dueDateInput.value;
      const priority = prioritySelect.value;

      const collected = []
     const theNewTask = {
      title: title,
      description: description,
      dueDate: dueDate,
      priority: priority
   }
   selectArray.push(theNewTask)  
    console.log(collected)
});

    return { form };
  }

