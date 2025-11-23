import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const HeroSection = () => {
  const images = [
    'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg',
    'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg',
    'https://images.pexels.com/photos/4143795/pexels-photo-4143795.jpeg',
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className='relative w-full h-[80vh] rounded-2xl overflow-hidden shadow-xl'>
      <img
        src={images[index]}
        alt='study'
        className='w-full h-full object-cover transition-all duration-700 ease-in-out'
      ></img>

      <div className='absolute inset-0 bg-black/50'></div>

      <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-6'>
        <h1 className='text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg'>
          Learn With the Right People
        </h1>

        <p className='text-gray-200 text-lg md:text-xl mt-4 max-w-2xl'>
          Build meaningful study connections, collaborate in real time,
          and empower your learning journey.
        </p>

        <Link to='/login'>
          <button className='mt-6 px-8 py-3 bg-white/20 backdrop-blur-lg border border-white/30 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-white/30 transition'>
            Get Started
          </button>
        </Link>
      </div>

      <div className='absolute bottom-6 left-1/2 -translate-x-1/2 w-10/12 md:w-8/12 bg-white/20 backdrop-blur-lg border border-white/30 py-4 px-6 rounded-xl flex flex-col md:flex-row items-center justify-between text-white shadow-lg'>
        <div className='flex flex-col items-center md:items-start'>
          <h3 className='text-xl font-bold'>10,000+</h3>
          <p className='text-sm opacity-80'>Active Students</p>
        </div>

        <div className='flex flex-col items-center md:items-start'>
          <h3 className='text-xl font-bold'>4.9/5</h3>
          <p className='text-sm opacity-80'>User Ratings</p>
        </div>

        <div className='flex flex-col items-center md:items-start'>
          <h3 className='text-xl font-bold'>1500+</h3>
          <p className='text-sm opacity-80'>Study Sessions</p>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;
