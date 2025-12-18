import React, { useState } from "react";

function App() {
  const courses = ["Mathematics", "Physics", "Computer Science", "Chemistry"];

  const [formData, setFormData] = useState({
    studentName: "",
    course: courses[0]
  });

  const [enrolledList, setEnrolledList] = useState([]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setEnrolledList([formData, ...enrolledList]); // Add new enrollment to top
    setFormData({ studentName: "", course: courses[0] }); // Reset form
  };

  return (
    <div className="course-enrollment-page" style={styles.page}>
      <div className="course-enrollment-card" style={styles.card}>
        <h2 className="course-enrollment-title">Course Enrollment</h2>

        <form className="course-enrollment-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            value={formData.studentName}
            onChange={handleChange}
            required
            className="enrollment-input"
            style={styles.input}
          />

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="enrollment-select"
            style={styles.select}
          >
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="enrollment-submit"
            style={styles.button}
          >
            Enroll
          </button>
        </form>

        {enrolledList.length > 0 && (
          <div className="enrolled-list" style={styles.list}>
            <h3>Enrolled Students</h3>
            {enrolledList.map((item, index) => (
              <div key={index} className="enrolled-item" style={styles.item}>
                <p>
                  <strong>{item.studentName}</strong> enrolled in{" "}
                  <em>{item.course}</em>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f6f8",
    padding: "20px"
  },
  card: {
    width: "420px",
    backgroundColor: "#fff",
    padding: "25px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #ccc"
  },
  select: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #ccc"
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#2c7be5",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  },
  list: {
    marginTop: "20px",
    padding: "15px",
    backgroundColor: "#f1f3f5",
    borderRadius: "6px",
    maxHeight: "300px",
    overflowY: "auto"
  },
  item: {
    padding: "10px",
    borderBottom: "1px solid #ccc",
    marginBottom: "8px"
  }
};

export default App;

