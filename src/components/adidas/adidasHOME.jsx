import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MotionConfig, motion } from 'framer-motion';
import adidas from '../adidas/adidas.svg';
import adidasimg1 from '../adidas/adidas assets/adidas-speedportal-img1.jpg';
import adidasimg2 from '../adidas/adidas assets/adidas-speedportal-img2.jpg';


const AnimatedHamburgerButton = ({ onClick, isOpen }) => {
  const spanColor = isOpen ? 'bg-white' : 'bg-black'; // Change color based on isOpen

  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={isOpen ? "open" : "closed"}
        onClick={onClick}
        className="fixed top-5 right-4 h-12 w-12 rounded-full z-50 transition-colors"
      >
        <motion.span
          variants={VARIANTS.top}
          className={`absolute h-1 w-8 ${spanColor}`}
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className={`absolute h-1 w-8 ${spanColor}`}
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className={`absolute h-1 w-8 ${spanColor}`}
          style={{
            x: "-81%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "70%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};

const AdidasHOME = () => {
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
      <nav className="bg-white w-full fixed border-b border-black z-30">
        <div className="max-w-7xl mx-auto px-4 pt-5 pb-1 flex justify-between items-center">
          {/* Logo */}
          <div>
            <img src={adidas} alt="Adidas Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="md:hidden space-x-4 relative top-1">
            <Link to="/adidas-home" className="text-black hover:text-white hover:bg-black rounded-full px-5 pt-3 pb-1 transition duration-300">Home</Link>
            <Link to="/products" className="text-black hover:text-white hover:bg-black rounded-full px-5 pt-3 pb-1 transition duration-300">Products</Link>
            <a href="#" className="text-black hover:text-white hover:bg-black rounded-full px-5 pt-3 pb-1 transition duration-300">About</a>
            <a href="#" className="text-black hover:text-white hover:bg-black rounded-full px-5 pt-3 pb-1 transition duration-300">Contact</a>
          </div>

          {/* Mobile Menu Button - only shown on small screens */}
          <div className="hidden md:flex">
            <AnimatedHamburgerButton onClick={toggleMobileMenu} isOpen={isMobileMenuOpen} />
          </div>
        </div>
      </nav>

      {/* Mobile Menu - only shown when isMobileMenuOpen is true */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-75 z-50 transition-opacity duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 delay-100'}`}
        style={{
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
        }}
        onClick={closeMobileMenu}
      >
        <div className="absolute flex-col top-0 right-0 bottom-0 bg-black w-full h-full shadow-lg flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-center w-full px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="40"
              height="40"
              viewBox="0 0 512 512"
              style={{ enableBackground: 'new 0 0 512 512' }}
              xmlSpace="preserve"
              className="absolute size-11 top-5 left-4 text-white"
            >
              <g>
                <path d="m428.384 263.232-92.448-153.76-38.08 22.912-60.48 36.352 60.48 100.704 79.84 133.088H512zM297.856 347.744l-80.544-134.016-95.424 57.44-3.264 1.92 3.264 5.408 74.528 124.032h134.208zM121.888 356.704l-23.232-38.592L0 377.376l15.072 25.152h134.304z" fill="white" opacity="1" data-original="#000000" className=""></path>
              </g>
            </svg>
            <AnimatedHamburgerButton onClick={closeMobileMenu} className="absolute top-7 right-5 z-100 text-base font-semibold text-white" isOpen={isMobileMenuOpen} />
          </div>
          <div className="px-4 py-6 text-center">
            {/* Navigation links */}
            <Link
              to="/adidas-home"
              className={`block text-3xl text-white hover:text-gray-400 mb-4 transition-all duration-500 font-Roboto-condensed-sans font-medium ${isMobileMenuOpen ? 'opacity-100 transform -translate-y-4' : 'opacity-0 transform translate-y-4'}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`block text-3xl text-white hover:text-gray-400 mb-4 transition-all duration-500 font-Roboto-condensed-sans font-medium ${isMobileMenuOpen ? 'opacity-100 transform -translate-y-4' : 'opacity-0 transform translate-y-4'}`}
              onClick={closeMobileMenu}
            >
              Products
            </Link>
            <a
              href="#"
              className={`block text-3xl text-white hover:text-gray-400 transition-all duration-500 font-Roboto-condensed-sans font-medium ${isMobileMenuOpen ? 'opacity-100 transform -translate-y-4' : 'opacity-0 transform translate-y-4'}`}
            >
              About
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <section>
        <div className="flex h-screen sm:h-full w-screen pt-16 items-center" style={{ backgroundColor: '#fefde5' }}>
          <div className="w-full h-full flex flex-row sm:flex-col items-center justify-center">
            <div className="flex sm:flex-col relative w-3/4 h-3/4 p-4 justify-center">
              <img src={adidasimg1} alt="Adidas 1" className="w-auto h-auto object-contain p-2 bg-black" />
              <img src={adidasimg2} alt="Adidas 2" className="w-auto h-auto object-contain p-2 bg-black" />
              <div className="flex w-1/2 sm:w-full h-full items-start justify-center flex-col z-20 p-4">
                <h1 className="font-bold italic text-5xl sm:text-2xl md:text-3xl lg:text-4xl bg-white py-2 sm:fixed sm:top-56 sm:text-center sm:-ml-10 sm:writing-mode-vertical-rl">
                  ADIDAS X SPEEDPORTAL
                </h1>
                <h1 className='p-0'>Explore More</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='w-full h-screen bg-white'>
        </div>
      </section>
    </>
  );
};

export default AdidasHOME;
