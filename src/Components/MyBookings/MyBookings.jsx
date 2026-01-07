import Booking from "@/Components/MyBookings/Booking";
import NotFound from "@/Components/Utilities/NotFound";
import { BookingContext } from "@/context/BookingContext";
import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import Charts from "../Charts/Charts";

const MyBookings = () => {
  const docInfo = useLoaderData() ?? [];
  const { bookings } = useContext(BookingContext);

  const bookingIds = bookings.map((booking) => Number(booking));
  const bookedDocs = docInfo.filter((doc) => bookingIds.includes(doc.id));

  return (
    <div className="space-y-4 mt-4 mb-10">
      <Charts bookedDocs={bookedDocs} />
      <h1 className="text-center font-primary font-extrabold text-[20px] md:text-[30px]">
        My Today Appointments
      </h1>
      <p className="text-center text-[15px] md:text-[25px] font-primary opacity-60">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.
      </p>
      <div className="space-y-5">
        {bookedDocs?.length > 0 ? (
          bookedDocs?.map((doc) => <Booking key={doc?.id} doc={doc} />)
        ) : (
          <NotFound
            title="No appointments found"
            message="You haven't booked any appointments yet. Browse our doctors and schedule your first visit."
          />
        )}
      </div>
    </div>
  );
};

export default MyBookings;
