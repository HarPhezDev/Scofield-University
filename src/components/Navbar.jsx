import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../img/ScofieldLogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("student");
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Override back button to go home
  useEffect(() => {
    const handlePopState = () => {
      navigate("/", { replace: true });
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [navigate]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isActive = (path) => location.pathname === path;

  const handleLogin = (e) => {
    e.preventDefault();
    if (!studentId || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (studentId === "STU123" && password === "password123") {
      alert(`Welcome ${activeTab}!`);
      setIsLoginOpen(false);
      setError("");
    } else {
      setError("Invalid ID or password");
      setStudentId("");
      setPassword("");
    }
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/admission", label: "Admission" },
    { to: "/faculties", label: "Faculties" },
    { to: "/courses", label: "Courses" },
    { to: "/programs", label: "Programs" },
    { to: "/news-and-events", label: "News & Events" },
    { to: "/about", label: "About" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "shadow-lg bg-white" : "bg-white"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Scofield University" className="w-25 h-20" />
            
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 font-medium text-[#1227e2]">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`relative py-1 hover:text-blue-600 transition ${isActive(to) ? "text-blue-700" : ""
                  }`}
              >
                {label}
                <span
                  className={`absolute left-0 -bottom-0.5 w-0 h-[2px] bg-[#1227e2] transition-all ${isActive(to) ? "w-full" : "group-hover:w-full"
                    }`}
                />
              </Link>
            ))}
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <button
              onClick={() => setIsLoginOpen(true)}
              className="bg-[#1227e2] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#0f1eb8] transition shadow-md"
            >
              Login
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            {isMenuOpen ? (
              <X
                className="text-[#1227e2] w-7 h-7 cursor-pointer"
                onClick={toggleMenu}
              />
            ) : (
              <Menu
                className="text-[#1227e2] w-7 h-7 cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="md:hidden bg-white border-t border-gray-200 flex flex-col items-center py-6 space-y-4 font-medium text-[#1227e2]"
            >
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={toggleMenu}
                  className={`py-1 ${isActive(to) ? "underline decoration-[#1227e2]" : ""}`}
                >
                  {label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsLoginOpen(true);
                  toggleMenu();
                }}
                className="bg-[#1227e2] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#0f1eb8] transition shadow-md"
              >
                Login
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Login Modal */}
      <AnimatePresence>
        {isLoginOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLoginOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Modal */}
            <motion.div
              initial={{ y: "-100vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100vh", opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="fixed inset-0 flex justify-center items-center z-50 p-4"
            >
              <div className="bg-white rounded-3xl w-full max-w-md p-8 relative shadow-xl border border-gray-200">
                <button
                  onClick={() => setIsLoginOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 font-bold text-2xl"
                >
                  &times;
                </button>

                {/* Tabs */}
                <div className="flex justify-center mb-6 space-x-4">
                  {["student", "staff"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-2 font-semibold rounded-t-lg transition ${activeTab === tab
                          ? "bg-[#1227e2] text-white shadow-md"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Form */}
                <form onSubmit={handleLogin} className="flex flex-col space-y-6">
                  {/* ID Field */}
                  <div className="relative">
                    <input
                      type="text"
                      id="userId"
                      value={studentId}
                      onChange={(e) => setStudentId(e.target.value)}
                      className="peer w-full border border-gray-300 rounded-lg p-4 pt-5 focus:outline-none focus:ring-2 focus:ring-[#1227e2]"
                      placeholder=" "
                    />
                    <label
                      htmlFor="userId"
                      className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-[#1227e2] peer-focus:text-xs"
                    >
                      {activeTab === "student"
                        ? "Student ID (e.g., SCD/2025/ENG/001)"
                        : "Staff ID (e.g., STF/2025/FIN/001)"}
                    </label>
                  </div>

                  {/* Password Field */}
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="peer w-full border border-gray-300 rounded-lg p-4 pt-5 focus:outline-none focus:ring-2 focus:ring-[#1227e2]"
                      placeholder=" "
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-[#1227e2] peer-focus:text-xs"
                    >
                      Password
                    </label>
                  </div>

                  {error && (
                    <p className="text-red-500 text-center font-medium">{error}</p>
                  )}

                  <div className="flex justify-between items-center text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="accent-[#1227e2]" />
                      <span>Remember me</span>
                    </label>
                    <span className="text-[#1227e2] cursor-pointer hover:underline">
                      Forgot?
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#1227e2] text-white py-3 rounded-lg font-semibold hover:bg-[#0f1eb8] transition shadow-md"
                  >
                    Login as {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
