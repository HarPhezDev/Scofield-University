import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import your images
import Med from "./img/FacultyOfMedcine.png";
import Lib from "./img/bg2.png";

const slides = [
  { id: 2, image: Med, title: "Medicine & Surgery" },
  { id: 5, image: Lib, title: "University Library" },
];

const CampusView = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="w-full bg-gray-100 py-12 md:py-16">
      {/* Header */}
      <div className="text-center mb-8">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl sm:text-2xl md:text-3xl font-bold text-[#1227e2] uppercase tracking-wide"
        >
          Campus View
        </motion.h1>
        <div className="w-24 h-1 bg-[#1227e2] mx-auto mt-3 rounded-full" />
      </div>

      {/* Slider */}
      <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[85vh] overflow-hidden shadow-xl ">
        {/* Background images */}
        <AnimatePresence>
          {slides.map((slide, index) =>
            index === current ? (
              <motion.img
                key={slide.id}
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            ) : null
          )}
        </AnimatePresence>

        {/* Overlay + Animated Text */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold drop-shadow-lg">
                SCOFIELD UNIVERSITY
              </h1>
              <p className="mt-3 text-sm sm:text-base md:text-xl italic">
                {slides[current].title}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <motion.button
          onClick={prevSlide}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2 bg-white/40 hover:bg-white/70 rounded-full transition"
        >
          <ChevronLeft size={22} className="text-black" />
        </motion.button>

        <motion.button
          onClick={nextSlide}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2 bg-white/40 hover:bg-white/70 rounded-full transition"
        >
          <ChevronRight size={22} className="text-black" />
        </motion.button>

        {/* Dots */}
        <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <motion.div
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer ${
                i === current ? "bg-white" : "bg-white/50"
              }`}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusView;
