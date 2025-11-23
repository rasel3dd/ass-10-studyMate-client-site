import React, { use } from 'react';
import StudyCard from '../Component/StudyCard';
import { Link } from 'react-router';

const StudyList = ({partnerListPromise}) => {
    const partners = use(partnerListPromise);
    
    return (
       <div>
        <h1 className='text-center text-3xl font-bold pt-7'>Our <span className='text-red-500'>Top</span> Study Partner</h1>
        <div className="divider divider-success"></div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 space-y-4'>
            
            {
            partners.map(partner => <StudyCard key={partner._id} partner={partner}></StudyCard>)
            }
        </div>
        <Link to='/find-partner'>
        <div className='flex justify-center items-center '>
            <button className='btn p-5  bg-linear-to-r from-green-600 to-blue-700  text-white text-xl 
            rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-md '>Find More Partners</button>
        </div>
        </Link>
       </div>
       
    );
};

export default StudyList;