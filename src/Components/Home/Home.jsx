import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router';
import DocContainer from '../Doclist/DocContainer';

const Home = () => {
    const docInfoData=useLoaderData();
    
    return (
        <div className='bg-[#ebebeb] space-y-15 mt-6 mb-6'>
            <Banner></Banner>
            <DocContainer docInfoData={docInfoData}></DocContainer>
        </div>
    );
};

export default Home;