import React, {  useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider';


const Login = () => {
  const [resetMessage, setResetMessage] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] =useState("");
  const {signIn, signInGoogle, resetPassword} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleForget = () =>{
const email = prompt("Password reset email sent! Check your inbox.");
if (!email) return;
resetPassword(email)
.then(() => {
        setResetMessage("Password reset email sent! Check your inbox.");
        setError("");
        toast.success('Your password reset successful');
      })
      .catch((err) => {
        setError(err.message);
        setResetMessage("");
      });

  };
  const handleGoogle = () =>{
signInGoogle().then(result => {
    const user = result.user;
    
    toast.success('Your password Google sing in successful');
    setTimeout(() =>{
      navigate(`${location.state ? location.state : "/"}`);
    },1500);
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode, errorMessage);
    // ..
    });

  };
  const handleLogin = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    signIn(email, password)
    .then(result => {
      const newUser = {
        name: result.user.displayName,
        email: result.user.email,
        image: result.user.photoURL,
      }

      fetch('http://localhost:5000/users', {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newUser)

      })
      .then (res => res.json())
      .then(data =>{
        console.log(data)
      })


    const user = result.user;
    toast.success('Your password sing in successful');
    setTimeout(() => {
  navigate(location.state ? location.state : "/");
}, 1500);
    
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode, errorMessage);
    // ..
    });

  };
    return (
         <div className='flex justify-center items-center min-h-screen'>
          <form onSubmit={handleLogin} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className='text-xl text-center font-semibold pt-5'> <span className='text-green-500'>Welcome</span> Login Your Account</h1>
      <div className="card-body ">
        <fieldset className="fieldset ">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required />
          <label className="label">Password</label>
          <div className='relative'>
            <input
           name='password'
            type={show ? "text" : "password"} 
            className="input" placeholder="Password" required />
          <span
          onClick={() => setShow(!show)}
          className='absolute right-7 top-3 cursor-pointer '> 
            {
              show ? <FaEyeSlash /> : <FaEye />
            }
            
          </span>
          </div>
          <div><button onClick={handleForget} type='button' className="link link-hover">Forgot password?</button></div>
          {
            error && <p className='text-red-500 text-sm'>{error}</p>
          }
          {
            resetMessage && <p className='text-green-600 text-sm'>{resetMessage}</p>
          }
         

          <button type='submit' className="btn btn-neutral mt-4">Login</button>
          <button 
          type='button'
          onClick={handleGoogle}
          className='btn btn-success btn-outline w-full cursor-pointer'
          > <FcGoogle size={24} /> Login with Google</button>
           <div className='flex justify-center items-center mt-4'>
            <p>Don't ave account ? Create an account click - </p>
           <Link to='/register'>
          <button className='text-sm text-red-500 font-medium'>Register</button>
          </Link>
          </div>
         
        </fieldset>
      </div>
    </form>
    <ToastContainer />
         </div>
    );
};

export default Login;