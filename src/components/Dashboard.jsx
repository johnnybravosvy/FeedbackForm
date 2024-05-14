import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState(0);
  const [admin, setAdmin] = useState(0);
  const [feedbacks, setFeedbacks] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/dashboard")
      .then((res) => {
        if (res.data.ok) {
          setUsers(res.data.users);
          setAdmin(res.data.admin);
          setFeedbacks(res.data.book);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="dashboard">
      <div className="dashboard-box">
        <h2>Total Feedbacks</h2> <br />
        <h2>{feedbacks}</h2>
      </div>
      <div className="dashboard-box">
        <h2>Total Users</h2> <br />
        <h2>{users}</h2>
      </div>
      <div className="dashboard-box">
        <h2>Total Admins</h2> <br />
        <h2{admin}></h2>
      </div>
    </div>
  );
};

export default Dashboard;
