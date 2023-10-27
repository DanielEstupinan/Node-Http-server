import React from 'react';

function Task({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;