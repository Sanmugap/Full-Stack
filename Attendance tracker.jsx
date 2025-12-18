import React, { Component } from "react";

class Attendancetracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { id: 1, name: "Alice", present: false },
        { id: 2, name: "Bob", present: false },
        { id: 3, name: "Charlie", present: false },
        { id: 4, name: "Diana", present: false }
      ]
    };
  }

  toggleStatus = (id) => {
    this.setState({
      students: this.state.students.map((student) =>
        student.id === id
          ? { ...student, present: !student.present }
          : student
      )
    });
  };

  render() {
    return (
      <div style={styles.container}>
        <h2>Attendance Tracker</h2>

        {this.state.students.map((student) => (
          <div key={student.id} style={styles.row}>
            <span>
              <student.name> -{" "}
              <strong style={{ color: student.present ? "green" : "red" }}>
                {student.present ? "Present" : "Absent"}
              </strong>
            </span>

            <button
              style={styles.button}
              onClick={() => this.toggleStatus(student.id)}
            >
              Mark {student.present ? "Absent" : "Present"}
            </button>
          </div>
        ))}
      </div>
    );
  }
}

const styles = {
  container: {
    width: "420px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "8px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#e3f2fd",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)"
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: "8px",
    borderRadius: "4px"
  },
  button: {
    padding: "6px 12px",
    cursor: "pointer",
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
    borderRadius: "4px"
  }
};

export default Attendancetracker;
