import React from 'react';
import { motion } from 'framer-motion';
import { Clock4, Briefcase, GraduationCap, LampWallUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,  
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Programs = () => {
  const programData = [
    {
      icon: <Clock4 size={40} className="text-[#1227e2] mb-2" />,
      title: "Part-time Sandwich",
      desc: "Flexible learning that fits your schedule, combining work and study.",
    },
    {
      icon: <Briefcase size={40} className="text-[#1227e2] mb-2" />,
      title: "PDS (Professional Development)",
      desc: "Advance your career with specialized courses and certifications.",
    },
    {
      icon: <GraduationCap size={40} className="text-[#1227e2] mb-2" />,
      title: "Masters",
      desc: "Deepen your expertise and open new doors with our graduate programs.",
    },
    {
      icon: <LampWallUp size={40} className="text-[#1227e2] mb-2" />,
      title: "PhD",
      desc: "Contribute to knowledge and become a leader in your field of research.",
    },
  ];

  return (
    <div className="bg-gray-100 w-full p-10 pt-36 pb-20">
      <motion.div
        className="text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl text-[#1227e2] font-bold mb-3">Explore Our Programs</h1>
        <p className="text-sm md:text-base font-medium text-gray-600 max-w-xl mx-auto">
          We offer a diverse range of programs to suit your academic and professional goals.
          Find the perfect path for you.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
          {programData.map((program, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center text-center p-6 h-auto w-full max-w-xs bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              {program.icon}
              <h1 className="text-lg md:text-xl mb-3 font-medium">{program.title}</h1>
              <p className="text-sm text-gray-600">{program.desc}</p>
            </motion.div>
          ))}
        </div>
 
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Link
            to="/programs"
            className="inline-block mt-16 text-[15px] text-white bg-[#1227e2] font-medium rounded-xl shadow hover:shadow-lg transition px-6 py-3"
          >
            See All Programs
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Programs;
