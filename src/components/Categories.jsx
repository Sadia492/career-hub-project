import React from "react";
import { Link } from "react-router-dom";

export default function Categories({ categories }) {
  //   const { id, logo, availability, category_name } = categories;
  return (
    <div className="stats shadow">
      {categories.map((category) => (
        <Link
          to={`/category/${category.category_name}`}
          key={category.id}
          className="stat"
        >
          <img src={category.logo} alt="" />
          <div className="stat-title">{category.category_name}</div>
          <div className="stat-value text-primary">{category.availability}</div>
          <div className="stat-desc">21% more than last month</div>
        </Link>
      ))}
    </div>
  );
}
