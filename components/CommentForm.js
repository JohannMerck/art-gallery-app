import { useState } from "react";

import { StyledHideButton } from "@/public/ButtonStyles";

export default function CommentForm({ onCommentSubmit }) {
  const [comment, setComment] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newComment = {
      text: comment,
      date: new Date().toLocaleString(),
    };
    onCommentSubmit(newComment);
    setComment(""); // Clear the input after submission
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Comment: </label>
      <input
        name="comment"
        id="comment"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      />
      <StyledHideButton type="submit">Send</StyledHideButton>
    </form>
  );
}

export function CommentsDisplay({ comments }) {
  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment, index) => (
        <div key={index}>
          <p>{comment.text}</p>
          <small>{comment.date}</small>
        </div>
      ))}
    </div>
  );
}
