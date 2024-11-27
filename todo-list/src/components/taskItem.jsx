import React, { useState } from 'react';

function TaskItem({ task, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleUpdate = () => {
    onUpdate(editedTask);
    setIsEditing(false);
  };

  return (
    <li className={task.completed ? 'completed' : ''}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTask.name}
            onChange={(e) => setEditedTask({ ...editedTask, name: e.target.value })}
          />
          <input
            type="text"
            value={editedTask.description}
            onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <span>{task.name} - {task.description}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
          <button onClick={() => onUpdate({ ...task, completed: !task.completed })}>
            {task.completed ? 'Undo' : 'Complete'}
          </button>
        </>
      )}
    </li>
  );
}

export default TaskItem;
