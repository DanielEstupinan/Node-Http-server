import React from 'react';

function Task({ task }) {
  return (
    <li>
      <span>{task.name}</span>
      <input type="checkbox" checked={task.completed} />
    </li>
  );
}

export default Task;