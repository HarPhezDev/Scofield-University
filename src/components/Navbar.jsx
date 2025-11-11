import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Eye, EyeOff } from "lucide-react";
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
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handlePopState = () => navigate("/", { replace: true });
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

    if (studentId === "SCD/2025/ENG/001" && password === "password123") {
      alert(`Welcome ${activeTab}!`);
      setIsLoginOpen(false);
      setError("");
      setStudentId("");
      setPassword("");
      setShowPassword(false);
    } else {
      setError("Invalid ID or password");
      setStudentId("");
      setPassword("");
      setShowPassword(false);
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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "shadow-md bg-white" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Scofield University" className="w-24 h-16" />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8 font-medium text-[#1227e2]">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`relative py-1 hover:text-[#0f1eb8] transition ${
                  isActive(to) ? "text-[#0f1eb8]" : ""
                }`}
              >
                {label}
                <span
                  className={`absolute left-0 -bottom-0.5 w-0 h-[2px] bg-[#1227e2] transition-all ${
                    isActive(to) ? "w-full" : "group-hover:w-full"
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

          {/* Mobile Toggle */}
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
                  className={`py-1 ${
                    isActive(to) ? "underline decoration-[#1227e2]" : ""
                  }`}
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
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 sm:p-7 relative border border-gray-100">
                {/* Close Button */}
                <button
                  onClick={() => setIsLoginOpen(false)}
                  className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-2xl"
                >
                  &times;
                </button>

                {/* Logo at Top */}
                <div className="flex justify-center mb-4">
                  <img
                    src={logo}
                    alt="Scofield University"
                    className="w-20 h-auto"
                  />
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
                  Institution Portal Login
                </h2>

                {/* Tabs */}
                <div className="flex justify-center space-x-6 mb-5 border-b border-gray-200">
                  {["Lecturer", "Student"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab.toLowerCase())}
                      className={`pb-1 font-medium transition-all ${
                        activeTab === tab.toLowerCase()
                          ? "text-[#1227e2] border-b-2 border-[#1227e2]"
                          : "text-gray-500 hover:text-[#1227e2]"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Form */}
                <form onSubmit={handleLogin} className="space-y-4">
                  {/* ID Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      {activeTab === "lecturer" ? "Lecturer ID" : "Student ID"}
                    </label>
                    <input
                      type="text"
                      value={studentId}
                      onChange={(e) => setStudentId(e.target.value)}
                      placeholder={
                        activeTab === "lecturer"
                          ? "Enter your Lecturer ID"
                          : "Enter your Student ID"
                      }
                      className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#1227e2]"
                    />
                  </div>

                  {/* Password Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full border border-gray-300 rounded-lg p-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-[#1227e2]"
                      />
                      <div
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </div>
                    </div>
                  </div>

                  {/* Forgot Password */}
                  <div className="flex justify-end">
                    <span className="text-sm text-[#1227e2] cursor-pointer hover:underline">
                      Forgot Password?
                    </span>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <p className="text-center text-red-500 font-medium text-sm">
                      {error}
                    </p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#1227e2] text-white py-2.5 rounded-lg font-semibold hover:bg-[#0f1eb8] transition shadow-md text-sm"
                  >
                    Login as{" "}
                    {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                  </button>
                </form>

                {/* Footer */}
                <div className="text-center text-xs text-gray-500 mt-5">
                  Need help?{" "}
                  <span className="text-[#1227e2] hover:underline cursor-pointer">
                    Contact Support
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
