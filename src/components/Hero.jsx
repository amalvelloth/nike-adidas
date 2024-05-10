import React, { useState } from "react";
import nike from "../assets/nike.svg";
import adidas from "../assets/adidas.svg";
import nikeBgImage from "../assets/nike.jpg";
import adidasBgImage from "../assets/adidas.jpg";
import LoadingBar from "react-top-loading-bar";

function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [expandNike, setExpandNike] = useState(false);
  const [expandAdidas, setExpandAdidas] = useState(false);
  const [showNikeButton, setShowNikeButton] = useState(false);
  const [showAdidasButton, setShowAdidasButton] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isBackgroundBlurred, setIsBackgroundBlurred] = useState(false);

  const handleNikeClick = () => {
    setExpandNike(true);
    setExpandAdidas(false);
    setShowNikeButton(true);
    setShowAdidasButton(false);
    setIsBackgroundBlurred(true);
  };

  const handleAdidasClick = () => {
    setExpandAdidas(true);
    setExpandNike(false);
    setShowAdidasButton(true);
    setShowNikeButton(false);
    setIsBackgroundBlurred(true);
  };

  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <LoadingBar
          color="white"
          style={{ height: "3px" }}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <div className="black_overlay"></div>
        <div className="black_overlay_top2bottom"></div>
        <h1 className="absolute top-0 left-0 right-0 text-2xl font-bold font-Monsterrat text-center text-white z-10 mt-8">
          CHOOSE YOUR ULTIMATE FOOTBALL BRAND
        </h1>
        <div className="w-full h-full flex">
        <div
  className={`w-1/2 h-full flex justify-center items-center transition-all duration-1000 ease-in-out ${
    expandNike ? "w-full transition-all duration-500 ease-in-out" : ""
  }`}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  <div className="h-full w-full flex justify-center items-center overflow-hidden">
    <img
      src={nikeBgImage}
      alt="Nike background image"
      className={`w-full h-full object-cover transition duration-1000 ease-in-out ${
        isBackgroundBlurred ? "blur-md" : ""
      }`}
      style={{
        transform: isHovered ? "scale(1.1)" : "scale(1)",
      }}
    />
    <div className="absolute m-3 z-20">
      <img
        src={nike}
        className="nike-hover transition duration-500 ease-in-out size-40 z-20"
        alt="nike logo"
        onClick={handleNikeClick}
      />
    </div>
    {showNikeButton && (
      <button
        className="absolute z-10 bottom-1/4 bg-white bg-opacity-25 hover:bg-opacity-50 transition duration-300 text-white font-semibold py-2 px-4 rounded-md border shadow-md backdrop-blur-lg"
        onClick={() => setProgress(100)}
      >
        Shop NIKE
      </button>
    )}
  </div>
</div>

          <div className="h-full bg-black w-0.5"></div>
          <div
            className={`w-1/2 h-full flex justify-center items-center transition-all duration-1000 ease-in-out ${
              expandAdidas
                ? "w-full transition-all duration-500 ease-in-out"
                : ""
            }`}
            onClick={handleAdidasClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="h-full w-full flex justify-center items-center overflow-hidden">
              <img
                src={adidasBgImage}
                alt="Adidas background image"
                className={`w-full h-full object-cover transition duration-1000 ease-in-out ${
                  isBackgroundBlurred ? "blur-md" : ""
                }`}
                style={{
                  transform: isHovered ? "scale(1.1)" : "scale(1)",
                }}
              />
              <div className="absolute m-3 z-20">
                <img
                  src={adidas}
                  className="adidas-hover transition duration-500 ease-in-out size-36 z-20"
                  alt="adidas logo"
                  onClick={handleAdidasClick}
                />
              </div>
              {showAdidasButton && (
                <button
                  className="absolute z-10 bottom-1/4 bg-white bg-opacity-25 hover:bg-opacity-50 transition duration-300 text-white font-semibold py-2 px-4 rounded-md border shadow-md backdrop-blur-lg"
                  onClick={() => setProgress(100)}
                >
                  Shop ADIDAS
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;