import React, { useState } from "react";

function App() {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating && comment) {
      setSubmitted(true);
    } else {
      alert("Please give rating and comment");
    }
  };

  return (
    <div className="student">
      {!submitted ? (
        <>
          <h2>Student Feedback</h2>

          <label>Rating</label>
          <select onChange={(e) => setRating(e.target.value)}>
            <option value="">Select</option>
            <option>⭐</option>
            <option>⭐⭐</option>
            <option>⭐⭐⭐</option>
            <option>⭐⭐⭐⭐</option>
            <option>⭐⭐⭐⭐⭐</option>
          </select>

          <label>Comments</label>
          <textarea
            placeholder="Write your feedback"
            onChange={(e) => setComment(e.target.value)}
          ></textarea>

          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <h2>Thank You!</h2>
          <p><b>Your Rating:</b> {rating}</p>
          <p><b>Your Comment:</b> {comment}</p>
        </>
      )}
    </div>
  );
}

export default App;
