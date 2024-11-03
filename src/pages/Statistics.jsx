import React from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { Outlet, useLoaderData } from "react-router-dom";

export default function Statistics() {
  const categories = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Categories categories={categories}></Categories>
      <Outlet></Outlet>
    </div>
  );
}