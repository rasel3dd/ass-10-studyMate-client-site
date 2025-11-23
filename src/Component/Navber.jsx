import React, { useContext } from "react";
import { Link, NavLink } from "react-router";

import userImg from "../Image/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg";
import navImag from "../Image/121271_3589171_497358_image.jpg";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("you log out successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className='w-full bg-linear-to-r from-green-50 to-white shadow-lg'>
  <div className='w-11/12 mx-auto py-4 flex items-center justify-between'>
    <div className='flex items-center gap-3'>
      <div className='p-1 rounded-xl bg-white shadow-inner'>
        <img src={navImag} alt='' className='w-14 h-14 rounded-xl shadow-md' />
      </div>
      <h1 className='text-3xl font-extrabold bg-linear-to-r from-green-600 to-green-800 text-transparent bg-clip-text'>
        StudyMate
      </h1>
    </div>

    <div className='hidden md:flex gap-4 text-lg font-medium'>
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive
            ? 'text-green-700 font-semibold pb-1 border-b-2 border-green-700'
            : 'hover:text-green-600 hover:scale-105 transition-all'
        }
      >
        Home
      </NavLink>

      <NavLink
        to='/find-partner'
        className={({ isActive }) =>
          isActive
            ? 'text-green-700 font-semibold pb-1 border-b-2 border-green-700'
            : 'hover:text-green-600 hover:scale-105 transition-all'
        }
      >
        Find Partners
      </NavLink>

      {user && (
        <div className='flex items-center gap-4'>
          <NavLink
            to='/profile'
            className={({ isActive }) =>
              isActive
                ? 'text-green-700 font-semibold pb-1 border-b-2 border-green-700'
                : 'hover:text-green-600 hover:scale-105 transition-all'
            }
          >
            My Profile
          </NavLink>

          <NavLink
            to='/connections'
            className={({ isActive }) =>
              isActive
                ? 'text-green-700 font-semibold pb-1 border-b-2 border-green-700'
                : 'hover:text-green-600 hover:scale-105 transition-all'
            }
          >
            Connections
          </NavLink>

          <NavLink
            to='/createProfile'
            className={({ isActive }) =>
              isActive
                ? 'text-green-700 font-semibold pb-1 border-b-2 border-green-700'
                : 'hover:text-green-600 hover:scale-105 transition-all'
            }
          >
            Create Profile
          </NavLink>
        </div>
      )}
    </div>

    <div className='flex items-center gap-5'>
      <p className='hidden md:block text-sm text-gray-700'>
        {user && user.email}
      </p>

      <Link to='/profile'>
        <img
          src={user ? user.photoURL : userImg}
          alt=''
          className='w-12 h-12 rounded-full border-2 border-green-600 shadow-md hover:scale-105 transition'
        />
      </Link>

      {user ? (
        <button
          onClick={handleLogOut}
          className='px-6 py-2 rounded-xl bg-green-600 text-white font-semibold shadow hover:bg-green-700 hover:shadow-lg transition-all'
        >
          Logout
        </button>
      ) : (
        <Link
          to='/login'
          className='px-6 py-2 rounded-xl bg-green-600 text-white font-semibold shadow hover:bg-green-700 hover:shadow-lg transition-all'
        >
          Login
        </Link>
      )}
    </div>

    <ToastContainer></ToastContainer>
  </div>
</div>

  );
};

export default Navbar;
