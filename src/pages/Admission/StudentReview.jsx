import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import student1 from './img/student1.jpg';  
import student2 from './img/student2.jpg';
import student3 from './img/student3.jpg';
import student4 from './img/student4.jpg';

const reviews = [
  {
    id: 1,
    name: "Alice Debbie",
    role: "High School Student",
    photo: student1,
    review:
      "I love the learning environment! It's really fun and supportive for students like me.",
  },
  {
    id: 2,
    name: "Ethan Smith",
    role: "High School Student",
    photo: student2,
    review:
      "The classes are engaging and the teachers make learning easy to understand.",
  },
  {
    id: 3,
    name: "Lily Brown",
    role: "High School Student",
    photo: student3,
    review:
      "I enjoy the projects and group activities. It helps me learn better and make friends.",
  },
  {
    id: 4,
    name: "Noah Davis",
    role: "High School Student",
    photo: student4,
    review:
      "The school encourages creativity and gives us freedom to explore our interests.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const StudentReview = () => {
  const [width, setWidth] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="py-10 px-4 md:px-20 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6">Hear From our Students</h2>
      <p className="text-center mb-8">See what our students have to say about their experience at Scofield University.</p>

      <motion.div 
        ref={sliderRef} 
        className="cursor-grab overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex space-x-6 px-4"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              className="w-72 md:w-80 bg-white rounded-xl shadow-lg p-6 flex-shrink-0 flex flex-col items-center text-center"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src={review.photo}
                alt={review.name}
                className="w-24 h-24 md:w-24 md:h-24 rounded-full mb-4 object-cover border-4 border-blue-100"
              />
              <h3 className="font-semibold text-lg">{review.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{review.role}</p>         
              <p className="text-gray-700 text-sm">{review.review}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StudentReview;
