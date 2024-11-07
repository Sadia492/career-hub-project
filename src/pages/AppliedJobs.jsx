import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getJobsFromLs } from "../Utilities/LocalStorage";
import Heading from "../components/Heading";
import { IoIosArrowDown } from "react-icons/io";
export default function AppliedJobs() {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayedJobs, setDisplayedJobs] = useState([]);
  const [filter, setFilter] = useState("");
  const data = useLoaderData();
  useEffect(() => {
    const appliedJobs = getJobsFromLs();
    setAppliedJobs(appliedJobs);
    setDisplayedJobs(appliedJobs);
  }, []);

  const handleJobsFilter = (filter) => {
    setFilter(filter);
    if (filter === "all") {
      setDisplayedJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayedJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayedJobs(onsiteJobs);
    }
  };

  return (
    <div>
      <Heading title="Applied Jobs"></Heading>
      <div className="w-4/5 mx-auto space-y-6 mt-6">
        <div className="text-right">
          <details className="dropdown">
            <summary className="btn m-1">
              {filter ? `Filter By ${filter}` : "Filter By"} <IoIosArrowDown />
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li onClick={() => handleJobsFilter("all")}>
                <a>All</a>
              </li>
              <li onClick={() => handleJobsFilter("remote")}>
                <a>Remote</a>
              </li>
              <li onClick={() => handleJobsFilter("onsite")}>
                <a>Onsite</a>
              </li>
            </ul>
          </details>
        </div>

        {displayedJobs.map((job) => (
          <div className="grid grid-cols-4 gap-6 border-2 p-6">
            <div className="col-span-1 flex justify-center items-center bg-gray-200">
              <img className="" src={job.logo} alt="" />
            </div>
            <div className="col-span-3 content-start">
              <div className="flex justify-between items-end">
                <div>
                  <h2 className="card-title mb-2">{job.job_title}</h2>
                  <p className="mb-2 text-gray-500 font-medium">
                    {job.company_name}
                  </p>
                  <button className="border-2 border-[#7E90FE] text-[#7E90FE] py-1 px-2 rounded-md">
                    {job.remote_or_onsite}
                  </button>
                  <div className="flex gap-2 my-2">
                    <p className="flex gap-1 text-lg text-gray-400 font-semibold">
                      <img src={"/assets/icons/location2.png"} alt="" />
                      {job.location}
                    </p>
                    <p className="flex gap-1 text-lg text-gray-400 font-semibold">
                      <img src={"/assets/icons/money.png"} alt="" />
                      {job.salary}
                    </p>
                  </div>
                </div>
                <Link
                  to={`/job/${job.id}`}
                  className=" bg-gradient-to-br from-[#7E90FE] to-[#9873FF] text-white py-2 px-3"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
