import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    workshop: "",
    mode: "",
    notes: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="register">
      <h2>Online Workshop Registration</h2>

      <div className="form-preview-container">
        {/* FORM SECTION */}
        <form className="form-box">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />

          <label>Workshop Topic</label>
          <select name="workshop" onChange={handleChange}>
            <option value="">Select</option>
            <option>React Basics</option>
            <option>UI/UX Design</option>
            <option>Data Analytics</option>
          </select>

          <label>Mode</label>
          <div className="radio-group">
            <input
              type="radio"
              name="mode"
              value="Live"
              onChange={handleChange}
            /> Live
            <input
              type="radio"
              name="mode"
              value="Recorded"
              onChange={handleChange}
            /> Recorded
          </div>

          <label>Additional Notes</label>
          <textarea
            name="notes"
            placeholder="Any comments"
            onChange={handleChange}
          ></textarea>

          <button type="button">Register</button>
        </form>

        {/* LIVE PREVIEW SECTION */}
        <div className="preview-box">
          <h3>Live Preview</h3>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Workshop:</strong> {formData.workshop}</p>
          <p><strong>Mode:</strong> {formData.mode}</p>
          <p><strong>Notes:</strong> {formData.notes}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
