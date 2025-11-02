import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "./img/ScofieldLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/index.html" },
    { name: "Admissions", href: "/admissions.html" },
    { name: "Faculty", href: "/faculty.html" },
    { name: "Courses", href: "/courses.html" },
    { name: "About", href: "/about.html" },
    { name: "News & Events", href: "/news.html" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white shadow-md backdrop-blur-sm"
          : "bg-white/70 backdrop-blur-md shadow-sm"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="/index.html"
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <img src={logo} alt="Scofield Logo" className="w-24 h-auto" />
        </motion.a>

        {/* Desktop Links */}
        <motion.ul
          className="hidden md:flex gap-6 text-[#1227e2] font-poppins font-medium text-[15px]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-[#1165b4] transition duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Apply Button (Desktop) */}
        <motion.a
          href="/apply.html"
          className="hidden md:block bg-[#1227e2] text-white px-4 py-1.5 rounded-md hover:bg-[#002244] text-sm transition"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Apply Now
        </motion.a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden transition ${
            isOpen ? "text-white z-50" : "text-[#1227e2]"
          }`}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} color="white" /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 h-screen w-3/4 bg-[#1227e2] text-white flex flex-col items-center justify-center gap-6 font-medium text-[15px] shadow-lg z-40"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-gray-300 transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <motion.a
              href="/apply.html"
              className="bg-white text-[#1227e2] px-5 py-2 rounded-md hover:bg-gray-100 transition text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
