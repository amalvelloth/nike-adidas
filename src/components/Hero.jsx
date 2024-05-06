import React from "react";
import { useState } from "react";
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

  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <LoadingBar
          color="white"
          style={{ height: "3px",borderRadius: "1rem" }}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <div className="black_overlay"></div>
        <div className="black_overlay_top2bottom"></div>
        <h1
          className={`absolute top-0 left-0 right-0 text-2xl font-bold font-Monsterrat text-center text-white z-10 mt-8 transition duration-1000 ease-in-out ${
            isHovered ? "blur-sm" : ""
          }`}
        >
          CHOOSE YOUR ULTIMATE FOOTBALL BOOTS
        </h1>

        <div className="flex w-full h-full">
          <div
            className={`w-${
              isNikeExpanded ? "full" : "1/2"
            } flex justify-center items-center relative overflow-hidden transition-width duration-500`}
            onClick={handleNikeClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className={`bg-cover bg-center w-full h-full transition duration-1000 ease-in-out ${
                isBackgroundBlurred ? "blur-md" : ""
              }`}
              style={{
                backgroundImage: `url(${nikeBGimage})`,
                filter: isHovered ? "blur(3px)" : "none",
                transform: isHovered ? "scale(1.1)" : "scale(1)",
              }}
            ></div>
            <img
              src={nike}
              className={`nike_logo size-40 cursor-pointer absolute bg-transparent transition duration-1000 ease-in-out ${
                isHovered ? "hover:nike-hover" : ""
              }`}
              alt=""
              style={{ zIndex: 1 }}
            />
            {showNikeButton && (
              <button
              className="absolute z-10 bottom-1/4 bg-white bg-opacity-25 hover:bg-opacity-50 text-white font-semibold py-2 px-4 rounded-md border shadow-md backdrop-blur-lg"
              onClick={() => {
                setProgress(10); 
                setTimeout(() => {
                  setProgress(100); 
                }, 100);
              }}
            >
              Shop NIKE
            </button>
            )}
          </div>
          <div className="h-full w-0.5 bg-black"></div>
          <div
            className={`w-${
              isAdidasExpanded ? "full" : "1/2"
            } flex justify-center items-center relative overflow-hidden transition-width duration-500`}
            onClick={handleAdidasClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className={`bg-cover bg-center w-full h-full transition duration-1000 ease-in-out ${
                isBackgroundBlurred ? "blur-md" : "" // Apply background blur conditionally
              }`}
              style={{
                backgroundImage: `url(${adidasBGimage})`,
                filter: isHovered ? "blur(3px)" : "none",
                transform: isHovered ? "scale(1.1)" : "scale(1)",
              }}
            ></div>
            <img
              src={adidas}
              className={`adidas_logo size-36 cursor-pointer absolute bg-transparent transition duration-1000 ease-in-out ${
                isHovered ? "hover:adidas-hover" : ""
              }`}
              alt=""
              style={{ zIndex: 1 }}
            />
            {showAdidasButton && (
              <button
              className="absolute z-10 bottom-1/4 bg-white bg-opacity-25 hover:bg-opacity-50 text-white font-semibold py-2 px-4 rounded-md border shadow-md backdrop-blur-lg"
              onClick={() => {
                setProgress(10);
                setTimeout(() => {
                  setProgress(100);
                }, 100);
              }}
            >
              Shop ADIDAS
            </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
