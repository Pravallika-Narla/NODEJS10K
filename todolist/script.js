
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  createTaskElement(taskText);
  taskInput.value = '';
});
function createTaskElement(taskText) {
  const li = document.createElement('li');
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.className = 'edit-btn';
  editBtn.addEventListener('click', () => editTask(li, taskSpan));
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', () => li.remove());
  li.appendChild(taskSpan);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}
function editTask(taskElement, taskSpan) {
  const newTaskText = prompt('Edit your task:', taskSpan.textContent);
  if (newTaskText !== null && newTaskText.trim() !== '') {
    taskSpan.textContent = newTaskText.trim();
  } else {
    alert('Task cannot be empty!');
  }
}
