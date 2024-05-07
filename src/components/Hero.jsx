import React, { useState } from "react";
import nikeBGimage from "../assets/nike.jpg";
import adidasBGimage from "../assets/adidas.jpg";
import nike from "../assets/nike.svg";
import adidas from "../assets/adidas.svg";
import LoadingBar from "react-top-loading-bar";

function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [isNikeExpanded, setIsNikeExpanded] = useState(false);
  const [isAdidasExpanded, setIsAdidasExpanded] = useState(false);
  const [showNikeButton, setShowNikeButton] = useState(false);
  const [showAdidasButton, setShowAdidasButton] = useState(false);
  const [isBackgroundBlurred, setIsBackgroundBlurred] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleNikeClick = () => {
    setIsNikeExpanded(true);
    setIsAdidasExpanded(false);
    setShowNikeButton(true);
    setShowAdidasButton(false);
    setIsBackgroundBlurred(true); // Toggle background blur
  };

  const handleAdidasClick = () => {
    setIsAdidasExpanded(true);
    setIsNikeExpanded(false);
    setShowAdidasButton(true);
    setShowNikeButton(false);
    setIsBackgroundBlurred(true); // Toggle background blur
  };

  const handleLoaderClick = () => {
    // Reset progress to 0 when the loading bar is clicked
    setProgress(0);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <LoadingBar
        color="white"
        style={{ height: "3px", borderRadius: "1rem" }}
        progress={progress}
        onLoaderClick={handleLoaderClick}
        onLoaderFinished={() => setProgress(0)}
      />

      <h1
        className={`absolute top-0 left-0 right-0 text-2xl font-bold font-Monsterrat text-center text-white z-10 mt-8 transition duration-1000 ease-in-out ${
          isHovered ? "blur-sm" : ""
        }`}
      >
        CHOOSE YOUR ULTIMATE FOOTBALL BOOTS
      </h1>

      <div className="flex h-full overflow-hidden">
        <div
          className={`flex justify-center items-center w-1/2 h-full bg-cover bg-center transition duration-1000 ease-in-out ${
            isNikeExpanded ? "w-full" : ""
          }`}
          style={{
            backgroundImage: `url(${nikeBGimage})`,
            transform: isHovered ? "scale(1.1)" : "scale(1)",
            filter: isBackgroundBlurred ? "blur(5px)" : "none", // Apply blur effect only to background
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={nike}
            className={`nike_logo size-40 cursor-pointer absolute bg-transparent transition duration-1000 ease-in-out ${
              isHovered ? "hover:nike-hover" : ""
            }`}
            onClick={handleNikeClick}
            alt=""
            style={{ zIndex: 1 }}
          />
          {showNikeButton && (
            <button
              className="absolute z-10 bottom-1/4 bg-white bg-opacity-25 hover:bg-opacity-50 text-white font-semibold py-2 px-4 rounded-md border shadow-md backdrop-blur-lg"
              onClick={() => setProgress(100)}
            >
              Shop NIKE
            </button>
          )}
        </div>
        <div className="h-full w-0.5 bg-black"></div>
        <div
  className={`flex justify-center items-center w-1/2 h-full bg-cover bg-center transition duration-1000 ease-in-out ${
    isAdidasExpanded ? "w-full" : ""
  }`}
  style={{
    backgroundImage: `url(${adidasBGimage})`,
    transform: `scale(${isHovered ? 1.1 : 1})`, // Apply scaling to content only, not the background image
    filter: isBackgroundBlurred ? "blur(5px)" : "none", // Apply blur effect only to background
  }}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>

          <img
            src={adidas}
            className={`adidas_logo size-36 cursor-pointer absolute bg-transparent transition duration-1000 ease-in-out ${
              isHovered ? "hover:adidas-hover" : ""
            }`}
            onClick={handleAdidasClick}
            alt=""
            style={{ zIndex: 1 }}
          />
          {showAdidasButton && (
            <button
              className="absolute z-10 bottom-1/4 bg-white bg-opacity-25 hover:bg-opacity-50 text-white font-semibold py-2 px-4 rounded-md border shadow-md backdrop-blur-lg"
              onClick={() => setProgress(100)}
            >
              Shop ADIDAS
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
