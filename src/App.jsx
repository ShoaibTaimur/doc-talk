import React, { Suspense, useState } from "react";
import { Outlet } from "react-router";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { BookingContext } from "./context/BookingContext";

function App() {
  const [bookings, setBookings] = useState([]);

  const handleBooking = (id) => {
    let flag = 0;
    for (let booking of bookings) {
      if (booking === id) {
        flag = 1;
      } else {
        flag = 0;
      }
    }
    if (flag == 0) {
      const newBooking = [...bookings, id];
      setBookings(newBooking);
    }
  };

  return (
    <Suspense
      fallback={<span className="loading loading-infinity loading-xl"></span>}
    >
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <BookingContext.Provider value={{ bookings, handleBooking }}>
          <div className="flex-1">
            <Outlet />
          </div>
        </BookingContext.Provider>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
