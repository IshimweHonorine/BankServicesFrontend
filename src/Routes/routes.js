
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home"
import Services from "../Services";
import Contact from "../Contact";


const AppRoutes = (prop) => {
  
    return (
      <div class="">
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </div>
    );
  };
  
  export default AppRoutes;