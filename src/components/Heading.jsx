import React from "react";

export default function Heading({ title }) {
  return (
    <div className="bg-[#f9f9ff] bg-[url(/assets/images/bg1.png)] bg-no-repeat bg-left-bottom py-24">
      <h2 className="text-center font-bold text-3xl">{title}</h2>
    </div>
  );
}
