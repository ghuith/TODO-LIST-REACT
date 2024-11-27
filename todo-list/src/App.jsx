import React, { useState, useEffect } from 'react';
import TaskList from './components/taskList';
import TaskForm from './components/taskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);
  const updateTask = (updatedTask) => setTasks(tasks.map(t => t.id === updatedTask.id ? updatedTask : t));
  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));
  
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskForm onSubmit={addTask} />
      <TaskList tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;
