import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { BookingContext } from "../../context/BookingContext";
import NotFound from "../Utilities/NotFound";
import Booking from "./Booking";

const MyBookings = () => {
  const docInfo = useLoaderData() ?? [];
  const { bookings } = useContext(BookingContext);

  const bookingIds = (bookings ?? []).map((booking) => Number(booking));
  const bookedDocs = Array.isArray(docInfo)
    ? docInfo.filter((doc) => bookingIds.includes(doc?.id))
    : [];

  return (
    <div>
      <h1 className="font-primary font-extrabold text-[30px]">
        My Today Appointments
      </h1>
      <p className="font-primary opacity-60">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.
      </p>
      <div>
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
