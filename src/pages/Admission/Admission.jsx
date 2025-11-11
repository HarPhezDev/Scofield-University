 import React from 'react'
 import { Link } from "react-router-dom"
 import Hero from './Hero.jsx';
 import Path from './Path.jsx'
 import StudentReview from './StudentReview.jsx'; 


 
 const Admission = () => {
   return (
    <div>
       <Hero />
       <Path />
       <StudentReview />
    </div>
   )
 }
 
 export default Admission