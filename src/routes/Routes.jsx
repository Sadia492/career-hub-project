import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Statistics from "../pages/Statistics";
import JobsCard from "../components/JobsCard";
import JobDetails from "../pages/JobDetails";
import AppliedJobs from "../pages/AppliedJobs";
import Blog from "../pages/Blog";

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
        element: <JobDetails></JobDetails>,
        loader: () => fetch("../jobs.json"),
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch("../jobs.json"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
        loader: () => fetch("../jobs.json"),
      },
    ],
  },
]);

export default router;
