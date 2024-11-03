import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Statistics from "../pages/Statistics";
import JobsCard from "../components/JobsCard";
import JobDetails from "../pages/JobDetails";

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
        loader: () => fetch("./jobs.json"),
      },
    ],
  },
]);

export default router;
