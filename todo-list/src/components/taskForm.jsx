import React, { useState } from 'react';

function TaskForm({ onSubmit }) {
  const [task, setTask] = useState({ name: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.name || !task.description) return alert('All fields are required.');
    
    onSubmit({ ...task, id: Date.now(), completed: false });
    setTask({ name: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={task.name}
        onChange={(e) => setTask({ ...task, name: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Task Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
