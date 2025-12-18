import React, { Component } from "react";

class Tasklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskInput: "",
      tasks: []
    };
  }

  handleChange = (e) => {
    this.setState({ taskInput: e.target.value });
  };

  addTask = () => {
    if (this.state.taskInput.trim() === "") return;

    this.setState({
      tasks: [...this.state.tasks, this.state.taskInput],
      taskInput: ""
    });
  };

  removeTask = (index) => {
    const tasks = this.state.tasks.filter((_, i) => i !== index);
    this.setState({ tasks });
  };

  render() {
    return (
      <div style={styles.container}>
        <h2>Task List Dashboard</h2>

        <div style={styles.inputBox}>
          <input
            type="text"
            placeholder="Enter a task"
            value={this.state.taskInput}
            onChange={this.handleChange}
            style={styles.input}
          />
          <button onClick={this.addTask} style={styles.addButton}>
            Add Task
          </button>
        </div>

        <ul style={styles.list}>
          {this.state.tasks.map((task, index) => (
            <li key={index} style={styles.listItem}>
              {task}
              <button
                style={styles.deleteButton}
                onClick={() => this.removeTask(index)}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const styles = {
  container: {
    width: "420px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "#eef2f7",
    borderRadius: "8px",
    fontFamily: "Arial",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)"
  },
  inputBox: {
    display: "flex",
    marginBottom: "15px"
  },
  input: {
    flex: 1,
    padding: "8px",
    fontSize: "14px"
  },
  addButton: {
    padding: "8px 15px",
    marginLeft: "5px",
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
    cursor: "pointer"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px",
    backgroundColor: "#ffffff",
    marginBottom: "8px",
    borderRadius: "4px"
  },
  deleteButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "16px"
  }
};

export default Tasklist;
