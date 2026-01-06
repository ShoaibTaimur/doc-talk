import React from 'react';

const DocList = ({ doc }) => {
    const { availability, experience, name, education, registrationNumber, doctorImage } = doc;


    return (
        <div className='bg-white p-6 rounded-3xl space-y-6'>
            <div className='flex justify-center'>
                <img className='w-50 lg:w-62.5 rounded-3xl' src={doctorImage} alt="" />
            </div>
            <div>
                <div className='flex gap-4 items-center'>
                    <p className='text-[11px] md:text-[14px] font-primary font-medium py-1.75 px-3.5 text-green-700 rounded-full bg-[rgba(9,152,47,0.1)] border'>Available</p>
                    <p className='text-[11px] md:text-[14px] font-primary font-medium py-1.75 px-3.5 text-blue-700 rounded-full bg-[rgba(23,106,229,0.1)] border'>{experience}+ Experience</p>
                </div>
                <div>
                    <h1 className='font-primary font-extrabold text-[20px] md:text-[24px]'>{name}</h1>
                    <p className='font-primary text-[12px] md:text-[15px] font-medium opacity-60'>{education}</p>
                    <div className='border m-3 border-dashed border-[rgba(15,15,15,0.2)]'></div>
                    <p className='font-primary font-medium opacity-60'>{`\u00AE ${registrationNumber}`}</p>
                </div>
            </div>
            <div>
                <button
                    type="button"
                    className="w-full btn pt-1 pb-1 rounded-4xl font-primary font-bold text-[15px] md:text-[20px] text-blue-800 border border-blue-800 active:bg-blue-800 active:text-white active:border-blue-800"
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

export default DocList;
