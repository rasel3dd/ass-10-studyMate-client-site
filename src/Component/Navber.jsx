import React, { useContext, } from 'react';
import { Link, NavLink } from 'react-router';

import userImg from '../Image/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'
import navImag from '../Image/121271_3589171_497358_image.jpg'
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {
  
    const {user, logOut } = useContext(AuthContext);


    const handleLogOut = () =>{
      logOut().then(()=>{
        toast.success("you log out successful");

      }).catch((error) =>{
        console.log(error);

      });

    }
    return (
        <div className='w-11/12 mx-auto flex justify-between items-center'>
          
          <div className='flex justify-center items-center'>
            <img className='w-25' src={navImag} alt="" />
            <h1 className='text-green-400 font-bold text-xl'>Tree plant</h1>
          </div>
            
            
            
            <div className='flex gap-5'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/profile">My Profile</NavLink>
                <NavLink to="/connections">My Connection</NavLink>
                <NavLink to="/partner">Fine Partner</NavLink>
                <NavLink to="/create">Create Partner Profile</NavLink>
            </div>
            <div>{user && user.email}</div>
            <div className='flex items-center'>
                <Link to="/profile"><img className='w-12 h-12 rounded-full' src={`${user ? user.photoURL : userImg}`} alt="" /></Link>
                {
                  user ? <button onClick={handleLogOut} className='btn btn-primary px-10'>LogOut</button> : <Link to="/login" className='btn btn-primary px-10'>Log In</Link>
                }
                <ToastContainer></ToastContainer>
            </div>
    
        </div>
        
    );
};

export default Navbar;