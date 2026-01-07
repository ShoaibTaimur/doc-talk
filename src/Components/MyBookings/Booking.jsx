import React from "react";

const Booking = ({ doc = {} }) => {
  const { name } = doc ?? {};

  return (
    <div>
      <h1>{name ?? "Unknown doctor"}</h1>
    </div>
  );
};

export default Booking;
