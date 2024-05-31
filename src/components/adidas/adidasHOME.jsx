import React, { useState } from 'react';
import adidas from '../adidas/adidas.svg'

function AdidasHOME() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white w-full fixed border-b border-black">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
          {/* Logo */}
          <div>
            <img src={adidas} className='' alt="" />
          </div>

          {/* Desktop Menu */}
          <div className="md:hidden space-x-6">
            <a href="#" className="text-gray-900 hover:text-gray-800">Home</a>
            <a href="#" className="text-gray-900 hover:text-gray-800">Products</a>
            <a href="#" className="text-gray-900 hover:text-gray-800">Aboutt</a>
            <a href="#" className="text-gray-900 hover:text-gray-800">Contact</a>
          </div>

          {/* Mobile Menu Button - only shown on small screens */}
          <div className="hidden md:flex">
            <button onClick={toggleMobileMenu} className="text-gray-400 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - only shown when isMobileMenuOpen is true */}
      {isMobileMenuOpen && (
        <div className="hidden md:flex fixed inset-0 bg-gray-900 bg-opacity-75 z-50" onClick={closeMobileMenu}>
          <div className="absolute top-0 right-0 bottom-0 bg-white w-64 shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="px-4 py-6">
              <button onClick={closeMobileMenu} className="text-gray-900 text-xs font-semibold hover:text-red-400 mb-4">Close</button>
              <a href="#" className="block text-gray-900 hover:text-gray-800 mb-4">Home</a>
              <a href="#" className="block text-gray-900 hover:text-gray-800 mb-4">Products</a>
              <a href="#" className="block text-gray-900 hover:text-gray-800 mb-4">About</a>
              <a href="#" className="block text-gray-900 hover:text-gray-800 mb-4">Contact</a>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className='flex h-screen justify-center items-center bg-white'>
        <h1 className='text-black'>ADIDAS HOME PAGE</h1>
      </div>
    </>
  );
}

export default AdidasHOME;
