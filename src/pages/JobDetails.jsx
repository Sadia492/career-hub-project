import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../components/Heading";
import { addToLs } from "../Utilities/LocalStorage";
import { Helmet } from "react-helmet";

export default function JobDetails() {
  const [selectedJob, setSelectedJob] = useState([]);
  const jobs = useLoaderData({});
  const { id } = useParams();
  useEffect(() => {
    const selectedJob = jobs.find((job) => job.id == id);

    setSelectedJob(selectedJob);
  }, [jobs, id]);
  const {
    company_name,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    job_title,
    salary,
    contact_information,
  } = selectedJob || {};
  const { phone, email, address } = contact_information || {};
  const handleApplyBtn = (job) => {
    addToLs(job);
  };

  return (
    <div>
      <Helmet>
        <title>Details | CareerHub</title>
      </Helmet>

      <Heading title="Job Details"></Heading>

      <div className="grid grid-cols-3 gap-6 w-4/5 mx-auto mt-6">
        <div className="col-span-2 space-y-6">
          <p className="text-gray-500">
            <span className="font-bold text-black">Job Description:</span>
            {job_description}
          </p>
          <p className="text-gray-500">
            <span className="font-bold text-black">Job Responsibility:</span>
            {job_responsibility}
          </p>
          <div>
            <p className="font-bold text-black">Educational Requirements:</p>
            <p className="text-gray-500">{educational_requirements}</p>
          </div>
          <div>
            <p className="font-bold text-black">Experiences:</p>
            <p className="text-gray-500">{experiences}</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className=" bg-[#f9f9ff] p-6 space-y-4">
            <p className="font-bold text-black">Job Details</p>
            <hr />
            <p className="flex gap-2 text-gray-500">
              <img src={"/assets/icons/money.png"} alt="" />
              <span className="font-bold text-black">Salary: </span>
              {salary} (Per Month)
            </p>
            <p className="flex gap-2 text-gray-500">
              <img src={"/assets/icons/calendar.png"} alt="" />
              <span className="font-bold text-black">Job title: </span>
              {job_title}
            </p>
            <p className="font-bold text-black">Contact Information</p>
            <hr />
            <p className="flex gap-2 text-gray-500">
              <img src={"/assets/icons/phone.png"} alt="" />
              <span className="font-bold text-black">Phone: </span>
              {phone}
            </p>
            <p className="flex gap-2 text-gray-500">
              <img src={"/assets/icons/email.png"} alt="" />
              <span className="font-bold text-black">Email: </span>
              {email}
            </p>
            <p className="flex gap-2 text-gray-500">
              <img
                className="w-7 h-8"
                src={"/assets/icons/location2.png"}
                alt=""
              />
              <span className="font-bold text-black">Address: </span>
              {address}
            </p>
          </div>
          <button
            onClick={() => handleApplyBtn(selectedJob)}
            className="btn w-full  bg-gradient-to-br from-[#7E90FE] to-[#9873FF] text-white mt-6"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
