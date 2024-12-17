const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));
let tasks = [];
app.get('/tasks', (req, res) => {
    res.json(tasks);
});
app.post('/tasks', (req, res) => {
    const { task } = req.body;
    const newTask = { id: Date.now(), task, completed: false };
    tasks.push(newTask);
    res.json(newTask);
});
app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    tasks = tasks.filter(task => task.id !== parseInt(id));
    res.json({ message: 'Task deleted successfully' });
});

app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { task, completed } = req.body;

    tasks = tasks.map(t =>
        t.id === parseInt(id) ? { ...t, task: task || t.task, completed: completed ?? t.completed } : t
    );

    res.json({ message: 'Task updated successfully' });
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
