import React from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { Outlet, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Statistics() {
  const categories = useLoaderData();
  return (
    <div>
      <Helmet>
        <title> Statistics | CareerHub </title>
      </Helmet>
      <Banner></Banner>
      <Categories categories={categories}></Categories>
      <Outlet></Outlet>
    </div>
  );
}
