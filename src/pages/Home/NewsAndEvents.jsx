import React from "react";
import EngineeringEvent from "./img/Engineering_Event.png";
import EverTrustEvent from "./img/EverTrust_Event.png";
import ConvocationEvent from "./img/Convocation_Event.png";

const NewsAndEvents = () => {
  const events = [
    {
      id: 1,
      title: "Faculty of Engineering Seminar 2025",
      type: "Seminar",
      date: "November 15, 2025",
      description:
        "A one-day seminar discussing the latest innovations in renewable energy and sustainable engineering practices.",
      image: EngineeringEvent,
      link: "#",
    },
    {
      id: 2,
      title: "Scofield University Entrepreneurship Workshop",
      type: "Workshop",
      date: "December 2, 2025",
      description:
        "An interactive workshop aimed at empowering students with business management and creative startup skills.",
      image: EverTrustEvent,
      link: "#",
    },
    {
      id: 3,
      title: "Scofield University 2026 Convocation Ceremony",
      type: "Convocation",
      date: "January 20, 2026",
      description:
        "Join us to celebrate the achievements of our graduating students and honor outstanding academic performances.",
      image: ConvocationEvent,
      link: "#",
    },
  ];

  const typeColors = {
    Seminar: "bg-green-600",
    Workshop: "bg-yellow-500",
    Convocation: "bg-red-600",
  };

  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          News & Events
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {events.map(({ id, title, type, date, description, image, link }) => (
            <div
              key={id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* Image Section (Full image visible) */}
              <div className="w-full h-56 bg-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

            
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`inline-block px-3 py-1 text-sm font-medium text-white rounded-full ${
                      typeColors[type] || "bg-blue-600"
                    }`}
                  >
                    {type}
                  </span>
                  <span className="text-sm text-gray-500">{date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {description}
                </p>
                <a
                  href={link}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsAndEvents;
