import React, { useContext } from 'react';
import { BookingContext } from '../../App';
import Booking from './Booking';
import { useLoaderData } from 'react-router';


const MyBookings = () => {
    const docInfo = useLoaderData();
    const { bookings } = useContext(BookingContext);
    const bookingIds = bookings.map((booking) => Number(booking));
    const bookedDocs = docInfo.filter((doc) => bookingIds.includes(doc.id));
    return (
        <div>
            <h1 className='font-primary font-extrabold text-[30px]'>My Today Appointments</h1>
            <p className='font-primary opacity-60'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            <div>
                {
                    bookedDocs.map(doc => <Booking key={doc.id} doc={doc}></Booking>)
                }
            </div>
        </div>
    );
};

export default MyBookings;
