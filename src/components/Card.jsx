import React from "react";
import { Link } from "react-router-dom";

export default function Card({ job }) {
  const {
    location,
    remote_or_onsite,
    company_name,
    logo,
    job_title,
    category_name,
    id,
    salary,
  } = job;
  return (
    <Link className="border-2 p-10" to={`/job/${id}`}>
      <div>
        <figure className="w-full">
          <img className="mb-8" src={logo} alt="Shoes" />
        </figure>
        <div className="">
          <h2 className="card-title mb-2">{job_title}</h2>
          <p className="mb-2 text-gray-500 font-medium">{company_name}</p>

          <button className="border-2 border-[#7E90FE] text-[#7E90FE] py-1 px-2 rounded-md">
            {remote_or_onsite}
          </button>
          <div className="flex gap-2 my-2">
            <p className="flex gap-1 text-lg text-gray-400 font-semibold">
              <img src={"/assets/icons/location2.png"} alt="" />
              {location}
            </p>
            <p className="flex gap-1 text-lg text-gray-400 font-semibold">
              <img src={"/assets/icons/money.png"} alt="" />
              {salary}
            </p>
          </div>
          <div className="">
            <button className="btn bg-gradient-to-br from-[#7E90FE] to-[#9873FF] text-white">
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
