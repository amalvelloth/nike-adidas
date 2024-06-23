import React, { useState } from "react";
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import Grid from './nike asssets/grid.svg'
import { motion } from 'framer-motion';

function NikeHOME() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const slideInVariants = {
    hidden: { x: '100%' },
    visible: { x: 0 },
  };

  return (
    <>
      {/* Navbar */}
      {/* Navbar */}
      <nav className="bg-white w-full fixed shadow-lg z-20">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div>
            <a href="">
              <svg aria-hidden="true" class="swoosh-svg" focusable="false" viewBox="3 8 18 7" role="img" width="44px" height="44px" fill="none">
                <path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="md:hidden flex flex-grow justify-center md:justify-end space-x-6">
            <a href="#" className="text-gray-900 hover:text-gray-800">
              Home
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-800">
              Products
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-800">
              About
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-800">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button - only shown on small screens */}
          <div className="grid grid-cols-3 gap-2 md:items-center">
            <h1 className="text-gray-400 hover:text-black justify-self-start">
              <FavoriteTwoToneIcon />
            </h1>
            <h1 className="text-gray-400 hover:text-black justify-self-start">
              <ShoppingBagTwoToneIcon />
            </h1>
            <button
              onClick={toggleMobileMenu}
              className="text-gray-400 focus:outline-none justify-self-end hidden md:block"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

            </button>
          </div>




        </div>
      </nav>

      {/* Mobile Menu - only shown when isMobileMenuOpen is true */}
      {isMobileMenuOpen && (
        <div
          className="hidden md:flex fixed inset-0 bg-gray-900 bg-opacity-75 z-50"
          onClick={closeMobileMenu}
        >
        
          <motion.div
            className="absolute top-0 right-0 bottom-0 bg-white w-64 shadow-lg"
            variants={slideInVariants}
            initial="hidden"
            animate={isMobileMenuOpen ? "visible" : "hidden"}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={closeMobileMenu}
          >
            <button
              onClick={closeMobileMenu}
              className="text-gray-900 text-base font-semibold text-red-400 px-4 py-6 mb-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>

            </button>
            <div className="px-4 py-6 flex-col items-center">
              <a
                href="#"
                className="block font-medium text-2xl text-gray-900 hover:text-gray-800 mb-4"
              >
                Home
              </a>
              <a
                href="#"
                className="block font-medium text-2xl text-gray-900 hover:text-gray-800 mb-4"
              >
                Products
              </a>
              <a
                href="#"
                className="block font-medium text-2xl text-gray-900 hover:text-gray-800 mb-4"
              >
                About
              </a>
              <a
                href="#"
                className="block font-medium text-2xl text-gray-900 hover:text-gray-800 mb-4"
              >
                Contact
              </a>
            </div>
            <div className="px-4 py-6">
              <h1 className="text-xl text-gray-500">
                Become a Nike Member for the best products, inspiration and
                stories in sport.{" "}
                <span className="text-black font-medium">Learn more</span>{" "}
              </h1>
            </div>
          </motion.div>
        </div>
      )}

      {/* Content */}
      <section>
        <div className="bg-white overflow-hidden min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 pt-11">
          <div className="relative w-full max-w-lg">
            <div className="absolute top-0 sm:top-5 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl     opacity-70 animate-blob animation-delay-1000"></div>{/* animate-blob */}
            <div className="absolute top-10 sm:top-4 -right-96 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl     opacity-70 animate-blob animation-delay-4000"></div>{/* animate-blob animation-delay-2000 */}
            <div className="absolute -bottom-8 -right-80 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl     opacity-70 animate-blob animation-delay-4000"></div>{/* animate-blob animation-delay-4000 */}
            <div className="absolute -bottom-8 -left-80 sm:-left-60 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl     opacity-70 animate-blob animation-delay-2000"></div>{/* animate-blob animation-delay-4000 */}

          </div>
          <div className="absolute top-15 right-20 sm:hidden w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>{/* animate-blob animation-delay-4000 */}
          <div className="absolute bg-[url('/images/nike-mds-speed-8.jpg')] bg-center bg-cover size-5/6 rounded-xl shadow-xl"></div>
          <h1 className="text-white z-10 text-5xl font-Oswald font-medium">NIKE MERCURIAL DREAM SPEED 9</h1>
        </div>
      </section>

      <section>
        <div className="relative bg-white bg-cover h-screen overflow-hidden">
          <img src={Grid} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-10 sm:inset-1 flex flex-row sm:flex-col md:flex-col justify-between items-start text-center">
            {/* Left side with brand names */}
            <div className="flex flex-col sm:mt-12 justify-start items-start sm:ml-2 md:ml-4">
              <h1 className="text-5xl hover:text-gray-300 transition ease-in-out cursor-pointer font-Lato">MERCURIAL</h1>
              <div className="h-0.5 w-1/2 bg-black"></div>
              <h1 className="text-5xl hover:text-gray-300 transition ease-in-out cursor-pointer font-Lato">PHANTOM</h1>
              <div className="h-0.5 w-1/2 bg-black"></div>
              <h1 className="text-5xl hover:text-gray-300 transition ease-in-out cursor-pointer font-Lato">TIEMPO</h1>
              <div className="h-0.5 w-1/2 bg-black"></div>
            </div>
            

            <motion.div className="flex justify-center items-center px-6 py-10 rounded-md max-w-[453px] h-[200px] bg-black">
              <h1 className="text-white">Gear up for Greatness</h1>
            </motion.div>

            {/* Right side for additional content */}
            <div className="flex flex-col justify-center items-center sm:mr-2 md:mr-4 mr-10">
              {/* Add any additional content here */}
              <p className="text-xl">Something here</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default NikeHOME;