import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Navbar from './pages/Home/Navbar.jsx'
import Hero from './pages/Home/Hero.jsx'
import Programs from './pages/Home/Programs.jsx'
import Courses from './pages/Home/Courses.jsx'
import Accumulate from './pages/Home/Accumulate.jsx'
import Testimonial from './pages/Home/Testimonial.jsx'
import Team from './pages/Home/Team.jsx'
import NewsAndEvents from './pages/Home/NewsAndEvents.jsx'
import SocialBar from './pages/Home/SocialBar.jsx'
import CampusView from './pages/Home/CampusView.jsx'
import Map from './pages/Home/Map.jsx'
import Footer from './pages/Home/Footer.jsx'
 



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Navbar />
    <Hero />
    <Programs />
    <Courses />
    <Accumulate />
    <Testimonial />
    <Team />
    <NewsAndEvents />
    <SocialBar />
    <CampusView />
    <Map />
    <Footer />

  </StrictMode>,
)
