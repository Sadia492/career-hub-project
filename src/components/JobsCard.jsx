import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

export default function JobsCard() {
  const jobs = useLoaderData();
  const [job, setJob] = useState([]);
  const [showAllJobs, setShowAllJobs] = useState(false);
  const { category } = useParams();
  useEffect(() => {
    if (category) {
      const filteredJobs = [...jobs].filter(
        (single) => single.category_name === category
      );
      setJob(filteredJobs);
    } else {
      setJob(jobs.slice(0, 4));
    }
    setShowAllJobs(false);
  }, [jobs, category]);
  const handleAllJobBtn = () => {
    setShowAllJobs(true);
    setJob(jobs);
  };

  return (
    <div id="featured" className="w-4/5 mx-auto my-12">
      <h2 className="font-bold text-center text-3xl">Featured Jobs</h2>
      <p className="text-center mt-4 mb-8">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        {job.map((job) => (
          <Card key={job.id} job={job}></Card>
        ))}
      </div>
      <div className="text-center mt-8">
        {!showAllJobs && jobs.length > 4 && (
          <button
            onClick={handleAllJobBtn}
            className="btn bg-gradient-to-br from-[#7E90FE] to-[#9873FF] text-white"
          >
            See All Jobs
          </button>
        )}
      </div>
    </div>
  );
}
