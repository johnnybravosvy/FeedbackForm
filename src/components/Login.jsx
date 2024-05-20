import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setRoleVar }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  function handleSubmit() {
    axios
      .post("http://localhost:5000/auth/login", { username, password, role })
      .then((res) => {
        if (res.data.login && res.data.role === "admin") {
          setRoleVar("admin");
          navigate("/dashboard");
        } else if (res.data.login && res.data.role === "user") {
          setRoleVar("user");
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <form action="" className="login-page" onSubmit={handleSubmit}>
        <div className="login-container">
          <h2>Login</h2> <br />
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              value={username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="enter password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              value={password}
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role:</label>
            <select
              name="role"
              id="role"
              onChange={(e) => setRole(e.target.value)}
              value={role}
            >
              <option value="">--Choose--</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <button className="btn-login" type="submit">
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;

// import { useState } from "react";
// import Navbar from "./Navbar";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = ({ setRoleVar }) => {
//   const [loginData, setLoginData] = useState({
//     username: "",
//     password: "",
//     role: "",
//   });
//   const navigate = useNavigate();

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setLoginData((prevLoginData) => {
//       return {
//         ...prevLoginData,
//         [name]: value,
//       };
//     });
//   }

//   axios.defaults.withCredentials = true;
//   function handleSubmit() {
//     axios
//       .post("http://localhost:5000/auth/login", loginData)
//       .then((res) => {
//         if (res.data.login && res.data.role === "admin") {
//           navigate("/dashboard");
//         } else if (res.data.login && res.data.role === "user") {
//           navigate("/");
//         }
//       })
//       .catch((err) => console.log(err));
//   }

//   return (
//     <>
//       <form action="" className="login-page">
//         <div className="login-container">
//           <h2>Login</h2> <br />
//           <div className="form-group">
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               placeholder="Enter Username"
//               onChange={handleChange}
//               name="username"
//               value={loginData.username}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               placeholder="enter password"
//               onChange={handleChange}
//               name="password"
//               value={loginData.password}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="role">Role:</label>
//             <select
//               name="role"
//               id="role"
//               onChange={handleChange}
//               value={loginData.role}
//             >
//               <option value="">--Choose--</option>
//               <option value="admin">Admin</option>
//               <option value="user">User</option>
//             </select>
//           </div>
//           <button className="btn-login" onSubmit={handleSubmit}>
//             Login
//           </button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default Login;
