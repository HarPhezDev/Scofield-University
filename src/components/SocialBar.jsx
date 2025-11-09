import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const SocialBar = () => {
  const socialLinks = [
    { id: 1, icon: <Facebook size={20} />, href: "https://facebook.com" },
    { id: 2, icon: <Twitter size={20} />, href: "https://https://x.com/har_phez_dev" },
    { id: 3, icon: <Instagram size={20} />, href: "https://instagram.com" },
    { id: 4, icon: <Linkedin size={20} />, href: "https://linkedin.com" },
  ];

  return (
    <div className="fixed top-1/3 left-0 z-1000 flex flex-col space-y-3 p-2 bg-white/90 rounded-r-2xl shadow-lg backdrop-blur-md">
      {socialLinks.map(({ id, icon, href }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1227e2] text-white hover:bg-[#001c5b] transition duration-300"
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialBar;
