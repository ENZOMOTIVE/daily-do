import React from 'react';
import './dashboard.css'; // For dashboard-specific styles

function Dashboard({ tasks }) {
  return (
    <div className="dashboard">
      <h2>Your Tasks</h2>
      {Object.keys(tasks).length > 0 ? (
        Object.keys(tasks).map((date) => (
          <div key={date} className="task-section">
            <h3>{date}</h3>
            <ul>
              {tasks[date].map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No tasks added yet!</p>
      )}
    </div>
  );
}

export default Dashboard;
