import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function JobDetails() {
  const [selectedJob, setSelectedJob] = useState([]);
  const jobs = useLoaderData({});
  const { id } = useParams();
  useEffect(() => {
    const selectedJob = jobs.find((job) => job.id == id);

    setSelectedJob(selectedJob);

    // console.log(selectedJob);
  }, [jobs, id]);
  const { company_name } = selectedJob;
  //  console.log(jobs);
  return (
    <div>
      <h1 className="text-center font-bold text-4xl">Job details</h1>
      <h1 className="text-center font-bold text-4xl">{selectedJob.id}</h1>
      <h1 className="text-center font-bold text-2xl">{company_name}</h1>
    </div>
  );
}
