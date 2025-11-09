import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom"; // <-- import Link
import logo from "../img/ScofieldLogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1227e2] text-white pt-16 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo and About */}
        <div>
          <img src={logo} alt="Scofield University" className="w-28 mb-4" />
          <p className="text-sm text-gray-200 leading-relaxed">
            Scofield University is committed to academic excellence, innovation, and building
            global leaders through quality education and research.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/admission" className="hover:underline">
                Admissions
              </Link>
            </li>
            <li>
              <Link to="/programs" className="hover:underline">
                Programs
              </Link>
            </li>
            <li>
              <Link to="/faculties" className="hover:underline">
                Faculties
              </Link>
            </li>
            <li>
              <Link to="/news-and-events" className="hover:underline">
                News & Events
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
          <ul className="space-y-3 text-sm text-gray-200">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 text-white" />
              <span>Scofield University Campus, Lagos State, Nigeria</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-white" />
              <span>+234 808 5939 242</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-white" />
              <span>info@scofielduniversity.edu.ng</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-white/20 my-8" />

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-200">
        © {new Date().getFullYear()} Scofield University. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
