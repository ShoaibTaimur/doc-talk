import React from 'react';

const Banner = () => {
    return (
        <div className='py-16 mx-10 lg:mx-35 flex flex-col items-center gap-5 bg-linear-to-b from-[#ebebeb] to-white rounded-3xl border-3 border-white'>
            <h1 className='px-5 text-center font-primary font-extrabold text-[25px] lg:text-[40px]'>Dependable Care, Backed by Trusted Professionals.</h1>
            <p className='px-5 sm:p-0 sm:w-100 md:w-150 lg:w-175 font-primary text-[12px] lg:text-[16px] font-medium opacity-80 text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div className='flex justify-center gap-5'>
                <img className='h-40 sm:h-50 md:h-62.5' src="banner-img-1.png" alt="" />
                <img className='h-62.5 hidden xl:flex' src="banner-img-1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;