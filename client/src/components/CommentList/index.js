import React from 'react';

const CommentList = ({ comments, title }) => {
  if (!comments.length) {
    return <h3>There are no comments yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {comments &&
        comments.map(comment => (
          <div key={comment._id}>
            <p>
              {comment.username}
              comment on{comment.createdAt}
            </p>
            <div>
              <p>{comment.commentText}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CommentList;