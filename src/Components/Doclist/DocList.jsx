import React from "react";
import { Link } from "react-router";

const DocList = ({ doc }) => {
  const {
    id,
    availability,
    experience,
    name,
    education,
    registrationNumber,
    doctorImage,
  } = doc;
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const isAvailableToday =
    Array.isArray(availability) && availability.includes(today);

  return (
    <div className="bg-white p-6 rounded-3xl space-y-6">
      <div className="flex justify-center">
        <img className="w-50 lg:w-62.5 rounded-3xl" src={doctorImage} alt="" />
      </div>
      <div>
        <div className="flex gap-4 items-center">
          <p
            className={`text-[11px] md:text-[14px] font-primary font-medium py-1.75 px-3.5 rounded-full border ${isAvailableToday ? "text-green-700 bg-[rgba(9,152,47,0.1)]" : "text-red-700 bg-[rgba(229,23,23,0.1)]"}`}
          >
            {isAvailableToday ? "Available" : "Unavailable"}
          </p>
          <p className="text-[11px] md:text-[14px] font-primary font-medium py-1.75 px-3.5 text-blue-700 rounded-full bg-[rgba(23,106,229,0.1)] border">
            {experience}+ Experience
          </p>
        </div>
        <div>
          <h1 className="font-primary font-extrabold text-[20px] md:text-[24px]">
            {name}
          </h1>
          <p className="font-primary text-[12px] md:text-[15px] font-medium opacity-60">
            {education}
          </p>
          <div className="border m-3 border-dashed border-[rgba(15,15,15,0.2)]"></div>
          <p className="font-primary font-medium opacity-60">{`\u00AE ${registrationNumber}`}</p>
        </div>
      </div>
      <div>
        <Link to={`/docDetail/${id}`}>
          <button
            type="button"
            className="w-full btn pt-1 pb-1 rounded-4xl font-primary font-bold text-[15px] md:text-[20px] text-blue-800 border border-blue-800 active:bg-blue-800 active:text-white active:border-blue-800"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DocList;
