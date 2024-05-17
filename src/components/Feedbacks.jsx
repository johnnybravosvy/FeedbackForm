import axios from "axios";
import { useEffect, useState } from "react";
import FeedbackCard from "./FeedbackCard";

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/feedback/feedbacks")
      .then((res) => {
        setFeedbacks(res.data.feedback);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="feedback-list">
      {feedbacks.map((feedback) => {
        return (
          <FeedbackCard key={feedback.id} feedback={feedback}></FeedbackCard>
        );
      })}
    </div>
  );
};

export default Feedbacks;
