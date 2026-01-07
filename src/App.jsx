import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { createContext, Suspense } from 'react'
import React, { useState } from 'react';

export const BookingContext = createContext("");


function App() {
  const [bookings, setBookings] = useState([]);

  const handleBooking = (id) => {
    let flag = 0;
    for (let booking of bookings) {
      if (booking === id) {
        flag = 1;
      }
      else {
        flag = 0;
      }
    }
    if (flag == 0) {
      const newBooking = [...bookings, id];
      setBookings(newBooking);
    }
  }

  return (
    <>
      <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
        <Navbar></Navbar>
        <BookingContext.Provider value={{ bookings, handleBooking }}>
          <Outlet></Outlet>
        </BookingContext.Provider>
        <Footer></Footer>
      </Suspense>
    </>
  )
}

export default App
