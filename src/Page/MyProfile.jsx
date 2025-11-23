import React, { useContext } from 'react';

import profileImg from '../Image/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const MyProfile = () => {
    const {user} = useContext(AuthContext);
    if (!user){
        return(
            <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600">Please log in to view your profile.</p>
      </div>
        );
    }
    return (
        <div>
  <div className='flex justify-center items-center min-h-screen bg-gray-50'>
    <div className='bg-white rounded-2xl shadow-lg p-8 text-center w-full max-w-sm'>
      <img
        src={user.photoURL || {profileImg}}
        alt='User'
        className='w-28 h-28 mx-auto rounded-full object-cover border-4 border-green-200 shadow'
      />

      <h2 className='text-2xl font-semibold mt-4 text-gray-800'>
        {user.displayName || 'No Name'}
      </h2>

      <p className='text-gray-500 text-sm mt-1'>
        {user.email || 'No email found'}
      </p>

      <div className='flex justify-between items-center mt-8'>
        <button className='btn bg-green-300'>
          Update Profile
        </button>

        <Link to='/'>
          <button className='btn btn-neutral'>
            Go Home
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>
    );
};

export default MyProfile;