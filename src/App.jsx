import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import Admission from "./pages/Admission/Admission.jsx";
import Faculty from "./pages/Faculty/Faculty.jsx";
import Courses from "./pages/Courses/Courses.jsx";
import Programs from "./pages/Programs/Programs.jsx";
import About from "./pages/About/About.jsx";
import NewsAndEvent from "./pages/NewsAndEvent/NewsAndEvents.jsx";
import SocialBar from "./components/SocialBar.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <SocialBar />
      <Routes>
        <Route path="/" element={<Home />} />         
        <Route path="/admission" element={<Admission />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/about" element={<About />} />
        <Route path="/news-events" element={<NewsAndEvent />} />
      </Routes>
         <Footer />
    </Router>
  );
};

export default App;
