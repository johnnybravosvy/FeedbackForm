import React from "react";
import { Link } from "react-router-dom";

const FeedbackCard = ({ feedback }) => {
  const { username, email, ratings, comments } = feedback;
  return (
    <div className="feedback-card">
      <div className="feedback-details">
        <h2>{username}</h2>
        <p>{email}</p>
        <p>{ratings}</p>
        <p>{comments}</p>
      </div>
      <div className="feedback-actions">
        <button>
          <Link to={`/feedback/${feedback._id}`} classame="btn-link">
            edit
          </Link>
        </button>
        <button>
          <Link to={`/delete/${feedback._id}`} classame="btn-link">
            delete
          </Link>
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;
