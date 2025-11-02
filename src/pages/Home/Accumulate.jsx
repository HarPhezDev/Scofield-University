import React, { useEffect, useState } from 'react';
import { GraduationCap, Briefcase, Clock4, LampWallUp } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';

const Accumulate = () => {
  const stats = [
    { id: 1, icon: <GraduationCap size={45} className="text-white mb-2" />, number: 400, label: 'Total Courses' },
    { id: 2, icon: <Briefcase size={45} className="text-white mb-2" />, number: 120, label: 'Expert Lecturers' },
    { id: 3, icon: <Clock4 size={45} className="text-white mb-2" />, number: 1000, label: 'Active Students' },
    { id: 4, icon: <LampWallUp size={45} className="text-white mb-2" />, number: 50, label: 'Departments' },
  ];

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('accumulate-section');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 150 && !visible) setVisible(true);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();  
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible]);

  return (
    <section
      id="accumulate-section"
      className="w-full bg-[#1227e2] py-20 flex flex-col justify-center items-center"
    >
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center w-[90%] max-w-6xl">
        {stats.map((item, index) => (
          <AnimatedStat
            key={item.id}
            icon={item.icon}
            targetNumber={item.number}
            label={item.label}
            visible={visible}
            delay={index * 0.2}
            showRightBorder={index !== stats.length - 1 && index !== 1}  
          />
        ))}
      </div>
    </section>
  );
};

const AnimatedStat = ({ icon, targetNumber, label, visible, delay, showRightBorder }) => {
  const controls = useAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (visible) {
      controls.start({ opacity: 1, y: 0, transition: { delay, duration: 0.6 } });
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = targetNumber / (duration / 20);

      const counter = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          start = targetNumber;
          clearInterval(counter);
        }
        setCount(Math.floor(start));
      }, 20);
    }
  }, [visible, controls, targetNumber, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      className={`flex flex-col items-center justify-center text-white px-4 py-4 ${
        showRightBorder ? 'md:border-r-4 border-[#ffffff40]' : ''
      }`}
    >
      {icon}
      <h1 className="text-5xl font-bold mb-1">{count}</h1>
      <p className="text-sm opacity-90">{label}</p>
    </motion.div>
  );
};

export default Accumulate;
