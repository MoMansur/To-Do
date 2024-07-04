const taskSpace = document.getElementById('taskSpace')
const space = document.getElementById('space')


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
    saveButton.className = 'btn btn-primary mt-2';
    saveButton.id = 'saveBtnNewProject'
    saveButton.textContent = 'Create Folder';
    modalBody.appendChild(saveButton);

    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.textContent = 'Cancel';
    cancelButton.className = 'btn btn-danger mt-2 ms-2';
    
    cancelButton.addEventListener('click', () => {
        modalContainer.style.display = 'none';
    });
    modalBody.appendChild(cancelButton);
  
    // Append all parts to modal content
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContainer.appendChild(modalContent);
  
    // Event listener for close button
    closeButton.addEventListener('click', () => {
      modalContainer.style.display = 'none';
    });
  
    saveButton.addEventListener('click', () => {
      const projectName = nameInput.value;
      const projectColor = colorSelect.value;
      closeModal();
   
  
    });
  
    // Function to close the modal
    function closeModal() {
      modalContainer.style.display = 'none';
    }
  
    // Function to open the modal
    function openModal() {
      modalContainer.style.display = 'block';
      space.append(modalContainer)
    }
  

    // Export modal functions
    return {
      openModal,
      closeModal,
      saveButton,
      nameInput,
      colorSelect,
    };
  })();
  
  export default modal;
  
 