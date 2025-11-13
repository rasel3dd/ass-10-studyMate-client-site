import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

const slides = [
  {
    id: 1,
    title: "Find Your Perfect Study Partner",
    description:
      "Connect with learners who share your goals and grow together through collaboration.",
    
  },
  {
    id: 2,
    title: "Collaborate Anytime, Anywhere",
    description:
      "Join virtual sessions and share knowledge across the globe with ease.",
    
  },
  {
    id: 3,
    title: "Build a Strong Learning Network",
    description:
      "Find connections that empower your learning journey and inspire progress.",
    
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[85vh] overflow-hidden rounded-xl shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />

          
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-6">
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-white text-4xl md:text-6xl font-bold mb-4"
            >
              {slides[current].title}
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-gray-200 text-lg md:text-xl max-w-2xl mb-6"
            >
              {slides[current].description}
            </motion.p>
            <Link to='/login'>
             <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-linear-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-md"
            >
              Get Started
            </motion.button>
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>

      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-white w-6" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
