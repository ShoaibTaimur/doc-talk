import React from "react";
import CountUp from "react-countup";

const Services = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-center font-primary font-extrabold text-[25px] md:text-[35px]">
        We Provide Best Medical Services
      </h1>
      <p className="text-center text-[13px] md:text-[16px] font-primary font-medium opacity-60">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.{" "}
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white px-8 py-5 rounded-2xl">
          <img src="success-doctor.png" alt="" />
          <p className="text-center sm:text-left font-primary font-extrabold text-[25px] md:text-[40px]">
            <CountUp end={199} duration={10}></CountUp>+
          </p>
          <p className="text-center sm:text-left font-primary opacity-60">
            Total Doctors
          </p>
        </div>
        <div className="bg-white px-8 py-5 rounded-2xl">
          <img src="success-review.png" alt="" />
          <p className="text-center sm:text-left font-primary font-extrabold text-[25px] md:text-[40px]">
            <CountUp end={467} duration={15}></CountUp>+
          </p>
          <p className="text-center sm:text-left font-primary opacity-60">
            TTotal Reviews
          </p>
        </div>
        <div className="bg-white px-8 py-5 rounded-2xl">
          <img src="success-patients.png" alt="" />
          <p className="text-center sm:text-left font-primary font-extrabold text-[25px] md:text-[40px]">
            <CountUp end={1900} duration={20}></CountUp>+
          </p>
          <p className="text-center sm:text-left font-primary opacity-60">
            Patients
          </p>
        </div>
        <div className="bg-white px-8 py-5 rounded-2xl">
          <img src="success-staffs.png" alt="" />
          <p className="text-center sm:text-left font-primary font-extrabold text-[25px] md:text-[40px]">
            <CountUp end={300} duration={12}></CountUp>+
          </p>
          <p className="text-center sm:text-left font-primary opacity-60">
            Total Stuffs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
