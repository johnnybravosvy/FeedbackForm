import axios from "axios";
import React, { useEffect } from "react";

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/feedback/feedbacks")
      .then((res) => {
        setFeedbacks(res.data);
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
