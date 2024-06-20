import React from "react";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar'
import BackgroundImage from '/assets/Background.png'
import MobileBackground from '/assets/MobileBackground.jpg'

const Main = () => {
  return (
    
        <div className="relative md:min-h-screen">
          <div className="hidden md:block absolute inset-0">
            <img src={BackgroundImage} alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="md:hidden absolute inset-0">
            <img src={MobileBackground} alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10">
            <div className="fixed z-30 top-3 mx-auto md:left-40 md:right-40">
            <Navbar />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 md:px-16 lg:px-32">
              <div className="text-center md:text-left md:w-1/2 space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold">
                  Welcome To India's First
                  <span className="text-[#4A508E]"> Creator's Marketplace</span>
                </h1>
                <p className="text-xl md:text-2xl">Create your first E-Store @ Zero Cost</p>
                <p className="text-gray-700 hidden md:block">
                  Empower your creativity with Createnary. Showcase, sell, and connect with a global audience effortlessly, turn your products into profits.
                </p>
                <button className="mt-4 px-6 py-2 bg-[#4A508E] text-white font-semibold rounded-lg">
                  Get Started
                </button>
              </div>
              <div className="mt-8 md:mt-4 md:w-1/2 flex justify-center">
                <img src="/assets/Mobile.png" alt="Mobile App" className="w-[100%] h-[100%]" />
              </div>
            </div>
          </div>
        </div>
    
  );
};

export default Main;