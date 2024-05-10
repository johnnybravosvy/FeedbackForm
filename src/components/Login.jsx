import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    role: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setLoginData((prevLoginData) => {
      return {
        ...prevLoginData,
        [name]: value,
      };
    });
  }

  axios.defaults.withCredentials = true;
  function handleSubmit() {
    axios
      .post("http://localhost:5000/auth/login", { loginData })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log(loginData);
  }

  return (
    <>
      <Navbar />
      <form action="" className="login-page">
        <div className="login-container">
          <h2>Login</h2> <br />
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="Enter Username"
              onChange={handleChange}
              name="username"
              value={loginData.username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              placeholder="enter password"
              onChange={handleChange}
              name="password"
              value={loginData.password}
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role:</label>
            <select
              name="role"
              id="role"
              onChange={handleChange}
              value={loginData.role}
            >
              <option value="">--Choose--</option>
              <option value="admin">Admin</option>
              <option value="student">Student</option>
            </select>
          </div>
          <button className="btn-login" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
