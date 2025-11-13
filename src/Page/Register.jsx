import React, {  useContext, useState } from 'react';

import { Link, useNavigate } from 'react-router';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
  const [show, setShow] = useState(false);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
    const { createUser, setUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleRegister = (e) =>{
     e.preventDefault();
     const form =e.target;
     const name = form.name.value;
     const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
     if (name.length <5 ){
      setNameError("Full fil Name (5 character)")
      return;
     }else{
      setNameError("");
     };
      const passwordValid =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|:;"'<>,.?/~`]).{8,}$/;

    if (!passwordValid.test(password)) {
      setPasswordError(
        "Password must be 8+ characters and include uppercase, lowercase, number & special character."
      );
      return;
    } else {
      setPasswordError("");
    }

    
     
     createUser(email, password).then((result) => {
        const user = result.user;
        updateUser({displayName: name, photoURL: photo}).then(() => {
          setUser({...user, displayName: name, photoURL: photo});
          
          toast.success('Your password sing up successful');
          setTimeout(() =>{
            navigate("/");
          }, 1500);
         })
      .catch((error) =>{
console.log(error);
setUser(user);
      });
})
     .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode, errorMessage);
    // ..
     
    });
};
    return (
        <div class='min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200 px-4'>
  <div class='bg-white/90 backdrop-blur-sm w-full max-w-md shadow-2xl rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]'>
    <form onSubmit={handleRegister} class='card-body p-8'>
      <h1 class='text-2xl font-bold text-center mb-6'>
        <span class='text-green-500'>Create</span> Your Account
      </h1>

      <fieldset class='fieldset space-y-3'>

        <div>
          <label class='label font-medium'>Name</label>
          <input
            name='name'
            type='text'
            class='input input-bordered w-full'
            placeholder='Enter your name'
            required
          />
          {nameError && (
            <p class='text-red-500 text-sm mt-1'>{nameError}</p>
          )}
        </div>

        
        <div>
          <label class='label font-medium'>Photo URL</label>
          <input
            name='photo'
            type='text'
            class='input input-bordered w-full'
            placeholder='Enter your photo URL'
            required
          />
        </div>

        
        <div>
          <label class='label font-medium'>Email</label>
          <input
            name='email'
            type='email'
            class='input input-bordered w-full'
            placeholder='Enter your email'
            required
          />
        </div>

        
        <div>
          <label class='label font-medium'>Password</label>
          <div class='relative'>
            <input
              name='password'
              type={show ? 'text' : 'password'}
              class='input input-bordered w-full pr-10'
              placeholder='Enter your password'
              required
            />
            <span
              onClick={() => setShow(!show)}
              class='absolute right-3 top-3 text-gray-500 hover:text-gray-700 cursor-pointer'
            >
              {show ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {passwordError && (
            <p class='text-red-500 text-sm mt-1'>{passwordError}</p>
          )}
        </div>

        
        <button type='submit' class='btn btn-neutral w-full mt-4'>
          Register
        </button>
      </fieldset>

      
      <div class='text-center mt-5 text-sm'>
        <p class='text-gray-600'>
          Already have an account?{' '}
          <Link to='/login' class='text-red-500 hover:underline font-medium'>
            Login here
          </Link>
        </p>
      </div>
    </form>
  </div>

  <ToastContainer />
</div>

        
    );
};

export default Register;