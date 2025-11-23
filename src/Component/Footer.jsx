import React from 'react';
import { ImFacebook2 } from "react-icons/im";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
 <footer class='w-full bg-green-950  rounded-t-2xl py-6'>
    
    <div class='w-11/12 mx-auto grid md:grid-cols-4 gap-10'>

      <div class='flex flex-col gap-3'>
        <h2 class='text-3xl md:text-4xl font-extrabold text-green-400 '>StudyMate</h2>
        <p class='text-white/70 text-sm md:text-base max-w-sm'>
          Connect, collaborate, and grow smarter with the right study partners. Build your learning network today.
        </p>
      </div>

      <div class='flex flex-col gap-2 text-white/80'>
        <h3 class='text-lg font-semibold mb-2'>Quick Links</h3>
        <a class='hover:text-green-400 transition'>About Us</a>
        <a class='hover:text-green-400 transition'>Contact</a>
        <a class='hover:text-green-400 transition'>Jobs</a>
        <a class='hover:text-green-400 transition'>Press Kit</a>
      </div>

      <div class='flex flex-col gap-2 text-white/80'>
        <h3 class='text-lg font-semibold mb-2'>Resources</h3>
        <a class='hover:text-green-400 transition'>Blog</a>
        <a class='hover:text-green-400 transition'>FAQs</a>
        <a class='hover:text-green-400 transition'>Support</a>
        <a class='hover:text-green-400 transition'>Privacy Policy</a>
      </div>

      
      <div>
        <h3 class='text-lg font-semibold mb-3 text-white/90'>Follow Us</h3>
        <div class='flex gap-5'>

          <a class='p-3 bg-white rounded-full shadow hover:bg-green-100 transition'>
            <FaXTwitter />
          </a>

          <a class='p-3 bg-white rounded-full shadow hover:bg-green-100 transition'>
            <FaYoutubeSquare />
          </a>

       
          <a class='p-3 bg-white rounded-full shadow hover:bg-green-100 transition'>
           <ImFacebook2 />
          </a>
        </div>
      </div>

    </div>

    <div class='w-11/12 mx-auto mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6'>
      
      <div class='bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 text-center shadow-lg hover:scale-105 transition transform'>
        <h3 class='text-2xl font-bold text-green-400'>10,000+</h3>
        <p class='text-white/70 mt-1 text-sm'>Active Students</p>
      </div>

      <div class='bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 text-center shadow-lg hover:scale-105 transition transform'>
        <h3 class='text-2xl font-bold text-green-400'>4.9/5</h3>
        <p class='text-white/70 mt-1 text-sm'>User Ratings</p>
      </div>

      <div class='bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 text-center shadow-lg hover:scale-105 transition transform'>
        <h3 class='text-2xl font-bold text-green-400'>1500+</h3>
        <p class='text-white/70 mt-1 text-sm'>Study Sessions</p>
      </div>

    </div>
    <div class='text-center text-white/60 mt-16 border-t border-white/20 pt-6'>
      <p>© {new Date().getFullYear()} StudyMate — All Rights Reserved</p>
    </div>

  </footer>



    );
};

export default Footer;