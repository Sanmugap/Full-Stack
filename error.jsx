import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // dummy authentication
    if (username === "admin" && password === "1234") {
      setLoggedIn(true);
      setMessage("");
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div className="error">
      {!loggedIn ? (
        <>
          <h2>Login</h2>

          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>Login</button>

          {message && <p style={{ color: "red" }}>{message}</p>}
        </>
      ) : (
        <h2>Login Successful</h2>
      )}
    </div>
  );
}

export default App;
