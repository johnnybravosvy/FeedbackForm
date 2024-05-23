import { useEffect, useState } from "react";

import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Feedbacks from "./components/Feedbacks";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Logout from "./components/Logout";
import axios from "axios";
import EditFeedback from "./components/EditFeedback";
import DeleteFeedback from "./components/DeleteFeedback";
import AddFeedback from "./components/AddFeedback";

function App() {
  const [role, setRole] = useState("");

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
    <BrowserRouter>
      <Navbar role={role} />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/feedbacks" element={<Feedbacks />}></Route>
        <Route path="/login" element={<Login setRoleVar={setRole} />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/addfeedback" element={<AddFeedback />}></Route>
        <Route path="/logout" element={<Logout setRole={setRole} />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/feedback/:id" element={<EditFeedback />}></Route>
        <Route path="/delete/:id" element={<DeleteFeedback />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
