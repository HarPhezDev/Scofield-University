import React from 'react';
import { motion } from 'framer-motion';
import background from './img/bg2.png';

const Hero = () => {
  return (
    <section
      className="mt-24 bg-cover bg-center h-[650px] flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${background})`,
      }}
    >
      <div className="text-center">
        <motion.h1
          className="md:text-5xl sm:text-4xl font-bold text-white font-poppins"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Welcome to Scofield University
        </motion.h1>

    
        <motion.p
          className="text-white mt-3 text-lg tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
        >
          EMPOWERING MINDS, INSPIRING EXCELLENCE
        </motion.p>

 
        <motion.button
          className="bg-[#1227e2] text-white px-6 py-3 rounded-2xl mt-6 font-medium hover:bg-blue-700 transition"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          APPLY NOW
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
