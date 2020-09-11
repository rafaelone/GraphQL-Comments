import React from 'react';

const Comment: React.FC<IPropsComment> = ({ name, description }) => {
  return (
    <div className="comment">
      <div className="comment-content">
        <p className="comment-name">Nome: {name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Comment;
