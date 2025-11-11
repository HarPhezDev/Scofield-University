import React from "react";
import { motion } from "framer-motion";
import HeroBg from './img/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      className="h-screen w-full sm:px-16 md:px-24 lg:px-32 flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 123, 255, 0.25), rgba(0, 123, 255, 0.25)), url(${HeroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Your Future Starts Here
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Empowering your journey with technology and innovation
        </motion.p>

        <motion.button
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold transition duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
