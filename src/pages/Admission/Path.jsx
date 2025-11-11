import React from "react";
import { Link } from "react-router-dom";
import { FileText, DollarSign, GraduationCap, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const AdmissionPath = () => {
  const cards = [
    {
      id: 1,
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      title: "Admission Requirements",
      text: "Find out what you need to prepare for your application, including GPA, test scores, and essays.",
      link: "/admission-requirements",
    },
    {
      id: 2,
      icon: <DollarSign className="w-6 h-6 text-blue-600" />,
      title: "Tuition & Fees",
      text: "View a breakdown of costs for in-state and out-of-state students, and explore our fee calculator.",
      link: "/tuition-fees",
    },
    {
      id: 3,
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      title: "Scholarships & Financial Aid",
      text: "Explore various opportunities to fund your education, from merit-based scholarships to need-based grants.",
      link: "/scholarship-financial-aid",
    },
  ];

  const importantDates = [
    { date: "November 1", event: "Early Action Deadline" },
    { date: "January 15", event: "Regular Decision Deadline" },
    { date: "March 1", event: "FAFSA Submission Priority" },
    { date: "May 1", event: "Enrollment Deposit Due" },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.25,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="m-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h1
        className="text-2xl md:text-3xl font-bold mb-8 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Your Path to Admission
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Left: Cards */}
        <motion.div
          className="md:col-span-2 grid sm:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to={card.link}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col gap-4"
              >
                <div className="flex items-center gap-2">{card.icon}</div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {card.title}
                </h2>
                <p className="text-gray-600">{card.text}</p>
                <span className="text-blue-600 font-medium hover:underline">
                  Learn More →
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Right: Important Dates */}
        <motion.div
          className="bg-gray-50 p-6 rounded-lg shadow"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-lg font-bold  mb-4">
            Important Dates
          </h2>
          <ul className="space-y-3">
            {importantDates.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: index * 0.1, duration: 0.5 },
                }}
              >
                <Calendar className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">{item.date}</p>
                  <p className="font-bold">{item.event}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AdmissionPath;
