import React from "react";

const UniversityMap = () => {
  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#1227e2] mb-8">
          Our Location
        </h2>
        <p className="text-gray-600 mb-6">
          Scofield University — Faculty Avenue, Lagos, Nigeria.
        </p>
        <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Scofield University Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.434328929258!2d3.3751!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f5f29a2c32f%3A0x34b982e47e4d46b0!2sLagos%20State%20University!5e0!3m2!1sen!2sng!4v1697350000000!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> 
        </div>
      </div>
    </section>
  );
};

export default UniversityMap;
