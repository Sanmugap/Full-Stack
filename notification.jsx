import React, { useState } from "react";

function App() {
  const [notifications, setNotifications] = useState([
    "New user registered",
    "Server backup completed",
    "New message received"
  ]);

  const addNotification = () => {
    setNotifications([
      ...notifications,
      "New notification at " + new Date().toLocaleTimeString()
    ]);
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="notification">
      <h2>Dashboard Notifications</h2>

      <button onClick={addNotification}>Add Notification</button>
      <button onClick={clearNotifications}>Clear All</button>

      {notifications.length === 0 ? (
        <p>No notifications</p>
      ) : (
        <ul>
          {notifications.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
