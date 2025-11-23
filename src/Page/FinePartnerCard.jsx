import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router';

const FinePartnerCard = ({partner}) => {
    const {id, name, profileimage, subject, rating, studyMode, experienceLevel} = partner;
    return (
      <div className='w-11/12 mx-auto flex justify-center py-6'>
  <div className='card w-80 bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100'>

    <figure className='relative'>
      <img
        src={profileimage}
        alt={name}
        className='w-full h-60 object-cover'
      />
      <span className='absolute flex items-center bottom-3 right-3 bg-linear-to-r from-green-400 to-blue-500 text-white px-3 py-1 text-sm rounded-full shadow-md'>
        <FaStar /> {rating}
      </span>
    </figure>

    <div className='card-body p-5'>
      <h2 className='text-2xl font-semibold text-gray-800 mb-1'>
        Name:- {name}
      </h2>
      <p className='text-gray-500 mb-3'>Subject:- {subject}</p>

      <div className='border-t my-2 border-gray-200'></div>

      <div className='flex flex-wrap gap-2 mt-3'>
        <span className='bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full font-medium'>
          {experienceLevel}
        </span>
        <span className='bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full font-medium'>
          {studyMode}
        </span>
      </div>

      <div className='mt-5 text-center'>
    <Link to={`/partner/${id}`}>
        <button className='px-5 py-2 bg-linear-to-r from-green-400 to-blue-500 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-md'>
            View Profile
          </button>
     </Link>
      </div>
    </div>

  </div>
</div>
    );
};

export default FinePartnerCard;