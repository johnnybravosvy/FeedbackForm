import "../App.css";
import { useEffect } from "react";
import axios from "axios";

const HomePage = ({ setRole }) => {
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:5000/auth/verify")
      .then((res) => {
        if (res.data.login) {
          setRole(res.data.role);
        } else {
          setRole("");
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">Feedback Collection Page</h1>
          <p className="home-description">
            This is where users and Staff come to express either their pleasure
            or displeasure with the services been rendered to them on daily
            basis
          </p>
        </div>
        <div className="home-image"></div>
      </div>
    </>
  );
};

export default HomePage;
