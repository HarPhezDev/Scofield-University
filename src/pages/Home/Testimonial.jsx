import React from "react";
import { motion } from "framer-motion";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      name: "John Doe",
      course: "Engineering",
      intro:
        "Attending this institute was a life-changing experience. The faculty were supportive and the curriculum was challenging yet rewarding.",
      rating: 5,
    },
    {
      id: 2,
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Sarah Johnson",
      course: "Business Administration",
      intro:
        "This university helped me grow both academically and personally. The exposure and opportunities are unmatched.",
      rating: 5,
    },
    {
      id: 3,
      img: "https://randomuser.me/api/portraits/men/23.jpg",
      name: "Michael Smith",
      course: "Computer Science",
      intro:
        "The hands-on projects and supportive professors made learning exciting. I gained real-world skills that shaped my career.",
      rating: 5,
    },
    {
      id: 4,
      img: "https://randomuser.me/api/portraits/women/56.jpg",
      name: "Jessica Lee",
      course: "Law",
      intro:
        "Amazing experience! The university's commitment to excellence and innovation pushed me to achieve my goals.",
      rating: 5,
    },
    {
      id: 5,
      img: "https://randomuser.me/api/portraits/men/75.jpg",
      name: "David Carter",
      course: "Architecture",
      intro:
        "Scofield University gave me the foundation and vision to turn creative ideas into real-world projects.",
      rating: 5,
    },
    {
      id: 6,
      img: "https://randomuser.me/api/portraits/women/62.jpg",
      name: "Sophia Wilson",
      course: "Medicine",
      intro:
        "A remarkable institution where passion meets excellence. Every lesson shaped my purpose and skillset.",
      rating: 5,
    },
  ];

  return (
    <motion.section
      className="bg-gray-50 py-16 px-4 sm:px-8 md:px-12 lg:px-20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.h2
          className="text-[#1227e2] text-2xl font-semibold mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our Testimonials
        </motion.h2>

        <motion.h1
          className="text-3xl md:text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Transformative Experience for Every Student
        </motion.h1>
      </div>

      {/* Testimonial Grid */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
          md:gap-10
          justify-items-center
        "
      >
        {testimonials.map((t, index) => (
          <motion.div
            key={t.id}
            className="bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-2xl p-6 max-w-sm w-full flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 italic mb-5 leading-relaxed">
              “{t.intro}”
            </p>

            <div className="flex items-center mt-auto">
              <img
                src={t.img}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <h3 className="font-semibold text-lg text-gray-800">
                  {t.name}
                </h3>
                <p className="text-sm text-gray-500">{t.course}</p>
              </div>
            </div>

            <div className="mt-3 text-yellow-400 text-left">
              {"★".repeat(t.rating)}
              {"☆".repeat(5 - t.rating)}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonial;
