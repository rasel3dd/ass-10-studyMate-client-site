import React from 'react';

const Loading = () => {
    return (
        <div className='flex items-center justify-center h-screen bg-white'>
      <div className='flex flex-col items-center'>
     
        <div className='w-14 h-14 border-4 border-green-500 border-t-transparent rounded-full animate-spin'></div>

        <p className='mt-4 text-lg font-semibold text-gray-600 animate-pulse'>
          Loading...
        </p>
      </div>
    </div>
    );
};

export default Loading;