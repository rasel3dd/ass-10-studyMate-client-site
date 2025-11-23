import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2';

import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const [show, setShow] = useState(false);
  const { signIn, signInGoogle, resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleForget = () => {
    const email = prompt("Enter your email to reset password:");

    if (!email) return;

    resetPassword(email)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Reset Email Sent!',
          text: 'Check your inbox to reset password.',
          timer: 1800,
          showConfirmButton: false
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong!',
          text: err.message
        });
      });
  };

  const handleGoogle = () => {
    signInGoogle()
      .then(result => {
        const user = result.user;

        const newUser = {
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        };

        fetch("https://study-mate-bice.vercel.app/users", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newUser),
        });

        localStorage.setItem("user", JSON.stringify(newUser));

        Swal.fire({
          icon: 'success',
          title: 'Google Login Successful!',
          timer: 1500,
          showConfirmButton: false
        });

        setTimeout(() => {
          navigate(location.state ? location.state : '/');
        }, 1500);
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed!',
          text: error.message
        });
      });
  };

  const handleLogin = (e) => {
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
        };

        fetch("https://study-mate-bice.vercel.app/users", {
          method: 'post',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(newUser)
        });

        localStorage.setItem("user", JSON.stringify(newUser));

        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          timer: 1500,
          showConfirmButton: false
        });

        setTimeout(() => {
          navigate(location.state ? location.state : '/');
        }, 1500);
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed!',
          text: error.message
        });
      });
  };

  return (
   <div className='min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200 px-4'>
  <form
    onSubmit={handleLogin}
    className='bg-white/90 backdrop-blur-sm w-full max-w-md shadow-2xl rounded-2xl overflow-hidden'
  >
    <div className='p-8'>
      <h1 className='text-2xl font-bold text-center mb-6'>
        <span className='text-green-500'>Welcome</span> — Login to Your Account
      </h1>

      <div className='form-control mb-4'>
        <label className='label'>
          <span className='label-text font-medium'>Email</span>
        </label>
        <input
          name='email'
          type='email'
          placeholder='Enter your email'
          className='input input-bordered w-full'
          required
        />
      </div>

      <div className='form-control mb-2'>
        <label className='label'>
          <span className='label-text font-medium'>Password</span>
        </label>
        <div className='relative'>
          <input
            name='password'
            type={show ? 'text' : 'password'}
            placeholder='Enter your password'
            className='input input-bordered w-full pr-10'
            required
          />
          <span
            onClick={() => setShow(!show)}
            className='absolute right-3 top-3 text-gray-500 hover:text-gray-700 cursor-pointer'
          >
            {show ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      </div>

      <div className='text-right mb-3'>
        <button
          type='button'
          onClick={handleForget}
          className='text-sm text-blue-600 hover:underline'
        >
          Forgot password?
        </button>
      </div>

      <button type='submit' className='btn btn-neutral w-full mt-2'>
        Login
      </button>

      <div className='divider text-sm text-gray-400'>OR</div>

      <button
        type='button'
        onClick={handleGoogle}
        className='btn btn-outline btn-success w-full flex items-center justify-center gap-2'
      >
        <FcGoogle size={22} /> Login with Google
      </button>

      <div className='mt-6 text-center text-sm'>
        <p className='text-gray-600'>
          Don't have an account?{' '}
          <Link to='/register' className='text-red-500 hover:underline font-medium'>
            Register here
          </Link>
        </p>
      </div>
    </div>
  </form>
</div>

  );
};

export default Login;
