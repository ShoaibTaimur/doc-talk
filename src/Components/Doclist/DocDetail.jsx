import NotFound from "@/Components/Utilities/NotFound";
import { BookingContext } from "@/context/BookingContext";
import React, { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router";

const DocDetail = () => {
  const { handleBooking } = useContext(BookingContext);
  const { id } = useParams();
  const docList = useLoaderData();

  if (!Array.isArray(docList)) {
    return (
      <NotFound
        title="Doctor data unavailable"
        message="We couldn't load the doctor details right now. Please try again in a moment."
      />
    );
  }

  const docInfo = docList.find((doc) => doc?.id === parseInt(id));

  if (!docInfo) {
    return (
      <NotFound
        title="Doctor not found"
        message="The doctor you're looking for doesn't exist or may have been removed."
      />
    );
  }

  const {
    name,
    doctorImage,
    education,
    speciality,
    workPlace,
    registrationNumber,
    availability,
    fee,
  } = docInfo;
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const isAvailableToday =
    Array.isArray(availability) && availability.includes(today);

  return (
    <div className="my-5 mx-13 lg:mx-22.5 flex flex-col gap-5">
      <div className="bg-white rounded-3xl py-12.5 px-4 sm:px-25 flex flex-col gap-3 items-center">
        <h1 className="text-center font-primary font-extrabold text-[22px] sm:text-[25px] md:text-[32px]">
          Doctor's Profile Details
        </h1>
        <p className="text-center text-[12px] sm:text-[18px] font-primary font-medium opacity-60">
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor
          amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis
          turpis imperdiet mattis donec dignissim volutpat.
        </p>
      </div>
      <div className="bg-white rounded-3xl py-12.5 px-4 sm:px-25 flex flex-col gap-4 lg:flex-row items-center">
        <div className="md:w-[30%] flex items-center">
          <img className="w-30 md:w-50" src={doctorImage} />
        </div>
        <div className="md:w-[70%]">
          <h1 className="text-center lg:text-left font-primary font-extrabold text-[20px] sm:text-[28px]">
            {name}
          </h1>
          <p className="text-center lg:text-left font-primary font-medium text-[14px] sm:text-[18px] opacity-60">
            {education}
          </p>
          <p className="text-center lg:text-left font-primary font-medium text-[14px] sm:text-[18px] opacity-60">
            {speciality}
          </p>
          <p className="text-center lg:text-left font-primary font-medium text-[14px] sm:text-[18px] opacity-60">
            Working at
          </p>
          <p className="text-center lg:text-left font-primary font-bold text-[14px] sm:text-[18px]">
            {workPlace}
          </p>
          <div className="border mt-4 mb-4 border-dashed border-[rgba(15,15,15,0.2)]"></div>
          <p className="text-center font-primary font-medium opacity-60">{`\u00AE ${registrationNumber}`}</p>
          <div className="border mt-4 mb-4 border-dashed border-[rgba(15,15,15,0.2)]"></div>
          <div className="space-y-3">
            <div className="flex flex-col md:flex-row gap-3 items-center">
              <h1 className="font-primary font-bold text-[16px]">
                Available:{" "}
              </h1>
              <div className="flex gap-4">
                {availability.map((day, i) => (
                  <p
                    key={i}
                    className="text-[11px] md:text-[14px] font-primary font-medium py-1.75 px-3.5 text-orange-500 rounded-full bg-orange-100 border"
                  >
                    {day}
                  </p>
                ))}
              </div>
            </div>
            <p className="text-center lg:text-left font-primary font-bold">
              Consultation Fee: <span className="text-blue-600">Taka</span>{" "}
              {fee} <span className="opacity-40">(incl. Vat)</span>{" "}
              <span className="text-blue-600">Per consultation</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-3xl py-12.5 px-4 sm:px-25 space-y-5">
        <div className="flex justify-between items-center">
          <p>Availablity: </p>
          <p
            className={`text-[11px] md:text-[14px] font-primary font-medium py-1.75 px-3.5 rounded-full border ${
              isAvailableToday
                ? "text-green-700 bg-[rgba(9,152,47,0.1)]"
                : "text-red-700 bg-[rgba(229,23,23,0.1)]"
            }`}
          >
            {isAvailableToday ? "Available" : "Unavailable"}
          </p>
        </div>
        <div className="flex justify-center">
          <Link
            to="/my-bookings"
            onClick={() => handleBooking(id)}
            disabled={!isAvailableToday}
            className={`btn border-none w-full rounded-4xl font-primary font-bold ${
              isAvailableToday
                ? "bg-[#176AE5] text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DocDetail;
