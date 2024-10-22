import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">YourLogo</Link> {/* Replace "YourLogo" with an actual logo or text */}
        </div>

        {/* Menu items on the right */}
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/services" className="text-white hover:text-gray-300">Services</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
