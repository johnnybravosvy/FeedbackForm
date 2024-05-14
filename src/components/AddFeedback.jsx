import { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddFeedback = () => {
  const [feedbackData, setFeedbackData] = useState({
    username: "",
    email: "",
    rating: "",
    comments: "",
  });
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFeedbackData((prevFeedbackData) => {
      return {
        ...prevFeedbackData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  axios.defaults.withCredentials = true;
  function handleSubmit() {
    axios
      .post("http://localhost:5000/auth/login", feedbackData)
      .then((res) => {
        if (res.data.login && res.data.role === "admin") {
          navigate("/dashboard");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Navbar />
      <form action="" className="feedback-page">
        <div className="feedback-container">
          <h2>Feedback</h2> <br />
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="username"
              onChange={handleChange}
              name="username"
              value={feedbackData.username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Email:</label>
            <input
              type="text"
              placeholder="email"
              onChange={handleChange}
              name="email"
              value={feedbackData.email}
            />
          </div>
          <fieldset className="rating">
            <legend>Experience Ratings</legend>

            <input
              type="radio"
              id="poor"
              name="rating"
              value="poor"
              checked={feedbackData.rating === "poor"}
              onChange={handleChange}
            />
            <label htmlFor="poor">Poor</label>
            <br />

            <input
              type="radio"
              id="fair"
              name="rating"
              value="fair"
              checked={feedbackData.rating === "fair"}
              onChange={handleChange}
            />
            <label htmlFor="fair">Fair</label>
            <br />

            <input
              type="radio"
              id="good"
              name="rating"
              value="good"
              checked={feedbackData.rating === "good"}
              onChange={handleChange}
            />
            <label htmlFor="good">Good</label>
            <br />

            <input
              type="radio"
              id="very-good"
              name="rating"
              value="very-good"
              checked={feedbackData.rating === "very-good"}
              onChange={handleChange}
            />
            <label htmlFor="very-good">Very-good</label>
            <br />

            <input
              type="radio"
              id="excellent"
              name="rating"
              value="excellent"
              checked={feedbackData.rating === "excellent"}
              onChange={handleChange}
            />
            <label htmlFor="full-time">Excellent</label>
            <br />
          </fieldset>
          <div className="form-group">
            <textarea
              className="comments"
              value={feedbackData.comments}
              placeholder="comments"
              onChange={handleChange}
              name="comments"
            />
          </div>
          <button className="btn-submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default AddFeedback;
