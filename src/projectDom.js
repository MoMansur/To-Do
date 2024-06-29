// Create and export the modal as a default module
const taskSpace = document.getElementById('taskSpace')
const newProjectUL = document.getElementById('newProjectUL')

const modal = (function() {
    // Modal container
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal';
  
    // Modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
  
    // Modal header
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
    const modalTitle = document.createElement('h2');
    modalTitle.textContent = 'New Project';
    modalHeader.appendChild(modalTitle);
  
    // Close button
    const closeButton = document.createElement('span');
    closeButton.className = 'close';
    closeButton.textContent = '×';
    modalHeader.appendChild(closeButton);
  
    // Modal body
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';
  
    // Project Name input
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Project Name:';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'projectName';
    nameInput.className = 'form-control';
    modalBody.appendChild(nameLabel);
    modalBody.appendChild(nameInput);
  
    // Optional Color Selector (example)
    const colorLabel = document.createElement('label');
    colorLabel.textContent = 'Color:';
    const colorSelect = document.createElement('select');
    colorSelect.id = 'projectColor';
    colorSelect.className = 'form-control';
    const colorOptions = ['None', 'Red', 'Green', 'Blue'];
    colorOptions.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.textContent = option;
      colorSelect.appendChild(optionElement);
    });
    modalBody.appendChild(colorLabel);
    modalBody.appendChild(colorSelect);
  
    // Save button
    const saveButton = document.createElement('button');
    saveButton.className = 'btn btn-primary';
    saveButton.textContent = 'Create Folder';
    modalBody.appendChild(saveButton);
  
    // Append all parts to modal content
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContainer.appendChild(modalContent);
  
    // Event listener for close button
    closeButton.addEventListener('click', () => {
      modalContainer.style.display = 'none';
    });
  
    // Event listener for Save button (example)
    saveButton.addEventListener('click', () => {
      const projectName = nameInput.value;
      const projectColor = colorSelect.value;
      console.log(`Project Name: ${projectName}, Color: ${projectColor}`);
      // Implement your save logic here
      closeModal();
      addProjectUI(projectName)


    });
  
    // Function to close the modal
    function closeModal() {
      modalContainer.style.display = 'none';
    }
  
    // Function to open the modal
    function openModal() {
      modalContainer.style.display = 'block';
      taskSpace.append(modalContainer)
    }
  
    function addProjectUI(projectName, index){
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item';
      listItem.setAttribute('data-index', index)
      // Create an icon element
      const icon = document.createElement('i');
      icon.className = 'fa-solid fa-hashtag';
      
      
      // Append the icon and text node to the list item
      listItem.append(icon);
      listItem.append(projectName);
      

    
      newProjectUL.append(listItem)
    }

    // Export modal functions
    return {
      openModal,
      closeModal,
      addProjectUI,
    };
  })();
  
  export default modal;
  
 