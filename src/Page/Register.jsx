import React, {  useContext, useState } from 'react';

import { useNavigate } from 'react-router';
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
        <div className='flex justify-center items-center min-h-screen'>
          
            
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
        <h1 className='text-xl text-center font-semibold pt-5'> Create A Your Account</h1>
        <fieldset className="fieldset">
        <label className="label">Name</label>
          <input name='name' type="text" className="input" placeholder="Name" required/>
          {
            nameError && <p>
              {nameError}
            </p>
          }
          <label className="label">Photo Url</label>
          <input name='photo' type="text" className="input" placeholder="Photo Url" required />
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required />
          <label className="label">Password</label>
          <div className='relative'>
            <input
           name='password'
            type={show ? "text" : "password"}
             className="input" placeholder="Password" required />
             <span  onClick={() => setShow(!show)}
          className='absolute right-7 top-3 cursor-pointer '>
            {
              show ? <FaEyeSlash /> : <FaEye />
          }
          </span>
          </div>
          {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>)
          }
          <button type='submit' className="btn btn-neutral mt-4">register</button>
        </fieldset>
      </form>
    </div>
    <ToastContainer />
  </div>

        
    );
};

export default Register;