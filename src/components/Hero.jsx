import React from "react";
import { useState } from "react";
import nike from "../assets/nike.svg";
import adidas from "../assets/adidas.svg";
import nikeBgImage from "../assets/nike.jpg";
import adidasBgImage from "../assets/adidas.jpg";
import LoadingBar from "react-top-loading-bar";

function Hero() {

  const [progress, setProgress] = useState(0);


  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <LoadingBar
          color="white"
          style={{ height: "3px" }}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        {/*<div className="black_overlay"></div>*/}
        <div className="black_overlay_top2bottom"></div>
        <h1
          className= "absolute top-0 left-0 right-0 text-2xl font-bold font-Monsterrat text-center text-white z-10 mt-8">
          CHOOSE YOUR ULTIMATE FOOTBALL BRAND
        </h1>
        <div className="w-full h-full flex">
          <div className="w-1/2 h-full flex justify-center items-center">
            <img
              src={nikeBgImage}
              alt="Nike background image"
              className="w-full h-full object-cover"
            />
            <img src={nike} className="absolute size-40 z-20" alt="nike logo" />
          </div>
          <div className="h-full bg-black w-0.5"></div>
          <div className="w-1/2 h-full flex justify-center items-center">
            <img
              src={adidasBgImage}
              alt="Adidas background image"
              className="w-full h-full object-cover"
            />
            <img src={adidas} className="absolute size-36 z-20" alt="adidas logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
