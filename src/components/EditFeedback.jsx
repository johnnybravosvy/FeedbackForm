import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditFeedback = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:5000?feedback/feedback/" + id)
      .then((res) => {
        setUsername(res.data.username);
        setEmail(res.data.email);
        setRating(res.data.rating);
        setComments(res.data.comments);
      })
      .catch((err) => console.log(err));
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5000/feedback/feedback/" + id, {
        username,
        email,
        rating,
        comments,
      })
      .then((res) => {
        if (res.data.updated) {
          navigate("/feedbacks");
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form action="" className="feedback-page" onSubmit={handleSubmit}>
        <div className="feedback-form">
          <h2> Edit Feedback</h2> <br />
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              value={username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Email:</label>
            <input
              type="text"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              value={email}
            />
          </div>
          <fieldset className="rating">
            <legend>Experience Ratings</legend>

            <input
              type="radio"
              id="poor"
              name="rating"
              value="poor"
              checked={rating === "poor"}
              onChange={(e) => setRating(e.target.value)}
            />
            <label htmlFor="poor">Poor</label>
            <br />

            <input
              type="radio"
              id="fair"
              name="rating"
              value="fair"
              checked={rating === "fair"}
              onChange={(e) => setRating(e.target.value)}
            />
            <label htmlFor="fair">Fair</label>
            <br />

            <input
              type="radio"
              id="good"
              name="rating"
              value="good"
              checked={rating === "good"}
              onChange={(e) => setRating(e.target.value)}
            />
            <label htmlFor="good">Good</label>
            <br />

            <input
              type="radio"
              id="very-good"
              name="rating"
              value="very-good"
              checked={rating === "very-good"}
              onChange={(e) => setRating(e.target.value)}
            />
            <label htmlFor="very-good">Very-good</label>
            <br />

            <input
              type="radio"
              id="excellent"
              name="rating"
              value="excellent"
              checked={rating === "excellent"}
              onChange={(e) => setRating(e.target.value)}
            />
            <label htmlFor="excellent">Excellent</label>
            <br />
          </fieldset>
          <div className="form-group">
            <textarea
              className="comments"
              value={comments}
              placeholder="comments"
              onChange={(e) => setComments(e.target.value)}
              name="comments"
            />
          </div>
          <button className="btn-submit" onClick={handleSubmit}>
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default EditFeedback;
