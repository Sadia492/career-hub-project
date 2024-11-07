import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  console.log(pathname);
  const links = (
    <>
      <NavLink
        className={({ isActive }) => `${isActive ? "text-[#7E90FE]" : ""}`}
        to="/"
      >
        <li>Statistics</li>
      </NavLink>
      <NavLink
        className={({ isActive }) => `${isActive ? "text-[#7E90FE]" : ""}`}
        to="/applied"
      >
        <li>Applied Jobs</li>
      </NavLink>
      <NavLink
        className={({ isActive }) => `${isActive ? "text-[#7E90FE]" : ""}`}
        to="/blog"
      >
        <li>Blog</li>
      </NavLink>
    </>
  );
  return (
    <div
      className={`bg-[#f9f9ff] flex ${
        pathname !== "/"
          ? "bg-[url(/assets/images/bg2.png)] bg-no-repeat bg-right py-12"
          : ""
      } `}
    >
      <div className="navbar w-4/5 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost  text-3xl font-extrabold">
            CareerHub
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-6 px-1">{links}</ul>
        </div>
        <div className="navbar-end ">
          <a
            href="#featured"
            className="btn bg-gradient-to-b from-[#7E90FE] to-[#9873FF]"
          >
            Start Applying
          </a>
        </div>
      </div>
      {/* <img className="w-52" src={"../src/assets/images/bg2.png"} alt="" /> */}
    </div>
  );
}
