import React from "react";
import BannerImg from "/assets/images/user.png";

export default function Banner() {
  return (
    <div className=" bg-[#f9f9ff]">
      <div className="w-4/5 mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse flex-1">
          <img src={BannerImg} className="lg:w-1/2 rounded-lg" />
          <div className="flex-1 lg:w-1/2">
            <h1 className="text-6xl w-3/4 font-bold">
              One Step Closer To Your{" "}
              <span className="text-[#7E90FE]">Dream Job</span>
            </h1>
            <p className="py-6">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn bg-gradient-to-br from-[#7E90FE] to-[#9873FF] text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
