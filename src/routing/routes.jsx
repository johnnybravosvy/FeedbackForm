import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import Register from "../components/Register";
import AddFeedback from "../components/AddFeedback";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import Logout from "../components/Logout";
import Feedbacks from "../components/Feedbacks";
import EditFeedback from "../components/EditFeedback";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/feedbacks", element: <Feedbacks /> },
      { path: "/Login", element: <Login /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/register", element: <Register /> },
      { path: "/addfeedback", element: <AddFeedback /> },
      { path: "/logout", element: <Logout /> },
      { path: "/feedback/:id", element: <EditFeedback /> },
    ],
  },
]);

export default router;
