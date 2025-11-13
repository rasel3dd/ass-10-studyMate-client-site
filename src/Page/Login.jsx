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
     const newUser = {
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        };
           fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newUser),
        });
         localStorage.setItem("user", JSON.stringify(newUser));
    
    toast.success('Your password Google sing in successful');
    setTimeout(() =>{
      navigate(`${location.state ? location.state : '/'}`);
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
    localStorage.setItem("user", JSON.stringify(newUser));
    toast.success('Your password sing in successful');
    setTimeout(() =>{
      navigate(`${location.state ? location.state : '/'}`);
    },1500);
    
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode, errorMessage);
    // ..
    });

  };
    return (
         <div class='min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200 px-4'>
  <form
    onSubmit={handleLogin}
    class='bg-white/90 backdrop-blur-sm w-full max-w-md shadow-2xl rounded-2xl overflow-hidden'
  >
    <div class='p-8'>
      <h1 class='text-2xl font-bold text-center mb-6'>
        <span class='text-green-500'>Welcome</span> — Login to Your Account
      </h1>

      <div class='form-control mb-4'>
        <label class='label'>
          <span class='label-text font-medium'>Email</span>
        </label>
        <input
          name='email'
          type='email'
          placeholder='Enter your email'
          class='input input-bordered w-full'
          required
        />
      </div>

      <div class='form-control mb-2'>
        <label class='label'>
          <span class='label-text font-medium'>Password</span>
        </label>
        <div class='relative'>
          <input
            name='password'
            type={show ? 'text' : 'password'}
            placeholder='Enter your password'
            class='input input-bordered w-full pr-10'
            required
          />
          <span
            onClick={() => setShow(!show)}
            class='absolute right-3 top-3 text-gray-500 hover:text-gray-700 cursor-pointer'
          >
            {show ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      </div>

      <div class='text-right mb-3'>
        <button
          type='button'
          onClick={handleForget}
          class='text-sm text-blue-600 hover:underline'
        >
          Forgot password?
        </button>
      </div>

      {error && <p class='text-red-500 text-sm mb-2'>{error}</p>}
      {resetMessage && <p class='text-green-600 text-sm mb-2'>{resetMessage}</p>}

      <button type='submit' class='btn btn-neutral w-full mt-2'>
        Login
      </button>

      <div class='divider text-sm text-gray-400'>OR</div>

      <button
        type='button'
        onClick={handleGoogle}
        class='btn btn-outline btn-success w-full flex items-center justify-center gap-2'
      >
        <FcGoogle size={22} /> Login with Google
      </button>

      <div class='mt-6 text-center text-sm'>
        <p class='text-gray-600'>
          Don't have an account?{' '}
          <Link to='/register' class='text-red-500 hover:underline font-medium'>
            Register here
          </Link>
        </p>
      </div>
    </div>
  </form>

  <ToastContainer position='top-center' autoClose={1500}/>
</div>

    );
};

export default Login;