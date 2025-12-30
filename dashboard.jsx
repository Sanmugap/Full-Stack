import React, { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  const students = [
    { id: 1, name: "Alice", grade: "A" },
    { id: 2, name: "Bob", grade: "B+" },
    { id: 3, name: "Charlie", grade: "A-" }
  ];

  const renderPage = () => {
    switch (page) {
      case "home":
        return <h2>Welcome to Student Dashboard</h2>;
      case "students":
        return (
          <>
            <h2>Student List</h2>
            <table border="1" cellPadding="5">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.id}>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td>{s.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        );
      case "about":
        return <h2>About This Dashboard</h2>;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      <nav>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("students")}>Students</button>
        <button onClick={() => setPage("about")}>About</button>
      </nav>

      <hr />

      <div>{renderPage()}</div>
    </div>
  );
}

export default App;
