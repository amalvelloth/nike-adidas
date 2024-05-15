import React from 'react';

function NikeHOME() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-white w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <h2 className="text-black font-bold">Nike</h2>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              {/* Hamburger Menu Icon */}
              <button
                type="button"
                className="bg-white p-2 rounded-md inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:items-center lg:justify-end lg:flex-1">
              <a
                href="#"
                className="whitespace-nowrap text-gray-900 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Link 1
              </a>
              <a
                href="#"
                className="whitespace-nowrap text-gray-900 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
              >
                Link 2
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-800 hover:bg-gray-100"
            >
              Link 1
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-800 hover:bg-gray-100"
            >
              Link 2
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className='flex h-screen justify-center items-center bg-black'>
        <h1 className='text-white'>NIKE HOME PAGE</h1>
      </div>
    </>
  );
}

export default NikeHOME;
