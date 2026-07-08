import React, { useState } from 'react';
import './taskform.css'; // For form-specific styles

function TaskForm({ onAddTask }) {
  const [taskInput, setTaskInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim()) {
      onAddTask(taskInput); // Pass the new task to the parent component
      setTaskInput(''); // Clear the input field
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your task for today"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
