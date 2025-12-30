import React, { useState } from "react";

function App() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="blog">
      <h2>My Blog Post</h2>

      <div className="blog-content">
        <p>
          This is a sample blog post. Readers can share their thoughts in the
          comments section below. Comments appear instantly after submission.
        </p>
      </div>

      <hr />

      <h3>Comments</h3>

      <textarea
        placeholder="Write a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>

      <button onClick={addComment}>Post Comment</button>

      <div className="comment-list">
        {comments.length === 0 ? (
          <p>No comments yet</p>
        ) : (
          <ul>
            {comments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
