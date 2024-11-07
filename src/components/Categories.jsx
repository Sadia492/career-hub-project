import React from "react";
import { Link } from "react-router-dom";

export default function Categories({ categories }) {
  //   const { id, logo, availability, category_name } = categories;
  return (
    <div className="w-4/5 mx-auto my-12">
      <h2 className="font-bold text-center text-3xl">Job Category List</h2>
      <p className="text-center mt-4 mb-8">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 grid-cols-1">
        {categories.map((category) => (
          <Link
            to={`/category/${category.category_name}`}
            key={category.id}
            className="bg-[#7E90FE]/5 p-8"
          >
            <div>
              <img src={category.logo} alt="" />
              <div className="font-bold text-xl">{category.category_name}</div>
              <div className="text-gray-400 ">{category.availability}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
