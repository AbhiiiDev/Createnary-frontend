import React,{useState} from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import img from "/assets/Link.jpg"





const Link = () => {



  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      id: 1,
      text: "Your audience wants links",
      subText: "Make it easy for them by linking products to every post and video",
      image: "/path/to/your/image.png",
    },
    // Add more slides if needed
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };









  return (
    <>
        <div className="w-full h-full p-4 md:p-10 bg-[#4A508E] flex justify-center items-center">
    <div className="hidden md:block w-12 h-12 relative" />
    <div className="flex-grow flex-shrink-0 flex flex-col justify-center items-center gap-4 md:gap-[50px]">
        <div className="flex flex-col justify-center items-center gap-4 md:gap-[50px] w-full md:h-[540px]">
            <div className="flex flex-col justify-start items-center gap-2 md:gap-[15px] text-center">
                <div className="text-gray-50 text-2xl md:text-[40px] font-bold font-['Urbanist']">Your audience wants links</div>
                <div className="text-gray-50 text-sm md:text-lg font-medium font-['Urbanist']">Make it easy for them by linking products to every post and video</div>
            </div>
            <img className="w-full md:w-[720px] h-auto md:h-[405px] rounded-[35px] shadow" src="/assets/Link.jpg" alt="Sample" />
        </div>
        <div className="px-4 py-2 md:px-6 md:py-4 bg-gray-50 rounded-[18px] flex justify-center items-center">
            <div className="text-zinc-900 text-sm md:text-lg font-semibold font-['Urbanist']">Try for free</div>
        </div>
    </div>
    <div className="hidden md:block w-12 h-12 relative origin-top-left -rotate-180" />
</div>


    </>
  );
};

export default Link;