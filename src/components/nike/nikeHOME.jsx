import React, { useState } from "react";
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import Grid from './nike asssets/grid.svg'

function NikeHOME() {
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
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
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
          <div
            className="absolute top-0 right-0 bottom-0  bg-white w-64 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeMobileMenu}
              className="text-gray-900 text-base font-semibold text-red-400 px-4 py-6 mb-4"
            >
              Close
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
          </div>
        </div>
      )}

      {/* Content */}
      <section>
        <div className="bg-white overflow-hidden min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="relative w-full max-w-lg">
            <div className="absolute top-0 sm:top-5 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl     opacity-70 animate-blob animation-delay-1000"></div>{/* animate-blob */}
            <div className="absolute top-0 sm:top-4 -right-96 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl     opacity-70 animate-blob animation-delay-4000"></div>{/* animate-blob animation-delay-2000 */}
            <div className="absolute -bottom-8 -right-80 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl     opacity-70 animate-blob animation-delay-4000"></div>{/* animate-blob animation-delay-4000 */}
            <div className="absolute -bottom-8 -left-80 sm:-left-60 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl     opacity-70 animate-blob animation-delay-2000"></div>{/* animate-blob animation-delay-4000 */}
          </div>
          <div className="absolute bg-[url('/images/nike-mds-speed-8.jpg')] bg-center bg-cover size-5/6 rounded-xl shadow-xl"></div>
          <h1 className="text-white z-10 text-5xl">NIKE MERCURIAL DREAM SPEED 9</h1>
        </div>
      </section>

      <section>
        <div className="relative bg-white bg-cover h-screen overflow-hidden">
          <img src={Grid} alt="" className="absolute inset-0 w-full h-full object-cover"/>
          <div className="absolute inset-0 flex flex-col justify-center items-start text-center sm:left-2 md:left-4 left-10 space-y-7">
            <h1 className="text-6xl hover:text-gray-300 transition 5000 ease-in-out cursor-pointer">MERCURIAL</h1>
            <div class="h-0.5 w-1/2 bg-black"></div>
            <h1 className="text-6xl hover:text-gray-300 transition 5000 ease-in-out cursor-pointer">PHANTOM</h1>
            <div class="h-0.5 w-1/2 bg-black"></div>
            <h1 className="text-6xl hover:text-gray-300 transition 5000 ease-in-out cursor-pointer">TIEMPO</h1>
            <div class="h-0.5 w-1/2 bg-black"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NikeHOME;