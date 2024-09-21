"use client"

import React, { useState } from 'react';

const ServiceCard = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-72  h-40 md:h-72 lg:w-[400px] bg-gradient-to-br from-BrandPurple rounded-lg cursor-pointer overflow-hidden hover:scale-110 hover:from-black transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full flex flex-col items-center justify-center p-4 transition-all duration-400 ease-in">
        <h3 className={` text-md md:text-2xl lg:text-4xl text-center mb-4 transition-all duration-300 ease-in-out ${isHovered ? 'transform -translate-y-3' : ''}`}>
          {title}
        </h3>
        <p className={`text-center font-thin md:text-xl lg:text-2xl font-serif transition-all duration-300 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;