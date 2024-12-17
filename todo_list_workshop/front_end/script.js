const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

const API_URL = 'http://localhost:3000';
async function fetchTasks() {
    const response = await fetch(`${API_URL}/tasks`);
    const tasks = await response.json();
    taskList.innerHTML = '';
    tasks.forEach(task => createTaskElement(task));
}
function createTaskElement({ id, task, completed }) {
    const li = document.createElement('li');
    li.setAttribute('data-id', id);

    const taskSpan = document.createElement('span');
    taskSpan.textContent = task;

    const completeBtn = document.createElement('button');
    completeBtn.textContent = completed ? 'Undo' : 'Complete';
    completeBtn.addEventListener('click', () => updateTask(id, { completed: !completed }));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteTask(id));

    li.appendChild(taskSpan);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
}
addTaskBtn.addEventListener('click', async () => {
    const task = taskInput.value.trim();
    if (task === '') {
        alert('Please enter a task');
        return;
    }

    const response = await fetch(`${API_URL}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task }),
    });

    const newTask = await response.json();
    createTaskElement(newTask);
    taskInput.value = '';
});
async function updateTask(id, updates) {
    await fetch(`${API_URL}/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
    });
    fetchTasks();
}
async function deleteTask(id) {
    await fetch(`${API_URL}/tasks/${id}`, { method: 'DELETE' });
    fetchTasks();
}
fetchTasks();
