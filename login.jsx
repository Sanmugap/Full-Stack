import React, { useState } from "react";

function App() {
  const [user, setUser] = useState({
    username: "",
    role: ""
  });

  const [page, setPage] = useState("login");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (user.role === "Admin") setPage("admin");
    else if (user.role === "User") setPage("user");
    else if (user.role === "Trainer") setPage("trainer");
  };

  // LOGIN PAGE
  if (page === "login") {
    return (
      <div className="login">
        <h2>Login</h2>

        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          onChange={handleChange}
        />

        <label>Role</label>
        <select name="role" onChange={handleChange}>
          <option value="">Select role</option>
          <option>Admin</option>
          <option>User</option>
          <option>Trainer</option>
        </select>

        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  // ADMIN PAGE
  if (page === "admin") {
    return <h2>Welcome Admin Dashboard</h2>;
  }

  // USER PAGE
  if (page === "user") {
    return <h2>Welcome User Dashboard</h2>;
  }

  // TRAINER PAGE
  if (page === "trainer") {
    return <h2>Welcome Trainer Dashboard</h2>;
  }

  return null;
}

export default App;
