import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Statistics from "../pages/Statistics";
import JobsCard from "../components/JobsCard";
import JobDetails from "../pages/JobDetails";
import AppliedJobs from "../pages/AppliedJobs";
import Blog from "../pages/Blog";
import Map from "../components/Map";
import Login from "../components/Login";
import Register from "../components/Register";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Statistics></Statistics>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <JobsCard></JobsCard>,
            loader: () => fetch("../jobs.json"),
          },
          {
            path: "/category/:category",
            element: <JobsCard></JobsCard>,
            loader: () => fetch("../jobs.json"),
          },
        ],
      },
      {
        path: "/job/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("../jobs.json"),
      },
      {
        path: "/applied",
        element: (
          <PrivateRoute>
            <AppliedJobs></AppliedJobs>
          </PrivateRoute>
        ),
        loader: () => fetch("../jobs.json"),
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
        ),
      },
      {
        path: "/map",
        element: (
          <PrivateRoute>
            <Map></Map>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
    ],
  },
]);

export default router;
