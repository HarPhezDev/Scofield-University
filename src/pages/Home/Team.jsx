import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import student1 from "./img/student1.jpeg";
import student2 from "./img/student2.jpeg";
import student3 from "./img/student3.jpeg"; 

const Team = () => {
  const TeamInfo = [
    {
      id: 1,
      img: student1,
        name: "Steel Mavericks",
      title: "for student",
      links: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 2,
      img: student2,
      name: "Shadow Warriors",
      title: "for student",
      links: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      id: 3,
      img: student3,
      name: "Iron Titans",
      title: "for student",
      links: {
       facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
  ];

  return (
    <div className="w-full py-14 bg-gray-50 flex flex-col justify-center items-center">
    
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-[#1227e2] text-2xl font-semibold uppercase">
          Our Team
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
          Leaders in Education, Partners in Success
        </h2>
      </motion.div>

 
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
        {TeamInfo.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative group w-full overflow-hidden rounded-lg shadow-md bg-white"
          >
         
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
            />

            
            <div className="absolute inset-0 bg-[#1227e2]/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <a
                href={member.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200"
              >
                <Facebook size={20} />
              </a>
              <a
                href={member.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200"
              >
                <Twitter size={20} />
              </a>
              <a
                href={member.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={member.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200"
              >
                <Instagram size={20} />
              </a>
            </div>

         
            <div
              className={`w-full py-3 text-center ${
                index === 1 ? "bg-[#1227e2]" : "bg-black"
              }`}
            >
              <h3 className="text-base font-semibold text-white">
                {member.name}
              </h3>
              <p className="text-sm text-gray-200">{member.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
