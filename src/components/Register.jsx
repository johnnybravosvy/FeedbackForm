import { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setRegisterData((prevRegisterData) => {
      return {
        ...prevRegisterData,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/user/register", registerData)
      .then((res) => {
        if (res.data.registered) {
          navigate("/dashboard");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Navbar />
      <form className="register-page" onSubmit={handleSubmit}>
        <div className="register-container">
          <h2>Register</h2> <br />
          <div className="form-group">
            <label htmlFor="firstname">First name:</label>
            <input
              type="text"
              placeholder="first name"
              onChange={handleChange}
              name="firstname"
              value={registerData.firstname}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last name:</label>
            <input
              type="text"
              placeholder="last name"
              onChange={handleChange}
              name="lastname"
              value={registerData.lastname}
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="Enter Username"
              onChange={handleChange}
              name="username"
              value={registerData.username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="enter email"
              onChange={handleChange}
              name="email"
              value={registerData.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="enter password"
              onChange={handleChange}
              name="password"
              value={registerData.password}
            />
          </div>
          <button className="btn-register" type="submit">
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
