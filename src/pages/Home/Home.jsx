import React from "react";

import Hero from "./Hero.jsx";
import Program from "./Program.jsx";
import Course from "./Course.jsx";
import Accumulate from "./Accumulate.jsx";
import Testimonial from "./Testimonial.jsx";
import Team from "./Team.jsx";
import NewsAndEvents from "./NewsAndEvents.jsx";
import SocialBar from "../../components/SocialBar.jsx";
import CampusView from "./CampusView.jsx";
import Map from "./Map.jsx";


const Home = () => {
  return (
    <div style={{ paddingTop: "80px" }}> 
      <Hero />
      <Program />
      <Course />
      <Accumulate />
      <Testimonial />
      <Team />
      <NewsAndEvents />
      <SocialBar />
      <CampusView />
      <Map />
   
    </div>
  );
};

export default Home;
