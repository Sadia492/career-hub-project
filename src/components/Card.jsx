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
  } = job;
  return (
    <Link to={`job/${id}`}>
      <div className="card card-compact h-full bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <p>{category_name}</p>
          <p>{remote_or_onsite}</p>
          <p>{location}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </Link>
  );
}
