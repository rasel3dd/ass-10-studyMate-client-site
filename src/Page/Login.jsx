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

        fetch('http://localhost:5000/users', {
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

        fetch('http://localhost:5000/users', {
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
    </div>
  );
};

export default Login;
