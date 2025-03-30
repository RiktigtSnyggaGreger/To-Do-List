const tasks = [];
const taskInput = document.querySelector('.taskInput'); 
const addTaskButton = document.getElementById('addTaskButton');
const taskListContainer = document.querySelector('.taskListContainer');

// Function to add a task
function addTask() {
    const task = taskInput.value.trim();

    if (task) {
        tasks.push(task);

        const taskItem = document.createElement('div');
        taskItem.textContent = task;
        taskItem.className = 'taskItem'; 
        
        taskListContainer.appendChild(taskItem);
        taskInput.value = ''; // Clear the input field after adding the task
    }
}

// Add click event listener to the button
addTaskButton.addEventListener('click', addTask);

// Add keypress event listener to the input field
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask(); // Call the same function when Enter is pressed
    }
});