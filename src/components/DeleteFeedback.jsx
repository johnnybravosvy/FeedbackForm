import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteFeedback = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:5000/feedback/feedback/" + id)
      .then((res) => {
        if (res.data.deleted) {
          navigate("/feedbacks");
        }
      })
      .catch((err) => console.log(err));
  }, []);
};

export default DeleteFeedback;
