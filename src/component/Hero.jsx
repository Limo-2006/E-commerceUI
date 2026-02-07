import React from 'react';
import EhomeLogo from "../assets/ehome.png";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row border border-gray-400">
      
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-start px-4 sm:px-12 py-6 sm:py-0">
        
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
          OUR BESTSELLERS
        </p>
        
        <h1 className="font-prata text-2xl sm:text-4xl lg:text-5xl font-normal mt-2 leading-snug sm:leading-relaxed">
          DISCOVER YOUR <br /> SIGNATURE STYLE
        </h1>
        
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Explore Timeless Collections
        </p>
        
        <button className="mt-4 sm:mt-5 px-5 py-2 sm:px-6 sm:py-3 bg-[#008080] text-white font-semibold text-sm sm:text-base rounded-md hover:bg-teal-600 transition-colors w-max">
          SHOP NOW
        </button>
      </div>

      {/* Hero Image */}
      <div className="w-full sm:w-1/2 flex items-center justify-center">
        <img
          src={EhomeLogo}
          alt="Hero Banner"
          className="w-full max-w-xs sm:max-w-md lg:h-120  h:auto  object-contain"
        />
      </div>

    </div>
  );
};

export default Hero;
