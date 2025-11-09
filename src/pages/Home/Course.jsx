import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // <-- import Link
import Engineering from "./img/Engineering-Pics.jpg";
import MBBS from "./img/MBBS.jpg";
import Law from "./img/Lawyer-pic.jpg";
import ComputerScience from "./img/CS-Pic.jpg";

const Course = () => {
  const CoursesList = [
    {
      id: 1,
      img: Engineering,
      title: "Engineering",
      intro:
        "With a focus on innovation, hands-on learning, and interdisciplinary collaboration, our curriculum empowers future engineers to solve real-world problems.",
      link: "#engineering",
    },
    {
      id: 2,
      img: MBBS,
      title: "Medicine & Surgery",
      intro:
        "Our MBBS program combines rigorous scientific training with compassionate patient care, preparing students for excellence in medicine.",
      link: "#mbbs",
    },
    {
      id: 3,
      img: Law,
      title: "Law",
      intro:
        "Study the foundations of justice, ethics, and legal reasoning with our world-class faculty and modern legal education approach.",
      link: "#law",
    },
    {
      id: 4,
      img: ComputerScience,
      title: "Computer Science",
      intro:
        "Explore the world of coding, AI, and innovation through our tech-driven Computer Science program designed for the future.",
      link: "#computer-science",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="w-full bg-gray-50 px-6 md:px-10 lg:px-16 py-24">
    
      <motion.div
        className="text-center max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-lg text-[#1227e2] font-semibold tracking-wide mb-2">
          Our Courses
        </h2>
        <h1 className="text-3xl md:text-4xl text-gray-800 font-bold mb-4">
          Explore Your Path to Success
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          We offer a diverse range of programs designed to meet the demands of
          an ever-evolving world. From undergraduate degrees to postgraduate
          specializations, find your perfect fit.
        </p>
      </motion.div>

     
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {CoursesList.map((course, index) => (
          <motion.a
            href={course.link}
            key={course.id}
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden w-full max-w-xs"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
          >
            <div className="relative overflow-hidden">
              <img
                src={course.img}
                alt={course.title}
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#1227e2]/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
            <div className="p-6 text-center">
              <h1 className="text-lg font-semibold mb-2 text-[#1227e2] group-hover:text-[#0f20b5] transition-colors duration-300">
                {course.title}
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                {course.intro}
              </p>
            </div>
          </motion.a>
        ))}
      </div>

    
      <motion.div
        className="flex justify-center mt-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <Link
          to="/courses" // <-- navigate to /courses
          className="inline-block text-[15px] text-white bg-[#1227e2] font-medium rounded-xl shadow hover:shadow-lg transition px-6 py-3 hover:bg-[#0f20b5]"
        >
          See All Courses
        </Link>
      </motion.div>
    </div>
  );
};

export default Course;
