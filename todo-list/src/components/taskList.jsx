import React from 'react';
import TaskItem from './taskItem';

function TaskList({ tasks, onUpdate, onDelete }) {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;
