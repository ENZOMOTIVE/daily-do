import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import Dashboard from './components/Dashboard';
import './App.css'; // Add your global styles

function App() {
  const [tasks, setTasks] = useState({});
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('dailyTasks')) || {};
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem('dailyTasks', JSON.stringify(tasks));
  }, [tasks]);

  // Function to add a new task
  const handleAddTask = (task) => {
    setTasks({
      ...tasks,
      [currentDate]: [...(tasks[currentDate] || []), task],
    });
  };

  return (
    <div className="App">
      <h1>30-Day Activity Tracker</h1>
      <TaskForm onAddTask={handleAddTask} />
      <Dashboard tasks={tasks} />
    </div>
  );
}

export default App;
