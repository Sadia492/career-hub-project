import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

export default function JobsCard() {
  const jobs = useLoaderData();
  const [job, setJob] = useState([]);
  const { category } = useParams();
  //   console.log(category);
  useEffect(() => {
    if (category) {
      const filteredJobs = [...jobs].filter(
        (single) => single.category_name === category
      );
      setJob(filteredJobs);
    } else {
      setJob(jobs);
    }
  }, [jobs, category]);

  return (
    <div className="grid grid-cols-3 gap-6">
      {job.map((job) => (
        <Card key={job.id} job={job}></Card>
      ))}
    </div>
  );
}
