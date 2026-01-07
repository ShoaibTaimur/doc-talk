import React, { useContext } from "react";
import { BookingContext } from "../../context/BookingContext";

const Booking = ({ doc = {} }) => {
  const { removeBooking } = useContext(BookingContext);
  const { id, name, workPlace, education, fee } = doc;

  return (
    <div className="bg-white p-4 sm:p-8 mx-5 sm:mx-10 lg:mx-25 rounded-3xl">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-primary font-bold text-[14px] md:text-[20px]">{name}</h1>
          <p className="font-primary font-medium text-[10px] md:text-[18px] opacity-60">{education}{workPlace}</p>
        </div>
        <div>
          <p className="font-primary font-medium text-[10px] md:text-[18px] opacity-60">Appointment Fee:{fee} +Vat</p>
        </div>
      </div>
      <div className="border mt-4 mb-4 border-dashed border-[rgba(15,15,15,0.2)]"></div>
      <div>
        <button
          type="button"
          className="w-full btn pt-1 pb-1 rounded-4xl font-primary font-bold text-[15px] md:text-[20px] text-red-600 border border-red-600 active:bg-red-600 active:text-white"
          onClick={() => removeBooking(id)}
        >
          Cancal Appointment
        </button>
      </div>
    </div>
  );
};

export default Booking;
