const taskSpace = document.getElementById('taskSpace');
const settingsIcon = document.getElementById('settingsIcons');
const userName = document.getElementById('userName');


// Function to create and export the settings page
export default function createSettingsPage(taskSpace, userName) {
    // Clear existing content in taskSpace
    taskSpace.innerHTML = '';

    // Settings Page Elements
    const settingsContainer = document.createElement('div');
    settingsContainer.className = 'settings-container';

    // Username Change Section
    const usernameSection = document.createElement('div');
    usernameSection.className = 'settings-section';

    const usernameLabel = document.createElement('label');
    usernameLabel.textContent = 'Change Username: ';

    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.id = 'newUsernameInput';
    usernameInput.placeholder = 'Enter new username...';

    const usernameButton = document.createElement('button');
    usernameButton.textContent = 'Change';
    usernameButton.className = 'btn btn-primary';
    usernameButton.addEventListener('click', () => {
        const newUsername = usernameInput.value.trim();
        if (newUsername !== '') {
            userName.textContent = newUsername;
            // You can save the new username to localStorage or send it to a server here
            console.log('Username changed to:', newUsername);
        } else {
            alert('Please enter a valid username.');
        }
    });

    usernameSection.appendChild(usernameLabel);
    usernameSection.appendChild(usernameInput);
    usernameSection.appendChild(usernameButton);

    // Background Color Change Section
    const bgColorSection = document.createElement('div');
    bgColorSection.className = 'settings-section';

    const bgColorLabel = document.createElement('label');
    bgColorLabel.textContent = 'Change Background Color: ';

    const bgColorSelect = document.createElement('select');
    bgColorSelect.id = 'bgColorSelect';
    bgColorSelect.className = 'form-control';

    const colors = ['Default', 'Blue', 'Green', 'Yellow', 'Red']; // Example colors
    colors.forEach(color => {
        const option = document.createElement('option');
        option.textContent = color;
        bgColorSelect.appendChild(option);
    });

    bgColorSelect.addEventListener('change', () => {
        const selectedColor = bgColorSelect.value.toLowerCase();
        if (selectedColor === 'default') {
            taskSpace.style.backgroundColor = ''; // Reset to default
        } else {
            taskSpace.style.backgroundColor = selectedColor;
        }
    });

    bgColorSection.appendChild(bgColorLabel);
    bgColorSection.appendChild(bgColorSelect);

    // Append Sections to Settings Container
    settingsContainer.appendChild(usernameSection);
    settingsContainer.appendChild(bgColorSection);

    // Append Settings Container to taskSpace
    taskSpace.appendChild(settingsContainer);
}

